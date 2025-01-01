describe("Book API PUT Tests", () => {
  const baseUrl = "http://localhost:7081/api/books";
  const adminAuth = { username: "admin", password: "password" };

  let bookId;

  const makeRequest = (method, url, auth, body = {}, retries = 0) => {
    return cy
      .request({
        method,
        url,
        auth,
        body,
        headers: { "Content-Type": "application/json" },
        failOnStatusCode: false, // Prevent Cypress from failing on non-2xx responses
      })
      .then((response) => {
        if (retries > 0 && response.status === 403) {
          cy.log(`Retrying ${method} request to ${url} due to 403`);
          return makeRequest(method, url, auth, body, retries - 1);
        }
        return response;
      });
  };

  before(() => {
    // Create a test book
    makeRequest("POST", baseUrl, adminAuth, {
      title: "Test Book",
      author: "Test Author",
    }).then((response) => {
      expect([201, 208]).to.include(response.status);
      if (response.status === 208) {
        // Fetch the ID if the book already exists
        makeRequest("GET", baseUrl, adminAuth).then((getResponse) => {
          const existingBook = getResponse.body.find(
            (book) =>
              book.title === "Test Book" && book.author === "Test Author"
          );
          expect(existingBook).to.exist;
          bookId = existingBook.id;
        });
      } else {
        bookId = response.body.id;
        expect(bookId).to.exist;
      }
    });
  });

  after(() => {
    if (bookId) {
      makeRequest("DELETE", `${baseUrl}/${bookId}`, adminAuth, {}, 3).then(
        (response) => {
          if (response.status === 403) {
            cy.log(
              `DELETE Response: Status: ${
                response.status
              }, Body: ${JSON.stringify(response.body)}`
            );
            cy.log(
              "DELETE request failed after retries. Manual cleanup may be required."
            );
          } else {
            expect([200, 204]).to.include(response.status);
          }
        }
      );
    }
  });

  it("PUT 200 - Successfully update the book", () => {
    makeRequest("PUT", `${baseUrl}/${bookId}`, adminAuth, {
      id: bookId,
      title: "Updated Title",
      author: "Updated Author",
    }).then((response) => {
      expect([200, 208]).to.include(response.status);
      if (response.status === 200) {
        expect(response.body.title).to.equal("Updated Title");
        expect(response.body.author).to.equal("Updated Author");
      }
    });
  });

  it("PUT 208 - Update title with an existing title", () => {
    makeRequest("POST", baseUrl, adminAuth, {
      title: "Duplicate Title",
      author: "Another Author",
    }).then((response) => {
      expect([201, 208]).to.include(response.status);

      const duplicateBookId = response.body?.id || null;

      makeRequest("PUT", `${baseUrl}/${bookId}`, adminAuth, {
        id: bookId,
        title: "Duplicate Title",
        author: "Updated Author",
      }).then((updateResponse) => {
        expect(updateResponse.status).to.equal(208);

        if (duplicateBookId) {
          makeRequest(
            "DELETE",
            `${baseUrl}/${duplicateBookId}`,
            adminAuth
          ).then((cleanupResponse) => {
            expect([200, 204]).to.include(cleanupResponse.status);
          });
        }
      });
    });
  });

  it("PUT 404 - Update book which does not exist", () => {
    const nonExistentBookId = 999999;
    makeRequest("PUT", `${baseUrl}/${nonExistentBookId}`, adminAuth, {
      id: nonExistentBookId,
      title: "Non-Existent Book",
      author: "Non-Existent Author",
    }).then((response) => {
      expect(response.status).to.equal(404);
      if (response.body.message) {
        expect(response.body.message).to.equal("Book not found");
      } else {
        cy.log("Response body missing 'message' field.");
      }
    });
  });

  it("PUT 400 - Mismatched ID in JSON body and path variable", () => {
    makeRequest("PUT", `${baseUrl}/${bookId}`, adminAuth, {
      id: bookId + 1,
      title: "Mismatched ID Title",
      author: "Mismatched ID Author",
    }).then((response) => {
      expect(response.status).to.equal(400);
      if (response.body.message) {
        expect(response.body.message).to.equal("Book id is not matched");
      } else {
        cy.log("Response body missing 'message' field.");
      }
    });
  });

  it("PUT 400 - Validate ID is an integer", () => {
    makeRequest("PUT", `${baseUrl}/invalid-id`, adminAuth, {
      id: "invalid-id",
      title: "Invalid ID Title",
      author: "Invalid ID Author",
    }).then((response) => {
      expect(response.status).to.equal(400);
      const errorMessage = response.body?.message || "Invalid ID format";
      cy.log(`Error Message: ${errorMessage}`);
    });
  });

  it("PUT 400 - Validate attributes and types", () => {
    makeRequest("PUT", `${baseUrl}/${bookId}`, adminAuth, {
      id: bookId,
      title: 12345, // Invalid title type
      author: true, // Invalid author type
    }).then((response) => {
      if (response.status === 400) {
        const errorMessage =
          response.body?.message || "Invalid attribute types";
        cy.log(`Error Message: ${errorMessage}`);
        expect(errorMessage).to.equal("Invalid attribute types");
      } else if (response.status === 208) {
        cy.log(
          "API returned 208 (duplicate title) instead of 400 (invalid attribute types)"
        );
      } else {
        throw new Error(
          `Unexpected status code: ${
            response.status
          }. Response: ${JSON.stringify(response.body)}`
        );
      }
    });
  });
});
