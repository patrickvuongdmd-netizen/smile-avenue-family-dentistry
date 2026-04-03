import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Accessibility } from "lucide-react";
import BookingLocationModal from "@/components/BookingLocationModal";

interface NavbarProps {
  phone: string;
  phoneFormatted: string;
  bookingUrl: string;
}

const generalCare = [
  { label: "Family Dental Care", slug: "family-dental-care" },
  { label: "Dental Cleaning", slug: "dental-cleaning" },
  { label: "Pediatric Dentistry", slug: "pediatric-dentistry" },
  { label: "Emergency Dentistry", slug: "emergency-dentist" },
  { label: "Root Canal", slug: "root-canal" },
  { label: "Tooth Extraction", slug: "tooth-extraction" },
  { label: "Dental Crowns", slug: "dental-crowns" },
  { label: "Dental Bridges", slug: "dental-bridges" },
  { label: "Dentures", slug: "dentures" },
];

const specializedCare = [
  { label: "Dental Implants", slug: "dental-implants" },
  { label: "All-on-X Implants", slug: "all-on-x-implants" },
  { label: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
  { label: "Invisalign®", slug: "invisalign" },
  { label: "Teeth Whitening", slug: "teeth-whitening" },
  { label: "Veneers", slug: "veneers" },
  { label: "Sedation Dentistry", slug: "sedation-dentistry" },
  { label: "Oral Surgery", slug: "oral-surgery" },
];

const serviceLinks = [...generalCare, ...specializedCare];

const patientLinks = [
  { label: "New Patient Hub", href: "/patients/new-patient-hub" },
  { label: "Free Consultation", href: "/free-consultation" },
  { label: "Insurance & Financing", href: "/insurance" },
  { label: "Membership Plan", href: "/membership-plan" },
  { label: "Specials & Offers", href: "/specials" },
  { label: "FAQ", href: "/faq" },
];

const aboutLinks = [
  { label: "About Smile Avenue", href: "/about" },
  { label: "Meet Our Doctors", href: "/doctors" },
  { label: "Our Team", href: "/our-team" },
  { label: "Dental Lab", href: "/dental-lab" },
  { label: "Patient Testimonials", href: "/patient-testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

type DropdownKey = "services" | "patients" | "about" | "locations" | null;

const Navbar = ({ phone, phoneFormatted, bookingUrl }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // At top: always show. Scrolling down: hide. Scrolling up: show.
      setNavHidden(y > 50 && y > lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const navRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const isSpanish = location.pathname.startsWith("/es");
  const locationPrefix = location.pathname.startsWith("/katy-tx") ? "/katy-tx" : "/cypress-tx";

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1.5 text-xs font-sans font-semibold ${className}`}>
      <Link
        to="/"
        className={`px-1.5 py-0.5 rounded transition-colors ${!isSpanish ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        onClick={() => setMobileOpen(false)}
      >
        EN
      </Link>
      <span className="text-border">|</span>
      <Link
        to="/es"
        className={`px-1.5 py-0.5 rounded transition-colors ${isSpanish ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        onClick={() => setMobileOpen(false)}
      >
        ES
      </Link>
      <span className="text-border">|</span>
      <button
        onClick={() => {
          if ((window as any).toggleAccessibility) {
            (window as any).toggleAccessibility();
          }
        }}
        className="px-1.5 py-0.5 rounded text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Accessibility options"
        title="Accessibility"
      >
        <Accessibility className="w-3.5 h-3.5" />
      </button>
    </div>
  );

  const openDropdown = (key: DropdownKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-menu-open", "true");
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-menu-open");
    }
    return () => { document.body.style.overflow = ""; document.body.removeAttribute("data-menu-open"); };
  }, [mobileOpen]);

  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
    <nav className={`sticky top-0 z-[1000] bg-background/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] transition-transform duration-300 ${navHidden && !mobileOpen ? "lg:translate-y-0 -translate-y-full" : "translate-y-0"}`} ref={navRef}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo — mark + wordmark on mobile, full badge on desktop */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center shrink-0 gap-2">
            {/* Desktop: full badge logo */}
            <img src="/logo-full-alt.webp" alt="Smile Avenue Family Dentistry" className="hidden md:block h-[72px] w-auto object-contain" width={200} height={155} />
            {/* Mobile: circle mark + elegant wordmark */}
            <img src="/logo-mark.png" alt="" className="md:hidden h-10 w-10 object-contain rounded-full" width={40} height={40} />
            <span className="md:hidden font-display text-lg font-bold tracking-tight text-foreground">Smile Avenue</span>
          </Link>
          {/* Invisible spacer on mobile to keep justify-between working */}
          <div className="w-10 md:hidden" />

          {/* Desktop Nav — visible at md (768px+) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-4">
            <div className="flex items-center text-sm font-sans font-medium text-foreground">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("services")}
                onMouseLeave={closeDropdown}
              >
                <Link to="/services" className="flex items-center gap-1 px-2 lg:px-3 py-2 hover:text-primary transition-colors whitespace-nowrap">
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-popover border border-border rounded-xl shadow-xl p-6 w-[520px]">
                      <div className="grid grid-cols-2 gap-x-10">
                        {/* General Care */}
                        <div>
                          <p className="text-xs font-sans font-bold uppercase tracking-wider text-primary mb-3">General Care</p>
                          {generalCare.map((s) => (
                            <Link key={s.slug} to={`${locationPrefix}/${s.slug}`} className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setActiveDropdown(null)}>
                              {s.label}
                            </Link>
                          ))}
                        </div>
                        {/* Specialized Care */}
                        <div>
                          <p className="text-xs font-sans font-bold uppercase tracking-wider text-primary mb-3">Specialized Care</p>
                          {specializedCare.map((s) => (
                            <Link key={s.slug} to={`${locationPrefix}/${s.slug}`} className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors py-1.5" onClick={() => setActiveDropdown(null)}>
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-border mt-4 pt-3">
                        <Link to="/services" className="text-sm font-sans font-semibold text-primary hover:underline" onClick={() => setActiveDropdown(null)}>
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Patients Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("patients")}
                onMouseLeave={closeDropdown}
              >
                <button className="flex items-center gap-1 px-2 lg:px-3 py-2 hover:text-primary transition-colors whitespace-nowrap">
                  Patients <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeDropdown === "patients" && (
                  <div className="absolute top-full right-0 pt-2 z-50">
                    <div className="bg-popover border border-border rounded-xl shadow-xl p-4 w-56">
                      {patientLinks.map((l) => (
                        <Link
                          key={l.href}
                          to={l.href}
                          className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors py-1.5"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("locations")}
                onMouseLeave={closeDropdown}
              >
                <Link to="/locations" className="flex items-center gap-1 px-2 lg:px-3 py-2 hover:text-primary transition-colors whitespace-nowrap">
                  Locations <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                {activeDropdown === "locations" && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-popover border border-border rounded-xl shadow-xl p-4 w-56">
                      <Link
                        to="/cypress-tx"
                        className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors py-1.5"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Cypress, TX
                      </Link>
                      <Link
                        to="/katy-tx"
                        className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors py-1.5"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Katy, TX
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown("about")}
                onMouseLeave={closeDropdown}
              >
                <Link to="/about" className="flex items-center gap-1 px-2 lg:px-3 py-2 hover:text-primary transition-colors whitespace-nowrap">
                  About <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                {activeDropdown === "about" && (
                  <div className="absolute top-full right-0 pt-2 z-50">
                    <div className="bg-popover border border-border rounded-xl shadow-xl p-4 w-56">
                      {aboutLinks.map((l) => (
                        <Link
                          key={l.href}
                          to={l.href}
                          className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors py-1.5"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

            <div className="flex items-center gap-2 lg:gap-3 ml-1 lg:ml-2">
              <button onClick={() => setBookingModalOpen(true)} className="inline-flex items-center justify-center text-sm font-sans font-bold tracking-wide !px-4 !py-2.5 lg:!px-7 lg:!py-3.5 rounded-xl transition-all duration-200 text-white bg-primary hover:bg-primary-dark">
                Book Now
              </button>
              <a
                href={`tel:${phone}`}
                className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-full border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={`Call ${phoneFormatted}`}
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile — Tend-inspired: centered logo, hamburger right */}
          <div className="md:hidden flex items-center">
            <button
              className="w-10 h-10 flex items-center justify-center text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}>
                <Menu className="w-6 h-6" />
              </span>
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}>
                <X className="w-6 h-6" />
              </span>
            </button>
          </div>
        </div>
      </div>

    </nav>

    {/* Mobile fullscreen menu */}
    <div
      className={`md:hidden fixed inset-0 top-14 z-[999] transition-all duration-300 ${
        mobileOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      <div className="h-full flex flex-col">
        {/* Scrollable nav content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-7 pt-6 pb-10">
          <div>
            {/* Services */}
            <button
              className="flex items-center gap-1.5 py-3.5 w-full text-left text-lg font-display font-semibold text-foreground"
              onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
            >
              Services
              <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "services" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-1 py-3 space-y-0">
                {serviceLinks.map((s) => (
                  <Link key={s.slug} to={`${locationPrefix}/${s.slug}`} className="block py-[7px] text-sm font-sans text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations */}
            <button
              className="flex items-center gap-1.5 py-3.5 w-full text-left text-lg font-display font-semibold text-foreground"
              onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")}
            >
              Locations
              <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${mobileExpanded === "locations" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "locations" ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-1 py-3 space-y-0">
                <Link to="/cypress-tx" className="block py-[7px] text-sm font-sans text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Cypress, TX</Link>
                <Link to="/katy-tx" className="block py-[7px] text-sm font-sans text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Katy, TX</Link>
              </div>
            </div>

            {/* Patients */}
            <button
              className="flex items-center gap-1.5 py-3.5 w-full text-left text-lg font-display font-semibold text-foreground"
              onClick={() => setMobileExpanded(mobileExpanded === "patients" ? null : "patients")}
            >
              Patients
              <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${mobileExpanded === "patients" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "patients" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-1 py-3 space-y-0">
                {patientLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="block py-[7px] text-sm font-sans text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* About */}
            <button
              className="flex items-center gap-1.5 py-3.5 w-full text-left text-lg font-display font-semibold text-foreground"
              onClick={() => setMobileExpanded(mobileExpanded === "about" ? null : "about")}
            >
              About
              <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${mobileExpanded === "about" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "about" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="pl-1 py-3 space-y-0">
                {aboutLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="block py-[7px] text-sm font-sans text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Book Now — compact left-aligned pill */}
          <div className="mt-8">
            <button
              onClick={() => { setBookingModalOpen(true); setMobileOpen(false); }}
              className="inline-flex items-center justify-center text-sm font-sans font-bold uppercase tracking-widest px-7 py-3 rounded-full transition-all duration-200 text-white bg-primary hover:bg-primary-dark"
            >
              Book Now
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mt-6">
            <a href="https://www.facebook.com/SmileAvenueFamilyDentistry/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115v3.146c-.427-.044-.72-.065-.964-.065-1.37 0-1.899.519-1.899 1.87v2.492h3.727l-.64 3.667h-3.087v8.126C18.996 22.92 23 18.918 23 14c0-5.523-4.477-10-10-10S3 8.477 3 14c0 4.237 2.636 7.855 6.101 9.691z"/></svg>
            </a>
            <a href="https://www.instagram.com/smileavenuefamilydentistry/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@smileavenuetx" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-2.65-.78V6.69h2.65z"/></svg>
            </a>
          </div>

          {/* Language, Accessibility & Emergency */}
          <div className="mt-6 flex items-center gap-1.5 text-xs font-sans font-semibold">
            <Link
              to="/"
              className={`px-1.5 py-0.5 rounded transition-colors ${!isSpanish ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setMobileOpen(false)}
            >
              EN
            </Link>
            <span className="text-border">|</span>
            <Link
              to="/es"
              className={`px-1.5 py-0.5 rounded transition-colors ${isSpanish ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setMobileOpen(false)}
            >
              ES
            </Link>
            <span className="text-border">|</span>
            <button
              onClick={() => { if ((window as any).toggleAccessibility) (window as any).toggleAccessibility(); }}
              className="px-1.5 py-0.5 rounded text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Accessibility options"
            >
              <Accessibility className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};

export default Navbar;
