import {Locator} from "@playwright/test";
import {BasePage} from "./BasePage";

export class InstructorPage extends BasePage {

    get verifyInstructorPanelHeading() {
        return this.page.getByRole('heading', { name: 'Instructor Dashboard' });
    }
    
    async verifyInstructorPanelIsDisplayed() {
        await this.basePageVerifyElementIsVisible(this.verifyInstructorPanelHeading);
    }
}