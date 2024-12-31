Feature: Check Search bar

Scenario: Correct element check
    Given I am a valid user
    When I navigate to the search bar
    And I enter correct element "Admin"
    Then I should see filtered element "Admin"
    
 Scenario: Incorrect element check
    Given I am a valid user
    When I navigate to the search bar
    And I enter correct element "bnbdnwbnbwn"
    Then I should not see filtered element "bnbdnwbnbwn"

Scenario: Case Sensivity Check
    Given I am a valid user
    When I navigate to the search bar
    And I enter correct element "daShboard"
    Then I should see filtered element "Dashboard"

