import { useState } from "react";
import { Link } from "react-router-dom";
import InsuranceChecker from "@/components/InsuranceChecker";

const insuranceLogos = [
  { name: "Aetna", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/aetna-original-480-138.png" },
  { name: "Blue Cross Blue Shield", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/bcbs-original-480-138.png" },
  { name: "Cigna", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/cigna-original-480-138.png" },
  { name: "Humana", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/humana-original-480-138.png" },
  { name: "MetLife", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/davis-original-480-138.png" },
  { name: "United Healthcare", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/united-health-original-480-138.png" },
];

interface TabbedInsuranceProps {
  coverageNote?: string;
}

const TabbedInsurance = ({ coverageNote }: TabbedInsuranceProps) => {
  const [tab, setTab] = useState<"check" | "carriers">("check");

  return (
    <div>
      {coverageNote && (
        <p className="text-center text-sm font-body text-muted-foreground mb-6 max-w-lg mx-auto">
          {coverageNote}
        </p>
      )}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setTab("check")}
          className={`px-5 py-2.5 rounded-full text-sm font-sans font-semibold transition-all ${tab === "check" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
        >
          Check My Insurance
        </button>
        <button
          onClick={() => setTab("carriers")}
          className={`px-5 py-2.5 rounded-full text-sm font-sans font-semibold transition-all ${tab === "carriers" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
        >
          Accepted Carriers
        </button>
      </div>

      {tab === "check" ? (
        <div className="card-warm p-6 md:p-8 max-w-2xl mx-auto">
          <InsuranceChecker />
        </div>
      ) : (
        <div className="card-warm p-6 md:p-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {insuranceLogos.map((ins) => (
              <div key={ins.name} className="px-4 py-4 bg-background rounded-lg border border-border flex items-center justify-center">
                <img src={ins.src} alt={`${ins.name} dental insurance logo`} className="h-8 w-auto object-contain" loading="lazy" decoding="async" width={120} height={35} />
              </div>
            ))}
          </div>
          <p className="text-center mt-5 text-xs font-sans text-muted-foreground">
            We accept most major PPO plans. Don't see yours?{" "}
            <Link to="/insurance" className="text-primary font-semibold hover:underline">View all accepted plans →</Link>
          </p>
        </div>
      )}

      {/* Logo ticker */}
      <div className="relative mt-8 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...insuranceLogos, ...insuranceLogos].map((ins, i) => (
            <span key={`${ins.name}-${i}`} className="inline-flex shrink-0 items-center bg-card rounded-full border border-border/60 py-2.5 px-6 mx-3">
              <span className="text-sm font-sans font-medium text-muted-foreground">{ins.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabbedInsurance;
