import { useState } from "react";
import { PrimaryButton } from "../../components/PrimaryButton";

export const DownloadPage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const openModal = () => setShowComingSoon(true);
  const closeModal = () => setShowComingSoon(false);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 relative">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-sukrit-darkMuted">
          Download
        </p>
        <h1 className="text-3xl font-semibold text-sukrit-text dark:text-white md:text-4xl">
          Sukrit works on low bandwidth and edge networks.
        </h1>
        <p className="text-sm leading-relaxed text-sukrit-muted dark:text-sukrit-darkMuted md:text-base">
          Lightweight assets, offline-tolerant check-ins, and a calm interface
          that doesn’t demand constant connectivity.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="group rounded-2xl bg-gradient-to-r from-sukrit-primarySoft via-white to-sukrit-accentSoft p-5 shadow-soft/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(92,124,250,0.28)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:border dark:border-slate-700/60">
          <p className="text-sm font-semibold text-sukrit-text dark:text-white">
            Android
          </p>
          <p className="mt-1 text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
            Play Store link coming soon
          </p>
          <div className="mt-3">
            <PrimaryButton variant="solid" onClick={openModal}>
              Get placeholder APK
            </PrimaryButton>
          </div>
        </div>
        <div className="group rounded-2xl bg-gradient-to-r from-sukrit-primarySoft via-white to-sukrit-accentSoft p-5 shadow-soft/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(92,124,250,0.28)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:border dark:border-slate-700/60">
          <p className="text-sm font-semibold text-sukrit-text dark:text-white">
            iOS
          </p>
          <p className="mt-1 text-xs text-sukrit-muted dark:text-sukrit-darkMuted">
            TestFlight invite coming soon
          </p>
          <div className="mt-3">
            <PrimaryButton variant="ghost" onClick={openModal}>
              Join waitlist
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-gradient-to-r from-sukrit-primarySoft to-sukrit-accentSoft p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-sukrit-text">
            QR code placeholder
          </h2>
          <p className="mt-2 text-sm text-sukrit-muted">
            Scan to download when available. For now, this is a mock block.
          </p>
          <div className="mt-4 flex h-36 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/80 text-sukrit-muted">
            QR coming soon
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-r from-sukrit-primarySoft via-white to-sukrit-accentSoft p-6 text-sm text-sukrit-muted shadow-soft dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:text-sukrit-darkMuted">
          <p className="font-semibold text-sukrit-text dark:text-white">
            Works offline-friendly
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Lightweight assets and caching.</li>
            <li>• Stores check-ins locally until a connection returns.</li>
            <li>• Gentle reminders instead of noisy notifications.</li>
          </ul>
        </div>
      </div>

      {showComingSoon && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md rounded-3xl border border-sukrit-primary/40 bg-sukrit-darkSurface/95 p-7 text-sm text-sukrit-darkMuted shadow-[0_24px_60px_rgba(0,0,0,0.7)] dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-white text-center">
              Product Coming Soon
            </h3>
            <p className="mt-3 text-center text-sukrit-darkMuted">
              Our product will be available soon. Stay tuned for updates!
            </p>
            <div className="mt-5 flex justify-center">
              <PrimaryButton
                variant="solid"
                onClick={closeModal}
                className="px-8"
              >
                OK
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


