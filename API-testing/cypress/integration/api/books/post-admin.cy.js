describe('API Tests for /api/books', () => {

  const apiUrl = 'http://localhost:7081/api/books';

  const credentials = {
    username: 'admin',
    password: 'password'
  }

  const bookPayload = {
    // id: 8,
    title: 'Borukaraya',
    author: 'Martin wickramasingha',
  }

  it('should successfully create a book (201)', () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      auth: {
        username: credentials.username,
        password: credentials.password
      },
      body: bookPayload
    }).then((response) => {
      // expect(response.status).to.eq(201);
      // expect(response.body).to.have.property('id');
      // expect(response.body).to.have.property('title', book.title);
      // expect(response.body).to.have.property('author', book.author);
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq(bookPayload.title);
      expect(response.body.author).to.eq(bookPayload.author);
    })
  })


  it('should return 400 for missing mandatory parameters', () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      auth: {
        username: credentials.username,
        password: credentials.password,
      },
      body: {
        author: "Missing Title",          // Missing title
      },
      failOnStatusCode: false, // Prevent Cypress from failing on 4xx or 5xx errors
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Invalid | Empty Input Parameters in the Request');
    })
  })



})