export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          Paper Trader
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Practice the market.
          <br />
          Build your strategy.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A place to explore stocks and crypto with virtual money. Manual trading
          and automated strategies are coming next.
        </p>
        <p className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800">
          Under development · Trading is not available yet.
        </p>
      </div>
    </main>
  );
}
