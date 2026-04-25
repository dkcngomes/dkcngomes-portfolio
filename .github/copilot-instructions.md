# Copilot instructions

## Build, test, and lint commands

- `npm install` installs dependencies.
- `npm start` runs the Create React App development server.
- `npm run build` creates the production build in `build/`. Netlify uses the same command from `netlify.toml`.
- `npm test` runs the Jest test runner in watch mode via `react-scripts`.
- `npm test -- --watchAll=false` runs the test suite once in a non-interactive session.
- `npm test -- --watchAll=false --runInBand --testPathPattern=src/App.test.jsx` runs a single test file. There are currently no committed `*.test.*` files, so create the target test first.
- There is no dedicated `npm run lint` script. ESLint comes from `react-scripts` through the `react-app` config and is surfaced during `npm start` and `npm run build`.

## High-level architecture

- This repository is a small Create React App single-page portfolio. `src/index.js` is the only entry point and mounts `src/App.jsx` into the `#root` element from `public/index.html`.
- `src/App.jsx` currently owns nearly all page structure and content in one component. Navigation, hero, about/skills, contact form, and footer are all defined there, and small data structures such as `skills` live inline inside the component.
- Styling is split between inline Tailwind utility classes in `src/App.jsx` and shared global CSS in `src/index.css`. `index.css` provides the base theme variables plus reusable effects and component-like classes, while `tailwind.config.js` extends fonts, colors, and animations for the site's dark theme.
- `public/index.html` provides the SPA shell and loads the Google fonts used by the theme.
- Deployment is Netlify-oriented: `netlify.toml` builds with `npm run build`, publishes `build/`, and rewrites all routes to `index.html` for SPA routing.

## Key conventions

- Treat `src/App.jsx` as the current source of truth for portfolio content and section layout. The README still mentions editing a top-level `DATA` object, but that object does not exist in the current implementation.
- Preserve the single-page anchor navigation pattern. Fixed-nav links in `App.jsx` use section IDs such as `#about` and `#contact`; if sections are renamed or moved, update both the link targets and the section `id` attributes together.
- Keep the visual system aligned with the existing dark portfolio style: one-off layout and color choices are usually expressed directly with Tailwind classes in JSX, while reusable treatments belong in `src/index.css` or `tailwind.config.js`.
- Static files referenced with absolute paths like `/profile.png` are expected to live under `public/`, not be imported from `src/`.
- The contact form is only a presentational UI right now. `formData` state exists in `src/App.jsx`, but the inputs are not wired to it and there is no submit handler, so form changes usually require both UI wiring and behavior updates in the same file.
- If deployment behavior changes, keep `netlify.toml` in sync with the app so local build output and Netlify production settings stay aligned.
