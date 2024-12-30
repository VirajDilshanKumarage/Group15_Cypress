class BuzzPage {
    
    BUZZ_MENU = 'a[href="/web/index.php/buzz/viewBuzz"]';
    NEWS_FEED_INPUT = '.oxd-buzz-post-input';
    POST_BUTTON = 'button[type="submit"]';
    NEWS_FEED_TEXT = '.orangehrm-buzz-post-body';
  
    navigateToBuzzPage() {
      cy.get(this.BUZZ_MENU).click();
    }
  
    addNewsFeed(feedText) {
      cy.get(this.NEWS_FEED_INPUT).type(feedText);
      cy.get(this.POST_BUTTON).click();
    }
  
    verifyNewsFeed(expectedText) {
      cy.get(this.NEWS_FEED_TEXT).should("contain.text", expectedText);
    }
  }
  
  export default new BuzzPage();
  