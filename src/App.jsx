import { useState } from 'react';
import HeroSection from './components/hero/HeroSection';
import MapMarker from './components/hero/MapMarker';
import OverviewCard from './components/hero/OverviewCard';
import Sidebar from './components/layout/Sidebar';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';

const PAGE_COPY = {
  Home: {
    title: 'Advancing Energetics and Propulsion for Next-Generation Aerospace Systems',
    overview:
      'We conduct fundamental and applied research in chemical, hybrid, and electric propulsion systems with emphasis on energetic materials, ignition physics, and mission-ready validation.',
  },
  Team: {
    title: 'Interdisciplinary Team Building India\'s Next Aerospace Breakthroughs',
    overview:
      'Our team includes faculty, doctoral scholars, and M.Tech researchers working across combustion diagnostics, plasma systems, and propulsion design optimization.',
  },
  Projects: {
    title: 'Mission-Driven Projects in High-Impact Propulsion Research',
    overview:
      'From high-density fuels to electric thrusters, our projects partner with government and industry organizations to solve real mission constraints.',
  },
  Publications: {
    title: 'Peer-Reviewed Publications from the EPL Research Pipeline',
    overview:
      'Publication data and downloadable references are being synced with our current archive and will be live soon.',
  },
  Updates: {
    title: 'Latest Laboratory Announcements and Program Milestones',
    overview:
      'Track project launches, conference outcomes, and student opportunities as they are released.',
  },
  'Join us': {
    title: 'Join the EPL Mission in Aerospace Innovation',
    overview:
      'Openings for interns, research assistants, and graduate candidates will be published here.',
  },
};

function CurrentPage({ activeTab }) {
  if (activeTab === 'Home') return <HomePage />;
  if (activeTab === 'Team') return <TeamPage />;
  if (activeTab === 'Projects') return <ProjectsPage />;
  return <PlaceholderPage tab={activeTab} />;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const copy = PAGE_COPY[activeTab] ?? PAGE_COPY.Home;

  return (
    <div className="app-scene relative min-h-screen overflow-hidden text-white">
      <div className="scene-overlay absolute inset-0" />

      <Sidebar activeTab={activeTab} onSelect={setActiveTab} />

      <MapMarker />
      <HeroSection title={copy.title} />

      <div className="absolute left-[390px] right-[4%] top-[10%] z-20 max-h-[42vh] overflow-auto rounded-3xl border border-white/20 bg-[#051127]/34 p-6 backdrop-blur-md">
        <CurrentPage activeTab={activeTab} />
      </div>

      <OverviewCard>{copy.overview}</OverviewCard>
    </div>
  );
}
