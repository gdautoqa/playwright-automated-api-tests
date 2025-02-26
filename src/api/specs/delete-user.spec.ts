import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('DELETE /users/2 - Delete User', async ({ request }) => {
    const reqResApi = new ReqResApi(request);
    const response = await reqResApi.deleteUser(2);
    console.log('Response status:', response.status());
    expect(response.status()).toBe(204);
  });
});
