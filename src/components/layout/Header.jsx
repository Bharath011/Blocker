import NavTabs from '../navigation/NavTabs';

export default function Header({ tabs, activeTab, onSelect }) {
  return (
    <aside className="relative z-20 flex w-[260px] flex-col justify-between px-5 pb-10 pt-20 md:w-[320px] md:px-8">
      <div>
        <h1 className="text-3xl uppercase tracking-wide text-white/95 font-orbitron md:text-4xl">
          Energetics and Propulsion Laboratory
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#90c4ff]">IIT Hyderabad</p>

        <NavTabs tabs={tabs} activeTab={activeTab} onSelect={onSelect} />
      </div>
    </aside>
  );
}
