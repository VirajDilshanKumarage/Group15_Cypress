const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
//const XPATH_ADMIN_ITEM = `//li[contains(@class, 'oxd-main-menu-item-wrapper')]//a[span[text()='${menuItem}']]`; 
const SYSTEM_USER_TAG = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]';

class ClickPage {

    static clickOnAdminItem(menuItem){
        cy.xpath(`//li[contains(@class, 'oxd-main-menu-item-wrapper')]//a[span[text()='${menuItem}']]`)
        .should('be.visible')  
        .click();  
    }

    static navigateUrl(){
        cy.url({ timeout: 10000 }).should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers'); 
    }

    static seeSystemUserTag(){
        cy.xpath(SYSTEM_USER_TAG, { timeout: 10000 }).should('be.visible');  
    }
}

export default ClickPage