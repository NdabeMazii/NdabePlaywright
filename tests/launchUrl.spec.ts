import {expect, test} from '@playwright/test';

test('Launch Ndosi Dev Url', async ({page}) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');
    
    await expect(page).toHaveTitle('Ndosi Test Automation');
});    

test('Verify login button is visible', async ({page}) => {
    await page.goto('*/');
    
    const loginButton = await page.getByRole('button', { name: 'Login'}).isVisible();

    console.log("Login Button is visible:" + loginButton)

    await expect(page.getByRole('button', { name: 'Login'})).toBeVisible();

});    

test('Home Page Screenshot', async ({page}) => {
    await page.goto('*/');

    await expect(page.getByRole('button', { name: 'Login'})).toBeVisible();

    await page.screenshot({ path: 'Screenshots/HomePageScreenshot.png', fullPage: true });

});

