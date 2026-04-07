import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Facebook, Instagram, Globe, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/images";
import BookingLocationModal from "@/components/BookingLocationModal";
import TrustTicker from "@/components/TrustTicker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const footerServices = [
  { label: "Preventive Dentistry", slug: "preventive-dentistry" },
  { label: "Dental Cleaning", slug: "dental-cleaning" },
  { label: "Children's Dentistry", slug: "pediatric-dentistry" },
  { label: "Family Dental Care", slug: "family-dental-care" },
  { label: "Emergency Dentistry", slug: "emergency-dentist" },
  { label: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
  { label: "Teeth Whitening", slug: "teeth-whitening" },
  { label: "Veneers", slug: "veneers" },
  { label: "Invisalign®", slug: "invisalign" },
  { label: "Dental Crowns", slug: "dental-crowns" },
  { label: "Dental Bridges", slug: "dental-bridges" },
  { label: "Dentures", slug: "dentures" },
  { label: "Root Canal", slug: "root-canal" },
  { label: "Sedation Dentistry", slug: "sedation-dentistry" },
  { label: "Dental Implants", slug: "dental-implants" },
  { label: "All-on-X Implants", slug: "all-on-x-implants" },
  { label: "Oral Surgery", slug: "oral-surgery" },
  { label: "Tooth Extraction", slug: "tooth-extraction" },
];

const FooterContact = () => (
  <div>
    <p className="text-[11px] font-sans font-semibold uppercase tracking-widest opacity-60 mb-1.5">Cypress</p>
    <div className="space-y-1 text-sm font-sans opacity-80 mb-5">
      <a href="tel:8326481756" className="block hover:opacity-100 transition-opacity">(832) 648-1756</a>
      <a href="mailto:info@smileavenuecypress.com" className="block hover:opacity-100 transition-opacity break-all">info@smileavenuecypress.com</a>
    </div>
    <p className="text-[11px] font-sans font-semibold uppercase tracking-widest opacity-60 mb-1.5">Katy</p>
    <div className="space-y-1 text-sm font-sans opacity-80 mb-5">
      <a href="tel:2818005008" className="block hover:opacity-100 transition-opacity">(281) 800-5008</a>
      <a href="mailto:info@smileavenuekaty.com" className="block hover:opacity-100 transition-opacity break-all">info@smileavenuekaty.com</a>
    </div>
    <p className="text-[11px] font-sans font-semibold uppercase tracking-widest opacity-60 mb-2">Social</p>
    <div className="flex items-center gap-3">
      <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
      <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="TikTok">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.21 8.21 0 004.76 1.52V7.06a4.84 4.84 0 01-1-.37z"/></svg>
      </a>
      <a href="https://g.page/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Google Business Profile"><Globe className="w-4 h-4" /></a>
    </div>
  </div>
);

const Footer = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      {/* Pre-footer CTA — white card with ticker cutting through */}
      <section className="relative overflow-hidden">
        <img
          src="/images/prefooter-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={1920}
          height={800}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 md:pt-12">
          <div className="bg-card rounded-t-[2rem] shadow-2xl px-8 py-8 md:px-16 md:py-10">
            <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-medium leading-[1.15] text-center max-w-2xl mx-auto text-muted-foreground">
              Care at Smile Avenue isn't just gentle,{" "}
              <span className="text-foreground font-semibold">it's genuine.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Full-width ticker */}
      <div className="relative z-20">
        <TrustTicker />
      </div>

      {/* Bottom half of card on dark bg — logo + Book Now centered */}
      <div className="bg-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-b-[2rem] shadow-2xl px-6 py-4 md:px-12 md:py-5">
            <div className="flex items-center justify-center gap-6 md:gap-10">
              <Link to="/" className="shrink-0">
                <img
                  src="/logo-full.webp"
                  alt="Smile Avenue Family Dentistry"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  width={1217}
                  height={645}
                />
              </Link>
              <div className="w-px h-8 bg-border/60 hidden sm:block" />
              <button
                onClick={() => setBookingOpen(true)}
                className="shrink-0 inline-flex items-center justify-center text-sm md:text-base px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold tracking-wide transition-all duration-200 text-white bg-primary hover:bg-primary-dark hover:shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer — 4 clean columns */}
      <footer className="bg-foreground text-background [&_a]:text-background [&_button]:text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-6 lg:pt-6 lg:pb-8">
          {/* Desktop: 4-col grid — Logo/tagline, Services, Locations, Quick links */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-12">
            {/* Col 1 — Logo + tagline + social + phones */}
            <div>
              <Link to="/" className="inline-block mb-4">
                <img src="/logo-full.webp" alt="Smile Avenue Family Dentistry" className="h-12 w-auto object-contain brightness-0 invert" loading="lazy" width={1217} height={645} />
              </Link>
              <p className="text-sm font-body opacity-70 leading-relaxed mb-6">A dentist that feels like home — warm blankets, Netflix in every room, and no judgment, ever.</p>
              <div className="space-y-2 mb-6">
                <a href="tel:8326481756" className="flex items-center gap-2 text-sm font-sans font-semibold opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4" /> Cypress: (832) 648-1756
                </a>
                <a href="tel:2818005008" className="flex items-center gap-2 text-sm font-sans font-semibold opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4" /> Katy: (281) 800-5008
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="TikTok">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.21 8.21 0 004.76 1.52V7.06a4.84 4.84 0 01-1-.37z"/></svg>
                </a>
                <a href="https://g.page/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Google Business Profile"><Globe className="w-4 h-4" /></a>
              </div>
            </div>
            {/* Col 2 — Services */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Services</h4>
              <div className="space-y-2.5 text-sm font-sans opacity-80">
                {footerServiceCategories.flatMap(cat => cat.services).map(svc => (
                  <Link key={svc.slug} to={`/services/${svc.slug}`} className="block hover:opacity-100 transition-opacity">{svc.label}</Link>
                ))}
              </div>
            </div>
            {/* Col 3 — Locations */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Locations</h4>
              <div className="space-y-4">
                <div>
                  <Link to="/cypress-tx" className="block text-sm font-sans font-semibold opacity-90 hover:opacity-100 transition-opacity mb-1">Cypress, TX</Link>
                  <p className="text-xs font-sans opacity-50 leading-relaxed">9212 Fry Rd #120<br />Cypress, TX 77433</p>
                </div>
                <div>
                  <Link to="/katy-tx" className="block text-sm font-sans font-semibold opacity-90 hover:opacity-100 transition-opacity mb-1">Katy, TX</Link>
                  <p className="text-xs font-sans opacity-50 leading-relaxed">23541 Westheimer Pkwy #170<br />Katy, TX 77494</p>
                </div>
              </div>
            </div>
            {/* Col 4 — Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Quick Links</h4>
              <div className="space-y-2.5 text-sm font-sans opacity-80">
                <Link to="/about" className="block hover:opacity-100 transition-opacity">About</Link>
                <Link to="/our-team" className="block hover:opacity-100 transition-opacity">Dentists</Link>
                <Link to="/blog" className="block hover:opacity-100 transition-opacity">Blog</Link>
                <Link to="/insurance" className="block hover:opacity-100 transition-opacity">Insurance</Link>
                <Link to="/membership-plan" className="block hover:opacity-100 transition-opacity">Membership Plans</Link>
                <Link to="/patient-testimonials" className="block hover:opacity-100 transition-opacity">Testimonials</Link>
                <Link to="/faq" className="block hover:opacity-100 transition-opacity">FAQs</Link>
                <Link to="/contact" className="block hover:opacity-100 transition-opacity">Contact</Link>
              </div>
            </div>
          </div>

          {/* Mobile: Accordion layout */}
          <div className="lg:hidden">
            {/* Prominent phone buttons on mobile */}
            <div className="flex flex-col gap-2 mb-5">
              <a href="tel:8326481756" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-background/10 text-sm font-sans font-semibold hover:bg-background/20 transition-colors">
                <Phone className="w-4 h-4" /> Cypress: (832) 648-1756
              </a>
              <a href="tel:2818005008" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-background/10 text-sm font-sans font-semibold hover:bg-background/20 transition-colors">
                <Phone className="w-4 h-4" /> Katy: (281) 800-5008
              </a>
            </div>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="about" className="border-background/10">
                <AccordionTrigger className="py-3 font-display text-lg font-semibold hover:no-underline [&>svg]:text-primary [&>svg]:opacity-100">All About Us</AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-2.5 text-sm font-sans opacity-80">
                    <Link to="/about" className="block hover:opacity-100 transition-opacity">About</Link>
                    <Link to="/our-team" className="block hover:opacity-100 transition-opacity">Dentists</Link>
                    <Link to="/faq" className="block hover:opacity-100 transition-opacity">FAQs</Link>
                    <Link to="/insurance" className="block hover:opacity-100 transition-opacity">Insurance</Link>
                    <Link to="/membership-plan" className="block hover:opacity-100 transition-opacity">Membership Plans</Link>
                    <Link to="/patient-testimonials" className="block hover:opacity-100 transition-opacity">Testimonials</Link>
                    <Link to="/blog" className="block hover:opacity-100 transition-opacity">Blog</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="locations" className="border-background/10">
                <AccordionTrigger className="py-3 font-display text-lg font-semibold hover:no-underline [&>svg]:text-primary [&>svg]:opacity-100">Locations</AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-2.5 text-sm font-sans opacity-80">
                    <Link to="/cypress-tx" className="block hover:opacity-100 transition-opacity">Cypress</Link>
                    <Link to="/katy-tx" className="block hover:opacity-100 transition-opacity">Katy</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="services" className="border-background/10">
                <AccordionTrigger className="py-3 font-display text-lg font-semibold hover:no-underline [&>svg]:text-primary [&>svg]:opacity-100">Services</AccordionTrigger>
                <AccordionContent className="pb-4">
                  <Link to="/services" className="block text-sm font-sans font-medium opacity-90 hover:opacity-100 transition-opacity mb-3">All Services →</Link>
                  <div className="space-y-2 text-sm font-sans opacity-80">
                    {footerServiceCategories.flatMap((cat) => cat.services).map((svc) => (
                      <Link key={svc.slug} to={`/services/${svc.slug}`} className="block hover:opacity-100 transition-opacity">{svc.label}</Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="contact" className="border-background/10">
                <AccordionTrigger className="py-3 font-display text-lg font-semibold hover:no-underline [&>svg]:text-primary [&>svg]:opacity-100">Questions?</AccordionTrigger>
                <AccordionContent className="pb-4">
                  <FooterContact />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans opacity-60">
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
