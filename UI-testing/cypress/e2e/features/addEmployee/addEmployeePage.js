const XPATH_PIM_ITEM = '//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a';

class AddEmployee {

    static clickPIM(){
        cy.xpath(XPATH_PIM_ITEM).should('be.visible').click(); 
    }

    static clickPIM(){
        cy.xpath(XPATH_PIM_ITEM).should('be.visible').click(); 
    }

    

}

export default AddEmployee