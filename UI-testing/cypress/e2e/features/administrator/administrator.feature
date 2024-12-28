Feature: Navigate to Maintenance Purge Record

  Scenario: Admin enters an incorrect password
    Given I am a valid user
    When I navigate to the Administrator access page
    And the Username is automatically filled
    And I enter an incorrect password
    Then I should see an error message saying "Invalid credentials"
    
  Scenario: Admin does not enter a password
    Given I am a valid user
    When I navigate to the Administrator access page
    And the Username is automatically filled
    And I leave the password field empty
    Then I should see an error message saying "Required"

  Scenario: Admin enters the correct password
    Given I am a valid user
    When I navigate to the Administrator access page
    And the Username is automatically filled
    And I enter the correct password
    Then I should see Maintenance Purge Record

