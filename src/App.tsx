import { Route, Routes, Navigate } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { InstituteLayout } from "./layouts/InstituteLayout";
import { HomePage } from "./pages/public/HomePage";
import { InstituteLoginPage } from "./pages/institute/InstituteLoginPage";
import { InstituteDashboardPage } from "./pages/institute/InstituteDashboardPage";
import { BackToTop } from "./components/BackToTop";

export const App = () => {
  return (
    <>
      <Routes>
        {/* Public single-page site */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Institute portal routes */}
        <Route path="/institute" element={<InstituteLayout />}>
          <Route index element={<InstituteLoginPage />} />
          {/* In a real app you'd protect this route; for now it's just a mock */}
          <Route path="dashboard" element={<InstituteDashboardPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTop />
    </>
  );
};


