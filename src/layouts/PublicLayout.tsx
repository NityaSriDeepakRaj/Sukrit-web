import { Outlet, Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { useEffect, useState } from "react";

const navLinkBase =
  "text-sm md:text-base font-medium text-sukrit-muted hover:text-sukrit-text transition-colors dark:text-sukrit-darkMuted dark:hover:text-white";

export const PublicLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("hero");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to home then scroll
      setTimeout(() => scrollToSection(id), 200);
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
    const sectionIds = ["hero", "problem", "solution", "features", "privacy", "download"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
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
            {[
              { id: "hero", label: "Home" },
              { id: "problem", label: "Problem" },
              { id: "solution", label: "Solution" },
              { id: "features", label: "Features" },
              { id: "privacy", label: "Privacy & ethics" },
              { id: "download", label: "Download app" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                className={`${navLinkBase} ${
                  activeSection === item.id
                    ? "text-sukrit-primary dark:text-white border-b-2 border-sukrit-primary pb-1"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: institute link + theme toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/institute"
              className="hidden rounded-full bg-sukrit-primary text-white px-4 py-2 text-xs md:inline-flex md:text-sm font-semibold shadow-soft hover:bg-indigo-500 transition-colors"
            >
              For institutions
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-sukrit-darkSurface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-sukrit-muted md:flex-row md:items-center md:justify-between md:px-6 dark:text-sukrit-darkMuted">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()} Sukrit. Built for calm, safe
            emotional spaces in education.
          </p>
          <div className="order-1 flex flex-wrap gap-4 md:order-2 md:justify-end">
            <NavLink to="/privacy" className="hover:text-sukrit-text">
              Privacy & ethics
            </NavLink>
            <a
              href="#"
              className="hover:text-sukrit-text"
              onClick={(e) => e.preventDefault()}
            >
              Terms (coming soon)
            </a>
            <a
              href="#"
              className="hover:text-sukrit-text"
              onClick={(e) => e.preventDefault()}
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};


