import { Scan, Crown, CreditCard, CalendarCheck, Sparkles } from "lucide-react";

const techs = [
  { icon: <Sparkles className="w-6 h-6" />, label: "Invisalign® Provider" },
  { icon: <Crown className="w-6 h-6" />, label: "CEREC Same-Day Crowns" },
  { icon: <Scan className="w-6 h-6" />, label: "Medit Digital Scanner" },
  { icon: <CreditCard className="w-6 h-6" />, label: "CareCredit Financing" },
  { icon: <CalendarCheck className="w-6 h-6" />, label: "Modento Online Booking" },
];

const TechnologyTrust = () => (
  <section className="py-12 bg-background border-y border-border">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="kicker text-center">OUR TECHNOLOGY</p>
      <h2 className="section-heading text-center text-2xl md:text-3xl">Advanced Tools for Better Care</h2>
      {/* Desktop grid */}
      <div className="hidden sm:grid sm:grid-cols-5 gap-6 mt-8">
        {techs.map((t) => (
          <div key={t.label} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {t.icon}
            </div>
            <span className="text-xs font-sans font-semibold text-foreground leading-tight">{t.label}</span>
          </div>
        ))}
      </div>
      {/* Mobile horizontal scroll */}
      <div className="sm:hidden flex gap-5 mt-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {techs.map((t) => (
          <div key={t.label} className="flex flex-col items-center text-center gap-2 min-w-[100px] shrink-0">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {t.icon}
            </div>
            <span className="text-[11px] font-sans font-semibold text-foreground leading-tight">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologyTrust;
