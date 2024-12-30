import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath';
import DeleteEmployee from "./deleteEmployeePage";
const { default: LoginAsValidUser } = require('../hooks');

Given("I am logged in as an admin", () => {
    LoginAsValidUser();
});

When("I Click on PIM item in Dashboard", () => {
    DeleteEmployee.clickPIM();
});

When("I click on Delete button on a row", ()=> {
    DeleteEmployee.clickDeleteButton();
});

When("I click on Delete confirmation button", ()=> {
    DeleteEmployee.clickConfirmationDeleteButton();
});

Then("I see Toast massage with {string}", (message) =>{
    DeleteEmployee.seeToast(message);
});


















 


    
