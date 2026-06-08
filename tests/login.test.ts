import {test, expect} from '@playwright/test';

test.describe('Valid credentials', () => {

test('Login to Ndosi Dev using admin credentials @positive', async ({page},testInfo) => {

    await page.goto('*/');

    await page.getByRole('button', { name: 'Login'}).click();

    await page.getByRole('textbox', {name: 'Email'}).fill('admin@gmail.com');

    await page.getByRole('textbox', {name: 'Password'}).fill('@12345678');

    await page.click('button:has-text("Login")');

    await expect(page.getByRole('heading', { name: /Welcome back/})).toBeVisible();

    await page.waitForTimeout(5000);

    await page.screenshot({ path: 'Screenshots/DashboardScreenshot.png', fullPage: true });

    await testInfo.attach('Dashboard Screenshot', { path: 'Screenshots/DashboardScreenshot.png', contentType: 'image/png' });

    await page.waitForTimeout(5000);
});

test('Login to Ndosi Dev using user credentials @positive', async ({page},testInfo) => {

    await page.goto('*/');

    await page.getByRole('button', { name: 'Login'}).click();

    await page.getByRole('textbox', {name: 'Email'}).fill('ndabemazii@gmail.com');

    await page.getByRole('textbox', {name: 'Password'}).fill('Mazii@053103');

    await page.click('button:has-text("Login")');

    await expect(page.getByRole('heading', { name: /Welcome back/})).toBeVisible();

    await page.waitForTimeout(5000);

    await page.screenshot({ path: 'Screenshots/DashboardScreenshot.png', fullPage: true });

    await testInfo.attach('Dashboard Screenshot', { path: 'Screenshots/DashboardScreenshot.png', contentType: 'image/png' });

    await page.waitForTimeout(5000);
});
});

test.describe('No credentials', () => {

test('Login to Ndosi Dev without credentials @negative', async ({page},testInfo) => {

    await page.goto('*/');

    await page.getByRole('button', { name: 'Login'}).click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Please enter both email and password');
        await dialog.accept();
        console.log("Dialog message: " + dialog.message());
     });

    await page.waitForTimeout(5000);

    await page.click('button:has-text("Login")');

});
});
