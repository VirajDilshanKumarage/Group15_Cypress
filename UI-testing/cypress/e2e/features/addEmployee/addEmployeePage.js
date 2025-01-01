const XPATH_PIM_ITEM = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a';
const XPATH_ADD_ITEM = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button';
const XPATH_FIRST_NAME = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/div[2]/input';
const XPATH_MIDDLE_NAME = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[2]/div[2]/input';
const XPATH_LAST_NAME = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/div[2]/input';
const XPATH_EMP_ID = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input';
const XPATH_SAVE_ITEM = '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]';
const ADD_IMAGE = 'input.oxd-file-input';
const TOAST = '[class*="toast"]';

class AddEmployee {

    static clickPIM(){
        cy.xpath(XPATH_PIM_ITEM).should('be.visible').click(); 
    }

    static clickAddButton(){
        cy.xpath(XPATH_ADD_ITEM).should('be.visible').click(); 
    }

    static enterFirstName(firstName){
        cy.xpath(XPATH_FIRST_NAME).type(firstName);
    }

    static enterMiddleName(middleName){
        cy.xpath(XPATH_MIDDLE_NAME).type(middleName);
    }

    static enterLastName(lastName){
        cy.xpath(XPATH_LAST_NAME).type(lastName);
    }

    static enterEmpID(empID){
        if( empID != ""){
            cy.xpath(XPATH_EMP_ID).clear();
            cy.xpath(XPATH_EMP_ID).type(empID);
        }
    }

    static addImage(filePath){
        cy.get(ADD_IMAGE).selectFile(filePath, { force: true });
    }

    static clickSave(){
        cy.xpath(XPATH_SAVE_ITEM).click();
    }

    static seeToast(message){
        cy.get(TOAST)
        .should('be.visible')
        .and('contain', message);
    }
}

export default AddEmployee