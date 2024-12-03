import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the Sauce Demo login page", () => {
  cy.visit("https://www.saucedemo.com/"); // Visit Sauce Demo login page
  cy.url().should("include", "saucedemo.com"); // Verify URL
});

When("I enter valid credentials", () => {
  cy.get("#user-name") // Username input field
    .should("exist")
    .type("standard_user"); // Use a valid username provided by Sauce Demo

  cy.get("#password") // Password input field
    .should("exist")
    .type("secret_sauce"); // Use the provided password

  cy.get("#login-button") // Login button
    .should("exist")
    .click(); // Click the login button
});

Then("I should see the Sauce Demo products page", () => {
  cy.url().should("include", "/inventory.html"); // Check if redirected to the products page
  cy.get(".inventory_list").should("be.visible"); // Validate that the products are visible
});
