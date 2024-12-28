Feature: Delete employee
 
  Background:
    Given I am logged in as an admin
 
  Scenario: Delete employee
    When I Click on PIM item in Dashboard
    Then I see Toste massage with "Successfully Deleted"
   