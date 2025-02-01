import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('POST /login - Login Unsuccessful', async ({ request }) => {
    const reqResApi = new ReqResApi(request, 'https://reqres.in/api');
    const response = await reqResApi.loginUser({
      email: 'peter@klaven'
    });
    expect(response.status()).toBe(400);
    
    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('error', 'Missing password');
  });
});