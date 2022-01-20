import { Given, When, Then } from "@wdio/cucumber-framework";
import darkKnightPage from "../pageobjects/darkKnight.page";
import HomePage from "../pageobjects/home.page";
import top250Page from "../pageobjects/top250.page";

Given(/^I am on the home page$/, async () => {
    await HomePage.open();
});

When(/^I open the menu$/, async () => {
    await HomePage.clickMenu();
});

When(/^I click on the Top 250 Movies$/, async () => {
    await HomePage.clickTop250();
});

Then(
    /^I should see The GodFather in the second place with 9.1 of Rating$/,
    async () => {
        await expect(top250Page.godFatherEntry).toBeDisplayed();
        await expect(top250Page.godFatherPosition).toHaveText(
            "2. El padrino (1972)"
        );
        await expect(top250Page.godFatherRating).toHaveText("9,1");
    }
);

When(/^I click on the The Dark Knight title$/, async () => {
    await top250Page.clickDarkKnight();
});

Then(
    /^I should see that the jwplayer is displayed and it is not playing$/,
    async () => {
        const playerState = await browser.execute(() => {
            return jwplayer().getState();
        });
        await expect(darkKnightPage.videoContainer).toBeDisplayed();
        await expect(playerState).toEqual("buffering");
    }
);

When(
    /^I enter the input The Dark Knight on the search bar and click on the first result$/,
    async () => {
        await HomePage.submitSearch("The Dark Knight");
    }
);

When(/^I click on the play trailer button$/, async () => {
    await darkKnightPage.clickPlayTrailerButton();
});

Then(/^I can see the video playing$/, async () => {
    await darkKnightPage.timeLineController.waitForExist();
    const playerSate = await browser.execute(() => {
        return jwplayer().getState();
    });
    await expect(playerSate).toEqual("playing");
});
