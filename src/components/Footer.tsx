import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Facebook, Instagram, Globe } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/images";
import BookingLocationModal from "@/components/BookingLocationModal";
import TrustTicker from "@/components/TrustTicker";

const Footer = () => {
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
      {/* Pre-footer CTA — white card with ticker cutting through */}
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 md:pt-16">
          <div className="bg-card rounded-t-[2rem] shadow-2xl px-10 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-medium leading-[1.15] text-center md:text-left max-w-lg text-muted-foreground">
              Care at Smile Avenue isn't just gentle,{" "}
              <span className="text-foreground font-semibold">it's genuine.</span>
            </h2>
            <button
              onClick={() => setBookingOpen(true)}
              className="shrink-0 inline-flex items-center justify-center text-base md:text-lg px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-200 text-white bg-primary hover:bg-primary-dark"
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

      {/* Bottom half of card on dark bg */}
      <div className="bg-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-0">
          <div className="bg-card rounded-b-[2rem] shadow-2xl px-10 py-6 md:px-16 md:py-8">
            <Link to="/">
              <img
                src="/logo-full.webp"
                alt="Smile Avenue Family Dentistry"
                className="h-16 md:h-24 w-auto object-contain"
                width={1217}
                height={645}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer — 4 clean columns */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Col 1 — About */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">All About Us</h4>
              <div className="space-y-2.5 text-sm font-sans opacity-70">
                <Link to="/about" className="block hover:opacity-100 transition-opacity">About</Link>
                <Link to="/our-team" className="block hover:opacity-100 transition-opacity">Dentists</Link>
                <Link to="/faq" className="block hover:opacity-100 transition-opacity">FAQs</Link>
                <Link to="/insurance" className="block hover:opacity-100 transition-opacity">Insurance</Link>
                <Link to="/membership-plan" className="block hover:opacity-100 transition-opacity">Membership Plans</Link>
                <Link to="/patient-testimonials" className="block hover:opacity-100 transition-opacity">Testimonials</Link>
                <Link to="/blog" className="block hover:opacity-100 transition-opacity">Blog</Link>
                
              </div>
            </div>

            {/* Col 2 — Locations */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Locations</h4>
              <div className="space-y-2.5 text-sm font-sans opacity-70">
                <Link to="/cypress-tx" className="block hover:opacity-100 transition-opacity">Cypress</Link>
                <Link to="/katy-tx" className="block hover:opacity-100 transition-opacity">Katy</Link>
              </div>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Services</h4>
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

            {/* Col 4 — Contact */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Questions?</h4>

              <p className="text-[11px] font-sans font-semibold uppercase tracking-widest opacity-50 mb-1.5">Cypress</p>
              <div className="space-y-1 text-sm font-sans opacity-70 mb-5">
                <a href="tel:8326481756" className="block hover:opacity-100 transition-opacity">(832) 648-1756</a>
                <a href="mailto:info@smileavenuecypress.com" className="block hover:opacity-100 transition-opacity">info@smileavenuecypress.com</a>
              </div>

              <p className="text-[11px] font-sans font-semibold uppercase tracking-widest opacity-50 mb-1.5">Katy</p>
              <div className="space-y-1 text-sm font-sans opacity-70 mb-5">
                <a href="tel:2818005008" className="block hover:opacity-100 transition-opacity">(281) 800-5008</a>
                <a href="mailto:info@smileavenuekaty.com" className="block hover:opacity-100 transition-opacity">info@smileavenuekaty.com</a>
              </div>

              <p className="text-[11px] font-sans font-semibold uppercase tracking-widest opacity-50 mb-2">Social</p>
              <div className="flex items-center gap-3">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="TikTok">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.21 8.21 0 004.76 1.52V7.06a4.84 4.84 0 01-1-.37z"/></svg>
                </a>
                <a href="https://g.page/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Google Business Profile">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans opacity-50">
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="/sitemap" className="hover:opacity-100 transition-opacity">Sitemap</Link>
            </div>
            <span>© {new Date().getFullYear()} Smile Avenue Family Dentistry. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      <BookingLocationModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default Footer;
