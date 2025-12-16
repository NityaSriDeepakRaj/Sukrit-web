import { RoleFeatureCard } from "../../components/RoleFeatureCard";

export const FeaturesPage = () => {
  const roles = [
    {
      title: "Student features",
      description: "Feel seen without being watched.",
      icon: "🎧",
      items: [
        "Quick mood check-ins with calming gradients.",
        "AI companion tuned to favourite color, hobbies, and interests.",
        "Private journal and guided reflections.",
        "Ask for help with consent; no public feeds.",
      ],
    },
    {
      title: "Teacher features",
      description: "Support classes without exposing individuals.",
      icon: "📘",
      items: [
        "Anonymous class-level wellbeing signals.",
        "Suggested gentle check-in prompts.",
        "Stress indicators without names attached.",
        "Collaborate with counsellors via internal notes (consent-based).",
      ],
    },
    {
      title: "Counsellor features",
      description: "Prioritise outreach calmly.",
      icon: "🧭",
      items: [
        "Anonymous queues showing who may need support.",
        "Workload overview and soft triage hints.",
        "Consent-based messaging; no cold outreach.",
        "Session resources linked to mood patterns.",
      ],
    },
    {
      title: "Institution features",
      description: "Policy-level clarity without surveillance.",
      icon: "🏫",
      items: [
        "Aggregated mood distribution across cohorts.",
        "Support need heatmaps (no identities).",
        "Teacher and counsellor workload indicators.",
        "Custom ID formats for secure onboarding.",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-sukrit-darkMuted">
          Role-based clarity
        </p>
        <h1 className="text-3xl font-semibold text-sukrit-text dark:text-white md:text-4xl">
          Features tailored for every role in the campus ecosystem.
        </h1>
        <p className="text-sm leading-relaxed text-sukrit-muted dark:text-sukrit-darkMuted md:text-base">
          Each role sees what is necessary — and nothing more. Students keep
          control of their space; staff see anonymized signals to act with care.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {roles.map((role) => (
          <RoleFeatureCard
            key={role.title}
            title={role.title}
            description={role.description}
            icon={<span className="text-lg">{role.icon}</span>}
            items={role.items}
          />
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-sukrit-primarySoft via-white to-sukrit-accentSoft shadow-soft dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="grid md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-sukrit-text dark:text-white">
              Built for emotional safety
            </h3>
            <p className="mt-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
              Visuals stay calm; language stays reassuring. We use color
              psychology for mood-based UI without alarmist tones. Anonymous
              analytics ensure no one is “watched,” only trends are observed.
            </p>
            <p className="mt-3 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
              Teachers and counsellors get just enough to act with care; students
              hold control over who can reach out.
            </p>
          </div>
          <div className="relative h-60 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=900&q=80"
              alt="Reflective person"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-sukrit-bg/80 via-transparent to-transparent dark:from-sukrit-darkBg/70" />
          </div>
        </div>
      </div>
    </div>
  );
};


