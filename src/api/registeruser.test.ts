import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('POST /register - Register User', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/register', {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      },
    });
    expect(response.status()).toBe(200);
    
    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('id');
    expect(responseData).toHaveProperty('token');
  });
});