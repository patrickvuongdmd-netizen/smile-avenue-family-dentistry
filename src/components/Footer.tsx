import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram, Globe, ChevronDown } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/images";
import BookingLocationModal from "@/components/BookingLocationModal";
import TrustTicker from "@/components/TrustTicker";

const Footer = () => {
  const location = useLocation();
  const locationPrefix = location.pathname.startsWith("/katy-tx") ? "/katy-tx" : "/cypress-tx";
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const footerServices = [
    { label: "All Services", slug: null, href: "/services" },
    { label: "Preventive Dentistry", slug: "preventive-dentistry" },
    { label: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
    { label: "Dental Implants", slug: "dental-implants" },
    { label: "Invisalign®", slug: "invisalign" },
    { label: "Emergency Dentistry", slug: "emergency-dentist" },
    { label: "Dental Crowns", slug: "dental-crowns" },
    { label: "Teeth Whitening", slug: "teeth-whitening" },
    { label: "Veneers", slug: "veneers" },
    { label: "Sedation Dentistry", slug: "sedation-dentistry" },
  ];

  return (
    <>
      {/* Pre-footer CTA block — white card with ticker cutting through */}
      {/* Top half — marble background */}
      <section className="relative overflow-hidden">
        <img
          src="/images/prefooter-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/10" />

        {/* Top half of card */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-24">
          <div className="bg-card rounded-t-[2rem] shadow-2xl px-10 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] text-center md:text-left max-w-2xl text-muted-foreground">
              Care at Smile Avenue isn't just painless,{" "}
              <span className="text-foreground font-semibold">it's a pleasure</span>
            </h2>
            <button
              onClick={() => setBookingOpen(true)}
              className="btn-primary shrink-0 text-base md:text-lg px-10 py-4 rounded-full"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Full-width ticker */}
      <div className="relative z-20">
        <TrustTicker />
      </div>

      {/* Bottom half of card — on dark background matching footer */}
      <div className="bg-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16 md:pb-24">
          <div className="bg-card rounded-b-[2rem] shadow-2xl px-10 py-10 md:px-16 md:py-14">
            <Link to="/">
              <img
                src="/logo-full.webp"
                alt="Smile Avenue Family Dentistry"
                className="h-10 md:h-14 w-auto object-contain"
                width={1217}
                height={645}
              />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand — spans 2 columns on lg, split into 1/3 logo + 2/3 text */}
          <div className="flex gap-5 items-start lg:col-span-2">
            <Link to="/" className="shrink-0">
              <img src="/logo-white.webp" alt="Smile Avenue Family Dentistry" className="w-28 h-auto object-contain" width={1217} height={645} />
            </Link>
            <div className="min-w-0">
              <p className="text-sm font-body leading-relaxed opacity-70 mb-4">
                The dental experience your family deserves. Netflix in every room, warm blankets, and doctors who listen. Two locations in Cypress and Katy, TX.
              </p>
              <div className="flex items-center gap-3">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="TikTok">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.21 8.21 0 004.76 1.52V7.06a4.84 4.84 0 01-1-.37z"/></svg>
                </a>
                <a href="https://g.page/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Google Business Profile">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Offices — 2-col on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:contents">
            {/* Cypress */}
            <div>
              <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Cypress Office</h4>
              <div className="space-y-3 text-sm font-sans opacity-70">
                <a href="https://maps.google.com/?q=Smile+Avenue+Family+Dentistry+9212+Fry+Rd+%23120+Cypress+TX+77433" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:opacity-100 transition-opacity">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>9212 Fry Rd #120<br />Cypress, TX 77433</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:8326481756" className="hover:opacity-100 transition-opacity">(832) 648-1756</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Mon–Fri 8:30am–5pm</span>
                </div>
              </div>
            </div>

            {/* Katy */}
            <div>
              <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Katy Office</h4>
              <div className="space-y-3 text-sm font-sans opacity-70">
                <a href="https://maps.google.com/?q=Smile+Avenue+Family+Dentistry+23541+Westheimer+Pkwy+Ste+%23170+Katy+TX+77494" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:opacity-100 transition-opacity">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>23541 Westheimer Pkwy Ste #170<br />Katy, TX 77494</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:2818005008" className="hover:opacity-100 transition-opacity">(281) 800-5008</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Mon–Fri 8:30am–5pm · Sat 8am–2pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Patients & Services — 2-col on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:contents">
            <div>
              <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Patients & Resources</h4>
              <div className="space-y-2 text-sm font-sans opacity-70">
                <Link to="/patients/new-patient-hub" className="block hover:opacity-100 transition-opacity">New Patient Hub</Link>
                <Link to="/insurance" className="block hover:opacity-100 transition-opacity">Insurance</Link>
                <Link to="/membership-plan" className="block hover:opacity-100 transition-opacity">Membership Plan</Link>
                <Link to="/specials" className="block hover:opacity-100 transition-opacity">Specials</Link>
                <Link to="/our-team" className="block hover:opacity-100 transition-opacity">Our Team</Link>
                <Link to="/patient-testimonials" className="block hover:opacity-100 transition-opacity">Testimonials</Link>
                <Link to="/blog" className="block hover:opacity-100 transition-opacity">Blog</Link>
                <Link to="/faq" className="block hover:opacity-100 transition-opacity">FAQ</Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Services</h4>
              <div className="space-y-0.5 text-sm font-sans opacity-70">
                {footerServices.map((s) => (
                  <div key={s.label}>
                    {s.slug ? (
                      <>
                        <button
                          className="flex items-center gap-1.5 w-full text-left py-1.5 hover:opacity-100 transition-opacity"
                          onClick={() => setExpandedService(expandedService === s.slug ? null : s.slug!)}
                        >
                          {s.label}
                          <ChevronDown className={`w-3 h-3 shrink-0 transition-transform duration-200 ${expandedService === s.slug ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-200 ${expandedService === s.slug ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className="pl-3 pb-1 space-y-1 text-xs">
                            <Link to={`/cypress-tx/${s.slug}`} className="block py-0.5 hover:opacity-100 transition-opacity">in Cypress</Link>
                            <Link to={`/katy-tx/${s.slug}`} className="block py-0.5 hover:opacity-100 transition-opacity">in Katy</Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link to={s.href!} className="block py-1.5 hover:opacity-100 transition-opacity">{s.label}</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans opacity-50">
          <span>© {new Date().getFullYear()} Smile Avenue Family Dentistry. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/sitemap" className="hover:opacity-100 transition-opacity">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
      <BookingLocationModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default Footer;
