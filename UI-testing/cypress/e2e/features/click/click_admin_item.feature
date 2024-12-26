Feature: Dashboard Navigation

  Background:
    Given I am logged in as a valid user

  Scenario: Click on admin menu and verify the element appears
    When I click on the "Admin" menu item
    Then the admin page should appear
