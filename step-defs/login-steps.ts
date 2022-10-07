import { Given, When, Then } from "@cucumber/cucumber";
import { page, sauceApp } from "../config/global-setup";

Given("I navigate to login page", async function () {
  await page.goto("https://www.saucedemo.com/");
});

Given("I enter username {string}", async function (username) {
  await sauceApp.LoginPage.enterUsername(username);
});

Given("I enter password {string}", async function (password) {
  await sauceApp.LoginPage.enterPassword(password);
});

When("I click login button", async function () {
  await sauceApp.LoginPage.clickOnLogin();
});

Then("I will be navigated to home page", async function () {
  await sauceApp.LoginPage.isUserLoggedIn();
});
