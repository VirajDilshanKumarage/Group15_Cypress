import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "../hooks";  
import 'cypress-xpath';
import ChangePassword from "./changePasswordPage";

const TOAST = '[class*="toast"]'


Given("I am logged in as a valid user", () => {
    LoginAsValidUser();
});

When("I click on dropdown of the profile", () => {
    ChangePassword.clickDropdown();
});

When("I click on item called change password", () => {
    ChangePassword.clickChangePassword();
});

When("I type the current password as {string}", (currentPassword) => {
    ChangePassword.typeCurrentPassword(currentPassword);
});

When("I type new password as {string}", (newPassword) => {
    ChangePassword.typeNewPassword(newPassword);
});

When("I confirm the password with {string}", (confirmNewPassword) => {
    ChangePassword.confirmPassword(confirmNewPassword);
});

When("I click on save button", () => {
    ChangePassword.clickSaveButton();
});

Then("I see the tost message with {string}", (message) => {
    ChangePassword.verifyToastMessage(message);
});