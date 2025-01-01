const report = require('cucumber-html-reporter');

report.generate({
  theme: 'bootstrap',
  jsonFile: 'cypress/reports/cucumber-report.json',
  output: 'cypress/reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
});
