Feature: Buzz news feed functionality

  As a logged-in user
  I want to add a news feed
  So that I can share updates in the Buzz section

  Scenario: Successfully add a news feed
    Given I am logged in
    When I navigate to the Buzz page
    And I add a news feed with the text "Hello OrangeHRM!"
    Then I should see the news feed with the text "Hello OrangeHRM!" on the Buzz feed
