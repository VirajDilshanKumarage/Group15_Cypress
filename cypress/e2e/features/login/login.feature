Feature: Login functionality

  As a invalid user
  I cannot log into application
  As a valid user
  I want to log into application

  Scenario: Invalid login
    Given I am on the login page
    When I enter username with "username gh"
    And I enter password with "password j"
    And I click on submit button
    Then I should see error message with "Login and/or password are wrong."

  Scenario: Valid login
    Given I am on the login page
    When I enter username with "username"
    And I enter password with "password"
    And I click on submit button
    Then I should see the home page
