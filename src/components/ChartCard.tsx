type ChartCardProps = {
  title: string;
  subtitle?: string;
};

export const ChartCard = ({ title, subtitle }: ChartCardProps) => {
  // Mock trend line + area fill data points
  const points = [
    [10, 80],
    [60, 55],
    [110, 65],
    [160, 40],
    [210, 60],
    [260, 45],
    [310, 55],
  ];
  const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");

  return (
    <div className="flex flex-col rounded-2xl bg-white/90 p-4 shadow-soft/60 dark:bg-slate-900/70">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-sukrit-text dark:text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-0.5 text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
              {subtitle}
            </p>
          )}
        </div>
        <span className="rounded-full bg-sukrit-primarySoft px-2 py-0.5 text-[11px] text-sukrit-primary">
          anonymous only
        </span>
      </div>
      <div className="mt-4">
        <svg viewBox="0 0 340 120" className="w-full overflow-visible">
          <defs>
            <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#5c7cfa" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#f9b5d0" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path
            d={`${path} L 310 110 L 10 110 Z`}
            fill="url(#area)"
            stroke="none"
          />
          <path
            d={path}
            fill="none"
            stroke="#5c7cfa"
            strokeWidth={3}
            strokeLinecap="round"
          />
          {points.map(([x, y], idx) => (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r={5}
              fill="#ffffff"
              stroke="#5c7cfa"
              strokeWidth={2}
            />
          ))}
        </svg>
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-sukrit-muted dark:text-sukrit-darkMuted">
        <span>calm</span>
        <span>steady</span>
        <span>stressed</span>
        <span>overwhelmed</span>
      </div>
    </div>
  );
};


