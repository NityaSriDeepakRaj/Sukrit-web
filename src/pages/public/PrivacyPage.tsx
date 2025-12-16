export const PrivacyPage = () => {
  const principles = [
    {
      title: "No selling of user data",
      detail: "Revenue will never come from ads or data brokerage.",
    },
    {
      title: "Anonymous insights only",
      detail: "Dashboards show trends, not individuals. No identity exposure.",
    },
    {
      title: "Consent-based communication",
      detail:
        "Students choose who can reach out. Teachers and counsellors cannot cold-DM.",
    },
    {
      title: "Safety-first emergencies",
      detail:
        "Escalations focus on safety and care, not punishment. Clear protocols.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-sukrit-darkMuted">
          Privacy & ethics
        </p>
        <h1 className="text-3xl font-semibold text-sukrit-text dark:text-white md:text-4xl">
          Built with emotional safety at the center.
        </h1>
        <p className="text-sm leading-relaxed text-sukrit-muted dark:text-sukrit-darkMuted md:text-base">
          Sukrit is intentionally calm: no engagement hacks, no surprise
          notifications. Every feature respects boundaries and consent.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {principles.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl bg-gradient-to-r from-sukrit-primarySoft via-white to-sukrit-accentSoft p-5 shadow-soft/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(92,124,250,0.28)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:border dark:border-slate-700/60"
          >
            <h3 className="text-lg font-semibold text-sukrit-text dark:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl bg-sukrit-primarySoft/80 p-6 text-sm text-sukrit-text shadow-soft dark:bg-slate-800/80 dark:text-sukrit-darkMuted">
        <p className="font-semibold">Data handling</p>
        <ul className="mt-2 space-y-1 text-sukrit-muted">
          <li>• Encryption in transit and at rest (planned for production).</li>
          <li>• Minimal data retention; periodic anonymization.</li>
          <li>• Independent audits planned before wide release.</li>
        </ul>
        </div>
        <div className="relative h-52 overflow-hidden rounded-3xl shadow-soft">
          <img
            src="privacy-ethics.png"
            alt="Shield representing protected, anonymized data"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-sukrit-bg/60 via-transparent to-transparent dark:from-sukrit-darkBg/70" />
        </div>
      </div>
    </div>
  );
};


