import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('GET /unknown/2 - Single Resource', async ({ request }) => {
    const reqResApi = new ReqResApi(request, 'https://reqres.in/api');
    const response = await reqResApi.singleResource(2);
    expect(response.status()).toBe(200);

    const expectedResponse = {
      data: {
        id: 2,
        name: 'fuchsia rose',
        year: 2001,
        color: '#C74375',
        pantone_value: '17-2031'
      },
      support: {
        url: 'https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral',
        text: 'Tired of writing endless social media content? Let Content Caddy generate it for you.'
      }
    };

    const data = await response.json();
    expect(data).toEqual(expectedResponse);
  });
});