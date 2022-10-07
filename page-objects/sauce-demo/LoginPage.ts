import { expect, Page } from "@playwright/test";

export class LoginPage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async enterUsername(username: string) {
    await this.page.locator("#user-name").fill(username);
  }

  public async enterPassword(password: string) {
    await this.page.locator("#password").fill(password);
  }

  public async clickOnLogin() {
    await this.page.locator("#login-button").click();
  }

  public async isUserLoggedIn() {
    await expect(this.page).toHaveTitle("Swag Labs");
  }
}
