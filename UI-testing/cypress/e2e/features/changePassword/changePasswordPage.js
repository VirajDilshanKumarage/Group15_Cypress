const LOCATORS = {
    profileDropdown: '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/i',
    changePasswordLink: '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[3]/a',
    currentPasswordInput: '/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/input',
    newPasswordInput: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input',
    confirmPasswordInput: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input',
    saveButton: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]',
    toastMessage: '[class*="toast"]',
    logoutButtonXpath: '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a'
};

class ChangePassword {

    static clickDropdown() {
        cy.xpath(LOCATORS.profileDropdown).click();
    }

    static clickChangePassword() {
        cy.xpath(LOCATORS.changePasswordLink).click();
    }

    static typeCurrentPassword(currentPassword) {
        cy.xpath(LOCATORS.currentPasswordInput).type(currentPassword);
    }

    static typeNewPassword(newPassword) {
        cy.xpath(LOCATORS.newPasswordInput).type(newPassword);
    }

    static confirmPassword(confirmNewPassword) {
        cy.xpath(LOCATORS.confirmPasswordInput).type(confirmNewPassword);
    }

    static clickSaveButton() {
        cy.xpath(LOCATORS.saveButton).click();
    }

    static verifyToastMessage(message) {
        cy.get(LOCATORS.toastMessage)
            .should('be.visible')
            .and('contain', message);
    }

    static clickOnLogout(){
        cy.xpath(LOCATORS.logoutButtonXpath).click();
    }
}

export default ChangePassword;
