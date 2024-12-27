Feature: Add New System User
  As an admin user
  I want to add a new system user
  So that I can manage user accounts effectively

  Background:
    Given I am logged in as an admin

  Scenario: Successfully add a new system user
    Given I am on the "System Users" page
    When I click the "Add" button
    And I fill in the form with the following details:
      | Field           | Value           |
      | User Role       | Admin           |
      | Employee Name   | John Doe        |
      | Username        | johndoe123      |
      | Status          | Enabled         |
      | Password        | Password123!    |
      | Confirm Password| Password123!    |
    And I click the "Save" button
    Then I should see "johndoe123" in the list of system users
