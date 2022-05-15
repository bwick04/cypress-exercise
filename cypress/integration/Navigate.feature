Feature: Navigation
  As a user of W3.org, I want to be able to navigate to different web pages and have them work as expected.
  
  Scenario Outline: Navigating to different urls
    When I navigate to "<link>"
    Then There are no console errors
      And The page returns a status code of <status>
      And All linked pages are live

    Examples:
    | link                               | status |
    | /standards/webofdevices/multimodal | 200    |
    | /standards/webdesign/htmlcss       | 200    |
    | /standards/badpage                 | 404    |
