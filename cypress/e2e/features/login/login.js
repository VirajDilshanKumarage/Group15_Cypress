import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "./loginPage";



Given("I am on the login page", () => {
  LoginPage.visit();
});

When("I enter valid credentials", () => {
  LoginPage.enterUserName('username');
  LoginPage.enterPassword('password');
  LoginPage.submit();

});

Then("I should see the home page", () => {
  LoginPage.seeHomePage();
}); 
    
