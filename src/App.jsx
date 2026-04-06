import { useMemo, useState } from 'react';
import BackgroundDecor from './components/background/BackgroundDecor';
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#050810] text-white selection:bg-[#d95a2b] selection:text-white font-rajdhani">
      <BackgroundDecor />
      <Header tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />
      <main className="relative w-full">
        <CurrentView activeTab={activeTab} />
      </main>
      <Footer />
    </div>
  );
}
