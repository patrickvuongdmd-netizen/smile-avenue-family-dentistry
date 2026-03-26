import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram, Globe, Mail } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo-full.png" alt="Smile Avenue Family Dentistry" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm font-body leading-relaxed opacity-70 mb-4">
              Hospitality-driven dental care for the whole family. Two convenient locations in Cypress and Katy, TX.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://g.page/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Google Business Profile">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Cypress */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Cypress Office</h4>
            <div className="space-y-3 text-sm font-sans opacity-70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>9212 Fry Rd #120<br />Cypress, TX 77433</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:8326481756" className="hover:opacity-100 transition-opacity">(832) 648-1756</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Mon–Fri 8am–5pm</span>
              </div>
            </div>
          </div>

          {/* Katy */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Katy Office</h4>
            <div className="space-y-3 text-sm font-sans opacity-70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>23541 Westheimer Pkwy Ste #170<br />Katy, TX 77494</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:2818005008" className="hover:opacity-100 transition-opacity">(281) 800-5008</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Mon–Fri 8am–5pm</span>
              </div>
            </div>
          </div>

          {/* Patients & Resources */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Patients & Resources</h4>
            <div className="space-y-2 text-sm font-sans opacity-70">
              <Link to="/patients/new-patient-hub/" className="block hover:opacity-100 transition-opacity">New Patient Hub</Link>
              <Link to="/insurance" className="block hover:opacity-100 transition-opacity">Insurance</Link>
              <Link to="/membership-plan" className="block hover:opacity-100 transition-opacity">Membership Plan</Link>
              <Link to="/specials" className="block hover:opacity-100 transition-opacity">Specials</Link>
              <Link to="/blog" className="block hover:opacity-100 transition-opacity">Blog</Link>
              <Link to="/faq" className="block hover:opacity-100 transition-opacity">FAQ</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Services</h4>
            <div className="space-y-2 text-sm font-sans opacity-70">
              <Link to="/cypress-tx/preventive-dentistry" className="block hover:opacity-100 transition-opacity">Preventive Dentistry</Link>
              <Link to="/cypress-tx/cosmetic-dentistry" className="block hover:opacity-100 transition-opacity">Cosmetic Dentistry</Link>
              <Link to="/cypress-tx/dental-implants" className="block hover:opacity-100 transition-opacity">Dental Implants</Link>
              <Link to="/cypress-tx/invisalign" className="block hover:opacity-100 transition-opacity">Invisalign®</Link>
              <Link to="/cypress-tx/emergency-dentist" className="block hover:opacity-100 transition-opacity">Emergency Dentistry</Link>
              <Link to="/cypress-tx/sedation-dentistry" className="block hover:opacity-100 transition-opacity">Sedation Dentistry</Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0 lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h4 className="text-sm font-sans font-semibold mb-1">Stay Updated</h4>
              <p className="text-xs font-sans opacity-60">Get dental tips & exclusive offers delivered to your inbox.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex gap-2 max-w-sm w-full lg:w-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" aria-hidden="true" />
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-background/10 border border-background/20 text-sm font-sans text-background placeholder:text-background/40 focus:outline-none focus:border-background/40"
                />
              </div>
              <button type="submit" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-sans font-semibold hover:bg-primary/90 transition-colors shrink-0">
                Subscribe
              </button>
            </form>
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
  );
};

export default Footer;
