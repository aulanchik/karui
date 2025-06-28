# Karui

Karui (軽い) is a lightweight, modern React component library built with TypeScript and styled with the latest features of TailwindCSS v4. The name "Karui", Japanese for "light", reflects the library's philosophy of providing simple, performant, and easy-to-use UI components.

## Disclaimer
This repository is currently in early development cycle, therefore no usage instructions will be provided.

## Features

- **Modern Styling**: Utilizes Tailwind CSS v4 with `@theme` and the OKLCH color space for consistent, accessible, and high-performance styling.
- **Type-Safe**: Fully written in TypeScript, providing type safety and autocompletion out of the box.
- **Component-Driven**: Developed and documented with Storybook for isolated UI development and visual testing.
- **Fast Tooling**: Built with Vite for a blazing-fast development server and optimized production builds.
- **Comprehensive Testing**: Includes unit and integration tests powered by Vitest and Playwright.

## Local Development

To run the project locally for development or to explore the components:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aulanchik/karui.git
    cd karui
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run Storybook:**
    To view and interact with the components in an isolated environment, start the Storybook server.
    ```bash
    pnpm storybook
    ```
    This will open Storybook in your browser, usually at `http://localhost:6006`.

### Available Scripts

-   `pnpm storybook`: Starts the Storybook development server.
-   `pnpm build`: Builds the library for production.
-   `pnpm lint`: Lints the codebase using ESLint.
