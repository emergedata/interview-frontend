# Minimal todo list

## CLI

### Installing dependencies

Need node v18 and `npm` or `yarn` installed. Run `npm install` or `yarn install` in this directory.

### Development server

`npm run dev` or `yarn dev` starts the development server locally.

### Testing

[Vitest](https://vitest.dev/guide/) is the testing framework used, and provides a mostly jest-compatible api.

`npm run test` or `yarn test` starts vitest in watch mode.

## Tasks

### Refactor the AllTodos component

Currently most functionality is in one component. This should be refactored into multiple components without changing the look of the application.

### Add tests for each part of the project

Test coverage should be added for both the todo list and the new todo form. **These tests should mock out the data source where possible.**

Not expected to test the fake data hook/util.
