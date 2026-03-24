import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/logo-full.png" alt="Smile Avenue Family Dentistry" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm font-body leading-relaxed opacity-70">
              Hospitality-driven dental care for the whole family. Two convenient locations in Cypress and Katy, TX.
            </p>
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

          {/* Patients & Resources */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4 opacity-80">Patients & Resources</h4>
            <div className="space-y-2 text-sm font-sans opacity-70">
              <Link to="/patients/new-patient-hub/" className="block hover:opacity-100 transition-opacity">New Patient Hub</Link>
              <Link to="/patients/insurance/" className="block hover:opacity-100 transition-opacity">Insurance</Link>
              <Link to="/patients/financing/" className="block hover:opacity-100 transition-opacity">Financing</Link>
              <Link to="/patients/membership-plan/" className="block hover:opacity-100 transition-opacity">Membership Plan</Link>
              <Link to="/blog" className="block hover:opacity-100 transition-opacity">Blog</Link>
              <Link to="/faq/" className="block hover:opacity-100 transition-opacity">FAQ</Link>
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
              <Link to="/cypress-tx/emergency-dentistry" className="block hover:opacity-100 transition-opacity">Emergency Dentistry</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs font-sans opacity-50">
          © {new Date().getFullYear()} Smile Avenue Family Dentistry. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
