import { Page, expect } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    usernameTextbox = this.page.getByRole('textbox', { name: 'Username' });

    passwordTextbox = this.page.getByRole('textbox', { name: 'Password' });

    loginButton = this.page.getByRole('button', { name: 'Login' });

    invalidCredentialsMessage =
        this.page.getByText('Invalid credentials');

    async navigateToLoginPage(): Promise<void> {
        await this.page.goto('/web/index.php/auth/login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }

    async verifyInvalidCredentialsMessage(): Promise<void> {
        await expect(
            this.invalidCredentialsMessage
        ).toBeVisible();
    }
}