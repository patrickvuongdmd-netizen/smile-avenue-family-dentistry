import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Search, MapPin, ArrowRight, SmilePlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const quickLinks = [
  { label: "Homepage", href: "/", description: "Return to the main page" },
  { label: "Our Services", href: "/services", description: "Browse all dental services" },
  { label: "Find a Location", href: "/convenient-locations", description: "Cypress & Katy offices" },
  { label: "Meet Our Doctors", href: "/doctors", description: "Learn about our team" },
  { label: "Contact Us", href: "/contact", description: "Get in touch" },
  { label: "Book Online", href: "/book-online", description: "Schedule an appointment" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Fire analytics event for 404 tracking instead of console.error
    window.gtag?.("event", "page_not_found", { page_path: location.pathname });
  }, [location.pathname]);

  useDocTitle("Page Not Found | Smile Avenue Family Dentistry");


  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Page Not Found | Smile Avenue Family Dentistry</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to Smile Avenue Family Dentistry." />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0 animate-in fade-in duration-500">
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center max-w-3xl">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <SmilePlus className="w-12 h-12 text-primary" />
            </div>
            <p className="kicker">404 — PAGE NOT FOUND</p>
            <h1 className="section-heading text-4xl md:text-5xl">Oops! This Page Took a Detour</h1>
            <p className="section-body">
              The page you're looking for doesn't exist or may have moved. Don't worry — we'll help you find what you need.
            </p>
          </div>
        </section>

        <section className="section-padding section-alt">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Here are some helpful links:</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <h3 className="font-sans text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {link.label}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs font-sans text-muted-foreground mt-1">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="gradient-cta py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Need Help?</h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our team is happy to help you find what you're looking for. Give us a call or book online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-online" className="btn-cta-light">Book Online</Link>
              <a href="tel:8326481756" className="btn-cta-outline">Call (832) 648-1756</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default NotFound;
