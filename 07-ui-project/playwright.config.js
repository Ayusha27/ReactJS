// playwright.config.js
/* eslint-env node */
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Look for test files in the "tests" directory
  testDir: './tests',

  // Run tests in files in parallel to save time
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only (helps with flaky tests in GitHub Actions)
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI to avoid overloading the runner
  workers: process.env.CI ? 1 : undefined,

  // Use the HTML reporter so you can see a nice summary of results
  reporter: 'html',

  /* Shared settings for all the projects below */
  use: {
    /* 1. Base URL to use in actions like `await page.goto('/')` */
    // Change this to 3000 if you are using Create React App instead of Vite
    baseURL: 'http://localhost:5173',

    /* 2. Collect trace when retrying a failed test (shows you a video/timeline of the failure) */
    trace: 'on',

    /* 3. Take a screenshot automatically if a test fails */
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Uncomment these if you want to test on multiple browsers
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],

  /* 4. AUTOMATION: Starts your local dev server before starting the tests.
    This ensures your React app is "alive" when Playwright tries to visit it.
  */
  webServer: {
    command: 'npm run dev',        // The command to start your app
    url: 'http://localhost:5173',  // The URL to wait for before starting tests
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});