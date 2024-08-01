import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('GET /users/23 - User Not Found', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/23');
    expect(response.status()).toBe(404);
  });
});