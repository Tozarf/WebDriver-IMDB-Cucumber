Feature: Dark Knight Movie Page

  Scenario Outline: As a user, I can verify the buffering state of the JWplayer

    Given I am on the home page
    When I open the menu 
    When I click on the Top 250 Movies
    When I click on the The Dark Knight title
    Then I should see that the jwplayer is displayed and it is not playing



  Scenario Outline: As a user, I can look up for The Dark Knight and verify the playing state of the JWplayer
        
    Given I am on the home page
    When I enter the input The Dark Knight on the search bar and click on the first result
    When I click on the play trailer button
    Then I can see the video playing
