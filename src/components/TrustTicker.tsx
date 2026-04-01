const items = [
  "Why Smile Avenue?",
  "Full-Service Family Dentistry",
  "Soothing, Modern Studios",
  "No Judgment, Ever",
  "Outcomes, Not Quotas",
  "Science-Based Care",
  "In-House Dental Lab",
  "Top-Rated Clinical Team",
  "Se Habla Español",
];

// Double for seamless infinite scroll
const doubled = [...items, ...items];

const TrustTicker = () => (
  <div className="bg-primary text-primary-foreground overflow-hidden">
    <div className="flex animate-ticker whitespace-nowrap">
      {doubled.map((text, i) => (
        <span
          key={i}
          className={`inline-flex items-center shrink-0 px-4 py-2.5 text-xs tracking-wide font-sans ${
            i % items.length === 0 ? "font-bold" : "font-medium"
          }`}
        >
          {text}
          <span className="ml-4 text-primary-foreground/40">·</span>
        </span>
      ))}
    </div>
  </div>
);

export default TrustTicker;
