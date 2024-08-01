import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/api',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://reqres.in/api',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
});