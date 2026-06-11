const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rwwm57',
  allowCypressEnv: false,
  video: true,  
  e2e: {
    baseUrl:  "https://todo.qacart.com/login",
    viewportWidth: 1440,
    viewportHeight: 900,
    experimentalWebKitSupport: true,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
