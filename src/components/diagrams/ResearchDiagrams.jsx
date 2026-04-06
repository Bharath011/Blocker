export const EnergeticsDiagram = () => (
  <div className="flex h-full w-full flex-col items-center gap-4 p-2 md:flex-row">
    <div className="relative h-32 w-full flex-1">
      <svg viewBox="0 0 200 100" className="h-full w-full overflow-visible">
        <polyline points="20,10 20,90 90,90" fill="none" stroke="#666" strokeWidth="1" />
        <polyline points="110,10 110,90 180,90" fill="none" stroke="#666" strokeWidth="1" />
        <text x="10" y="50" fill="#999" fontSize="8" transform="rotate(-90 10,50)" textAnchor="middle">H - S</text>
        <text x="55" y="100" fill="#999" fontSize="8" textAnchor="middle">N - S</text>
        <text x="100" y="50" fill="#999" fontSize="8" transform="rotate(-90 100,50)" textAnchor="middle">H - S</text>
        <text x="145" y="100" fill="#999" fontSize="8" textAnchor="middle">H - S</text>
        <path d="M 20,90 Q 50,40 70,40 T 90,10" fill="none" stroke="#d95a2b" strokeWidth="1.5" />
        <path d="M 110,90 Q 140,70 160,70 T 180,30" fill="none" stroke="#88bbee" strokeWidth="1.5" />
      </svg>
    </div>
    <div className="flex w-1/3 flex-col justify-center space-y-2 text-xs text-gray-300 font-rajdhani">
      <div className="flex items-center gap-2"><span className="block h-px w-4 bg-gray-400" /> Enthalpy</div>
      <div className="flex items-center gap-2"><span className="block h-px w-4 bg-gray-400" /> Internal energy</div>
      <div className="flex items-center gap-2"><span className="block h-px w-4 bg-[#d95a2b]" /> States</div>
    </div>
  </div>
);

export const RocketDiagram = () => (
  <svg viewBox="0 0 300 120" className="mt-2 h-32 w-full">
    <defs>
      <linearGradient id="nozzleGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="50%" stopColor="#777" />
        <stop offset="100%" stopColor="#333" />
      </linearGradient>
    </defs>
    <path d="M 70 30 C 100 30, 110 50, 140 50 C 170 50, 180 20, 240 20 L 240 100 C 180 100, 170 70, 140 70 C 110 70, 100 90, 70 90 Z" fill="url(#nozzleGrad)" stroke="#aaa" strokeWidth="1" strokeDasharray="2,2" />
    <line x1="70" y1="30" x2="70" y2="90" stroke="#fff" strokeWidth="1" strokeDasharray="4,2" />
    <line x1="240" y1="20" x2="240" y2="100" stroke="#fff" strokeWidth="1" strokeDasharray="4,2" />
    {[35, 45, 55, 65, 75, 85].map((y, i) => (
      <g key={`in-${i}`} stroke="#ff4444" fill="#ff4444"><line x1="40" y1={y} x2="60" y2={y} strokeWidth="1.5" /><polygon transform={`translate(0, ${y})`} points="60,-2 65,0 60,2" /></g>
    ))}
    {[25, 35, 45, 55, 65, 75, 85, 95].map((y, i) => (
      <g key={`out-${i}`} stroke="#ff4444" fill="#ff4444"><line x1="250" y1={y} x2="270" y2={y} strokeWidth="1.5" /><polygon points="270,-2 275,0 270,2" transform={`translate(0, ${y})`} /></g>
    ))}
  </svg>
);

export const ChemicalsDiagram = () => (
  <svg viewBox="0 0 300 120" className="h-32 w-full">
    <defs>
      <radialGradient id="sphereBlue" cx="30%" cy="30%" r="70%"><stop offset="0%" stopColor="#88ccff" /><stop offset="100%" stopColor="#1144aa" /></radialGradient>
      <radialGradient id="sphereWhite" cx="30%" cy="30%" r="70%"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#777777" /></radialGradient>
      <radialGradient id="sphereRed" cx="30%" cy="30%" r="70%"><stop offset="0%" stopColor="#ff7777" /><stop offset="100%" stopColor="#aa1111" /></radialGradient>
    </defs>
    <g transform="translate(60, 50)"><circle cx="-12" cy="0" r="14" fill="url(#sphereBlue)" /><circle cx="12" cy="0" r="14" fill="url(#sphereBlue)" /><circle cx="-22" cy="-14" r="7" fill="url(#sphereWhite)" /><circle cx="-22" cy="14" r="7" fill="url(#sphereWhite)" /><circle cx="22" cy="-14" r="7" fill="url(#sphereWhite)" /><circle cx="22" cy="14" r="7" fill="url(#sphereWhite)" /></g>
    <g transform="translate(150, 50)"><circle cx="-14" cy="0" r="18" fill="url(#sphereWhite)" /><circle cx="14" cy="0" r="16" fill="url(#sphereRed)" /></g>
    <g transform="translate(240, 50)"><circle cx="0" cy="0" r="16" fill="url(#sphereRed)" /><circle cx="-16" cy="-12" r="10" fill="url(#sphereWhite)" /><circle cx="16" cy="-12" r="10" fill="url(#sphereWhite)" /><circle cx="-16" cy="12" r="10" fill="url(#sphereWhite)" /><circle cx="16" cy="12" r="10" fill="url(#sphereWhite)" /></g>
  </svg>
);

export const CombustionDiagram = () => (
  <svg viewBox="0 0 300 120" className="h-32 w-full">
    <defs>
      <linearGradient id="flameGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#3b82f6" /><stop offset="30%" stopColor="#eab308" /><stop offset="70%" stopColor="#ea580c" /><stop offset="100%" stopColor="rgba(234, 88, 12, 0)" /></linearGradient>
      <filter id="schlierenNoise"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" result="noise" /></filter>
    </defs>
    <path d="M 10 60 C 40 40, 80 50, 150 60 C 80 70, 40 80, 10 60 Z" fill="url(#flameGrad)" opacity="0.9" />
    <g transform="translate(180, 20)"><rect x="0" y="0" width="100" height="80" fill="#555" rx="4" filter="url(#schlierenNoise)" opacity="0.8" /><rect x="0" y="0" width="100" height="80" fill="none" stroke="#888" strokeWidth="2" rx="4" /></g>
  </svg>
);

export const ElectricDiagram = () => (
  <svg viewBox="0 0 400 120" className="h-32 w-full">
    <defs>
      <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0" /></linearGradient>
      <linearGradient id="beamGradBright" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#d8b4fe" stopOpacity="1" /><stop offset="100%" stopColor="#60a5fa" stopOpacity="0" /></linearGradient>
    </defs>
    <g transform="translate(60, 25)"><path d="M 0 15 L 30 15 L 40 0 L 40 70 L 30 55 L 0 55 Z" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" /><path d="M 40 10 L 140 -15 L 140 85 L 40 60 Z" fill="url(#beamGrad)" /></g>
    <g transform="translate(240, 25)"><rect x="0" y="10" width="40" height="50" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" rx="2" />{[15, 25, 35, 45, 55].map((y, i) => <rect key={i} x="55" y={y} width="80" height="2" fill="url(#beamGradBright)" opacity={i % 2 === 0 ? 1 : 0.6} />)}</g>
  </svg>
);

export const diagramByKey = { energetics: EnergeticsDiagram, rocket: RocketDiagram, chemicals: ChemicalsDiagram, combustion: CombustionDiagram, electric: ElectricDiagram };
