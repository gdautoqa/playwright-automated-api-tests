import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('GET /unknown/23 - Single Resource Not Found', async ({ request }) => {
    const reqResApi = new ReqResApi(request);
    const response = await reqResApi.singleResource(23);
    expect(response.status()).toBe(404);
  });
});
