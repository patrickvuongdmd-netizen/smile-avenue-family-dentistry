import { Link } from "react-router-dom";

const insuranceLogos = [
  { name: "Aetna", src: "/images/insurance/aetna.webp" },
  { name: "Blue Cross Blue Shield", src: "/images/insurance/bcbs.webp" },
  { name: "Cigna", src: "/images/insurance/cigna.webp" },
  { name: "Humana", src: "/images/insurance/humana.webp" },
  { name: "MetLife", src: "/images/insurance/davis.webp" },
  { name: "United Healthcare", src: "/images/insurance/united-health.webp" },
];

const HomepageInsurance = () => {
  return (
    <section className="py-12 lg:py-28 section-warm">
      <div className="container mx-auto max-w-2xl lg:max-w-3xl">
        <p className="kicker text-center">INSURANCE MADE EASY</p>
        <h2 className="section-heading text-center">We Work With Your Insurance</h2>
        <p className="text-center text-sm font-body text-muted-foreground mb-8 max-w-lg mx-auto">
          Most major PPO plans accepted. Browse our carrier list below.
        </p>

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
      </div>
    </section>
  );
};

export default HomepageInsurance;
