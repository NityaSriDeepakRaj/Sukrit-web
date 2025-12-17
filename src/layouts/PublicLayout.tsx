import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinkBase =
  "text-sm md:text-base font-medium text-sukrit-muted hover:text-sukrit-text transition-colors dark:text-sukrit-darkMuted dark:hover:text-white";

export const PublicLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("hero");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Account for sticky header so section titles aren't hidden
    const headerOffset = 80; // px
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const targetPosition = id === "hero" ? 0 : Math.max(elementTop - headerOffset, 0);

    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to home then scroll
      setTimeout(() => {
        scrollToSection(id);
      }, 200);
    } else {
      scrollToSection(id);
    }
  };

  // If landing directly on / with hash, scroll after mount
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 150);
    }
  }, [location.hash]);

  // Track which section is in view to highlight in header
  useEffect(() => {
    const sectionIds = ["hero", "problem", "solution", "features", "download", "team", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (!intersecting.length) return;

        // If team is visible, always prefer highlighting Team instead of Contact
        const visibleIds = intersecting
          .map((e) => e.target.id)
          .filter(Boolean) as string[];

        if (visibleIds.includes("team")) {
          setActiveSection("team");
          return;
        }

        const mostVisible = intersecting
          .slice()
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (mostVisible?.target?.id) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: 0.4,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Check if About tab should be active (when in problem or solution sections)
  const isAboutActive = activeSection === "problem" || activeSection === "solution";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sukrit-bg via-sukrit-bg to-white dark:from-sukrit-darkBg dark:via-sukrit-darkSurface dark:to-sukrit-darkSurface">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 border-b border-slate-100/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-sukrit-darkSurface/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
          {/* Left: logo + brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sukrit-primarySoft shadow-soft dark:bg-slate-800">
              <span className="text-lg font-semibold text-sukrit-primary dark:text-white">
                s
              </span>
            </div>
            <span className="text-base font-semibold tracking-tight text-sukrit-primary dark:text-white">
              Sukrit
            </span>
          </Link>

          {/* Center: section links */}
          <div className="hidden flex-1 items-center justify-center gap-6 md:flex">
            {/* Home */}
            <a
              href="#hero"
              onClick={handleNavClick("hero")}
              className={`${navLinkBase} ${
                activeSection === "hero"
                  ? "text-sukrit-primary dark:text-white border-b-2 border-sukrit-primary pb-1"
                  : ""
              }`}
            >
              Home
            </a>

            {/* About (Problem + Solution) */}
            <a
              href="#problem"
              onClick={handleNavClick("problem")}
              className={`${navLinkBase} ${
                isAboutActive
                  ? "text-sukrit-primary dark:text-white border-b-2 border-sukrit-primary pb-1"
                  : ""
              }`}
            >
              About
            </a>

            {/* Features */}
            <a
              href="#features"
              onClick={handleNavClick("features")}
              className={`${navLinkBase} ${
                activeSection === "features"
                  ? "text-sukrit-primary dark:text-white border-b-2 border-sukrit-primary pb-1"
                  : ""
              }`}
            >
              Features
            </a>

            {/* Team */}
            <a
              href="#team"
              onClick={handleNavClick("team")}
              className={`${navLinkBase} ${
                activeSection === "team"
                  ? "text-sukrit-primary dark:text-white border-b-2 border-sukrit-primary pb-1"
                  : ""
              }`}
            >
              Team
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={handleNavClick("contact")}
              className={`${navLinkBase} ${
                activeSection === "contact"
                  ? "text-sukrit-primary dark:text-white border-b-2 border-sukrit-primary pb-1"
                  : ""
              }`}
            >
              Contact
            </a>
          </div>

          {/* Right: Download app button */}
          <div className="flex items-center">
            <a
              href="#download"
              onClick={handleNavClick("download")}
              className="rounded-full bg-gradient-to-r from-sukrit-primary to-indigo-500 text-white px-4 py-2 text-xs md:text-sm font-semibold shadow-soft hover:from-indigo-500 hover:to-sukrit-primary transition-all duration-200"
            >
              Download app
            </a>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global footer */}
      <footer className="mt-8 border-t border-slate-800/70 bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          {/* Top multi-column footer content */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand / mission */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sukrit-primarySoft/20 ring-1 ring-sukrit-primary/40">
                  <span className="text-lg font-semibold text-sukrit-primary">s</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-tight text-white">
                    Sukrit
                  </span>
                  <span className="text-[11px] text-slate-400">
                    privacy-first wellbeing platform
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Sukrit creates calm, emotionally safe digital spaces for students and
                educators&mdash;with gentle check-ins, anonymous signals, and clear
                privacy boundaries.
              </p>
            </section>

            {/* Product / Platform */}
            <nav
              aria-label="Product"
              className="space-y-3 text-xs"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    onClick={handleNavClick("features") as any}
                    className="text-slate-300 hover:text-sukrit-primary"
                  >
                    Platform overview
                  </a>
                </li>
                <li>
                  <a
                    href="#solution"
                    onClick={handleNavClick("solution") as any}
                    className="text-slate-300 hover:text-sukrit-primary"
                  >
                    How Sukrit works
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    onClick={handleNavClick("download") as any}
                    className="text-slate-300 hover:text-sukrit-primary"
                  >
                    Mobile app
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Integrations (coming soon)
                  </button>
                </li>
              </ul>
            </nav>

            {/* Resources / Support */}
            <nav
              aria-label="Resources"
              className="space-y-3 text-xs"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Help center (coming soon)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Guides for counsellors
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Implementation playbook
                  </button>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={handleNavClick("contact") as any}
                    className="text-slate-300 hover:text-sukrit-primary"
                  >
                    Support & contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Company / About */}
            <nav
              aria-label="Company"
              className="space-y-3 text-xs"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("problem")(e as any);
                    }}
                    className="text-slate-300 hover:text-sukrit-primary"
                  >
                    About the platform
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    onClick={handleNavClick("team") as any}
                    className="text-slate-300 hover:text-sukrit-primary"
                  >
                    Our team
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Campus partners
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Press kit
                  </button>
                </li>
              </ul>
            </nav>

            {/* Legal / Ethics */}
            <nav
              aria-label="Legal and ethics"
              className="space-y-3 text-xs"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Legal & ethics
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#privacy"
                    onClick={handleNavClick("privacy") as any}
                    className="text-slate-300 hover:text-sukrit-primary"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Terms of use
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Data ethics charter
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="cursor-default text-slate-500"
                  >
                    Incident response (planned)
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-[11px] text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Sukrit. Designed for calm, privacy-first
              wellbeing in education.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Follow
              </span>
              <div className="flex gap-2">
                {/* LinkedIn */}
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-sukrit-primary hover:text-sukrit-primary"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.25h4.52V24H.24V8.25zM8.34 8.25h4.33v2.14h.06c.6-1.13 2.08-2.32 4.28-2.32 4.57 0 5.41 3 5.41 6.9V24h-4.52v-7.16c0-1.71-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78V24H8.34V8.25z"
                    />
                  </svg>
                </button>
                {/* X / Twitter */}
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-sukrit-primary hover:text-sukrit-primary"
                  aria-label="X (Twitter)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M18.25 2h3.01l-6.58 7.52L22 22h-5.5l-3.9-6.02L8.03 22H5.02l7.04-8.04L2 2h5.64l3.52 5.39L18.25 2zm-2 17.2h1.67L7.86 4.7H6.05l10.2 14.5z"
                    />
                  </svg>
                </button>
                {/* Instagram */}
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:border-sukrit-primary hover:text-sukrit-primary"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1.1.7 1.6 1.2.5.5.9 1 .2 1.6.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1.1-1.2 1.6-.5.5-1 .9-1.6 1.2-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1.1-.7-1.6-1.2-.5-.5-.9-1-.2-1.6-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1.1 1.2-1.6.5-.5 1-.9 1.6-1.2.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2m0-1.7C8.7.5 8.3.5 7 .6 5.7.7 4.8.9 4 .3c-.9.4-1.7 1-2.5 1.8C.7 3 .1 3.8-.3 4.7.9 5.5.7 6.4.6 7.7.5 9 .5 9.3.5 12s0 3 .1 4.3c.1 1.3.3 2.2.7 2.9.4.9 1 1.7 1.8 2.5.8.8 1.6 1.4 2.5 1.8.7.3 1.6.6 2.9.7 1.3.1 1.6.1 4.3.1s3 0 4.3-.1c1.3-.1 2.2-.3 2.9-.7.9-.4 1.7-1 2.5-1.8.8-.8 1.4-1.6 1.8-2.5.3-.7.6-1.6.7-2.9.1-1.3.1-1.6.1-4.3s0-3-.1-4.3c-.1-1.3-.3-2.2-.7-2.9-.4-.9-1-1.7-1.8-2.5C21.2.7 20.4.1 19.5-.3c-.7-.3-1.6-.6-2.9-.7C15.3.5 15 .5 12 .5z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.8A6.2 6.2 0 0 0 5.8 12 6.2 6.2 0 0 0 12 18.2 6.2 6.2 0 0 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.3A4.1 4.1 0 0 1 7.9 12 4.1 4.1 0 0 1 12 7.9 4.1 4.1 0 0 1 16.1 12 4.1 4.1 0 0 1 12 16.1zM18.4 4.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


