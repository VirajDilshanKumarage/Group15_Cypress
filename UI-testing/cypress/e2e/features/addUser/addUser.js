import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-xpath';

Given('I am logged in as an admin', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get('[name="username"]').type('Admin'); // Replace with actual locator
  cy.get('[name="password"]').type('admin123'); // Replace with actual locator
  cy.get('button[type="submit"]').click(); // Replace with actual locator
});

Given('I am on the "System Users" page', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
});

When('I click the "Add" button', () => {
    cy.get('button.oxd-button--secondary').contains('Add').click();
    // Replace with actual Add button locator
});

When('I fill in the form with the following details:', (dataTable) => {
  const details = dataTable.rowsHash();

  // Click the dropdown to expand options
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]/i')
  .then((elements) => {
    if (elements.length === 0) {
      throw new Error('No matching options found for "Admin".');
    } else {
      cy.wrap(elements).click();
    }
  });


  cy.get('.--position-bottom')  // Correct the class name here
  .should('be.visible')  // Ensure the dropdown options are visible
  .contains('Admin')  // Match the option text you're looking for
  .click();  // Click the option

  // Wait for the dropdown options to render
  cy.xpath('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text-input', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Fill in the rest of the form
  cy.get('input[name="employeeName"]').type(details['Employee Name']); // Replace with actual locator
  cy.get('input[name="username"]').type(details['Username']); // Replace with actual locator
  cy.get('select[name="status"]').select(details['Status']); // Replace with actual locator
  cy.get('input[name="password"]').type(details['Password']); // Replace with actual locator
  cy.get('input[name="confirmPassword"]').type(details['Confirm Password']); // Replace with actual locator
});


When('I click the "Save" button', () => {
  cy.get('button[type="submit"]').click(); // Replace with actual Save button locator
});

Then('I should see {string} in the list of system users', (username) => {
  cy.get('table').contains('td', username).should('be.visible');
});
