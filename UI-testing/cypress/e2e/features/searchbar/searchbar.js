import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Searchbar from './searchbarPage';
import LoginAsValidUser from '../hooks';


Given("I am a valid user", () => {
    LoginAsValidUser('',''); 
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