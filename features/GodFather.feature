Feature: The IMDB top 250 movise

  Scenario Outline: As a user, I can verify The Godfather in the 2nd place with 9.1 of rating

    Given I am on the login page
    When I open the menu
    When I click on the Top 250 Movies
    Then I should see The GodFather in the second place with 9.1 of Rating

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
