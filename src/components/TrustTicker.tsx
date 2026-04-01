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

const TrustTicker = () => (
  <div className="bg-primary text-primary-foreground overflow-hidden flex">
    <div className="shrink-0 flex items-center px-4 py-2.5 font-bold text-xs tracking-wide font-sans border-r border-primary-foreground/20 z-10 bg-primary">
      Why Smile Avenue?
    </div>
    <div className="flex animate-ticker whitespace-nowrap overflow-hidden">
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
);

export default TrustTicker;
