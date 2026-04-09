import { useMemo, useState } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { CORE_TABS, TABS } from './constants/navigation';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';

function CurrentView({ activeTab }) {
  if (activeTab === 'Home') return <HomePage />;
  if (activeTab === 'Team') return <TeamPage />;
  if (activeTab === 'Projects') return <ProjectsPage />;
  if (!CORE_TABS.has(activeTab)) return <PlaceholderPage tab={activeTab} />;
  return null;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = useMemo(() => TABS, []);

  return (
    <div className="app-bg relative min-h-screen overflow-hidden text-white font-rajdhani">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(17,94,182,0.2),transparent_45%),linear-gradient(90deg,rgba(4,10,24,0.92)_0%,rgba(4,10,24,0.72)_28%,rgba(4,10,24,0.3)_58%,rgba(4,10,24,0.65)_100%)]" />

      <div className="relative z-10 flex min-h-screen">
        <Header tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
        <main className="flex-1 pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-2">
          <CurrentView activeTab={activeTab} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
