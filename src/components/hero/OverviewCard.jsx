export default function OverviewCard({ children }) {
  return (
    <section className="absolute bottom-8 left-[370px] right-10 z-20 rounded-3xl border border-white/25 bg-[#07172f]/44 p-8 backdrop-blur-xl">
      <h3 className="text-3xl font-bold uppercase tracking-[0.18em] text-[#9ed0ff] font-orbitron">Overview</h3>
      <p className="mt-3 text-2xl leading-relaxed text-white/90 font-rajdhani">{children}</p>
    </section>
  );
}
