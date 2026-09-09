# Paper Trader

Next.js + TypeScript starter for a stock and crypto paper-trading app, inside the Code Coach folder. This is an independent project with its own dependencies and Yarn lockfile.

## Run locally

Use Node.js 24 LTS and Yarn 1.22.22 (recorded in `package.json`). From this directory:

```sh
yarn install --frozen-lockfile
yarn dev
```

Open http://localhost:3000. If another app uses port 3000, run `yarn dev --port 3001`.

## Commands

```sh
yarn lint       # ESLint
yarn typecheck  # Generate route types and check TypeScript
yarn build      # Production build, including TypeScript checks
yarn start      # Serve the production build
```

## Twelve Data key

An empty `.env.local` has been prepared locally and is ignored by Git. Enter your key there:

```dotenv
TWELVE_DATA_API_KEY=your_key_here
```

For a fresh clone, copy `.env.example` to `.env.local` first. Restart the development server after changing environment variables. Keep the key on the server and never use a `NEXT_PUBLIC_` prefix. No key is included in this starter, and no Twelve Data requests are made yet.

## Structure

- `src/app/page.tsx`: starter home page.
- `src/app/layout.tsx`: shared layout and metadata.
- `src/app/globals.css`: global styles and Tailwind CSS.
- `next.config.ts`: Next.js configuration.
- `tsconfig.json`: strict TypeScript configuration; `@/*` resolves to `src/*`.

## Planned app

The app will use virtual money only. Twelve Data will supply prices and history; the app will keep its own virtual balances, positions, and trade ledger.

Next implementation steps:

1. Add a server-side Twelve Data integration with validation, caching, and request limits matched to the API plan.
2. Add persistent user portfolios and manual simulated buy/sell orders.
3. Add rule-based auto mode with start/pause, virtual budgets, position limits, and trade explanations.
4. Run auto mode in a background worker or scheduled job that can operate when the browser is closed.

Market data, user accounts, a database, trade execution, and the auto-mode worker are not implemented yet. The current scope is the working application starter.
