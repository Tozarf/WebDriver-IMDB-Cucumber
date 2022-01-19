import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get menu() {
        return $("//div[contains(text(),'Menu')]");
    }

    get top250label() {
        return $("//span[contains(text(),'Top 250 Movies')]");
    }

    get searchInput() {
        return $("#suggestion-search");
    }

    get searchButton() {
        return $(
            "//button[@id='suggestion-search-button']//*[@id='iconContext-magnify']"
        );
    }
    get darkKnightResult() {
        return $(
            "//body/div[@id='__next']/nav[@id='imdbHeader']/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]"
        );
    }

    async clickMenu() {
        await this.menu.waitForExist();
        await this.menu.click();
    }

    async clickTop250() {
        await this.top250label.waitForExist();
        await this.top250label.click();
    }
    async submitSearch(text) {
        await this.searchInput.waitForExist();
        await this.searchInput.setValue(text);
        await this.darkKnightResult.waitForExist();
        await this.darkKnightResult.click();
    }

    open() {
        return super.open();
    }
}

export default new HomePage();
