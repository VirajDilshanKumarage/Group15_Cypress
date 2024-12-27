import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "../hooks";


// Reuse the login hook
Given("I am logged in", () => {
  LoginAsValidUser(); // Login handled by the hook
});

When("I navigate to the Buzz page", () => {
  cy.get('a[href="/web/index.php/buzz/viewBuzz"]').click();
});


When("I add a news feed with the text {string}", (feedText) => {
  cy.get('.oxd-buzz-post-input').type(feedText); 
  cy.get('button[type="submit"]').click(); 
});


Then("I should see the news feed with the text {string} on the Buzz feed", (expectedText) => {
  cy.get('.orangehrm-buzz-post-body').should("contain.text", expectedText);
});
