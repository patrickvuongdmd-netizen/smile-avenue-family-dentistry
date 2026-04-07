import { useState } from "react";
import InsuranceChecker from "@/components/InsuranceChecker";
import InsuranceLogoBar from "@/components/InsuranceLogoBar";

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
          <InsuranceLogoBar />
        )}
      </div>
    </section>
  );
};

export default HomepageInsurance;
