export default function SectionHeading({ title, accent, accentColor = 'text-[#d95a2b]', barColor = 'via-[#3b82f6]' }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl uppercase tracking-widest text-white font-orbitron">
        {title} <span className={accentColor}>{accent}</span>
      </h2>
      <div className={`mx-auto h-1 w-24 bg-gradient-to-r from-transparent ${barColor} to-transparent`} />
    </div>
  );
}
