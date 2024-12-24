const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const TAB = '#account_summary_tab'
const ERROR_MESSAGE = '.alert-error'

class LoginPage {

    static visit(){
        cy.visit(URL); 
    }

    static enterUserName(userName){
        cy.get(USERNAME).type(userName);
    }

    static enterPassword(password){
        cy.get(PASSWORD).type(password); 
    }

    static submit(){
        cy.get(SUBMIT_BUTTON).should("exist").click(); 
    }

    static seeHomePage(){
        cy.get(TAB).should("be.visible"); 
    }
     
    static getErrorMessage(error) {
        cy.get(ERROR_MESSAGE).contains(error);
    }

}

export default LoginPage