# Playwright Automated API Tests

This project runs automated API tests using Playwright for the [ReqRes](https://reqres.in/) API. It leverages TypeScript for type safety and GitHub Actions for CI/CD.

## Tests Overview

- **GET Requests:**  
  - List Users  
  - Single User (and Not Found)  
  - List/Single Resource (and Not Found)  
  - Delayed Response

- **POST Requests:**  
  - Create User  
  - Register (Successful/Unsuccessful)  
  - Login (Successful/Unsuccessful)

- **PUT/PATCH Requests:**  
  - Full Update  
  - Partial Update

- **DELETE Requests:**  
  - Delete User

## Assertions

Each test utilizes Playwright's built-in `expect` API to assert that API responses have the correct status codes and data structures. For example, tests verify that endpoints return the expected HTTP statuses (e.g., 200 or 201), and use deep equality checks on JSON responses to ensure that the data matches the expected format.

## Setup & Execution

Clone the repository, install dependencies, and run tests:

```sh
git clone https://github.com/gdautoqa/playwright-automated-api-tests.git
cd playwright-automated-api-tests
npm install
npx playwright test
```

To view the HTML report:

```sh
npx playwright show-report
```

## CI/CD

Tests run automatically via GitHub Actions on:
- Push and Pull Request events to the `main` branch
- Scheduled CRON runs on weekdays at 7:00 AM Eastern Time (11:00 UTC)
- Manual triggering via workflow dispatch