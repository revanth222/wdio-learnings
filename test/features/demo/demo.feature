Feature: Demo feature

    @demo
    Scenario Outline: Running first demo feature
        Given I am on google page
        When search with <SearchItem>
        Then Click on first search result
        Then URL should match <Expected URL>

        Examples:
            | Test ID    | SearchItem | Expected URL          |
            | DEMO_TC001 | WDIO       | https://webdriver.io/ |


