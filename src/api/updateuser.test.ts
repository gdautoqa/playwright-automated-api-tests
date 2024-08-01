import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('PUT /users/2 - Update User', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
      data: {
        name: 'morpheus',
        job: 'zion resident'
      },
    });
    expect(response.status()).toBe(200);
    
    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('name', 'morpheus');
    expect(responseData).toHaveProperty('job', 'zion resident');
    expect(responseData).toHaveProperty('updatedAt');
  });
});