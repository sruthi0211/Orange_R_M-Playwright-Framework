import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

import {
    VALID_USERNAME,
    VALID_PASSWORD
} from '../Utils/Constant';

import employeeData from '../test_data/employeeData.json';

test('Verify employee can be added successfully',
async ({ page }) => {

    const loginPage = new LoginPage(page);

    const pimPage = new PIMPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        VALID_USERNAME,
        VALID_PASSWORD
    );

    await pimPage.navigateToAddEmployee();

    await pimPage.addEmployee(
        employeeData.firstName,
        employeeData.lastName
    );

    await pimPage.verifyEmployeeCreated();

    await page.pause();
});