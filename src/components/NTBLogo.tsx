import { cn } from "@/lib/utils";

interface NTBLogoProps {
  className?: string;
  dark?: boolean; // false = logo on dark bg (white text), true = logo on light bg (dark text)
}

export default function NTBLogo({ className, dark = true }: NTBLogoProps) {
  const textColor = dark ? "#01377d" : "#ffffff";

  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto", className)}
      aria-label="NTB Pharma New"
    >
      {/* Green outer circle rings */}
      <circle cx="28" cy="28" r="26" fill="#004900" />
      <circle cx="28" cy="28" r="20" fill="#007100" />
      <circle cx="28" cy="28" r="14" fill="#009600" />
      <circle cx="28" cy="28" r="9" fill="#00b300" />

      {/* Blue/silver orb highlight */}
      <circle cx="22" cy="22" r="7" fill="url(#orb-gradient)" />
      <circle cx="20" cy="20" r="2.5" fill="rgba(255,255,255,0.6)" />

      <defs>
        <radialGradient id="orb-gradient" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#aad4f5" />
          <stop offset="40%" stopColor="#5aabec" />
          <stop offset="100%" stopColor="#01377d" />
        </radialGradient>
      </defs>

      {/* NTB text */}
      <text
        x="62"
        y="36"
        fontFamily="'Be Vietnam Pro', sans-serif"
        fontWeight="800"
        fontSize="26"
        fill={textColor}
        letterSpacing="-0.5"
      >
        NTB
      </text>

      {/* Tagline */}
      <text
        x="62"
        y="50"
        fontFamily="'Be Vietnam Pro', sans-serif"
        fontWeight="400"
        fontSize="8"
        fill={dark ? "#64748b" : "rgba(255,255,255,0.7)"}
        letterSpacing="0.3"
      >
        PHARMA NEW
      </text>
    </svg>
  );
}
