import {
  After,
  AfterStep,
  Before,
  setDefaultTimeout,
  setWorldConstructor,
  World,
} from "@cucumber/cucumber";
import { Page, Browser, chromium, BrowserContext } from "@playwright/test";
import { SauceApp } from "../page-objects/sauce-demo/SauceApp";

let page: Page;
let browser: Browser;
let context: BrowserContext;
let sauceApp: SauceApp;

setDefaultTimeout(60000);

Before(async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  sauceApp = await new SauceApp(page);
});

After(async () => {
  await context.close();
  await browser.close();
});

AfterStep(async ({ result }) => {
  console.log("Result of executed step:", result.status);
});

export { page, sauceApp };
