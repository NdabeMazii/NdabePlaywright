import {expect, test} from "../src/fixtures/CustomFixtures";
import {validUsers, invalidUsers} from "../src/data/TestData";
import { request } from "https";

test.describe('Login Functionality', () => {

test('Positive login - Admin', async({ loginPage, homePage, page }) => {
    await loginPage.basePageGoToUrl('*/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
    //soft assertion
    await expect.soft(page).toHaveURL(/dashboard/);
    await homePage.verifyHomePageIsDisplayed();
});

    test('Positive login via API - class user', {tag: '@regression'}, async ({request}) => {
        const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/login', {
        //payload
        data: {
            "email": validUsers.classUser.username,
            "password": validUsers.classUser.password
            }
        });
        const body = await response.json();
        console.log (body);
        expect(response.status()).toBe(200); 

    });
});