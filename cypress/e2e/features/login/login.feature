Feature: Login functionality

  Scenario: Successful login
    Given I am on the login page
    When I enter username with "username"
    And I enter password with "password"
    And I click on submit button
    Then I should see the home page
