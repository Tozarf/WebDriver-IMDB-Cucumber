class DarkKnightPage {
    get playTrailerButton() {
        return $("//span[contains(text(),'Play trailer')]");
    }
    get videoContainer() {
        return $(
            '//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[3]/div[1]/div/div[2]/div[2]/a/div[2]'
        );
    }

    get timeLineController() {
        return $("//div[contains(text(),'00:01')]");
    }

    async clickPlayTrailerButton() {
        await this.playTrailerButton.waitForExist();
        await this.playTrailerButton.click();
    }
    async clickVideoContainer() {
        await this.playButton.waitForExist();
        await this.playButton.click();
    }
}
export default new DarkKnightPage();
