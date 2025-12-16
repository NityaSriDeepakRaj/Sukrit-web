import { ChartCard } from "../../components/ChartCard";
import { StatCard } from "../../components/StatCard";

const roles = [
  { label: "Total students", value: "12,480" },
  { label: "Total teachers", value: "860" },
  { label: "Total counsellors", value: "48" },
  { label: "Users needing support", value: "~7%", subtle: "Anonymous count" },
];

const registrations = [
  { name: "Upload CSV", detail: "Bulk add students, teachers, counsellors." },
  { name: "Manual entry", detail: "Quickly register individuals." },
  { name: "Custom ID format", detail: "Define COLLEGE/YEAR/DEPT/ROLL." },
  { name: "Credential export", detail: "Download IDs and temp passwords." },
];

const workload = [
  { title: "Students needing support", value: "~7%" },
  { title: "Teacher stress indicators", value: "moderate" },
  { title: "Counsellor workload", value: "balanced" },
];

export const InstituteDashboardPage = () => {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white/90 p-6 shadow-soft dark:bg-slate-900/70">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-sukrit-darkMuted">
              Dashboard
            </p>
            <h1 className="text-2xl font-semibold text-sukrit-text dark:text-white">
              Anonymous wellbeing overview
            </h1>
            <p className="text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
              View anonymous distributions; no individual journeys are shown
              here.
            </p>
          </div>
          <span className="rounded-full bg-sukrit-primarySoft px-4 py-2 text-xs font-semibold text-sukrit-primary">
            Privacy-first
          </span>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {roles.map((role) => (
            <StatCard
              key={role.label}
              label={role.label}
              value={role.value}
              subtle={role.subtle}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <ChartCard
            title="Overall mood distribution"
            subtitle="Aggregated and anonymized"
          />
          <ChartCard
            title="Support signals"
            subtitle="Students, teachers, counsellors"
          />
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl bg-white/90 p-5 shadow-soft/60 dark:bg-slate-900/70">
            <h3 className="text-sm font-semibold text-sukrit-text dark:text-white">
              User registration
            </h3>
            <p className="mt-1 text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
              Mocked flows for now. Import via CSV or add manually.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-sukrit-muted dark:text-sukrit-darkMuted">
              {registrations.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl bg-slate-50 px-3 py-2 text-sukrit-text dark:bg-slate-800 dark:text-white"
                >
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-sukrit-muted dark:text-slate-400">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 p-5 shadow-soft/60 dark:bg-slate-900/70">
            <h3 className="text-sm font-semibold text-sukrit-text dark:text-white">
              USN / ID format
            </h3>
            <p className="mt-1 text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
              Example: COLLEGE_CODE / YEAR / DEPARTMENT / ROLL_NUMBER
            </p>
            <div className="mt-3 rounded-xl bg-sukrit-primarySoft/70 px-3 py-2 text-sm text-sukrit-text dark:bg-slate-800 dark:text-white">
              COLLEGE / 2025 / CSE / 0421
            </div>
            <p className="mt-2 text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
              Credentials: auto-generate user ID + temp password, then download
              CSV or show on-screen securely (mocked here).
            </p>
          </div>

          <div className="rounded-2xl bg-white/90 p-5 shadow-soft/60 dark:bg-slate-900/70">
            <h3 className="text-sm font-semibold text-sukrit-text dark:text-white">
              Workload & signals
            </h3>
            <div className="mt-3 space-y-2 text-sm text-sukrit-text dark:text-white">
              {workload.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 dark:bg-slate-800"
                >
                  <span>{item.title}</span>
                  <span className="rounded-full bg-sukrit-primarySoft px-2 py-1 text-xs text-sukrit-primary">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-sukrit-muted dark:text-sukrit-darkMuted">
              All data shown here is anonymized. Individual identities are never
              exposed in dashboards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


