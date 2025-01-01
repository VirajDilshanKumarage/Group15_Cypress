import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Searchbar from './searchbarsteps';
import LoginAsValidUser from '../hooks';


Given("I am a valid user", () => {
    LoginAsValidUser('',''); // Implement user login logic here
});

When("I navigate to the search bar", () => {
    Searchbar.visit();
});

When("I enter correct element {string}", (element) => {
    Searchbar.enterSearchTerm(element);
});

Then("I should see filtered element {string}", (expectedElement) => {
    Searchbar.verifyFilteredElement(expectedElement);
});

Then("I should not see filtered element {string}", (expectedElement) => {
    Searchbar.verifyNoFilteredElement(expectedElement);
});
