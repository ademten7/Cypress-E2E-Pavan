// this is default config
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     screenshotOnRunFailure = true;
//     },
//   },
// });

//For HTML report
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", //for HTML Report
  e2e: {
    setupNodeEvents(on, config) {
      screenshotOnRunFailure = true;
      require("cypress-mochawesome-reporter/plugin")(on); //for HTML Report
    },
  },
});
