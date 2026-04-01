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
    <div className="overflow-hidden flex relative" style={{ backgroundColor: "#F2F0ED", color: "#666666" }}>
      <div className="shrink-0 flex items-center px-4 py-2.5 font-bold text-xs tracking-wide font-sans z-10" style={{ backgroundColor: "#F2F0ED", color: "#2B5DA7" }}>
        Why Smile Avenue?
      </div>
      <div className="relative overflow-hidden flex-1">
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #F2F0ED, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #F2F0ED, transparent)" }} />
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center shrink-0 px-4 py-2.5 text-xs tracking-wide font-medium font-sans"
            >
              {text}
              <span className="ml-4" style={{ color: "#CCCCCC" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* EN | ES | ♿ — right side, desktop only */}
      <div className="hidden md:flex shrink-0 items-center gap-1.5 px-4 py-2.5 z-10 text-xs font-sans font-semibold" style={{ backgroundColor: "#F2F0ED" }}>
        <Link
          to="/"
          className={`px-1.5 py-0.5 rounded transition-colors ${!isSpanish ? "text-white" : "hover:opacity-100 opacity-60"}`}
          style={!isSpanish ? { backgroundColor: "#2B5DA7" } : { color: "#666666" }}
        >
          EN
        </Link>
        <span style={{ color: "#CCCCCC" }}>|</span>
        <Link
          to="/es"
          className={`px-1.5 py-0.5 rounded transition-colors ${isSpanish ? "text-white" : "hover:opacity-100 opacity-60"}`}
          style={isSpanish ? { backgroundColor: "#2B5DA7" } : { color: "#666666" }}
        >
          ES
        </Link>
        <span style={{ color: "#CCCCCC" }}>|</span>
        <button
          onClick={() => {
            if ((window as any).toggleAccessibility) {
              (window as any).toggleAccessibility();
            }
          }}
          className="px-1.5 py-0.5 rounded opacity-60 hover:opacity-100 transition-colors"
          style={{ color: "#666666" }}
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
