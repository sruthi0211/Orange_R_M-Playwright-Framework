import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/profilepage';
import {
    VALID_USERNAME,
    VALID_PASSWORD
} from '../Utils/Constant';

test('Verify user can logout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const profilePage = new ProfilePage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        VALID_USERNAME,
        VALID_PASSWORD
    );

    await profilePage.logout();

    await profilePage.verifyLogoutSuccessful();
});