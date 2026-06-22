import {Page, Locator} from "@playwright/test";
import {BasePage} from "./BasePage";

export class UserProfilePage extends BasePage {

    get verifyUserProfileHeading() {
        return this.page.getByRole('heading', { name: 'My Profile' });
    }
    
    async verifyUserProfileIsDisplayed() {
        await this.basePageVerifyElementIsVisible(this.verifyUserProfileHeading);
    }

    async editUserProfile(gitUsername: string) {
        await this.basePageClickElement(this.page.locator('css = button:has-text("Edit Profile")'));
        await this.basePageEnterText(this.page.getByPlaceholder('e.g., octocat'), gitUsername);
        await this.basePageClickElement(this.page.locator('css = button:has-text("Save Changes")'));
    }

    async verifyProfile(gitUsername: string) {
        const actualGitUsername = await this.basePageGetTextBoxValue(this.page.locator('xpath = //a[@href="https://github.com/ggg"] '));
        console.log(`Actual GitUsername: ${actualGitUsername}`);
        if (actualGitUsername === gitUsername) {
            console.log('Github username incorrect, expected: ${gitUsername}');
        }
            else {
            console.log('Github username is correct');
        }
    }
};