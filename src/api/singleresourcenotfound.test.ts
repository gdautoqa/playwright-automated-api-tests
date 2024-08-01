import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('GET /unknown/23 - Single Resource Not Found', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/unknown/23');
    expect(response.status()).toBe(404);
  });
});