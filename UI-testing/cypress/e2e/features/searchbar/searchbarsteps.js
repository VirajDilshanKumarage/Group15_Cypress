const DASHBOARD = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';
const SEARCH_BAR = '.oxd-input--active';
const FILTERED_ELEMENT = '.oxd-main-menu';

class AdminAccessPage {
    static visit() {
        // Visit the Admin Page
        cy.visit(DASHBOARD);
    }
    static enterSearchTerm(term) {
        cy.get(SEARCH_BAR).clear().type(term);
    }

    static verifyFilteredElement(expectedElement) {
        cy.get(FILTERED_ELEMENT).should('contain.text', expectedElement);
    }

    static verifyNoFilteredElement(expectedElement) {
        cy.get(FILTERED_ELEMENT).should('not.contain.text', expectedElement);
    }
}

export default AdminAccessPage;
