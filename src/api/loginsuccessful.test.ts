import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('POST /login - Login Successful', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/login', {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      },
    });
    expect(response.status()).toBe(200);
    
    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('token');
  });
});