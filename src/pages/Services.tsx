import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Shield, Sparkles, SmilePlus, Zap, AlertCircle, Pill, Baby, Scan, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import ServiceCard from "@/components/ServiceCard";

const PHONE = "8326481756";
const PHONE_FORMATTED = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const serviceCategories = [
  {
    heading: "Preventive & General",
    services: [
      { title: "Preventive Dentistry", description: "Cleanings, exams, digital X-rays, and proactive care to keep your smile healthy.", href: "/cypress-tx/preventive-dentistry/", icon: <Shield className="w-5 h-5" /> },
      { title: "Dental Cleaning", description: "Professional cleanings to remove plaque, tartar, and surface stains.", href: "/cypress-tx/dental-cleaning/", icon: <Shield className="w-5 h-5" /> },
      { title: "Children's Dentistry", description: "Gentle, fun-focused dental care designed especially for your little ones.", href: "/cypress-tx/pediatric-dentistry/", icon: <Baby className="w-5 h-5" /> },
      { title: "Emergency Dentistry", description: "Same-day urgent care for toothaches, broken teeth, and dental emergencies.", href: "/cypress-tx/emergency-dentist/", icon: <AlertCircle className="w-5 h-5" /> },
    ],
  },
  {
    heading: "Cosmetic & Aesthetic",
    services: [
      { title: "Cosmetic Dentistry", description: "Veneers, bonding, and smile design for the radiant smile you deserve.", href: "/cypress-tx/cosmetic-dentistry/", icon: <Sparkles className="w-5 h-5" /> },
      { title: "Veneers", description: "Porcelain veneers for a picture-perfect smile.", href: "/cypress-tx/veneers/", icon: <Sparkles className="w-5 h-5" /> },
      { title: "Invisalign®", description: "Clear aligners for a straighter smile — no metal brackets.", href: "/cypress-tx/invisalign/", icon: <Zap className="w-5 h-5" /> },
      { title: "Teeth Whitening", description: "Professional-grade whitening with dramatic results.", href: "/cypress-tx/teeth-whitening/", icon: <Scan className="w-5 h-5" /> },
    ],
  },
  {
    heading: "Restorative & Advanced",
    services: [
      { title: "Dental Implants", description: "Permanent tooth replacement that functions like natural teeth.", href: "/cypress-tx/dental-implants/", icon: <SmilePlus className="w-5 h-5" /> },
      { title: "All-on-X Implants", description: "Full arch restoration with as few as 4 implants.", href: "/cypress-tx/all-on-x-implants/", icon: <SmilePlus className="w-5 h-5" /> },
      { title: "Dental Crowns", description: "Custom crowns to rebuild and protect damaged teeth.", href: "/cypress-tx/dental-crowns/", icon: <Crown className="w-5 h-5" /> },
      { title: "Dental Bridges", description: "Fixed bridges to replace one or more missing teeth.", href: "/cypress-tx/dental-bridges/", icon: <Crown className="w-5 h-5" /> },
      { title: "Dentures", description: "Full and partial dentures for complete smile restoration.", href: "/cypress-tx/dentures/", icon: <Crown className="w-5 h-5" /> },
      { title: "Root Canal", description: "Save infected teeth with modern, comfortable root canal therapy.", href: "/cypress-tx/root-canal/", icon: <Shield className="w-5 h-5" /> },
    ],
  },
  {
    heading: "Surgical & Periodontal",
    services: [
      { title: "Oral Surgery", description: "Surgical extractions, bone grafting, and advanced procedures.", href: "/cypress-tx/oral-surgery/", icon: <SmilePlus className="w-5 h-5" /> },
      { title: "Tooth Extraction", description: "Simple and surgical tooth removal with comfort-focused care.", href: "/cypress-tx/tooth-extraction/", icon: <SmilePlus className="w-5 h-5" /> },
      { title: "Sedation Dentistry", description: "Relaxed, anxiety-free treatment options.", href: "/cypress-tx/sedation-dentistry/", icon: <Pill className="w-5 h-5" /> },
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
          </div>
        </section>

        {/* SERVICE CATEGORIES */}
        {serviceCategories.map((cat, idx) => (
          <section key={cat.heading} className={`section-padding ${idx % 2 === 0 ? "section-alt" : "bg-background"}`}>
            <div className="container mx-auto">
              <h2 className="section-heading text-2xl md:text-3xl mb-8">{cat.heading}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((svc) => (
                  <ServiceCard key={svc.title} {...svc} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="gradient-cta section-padding text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="font-body text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Schedule a consultation and our team will create a personalized treatment plan just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">
                Book a Consultation
              </a>
              <a href={`tel:${PHONE}`} className="btn-cta-outline">
                Call {PHONE_FORMATTED}
              </a>
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
