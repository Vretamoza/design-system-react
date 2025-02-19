# Design System - React + Storybook + Jest

## Overview

This repository contains a **Design System** built with **React**, **Storybook**, and **Jest**. It is designed to provide reusable, testable, and consistent UI components for your projects.

The system allows for the creation of UI components, styled according to the design specifications, and ensures that the components are tested and rendered correctly. Storybook serves as a visual playground for the components, while Jest ensures that the components work as expected.

This design system is inspired on the free version of Ant design system for figma:

[Ant design system for figma](https://www.figma.com/community/file/822070817360747147)

## Features

- **React Components**: Reusable UI components built with React.
- **Storybook Integration**: Provides an isolated environment for developing, testing, and showcasing components.
- **Jest Testing**: Comprehensive unit and interaction tests using Jest and React Testing Library.
- **Typescript Support**: Fully typed with TypeScript for better development experience and type safety.
- **CSS-in-JS**: Supports styled-components or your preferred CSS-in-JS solution (if applicable).

## Installation

To get started with the design system project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package manager)

### Steps

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

    Or if you're using Yarn:

    ```bash
    yarn install
    ```

## Running Storybook

Storybook is used to view and develop the UI components in isolation.

To start Storybook locally, run:

```bash
npm run storybook 
```

Or if you're using Yarn:
```bash
yarn storybook 
```

This will open Storybook in your browser where you can view all the components in the system.

## Running Tests with Jest

We use Jest and React Testing Library for testing the components.

### Run unit tests
To run the tests, simply run the following command:

```bash
npm test 
```

Or with yarn

```bash
yarn test 
```

### Run tests in watch mode
To run tests in watch mode (re-runs tests on file changes), use:

```bash
npm run test:watch
```

Or with yarn

```bash
yarn test:watch
```

## Component Structure
The design system contains various UI components, such as:
* Button  
* Input  
* Card  
* Modal   

Each component is tested with unit and interaction tests to ensure correctness and accessibility.

## License

### Notes:
- **Figma Design Link**: https://www.figma.com/community/file/822070817360747147
- The rest of the markdown provides instructions for setting up the project, running Storybook and running Jest tests. Feel free to modify this further based on your project's specific needs.
