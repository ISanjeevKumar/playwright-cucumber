const options = [
  "--require-module ts-node/register",
  "--require step-defs/*.ts",
  "-f json:test-report/cucumber_report.json"
].join(" ");

let runsettings = ["features/*.feature", options].join(" ");

module.exports = {
  runner: runsettings,
};
