import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {
  VALID_USERNAME,
  INVALID_PASSWORD
} from '../Utils/Constant';

test('Verify invalid login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
    VALID_USERNAME,
    INVALID_PASSWORD
);

    await loginPage.verifyInvalidCredentialsMessage();
});