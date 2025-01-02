
const DASHBOARD_MENU = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/i'; // Logout dropdown selector
const LOGOUT_BUTTON = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a';
const LOGIN_PAGE_URL = "/auth/login";
const LOGIN_PAGE_USERNAME_FIELD = 'input[name="username"]';

class LogoutPage {
  static clickLogoutButton() {
    cy.xpath(DASHBOARD_MENU, { timeout: 10000 }).should("be.visible").click();
    cy.xpath(LOGOUT_BUTTON, { timeout: 10000 }).should("be.visible").click();
  }

  static seeLoginPage() {
    cy.url().should("include", LOGIN_PAGE_URL);
    cy.get(LOGIN_PAGE_USERNAME_FIELD, { timeout: 10000 }).should("be.visible");
  }
}

export default LogoutPage;
