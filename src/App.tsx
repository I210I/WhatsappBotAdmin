import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProjectPage from './pages/ProjectPage';

function AppRoutes() {
  const { user } = useAuth();
  const [projectId, setProjectId] = useState<string | null>(null);

  if (!user) return <LoginPage onLogin={() => {}} />;
  if (projectId) return <ProjectPage projectId={projectId} onBack={() => setProjectId(null)} />;
  return <DashboardPage onSelectProject={setProjectId} />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
