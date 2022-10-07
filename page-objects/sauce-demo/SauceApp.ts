import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class SauceApp {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get LoginPage(): LoginPage {
    return new LoginPage(this.page);
  }
}
