Feature: Delete employee
 
  Background:
    Given I am logged in as an admin
 
  Scenario: Delete employee
    When I Click on PIM item in Dashboard
    And I click on Delete button on a row with ID ""
    And I click on Delete confirmation button
    Then I see Toast massage with "Successfully Deleted"