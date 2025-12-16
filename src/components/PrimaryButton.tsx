import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to?: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
};

/** Reusable rounded primary button used across public pages. */
export const PrimaryButton = ({
  to,
  children,
  variant = "solid",
  className = "",
  onClick,
}: Props) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm md:text-base font-semibold shadow-soft transition-all duration-200";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-sukrit-primary to-indigo-500 text-white hover:from-indigo-500 hover:to-sukrit-primary shadow-[0_12px_30px_rgba(15,23,42,0.35)] backdrop-blur-sm border border-white/10 dark:border-slate-700/60"
      : "bg-white/70 text-sukrit-primary border border-sukrit-primary/20 hover:border-sukrit-primary/40 hover:bg-white/90 backdrop-blur-sm dark:bg-slate-900/70 dark:text-white dark:border-slate-700 dark:hover:border-sukrit-primary/60 dark:hover:bg-slate-800";

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`${base} ${styles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};


