import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';
import { SUPPORT_DATA } from '../test-data/shared';

test.describe('API Tests', () => {
  test('GET /users/2', async ({ request }) => {
    const reqResApi = new ReqResApi(request);
    const response = await reqResApi.getUser(2);
    expect(response.status()).toBe(200);

    const expectedData = {
      data: {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
      },
      support: SUPPORT_DATA,
    };

    const data = await response.json();
    expect(data).toEqual(expectedData);
  });
});
