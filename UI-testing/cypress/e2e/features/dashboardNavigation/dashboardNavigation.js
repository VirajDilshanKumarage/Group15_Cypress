import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "../hooks";
import DashboardPage from "./dashboardPage";

// Reuse the login hook
Given("I am logged in as a valid user", () => {
  LoginAsValidUser('','');
});

// Navigate through each tab in the dashboard
When("I navigate to each tab in the dashboard", () => {
  DashboardPage.tabs.forEach((tab) => {
    DashboardPage.navigateToTab(tab.id);
    cy.get('.oxd-main-menu-item-wrapper').should('be.visible');
    // cy.wait(1000); // Allow the page to load
  });
});

// Verify that all tabs load successfully
Then("all tabs should load successfully", () => {
  DashboardPage.tabs.forEach((tab) => {
    DashboardPage.verifyTabLoaded(tab.id);
  });
});
