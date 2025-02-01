import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('POST /register - Register User', async ({ request }) => {
    const reqResApi = new ReqResApi(request, 'https://reqres.in/api');
    const response = await reqResApi.registerUser({
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    });
    expect(response.status()).toBe(200);
    
    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('id');
    expect(responseData).toHaveProperty('token');
  });
});