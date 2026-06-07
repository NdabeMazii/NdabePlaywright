import {expect, test} from '@playwright/test';

test('Launch Ndosi Dev Url', async ({page}) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');
    
    await expect(page).toHaveTitle('Ndosi Test Automation');
});    

test('Verify login button is visible', async ({page}) => {
    await page.goto('*/');
    
    const loginButton = page.locator('button:text-is("Login")');

    await page.waitForTimeout(5000);

    //await loginButton.isVisible();

    console.log(loginButton);

    //expect(await loginButton.isVisible()).toBe(true);
});    

