describe('GET API Tests', () => {
    const baseUrl = 'http://localhost:7081/api/books';
    const adminCredentials = { username: 'admin', password: 'password' };
    const userCredentials = { username: 'user', password: 'password' };
    
   //Tset get all books - admin role
    it('Should fetch all books successfully for admin', () => {
        cy.request({
            method: 'GET',
            url: baseUrl,
            auth: adminCredentials,
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.be.an('array'); 
        });
    });

  
   //Test get book by ID - admin 
    it('Should fetch a specific book by ID successfully for admin', () => {
        const bookId = 3; 
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${bookId}`,
            auth: adminCredentials,
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.have.property('id', bookId); 
            expect(response.body).to.have.property('title'); 
            expect(response.body).to.have.property('author'); 
        });
    });

    //Test for fetching a non-existing book - admin
    it('Should return 404 for a non-existing book ID for admin', () => {
        const invalidBookId = 999; 
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${invalidBookId}`,
            auth: adminCredentials,
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx responses
        }).then((response) => {
            expect(response.status).to.eq(404); 
            cy.log('Response Body:', response.body); 
            expect(response.body).to.eq('Book not found');
        });
    });
    



    //Test get all books for user role
    it('Should fetch all books successfully for user', () => {
        cy.request({
            method: 'GET',
            url: baseUrl,
            auth: userCredentials,
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.be.an('array'); 
        });
    });

    //Test to fetch a book by ID
    it('Should fetch a specific book by ID successfully for user', () => {
        const bookId = 3; 
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${bookId}`,
            auth: userCredentials,
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.have.property('id', bookId); 
            expect(response.body).to.have.property('title'); 
            expect(response.body).to.have.property('author'); 
        });
    });

    // Test for fetching a non-existing book
    it('Should return 404 for a non-existing book ID for user', () => {
        const invalidBookId = 999; 
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${invalidBookId}`,
            auth: userCredentials,
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(404); 
            cy.log('Response Body:', response.body); 
            expect(response.body).to.eq('Book not found');
        });
    });
});
