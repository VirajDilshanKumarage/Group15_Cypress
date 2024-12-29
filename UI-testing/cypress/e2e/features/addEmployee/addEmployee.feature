Feature: Add employee
 
  Background:
    Given I am logged in as an admin
 
  Scenario: Add employee
    When I Click on PIM item in Dashboard
    And I click on Add button
    And I enter First name with "Kavindya"
    And I enter Middle name with "Pamodini"
    And I enter Last name with "Dharmasena"
    And I enter Employee ID with "0065"
    And I click on Save button
    Then I see Toast massage with "Successfully Saved"