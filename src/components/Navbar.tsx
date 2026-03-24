import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

interface NavbarProps {
  phone: string;
  phoneFormatted: string;
  bookingUrl: string;
}

const Navbar = ({ phone, phoneFormatted, bookingUrl }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display font-bold text-foreground">
              Smile Avenue
            </span>
            <span className="text-xs font-sans font-medium text-muted-foreground tracking-wide">
              FAMILY DENTISTRY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-sans font-medium text-foreground">
              <Link to="/services/" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/convenient-locations/" className="hover:text-primary transition-colors">Locations</Link>
              <Link to="/patients/new-patient-hub/" className="hover:text-primary transition-colors">Patients</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </div>
            <div className="flex items-center gap-4">
              <a href={`tel:${phone}`} className="flex items-center gap-2 text-sm font-sans font-semibold text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                {phoneFormatted}
              </a>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border pb-4">
          <div className="container mx-auto px-4 pt-4 flex flex-col gap-4 font-sans text-sm font-medium text-foreground">
            <span className="py-2">Services</span>
            <span className="py-2">Locations</span>
            <span className="py-2">Patients</span>
            <Link to="/about" className="py-2" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/blog" className="py-2" onClick={() => setMobileOpen(false)}>Blog</Link>
            <a href={`tel:${phone}`} className="flex items-center gap-2 py-2 text-primary font-semibold">
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
