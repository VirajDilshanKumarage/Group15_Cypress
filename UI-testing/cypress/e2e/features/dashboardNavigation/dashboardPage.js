class DashboardPage {
    
    TAB_SELECTOR = ".oxd-main-menu-item--name";
    MAINTENANCE_MODAL = ".oxd-form";
    MAINTENANCE_CANCEL_BUTTON = '.oxd-button--ghost:contains("Cancel")';
  
    constructor() {
      this.tabs = [
        { id: "Admin", title: "Admin" },
        { id: "PIM", title: "PIM" },
        { id: "Leave", title: "Leave" },   // missing in testing site
        { id: "Time", title: "Time" },
        { id: "Recruitment", title: "Recruitment" },
        { id: "My Info", title: "My Info" },
        { id: "Performance", title: "Performance" },
        { id: "Dashboard", title: "Dashboard" },
        { id: "Directory", title: "Directory" },
        { id: "Maintenance", title: "Maintenance" },
        { id: "Claim", title: "Claim" },
        { id: "Buzz", title: "Buzz" },
      ];
    }
  
    navigateToTab(tabId) {
      cy.get(this.TAB_SELECTOR).contains(tabId).click();
      if (tabId === "Maintenance") {
        cy.get(this.MAINTENANCE_MODAL).should("be.visible");
        cy.get(this.MAINTENANCE_CANCEL_BUTTON).click();
      }
    }
  
    verifyTabLoaded(tabId) {
      cy.get(this.TAB_SELECTOR).contains(tabId).should("be.visible");
    }
  }
  
  export default new DashboardPage();
  