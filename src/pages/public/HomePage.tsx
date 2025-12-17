import { PrimaryButton } from "../../components/PrimaryButton";
import { StatCard } from "../../components/StatCard";
import { ProblemPage as ProblemContent } from "./ProblemPage";
import { SolutionPage as SolutionContent } from "./SolutionPage";
import { FeaturesPage as FeaturesContent } from "./FeaturesPage";
import { PrivacyPage as PrivacyContent } from "./PrivacyPage";
import { DownloadPage as DownloadContent } from "./DownloadPage";
import nityaPic from "../../assets/Nitya pic.jpeg";
import keshavPic from "../../assets/Keshav pic.jpg";

const heroBg =
  "bg-[linear-gradient(135deg,rgba(92,124,250,0.12),rgba(249,181,208,0.12)),url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=60')] bg-[center_70%]";

export const HomePage = () => {
  return (
    <div className="space-y-10">
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
      <section id="problem" className="calm-motion-bg bg-gradient-to-br from-white via-sukrit-primarySoft/30 to-white px-4 py-8 dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900">
        <div className="mx-auto max-w-6xl">
          <ProblemContent />
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="calm-motion-bg px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <SolutionContent />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="calm-motion-bg px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <FeaturesContent />
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="calm-motion-bg px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <PrivacyContent />
        </div>
      </section>

      {/* Download */}
      <section id="download" className="calm-motion-bg px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <DownloadContent />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="calm-motion-bg px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Our Team</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Card 1: Nitya Sri Deepak Raj */}
            <div className="group relative rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_32px_rgba(56,189,248,0.5)]">
              {/* Profile Photo */}
              <div className="mb-4 flex justify-center">
                <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400 bg-slate-900">
                  <img
                    src={nityaPic}
                    alt="Nitya Sri Deepak Raj"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-center text-lg font-semibold text-cyan-400">
                Nitya Sri Deepak Raj
              </h3>

              {/* Role */}
              <p className="mt-1 text-center text-xs text-slate-300 tracking-wide uppercase">
                Frontend Developer
              </p>

              {/* Description */}
              <p className="mt-3 text-center text-xs leading-relaxed text-slate-400 max-w-md mx-auto">
                Crafts Sukrit&apos;s user experience and interfaces, focusing on
                calm visuals, accessibility, and smooth interactions across the
                entire platform.
              </p>

              {/* Social Links */}
              <div className="mt-5 flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/nitya-sri-deepak-raj-ba5911311/"
                  className="flex h-9 w-9 items-center justify-center text-cyan-400 transition-colors hover:text-cyan-300"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://nitya-portfolio-navy.vercel.app/"
                  className="flex h-9 w-9 items-center justify-center text-cyan-400 transition-colors hover:text-cyan-300"
                  aria-label="Portfolio"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2: Keshav Agrawal */}
            <div className="group relative rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_32px_rgba(56,189,248,0.5)]">
              {/* Profile Photo */}
              <div className="mb-4 flex justify-center">
                <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-cyan-400 bg-slate-900">
                  <img
                    src={keshavPic}
                    alt="Keshav Agrawal"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-center text-lg font-semibold text-cyan-400">
                Keshav Agrawal
              </h3>

              {/* Role */}
              <p className="mt-1 text-center text-xs text-slate-300 tracking-wide uppercase">
                Backend Developer
              </p>

              {/* Description */}
              <p className="mt-3 text-center text-xs leading-relaxed text-slate-400 max-w-md mx-auto">
                Develops Sukrit&apos;s core systems with a focus on reliability,
                security, and performance, so institutions can support wellbeing
                at scale.
              </p>

              {/* Social Links */}
              <div className="mt-5 flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/keshav-agrawal-39a39431a/"
                  className="flex h-9 w-9 items-center justify-center text-cyan-400 transition-colors hover:text-cyan-300"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://keshav-portfolio-vert.vercel.app/"
                  className="flex h-9 w-9 items-center justify-center text-cyan-400 transition-colors hover:text-cyan-300"
                  aria-label="Portfolio"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="calm-motion-bg px-4 py-10 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Get in Touch</h2>
          </div>

          <div className="group relative rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 p-6 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_32px_rgba(56,189,248,0.5)]">
            <p className="text-sm leading-relaxed text-slate-300 text-center">
              Have questions, ideas, or feedback about Sukrit? We&apos;d love to hear from you.
              Reach out and we&apos;ll get back as soon as we can.
            </p>

            <div className="mt-6 flex flex-col items-center gap-2 text-sm">
              <span className="text-xs uppercase tracking-[0.18em] text-cyan-400">
                Reach out
              </span>
              <a
                href="mailto:agrawalkeshav002@gmail.com"
                className="text-base font-medium text-white hover:text-cyan-300 transition-colors"
              >
                agrawalkeshav002@gmail.com
              </a>
              <p className="mt-1 text-[11px] text-slate-500 text-center">
                We keep conversations calm, private, and focused on support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
