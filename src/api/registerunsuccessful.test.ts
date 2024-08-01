import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('POST /register - Register User Unsuccessful', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/register', {
      data: {
        email: 'sydney@fife'
      },
    });
    expect(response.status()).toBe(400);
    
    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('error', 'Missing password');
  });
});