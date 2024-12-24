import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let baseUrl;
let response;
let bookId;

// Background step
Given('the base API URL is {string}', (url) => {
    baseUrl = url;
});

// Scenario: Fetch all books successfully
When('I send a GET request to the base API endpoint with valid admin credentials', () => {
    cy.request({
        method: 'GET',
        url: baseUrl,
        auth: {
            username: 'admin',
            password: 'password'
        }
    }).then((res) => {
        response = res;
    });
});

Then('the response status code should be {int}', (statusCode) => {
    expect(response.status).to.eq(statusCode);
});

Then('the response body should be an array', () => {
    expect(response.body).to.be.an('array');
});

// Scenario: Fetch a specific book by ID successfully
Given('the book ID is {int}', (id) => {
    bookId = id;
});

When('I send a GET request to the base API endpoint with the book ID and valid admin credentials', () => {
    cy.request({
        method: 'GET',
        url: `${baseUrl}/${bookId}`,
        auth: {
            username: 'admin',
            password: 'password'
        }
    }).then((res) => {
        response = res;
    });
});

Then('the response body should contain the book details with the given ID', () => {
    expect(response.body).to.have.property('id', bookId);
    expect(response.body).to.have.property('title');
    expect(response.body).to.have.property('author');
});

// Scenario: Fetch a non-existing book by ID
Then('the response body should be {string}', (message) => {
    expect(response.body).to.eq(message);
});
