const options = [
  "--require-module ts-node/register",
  "--require step-defs/*.ts",
].join(" ");

let runsettings = ["features/*.feature", options].join(" ");

module.exports = {
  runner: runsettings,
};
