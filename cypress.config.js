const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportWidth: 375,
  // viewportHeight: 667,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/**/*.js",
  },
});
