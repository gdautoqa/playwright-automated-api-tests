import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('GET /users/23 - User Not Found', async ({ request }) => {
    const reqResApi = new ReqResApi(request, 'https://reqres.in/api');
    const response = await reqResApi.getUser(23);
    expect(response.status()).toBe(404);
  });
});