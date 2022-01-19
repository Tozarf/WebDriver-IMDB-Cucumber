import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page";
import top250Page from "../pageobjects/top250.page";

Given(/^I am on the login page$/, async () => {
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
