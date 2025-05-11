# HRNet - React Migration (OpenClassrooms P14)

## Project Overview

This project involved migrating the legacy jQuery-based of "HRNet" to a modern React application.

For reference only, the original jQuery application can be found [here](https://github.com/OpenClassrooms-Student-Center/P12_Front-end).

## Goals

1. Improve performance and maintainability by rebuilding it with React.
2. Replacing jQuery plugins with modern packages.

## Key Actions

-   Complete rewrite with React.
-   State management (Redux Toolkit).
-   Routing (React Router DOM).
-   jQuery plugins replaced with React solutions:
    -   Date Picker: `react-datepicker`
    -   Dropdowns: Custom React component.
    -   Data Table: `react-data-table-component`
    -   Modal: Custom `Modal` component (see published package below).
-   Created and published a reusable Modal component to npm.

## Published Component

The custom Modal component created for this project has been published to npm:

-   **Package:** [`react-simplest-modal`](https://www.npmjs.com/package/react-simplest-modal)

## Getting Started (Development)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GoncalvesDDaniel/wealth_health_react.git
    cd wealth_health_react
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Build the application:**

    ```bash
    npm run build
    ```

    This will create `dist/` directory.

4.  **Preview the production build locally:**
    ```bash
    npm run preview
    ```

## Tech Stack Summary

-   React
-   Vite
-   Redux Toolkit
-   React Router DOM
-   CSS (Based on original styles)

## Packages Used

-   react-datepicker
-   react-data-table-component
-   react-simplest-modal (Proprietary Custom Package)

---

_(Note: Performance analysis not included in this README.)_
