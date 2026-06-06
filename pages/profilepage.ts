import { Page, expect } from '@playwright/test';

export class ProfilePage {

    constructor(private page: Page) {}

    profileDropdown =
        this.page.locator('.oxd-userdropdown-name');

    logoutMenu =
        this.page.getByRole('menuitem', { name: 'Logout' });

    usernameTextbox =
        this.page.getByRole('textbox', { name: 'Username' });

    async clickProfileDropdown(): Promise<void> {
        await this.profileDropdown.click();
    }

    async clickLogout(): Promise<void> {
        await this.logoutMenu.click();
    }

    async logout(): Promise<void> {
        await this.clickProfileDropdown();
        await this.clickLogout();
    }

    async verifyLogoutSuccessful(): Promise<void> {
        await expect(this.usernameTextbox).toBeVisible();
    }
}