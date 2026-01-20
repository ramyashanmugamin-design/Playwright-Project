Playwright Automation Framework (Web + API)
A robust, production-grade automation framework designed for end-to-end (E2E) web testing and RESTful API validation. This project demonstrates best practices in SDET engineering, focusing on scalability, maintainability, and CI/CD integration.

🚀 Key Features
UI Testing: Complete E2E checkout flow for Sauce Demo.

API Testing: CRUD operation validation for the Restful Booker API.

Design Pattern: Implemented Page Object Model (POM) to separate test logic from UI locators.

Data-Driven Testing: Utilizes external JSON data providers to execute tests against multiple data sets.

CI/CD Integration: Configured with Jenkins via a Jenkinsfile.

🛠️ Tech Stack
Language: JavaScript/Node.js

Test Runner: Playwright Test

Architecture: Page Object Model (POM)

CI/CD: Jenkins

Reporting: Allure Reports & Playwright HTML Reports

📁 Project Structure
Based on the project architecture:

API Clients/: Modularized classes for handling RESTful requests (Auth and Base clients).

Pages/: Page Objects containing locators and actions (e.g., LoginPage.js, CheckoutInfoPage.js).

TestData/: JSON files containing payload and environment data for Data-Driven execution.

tests/: Functional test suites including E2Eflow.spec.js and API-tests.spec.js.

Jenkinsfile: Pipeline-as-code configuration for automated builds.

🔧 Installation & Setup

Clone the repository:
Bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install dependencies:
Bash
npm install

Install Playwright Browsers:
Bash
npx playwright install

🏃 Running Tests

Run all tests (Headless):
Bash
npx playwright test

Run UI tests specifically:
Bash
npx playwright test tests/E2Eflow.spec.js --project=chromium


Run API tests specifically:
Bash
npx playwright test tests/API-tests.spec.js

View HTML Report:
Bash
npx playwright show-report

View Allure Report:
Bash
To generate: `npx allure generate ./allure-results -o ./allure-report --clean`
To open: `npx allure open ./allure-report`

🏗️ CI/CD Pipeline
The framework is integrated into a Jenkins Pipeline. 
