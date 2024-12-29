// view.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../login/loginPage";
import ViewPage from "./viewPage";

Given("I am on the login page", () => {
  LoginPage.visit();
});

When("I enter username with {string}", (username) => {
  LoginPage.enterUserName(username);
});

When("I enter password with {string}", (password) => {
  LoginPage.enterPassword(password);
});

When("I click on submit button", () => {
  LoginPage.submit();
});

Then("I should see the home page", () => {
  LoginPage.seeHomePage();
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
