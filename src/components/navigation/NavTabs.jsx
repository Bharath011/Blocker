function NavButton({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-fit text-left text-3xl uppercase tracking-wide transition-all duration-300 font-orbitron md:text-4xl ${
        active
          ? 'text-white drop-shadow-[0_0_14px_rgba(203,225,255,0.55)]'
          : 'text-white/85 hover:translate-x-1 hover:text-white'
      }`}
    >
      [ {label} ]
    </button>
  );
}

export default function NavTabs({ tabs, activeTab, onSelect }) {
  return (
    <nav className="mt-16 flex flex-col gap-9" aria-label="Primary navigation">
      {tabs.map((tab) => (
        <NavButton key={tab} label={tab} active={activeTab === tab} onClick={() => onSelect(tab)} />
      ))}
    </nav>
  );
}
