import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('GET /users/2', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
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
        url: "https://reqres.in/#support-heading",
        text: "To keep ReqRes free, contributions towards server costs are appreciated!"
      }
    };

    const data = await response.json();
    expect(data).toEqual(expectedData);
  });
});