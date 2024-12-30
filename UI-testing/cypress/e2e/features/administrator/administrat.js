import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AdminAccessPage from './administarorsteps';
import LoginAsValidUser from '../hooks'; // A helper function for valid login

Given('I am a valid user', () => {
    LoginAsValidUser();
});

When('I navigate to the Administrator access page', () => {
    AdminAccessPage.visit();
    AdminAccessPage.verifyAdminPageLoaded();
});

When('the Username is automatically filled', () => {
    AdminAccessPage.verifyUsernameIsAutofilled();
});

When('I enter the correct password', () => {
    AdminAccessPage.enterPassword('admin123');
    AdminAccessPage.submit();
});

When('I enter an incorrect password', () => {
    AdminAccessPage.enterPassword('incorrectPassword123');
    AdminAccessPage.submit();
});

Then('I should see an error message saying {string}', (message) => {
    AdminAccessPage.verifyErrorMessage(message);
});

When('I leave the password field empty', () => {
    AdminAccessPage.enterPassword('');
    AdminAccessPage.submit();
});

Then('I should see an error message saying {string}', (message) => {
    AdminAccessPage.verifyRequiredMessage(message);
});

Then('I should see Maintenance Purge Record', () => {
    AdminAccessPage.verifyNavigationToMaintenancePurgeRecord();
});
