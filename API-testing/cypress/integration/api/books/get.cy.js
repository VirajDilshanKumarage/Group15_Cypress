describe('API Testing: GET APIs', () => {
    const baseUrl = 'http://localhost:7081/api/books';
    const adminUsername = 'admin';
    const adminPassword = 'password';
    const userUsername = 'user';
    const userPassword = 'password';
    
   //Tset get all books - admin role
    it('Should fetch all books successfully', () => {
        cy.request({
            method: 'GET',
            url: baseUrl,
            auth: {
                username: adminUsername, 
                password: adminPassword 
            }
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.be.an('array'); 
        });
    });

  
   //Test get book by ID - admin 
    it('Should fetch a specific book by ID successfully', () => {
        const bookId = 3; 
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${bookId}`,
            auth: {
                username: adminUsername, 
                password: adminPassword 
            }
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.have.property('id', bookId); 
            expect(response.body).to.have.property('title'); 
            expect(response.body).to.have.property('author'); 
        });
    });

    //Test for fetching a non-existing book - admin
    it('Should return 404 for a non-existing book ID', () => {
        const invalidBookId = 999; 
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${invalidBookId}`,
            auth: {
                username: adminUsername, 
                password: adminPassword 
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx responses
        }).then((response) => {
            expect(response.status).to.eq(404); 
            cy.log('Response Body:', response.body); 
            expect(response.body).to.eq('Book not found');
        });
    });
    



    //Test get all books for user role
    it('Should fetch all books successfully', () => {
        cy.request({
            method: 'GET',
            url: baseUrl,
            auth: {
                username: userUsername, 
                password: userPassword
            }
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.be.an('array'); 
        });
    });

    //Test to fetch a book by ID
    it('Should fetch a specific book by ID successfully', () => {
        const bookId = 3; 
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${bookId}`,
            auth: {
                username: userUsername, 
                password: userPassword 
            }
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.have.property('id', bookId); 
            expect(response.body).to.have.property('title'); 
            expect(response.body).to.have.property('author'); 
        });
    });

    // Test for fetching a non-existing book
    it('Should return 404 for a non-existing book ID', () => {
        const invalidBookId = 999; 
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${invalidBookId}`,
            auth: {
                username: userUsername,
                password: userPassword
            },
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(404); 
            cy.log('Response Body:', response.body); 
            expect(response.body).to.eq('Book not found');
        });
    });
});
