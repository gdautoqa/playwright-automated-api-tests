import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('POST /login - Login Successful', async ({ request }) => {
    const reqResApi = new ReqResApi(request, 'https://reqres.in/api');
    const response = await reqResApi.loginUser({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    });
    expect(response.status()).toBe(200);

    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('token');
  });
});