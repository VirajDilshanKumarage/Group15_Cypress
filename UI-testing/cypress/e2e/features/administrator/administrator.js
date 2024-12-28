
// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// import LoginAsValidUser from '../hooks'; // Import the helper function

// // Define the "I am a valid user" step
// Given('I am a valid user', () => {
//   // Call the helper function to log in
//   LoginAsValidUser();
// });

// When('I navigate to Administrator access page', () => {
//   // Navigate to the Administrator access page
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee');
  
//   // Ensure the Admin Access page container exists, wait for it to load
//   cy.get('.orangehrm-admin-access-container', { timeout: 10000 }).should('exist');
// });

// When('the Username should be automatically filled', () => {
//   // Verify if the username field is present and disabled
//   cy.get('input[name="username"]').should('be.disabled');
// });

// When('I enter the correct password', () => {
//   // Enter the correct password for the admin
//   cy.get('input[name="password"]').type('admin123', { log: false }); // Hide password
//   cy.get('button[type="submit"]').click();
// });

// Then('I should see Maintenance Purge Record', () => {
//   // Check if the URL contains the Maintenance Purge Record page URL
//   cy.url().should('include', '/web/index.php/maintenance/purgeEmployee');
  
//   // Explicitly wait for the breadcrumb to contain the correct text
//   cy.get('.oxd-topbar-header-breadcrumb', { timeout: 10000 }).should('contain.text', 'MaintenancePurge Records');
  
//   // Verify if the page's content exists
//   cy.get('.orangehrm-card-container').should('exist');
// }
// );



// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// import LoginAsValidUser from '../hooks'; // Import the helper function

// // Define the "I am a valid user" step
// Given('I am a valid user', () => {
//   // Call the helper function to log in
//   LoginAsValidUser();
// });

// When('I navigate to the Administrator access page', () => {
//   // Navigate to the Administrator access page
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee');
  
//   // Ensure the Admin Access page container exists, wait for it to load
//   cy.get('.orangehrm-admin-access-container', { timeout: 10000 }).should('exist');
// });

// When('the Username is automatically filled', () => {
//   // Verify if the username field is present and disabled
//   cy.get('input[name="username"]').should('be.disabled');
// });

// When('I enter the correct password', () => {
//   // Enter the correct password for the admin
//   cy.get('input[name="password"]').type('admin123', { log: false }); // Hide password
//   cy.get('button[type="submit"]').click();
// });

// When('I enter an incorrect password', () => {
//   // Enter an incorrect password for the admin
//   cy.get('input[name="password"]').type('incorrectPassword123', { log: false }); // Hide password
//   cy.get('button[type="submit"]').click();
// });

// Then('I should see an error message saying "Invalid credentials"', () => {
//   // Check if the error message is displayed
//   cy.get('.oxd-input-group').should('contain.text', 'Invalid credentials');
// });

// When('I leave the password field empty', () => {
//   // Clear the password field and try submitting
//   cy.get('input[name="password"]').clear();
//   cy.get('button[type="submit"]').click();
// });
// Then('I should see an error message saying "Required"', () => {
//   // Check if the "Required" error message is displayed for the password field
//   cy.get('.oxd-input-group').should('contain.text', 'Required');
// });

// // When('I leave the password field empty', () => {
// //   // Leave the password field empty
// //   cy.get('input[name="password"]').should('have.value', '').and('be.visible');
// //   cy.get('button[type="submit"]').click();
// // });

// Then('I should see Maintenance Purge Record', () => {
//   // Check if the URL contains the Maintenance Purge Record page URL
//   cy.url().should('include', '/web/index.php/maintenance/purgeEmployee');
  
//   // Explicitly wait for the breadcrumb to contain the correct text
//   cy.get('.oxd-topbar-header-breadcrumb', { timeout: 10000 }).should('contain.text', 'MaintenancePurge Records');
  
//   // Verify if the page's content exists
//   cy.get('.orangehrm-card-container').should('exist');
// });

// // Then('I should see an error message saying {string}', (errorMessage) => {
// //   // Check if the error message is visible and contains the correct text
// //   cy.get('.oxd-alert-content--error', { timeout: 20000 }).should('contain.text', errorMessage).and('be.visible');
// // });






// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// import LoginAsValidUser from '../hooks'; // Import the helper function to handle login

// // Scenario 1: Admin enters the correct password
// Given('I am a valid user', () => {
//   // Your helper function for logging in as a valid user
//   LoginAsValidUser();
// });

// When('I navigate to the Administrator access page', () => {
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee');
//   // Wait for the Admin Access page to load
//   cy.get('.orangehrm-admin-access-container', { timeout: 10000 }).should('exist');
// });

// When('the Username is automatically filled', () => {
//   // Ensure the username field is disabled, meaning it's automatically filled
//   cy.get('input[name="username"]').should('be.disabled');
// });

// When('I enter the correct password', () => {
//   // Enter the correct admin password and submit the form
//   cy.get('input[name="password"]').type('admin123', { log: false }); // Hide password in logs
//   cy.get('button[type="submit"]').click();
// });

// Then('I should see Maintenance Purge Record', () => {
//   // Check if the URL contains the Maintenance Purge Record page URL
//   cy.url().should('include', '/web/index.php/maintenance/purgeEmployee');
//   // Verify the breadcrumb contains "Maintenance/Purge Record"
//   cy.get('.oxd-topbar-header-breadcrumb').should('contain.text', 'Maintenance/Purge Record');
//   // Ensure the page's content container exists
//   cy.get('.orangehrm-card-container').should('exist');
// });


// // Scenario 2: Admin enters an incorrect password
// When('I enter an incorrect password', () => {
//   // Enter an incorrect password for admin login
//   cy.get('input[name="password"]').type('wrongpassword123', { log: false }); // Hide password in logs
//   cy.get('button[type="submit"]').click();
// });

// Then('I should see an error message saying "Invalid credentials"', () => {
//   // Check if the error message is displayed
//   cy.get('.oxd-input-group').should('contain.text', 'Invalid credentials');
// });


// // Scenario 3: Admin does not enter a password
// When('I leave the password field empty', () => {
//   // Clear the password field and try submitting
//   cy.get('input[name="password"]').clear();
//   cy.get('button[type="submit"]').click();
// });

// Then('I should see an error message saying "Required"', () => {
//   // Check if the "Required" error message is displayed for the password field
//   cy.get('.oxd-input-group').should('contain.text', 'Required');
// });


import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginAsValidUser from '../hooks'; // Import the helper function

// Define the "I am a valid user" step
Given('I am a valid user', () => {
  // Call the helper function to log in
  LoginAsValidUser();
});

When('I navigate to the Administrator access page', () => {
  // Navigate to the Administrator access page
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee');
  
  // Ensure the Admin Access page container exists, wait for it to load
  cy.get('.orangehrm-admin-access-container', { timeout: 10000 }).should('exist');
});

When('the Username is automatically filled', () => {
  // Verify if the username field is present and disabled
  cy.get('input[name="username"]').should('be.disabled');
});

When('I enter the correct password', () => {
  // Enter the correct password for the admin
  cy.get('input[name="password"]').type('admin123', { log: false }); // Hide password
  cy.get('button[type="submit"]').click();
});

When('I enter an incorrect password', () => {
  // Enter an incorrect password for the admin
  cy.get('input[name="password"]').type('incorrectPassword123', { log: false }); // Hide password
  cy.get('button[type="submit"]').click();
});

Then('I should see an error message saying "Invalid credentials"', () => {
  // Check if the error message is displayed
  cy.get('.oxd-alert--error').should('contain.text', 'Invalid credentials');
});



When('I leave the password field empty', () => {
  // Clear the password field and try submitting
  cy.get('input[name="password"]').clear();
  cy.get('button[type="submit"]').click();
});

Then('I should see an error message saying "Required"', () => {
  // Check if the "Required" error message is displayed for the password field
  cy.get('.oxd-input-group').should('contain.text', 'Required');
});

Then('I should see Maintenance Purge Record', () => {
  // Check if the URL contains the Maintenance Purge Record page URL
  cy.url().should('include', '/web/index.php/maintenance/purgeEmployee');
  
  // Explicitly wait for the breadcrumb to contain the correct text
  cy.get('.oxd-topbar-header-breadcrumb', { timeout: 10000 }).should('contain.text', 'MaintenancePurge Records');
  
  // Verify if the page's content exists
  cy.get('.orangehrm-card-container').should('exist');
});



// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// import LoginAsValidUser from '../hooks'; // Import the helper function

// // Define the "I am a valid user" step
// Given('I am a valid user', () => {
//   // Call the helper function to log in
//   LoginAsValidUser();
// });

// When('I navigate to the Administrator access page', () => {
//   // Navigate to the Administrator access page
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee');
  
//   // Ensure the Admin Access page container exists, wait for it to load
//   cy.get('.orangehrm-admin-access-container', { timeout: 10000 }).should('exist');
// });

// When('the Username is automatically filled', () => {
//   // Verify if the username field is present and disabled
//   cy.get('input[name="username"]').should('be.disabled');
// });

// When('I enter the correct password', () => {
//   // Enter the correct password for the admin
//   cy.get('input[name="password"]').type('admin123', { log: false }); // Hide password
//   cy.get('button[type="submit"]').click();
// });

// When('I enter an incorrect password', () => {
//   // Enter an incorrect password for the admin
//   cy.get('input[name="password"]').type('incorrectPassword123', { log: false }); // Hide password
//   cy.get('button[type="submit"]').click();
// });

// When('I leave the password field empty', () => {
//   // Leave the password field empty
//   cy.get('input[name="password"]').should('have.value', ''); // Ensure it's empty
//   cy.get('button[type="submit"]').click();
// });

// Then('I should see Maintenance Purge Record', () => {
//   // Check if the URL contains the Maintenance Purge Record page URL
//   cy.url().should('include', '/web/index.php/maintenance/purgeEmployee');
  
//   // Explicitly wait for the breadcrumb to contain the correct text
//   cy.get('.oxd-topbar-header-breadcrumb', { timeout: 10000 }).should('contain.text', 'Maintenance Purge Records');
  
//   // Verify if the page's content exists
//   cy.get('.orangehrm-card-container').should('exist');
// });

// Then('I should see an error message saying {string}', (errorMessage) => {
//   // Check if the error message appears on the page
//   cy.get('.oxd-input-field-error').should('contain.text', errorMessage);
// });
