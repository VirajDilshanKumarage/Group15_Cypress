describe('POST-USER API Tests', () => {
    const baseUrl = 'http://localhost:7081/api/books';
    const uniqueTitle = `Test Title ${Date.now()}`;
    const uniqueauthor = `Test author ${Date.now()}`;


    ///////////////////////////////////create request with mandotory field
 
 it('should successfully create a resource with mandatory fields', () => {

        const requestBody = {
            title: uniqueTitle,  
            author:uniqueauthor, 
        };

       cy.request({
            method: 'POST',
            url: baseUrl, 
            body: requestBody,
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'user', 
                password: 'password',
            }
        }).then((response) => {
          
            expect(response.status).to.eq(201);

        
            expect(response.body).to.have.property('id'); 
            expect(response.body.title).to.eq(requestBody.title);
            expect(response.body.author).to.eq(requestBody.author);
        });
    });   

///////////////////////////Author field missing
it('should fail if author field missing', () => {
    
    
    const requestBody = {
        title: uniqueTitle,  
  
    };

    cy.request({
        method: 'POST',
        url: baseUrl,
        body: requestBody,
        headers: {
            'Content-Type': 'application/json',
        },
        auth: {
            username: 'user', 
            password: 'password', 
        },
        failOnStatusCode: false, 
    }).then((response) => {
        
        expect(response.status).to.eq(400);
        expect(response.body).to.satisfy((body) => body === undefined || body === ''|| body === 'Author is required');
    });
});

    //////////////////////////////// title field missing 
    it('should fail if title field missing', () => {
    
    
        const requestBody = {
     
            author:uniqueauthor,  
        };
    
        cy.request({
            method: 'POST',
            url: baseUrl,
            body: requestBody,
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'user', 
                password: 'password', 
            },
            failOnStatusCode: false, 
        }).then((response) => {
            
            expect(response.status).to.eq(400);
            
            
            expect(response.body).to.satisfy((body) => body === undefined || body === ''|| body === 'Title is required');
        });
    });
///////////////////// check role is unauthorized
    
it('should fail if a role is unauthorized', () => {
    
    
    const requestBody = {
        title: uniqueTitle,  
        author:uniqueauthor,  
    };

    cy.request({
        method: 'POST',
        url: baseUrl,
        body: requestBody,
        headers: {
            'Content-Type': 'application/json',
        },
        auth: {
            username: 'seller', 
            password: 'password', 
        },
        failOnStatusCode: false, 
    }).then((response) => {
        
        expect(response.status).to.eq(401);
        
        
        expect(response.body).to.satisfy((body) => body === undefined || body === ''|| body === 'UnAuthorized');
    });
});

///////////////////////////// two books have same title
it('should fail if two books have the same title', () => {
    const requestBody = {
        title: 'Matilda',
        author:uniqueauthor,  
    };

  cy.request({
        method: 'POST',
        url: baseUrl,
        body: requestBody,
        headers: {
            'Content-Type': 'application/json',
        },
        auth: {
            username: 'user',
            password: 'password', 
        },
        failOnStatusCode: false, 
    }).then((response) => {
     
        expect(response.status).to.eq(201);

        cy.request({
            method: 'POST',
            url: baseUrl,
            body: requestBody,
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: 'user', 
                password: 'password', 
            },
            failOnStatusCode: false, 
        }).then((response) => {
       
            expect(response.status).to.eq(208);
           expect(response.body).to.eq('Book Already Exists');
        });
    });
});


});   









