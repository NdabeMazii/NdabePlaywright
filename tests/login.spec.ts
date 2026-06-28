import {expect, test} from "../src/fixtures/CustomFixtures";
import {validUsers, invalidUsers} from "../src/data/TestData";


test('Positive login - Admin', async({ loginPage, homePage }) => {
    await loginPage.basePageGoToUrl('*/');
    await loginPage.navigateToLoginPage();
    await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);
});