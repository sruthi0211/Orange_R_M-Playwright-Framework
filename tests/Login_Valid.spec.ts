import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Verify user can login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'Admin',
        'admin123'
    );

});