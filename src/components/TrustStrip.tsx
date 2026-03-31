import { Heart, Shield, Ear, Sparkles, Clock, Globe } from "lucide-react";

const values = [
  { icon: <Heart className="w-3.5 h-3.5" />, text: "No Judgment, Ever" },
  { icon: <Ear className="w-3.5 h-3.5" />, text: "We Listen Before We Treat" },
  { icon: <Sparkles className="w-3.5 h-3.5" />, text: "Your Comfort Comes First" },
  { icon: <Shield className="w-3.5 h-3.5" />, text: "Science-Backed, Patient-Led" },
  { icon: <Clock className="w-3.5 h-3.5" />, text: "Same-Day Visits Available" },
  { icon: <Globe className="w-3.5 h-3.5" />, text: "Se Habla Español" },
];

const TrustStrip = () => (
  <div className="py-2.5 md:py-3 bg-card border-b border-border overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-0.5 text-xs font-sans font-semibold text-muted-foreground">
        {values.map((v, i) => (
          <span
            key={i}
            className={`flex items-center gap-1.5 text-foreground/70 ${i >= 3 ? "hidden md:flex" : ""}`}
          >
            <span className="text-primary">{v.icon}</span>
            {v.text}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
