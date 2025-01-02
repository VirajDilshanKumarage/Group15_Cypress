const URL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
const DASHBOARD_MENU = ".oxd-userdropdown-tab"; // Logout dropdown selector
const LOGOUT_BUTTON = "a[role='menuitem'][href*='logout']"; // Logout button selector
const LOGIN_PAGE_URL = "/auth/login";
const LOGIN_PAGE_USERNAME_FIELD = 'input[name="username"]';

class LogoutPage {
  static loginAsValidUser() {
    const username = "Admin";
    const password = "admin123";
    const LOGIN_PAGE_PASSWORD_FIELD = 'input[name="password"]';
    const LOGIN_PAGE_SUBMIT_BUTTON = "button.orangehrm-login-button";
    const DASHBOARD_BREADCRUMB = ".oxd-topbar-header-breadcrumb-module";

    cy.visit(URL);
    cy.url().should("include", LOGIN_PAGE_URL);

    cy.get(LOGIN_PAGE_USERNAME_FIELD).should("be.visible").type(username);
    cy.get(LOGIN_PAGE_PASSWORD_FIELD).should("be.visible").type(password);
    cy.get(LOGIN_PAGE_SUBMIT_BUTTON).should("exist").click();

    cy.get(DASHBOARD_BREADCRUMB, { timeout: 10000 }).should("be.visible");
  }

  static clickLogoutButton() {
    cy.get(DASHBOARD_MENU, { timeout: 10000 }).should("be.visible").click();
    cy.get(LOGOUT_BUTTON, { timeout: 10000 }).should("be.visible").click();
  }

  static seeLoginPage() {
    cy.url().should("include", LOGIN_PAGE_URL);
    cy.get(LOGIN_PAGE_USERNAME_FIELD, { timeout: 10000 }).should("be.visible");
  }
}

export default LogoutPage;
