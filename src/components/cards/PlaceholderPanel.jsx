export default function PlaceholderPanel({ tab }) {
  return (
    <div className="relative z-10 mx-auto mt-12 flex min-h-[50vh] max-w-4xl flex-col items-center justify-center rounded-xl border border-gray-800 bg-[#0b1016]/80 p-8 text-center backdrop-blur-md">
      <h2 className="mb-6 text-3xl uppercase tracking-widest text-[#ff7733] drop-shadow-[0_0_10px_rgba(255,119,51,0.5)] md:text-4xl font-orbitron">{tab}</h2>
      <p className="max-w-2xl text-lg leading-relaxed text-gray-300 font-rajdhani">
        Data streams for the <span className="font-semibold text-white">{tab}</span> matrix are currently processing.
        The AstraM Lab research nexus is continuously updating our records on autonomous systems, high-energy materials, and advanced propulsion methodologies.
      </p>
    </div>
  );
}
