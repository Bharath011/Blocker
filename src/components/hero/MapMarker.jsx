const IIT_HYD = { lat: 17.5946, lon: 78.1230 };

const GLOBE_PROJECTION = {
  centerLat: 20.5,
  centerLon: 74,
  screenCenterX: 74,
  screenCenterY: 55,
  radiusX: 29,
  radiusY: 44,
};

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function toScreenCoordinates(lat, lon) {
  const latRad = toRadians(lat);
  const lonRad = toRadians(lon);
  const lat0 = toRadians(GLOBE_PROJECTION.centerLat);
  const lon0 = toRadians(GLOBE_PROJECTION.centerLon);

  const cosC =
    Math.sin(lat0) * Math.sin(latRad) +
    Math.cos(lat0) * Math.cos(latRad) * Math.cos(lonRad - lon0);

  if (cosC < 0) {
    return { x: GLOBE_PROJECTION.screenCenterX, y: GLOBE_PROJECTION.screenCenterY };
  }

  const x = Math.cos(latRad) * Math.sin(lonRad - lon0);
  const y =
    Math.cos(lat0) * Math.sin(latRad) -
    Math.sin(lat0) * Math.cos(latRad) * Math.cos(lonRad - lon0);

  return {
    x: GLOBE_PROJECTION.screenCenterX + x * GLOBE_PROJECTION.radiusX,
    y: GLOBE_PROJECTION.screenCenterY - y * GLOBE_PROJECTION.radiusY,
  };
}

export default function MapMarker() {
  const position = toScreenCoordinates(IIT_HYD.lat, IIT_HYD.lon);

  return (
    <>
      <div
        className="pointer-events-none absolute z-20"
        style={{ left: `${position.x}%`, top: `${position.y}%`, transform: 'translate(-50%, -90%)' }}
        aria-label="IIT Hyderabad marker"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute h-16 w-16 animate-ping rounded-full bg-red-500/30" />
          <span className="absolute h-10 w-10 rounded-full border-4 border-red-400/70" />
          <svg width="72" height="88" viewBox="0 0 72 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 88C36 88 66 54.89 66 32C66 14.33 52.57 0 36 0C19.43 0 6 14.33 6 32C6 54.89 36 88 36 88Z" fill="#9F2D2D" />
            <circle cx="36" cy="31.5" r="12" fill="#F2F7FF" stroke="#1C3C68" strokeWidth="7" />
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute z-20 text-[72px] font-black uppercase tracking-[0.05em] text-[#9d2f2f] drop-shadow-[0_0_14px_rgba(157,47,47,0.5)] font-orbitron"
        style={{ left: `${position.x - 6}%`, top: `${position.y - 14}%`, transform: 'translate(-50%, -50%)' }}
      >
        IIT Hyderabad
      </div>
    </>
  );
}

export { IIT_HYD, toScreenCoordinates, GLOBE_PROJECTION };
