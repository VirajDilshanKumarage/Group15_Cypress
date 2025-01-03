describe("POST-ADMIN API Tests", () => {
  const apiUrl = "http://localhost:7081/api/books";
  const loginCredentials = {
    username: "admin",
    password: "password",
  }

  const wrongLoginCredentials = {
    username: "wrong-username",
    password: "wrong-password",
  }


  /*------------- Create a book -------------*/

  it("should successfully create a book (201)", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: loginCredentials,
      body: {
        id: 1,
        title: "Hathpana",
        author: "Martin wickramasingha",
      },
    }).then((response) => {
      expect(response.status).to.eq(201); 
      expect(response.body).to.have.property("id"); 
      expect(response.body.title).to.eq('Hathpana');
      expect(response.body.author).to.eq('Martin wickramasingha');
    });
  });

  /*------------- Missing Value -------------*/

  it("should return 400 for missing mandatory parameters", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: loginCredentials,
      body: {}, 
      failOnStatusCode: false, // Prevent Cypress from failing on 4xx or 5xx errors
    }).then((response) => {
      expect(response.status).to.eq(400); 
      expect(response.body).to.eq("Mandatory parameters should not be null"); 
    });
  });

  /*------------- Adding book without ID -------------*/

  it("should return 201 for adding book without ID", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: loginCredentials,
      body: {
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
      }, 
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.eq(201); 
      expect(response.body.title).to.eq("Treasure Island");
      expect(response.body.author).to.eq("Robert Louis Stevenson");
    });
  });


  /*------------- Incorrect Authentication -------------*/

  it("should return 401 for incorrect authentication", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: wrongLoginCredentials, // Use wrong login credentials
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
    cy.request({
      method: "POST",
      url: apiUrl,
      auth:loginCredentials,
      body: {
        // id: 1,
        title: "Hathpana",                // add the same book
        author: "Martin wickramasingha",
      },
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.eq(208); 
      expect(response.body).to.eq("Book Already Exists"); 
    });
  });


  /*------------- Adding book without title and author -------------*/

  it("should return 400 for adding book without title and author", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: loginCredentials,
      body: {
        id: 2,
        title: "",
        author: "",
      },
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.eq(400); 
    });
  });

  // /*------------- Adding Book With Existing ID -------------*/

  it("should return 400 for adding book with existing ID", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      auth: loginCredentials,
      body: {
        id: 1,
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
      },
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.eq(400); 
    });
  });

});
