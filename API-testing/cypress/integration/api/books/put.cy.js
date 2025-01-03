describe('PUT API Tests', () => {
    const baseUrl = 'http://localhost:7081/api/books';
    
    // Test case 01- Update an existing book
    it('Should update a book or handle various response scenarios', () => {
      const bookId = 1;
      const updatedBook = {
          id: bookId,
          title: 'Nothing Book1',
          author: 'Mr. Author',
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
          else if (putResponse.status === 409 && putResponse.body === 'Book Already Exists') {
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
  
    // Test case 02- Update a non-existing book
    it('Should handle non-existent book ID', () => {
      const nonExistentId = 12323;
      const updatedBook = {
          id: nonExistentId,
          title: 'Nothing Book 2',
          author: 'Mr. Author',
      };
  
      cy.request({
          method: 'PUT',
          url: `${baseUrl}/${nonExistentId}`,
          auth: {
              username: 'admin',
              password: 'password',
          },
          body: updatedBook,
          failOnStatusCode: false,
      }).then((putResponse) => {
          expect(putResponse.status).to.eq(404);
          expect(putResponse.body).to.eq('Book not found');
      });
    });
  
      // Test case 03 - invalid Id
    it('Invalid book ID (Not Integer)', () => {
      const invalidId = 'abc';
      const updatedBook = {
          id: invalidId,
          title: 'Nothing Book',
          author: 'Mr. Author',
      };
  
      cy.request({
          method: 'PUT',
          url: `${baseUrl}/${invalidId}`,
          auth: {
              username: 'admin',
              password: 'password',
          },
          body: updatedBook,
          failOnStatusCode: false,
      }).then((putResponse) => {
          expect(putResponse.status).to.eq(400);
          expect(putResponse.body).to.eq(undefined);
      });
    });
  
    // Test case 04 - Missing required fields
    it('Missing required fields', () => {
      const bookId = 4;
      const invalidBook = {
          id: bookId,
          title : '',
          author : ''
      };
  
      cy.request({
          method: 'PUT',
          url: `${baseUrl}/${bookId}`,
          auth: {
              username: 'admin',
              password: 'password',
          },
          body: invalidBook,
          failOnStatusCode: false,
      }).then((putResponse) => {
          expect(putResponse.status).to.eq(400);
      });
    });
    // Test case 05 - could not update the book
    it('could not update the author with chainging title ', () => {
        const updatedBookId = 1;
        const updatedBook = {
          id: updatedBookId,
          title: 'Nothing Book1',
          author: 'Mr. Author zero',
        };
    
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/${updatedBookId}`,
            auth: {
                username: 'admin',
                password: 'password',
            },
            body: updatedBook,
            failOnStatusCode: false,
        }).then((putResponse) => {
            expect(putResponse.status).to.eq(200);
        });
      });
      
  });