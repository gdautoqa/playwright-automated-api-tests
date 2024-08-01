import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/api',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { open: 'never' }]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['chromium'] },
    },
    {
      name: 'firefox',
      use: { ...devices['firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['webkit'] },
    },
  ],
  use: {
    baseURL: 'https://reqres.in/api',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
});