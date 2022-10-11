import {
  After,
  AfterStep,
  Before,
  setDefaultTimeout,
  Status,
  World,
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

After(async function (this: World, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenShot = await page.screenshot();
    await this.attach(screenShot, "image/png");
  }
  await context.close();
  await browser.close();
});
export { page, sauceApp };
