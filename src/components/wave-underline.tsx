// Small static sine drawn on hover under titles. Uses the shared #signal gradient from SiteShell.
export function WaveUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 8" preserveAspectRatio="none" aria-hidden className={`wave-underline h-2 w-full ${className}`}>
      <path
        d="M0 4 Q5 0 10 4 T20 4 T30 4 T40 4 T50 4 T60 4 T70 4 T80 4 T90 4 T100 4 T110 4 T120 4"
        fill="none"
        stroke="url(#signal)"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function SignalDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      <defs>
        <linearGradient id="signal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="signal-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
