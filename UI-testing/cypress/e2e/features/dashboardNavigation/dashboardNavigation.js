import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "../hooks.js"; // Reuse the login hook

// Define the tabs to be tested
const tabs = [
  { id: "Admin", selector: ".oxd-main-menu-item--name", title: "Admin" },
  { id: "PIM", selector: ".oxd-main-menu-item--name", title: "PIM" },
  { id: "Leave", selector: ".oxd-main-menu-item--name", title: "Leave" },
  { id: "Time", selector: ".oxd-main-menu-item--name", title: "Time" },
  {
    id: "Recruitment",
    selector: ".oxd-main-menu-item--name",
    title: "Recruitment",
  },
  { id: "My Info", selector: ".oxd-main-menu-item--name", title: "My Info" },
  {
    id: "Performance",
    selector: ".oxd-main-menu-item--name",
    title: "Performance",
  },
  {
    id: "Dashboard",
    selector: ".oxd-main-menu-item--name",
    title: "Dashboard",
  },
  {
    id: "Directory",
    selector: ".oxd-main-menu-item--name",
    title: "Directory",
  },
  {
    id: "Maintenance",
    selector: ".oxd-main-menu-item--name",
    title: "Maintenance",
  },
  { id: "Claim", selector: ".oxd-main-menu-item--name", title: "Claim" },
  { id: "Buzz", selector: ".oxd-main-menu-item--name", title: "Buzz" },
];

// Reuse the login hook
Given("I am logged in as a valid user", () => {
  LoginAsValidUser();
});

// Navigate through each tab in the dashboard
When("I navigate to each tab in the dashboard", () => {
  tabs.forEach((tab) => {
    cy.get(tab.selector)
      .contains(tab.id) // Match tab by name
      .should("exist") // Ensure the tab exists
      .click(); // Click the tab

    // Handle the Maintenance tab 
    if (tab.id === "Maintenance") {
      cy.get('.oxd-form').should("be.visible"); // Ensure the modal is visible
      cy.get('.oxd-button--ghost').contains("Cancel").should("be.visible").click(); // Click the cancel button
    }

    cy.wait(1000); // Allow the page to load
  });
});

// Verify that all tabs load successfully
Then("all tabs should load successfully", () => {
  tabs.forEach((tab) => {
    cy.get(tab.selector).contains(tab.id).should("be.visible"); // Ensure the tab is visible
  });
});



