# comp.se.200-assignment

[![Build Status](https://github.com/panyen/comp.se.200-assignment/workflows/Node.js%20CI/badge.svg)](https://github.com/panyen/comp.se.200-assignment/actions)

**Authors: Phong A. Nguyen, Ezeobi Jeshurun**

## Description

This repository contains JavaScript functions that have been tested and reported using Jest and NYC for code coverage.

<img width="915" alt="Screenshot 2023-12-11 at 03 12 15" src="https://github.com/panyen/comp.se.200-assignment/assets/138178316/7e39d878-b364-45c9-a2a8-439b3b2103db">

## Prerequisites

- Node.js (Version 16.x or 18.x)
- npm (Node Package Manager)

## Installation

```bash
npm install

```

## Running Tests

To run the tests, use the following command:

```bash
npm run test

```

## Running Tests with Code Coverage

To run the Jest tests with code coverage using NYC, use the following command:

```bash
npm run test-coverage

```
This will generate a coverage report in the `coverage` directory.

## Continuous Integration(CI) Build

This project is configured for Continuous Integration using GitHub Actions. The CI build ensures that the project builds and passes tests automatically.

### Workflow Details

* Workflow Name: Node.js CI
* Trigger: On push and pull requests

### Matrix

* Node.js versions: 16.x, 18.x

## Steps

### Checkout Code:

* Checks out the code from the repository.

### Setup Node.js:

* Sets up Node.js according to the specified version.

### Install Dependencies and Run Tests:

* Installs project dependencies using `npm install`.
* Runs tests using `npm run test-coverage`.

### Coveralls:

* Integrates with Coveralls to display code coverage information.

### Additional Steps:

* Uses npm ci for a clean installation.
* Builds the project (if applicable).
* Runs npm test.

## Issues

If you encounter any issues or have suggestions, please [create an issue](https://github.com/panyen/comp.se.200-assignment/issues/new).

## License

This project is licensed under the ISC License - see the `LICENSE.md` file for details.

<img width="1680" alt="Screenshot 2023-12-11 at 02 53 16" src="https://github.com/panyen/comp.se.200-assignment/assets/138178316/ba0283ff-bd9b-485c-9ed6-04535dd4d1de">

<img width="1680" alt="Screenshot 2023-12-11 at 02 54 13" src="https://github.com/panyen/comp.se.200-assignment/assets/138178316/8ccbe8eb-fa0f-4568-8539-950529167bbb">







