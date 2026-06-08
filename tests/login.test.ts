import {test, expect} from '@playwright/test';

test('Login to Ndosi Dev using valid credentials', async ({page}) => {

    await page.goto('*/');

    //await page.click('text=Login');

    await page.getByRole('button', { name: 'Login'}).click();

    await page.getByRole('textbox', {name: 'Email'}).fill('ndabemazii@gmail.com');

    await page.getByRole('textbox', {name: 'Password'}).fill('Mazii@053103');

    await page.getByRole('button', {name: 'Login'}).click();

    await page.waitForTimeout(5000);
});

