import { cn } from "@/lib/utils";

interface NTBLogoProps {
  className?: string;
  dark?: boolean; // false = on dark bg (light text), true = on light bg (dark text)
}

export default function NTBLogo({ className, dark = true }: NTBLogoProps) {
  const textColor = dark ? "#01377d" : "#ffffff";
  const subColor = dark ? "#64748b" : "rgba(255,255,255,0.75)";

  return (
    <svg
      viewBox="0 0 220 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto", className)}
      aria-label="NTB Pharma New"
    >
      <defs>
        <radialGradient id="orb-grad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#d4eeff" />
          <stop offset="45%" stopColor="#62b8f0" />
          <stop offset="100%" stopColor="#1260b0" />
        </radialGradient>
      </defs>

      {/* === Green circle icon (matches PDF: lighter outer → darker inner) === */}
      {/* Outer ring — light green */}
      <circle cx="30" cy="30" r="28" fill="#5dc855" />
      {/* Ring 2 */}
      <circle cx="30" cy="30" r="22" fill="#39a831" />
      {/* Ring 3 */}
      <circle cx="30" cy="30" r="16" fill="#1d8020" />
      {/* Ring 4 */}
      <circle cx="30" cy="30" r="10" fill="#0c5a12" />
      {/* Center */}
      <circle cx="30" cy="30" r="5"  fill="#063808" />

      {/* Blue sphere — bottom-left of circle (matches PDF) */}
      <circle cx="16" cy="44" r="9"  fill="url(#orb-grad)" />
      <ellipse cx="13" cy="41" rx="3.5" ry="2.5" fill="rgba(255,255,255,0.55)" />

      {/* === NTB text === */}
      {/* N — navy */}
      <text x="66" y="40"
        fontFamily="'Be Vietnam Pro', 'Arial Black', sans-serif"
        fontWeight="900" fontSize="30" fill={textColor} letterSpacing="-1">
        N
      </text>
      {/* T — navy body; green bar overlaid at top */}
      <text x="90" y="40"
        fontFamily="'Be Vietnam Pro', 'Arial Black', sans-serif"
        fontWeight="900" fontSize="30" fill={textColor} letterSpacing="-1">
        T
      </text>
      {/* Green crossbar on T */}
      <rect x="89" y="12" width="18" height="5.5" rx="1.5" fill="#00a83e" />
      {/* B — navy */}
      <text x="112" y="40"
        fontFamily="'Be Vietnam Pro', 'Arial Black', sans-serif"
        fontWeight="900" fontSize="30" fill={textColor} letterSpacing="-1">
        B
      </text>

      {/* Tagline */}
      <text x="66" y="54"
        fontFamily="'Be Vietnam Pro', sans-serif"
        fontWeight="400" fontSize="8.5" fill={subColor} letterSpacing="0.2">
        Giải pháp sức khỏe từ gốc
      </text>
    </svg>
  );
}
