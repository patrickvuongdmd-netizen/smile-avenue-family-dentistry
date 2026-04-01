import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Globe, Check, AlertCircle, Shield, Sparkles } from "lucide-react";
import BookingLocationModal from "@/components/BookingLocationModal";

interface NavbarProps {
  phone: string;
  phoneFormatted: string;
  bookingUrl: string;
}

const serviceLinks = [
  { label: "Emergency Dentist", slug: "emergency-dentist" },
  { label: "Dental Implants", slug: "dental-implants" },
  { label: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
  { label: "Teeth Whitening", slug: "teeth-whitening" },
  { label: "Dental Crowns", slug: "dental-crowns" },
  { label: "All-on-X Implants", slug: "all-on-x-implants" },
  { label: "Invisalign®", slug: "invisalign" },
  { label: "Root Canal", slug: "root-canal" },
  { label: "Dental Cleaning", slug: "dental-cleaning" },
  { label: "Pediatric Dentistry", slug: "pediatric-dentistry" },
  { label: "Dentures", slug: "dentures" },
  { label: "Veneers", slug: "veneers" },
  { label: "Dental Bridges", slug: "dental-bridges" },
  { label: "Tooth Extraction", slug: "tooth-extraction" },
  { label: "Oral Surgery", slug: "oral-surgery" },
  { label: "Sedation Dentistry", slug: "sedation-dentistry" },
  { label: "Preventive Dentistry", slug: "preventive-dentistry" },
];

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
  { label: "Smile Gallery", href: "/smile-gallery" },
];

type DropdownKey = "services" | "patients" | "about" | null;

const Navbar = ({ phone, phoneFormatted, bookingUrl }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const navRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const isSpanish = location.pathname.startsWith("/es");
  const locationPrefix = location.pathname.startsWith("/katy-tx") ? "/katy-tx" : "/cypress-tx";

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1.5 text-xs font-sans font-semibold ${className}`}>
      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
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
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" ref={navRef}>
      {/* Intent-routing utility bar — always visible */}
      <div className="hidden md:block bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-1">
            <Link to="/patients/new-patient-hub" className="px-3 py-1 text-xs font-sans font-semibold text-muted-foreground hover:text-primary transition-colors">New Patients</Link>
            <span className="text-border">·</span>
            <Link to={`${locationPrefix}/emergency-dentist`} className="px-3 py-1 text-xs font-sans font-semibold text-destructive/80 hover:text-destructive transition-colors">Dental Emergency</Link>
            <span className="text-border">·</span>
            <Link to="/insurance" className="px-3 py-1 text-xs font-sans font-semibold text-muted-foreground hover:text-primary transition-colors">Insurance & Financing</Link>
            <span className="text-border">·</span>
            <Link to="/specials" className="px-3 py-1 text-xs font-sans font-semibold text-muted-foreground hover:text-primary transition-colors">Specials</Link>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a href={`tel:${phone}`} className="flex items-center gap-1 text-xs font-sans font-semibold text-foreground hover:text-primary transition-colors">
              <Phone className="w-3 h-3" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo-full.webp" alt="Smile Avenue Family Dentistry" className="h-10 md:h-[72px] w-auto object-contain" width={200} height={155} />
          </Link>

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
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-popover border border-border rounded-xl shadow-xl p-5 w-[540px]">
                      <div className="grid grid-cols-3 gap-x-6 gap-y-1.5">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.slug}
                            to={`${locationPrefix}/${s.slug}`}
                            className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors py-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border mt-3 pt-3">
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

              <Link to="/convenient-locations" className="px-2 lg:px-3 py-2 hover:text-primary transition-colors whitespace-nowrap">Locations</Link>

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

              <Link to={`${locationPrefix}/emergency-dentist`} className="px-2 lg:px-3 py-2 hover:text-destructive transition-colors whitespace-nowrap text-destructive/80 font-semibold">Emergency</Link>
              <Link to="/blog" className="px-2 lg:px-3 py-2 hover:text-primary transition-colors whitespace-nowrap">Blog</Link>
              <Link to="/contact" className="px-2 lg:px-3 py-2 hover:text-primary transition-colors whitespace-nowrap">Contact</Link>
            </div>

            <div className="flex items-center gap-2 lg:gap-3 ml-1 lg:ml-2">
              <button onClick={() => setBookingModalOpen(true)} className="btn-primary text-sm !px-4 !py-2.5 lg:!px-7 lg:!py-3.5">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile — clean, minimal: just hamburger */}
          <div className="md:hidden">
            <button
              className="relative w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-muted/50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}>
                <Menu className="w-5 h-5" />
              </span>
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}>
                <X className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>

    </nav>

    {/* Mobile fullscreen menu — outside nav to avoid sticky stacking context */}
    <div
      className={`md:hidden fixed inset-0 top-[57px] z-[999] transition-all duration-300 ${
        mobileOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      <div className="h-full overflow-y-auto overscroll-contain pb-32">
        <div className="container mx-auto px-5 pt-6 flex flex-col gap-0.5">
          {/* Primary intent cards */}
          <div className="grid grid-cols-2 gap-2.5 pb-5">
            <Link to="/patients/new-patient-hub" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-primary/5 border border-primary/15 text-primary font-semibold text-[13px] font-sans">
              <Check className="w-4 h-4 shrink-0" /> New Patient
            </Link>
            <Link to={`${locationPrefix}/emergency-dentist`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-destructive/5 border border-destructive/15 text-destructive font-semibold text-[13px] font-sans">
              <AlertCircle className="w-4 h-4 shrink-0" /> Emergency
            </Link>
            <Link to="/insurance" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-[13px] font-sans">
              <Shield className="w-4 h-4 shrink-0 text-primary" /> Insurance
            </Link>
            <Link to="/services" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-[13px] font-sans">
              <Sparkles className="w-4 h-4 shrink-0 text-primary" /> All Services
            </Link>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-1" />

          {/* Accordion nav sections */}
          <button
            className="flex items-center justify-between py-4 w-full text-left text-[15px] font-sans font-semibold text-foreground"
            onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
          >
            Services
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
          </button>
          {mobileExpanded === "services" && (
            <div className="pl-1 pb-3 space-y-0.5 animate-in slide-in-from-top-1 duration-200">
              {serviceLinks.map((s) => (
                <Link key={s.slug} to={`${locationPrefix}/${s.slug}`} className="block py-2 px-3 text-[13px] font-sans text-muted-foreground hover:text-primary rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setMobileOpen(false)}>
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <div className="h-px bg-border" />

          <button
            className="flex items-center justify-between py-4 w-full text-left text-[15px] font-sans font-semibold text-foreground"
            onClick={() => setMobileExpanded(mobileExpanded === "patients" ? null : "patients")}
          >
            Patients
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${mobileExpanded === "patients" ? "rotate-180" : ""}`} />
          </button>
          {mobileExpanded === "patients" && (
            <div className="pl-1 pb-3 space-y-0.5 animate-in slide-in-from-top-1 duration-200">
              {patientLinks.map((l) => (
                <Link key={l.href} to={l.href} className="block py-2 px-3 text-[13px] font-sans text-muted-foreground hover:text-primary rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          <div className="h-px bg-border" />

          <button
            className="flex items-center justify-between py-4 w-full text-left text-[15px] font-sans font-semibold text-foreground"
            onClick={() => setMobileExpanded(mobileExpanded === "about" ? null : "about")}
          >
            About
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${mobileExpanded === "about" ? "rotate-180" : ""}`} />
          </button>
          {mobileExpanded === "about" && (
            <div className="pl-1 pb-3 space-y-0.5 animate-in slide-in-from-top-1 duration-200">
              {aboutLinks.map((l) => (
                <Link key={l.href} to={l.href} className="block py-2 px-3 text-[13px] font-sans text-muted-foreground hover:text-primary rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          <div className="h-px bg-border" />

          <Link to="/convenient-locations" className="py-4 text-[15px] font-sans font-semibold text-foreground" onClick={() => setMobileOpen(false)}>Locations</Link>
          <div className="h-px bg-border" />
          <Link to="/contact" className="py-4 text-[15px] font-sans font-semibold text-foreground" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="h-px bg-border" />
          <Link to="/blog" className="py-4 text-[15px] font-sans font-semibold text-foreground" onClick={() => setMobileOpen(false)}>Blog</Link>

          {/* Footer area: language + phone */}
          <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
            <LanguageToggle />
            <a href={`tel:${phone}`} className="flex items-center gap-1.5 text-sm font-sans font-semibold text-primary">
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </div>
    <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};

export default Navbar;
