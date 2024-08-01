import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('DELETE /users/2 - Delete User', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    console.log('Response status:', response.status());
    expect(response.status()).toBe(204);
  });
});