# view.feature
Feature: View Performance Tracker

    Scenario: Navigate to and view a performance tracker
        Given I am on the login page
        When I navigate to the "Performance" page
        And I click on "My Trackers" tab
        And I click the "View" button for a tracker
        Then I should see the tracker page with the title "Tracker for paul"
