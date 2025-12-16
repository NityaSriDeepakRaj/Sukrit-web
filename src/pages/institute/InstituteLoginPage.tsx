import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const InstituteLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication — in production, replace with real auth.
    navigate("/institute/dashboard");
  };

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl bg-white/90 px-6 py-10 shadow-soft dark:bg-slate-900/70">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-sukrit-darkMuted">
          Institute portal
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-sukrit-text dark:text-white md:text-3xl">
          Sign in as institute admin
        </h1>
        <p className="mt-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
          This login is mocked. Use any credentials to preview the dashboard.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-4 md:w-[420px]"
      >
        <label className="text-sm font-medium text-sukrit-text dark:text-white">
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-sukrit-text focus:border-sukrit-primary focus:outline-none focus:ring-2 focus:ring-sukrit-primary/20"
            placeholder="admin@college.edu"
            required
          />
        </label>
        <label className="text-sm font-medium text-sukrit-text dark:text-white">
          Password
          <div className="mt-2 flex items-center rounded-xl border border-slate-200 bg-white text-sukrit-text focus-within:border-sukrit-primary focus-within:ring-2 focus-within:ring-sukrit-primary/20 dark:border-slate-700 dark:bg-slate-800">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="w-full rounded-l-xl bg-transparent px-3 py-2 text-sm outline-none text-sukrit-text dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="px-3 text-sm text-sukrit-muted hover:text-sukrit-text dark:text-sukrit-darkMuted dark:hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {showPassword ? (
                  <>
                    <path d="M3 3l18 18" />
                    <path d="M10.58 10.58a3 3 0 004.24 4.24" />
                    <path d="M9.88 4.24A10.94 10.94 0 0112 4c5 0 9 3 10 8-.329 1.645-1.23 3.153-2.6 4.4" />
                    <path d="M6.1 6.1A10.94 10.94 0 002 12c.329 1.645 1.23 3.153 2.6 4.4a9.86 9.86 0 003.28 1.9" />
                  </>
                ) : (
                  <>
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </label>
        <button
          type="submit"
          className="mt-2 rounded-full bg-sukrit-primary px-4 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-indigo-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
};


