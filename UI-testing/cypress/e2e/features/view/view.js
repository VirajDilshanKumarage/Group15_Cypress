// view.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "../hooks";  
import ViewPage from "./viewPage";

Given("I am on the login page", () => {
  LoginAsValidUser('','');
});

When("I navigate to the {string} page", () => {
  ViewPage.navigateToPerformancePage();
});

When("I click on {string} tab", (tabName) => {
  ViewPage.clickTab(tabName);
});

When("I click the {string} button for a tracker", () => {
  ViewPage.clickViewButton();
});

Then("I should see the tracker page with the title {string}", (title) => {
  ViewPage.verifyTrackerPage(title);
});
