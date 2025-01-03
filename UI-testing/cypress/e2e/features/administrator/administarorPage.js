const ADMIN_PAGE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee';
const USERNAME_FIELD = 'input[name="username"]';
const PASSWORD_FIELD = 'input[name="password"]';
const SUBMIT_BUTTON = 'button[type="submit"]';
const ERROR_MESSAGE = '.oxd-alert--error';
const BREADCRUMB = '.oxd-topbar-header-breadcrumb';
//const CARD_CONTAINER = '.orangehrm-card-container';
const ADMIN_CONTAINER='.orangehrm-admin-access-container';

class AdminAccessPage {
    static visit() {
        cy.visit(ADMIN_PAGE_URL);
    }

    static verifyAdminPageLoaded() {
        cy.get(ADMIN_CONTAINER, { timeout: 10000 }).should('exist');
    }

    static verifyUsernameIsAutofilled() {
        cy.get(USERNAME_FIELD).should('be.disabled');
    }

    static enterPassword(password) {
        cy.get(PASSWORD_FIELD).clear().type(password, { log: false });
    }

    static clearPassword() {
        cy.get(PASSWORD_FIELD).clear();
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click();
    }

    static verifyErrorMessage(message) {
        cy.get(ERROR_MESSAGE).should('contain.text', message);
    }

    static verifyNavigationToMaintenancePurgeRecord() {
        cy.url().should('include', '/web/index.php/maintenance/purgeEmployee');
        cy.get(BREADCRUMB, { timeout: 15000 }).should('contain.text', 'MaintenancePurge Records');
        //cy.get(CARD_CONTAINER).should('exist');
    }
}

export default AdminAccessPage;
