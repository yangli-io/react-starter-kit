# Opinionated React App Starter Kit

- [x] Create React App
- [x] Typescript
- [x] React Router
- [x] React Intl
- [x] CSS Modules
- [x] Redux Toolkit
- [x] Add Unit Tests with Enzyme
- [x] Cypress
- [ ] Readme Instructions
- [ ] Responsive
- [ ] Dark Mode
- [x] Typescript Lint
- [x] Pre-commit
- [x] Github Workflows
- [ ] Make Create React App Template

## Getting Started

1. Clone / Fork this repo
2. yarn/npm install
3. yarn/npm start
4. Add your own code

## Building Blocks

### Typescript
Write everything in typescript! If you prefer JS, this is not for you.

### React Router
React Router to control all the routes. Find all the routes in App.tsx

### React Intl
If you plan to allow multiple languages on your website, it's a good idea to get started now.

### CSS Modules
This app uses css modules but it's completely optional, however it might be worth learning. CSS Modules is pretty simple, just 

1. create a "<name>.module.scss" file
2. import this file with a styles object variable
3. you can use the class name as a property of the styles object variable

### Redux Toolkit
Use this to manage state, it's basically a state management library built on top of redux.

### Cypress
Cypress is used for end to end testing. Cypress is extremely enjoyable to write and works well as a regression test against future changes.

I suggest you use "test-id" to query items rather than class (because classNames are randomized up by CSS Modules) or id (because id's are unique).

### Github Workflows
A .github/workflows/CI.yml file has been provided which will run the build, lint, test and e2e-test on your github actions page upon push into master. You can also add your own deploy script to deploy into your server of choice.

### Pre-commit
Precommit is setup and will run lint and test when trying to commit. This is to prevent bad commits.

### Jest Unit Tests

