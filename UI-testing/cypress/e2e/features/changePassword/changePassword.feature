Feature: Change password

  Background:
    Given I am logged in as a valid user

  Scenario: Change the password
    When I click on dropdown of the profile
    And I click on item called change password
    And I type the current password as "admin123"
    And I type new password as "MyNewPass123!"
    And I confirm the password with "MyNewPass123!"
    And I click on save button
    Then I see the tost message with "Successfully Saved"
    And I logout and revisit the login page
    And I Try to login with new password which "MyNewPass123!"
    And I should see the Home page



