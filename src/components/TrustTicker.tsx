import { Star, Clock, Shield, Globe, Microscope, FlaskConical } from "lucide-react";

const items = [
  { icon: <Star className="w-3.5 h-3.5" />, text: "5,000+ Five-Star Reviews" },
  { icon: <Clock className="w-3.5 h-3.5" />, text: "Open Saturdays" },
  { icon: <Shield className="w-3.5 h-3.5" />, text: "Most Insurance Accepted" },
  { icon: <Globe className="w-3.5 h-3.5" />, text: "Se Habla Español" },
  { icon: <FlaskConical className="w-3.5 h-3.5" />, text: "In-House Dental Lab" },
  { icon: <Microscope className="w-3.5 h-3.5" />, text: "Advanced 3D Technology" },
  { icon: <Clock className="w-3.5 h-3.5" />, text: "Same-Day Appointments" },
];

// Double the items for seamless infinite scroll
const doubled = [...items, ...items];

const TrustTicker = () => (
  <div className="bg-primary text-primary-foreground overflow-hidden">
    <div className="flex animate-ticker whitespace-nowrap">
      {doubled.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-sans font-semibold shrink-0"
        >
          <span className="opacity-80">{item.icon}</span>
          {item.text}
          <span className="ml-4 opacity-30">·</span>
        </span>
      ))}
    </div>
  </div>
);

export default TrustTicker;
