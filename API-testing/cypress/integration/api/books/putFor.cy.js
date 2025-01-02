describe("HTTP Request", () => {
  it("PUT Call with Basic Auth", () => {
    const username = "user"; // Your username
    const password = "password"; // Your password

    cy.request({
      method: "PUT",
      url: "http://localhost:7081/api/books/1",
      auth: {
        username: username,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: 1,
        title: "St",
        author: "String",
      },
      failOnStatusCode: false, // To prevent Cypress from failing on non-2xx responses
      timeout: 10000, // Set a longer timeout if needed
    })
      .its("status")
      .should("equal", 403); // Adjust to the expected status code
  });
});
