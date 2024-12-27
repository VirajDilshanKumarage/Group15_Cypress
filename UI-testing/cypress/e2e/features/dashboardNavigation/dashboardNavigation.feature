Feature: Dashboard Navigation

  Scenario: Verify that all dashboard tabs are accessible
    Given I am logged in as a valid user
    When I navigate to each tab in the dashboard
    Then all tabs should load successfully
    
