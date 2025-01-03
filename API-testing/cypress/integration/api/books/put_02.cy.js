describe("PUT_02 API Tests", () => {
  const baseUrl = "http://localhost:7081/api/books";
  const adminAuth = { username: 'admin', password: 'password' };
  const userAuth = { username: 'user', password: 'password' };

  let bookId = 1;
  let mismatchBookId = bookId + 1;


  
  it("PUT Call with Basic Auth", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/${bookId}`,
      auth: userAuth,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: bookId,
        title: "St",
        author: "String",
      },
      failOnStatusCode: false,
      timeout: 4000,
    }).then((response) => {
      expect(response.status).to.equal(403);
      if (response.body.message) {
        expect(response.body.message).to.equal("Book id is not matched");
      } else {
        cy.log("Response body missing 'message' field.");
      }
    });
  });


  it("PUT 400 - Mismatched ID in JSON body and path variable", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/${bookId}`,
      auth: adminAuth,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: mismatchBookId,
        title: "Test book", // Invalid title type
        author: "true", // Invalid author type
      },
      failOnStatusCode: false,
      timeout: 4000,
    }).then((response) => {
      expect(response.status).to.equal(400);
      if (response.body.message) {
        expect(response.body.message).to.equal("Book id is not matched");
      } else {
        cy.log("Response body missing 'message' field.");
      }
    });
  });




  it("PUT 400 - Validate attributes and types", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/${bookId}`,
      auth: adminAuth,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: bookId,
        title: 12345, // Invalid title type
        author: true, // Invalid author type
      },
      failOnStatusCode: false,
      timeout: 4000,
    }).then((response) => {
      expect(response.status).to.equal(400);
      if (response.body.message) {
        expect(response.body.message).to.equal("Book id is not matched");
      } else {
        cy.log("Response body missing 'message' field.");
      }
    });
  });

});