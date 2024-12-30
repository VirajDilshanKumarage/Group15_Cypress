describe('POST Request Test for Resource Creation', () => {
    const baseUrl = 'http://localhost:7081/api/books';
    const uniqueTitle = `Test Title ${Date.now()}`;
    const uniqueauthor = `Test author ${Date.now()}`;
 
 it('should successfully create a resource with mandatory fields', () => {
        // Request body with mandatory parameters
        const requestBody = {
            title: uniqueTitle,  // Mandatory parameter
            author:uniqueauthor,  // Mandatory parameter
        };

        // Send POST request with authentication
        cy.request({
            method: 'POST',
            url: baseUrl,  // Use baseUrl here
            body: requestBody,
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'user',  // Replace with actual username
                password: 'password',  // Replace with actual password
            }
        }).then((response) => {
            // Assert the response status code is 201 (Created)
            expect(response.status).to.eq(201);

            // Verify the response body (if applicable)
            expect(response.body).to.have.property('id'); // Assuming the response includes a generated ID
            expect(response.body.title).to.eq(requestBody.title);
            expect(response.body.author).to.eq(requestBody.author);
        });
    });   
       
    it('should fail if a mandatory field is missing (title or author)', () => {
        
    
        // Request body missing 'author'
        const missingAuthorRequestBody = {
            title: 'Test Title43', // 'author' is missing
        };
    
        // Request body missing 'title'
        const missingTitleRequestBody = {
            author: 'Test Author43', // 'title' is missing
        };
    
        // Test case: Missing 'author'
        cy.request({
            method: 'POST',
            url: baseUrl,
            body: missingAuthorRequestBody,
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'user',
                password: 'password',
            },
            failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            // Assert the response status code is 400 (Bad Request)
            expect(response.status).to.eq(400);
    
            // Assert the response contains an appropriate error message for missing 'author'
// Assert that the response body is either undefined, empty, or contains 'Unauthorized'
expect(response.body).to.satisfy(
    (body) => body === undefined || body === '' || body === 'Title is required'
);

        });
    
        // Test case: Missing 'title'
        cy.request({
            method: 'POST',
            url: baseUrl,
            body: missingTitleRequestBody,
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'user',
                password: 'password',
            },
            failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            // Assert the response status code is 400 (Bad Request)
            expect(response.status).to.eq(400);
    
            // Assert the response contains an appropriate error message for missing 'title'
            expect(response.body).to.satisfy((body) => body === undefined || body === ''|| body === 'Author is Required');
        });
    });
    
it('should fail if a role is unauthorized', () => {
    
    
    const requestBody = {
        title: uniqueTitle,  // Mandatory parameter
        author:uniqueauthor,  // Mandatory parameter
    };

    // Send POST request with authentication
    cy.request({
        method: 'POST',
        url: baseUrl,
        body: requestBody,
        headers: {
            'Content-Type': 'application/json',
        },
        auth: {
            username: 'seller', // Unauthorized role
            password: 'password', // Replace with actual password
        },
        failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
    }).then((response) => {
        // Assert the response status code is 401 (Unauthorized)
        expect(response.status).to.eq(401);
        
        // Assert that the response body is either undefined or empty
        expect(response.body).to.satisfy((body) => body === undefined || body === ''|| body === 'UnAuthorized');
    });
});

it('should fail if two books have the same title', () => {
   

  
    const requestBody = {
        title: 'Game of the thrones',  // Mandatory parameter
        author:uniqueauthor,  // Mandatory parameter
    };

    // First POST request to create the first book
    cy.request({
        method: 'POST',
        url: baseUrl,
        body: requestBody,
        headers: {
            'Content-Type': 'application/json',
        },
        auth: {
            username: 'user', // Replace with actual username
            password: 'password', // Replace with actual password
        },
        failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
    }).then((response) => {
        // Assert the response status code is 201 (Created) for the first book
        expect(response.status).to.eq(201);

        // Second POST request to create a book with the same title (this should fail)
        cy.request({
            method: 'POST',
            url: baseUrl,
            body: requestBody,
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'user', // Replace with actual username
                password: 'password', // Replace with actual password
            },
            failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            // Assert the response status code is 208 (Already Reported), as books with the same title cannot be created
            expect(response.status).to.eq(208);

            // Adjust assertion for response body as a plain stringn
            expect(response.body).to.eq('Book Already Exists'); // Adjust based on your actual API response
        });
    });
});


});   









