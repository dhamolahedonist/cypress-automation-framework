const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "yie9iw",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://webdriveruniversity.com/",
    // exclude file
    excludeSpecPattern: "",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    // extra
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    env: {
      webdriveruni_homepage: "https://webdriveruniversity.com",
      first_name: "Sarah",
    },
  },
});
