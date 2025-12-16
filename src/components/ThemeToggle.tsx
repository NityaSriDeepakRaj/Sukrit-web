import { useEffect, useState } from "react";

const storageKey = "sukrit-theme";

const applyThemeClass = (theme: "light" | "dark") => {
  if (typeof document === "undefined") return;
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = (localStorage.getItem(storageKey) as "light" | "dark") || null;
    const initial = stored || "dark";
    setTheme(initial);
    applyThemeClass(initial);
  }, []);

  useEffect(() => {
    applyThemeClass(theme);
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-full p-0 text-sukrit-muted transition-colors hover:text-sukrit-text dark:text-sukrit-darkMuted dark:hover:text-white"
      aria-label="Toggle theme"
    >
      <span className="text-lg leading-none">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
};


