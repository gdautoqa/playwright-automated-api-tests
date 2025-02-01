import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/api/specs',
  timeout: 30000,
  fullyParallel: true,
  retries: 2,
  workers: 3,
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { open: 'never' }]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['chromium'] },
    },
  ],
  use: {
    baseURL: 'https://reqres.in/api',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
}); 