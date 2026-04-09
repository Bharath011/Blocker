export default function HeroSection({ title, subtitle }) {
  return (
    <section className="pointer-events-none absolute bottom-[16%] right-[4.5%] z-20 max-w-[46vw] text-right">
      <h2 className="text-7xl font-black uppercase leading-[1.06] tracking-[0.045em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.26)] font-orbitron">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-3xl text-white/90 font-rajdhani">{subtitle}</p> : null}
    </section>
  );
}
