Feature: API Testing for GET APIs

  Background:
    Given the base API URL is "http://localhost:7081/api/books"

  Scenario: Fetch all books successfully
    When I send a GET request to the base API endpoint with valid admin credentials
    Then the response status code should be 200
    And the response body should be an array

  Scenario: Fetch a specific book by ID successfully
    Given the book ID is 1
    When I send a GET request to the base API endpoint with the book ID and valid admin credentials
    Then the response status code should be 200
    And the response body should contain the book details with the given ID

  Scenario: Fetch a non-existing book by ID
    Given the book ID is 999
    When I send a GET request to the base API endpoint with the book ID and valid admin credentials
    Then the response status code should be 404
    And the response body should be "Book not found"
