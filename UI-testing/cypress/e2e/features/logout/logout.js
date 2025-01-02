import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LogoutPage from "./logoutPage";

Given("I am logged into the application", () => {
  LogoutPage.loginAsValidUser();
});

When("I click on the logout button", () => {
  LogoutPage.clickLogoutButton();
});

Then("I should see the login page", () => {
  LogoutPage.seeLoginPage();
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore specific errors that are not critical for test flow
  if (err.message.includes("Cannot read properties of undefined")) {
    return false; // Prevent test failure
  }
  throw err; // Let other errors fail the test
});
