/**
 * To enjoy all the features that Playwright Test has to offer, you would want to create a configuration file such as playwright.config.js.
 * It allows you to run tests in multiple browsers you have configured as you might need.
 * You can check all the available configuration options in the specific configuration options section: https://playwright.dev/docs/test-configuration
 * Configuring the NPM scripts: Playwright Test will automatically pick up your playwright.config.js file.
 * If you put your configuration file in a different place, pass it with — config option.

npx playwright test --config=tests/playwright.config.js

 */

// playwright.config.js
// @ts-check

const { defineConfig, firefox } = require("@playwright/test");

module.exports = defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on-first-retry",
    browserName: "chromium",
  },
});
