const MolecularNetwork = () => (
  <svg
    className="pointer-events-none absolute right-0 top-0 z-0 h-96 w-full opacity-30 md:w-2/3"
    viewBox="0 0 800 400"
    fill="none"
  >
    <g stroke="#5a6a8a" strokeWidth="1.5" opacity="0.6">
      <line x1="600" y1="50" x2="700" y2="150" />
      <line x1="700" y1="150" x2="750" y2="120" />
      <line x1="700" y1="150" x2="680" y2="250" />
      <line x1="680" y1="250" x2="550" y2="220" />
      <line x1="550" y1="220" x2="600" y2="50" />
      <line x1="550" y1="220" x2="450" y2="300" />
      <line x1="680" y1="250" x2="780" y2="320" />
    </g>
    <g fill="#8899bb">
      <circle cx="600" cy="50" r="5" />
      <circle cx="700" cy="150" r="7" />
      <circle cx="750" cy="120" r="4" />
      <circle cx="680" cy="250" r="6" />
      <circle cx="550" cy="220" r="5" />
      <circle cx="450" cy="300" r="4" />
      <circle cx="780" cy="320" r="5" />
    </g>
  </svg>
);

const CircuitLines = ({ side = 'left', color = 'orange' }) => {
  const strokeColor = color === 'orange' ? '#d95a2b' : '#3b82f6';
  const isLeft = side === 'left';

  return (
    <svg
      className={`pointer-events-none absolute top-40 z-0 h-[600px] w-32 opacity-40 md:w-64 ${isLeft ? 'left-0' : 'right-0'}`}
      viewBox="0 0 200 600"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
    >
      {isLeft ? (
        <>
          <path d="M 0 50 L 80 50 L 100 70 L 200 70" />
          <path d="M 0 80 L 60 80 L 80 100 L 200 100" />
          <path d="M 0 110 L 40 110 L 60 130 L 200 130" />
          <path d="M 0 350 L 90 350 L 110 370 L 200 370" />
          <path d="M 0 380 L 50 380 L 70 400 L 200 400" />
        </>
      ) : (
        <>
          <path d="M 200 50 L 120 50 L 100 70 L 0 70" />
          <path d="M 200 80 L 140 80 L 120 100 L 0 100" />
          <path d="M 200 110 L 160 110 L 140 130 L 0 130" />
          <path d="M 200 350 L 110 350 L 90 370 L 0 370" />
          <path d="M 200 380 L 150 380 L 130 400 L 0 400" />
        </>
      )}
    </svg>
  );
};

const BottomCircuitLines = () => (
  <svg
    className="pointer-events-none absolute bottom-20 left-0 z-0 h-32 w-full opacity-40"
    preserveAspectRatio="none"
    viewBox="0 0 1000 100"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="1.5"
  >
    <path d="M 0 20 L 300 20 L 320 40 L 450 40" />
    <path d="M 0 40 L 280 40 L 300 60 L 450 60" />
    <path d="M 1000 20 L 700 20 L 680 40 L 550 40" />
    <path d="M 1000 40 L 720 40 L 700 60 L 550 60" />
  </svg>
);

export default function BackgroundDecor() {
  return (
    <>
      <MolecularNetwork />
      <CircuitLines side="left" color="orange" />
      <CircuitLines side="right" color="orange" />
      <BottomCircuitLines />
    </>
  );
}
