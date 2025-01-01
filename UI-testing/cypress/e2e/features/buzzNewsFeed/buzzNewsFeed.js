import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "../hooks";
import BuzzPage from "./buzzPage";

// Reuse the login hook
Given("I am logged in", () => {
  LoginAsValidUser('','');
});

When("I navigate to the Buzz page", () => {
  BuzzPage.navigateToBuzzPage();
});

When("I add a news feed with the text {string}", (feedText) => {
  BuzzPage.addNewsFeed(feedText);
});

Then("I should see the news feed with the text {string} on the Buzz feed", (expectedText) => {
  BuzzPage.verifyNewsFeed(expectedText);
});
