# Simple Search App Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a single-page application.

# Objective

To use Github rest api and search issues of a repo using user and repo name with tabs (Open/Closed issues)  

### Installation

- Ensure you have [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) installed.
- Run `npm install` to install dependencies.
- Run `npm start` to run the app in development mode.
- Open [http://localhost:2242](http://localhost:2242) to view the app in the browser.

### Code

All app-specific typescript code is located in `/src`. App icons and the base `index.html` file can be found in `/public`. Within `/src`, the code is organized into relevant subdirectories to help seperate concerns. Those subdirectories are:

- **index.tsx**: The entry point for the application. Wraps the app in the redux store and router. Also attaches the redux store the window object when in dev mode for Cypress testing.
- **components**: Directory where all app components and their corresponding styles live.
- **redux**: Directory where all state management files live.
- **services**: Directory where the functions that interface with external services live.
- **styles**: Directory that houses global styles and where style definitions live.

### Tests

Tests are written using [Cypress](https://www.cypress.io/) and can be found in the `/cypress` directory. To execute tests using the CLI, run `yarn cypress run`. For extra command line arguments, see the [docs](https://docs.cypress.io/guides/guides/command-line.html). To launch the Cypress Test Runner, run `yarn cypress open`. In either case, ensure that you have started the app (`yarn start`).

### Notable Dependencies

- [ReactJS](https://reactjs.org/): Core javascript framework
- [Redux](https://redux.js.org/): State management
- [Redux Saga](https://redux-saga.js.org/): Effect management
- [Styled Components](https://www.styled-components.com/): Styling
- [Typescript](https://www.typescriptlang.org/): Javascript superset
- [React Router](https://reacttraining.com/react-router/): Routing, ideal for accesiblity and seo concerns
- [Axios](https://github.com/axios/axios): HTTP client

### Important Files

- [Services](src/services/gifs.service.ts): Contains the rest api
- [SearchInput](src/components/SearchInput/index.tsx): The input controls for the search
- [GifCard](src/components/SearchGrid/index.tsx): Gets the issue details with Github rest api
- [SearchGrid](src/components/SearchGrid/index.tsx): Returns the rest api with Github issue details on button click
- [Tabs](src/components/Tabs.tsx): The signature for tabs

## Data Flow

For large React applications (this currently simple app was built with the assumption it will scale) the data flow can become increasingly complex and convoluted. To help minimize this complexity the app utilizes Redux for state manangement and async middleware.

All actions that require some type of asynchronous code (e.g. network requests) are intercepted by [Redux Sagas](https://github.com/redux-saga/redux-saga). These sagas are generators that listen for actions and yield a new action once the async process has completed. Sagas let you express debouncing, cancellation, routing, and API calls in a single place.

# simple-search-app