import { Route, Routes, Navigate } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { HomePage } from "./pages/public/HomePage";
import { BackToTop } from "./components/BackToTop";

export const App = () => {
  return (
    <>
      <Routes>
        {/* Public single-page site */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTop />
    </>
  );
};


