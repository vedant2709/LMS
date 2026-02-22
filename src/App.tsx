import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CatalogPage from './pages/CatalogPage';
import AllCoursesPage from './pages/AllCoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import AboutPage from './pages/AboutPage';
import AdminPanelPage from './pages/AdminPanelPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/courses" element={<AllCoursesPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPanelPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        {/* Fallback routes to dashboard for demo purposes */}
        <Route path="/my-courses" element={<DashboardPage />} />
        <Route path="/schedule" element={<DashboardPage />} />
        <Route path="/certificates" element={<DashboardPage />} />
        <Route path="/messages" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}
