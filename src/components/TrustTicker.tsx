import { Link, useLocation } from "react-router-dom";

const items = [
  "Hospitality-driven care",
  "Zero judgment, all heart",
  "Your comfort comes first",
  "Genuine, not just gentle",
  "5-star experience, every visit",
  "Modern tools, proven results",
  "Family dentistry reimagined",
  "Houston's trusted team",
];

const doubled = [...items, ...items];

const TrustTicker = () => {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith("/es");

  const enPath = isSpanish ? location.pathname.replace(/^\/es\/?/, "/") || "/" : location.pathname;
  const esPath = "/es";

  return (
    <div className="flex overflow-hidden relative border-b border-border/40 transition-all duration-300 [[data-menu-open]_&]:h-0 [[data-menu-open]_&]:overflow-hidden [[data-menu-open]_&]:opacity-0 bg-primary/5 sm:bg-muted/60">
      <Link to="/about" className="shrink-0 hidden sm:flex items-center px-4 py-2 font-semibold text-xs tracking-wide font-sans z-10 hover:underline text-foreground/80">
        Why Smile Avenue?
      </Link>
      <div className="relative overflow-hidden flex-1">
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(var(--primary) / 0.05), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(var(--primary) / 0.05), transparent)" }} />
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center shrink-0 px-3 sm:px-5 py-1 sm:py-2 text-[10px] sm:text-xs tracking-wide font-medium sm:font-normal font-sans text-primary/70 sm:text-muted-foreground"
            >
              {text}
              <span className="ml-3 sm:ml-5 text-primary/20 sm:text-muted-foreground/30">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* EN | ES | ♿ — right side, desktop only */}
      <div className="hidden md:flex shrink-0 items-center gap-1.5 px-4 py-2 z-10 text-xs font-sans font-semibold" style={{ background: "hsl(var(--muted) / 0.6)" }}>
        <Link
          to={enPath}
          className={`px-1.5 py-0.5 rounded transition-colors ${!isSpanish ? 'bg-foreground/10 text-foreground/80' : 'text-muted-foreground'}`}
        >
          EN
        </Link>
        <span className="text-muted-foreground/50">|</span>
        <Link
          to={esPath}
          className={`px-1.5 py-0.5 rounded transition-colors ${isSpanish ? 'bg-foreground/10 text-foreground/80' : 'text-muted-foreground'}`}
        >
          ES
        </Link>
        <span className="text-muted-foreground/50">|</span>
        <button
          onClick={() => {
            if ((window as any).toggleAccessibility) {
              (window as any).toggleAccessibility();
            }
          }}
          className="px-1.5 py-0.5 rounded transition-colors text-muted-foreground hover:text-foreground/80"
          aria-label="Accessibility options"
          title="Accessibility"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
