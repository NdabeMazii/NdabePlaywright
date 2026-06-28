import {expect, test} from '../src/fixtures/CustomFixtures';
import {validUsers} from "../src/data/TestData";
import { readCsv } from '../src/utils/CsvReader';  


test.describe('Instructor Panel Functionality', () => {

    test('Navigate to Instructor Panel', async ({ loginPage, homePage }) => {
        // await loginPage.basePageGoToUrl('*/');
        // await loginPage.navigateToLoginPage();
        // await loginPage.userLogin(validUsers.classUser.username, validUsers.classUser.password);
        await loginPage.performFullLogin(validUsers.admin.username, validUsers.admin.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToInstructorPanel();
    });

        test('Update user profile', async ({ loginPage, homePage, userProfilePage }) => {
        // await loginPage.basePageGoToUrl('*/');
        // await loginPage.navigateToLoginPage();
        // await loginPage.userLogin(validUsers.classUser.username, validUsers.classUser.password);
        await loginPage.performFullLogin(validUsers.classUser.username, validUsers.classUser.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToUserProfile();
        await userProfilePage.verifyUserProfileIsDisplayed();
        await userProfilePage.editUserProfile(validUsers.classUser.gitUsername);
        await userProfilePage.verifyProfile(validUsers.classUser.gitUsername);
    });
});

const users = readCsv('src/data/PlaywrightTest.csv');

for (const user of users) {
    test(`Open user profile page for ${user.Username}`, async ({loginPage, homePage, page}) => {
        await loginPage.performFullLogin(user.Username, user.Password);  
        await homePage.navigateToUserProfile();   

        // await expect(page.getByRole('heading', )
    });
};