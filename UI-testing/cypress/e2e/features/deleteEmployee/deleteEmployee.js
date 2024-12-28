import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath';
import AddEmployee from "../addEmployee/addEmployeePage";
const { default: LoginAsValidUser } = require('../hooks');
const XPATH_ADMIN_ITEM = `//li[contains(@class, 'oxd-main-menu-item-wrapper')]//a[span[text()='Admin']]`;
const TABLE_ROW = '.oxd-table-row'
const TABLE_ROW_CONTAIN ='div[data-v-6c07a142]'
const TABEL_ROW_PARENT = '.oxd-table-row'
const DELETE_BUTTON = '.oxd-icon-button.oxd-table-cell-action-space'
const XPATH_DELETE_BUTTON_IN_CONFIRMATION = '//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]'
const TOAST = '[class*="toast"]'

Given("I am logged in as an admin", () => {
    LoginAsValidUser();
});

When("I Click on PIM item in Dashboard", () => {
    AddEmployee.clickPIM();

    cy.get(TABLE_ROW)
        .contains(TABLE_ROW_CONTAIN, '516')
        .parents(TABEL_ROW_PARENT)
        // .as('targetRow')  
        
        // cy.get('@targetRow') // Access the previously saved alias
        .within(() => {
            cy.get('button:nth-child(2)').should('be.visible').click({ force: true });
        });

    // cy.get(TABLE_ROW)
    //   .contains(TABLE_ROW_CONTAIN, 'patil') // Locate the row containing '0373'
    //   .parents(TABEL_ROW_PARENT) // Find the parent row
    //   .within(() => {
    //       cy.get(DELETE_BUTTON) // Find the delete button within this row
    //         .eq(0) // If there are multiple, target the first one
    //         .click({ force: true }); // Force the click even if the element is not "visible"
    //   });

    // Assert that the confirmation dialog appears (if applicable)
    cy.xpath(XPATH_DELETE_BUTTON_IN_CONFIRMATION).should('be.visible').click();


});

Then("I see Toste massage with {string}", (message) =>{
    cy.get('[class*="toast"]')
        .should('be.visible')
        .and('contain', message);
})


















 


    
