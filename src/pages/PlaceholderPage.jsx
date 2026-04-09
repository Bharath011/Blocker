export default function PlaceholderPage({ tab }) {
  return (
    <section className="relative flex min-h-screen items-center justify-end py-14">
      <div className="max-w-4xl rounded-2xl border border-white/20 bg-[#071328]/70 p-10 text-right backdrop-blur-md">
        <h2 className="text-5xl uppercase tracking-wide text-white font-orbitron">{tab}</h2>
        <p className="mt-5 text-xl leading-relaxed text-[#d7e9ff] font-rajdhani">
          This section is being refreshed with the new mission-control visual style.
          Next update will include curated datasets, media cards, and publication-grade metadata layouts.
        </p>
      </div>
    </section>
  );
}
