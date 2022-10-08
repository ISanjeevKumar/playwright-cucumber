import {
  After,
  AfterStep,
  Before,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import {
  Page,
  Browser,
  chromium,
  BrowserContext,
  firefox,
  webkit,
} from "@playwright/test";
import { SauceApp } from "../page-objects/sauce-demo/SauceApp";
import { config } from "./runsetting-config";

let page: Page;
let browser: Browser;
let context: BrowserContext;
let sauceApp: SauceApp;

setDefaultTimeout(60000);

Before(async () => {
  switch (config.browser) {
    case "firefox":
      browser = await firefox.launch(config.browserOptions);
      break;
    case "webkit":
      browser = await webkit.launch(config.browserOptions);
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }
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
