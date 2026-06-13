# QACart Todo App — Cypress Automation Framework

A professional end-to-end test automation framework for the [QACart Todo Application](https://todo.qacart.com),
built with Cypress using the Page Object Model pattern, API-layer testing, dynamic test data, and a fully automated CI/CD pipeline.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Test Coverage](#test-coverage)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [CI/CD Pipeline](#cicd-pipeline)
- [Best Practices](#best-practices)
- [Author](#author)

---

## Overview

This project automates the testing of the QACart Todo web application, covering authentication and todo management features. It is designed to reflect real-world QA Automation practices including:

- **Page Object Model (POM)** for clean, maintainable test code
- **API-layer setup** to create test data fast and reliably
- **Dynamic test data** generation with Faker.js to avoid test conflicts
- **Parallel test execution** via Cypress Cloud for faster feedback
- **Full CI/CD integration** with GitHub Actions on every push

---

## Tech Stack

| Tool                                                  | Version | Purpose                        |
| ----------------------------------------------------- | ------- | ------------------------------ |
| [Cypress](https://www.cypress.io/)                    | Latest  | E2E & API Testing              |
| [GitHub Actions](https://github.com/features/actions) | -       | CI/CD Pipeline                 |
| [Cypress Cloud](https://cloud.cypress.io/)            | -       | Parallel runs & Test reporting |
| [Faker.js](https://fakerjs.dev/)                      | Latest  | Dynamic test data generation   |
| JavaScript                                            | ES6+    | Test language                  |

## Test Coverage

### 🔐 Authentication

| Test Case                    | Type | Status     |
| ---------------------------- | ---- | ---------- |
| Login with valid credentials | UI   | ✅ Passing |

### ✅ Todo Management

| Test Case                | Type     | Status     |
| ------------------------ | -------- | ---------- |
| Add a new todo item      | UI       | ✅ Passing |
| Mark a todo as completed | API + UI | ✅ Passing |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 2. Navigate into the project
cd YOUR_REPO

# 3. Install dependencies
npm install
```

### Environment Setup

Create a `cypress.env.json` file at the root of the project:

```json
{
  "email": "your-test-email@example.com",
  "password": "your-test-password"
}
```

> ⚠️ This file is listed in `.gitignore` and will never be committed to the repository.
> For CI/CD, credentials are stored as GitHub Secrets.

---

## Running Tests

### Open Cypress Test Runner (interactive mode)

```bash
npx cypress open
```

### Run all tests headlessly

```bash
npx cypress run
```

### Run tests on a specific browser

```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

### Run a specific test file

```bash
npx cypress run --spec "cypress/e2e/todo.cy.js"
```

---

## CI/CD Pipeline

Every push to the repository automatically triggers the GitHub Actions pipeline:

```
Push to GitHub
      │
      ▼
Checkout Code
      │
      ▼
Cache Node Modules
      │
      ▼
Run Cypress Tests (2 parallel containers)
      │
      ├── Container 1 ──► Cypress Cloud
      └── Container 2 ──► Cypress Cloud
                │
                ▼
      Upload screenshots on failure
      Upload videos (always)
```

### Pipeline features

- ✅ Runs on every push automatically
- ✅ **2 parallel containers** to cut execution time in half
- ✅ Screenshots captured automatically on test failure
- ✅ Results visible on [Cypress Cloud](https://cloud.cypress.io/)
- ✅ Credentials stored securely as **GitHub Secrets** — never hardcoded

### GitHub Secrets required

| Secret Name          | Description              |
| -------------------- | ------------------------ |
| `CYPRESS_EMAIL`      | Test user email          |
| `CYPRESS_PASSWORD`   | Test user password       |
| `CYPRESS_RECORD_KEY` | Cypress Cloud record key |

---

## Best Practices Applied

| Practice                  | Implementation                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------- |
| **Page Object Model**     | Each page has its own class with getters and chainable methods                     |
| **API-layer setup**       | Test data created via API in `beforeEach` — faster and more reliable than UI setup |
| **Dynamic test data**     | Faker.js generates unique users for every test run — no data conflicts             |
| **Stable selectors**      | `data-testid` attributes used throughout — resilient to UI changes                 |
| **Environment variables** | Credentials never hardcoded — stored in `cypress.env.json` and GitHub Secrets      |
| **Parallel execution**    | 2 containers run simultaneously via Cypress Cloud                                  |
| **Chainable methods**     | Page methods return `this` or the next page object for readable test code          |

---

## Author

**Jihen Raissi** — QA Automation Engineer
