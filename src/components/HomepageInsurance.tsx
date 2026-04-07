import { useState } from "react";
import InsuranceChecker from "@/components/InsuranceChecker";
import { Link } from "react-router-dom";

const insuranceLogos = [
  { name: "Aetna", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/aetna-original-480-138.png" },
  { name: "Blue Cross Blue Shield", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/bcbs-original-480-138.png" },
  { name: "Cigna", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/cigna-original-480-138.png" },
  { name: "Humana", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/humana-original-480-138.png" },
  { name: "MetLife", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/davis-original-480-138.png" },
  { name: "United Healthcare", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/united-health-original-480-138.png" },
];

const HomepageInsurance = () => {
  const [tab, setTab] = useState<"check" | "carriers">("check");

  return (
    <section className="py-12 lg:py-28 section-warm">
      <div className="container mx-auto max-w-2xl lg:max-w-3xl">
        <p className="kicker text-center">INSURANCE MADE EASY</p>
        <h2 className="section-heading text-center">We Work With Your Insurance</h2>
        <p className="text-center text-sm font-body text-muted-foreground mb-8 max-w-lg mx-auto">
          Most major PPO plans accepted. Check your coverage instantly or browse our carrier list.
        </p>

        {/* Tabs */}
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
          <div className="card-warm p-6 md:p-8">
            <InsuranceChecker />
          </div>
        ) : (
          <div className="card-warm p-6 md:p-8">
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
      </div>
    </section>
  );
};

export default HomepageInsurance;
