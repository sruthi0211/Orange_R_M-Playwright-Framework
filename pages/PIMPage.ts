import { Page, expect } from '@playwright/test';

export class PIMPage {

    constructor(private page: Page) {}

    pimMenu =
        this.page.getByRole('link', { name: 'PIM' });

    addEmployeeMenu =
        this.page.getByRole('link', { name: 'Add Employee' });

    firstNameTextbox =
        this.page.getByRole('textbox', { name: 'First Name' });

    middleNameTextbox =
        this.page.getByRole('textbox', { name: 'Middle Name' });

    lastNameTextbox =
        this.page.getByRole('textbox', { name: 'Last Name' });

    saveButton =
        this.page.getByRole('button', { name: 'Save' });

    personalDetailsHeader =
        this.page.getByRole('heading', {
            name: 'Personal Details'
        });

    async navigateToAddEmployee(): Promise<void> {

        await this.pimMenu.click();

        await this.addEmployeeMenu.click();
    }

    async addEmployee(
        firstName: string,
        lastName: string
    ): Promise<void> {

        await this.firstNameTextbox.fill(firstName);

        await this.lastNameTextbox.fill(lastName);

        await this.saveButton.click();
    }

    async verifyEmployeeCreated(): Promise<void> {

        await expect(
            this.personalDetailsHeader
        ).toBeVisible();
    }
}