# Playwright Automated API Tests

This project demonstrates automated API testing using Playwright for the [ReqRes](https://reqres.in/) REST API. It showcases best practices in API testing with TypeScript and implements continuous integration using GitHub Actions.

## Features

- **Automated CI/CD**: Runs tests automatically via GitHub Actions
- **Comprehensive Test Coverage**: Tests all major HTTP methods and response scenarios
- **Detailed Reporting**: Generates HTML and JSON reports for test results

## Test Coverage

### GET Endpoints

- `/users` - List all users with pagination
- `/users/{id}` - Get single user
- `/users?delay={n}` - Test delayed response
- `/unknown` - List all resources
- `/unknown/{id}` - Get single resource

### POST Endpoints

- `/users` - Create new user
- `/register` - User registration (success/failure scenarios)
- `/login` - User authentication (success/failure scenarios)

### PUT/PATCH Endpoints

- `/users/{id}` - Update user (full/partial updates)

### DELETE Endpoints

- `/users/{id}` - Delete user

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

## Installation

1. Clone the repository:

```sh
git clone https://github.com/gdautoqa/playwright-automated-api-tests.git
```

2. Navigate to project directory:

```sh
cd playwright-automated-api-tests
```

3. Install dependencies:

```sh
npm install
```

## Running Tests

### Run all tests

```sh
npx playwright test
```

### Run specific test file

```sh
npx playwright test src/api/specs/user.spec.ts
```

### View test report

```sh
npx playwright show-report
```

## Test Reports

- HTML Report: Available after test execution at `playwright-report/index.html`
- JSON Results: Available at `test-results/results.json`

## CI/CD Pipeline

Tests are automatically executed in the following scenarios:

- On every push to the `main` branch
- On pull request creation/update targeting `main`
- Daily at 7:00 AM Eastern Time (11:00 UTC) on weekdays
- Manually via GitHub Actions workflow dispatch

## Best Practices

- Uses Playwright's built-in test fixtures
- Implements proper error handling and logging
- Follows TypeScript best practices
- Maintains test isolation and independence
- Uses data-driven testing approaches
- Implements proper assertion strategies
