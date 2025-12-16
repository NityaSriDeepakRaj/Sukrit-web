import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
  items: string[];
};

export const RoleFeatureCard = ({ title, description, icon, items }: Props) => {
  return (
    <div className="group relative h-full rounded-2xl bg-white/90 p-[1px] shadow-soft/40 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(92,124,250,0.28)] dark:bg-slate-900/80 dark:border dark:border-slate-700/60">
      <div className="relative flex h-full min-h-[230px] flex-col rounded-2xl bg-gradient-to-br from-sukrit-primarySoft via-white to-sukrit-accentSoft p-5 text-sukrit-text transition-transform duration-300 ease-out group-hover:-rotate-1 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        {/* Front face: title + description */}
        <div className="pointer-events-auto flex h-full flex-col items-center justify-center text-center transition-opacity duration-200 group-hover:opacity-0">
          <div className="mb-3 flex flex-col items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sukrit-primarySoft text-sukrit-primary shadow-sm shadow-sukrit-primary/40 dark:bg-slate-800 dark:text-white">
              {icon}
            </div>
            <div className="max-w-[240px]">
              <h3 className="text-lg font-semibold text-sukrit-text dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
                {description}
              </p>
            </div>
          </div>
          <p className="text-[11px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Hover to see features
          </p>
        </div>

        {/* Back face: features list */}
        <div className="pointer-events-none absolute inset-0 flex flex-col rounded-2xl bg-white/98 p-5 opacity-0 shadow-inner transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 dark:bg-slate-900/95">
          <h3 className="text-sm font-semibold text-sukrit-text dark:text-white">
            {title.replace("features", "").trim()} features
          </h3>
          <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed text-sukrit-muted dark:text-sukrit-darkMuted">
            {items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sukrit-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


