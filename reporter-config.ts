var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "test-report/cucumber_report.json",
  output: "test-report/cucumber_report.html",
  screenshotsDirectory: "test-report/assets/",
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
};
reporter.generate(options);
