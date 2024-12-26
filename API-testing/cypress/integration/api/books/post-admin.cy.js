describe("API Tests for /api/books", () => {
  const apiUrl = "http://localhost:7081/api/books";


  // /*------------- Create a book -------------*/

  it("should successfully create a book (201)", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: {
        username: "admin",
        password: "password",
      },
      body: {
        id: 1,
        title: "Hathpana",
        author: "Martin wickramasingha",
      },
    }).then((response) => {
      expect(response.status).to.eq(201); //check the status code equal to 201
      expect(response.body).to.have.property("id"); //check the response body has id
      expect(response.body.title).to.eq('Hathpana');
      expect(response.body.author).to.eq('Martin wickramasingha');
    });
  });

  /*------------- Missing Value -------------*/

  it("should return 400 for missing mandatory parameters", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: {
        username: "admin",
        password: "password",
      },
      body: {}, // Empty object to simulate missing mandatory parameters
      failOnStatusCode: false, // Prevent Cypress from failing on 4xx or 5xx errors
    }).then((response) => {
      expect(response.status).to.eq(400); // Check for 400 Bad Request
      expect(response.body).to.eq("Mandatory parameters should not be null"); // Validate updated error message
    });
  });

  /*------------- Adding book without ID -------------*/

  it("should return 201 for adding book without ID", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: {
        username: "admin",
        password: "password",
      },
      body: {
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
      }, 
      failOnStatusCode: false, // Prevent Cypress from failing on 4xx or 5xx errors
    }).then((response) => {
      expect(response.status).to.eq(201); //check the status code equal to 201
      expect(response.body.title).to.eq("Treasure Island");
      expect(response.body.author).to.eq("Robert Louis Stevenson");
    });
  });


  /*------------- Incorrect Authentication -------------*/

  it("should return 401 for incorrect authentication", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: {
        username: "wrong-username", // Use an incorrect username and password
        password: "wrong-password",
      },
      body: {
        title: "Peter Pan",
        author: "James Matthew Barrie",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  // /*------------- Book Already Exists -------------*/

  it("should return 208 Already Reported when adding a book with the same title", () => {
    // Attempt to add the same book
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: {
        username: "admin",
        password: "password",
      },
      body: {
        // id: 1,
        title: "Hathpana",
        author: "Martin wickramasingha",
      },
      failOnStatusCode: false, // Prevent automatic test failure on non-2xx status
    }).then((response) => {
      expect(response.status).to.eq(208); // Check for 208 status
      expect(response.body).to.eq("Book Already Exists"); // Validate error message
    });
  });


  /*------------- Adding book without title and author -------------*/

  it("should return 400 for adding book without title and author", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: {
        username: "admin",
        password: "password",
      },
      body: {
        id: 2,
        title: "",
        author: "",
      },
      failOnStatusCode: false, // Prevent Cypress from failing on 4xx or 5xx errors
    }).then((response) => {
      expect(response.status).to.eq(400); // Check for 400 Bad Request
    });
  });

  // /*------------- Adding Book With Existing ID -------------*/

  it("should return 400 for adding book with existing ID", () => {
    // Attempt to add the book with existing ID
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: {
        username: "admin",
        password: "password",
      },
      body: {
        id: 1,
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
      },
      failOnStatusCode: false, // Prevent automatic test failure on non-2xx status
    }).then((response) => {
      expect(response.status).to.eq(400); // Check for 400 status
    });
  });

});
