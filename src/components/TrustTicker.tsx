import { Link, useLocation } from "react-router-dom";

const items = [
  "Zero judgment, all care",
  "Designed for comfort",
  "Care, not quotas",
  "Dentistry, reimagined",
  "Experience you can trust",
  "Modern tools, proven results",
  "Houston's top-rated team",
  "Full-service dentistry",
];

const doubled = [...items, ...items];

// Dark navy matching --foreground (210 20% 14%)
const NAVY = "hsl(210, 20%, 14%)";
const NAVY_LIGHT = "hsl(210, 20%, 24%)";

const TrustTicker = () => {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith("/es");

  return (
    <div className="overflow-hidden flex relative bg-neon-blue" style={{ boxShadow: "0 2px 8px hsl(200 100% 50% / 0.4)" }}>
      <Link to="/about" className="shrink-0 flex items-center px-4 py-2.5 font-bold text-xs tracking-wide font-sans z-10 hover:underline text-foreground" style={{}}>
        Why Smile Avenue?
      </Link>
      <div className="relative overflow-hidden flex-1">
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(200, 100%, 50%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(200, 100%, 50%), transparent)" }} />
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center shrink-0 px-4 py-2.5 text-xs tracking-wide font-normal font-sans text-foreground"
            >
              {text}
              <span className="ml-4 text-foreground/30">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* EN | ES | ♿ — right side, desktop only */}
      <div className="hidden md:flex shrink-0 items-center gap-1.5 px-4 py-2.5 z-10 text-xs font-sans font-semibold bg-neon-blue">
        <Link
          to="/"
          className={`px-1.5 py-0.5 rounded transition-colors ${!isSpanish ? 'bg-white/20 text-white' : 'text-white/70'}`}
        >
          EN
        </Link>
        <span className="text-white/70">|</span>
        <Link
          to="/es"
          className={`px-1.5 py-0.5 rounded transition-colors ${isSpanish ? 'bg-white/20 text-white' : 'text-white/70'}`}
        >
          ES
        </Link>
        <span className="text-white/70">|</span>
        <button
          onClick={() => {
            if ((window as any).toggleAccessibility) {
              (window as any).toggleAccessibility();
            }
          }}
          className="px-1.5 py-0.5 rounded transition-colors text-white/70"
          aria-label="Accessibility options"
          title="Accessibility"
        >
          {/* Simple wheelchair icon - larger and clearer */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="4" r="2" fill="currentColor" stroke="none" />
            <path d="M12 8v6" />
            <path d="M8 14h6l2 6" />
            <path d="M8 14l-2 6" />
            <circle cx="8" cy="20" r="2" fill="none" />
            <circle cx="16" cy="20" r="2" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrustTicker;
