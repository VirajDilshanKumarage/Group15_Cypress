import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "../hooks";  
import 'cypress-xpath';
import ClickPage from "./click_admin_itemPage";


Given("I am logged in as a valid user", () => {
    LoginAsValidUser();
});

When("I click on the {string} menu item", (menuItem) => {
     ClickPage.clickOnAdminItem(menuItem);
});

Then("the admin page should appear", () => {
    ClickPage.navigateUrl();
    ClickPage.seeSystemUserTag();
});
