const URL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
const USERNAME = 'input[name="username"]';
const PASSWORD = 'input[name="password"]';
const SUBMIT_BUTTON = "button.orangehrm-login-button";
const DASHBOARD_BREADCRUMB = ".oxd-topbar-header-breadcrumb-module";
const ERROR_MESSAGE = ".oxd-alert-content-text";

class LoginPage {
  static visit() {
    cy.visit(URL);
    cy.url().should("include", "/auth/login"); // Ensure correct page
  }

  static enterUserName(userName) {
    cy.get(USERNAME, { timeout: 10000 }).should("be.visible").type(userName);
  }

  static enterPassword(password) {
    cy.get(PASSWORD, { timeout: 10000 }).should("be.visible").type(password);
  }

  static submit() {
    cy.get(SUBMIT_BUTTON, { timeout: 10000 }).should("exist").click();
  }

  static seeHomePage() {
    cy.get(DASHBOARD_BREADCRUMB, { timeout: 10000 }).should("be.visible");
  }

  static getErrorMessage(error) {
    cy.get(ERROR_MESSAGE, { timeout: 10000 })
      .should("be.visible")
      .and("contain.text", error);
  }
}

export default LoginPage;
