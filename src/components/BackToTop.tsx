import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sukrit-primary to-sukrit-accent text-white shadow-lg shadow-sukrit-primary/30 transition hover:translate-y-[-3px] dark:from-slate-800 dark:to-slate-700"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};


