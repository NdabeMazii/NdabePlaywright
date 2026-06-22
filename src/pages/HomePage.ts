import {Page, Locator} from "@playwright/test";
import {BasePage} from "./BasePage";

export class HomePage extends BasePage {

    get verifyHomePageHeading() {
        return this.page.getByRole('heading', { name: /Welcome\s*back/i });
    }
    
    async verifyHomePageIsDisplayed() {
        await this.basePageVerifyElementIsVisible(this.verifyHomePageHeading);
    }

    async navigateToInstructorPanel() {
        await this.basePageClickElement(this.page.getByRole('button', { name: 'Menu' }));
        await this.basePageClickElement(this.page.locator("//button[@class='nav-dropdown-item']//span[contains(text(),'Instructor Panel')]"));
    }

    async navigateToUserProfile() {
        await this.basePageClickElement(this.page.getByRole('button', { name: 'Menu' }));
        await this.basePageClickElement(this.page.locator("//span[normalize-space()='My Profile']"));
    }
}