import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('POST /users - Create User', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'morpheus',
        job: 'leader'
      },
    });
    expect(response.status()).toBe(201);
    
    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('name', 'morpheus');
    expect(responseData).toHaveProperty('job', 'leader');
    expect(responseData).toHaveProperty('id');
    expect(responseData).toHaveProperty('createdAt');
  });
});