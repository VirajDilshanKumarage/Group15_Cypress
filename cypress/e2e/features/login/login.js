import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("http://zero.webappsecurity.com/login.html"); // Visit Sauce Demo login page
});

When("I enter valid credentials", () => {
  cy.get('#user_login') // Username input field
    .type('username'); // Use a valid username provided by Sauce Demo

  cy.get('#user_password') // Password input field
    .type('password'); // Use the provided password

  cy.get('input[name="submit"]') // Login button
    .should("exist")
    .click(); // Click the login button
});

Then("I should see the home page", () => {

  cy.get("#account_summary_tab").should("be.visible"); // Validate that the products are visible
}); 
    
