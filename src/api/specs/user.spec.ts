import { test, expect } from '@playwright/test';
import { ReqResApi } from '../clients/ReqResApi';

test.describe('API Tests', () => {
  test('GET /users/2', async ({ request }) => {
    const reqResApi = new ReqResApi(request, 'https://reqres.in/api');
    const response = await reqResApi.getUser(2);
    expect(response.status()).toBe(200);
    
    const expectedData = {
      data: {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
      },
      support: {
        url: "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
        text: "Tired of writing endless social media content? Let Content Caddy generate it for you."
      }
    };

    const data = await response.json();
    expect(data).toEqual(expectedData);
  });
});