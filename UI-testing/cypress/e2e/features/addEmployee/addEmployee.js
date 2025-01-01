import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath';
import AddEmployee from "./addEmployeePage";
import 'cypress-file-upload';
const { default: LoginAsValidUser } = require('../hooks');

Given("I am logged in as an admin", () => {
    LoginAsValidUser('','');
});

When("I Click on PIM item in Dashboard", ()=> {
    AddEmployee.clickPIM();
});

When("I click on Add button", ()=>{
    AddEmployee.clickAddButton();
});

When("I enter First name with {string}", (firstName) => {
    AddEmployee.enterFirstName(firstName);
});

When("I enter Middle name with {string}", (middleName) => {
    AddEmployee.enterMiddleName(middleName);
});

When("I enter Last name with {string}", (lastName) => {
    AddEmployee.enterLastName(lastName);
});

When("I enter Employee ID with {string}", (empID) => {
    AddEmployee.enterEmpID(empID);  
});

When("I add Image with file path {string}", (filePath) => {
    AddEmployee.addImage(filePath);
});

When("I click on Save button", () => {
    AddEmployee.clickSave();
});

Then("I see Toast massage with {string}", (message) =>{
   AddEmployee.seeToast(message);
});

 


    
