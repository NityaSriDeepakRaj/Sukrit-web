export const ProblemPage = () => {
  const items = [
    {
      title: "Students",
      body: "Juggle academics, expectations, and belonging. Stress and quiet burnout often go unnoticed until they surface as disengagement.",
    },
    {
      title: "Teachers",
      body: "Carry academic load plus emotional labor. Limited time to spot early signals, and little training on mental health response.",
    },
    {
      title: "Counsellors",
      body: "Operate with small teams serving large populations. High caseloads make proactive outreach difficult.",
    },
    {
      title: "Institutions",
      body: "Need policy-level clarity without exposing individuals. Traditional surveys are slow, and dashboards often feel punitive.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-sukrit-darkMuted">
          The rising quiet
        </p>
        <h1 className="text-3xl font-semibold text-sukrit-text dark:text-white md:text-4xl">
          Mental load is rising across campuses, but help often arrives late.
        </h1>
        <p className="text-sm leading-relaxed text-sukrit-muted dark:text-sukrit-darkMuted md:text-base">
          Students, teachers, and counsellors experience stress differently.
          Without gentle, early signals, institutions risk reacting after
          burnout — not before. Sukrit focuses on early noticing and calm
          response, not surveillance.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl bg-gradient-to-r from-sukrit-primarySoft via-white to-sukrit-accentSoft p-5 shadow-soft/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(92,124,250,0.28)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:border dark:border-slate-700/60"
          >
            <h3 className="text-lg font-semibold text-sukrit-text dark:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-sukrit-primarySoft via-white to-sukrit-accentSoft p-6 shadow-soft dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <h2 className="text-xl font-semibold text-sukrit-text dark:text-white">
          What we avoid
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
              <li>• Clinical jargon that alienates students.</li>
              <li>• Public feeds that risk comparison or judgment.</li>
              <li>• Alarmist alerts that add anxiety to staff.</li>
              <li>• Data models that sell or expose individual journeys.</li>
            </ul>
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl md:h-56">
            <img
              src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=1100&q=80"
              alt="Calm lounge"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-transparent to-transparent dark:from-sukrit-darkBg/70" />
          </div>
        </div>
      </div>
    </div>
  );
};


