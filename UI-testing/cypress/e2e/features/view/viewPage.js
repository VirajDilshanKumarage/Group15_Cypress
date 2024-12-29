// viewPage.js
class ViewPage {
  static navigateToPerformancePage() {
    // Navigate to the Performance menu
    cy.contains("Performance", { timeout: 10000 }) // Match menu by visible text
      .should("be.visible")
      .scrollIntoView()
      .click();
  }

  static clickTab(tabName) {
    // Click on a visible tab by its name
    cy.contains(tabName).should("be.visible").click();
  }

  static clickViewButton() {
    // Locate and click the "View" button in the trackers list
    cy.contains("button", "View").should("be.visible").click();
  }

  static verifyTrackerPage(title) {
    // Verify the title of the tracker page
    cy.get("h5.oxd-text--h5.orangehrm-employee-tracker-header-title")
      .should("be.visible")
      .and("contain.text", title);
  }
}

export default ViewPage;
