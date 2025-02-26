import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';
import { SUPPORT_DATA } from '../test-data/shared';

test.describe('API Tests', () => {
  test('GET /unknown/2 - Single Resource', async ({ request }) => {
    const reqResApi = new ReqResApi(request);
    const response = await reqResApi.singleResource(2);
    expect(response.status()).toBe(200);

    const expectedResponse = {
      data: {
        id: 2,
        name: 'fuchsia rose',
        year: 2001,
        color: '#C74375',
        pantone_value: '17-2031',
      },
      support: SUPPORT_DATA,
    };

    const data = await response.json();
    expect(data).toEqual(expectedResponse);
  });
});
