# sukrit — calm mental wellness web experience

React + Vite + Tailwind project for the sukrit platform. Includes a public marketing site and a mocked institute portal showcasing login, dashboard, registration flows, ID formats, and anonymous analytics.

## Scripts
- `npm install` — install dependencies
- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run preview` — preview production build

## Structure
- `src/layouts` — public and institute layouts
- `src/components` — reusable UI (buttons, cards, chart placeholder)
- `src/pages/public` — public marketing pages (home, problem, solution, features, privacy, download)
- `src/pages/institute` — portal pages (login, dashboard mock)

## Notes
- Uses mock data and placeholder charts; no real auth or backend.
- Mobile-first, calm palette via Tailwind (`sukrit` colors in `tailwind.config.js`).
- Portal dashboard shows only anonymized signals; language avoids alarmism.


