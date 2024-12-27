const XPATH_ADMIN_ITEM = `//li[contains(@class, 'oxd-main-menu-item-wrapper')]//a[span[text()='Admin']]`;
const TABLE_ROW = '.oxd-table-row'
const TABLE_ROW_CONTAIN ='div[data-v-6c07a142]'
const TABEL_ROW_PARENT = '.oxd-table-row'
const DELETE_BUTTON = '.oxd-icon-button.oxd-table-cell-action-space'
const XPATH_DELETE_BUTTON_IN_CONFIRMATION = '/html/body/div/div[3]/div/div/div/div[3]/button[2]'
const TOAST = '[class*="toast"]'

class ClickPage {

    static clickOnAdminItem(){
        cy.xpath(XPATH_ADMIN_ITEM)
        .should('be.visible')  
        .click();  
    }

    static searchForUserName(username){
        cy.get(TABLE_ROW)
        .contains(TABLE_ROW_CONTAIN, username)
        .parents(TABEL_ROW_PARENT)
        .as('targetRow')    
    }

    static clickDelete(){
        cy.get('@targetRow') // Access the previously saved alias
        .within(() => {
          cy.get(DELETE_BUTTON)
            .eq(0) // Select the delete button
            .click();
        });    
    }

    static clickDeleteOnConfirmation(){
        cy.xpath(XPATH_DELETE_BUTTON_IN_CONFIRMATION).click();   
    }

    static seeToast(message){
        cy.get(TOAST) 
        .should('be.visible')
        .and('contain', message);
    }

}

export default ClickPage