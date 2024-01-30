# Angular 17 Task Tracker with SSR

## Overview

This is a Task Tracker application built with Angular 17 and Server-Side Rendering (SSR). The application features a Kanban board with four columns: Open, Pending, In Progress, and Completed. Users can efficiently manage tasks by dragging and dropping them between different columns.

## Features

- Kanban board with drag-and-drop functionality.
- Four columns for task management: Open, Pending, In Progress, Completed.
- Angular 17 with Server-Side Rendering for optimized performance.

## Prerequisites

Before running the project locally, make sure you have the following installed:

- Node.js (v20.x)
- npm (Node Package Manager)
- Angular CLI (v17.1.1)

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/CDiala/task-tracker.git

   ```

2. Navigate to the project directory:

   ```bash
   cd task-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Build the Angular application:

   ```bash
   ng build
   ```

5. Run the SSR-enabled server:

   ```bash
   npm run serve:ssr
   ```

6. Open your browser and visit http://localhost:4000 (or port 4000, whichever is displayed in the terminal) to view the Task Tracker application.

## Usage

- Once the application is running locally, navigate to the provided URL.
  Use the Kanban board to manage tasks by dragging and dropping them between columns.

- Enjoy a seamless task-tracking experience with SSR optimization.

## Additional Commands

### Serve

Run `ng serve` to serve the project using csr.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Build for Production

Build production-ready Angular app by running `ng build --prod`. The build artifacts will be stored in the `dist/` directory.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Testing

Run tests by exceuting `ng test` in the terminal.

## Contributing

If you'd like to contribute to the development of this Task Tracker application, please follow the contribution guidelines.

## License

This Task Tracker application is open-source and available under the MIT License.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
