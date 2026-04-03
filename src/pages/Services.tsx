import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Shield, Sparkles, SmilePlus, Zap, AlertCircle, Pill, Baby, Scan, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import ServiceCard from "@/components/ServiceCard";
import LazyYouTube from "@/components/LazyYouTube";
import { PAGE_VIDEOS } from "@/lib/images";

const PHONE = "8326481756";
const PHONE_FORMATTED = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const serviceCategories = [
  {
    heading: "Preventive & General",
    services: [
      { title: "Preventive Dentistry", description: "Cleanings, exams, digital X-rays, and proactive care to keep your smile healthy.", href: "/services/preventive-dentistry", icon: <Shield className="w-5 h-5" />, cypressHref: "/cypress-tx/preventive-dentistry", katyHref: "/katy-tx/preventive-dentistry" },
      { title: "Dental Cleaning", description: "Professional cleanings to remove plaque, tartar, and surface stains.", href: "/services/dental-cleaning", icon: <Shield className="w-5 h-5" />, cypressHref: "/cypress-tx/dental-cleaning", katyHref: "/katy-tx/dental-cleaning" },
      { title: "Family Dental Care", description: "Comprehensive dental care for patients of all ages — from toddlers to grandparents.", href: "/services/family-dental-care", icon: <Shield className="w-5 h-5" />, cypressHref: "/cypress-tx/family-dental-care", katyHref: "/katy-tx/family-dental-care" },
      { title: "Children's Dentistry", description: "Gentle, fun-focused dental care designed especially for your little ones.", href: "/services/pediatric-dentistry", icon: <Baby className="w-5 h-5" />, cypressHref: "/cypress-tx/pediatric-dentistry", katyHref: "/katy-tx/pediatric-dentistry" },
      { title: "Emergency Dentistry", description: "Same-day urgent care for toothaches, broken teeth, and dental emergencies.", href: "/services/emergency-dentist", icon: <AlertCircle className="w-5 h-5" />, cypressHref: "/cypress-tx/emergency-dentist", katyHref: "/katy-tx/emergency-dentist" },
    ],
  },
  {
    heading: "Cosmetic & Aesthetic",
    services: [
      { title: "Cosmetic Dentistry", description: "Veneers, bonding, and smile design for the radiant smile you deserve.", href: "/services/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" />, cypressHref: "/cypress-tx/cosmetic-dentistry", katyHref: "/katy-tx/cosmetic-dentistry" },
      { title: "Veneers", description: "Porcelain veneers for a picture-perfect smile.", href: "/services/veneers", icon: <Sparkles className="w-5 h-5" />, cypressHref: "/cypress-tx/veneers", katyHref: "/katy-tx/veneers" },
      { title: "Invisalign®", description: "Clear aligners for a straighter smile — no metal brackets.", href: "/services/invisalign", icon: <Zap className="w-5 h-5" />, cypressHref: "/cypress-tx/invisalign", katyHref: "/katy-tx/invisalign" },
      { title: "Teeth Whitening", description: "Professional-grade whitening with dramatic results.", href: "/services/teeth-whitening", icon: <Scan className="w-5 h-5" />, cypressHref: "/cypress-tx/teeth-whitening", katyHref: "/katy-tx/teeth-whitening" },
    ],
  },
  {
    heading: "Restorative & Advanced",
    services: [
      { title: "Dental Implants", description: "Permanent tooth replacement that functions like natural teeth.", href: "/services/dental-implants", icon: <SmilePlus className="w-5 h-5" />, cypressHref: "/cypress-tx/dental-implants", katyHref: "/katy-tx/dental-implants" },
      { title: "All-on-X Implants", description: "Full arch restoration with as few as 4 implants.", href: "/services/all-on-x-implants", icon: <SmilePlus className="w-5 h-5" />, cypressHref: "/cypress-tx/all-on-x-implants", katyHref: "/katy-tx/all-on-x-implants" },
      { title: "Dental Crowns", description: "Custom crowns to rebuild and protect damaged teeth.", href: "/services/dental-crowns", icon: <Crown className="w-5 h-5" />, cypressHref: "/cypress-tx/dental-crowns", katyHref: "/katy-tx/dental-crowns" },
      { title: "Dental Bridges", description: "Fixed bridges to replace one or more missing teeth.", href: "/services/dental-bridges", icon: <Crown className="w-5 h-5" />, cypressHref: "/cypress-tx/dental-bridges", katyHref: "/katy-tx/dental-bridges" },
      { title: "Dentures", description: "Full and partial dentures for complete smile restoration.", href: "/services/dentures", icon: <Crown className="w-5 h-5" />, cypressHref: "/cypress-tx/dentures", katyHref: "/katy-tx/dentures" },
      { title: "Root Canal", description: "Save infected teeth with modern, comfortable root canal therapy.", href: "/services/root-canal", icon: <Shield className="w-5 h-5" />, cypressHref: "/cypress-tx/root-canal", katyHref: "/katy-tx/root-canal" },
    ],
  },
  {
    heading: "Surgical & Periodontal",
    services: [
      { title: "Oral Surgery", description: "Surgical extractions, bone grafting, and advanced procedures.", href: "/services/oral-surgery", icon: <SmilePlus className="w-5 h-5" />, cypressHref: "/cypress-tx/oral-surgery", katyHref: "/katy-tx/oral-surgery" },
      { title: "Tooth Extraction", description: "Simple and surgical tooth removal with comfort-focused care.", href: "/services/tooth-extraction", icon: <SmilePlus className="w-5 h-5" />, cypressHref: "/cypress-tx/tooth-extraction", katyHref: "/katy-tx/tooth-extraction" },
      { title: "Sedation Dentistry", description: "Relaxed, anxiety-free treatment options.", href: "/services/sedation-dentistry", icon: <Pill className="w-5 h-5" />, cypressHref: "/cypress-tx/sedation-dentistry", katyHref: "/katy-tx/sedation-dentistry" },
    ],
  },
];

const Services = () => {
  useDocTitle("Dental Services | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Dental Services | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Explore our full range of dental services — from preventive cleanings and Invisalign to dental implants and emergency care. Two convenient locations in Cypress and Katy, TX." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/services/" />
        <meta property="og:title" content="Dental Services | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Full range of dental services — preventive cleanings, Invisalign, dental implants, and emergency care." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/services/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/logo-full.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <TrustTicker />

      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">COMPREHENSIVE DENTAL CARE</p>
            <h1 className="section-heading text-4xl md:text-5xl leading-tight">
              Our Dental Services
            </h1>
            <p className="section-body max-w-2xl mx-auto">
              From your child's first checkup to a complete smile makeover, Smile Avenue offers the full spectrum of modern dental care — all under one roof.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link to="/services/preventive" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Preventive & General
              </Link>
              <Link to="/services/cosmetic" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Cosmetic & Aesthetic
              </Link>
              <Link to="/services/restorative" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Restorative & Advanced
              </Link>
              <Link to="/services/surgical" className="px-4 py-2 rounded-full bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Surgical & Periodontal
              </Link>
            </div>
          </div>
        </section>

        {/* COMPARISON GUIDES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">COMPARISON GUIDES</p>
            <h2 className="section-heading text-2xl md:text-3xl mb-4">Not Sure Which Treatment Is Right?</h2>
            <p className="section-body max-w-2xl mx-auto mb-8">
              Our side-by-side comparison guides help you understand the differences between similar treatments.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/services/dental-implants-vs-dentures" className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Implants vs Dentures
              </Link>
              <Link to="/services/invisalign-vs-braces" className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Invisalign vs Braces
              </Link>
              <Link to="/services/veneers-vs-crowns" className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Veneers vs Crowns
              </Link>
              <Link to="/services/crowns-vs-bridges" className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Crowns vs Bridges
              </Link>
              <Link to="/services/dental-implants-vs-bridges" className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Implants vs Bridges
              </Link>
              <Link to="/services/whitening-vs-veneers" className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Whitening vs Veneers
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICE CATEGORIES */}
        {serviceCategories.map((cat, idx) => (
          <section key={cat.heading} className={`section-padding ${idx % 2 === 0 ? "section-warm" : "bg-background"}`}>
            <div className="container mx-auto">
              <h2 className="section-heading text-2xl md:text-3xl mb-8">{cat.heading}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((svc) => (
                  <div key={svc.title} className="card-soft !p-0 overflow-hidden flex flex-col">
                    <Link to={svc.href} className="group p-6 pb-4 flex-1">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 text-muted-foreground">
                        {svc.icon}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-primary mb-2">{svc.title}</h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">{svc.description}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-sans font-medium text-primary group-hover:gap-2 transition-all">
                        Learn More <span aria-hidden>→</span>
                      </span>
                    </Link>
                    <div className="px-6 pb-5 pt-2 border-t border-border/40 flex items-center gap-3 text-xs font-sans">
                      <Link to={svc.cypressHref} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                        Cypress
                      </Link>
                      <span className="text-border">·</span>
                      <Link to={svc.katyHref} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                        Katy
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}

        {/* Video */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="section-heading">See the Difference One Visit Makes</h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.services.youtubeId} title={PAGE_VIDEOS.services.title} />
            </div>
          </div>
        </section>

      </main>

      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <Footer />
    </>
  );
};

export default Services;
