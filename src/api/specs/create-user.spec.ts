import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('POST /users - Create User', async ({ request }) => {
    const reqResApi = new ReqResApi(request);
    const response = await reqResApi.createUser({
      name: 'morpheus',
      job: 'leader',
    });
    expect(response.status()).toBe(201);

    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('name', 'morpheus');
    expect(responseData).toHaveProperty('job', 'leader');
    expect(responseData).toHaveProperty('createdAt');
    expect(responseData).toHaveProperty('id');
  });
});
