"use client";

type Props = {
  variant: number;
  className?: string;
};

const STROKE = "rgba(26,24,21,0.62)";
const STROKE_SOFT = "rgba(26,24,21,0.3)";
const FILL_BEIGE = "#E4DAC5";
const FILL_BEIGE_2 = "#DDD0B4";
const BRONZE = "#8C6E48";

function Scene({ variant }: { variant: number }) {
  const common = {
    fill: "none",
    stroke: STROKE,
    strokeWidth: 1,
    vectorEffect: "non-scaling-stroke" as const,
  };
  const soft = { ...common, stroke: STROKE_SOFT };

  switch (variant % 8) {
    case 1: // Corporate office — plan grid + partitions
      return (
        <g>
          <rect x="40" y="40" width="520" height="320" {...soft} />
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={i} x1={40 + i * 74.3} y1="40" x2={40 + i * 74.3} y2="360" {...soft} />
          ))}
          {[[70, 70, 130, 100], [230, 70, 130, 100], [390, 70, 130, 100], [70, 200, 210, 130], [310, 200, 210, 130]].map(
            ([x, y, w, h], i) => (
              <rect key={i} x={x} y={y} width={w} height={h} {...common} />
            )
          )}
          <rect x="70" y="70" width="130" height="100" fill={FILL_BEIGE} opacity="0.5" />
          <rect x="310" y="200" width="210" height="130" fill={FILL_BEIGE_2} opacity="0.5" />
          <line x1="40" y1="40" x2="560" y2="360" stroke={BRONZE} strokeWidth="0.75" opacity="0.5" />
        </g>
      );
    case 2: // Restaurant — arch + place settings
      return (
        <g>
          <path d="M120 360 V180 A180 180 0 0 1 480 180 V360" {...common} />
          <path d="M120 360 V200 A180 180 0 0 1 480 200 V360" {...soft} />
          {[190, 300, 410].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy="300" r="34" {...common} />
              <circle cx={cx} cy="300" r="10" fill={FILL_BEIGE_2} stroke={STROKE} strokeWidth="0.75" />
            </g>
          ))}
          <line x1="90" y1="360" x2="510" y2="360" {...common} />
          <line x1="300" y1="180" x2="300" y2="60" stroke={BRONZE} strokeWidth="0.75" opacity="0.55" />
        </g>
      );
    case 3: // Villa elevation
      return (
        <g>
          <path d="M80 220 L300 90 L520 220 V360 H80 Z" {...common} />
          <line x1="80" y1="220" x2="520" y2="220" {...soft} />
          {[130, 210, 290, 370, 450].map((x, i) => (
            <rect key={i} x={x} y="250" width="46" height="70" {...soft} />
          ))}
          <rect x="270" y="290" width="60" height="70" {...common} fill={FILL_BEIGE} opacity="0.4" />
          <line x1="300" y1="90" x2="300" y2="360" stroke={BRONZE} strokeWidth="0.6" opacity="0.4" strokeDasharray="2 5" />
        </g>
      );
    case 4: // Oil & gas workstation floor — dense rows + gauges
      return (
        <g>
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={60 + c * 96}
                y={60 + r * 68}
                width="76"
                height="48"
                {...(r === 1 && c === 2 ? common : soft)}
                fill={r === 1 && c === 2 ? FILL_BEIGE : "none"}
              />
            ))
          )}
          <circle cx="520" cy="330" r="26" {...common} />
          <line x1="520" y1="330" x2="536" y2="316" {...common} />
        </g>
      );
    case 5: // Bedroom
      return (
        <g>
          <rect x="90" y="180" width="300" height="160" {...common} />
          <rect x="90" y="180" width="300" height="36" fill={FILL_BEIGE_2} opacity="0.6" stroke={STROKE} strokeWidth="0.75" />
          <ellipse cx="150" cy="200" rx="30" ry="14" {...soft} />
          <ellipse cx="230" cy="200" rx="30" ry="14" {...soft} />
          <rect x="430" y="90" width="110" height="150" {...soft} />
          <line x1="430" y1="90" x2="540" y2="240" {...soft} />
          <line x1="540" y1="90" x2="430" y2="240" {...soft} />
          <line x1="90" y1="360" x2="540" y2="360" stroke={BRONZE} strokeWidth="0.6" opacity="0.45" />
        </g>
      );
    case 6: // Commercial / retail shelving
      return (
        <g>
          {Array.from({ length: 5 }).map((_, i) => (
            <rect key={i} x={70 + i * 96} y="70" width="70" height="270" {...soft} />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={i} x1="70" y1={140 + i * 60} x2="550" y2={140 + i * 60} {...soft} />
          ))}
          <rect x="262" y="90" width="70" height="250" {...common} fill={FILL_BEIGE} opacity="0.35" />
          <circle cx="297" cy="130" r="16" {...common} />
        </g>
      );
    case 7: // Starbucks-style concept — cup + counter perspective
      return (
        <g>
          <path d="M240 140 L360 140 L346 300 A66 40 0 0 1 254 300 Z" {...common} />
          <path d="M254 300 A66 40 0 0 0 346 300" {...soft} />
          <path d="M360 160 C 410 150, 410 210, 362 205" {...soft} />
          <line x1="120" y1="360" x2="230" y2="220" {...soft} />
          <line x1="480" y1="360" x2="370" y2="220" {...soft} />
          <line x1="120" y1="360" x2="480" y2="360" {...common} />
          <circle cx="300" cy="120" r="4" fill={BRONZE} />
        </g>
      );
    default: // Office workspace — clusters + pods
      return (
        <g>
          <rect x="60" y="70" width="200" height="130" {...soft} />
          <rect x="60" y="220" width="200" height="130" {...soft} />
          <rect x="300" y="70" width="240" height="280" rx="6" {...common} fill={FILL_BEIGE_2} opacity="0.4" />
          <line x1="300" y1="150" x2="540" y2="150" {...soft} />
          <line x1="300" y1="270" x2="540" y2="270" {...soft} />
          {[100, 200].map((x, i) => (
            <circle key={i} cx={x} cy="135" r="4" fill={STROKE} />
          ))}
        </g>
      );
  }
}

export default function SketchArt({ variant, className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: "#EFE9DA" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <rect x="0" y="0" width="600" height="400" fill="#EFE9DA" />
        <Scene variant={variant} />
      </svg>
    </div>
  );
}
