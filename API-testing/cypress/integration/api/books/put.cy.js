describe('API Testing: PUT APIs', () => {
  const baseUrl = 'http://localhost:7081/api/books';
  
  it('Should update a book or handle various response scenarios', () => {
    const bookId = 4;
    const updatedBook = {
        id: bookId,
        title: 'Updated Book 6',
        author: 'Updated Author Name',
    };

    cy.request({
        method: 'PUT',
        url: `${baseUrl}/${bookId}`,
        auth: {
            username: 'admin',
            password: 'password',
        },
        body: updatedBook,
        failOnStatusCode: false, // Prevent test failure for non-2xx responses
    }).then((putResponse) => {
        if (putResponse.status === 400 && putResponse.body === 'Invalid book ID') {
            cy.log('The book could not be updated because the provided ID is invalid.');
            expect(putResponse.body).to.eq('Invalid book ID');
        }
        else if (putResponse.status === 208 && putResponse.body === 'Book Already Exists') {
            cy.log('The book could not be updated because it already exists.');
            expect(putResponse.body).to.eq('Book Already Exists');
        }
        else if (putResponse.status === 200) {
            expect(putResponse.body).to.have.property('id', bookId);
            expect(putResponse.body).to.have.property('title', updatedBook.title);
            expect(putResponse.body).to.have.property('author', updatedBook.author);

            cy.request({
                method: 'GET',
                url: `${baseUrl}/${bookId}`,
                auth: {
                    username: 'admin',
                    password: 'password',
                },
            }).then((getResponse) => {
                expect(getResponse.status).to.eq(200);
                expect(getResponse.body).to.have.property('id', bookId);
                expect(getResponse.body).to.have.property('title', updatedBook.title);
                expect(getResponse.body).to.have.property('author', updatedBook.author);
            });
        } 
        else {
            throw new Error(`Unexpected status code or message: ${putResponse.status}, ${putResponse.body}`);
        }
    });
  });
})