import { Link } from "react-router-dom";

const insuranceLogos = [
  { name: "Aetna", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/aetna-original-480-138.png" },
  { name: "Blue Cross Blue Shield", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/bcbs-original-480-138.png" },
  { name: "Cigna", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/cigna-original-480-138.png" },
  { name: "Humana", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/humana-original-480-138.png" },
  { name: "MetLife", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/davis-original-480-138.png" },
  { name: "United Healthcare", src: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/united-health-original-480-138.png" },
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
