import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Top250Page extends Page {
    /**
     * define selectors using getter methods
     */
    get godFatherEntry() {
        return $('//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[2]');
    }
    get godFatherPosition() {
        return $(
            '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[2]/td[2]'
        );
    }
    get godFatherRating() {
        return $(
            '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[2]/td[3]/strong'
        );
    }
    get darkKnight() {
        return $(
            '//*[@id="main"]/div/span/div/div/div[3]/table/tbody/tr[4]/td[2]/a'
        );
    }

    async clickDarkKnight() {
        await this.darkKnight.waitForExist();
        await this.darkKnight.click();
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

export default new Top250Page();
