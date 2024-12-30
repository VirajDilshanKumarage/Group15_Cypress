const XPATH_PIM_ITEM = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a';
const TABLE_ROW = '.oxd-table-row';
const TABLE_ROW_CONTAIN ='div[data-v-6c07a142]';
const TABEL_ROW_PARENT = '.oxd-table-row';
const XPATH_DELETE_BUTTON_IN_CONFIRMATION = '//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]';
const TOAST = '[class*="toast"]';

class DeleteEmployee {

    static clickPIM(){
        cy.xpath(XPATH_PIM_ITEM).should('be.visible').click(); 
    }

    static clickDeleteButton(){
        cy.get(TABLE_ROW)
        .contains(TABLE_ROW_CONTAIN, '0459')
        .parents(TABEL_ROW_PARENT)
        .within(() => {
            cy.get('button:nth-child(2)').should('be.visible').click({ force: true });
        });
    }

    static clickConfirmationDeleteButton(){
        cy.xpath(XPATH_DELETE_BUTTON_IN_CONFIRMATION).should('be.visible').click();
    }

    static seeToast(message){
        cy.get(TOAST)
        .should('be.visible')
        .and('contain', message);
    }
}

export default DeleteEmployee