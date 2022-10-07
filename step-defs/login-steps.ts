import { Given, When, Then } from "@cucumber/cucumber";

Given("I navigate to login page", async function ({ page }) {
  await page.goto("https://www.saucedemo.com/");
});

Given("I enter username {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Given("I enter password {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When("I click login button", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then("I will be navigated to home page", async function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
