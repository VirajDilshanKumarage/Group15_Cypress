import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath';
import AddEmployee from "./addEmployeePage";
const { default: LoginAsValidUser } = require('../hooks');

Given("I am logged in as an admin", () => {
    LoginAsValidUser();
});

When("I Click on PIM item in Dashboard", ()=> {
    AddEmployee.clickPIM();
});

When("I click on Add button", ()=>{
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').should('be.visible').click();
});

When("I enter First name with {string}", (firstName) => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input').type(firstName);
});

When("I enter Middle name with {string}", (middleName) => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input').type(middleName);
});

When("I enter Last name with {string}", (lastName) => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input').type(lastName);
});

When("I enter Employee ID with {string}", (empID) => {
    if( empID != ""){
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input').clear();
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input').type(empID);
    }    
});

When("I click on Save button", () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]').click();
});

Then("I see Toste massage with {string}", (message) =>{
    cy.get('[class*="toast"]')
        .should('be.visible')
        .and('contain', message);
})

 


    
