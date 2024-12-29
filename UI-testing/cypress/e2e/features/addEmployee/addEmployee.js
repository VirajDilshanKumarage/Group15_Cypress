import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath';
import AddEmployee from "./addEmployeePage";
import 'cypress-file-upload';
const { default: LoginAsValidUser } = require('../hooks');

Given("I am logged in as an admin", () => {
    LoginAsValidUser();
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

When("I click on Save button", () => {
    // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[1]/div/div[2]/div/button').click();
    // cy.get('.oxd-icon-button.oxd-icon-button--solid-main.employee-image-action').click();

    // const filePath = './cypress/e2e/features/addEmployee/photo.png';
    // cy.get('input.oxd-file-input').selectFile(filePath, { force: true });
    AddEmployee.clickSave();
});

Then("I see Toast massage with {string}", (message) =>{
   AddEmployee.seeToast(message);
});

 


    
