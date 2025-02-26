import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('POST /register - Register User Unsuccessful', async ({ request }) => {
    const reqResApi = new ReqResApi(request);
    const response = await reqResApi.registerUser({
      email: 'sydney@fife',
    });
    expect(response.status()).toBe(400);

    const responseData = await response.json();
    console.log('Response data:', responseData);

    expect(responseData).toHaveProperty('error', 'Missing password');
  });
});
