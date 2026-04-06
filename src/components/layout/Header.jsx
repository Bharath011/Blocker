import NavTabs from '../navigation/NavTabs';

export default function Header({ tabs, activeTab, onSelect }) {
  return (
    <header className="relative z-10 border-b border-gray-800/50 bg-[#050810]/60 px-4 pb-8 pt-16 text-center backdrop-blur-sm">
      <h1 className="title-gradient mb-2 text-3xl font-bold uppercase tracking-widest md:text-5xl lg:text-6xl font-orbitron">
        Energetics and Propulsion
        <br />
        Laboratory
      </h1>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b82f6] md:text-sm font-rajdhani">
        Advanced Aerospace Research & Development
      </p>
      <NavTabs tabs={tabs} activeTab={activeTab} onSelect={onSelect} />
    </header>
  );
}
