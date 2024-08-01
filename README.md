# Playwright Automated API Tests

This repository contains a series of automated API tests using Playwright to test various endpoints of the [ReqRes](https://reqres.in/) API.

## Features

- **Playwright**: Utilized for end-to-end API testing.
- **TypeScript**: Ensures type safety and improved development experience.
- **GitHub Actions**: Configured for continuous integration and continuous deployment (CI/CD).
- **Detailed Assertions**: Validates API responses against expected data structures and values.
- **Logging**: Captures and logs important response details for debugging and verification.

## Test Descriptions

### GET Requests

- **List Users**: Tests `GET /users?page=2` for a list of users.
- **Single User**: Tests `GET /users/2` for a specific user.
- **Single User Not Found**: Tests `GET /users/23` for a non-existent user.
- **List Resource**: Tests `GET /unknown` for a list of resources.
- **Single Resource**: Tests `GET /unknown/2` for a specific resource.
- **Single Resource Not Found**: Tests `GET /unknown/23` for a non-existent resource.
- **Delayed Response**: Tests `GET /users?delay=3` to handle delayed responses.

### POST Requests

- **Create User**: Tests `POST /users` to create a new user.
- **Register Successful**: Tests `POST /register` for successful user registration.
- **Register Unsuccessful**: Tests `POST /register` for unsuccessful registration.
- **Login Successful**: Tests `POST /login` for successful user login.
- **Login Unsuccessful**: Tests `POST /login` for unsuccessful login.

### PUT and PATCH Requests

- **Update User**: Tests `PUT /users/2` to update an existing user.
- **Partial Update User**: Tests `PATCH /users/2` for partial updates to an existing user.

### DELETE Requests

- **Delete User**: Tests `DELETE /users/2` to delete a user.

## Running the Tests

To run the tests, clone the repository and use the Playwright CLI:

```sh
git clone https://github.com/gdautoqa/playwright-automated-api-tests.git
cd playwright-automated-api-tests
npm install
npx playwright test