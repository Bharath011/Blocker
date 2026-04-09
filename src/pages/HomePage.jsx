export default function HomePage() {
  return (
    <section className="relative flex min-h-screen items-center justify-end pb-20 pt-12">
      <div className="max-w-3xl text-right">
        <p className="text-5xl uppercase tracking-wide text-[#9f2f2f] drop-shadow-[0_0_12px_rgba(160,31,31,0.5)] font-orbitron md:text-7xl">
          IIT Hyderabad
        </p>
        <div className="mt-3 flex justify-end">
          <div className="rounded-full border-8 border-[#8f2626] bg-white p-3 shadow-[0_0_25px_rgba(143,38,38,0.5)]" aria-hidden>
            <div className="h-5 w-5 rounded-full bg-[#0f2f5f]" />
          </div>
        </div>

        <p className="mt-20 text-4xl uppercase leading-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] font-orbitron md:text-6xl">
          Advancing energetics and propulsion for next-generation aerospace systems
        </p>
      </div>
    </section>
  );
}
