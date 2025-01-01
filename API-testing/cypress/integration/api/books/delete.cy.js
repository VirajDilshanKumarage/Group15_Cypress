describe('DELETE API Tests', () => {
    const baseUrl = 'http://localhost:7081/api/books';
    const adminCredentials = { username: 'admin', password: 'password' };
    const userCredentials = { username: 'user', password: 'password' };

    // Test0: delete a book without authentication
    it('Should not allow to delete without authentication', () => {
        const bookId = 6; // Book ID to delete
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/${bookId}`,
            failOnStatusCode: false
        }).then((response) => {
            cy.log('Response:', response);
            if (response.status === 200) {
                cy.log('Bug Detected: Deletion succeeded without authentication.');
            }
            expect(response.status).to.eq(401);
        });
    });
    
    // Test1: delete a book as admin
    it('Should delete a book successfully (Admin)', () => {
        const bookId = 6; // book ID to delete
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/${bookId}`,
            auth: adminCredentials,
            failOnStatusCode: false 
        }).then((response) => {
            cy.log('Response:', response);           
            if (response.status === 403) {                
                cy.log('Bug Detected: Admin is forbidden from deleting the book.');
            }
            expect(response.status).to.eq(200);
        });
    });

    // Test2: delete a non-existing book as admin
    it('Should return 404 for deleting a non-existing book (Admin)', () => {
        const invalidBookId = 999; 
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/${invalidBookId}`,
            auth: adminCredentials,
            failOnStatusCode: false
        }).then((response) => {
            cy.log('Response:', response);
            if (response.status !== 404) {
                if (response.status === 403) {
                    cy.log('Bug Detected: Admin is forbidden from deleting the book.');
                }
                else {
                cy.log('Bug Detected: Incorrect status code for non-existing book.');
                }
            }            
            expect(response.status).to.eq(404);
        });
    });

    // Test3: delete attempt by user
    it('Should not allow a user to delete a book (User)', () => {
        const bookId = 6;
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/${bookId}`,
            auth: userCredentials,
            failOnStatusCode: false
        }).then((response) => {
            cy.log('Response:', response);
            if (response.status === 200) {
                cy.log('Bug Detected: User is able to delete the book.');
            }
            expect(response.status).to.eq(401);
        });
    });
});
