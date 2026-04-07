import { Link } from "react-router-dom";

const insuranceLogos = [
  { name: "Aetna", src: "/images/insurance/aetna.webp" },
  { name: "Blue Cross Blue Shield", src: "/images/insurance/bcbs.webp" },
  { name: "Cigna", src: "/images/insurance/cigna.webp" },
  { name: "Humana", src: "/images/insurance/humana.webp" },
  { name: "MetLife", src: "/images/insurance/davis.webp" },
  { name: "United Healthcare", src: "/images/insurance/united-health.webp" },
];

const InsuranceLogoBar = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto text-center">
        <p className="kicker">INSURANCE ACCEPTED</p>
        {/* Mobile: horizontal scroll */}
        <div className="mt-6 overflow-x-auto scrollbar-hide md:overflow-visible">
          <div className="flex md:grid md:grid-cols-6 gap-4 md:gap-6 md:max-w-4xl md:mx-auto min-w-max md:min-w-0 px-4 md:px-0">
            {insuranceLogos.map((ins) => (
              <div
                key={ins.name}
                className="flex-shrink-0 w-36 md:w-auto px-4 py-4 bg-card rounded-lg border border-border flex items-center justify-center"
              >
                <img
                  src={ins.src}
                  alt={`${ins.name} dental insurance logo`}
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  width={120}
                  height={35}
                />
              </div>
            ))}
          </div>
        </div>
        <Link to="/insurance" className="inline-block mt-6 text-sm font-sans font-semibold text-primary hover:underline">
          View all accepted plans →
        </Link>
      </div>
    </section>
  );
};

export default InsuranceLogoBar;
