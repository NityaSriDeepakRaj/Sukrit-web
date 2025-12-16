type Props = {
  label: string;
  value: string;
  subtle?: string;
};

/** Small stat card used on home and dashboard. */
export const StatCard = ({ label, value, subtle }: Props) => {
  return (
    <div className="flex flex-col rounded-2xl bg-white/90 p-4 shadow-soft/60 transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-900/70 dark:border dark:border-slate-700/60">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
        {label}
      </span>
      <span className="mt-2 text-2xl font-semibold text-sukrit-text dark:text-white">
        {value}
      </span>
      {subtle && (
        <span className="mt-1 text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
          {subtle}
        </span>
      )}
    </div>
  );
};


