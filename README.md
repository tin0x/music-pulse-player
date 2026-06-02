# 🎵 Music Pulse

Music Pulse is a cutting-edge, high-performance music streaming web application built using the latest stable React ecosystem. Featuring a premium dark mode design with neon violet highlights, it offers full-scale audio playback management, dynamic data fetching, precise type safety, and responsive layouts tailored for modern web browsers.

The project strictly adheres to **Feature-Sliced Design (FSD)** architecture principles and includes advanced performance tweaks like automatic image asset optimization pipelines.

**Project was initially developed locally without version control and later imported into GitHub.**

---

## Live Demo

- **Deployed App:** [Link to Vercel](https://music-pulse-dashboard.vercel.app)
- **Design Core:** UI/UX concept inspired by [Figma Community](https://www.figma.com/community/file/1255801381916515982/music-1-music-dashboard)
- **Data Source:** Powered by [Audius API](https://docs.audius.co/api/)

---

## Key Features & Architectural Highlights

### Complete Application Views

- **Dashboard & Swipers (`dashboard-page`):** Fluid, high-performance genre/playlist sliders powered by `embla-carousel-react` with native scroll fallbacks.
- **Artist Dynamic Profiles (`artist-page`):** Displays comprehensive metadata (Location, Subscribes, Album counts, Bio) alongside a reactive tracking table containing full discography controls (as seen in `image_c8a283.jpg`).
- **Detailed Track Insights (`track-page`):** Dedicated playback views featuring blurred background ambient covers, track length metrics, release timelines, and favorite counters (as seen in `image_c8a2a7.jpg`).
- **Interactive Control Center (`settings-page`):** Allows users to dynamically toggle internationalization contexts (English / Ukrainian) and wipe targeted metadata clusters like local history or favorite tracks (as seen in `image_c8a587.png`).

### Performance & Polish

- **Asset Optimization Pipeline:** Built-in automatic image compressions via `vite-plugin-image-optimizer` relying on `sharp` and `svgo` node runtimes to ensure minimal bundle footprints and fast image loading times.
- **Skeleton States:** Zero layout shifts (CLS) achieved through custom layout placeholders utilizing `react-loading-skeleton`.
- **Reactive Notification System:** Clean, non-blocking asynchronous toast layers reflecting immediate client updates such as language modifications or system state changes.

---

## Tech Stack & Dependencies

The codebase relies strictly on a production-ready, ultra-modern tech stack:

- **Core Runtime:** React 19 (Strict Mode active), TypeScript ~5.9, Vite 8+ (Native ESM Modules setup).
- **State Architecture:** Redux Toolkit 2.11 (Slices, Selectors, Custom Action Listeners) paired with React Redux 9.2.
- **Data Hydration:** RTK Query (Robust REST API async handling, automatic polling, and caching).
- **Client Routing:** React Router DOM 7.13 (Protected routes, dynamic parameters, nested outlet layouts).
- **Forms & Inputs:** React Hook Form 7.72.
- **Styling Architecture:** Sass 1.98 (SCSS Modules), BEM Methodology, `clsx` utility modifiers, and dynamic CSS Custom Properties.
- **UI Components & Motion:** `embla-carousel-react` 8.6 (for fluid genre sliders) and `react-loading-skeleton` 3.5.
- **Build & Optimization Plugins:** `vite-plugin-image-optimizer` (powered by `sharp` and `svgo`), `vite-plugin-svgr` 4.5 (for transforming SVGs into reactive components), and `@vitejs/plugin-react` 6.0.

---

## Feature-Sliced Design (FSD) Layout

The directory hierarchy follows exact FSD slice abstractions ensuring bulletproof maintainability:

- `1_app/` — Root configurations, application styles setup, core React Router bindings, and Redux global state stores.
- `2_pages/` — Composite view components generating application routes (`dashboard-page`, `artist-page`, `track-page`, `settings-page`).
- `3_widgets/` — Complex structural layout aggregates combining isolated slices (`player-bar-widget`, `aside-widget`, `filtered-tracks-widget`).
- `4_features/` — Encapsulated user-interactive action components (`player-controls`, `toggle-lang`, `clear-history`, `duration-change`).
- `5_entities/` — Business domains, specific UI model cards, and targeted state logic slices (`track`, `artist`, `album`, `player`, `user`).
- `6_shared/` — Abstract reusable layers containing core HTTP API configuration clients, global design system styles, utility hooks (`lib`), and structural UI elements (`ui`).

---

## Getting Started Locally

1. Clone the project locally:

```bash
git clone https://github.com/tin0x/music-pulse-dashboard.git
```

2. Boot into the source directory and pull production dependencies:

```bash
cd music-pulse-dashboard
npm install
```

3. Fire up Vite local dev environment:

```bash
npm run dev
```

4. Run strict static type checks and compile production-ready assets:

```bash
npm run build
```

5. Run ESLint validation checks to ensure strict architectural formatting guidelines:

```bash
npm run lint
```
