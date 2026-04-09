import { TABS } from '../../constants/navigation';

export default function Sidebar({ activeTab, onSelect }) {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-[340px] flex-col justify-center px-10">
      <p className="mb-16 text-[56px] font-black uppercase leading-[0.95] tracking-[0.04em] text-white/95 drop-shadow-[0_0_16px_rgba(121,174,255,0.2)] font-orbitron">
        Energetics and Propulsion Laboratory
      </p>

      <nav className="flex flex-col gap-11" aria-label="Section navigation">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onSelect(tab)}
              className={`w-fit text-left text-5xl font-bold uppercase tracking-[0.08em] transition-all duration-300 font-orbitron ${
                isActive
                  ? 'text-[#9ed0ff] drop-shadow-[0_0_16px_rgba(88,166,255,0.95)]'
                  : 'text-white/90 hover:text-[#c7e4ff] hover:drop-shadow-[0_0_10px_rgba(130,188,255,0.6)]'
              }`}
            >
              [ {tab} ]
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
