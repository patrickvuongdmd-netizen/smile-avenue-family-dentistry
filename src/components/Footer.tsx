import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Globe } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/images";
import BookingLocationModal from "@/components/BookingLocationModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const footerServiceCategories = [
  {
    heading: "Preventive & General",
    services: [
      { label: "Preventive Dentistry", slug: "preventive-dentistry" },
      { label: "Dental Cleaning", slug: "dental-cleaning" },
      { label: "Children's Dentistry", slug: "pediatric-dentistry" },
      { label: "Family Dental Care", slug: "family-dental-care" },
      { label: "Emergency Dentistry", slug: "emergency-dentist" },
    ],
  },
  {
    heading: "Cosmetic & Aesthetic",
    services: [
      { label: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
      { label: "Teeth Whitening", slug: "teeth-whitening" },
      { label: "Veneers", slug: "veneers" },
      { label: "Invisalign®", slug: "invisalign" },
    ],
  },
  {
    heading: "Restorative & Advanced",
    services: [
      { label: "Dental Crowns", slug: "dental-crowns" },
      { label: "Dental Bridges", slug: "dental-bridges" },
      { label: "Dentures", slug: "dentures" },
      { label: "Root Canal", slug: "root-canal" },
      { label: "Sedation Dentistry", slug: "sedation-dentistry" },
    ],
  },
  {
    heading: "Surgical & Periodontal",
    services: [
      { label: "Dental Implants", slug: "dental-implants" },
      { label: "All-on-X Implants", slug: "all-on-x-implants" },
      { label: "Oral Surgery", slug: "oral-surgery" },
      { label: "Tooth Extraction", slug: "tooth-extraction" },
    ],
  },
];

const Footer = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      {/* Footer — 4 clean columns */}
      <footer className="bg-foreground text-background [&_a]:text-background [&_button]:text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-6 lg:pt-6 lg:pb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {/* Col 1 — About */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">All About Us</h4>
              <div className="space-y-2.5 text-sm font-sans opacity-80">
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
              <div className="space-y-2.5 text-sm font-sans opacity-80">
                <Link to="/cypress-tx" className="block hover:opacity-100 transition-opacity">Cypress</Link>
                <Link to="/katy-tx" className="block hover:opacity-100 transition-opacity">Katy</Link>
              </div>
            </div>

            {/* Col 3 — Services (Accordion) */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Services</h4>
              <Link to="/services" className="block text-sm font-sans font-medium opacity-90 hover:opacity-100 transition-opacity mb-4">
                All Services →
              </Link>
              <Accordion type="multiple" className="w-full space-y-0.5">
                {footerServiceCategories.map((cat) => (
                  <AccordionItem key={cat.heading} value={cat.heading} className="border-background/10">
                    <AccordionTrigger className="py-2.5 text-[15px] font-display font-semibold opacity-90 hover:opacity-100 hover:no-underline [&>svg]:text-primary [&>svg]:w-4 [&>svg]:h-4 [&>svg]:opacity-100">
                      {cat.heading}
                    </AccordionTrigger>
                    <AccordionContent className="pb-3">
                      <div className="space-y-3 pl-0.5">
                        {cat.services.map((svc) => (
                          <div key={svc.slug}>
                            <Link
                              to={`/services/${svc.slug}`}
                              className="block text-sm font-sans font-medium opacity-75 hover:opacity-100 transition-opacity"
                            >
                              {svc.label}
                            </Link>
                            <div className="flex gap-4 mt-0.5 text-xs font-sans opacity-45">
                              <Link to={`/cypress-tx/${svc.slug}`} className="hover:opacity-100 transition-opacity">Cypress</Link>
                              <Link to={`/katy-tx/${svc.slug}`} className="hover:opacity-100 transition-opacity">Katy</Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-5">Questions?</h4>

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
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="TikTok">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.21 8.21 0 004.76 1.52V7.06a4.84 4.84 0 01-1-.37z"/></svg>
                </a>
                <a href="https://g.page/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Google Business Profile">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
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
