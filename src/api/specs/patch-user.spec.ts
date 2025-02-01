import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('PATCH /users/2 - Update User', async ({ request }) => {
    const reqResApi = new ReqResApi(request, 'https://reqres.in/api');
    const response = await reqResApi.patchUser(2, {
      name: 'morpheus',
      job: 'zion resident'
    });
    expect(response.status()).toBe(200);
    
    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('name', 'morpheus');
    expect(responseData).toHaveProperty('job', 'zion resident');
    expect(responseData).toHaveProperty('updatedAt');
  });
});