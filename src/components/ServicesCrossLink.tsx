import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServicesCrossLinkProps {
  location: "cypress" | "katy";
  currentSlug: string;
  bgClassName?: string;
}

const ALL_SERVICES = [
  { title: "Dental Implants", slug: "dental-implants" },
  { title: "All-on-X Implants", slug: "all-on-x-implants" },
  { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
  { title: "Veneers", slug: "veneers" },
  { title: "Teeth Whitening", slug: "teeth-whitening" },
  { title: "Invisalign®", slug: "invisalign" },
  { title: "Dental Crowns", slug: "dental-crowns" },
  { title: "Dental Bridges", slug: "dental-bridges" },
  { title: "Dentures", slug: "dentures" },
  { title: "Root Canal", slug: "root-canal" },
  { title: "Tooth Extraction", slug: "tooth-extraction" },
  { title: "Oral Surgery", slug: "oral-surgery" },
  { title: "Emergency Dentist", slug: "emergency-dentist" },
  { title: "Dental Cleaning", slug: "dental-cleaning" },
  { title: "Preventive Dentistry", slug: "preventive-dentistry" },
  { title: "Pediatric Dentistry", slug: "pediatric-dentistry" },
  { title: "Sedation Dentistry", slug: "sedation-dentistry" },
  { title: "Family Dental Care", slug: "family-dental-care" },
];

const LOCATION_PATHS = {
  cypress: "/cypress-tx",
  katy: "/katy-tx",
};

const ServicesCrossLink = ({ location, currentSlug, bgClassName = "bg-background" }: ServicesCrossLinkProps) => {
  const basePath = LOCATION_PATHS[location];
  const locationName = location === "cypress" ? "Cypress" : "Katy";
  const services = ALL_SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${bgClassName}`}>
      <div className="container mx-auto text-center">
        <p className="kicker">ALL SERVICES</p>
        <h2 className="section-heading">Dental Services in {locationName}, TX</h2>
        <p className="section-body max-w-2xl mx-auto">
          Explore all the dental services we offer at our {locationName} office.
        </p>
        <div className="mt-10 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                to={`${basePath}/${svc.slug}`}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-card border border-border/60 text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary hover:shadow-md transition-all whitespace-nowrap shrink-0"
              >
                {svc.title}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCrossLink;
