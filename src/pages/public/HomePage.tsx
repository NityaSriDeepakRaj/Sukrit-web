import { PrimaryButton } from "../../components/PrimaryButton";
import { StatCard } from "../../components/StatCard";
import { ProblemPage as ProblemContent } from "./ProblemPage";
import { SolutionPage as SolutionContent } from "./SolutionPage";
import { FeaturesPage as FeaturesContent } from "./FeaturesPage";
import { PrivacyPage as PrivacyContent } from "./PrivacyPage";
import { DownloadPage as DownloadContent } from "./DownloadPage";

const heroBg =
  "bg-[linear-gradient(135deg,rgba(92,124,250,0.12),rgba(249,181,208,0.12)),url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=60')] bg-[center_70%]";

export const HomePage = () => {
  return (
    <div className="space-y-16">
      <div
        className={`relative flex flex-col gap-10 overflow-hidden px-4 pt-10 md:flex-row md:items-center md:gap-16 md:pt-16 md:px-10 lg:px-16 ${heroBg} bg-cover bg-center`}
      >
         <div className="absolute inset-0 bg-white/70 dark:bg-slate-950/60" aria-hidden />
        {/* Hero left */}
        <section className="relative flex-1 space-y-6" id="hero">
        <span className="inline-flex items-center gap-2 rounded-full bg-sukrit-primarySoft/80 px-3 py-1 text-xs font-medium text-sukrit-primary shadow-soft/40 dark:bg-slate-800 dark:text-white">
          Calm by design · Privacy-first · Built for campuses
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-sukrit-text dark:text-white md:text-4xl lg:text-5xl">
            A gentle mental wellness space for{" "}
            <span className="bg-gradient-to-r from-sukrit-primary to-sukrit-accent bg-clip-text text-transparent">
              students and educators
            </span>
            .
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sukrit-muted dark:text-slate-200 md:text-base">
            Sukrit is a privacy-first mental wellness platform that helps
            students, teachers, counsellors, and institutions notice early
            signals of stress and respond with care — not judgment.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <PrimaryButton
            to="/#download"
            className="hover:-translate-y-[2px] active:translate-y-[1px]"
          >
            Download app
          </PrimaryButton>
          <PrimaryButton to="/institute" variant="ghost">
            For institutions
          </PrimaryButton>
          <span className="text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
            No public timelines. No ads. Just quiet support.
          </span>
        </div>

        {/* Who we support */}
        <div className="grid grid-cols-2 gap-3 text-xs text-sukrit-muted md:grid-cols-4 md:text-sm">
          {[
            {
              title: "Students",
              copy: "Mood check-ins, gentle nudges, and a safe AI companion.",
              icon: "🎧",
            },
            {
              title: "Teachers",
              copy: "Class-level wellbeing signals without exposing individuals.",
              icon: "📘",
            },
            {
              title: "Counsellors",
              copy: "Prioritise outreach based on anonymous need indicators.",
              icon: "🧭",
            },
            {
              title: "Institutions",
              copy: "Policy-level insights without ever selling or exposing data.",
              icon: "🏫",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white/80 p-4 shadow-soft/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(92,124,250,0.28)] dark:bg-slate-900/70 dark:text-sukrit-darkMuted"
            >
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sukrit-primarySoft text-lg text-sukrit-primary shadow-sm shadow-sukrit-primary/40 dark:bg-slate-800 dark:text-white">
                {item.icon}
              </div>
              <p className="font-semibold text-sukrit-text dark:text-white">
                {item.title}
              </p>
              <p className="mt-1 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero right with imagery */}
      <aside className="relative flex-1 space-y-5">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-sukrit-primarySoft/70 via-sukrit-accentSoft/60 to-white shadow-soft md:p-0">
          <div className="relative h-64 w-full md:h-80">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/30 to-transparent dark:from-sukrit-darkBg/45 dark:via-sukrit-darkBg/20" />
          </div>
          <div className="relative p-5 md:p-6 text-sukrit-muted dark:text-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-sukrit-muted dark:text-slate-300">
              A calm dashboard, not a control panel
            </p>
            <p className="mt-2 text-sm text-sukrit-muted dark:text-slate-200">
              Sukrit is designed so that no single person feels like a “case”.
              Instead, institutions see anonymous trends, while individuals
              receive personalised guidance.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatCard
                label="Campuses supported"
                value="28"
                subtle="Early pilots across colleges and schools."
              />
              <StatCard
                label="Daily mood check-ins"
                value="4.2k"
                subtle="Lightweight, 10-second reflections."
              />
              <StatCard
                label="Users needing support"
                value="~7%"
                subtle="Shown only as anonymous counts."
              />
              <StatCard
                label="Data sold"
                value="0"
                subtle="We never monetise personal data."
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white/80 p-4 text-xs text-sukrit-muted shadow-soft transition hover:-translate-y-1 hover:shadow-soft/80 dark:bg-slate-900/70 dark:text-sukrit-darkMuted">
          <p className="font-semibold text-sukrit-text dark:text-white">
            Emotional safety, not surveillance
          </p>
          <p className="mt-1.5">
            No public feeds, no “activity score”, no ranking of students. Just a
            quiet space to notice, reflect, and ask for support when needed.
          </p>
        </div>
        </aside>
      </div>

      {/* Problem section */}
      <section id="problem" className="calm-motion-bg bg-gradient-to-br from-white via-sukrit-primarySoft/30 to-white px-4 py-12 dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900">
        <div className="mx-auto max-w-6xl">
          <ProblemContent />
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="calm-motion-bg px-4">
        <div className="mx-auto max-w-6xl">
          <SolutionContent />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="calm-motion-bg px-4">
        <div className="mx-auto max-w-6xl">
          <FeaturesContent />
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="calm-motion-bg px-4">
        <div className="mx-auto max-w-6xl">
          <PrivacyContent />
        </div>
      </section>

      {/* Download */}
      <section id="download" className="calm-motion-bg px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <DownloadContent />
        </div>
      </section>
    </div>
  );
};
