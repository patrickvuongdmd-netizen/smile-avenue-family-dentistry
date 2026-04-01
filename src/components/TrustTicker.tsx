import { Link, useLocation } from "react-router-dom";
import { Accessibility } from "lucide-react";

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

const TrustTicker = () => {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith("/es");

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden flex relative">
      <div className="shrink-0 flex items-center px-4 py-2.5 font-bold text-xs tracking-wide font-sans z-10 bg-primary">
        Why Smile Avenue?
      </div>
      <div className="relative overflow-hidden flex-1">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center shrink-0 px-4 py-2.5 text-xs tracking-wide font-medium font-sans"
            >
              {text}
              <span className="ml-4 text-primary-foreground/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* EN | ES | ♿ — right side, desktop only */}
      <div className="hidden md:flex shrink-0 items-center gap-1.5 px-4 py-2.5 z-10 bg-primary text-xs font-sans font-semibold">
        <Link
          to="/"
          className={`px-1.5 py-0.5 rounded transition-colors ${!isSpanish ? "bg-primary-foreground text-primary" : "text-primary-foreground/70 hover:text-primary-foreground"}`}
        >
          EN
        </Link>
        <span className="text-primary-foreground/40">|</span>
        <Link
          to="/es"
          className={`px-1.5 py-0.5 rounded transition-colors ${isSpanish ? "bg-primary-foreground text-primary" : "text-primary-foreground/70 hover:text-primary-foreground"}`}
        >
          ES
        </Link>
        <span className="text-primary-foreground/40">|</span>
        <button
          onClick={() => {
            if ((window as any).toggleAccessibility) {
              (window as any).toggleAccessibility();
            }
          }}
          className="px-1.5 py-0.5 rounded text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          aria-label="Accessibility options"
          title="Accessibility"
        >
          <Accessibility className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default TrustTicker;
