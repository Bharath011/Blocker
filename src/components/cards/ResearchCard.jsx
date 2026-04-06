export default function ResearchCard({ title, color, desc, children }) {
  const glowClass = color === 'blue' ? 'card-glow-blue' : 'card-glow-orange';

  return (
    <article className={`relative flex flex-col overflow-hidden rounded-lg p-5 transition-transform duration-500 hover:scale-[1.02] ${glowClass}`}>
      <h3 className="mb-2 text-lg uppercase tracking-wider text-white drop-shadow-md md:text-xl font-orbitron">{title}</h3>
      <div className="relative z-10 flex flex-grow items-center justify-center py-2">{children}</div>
      <p className="relative z-10 mt-3 border-t border-gray-700/50 pt-2 text-sm leading-relaxed text-gray-300 font-rajdhani">{desc}</p>
    </article>
  );
}
