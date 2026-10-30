import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { AppShell } from './components/layout/AppShell';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { PostsPage } from './pages/PostsPage';
import { PostDetailPage } from './pages/PostDetailPage';
import { LabPage } from './pages/LabPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HashRouter>
      <ScrollToTop />
      <AppShell theme={theme} onToggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<HomePage onToggleTheme={toggleTheme} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:slug" element={<PostDetailPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </HashRouter>
  );
}

export default App;
