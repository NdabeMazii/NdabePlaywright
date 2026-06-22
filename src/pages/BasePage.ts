import {Page, Locator, expect} from '@playwright/test';

export class BasePage {
    
    constructor(public page: Page) {
        this.page = page;
    }

    //create resusable methods
    async basePageGoToUrl(url: string) {
        await this.page.goto(url);
    }

    async basePageClickElement(element: Locator) {
        await element.click();
    }

    async basePageEnterText(locator: Locator, text: string) {
        await locator.clear();
        await locator.fill(text);
    }


    async basePageGetTextBoxValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }


    async basePageVerifyElementIsVisible(element: Locator) {
        await expect(element).toBeVisible();
    }
}