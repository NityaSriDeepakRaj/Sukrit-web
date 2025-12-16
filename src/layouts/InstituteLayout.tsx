import { Outlet, NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

export const InstituteLayout = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");
  const navigate = useNavigate();

  return (
    <div className="calm-motion-bg min-h-screen bg-sukrit-bg dark:bg-sukrit-darkBg">
      <header className="border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-sukrit-darkSurface">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sukrit-primarySoft dark:bg-slate-800">
              <span className="text-sm font-semibold text-sukrit-primary dark:text-white">
                s
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-sukrit-text dark:text-white">
                Sukrit institute portal
              </span>
              <span className="text-[11px] text-sukrit-muted dark:text-sukrit-darkMuted">
                privacy-first wellness overview
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
            <ThemeToggle />
            {isDashboard && (
              <>
                <span className="hidden md:inline">Signed in as</span>
                <span className="rounded-full bg-sukrit-primarySoft px-3 py-1 font-medium text-sukrit-primary dark:bg-slate-800 dark:text-white">
                  demo-admin@institute
                </span>
                <button
                  type="button"
                  onClick={() => navigate("/institute")}
                  className="ml-1 rounded-full border border-slate-200/70 px-3 py-1 text-[11px] font-semibold text-sukrit-text hover:bg-slate-50 dark:border-slate-700 dark:text-sukrit-darkMuted dark:hover:bg-slate-800"
                >
                  Log out
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl flex-1 gap-6 px-4 py-6 md:px-6 md:py-8">
        {isDashboard && (
          <aside className="hidden w-52 shrink-0 rounded-2xl bg-white/80 p-4 text-sm text-sukrit-muted shadow-soft/40 dark:bg-slate-900/70 dark:text-sukrit-darkMuted md:block">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              Navigation
            </p>
            <nav className="flex flex-col gap-1">
              <NavLink
                to="/institute/dashboard"
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm ${
                    isActive
                      ? "bg-sukrit-primarySoft text-sukrit-primary font-medium dark:bg-slate-800 dark:text-white"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`
                }
              >
                Overview
              </NavLink>
            </nav>
            <div className="mt-6 rounded-xl bg-sukrit-accentSoft px-3 py-3 text-[11px] leading-relaxed text-sukrit-text dark:bg-slate-800 dark:text-sukrit-darkMuted">
              <p className="font-semibold">Privacy reminder</p>
              <p className="mt-1">
                This portal only shows anonymous mood and support signals. No
                individual journeys are visible here.
              </p>
            </div>
          </aside>
        )}

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};


