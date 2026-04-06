function NavButton({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2 py-1 text-sm uppercase tracking-widest transition-all duration-300 md:text-base font-orbitron ${
        active ? 'scale-105 text-[#ffaa77] drop-shadow-[0_0_8px_rgba(255,170,119,0.8)]' : 'text-gray-400 hover:scale-105 hover:text-gray-200'
      }`}
    >
      [{label}]
    </button>
  );
}

export default function NavTabs({ tabs, activeTab, onSelect }) {
  return (
    <nav className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-4 px-4">
      {tabs.map((tab) => (
        <NavButton key={tab} label={tab} active={activeTab === tab} onClick={() => onSelect(tab)} />
      ))}
    </nav>
  );
}
