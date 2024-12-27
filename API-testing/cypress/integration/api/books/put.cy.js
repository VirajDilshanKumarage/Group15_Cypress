describe('API Testing: PUT APIs', () => {
  const baseUrl = 'http://localhost:7081/api/books';
  
  it('Should fetch a specific book by ID successfully', () => {
    const bookId = 1; // Replace with a valid ID from your dataset
    cy.request({
        method: 'GET',
        url: `${baseUrl}/${bookId}`,
        auth: {
            username: 'admin', // Username for authentication
            password: 'password' // Password for authentication
        }
    }).then((response) => {
        expect(response.status).to.eq(200); // Validate status code
        it('Should fetch a specific book by ID successfully', () => {
          const bookId = 1; // Replace with a valid ID from your dataset
          cy.request({
              method: 'GET',
              url: `${baseUrl}/${bookId}`,
              auth: {
                  username: 'admin', // Username for authentication
                  password: 'password' // Password for authentication
              }
          }).then((response) => {
              expect(response.status).to.eq(200); // Validate status code
              expect(response.body).to.have.property('id', bookId); // Validate ID
              expect(response.body).to.have.property('title'); // Validate title exists
              expect(response.body).to.have.property('author'); // Validate author exists
          });
      });
      it('Should fetch a specific book by ID successfully', () => {
        const bookId = 1; // Replace with a valid ID from your dataset
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${bookId}`,
            auth: {
                username: 'admin', // Username for authentication
                password: 'password' // Password for authentication
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Validate status code
            expect(response.body).to.have.property('id', bookId); // Validate ID
            expect(response.body).to.have.property('title'); // Validate title exists
            expect(response.body).to.have.property('author'); // Validate author exists
        });
    });
    it('Should fetch a specific book by ID successfully', () => {
      const bookId = 1; // Replace with a valid ID from your dataset
      cy.request({
          method: 'GET',
          url: `${baseUrl}/${bookId}`,
          auth: {
              username: 'admin', // Username for authentication
              password: 'password' // Password for authentication
          }
      }).then((response) => {
          expect(response.status).to.eq(200); // Validate status code
          expect(response.body).to.have.property('id', bookId); // Validate ID
          expect(response.body).to.have.property('title'); // Validate title exists
          expect(response.body).to.have.property('author'); // Validate author exists
      });
  });
  it('Should fetch a specific book by ID successfully', () => {
    const bookId = 1; // Replace with a valid ID from your dataset
    cy.request({
        method: 'GET',
        url: `${baseUrl}/${bookId}`,
        auth: {
            username: 'admin', // Username for authentication
            password: 'password' // Password for authentication
        }
    }).then((response) => {
        expect(response.status).to.eq(200); // Validate status code
        expect(response.body).to.have.property('id', bookId); // Validate ID
        expect(response.body).to.have.property('title'); // Validate title exists
        expect(response.body).to.have.property('author'); // Validate author exists
    });
});
it('Should fetch a specific book by ID successfully', () => {
        const bookId = 3; // Replace with a valid ID from your dataset
        cy.request({
            method: 'GET',
            url: `${baseUrl}/${bookId}`,
            auth: {
                username: 'admin', // Username for authentication
                password: 'password' // Password for authentication
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Validate status code
            expect(response.body).to.have.property('id', bookId); // Validate ID
            expect(response.body).to.have.property('title'); // Validate title exists
            expect(response.body).to.have.property('author'); // Validate author exists
        });
    });
expect(response.body).to.have.property('id', bookId); // Validate ID
        expect(response.body).to.have.property('title'); // Validate title exists
        expect(response.body).to.have.property('author'); // Validate author exists
    });
});

  it('Should update a book and verify the update with GET', () => {
      const bookId = 1; // Replace with a valid ID from your dataset
      const updatedBook = {
          id: bookId, // Ensure the ID is included in the body for the server
          title: 'Updated Book Title',
          author: 'Updated Author Name',
      };

      // Step 1: Send a PUT request to update the book
      cy.request({
          method: 'PUT',
          url: `${baseUrl}/${bookId}`,
          auth: {
              username: 'admin',
              password: 'password',
          },
          body: updatedBook,
      }).then((putResponse) => {
          // Step 2: Validate the PUT response
          expect(putResponse.status).to.eq(200);
          expect(putResponse.body).to.have.property('id', bookId);
          expect(putResponse.body).to.have.property('title', updatedBook.title);
          expect(putResponse.body).to.have.property('author', updatedBook.author);

          // Step 3: Send a GET request to verify the update
          cy.request({
              method: 'GET',
              url: `${baseUrl}/${bookId}`,
              auth: {
                  username: 'admin',
                  password: 'password',
              },
          }).then((getResponse) => {
              // Step 4: Validate the GET response
              expect(getResponse.status).to.eq(200);
              expect(getResponse.body).to.have.property('id', bookId);
              expect(getResponse.body).to.have.property('title', updatedBook.title);
              expect(getResponse.body).to.have.property('author', updatedBook.author);
          });
      });
  });



   // Test to update a book by ID
//    it('Should update a specific book by ID successfully', () => {
//     const bookId = 3; 
//     const updatedBook = {
//         "title": "String hoppers 05", 
//         "author": "String bug" 
//     };

//     cy.request({
//         method: 'PUT',
//         url: `${baseUrl}/${bookId}`,
//         auth: {
//             username: 'admin', // Username for authentication
//             password: 'password' // Password for authentication
//         },
//         body: updatedBook // Updated data to send in the request
//     }).then((response) => {
//         expect(response.status).to.eq(200); // Validate status code
//         expect(response.body).to.have.property('id', updatedBook.bookId); // Validate ID
//         expect(response.body).to.have.property('title', updatedBook.title); // Validate updated title
//         expect(response.body).to.have.property('author', updatedBook.author); // Validate updated author
//     });
// });

});
