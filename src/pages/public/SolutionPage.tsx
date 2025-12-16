export const SolutionPage = () => {
  const pillars = [
    {
      title: "Mood-based UI",
      detail:
        "Gentle gradients that shift with mood selections. No harsh reds; calm tones that reduce cognitive load.",
    },
    {
      title: "AI companion",
      detail:
        "Personalised by mood, favourite color, hobbies, and interests. Encourages reflection without judgment.",
    },
    {
      title: "Confidential communication",
      detail:
        "Internal, consent-first messaging between students, teachers, and counsellors — never public feeds.",
    },
    {
      title: "Anonymous institutional analytics",
      detail:
        "Aggregated insights only. No individual journeys; just trends to guide supportive policies.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-sukrit-darkMuted">
          The Sukrit approach
        </p>
        <h1 className="text-3xl font-semibold text-sukrit-text dark:text-white md:text-4xl">
          A complete mental wellness ecosystem that prioritises emotional
          safety.
        </h1>
        <p className="text-sm leading-relaxed text-sukrit-muted dark:text-sukrit-darkMuted md:text-base">
          Sukrit is built to feel gentle: color psychology, short check-ins, and
          clear consent flows. Institutions see anonymous signals; individuals
          receive personalised support.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group rounded-2xl bg-gradient-to-r from-sukrit-primarySoft via-white to-sukrit-accentSoft p-5 shadow-soft/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(92,124,250,0.28)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:border dark:border-slate-700/60"
          >
            <h3 className="text-lg font-semibold text-sukrit-text dark:text-white">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
              {pillar.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-gradient-to-br from-sukrit-primarySoft via-white to-sukrit-accentSoft p-6 shadow-soft dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
          <h2 className="text-xl font-semibold text-sukrit-text dark:text-white">
            Designed for low bandwidth
          </h2>
          <p className="mt-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
            Sukrit works even on edge networks with lightweight assets and offline
            tolerant check-ins, ensuring accessibility for every learner.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80"
            alt="Supportive environment"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sukrit-bg/70 via-transparent to-transparent dark:from-sukrit-darkBg/70" />
        </div>
      </div>
    </div>
  );
};


