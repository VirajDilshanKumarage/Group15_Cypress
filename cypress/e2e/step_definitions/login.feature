Feature: Login functionality

  Scenario: Successful login
    Given I am on the Sauce Demo login page
    When I enter valid credentials
    Then I should see the Sauce Demo products page
