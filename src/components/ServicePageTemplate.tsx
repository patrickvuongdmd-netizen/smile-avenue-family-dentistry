import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock } from "lucide-react";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import { ReactNode } from "react";
import { SERVICE_IMAGES, SERVICE_VIDEOS } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";

interface SubService {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface TrustBadge {
  icon: ReactNode;
  label: string;
}

interface Testimonial {
  quote: string;
  name: string;
  source: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  href: string;
}

export interface ServicePageData {
  location: "cypress" | "katy";
  serviceName: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroHeading: string;
  heroBody: string;
  heroCta1: string;
  heroCta2: string;
  heroImage: string;
  introKicker: string;
  introHeading: string;
  introParas: string[];
  trustBadges: TrustBadge[];
  subServicesKicker: string;
  subServicesHeading: string;
  subServicesBody: string;
  subServices: SubService[];
  processKicker: string;
  processHeading: string;
  processBody: string;
  processSteps: ProcessStep[];
  faqHeading: string;
  faqs: FaqItem[];
  reviewsKicker: string;
  reviewsHeading: string;
  testimonials: Testimonial[];
  ctaHeading: string;
  ctaBody: string;
  relatedServices?: RelatedService[];
}

const LOCATIONS = {
  cypress: {
    phone: "8326481756",
    phoneFormatted: "(832) 648-1756",
    booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress",
    address: "9212 Fry Rd #120, Cypress, TX 77433",
    name: "Cypress",
    path: "/cypress-tx",
    geo: { lat: "29.9691", lng: "-95.6972" },
  },
  katy: {
    phone: "2818005008",
    phoneFormatted: "(281) 800-5008",
    booking: "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    name: "Katy",
    path: "/katy-tx",
    geo: { lat: "29.7357", lng: "-95.7575" },
  },
};

const insuranceLogos = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental",
  "MetLife", "United Healthcare", "Guardian", "Humana",
];

const DEFAULT_RELATED: Record<string, { title: string; slug: string }[]> = {
  "dental-implants": [
    { title: "All-on-X Implants", slug: "all-on-x-implants" },
    { title: "Dental Crowns", slug: "dental-crowns" },
    { title: "Dental Bridges", slug: "dental-bridges" },
    { title: "Oral Surgery", slug: "oral-surgery" },
  ],
  "cosmetic-dentistry": [
    { title: "Veneers", slug: "veneers" },
    { title: "Teeth Whitening", slug: "teeth-whitening" },
    { title: "Invisalign®", slug: "invisalign" },
    { title: "Dental Crowns", slug: "dental-crowns" },
  ],
  "teeth-whitening": [
    { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
    { title: "Veneers", slug: "veneers" },
    { title: "Dental Cleaning", slug: "dental-cleaning" },
  ],
  "dental-crowns": [
    { title: "Dental Bridges", slug: "dental-bridges" },
    { title: "Dental Implants", slug: "dental-implants" },
    { title: "Root Canal", slug: "root-canal" },
    { title: "Veneers", slug: "veneers" },
  ],
  "all-on-x-implants": [
    { title: "Dental Implants", slug: "dental-implants" },
    { title: "Dentures", slug: "dentures" },
    { title: "Oral Surgery", slug: "oral-surgery" },
    { title: "Sedation Dentistry", slug: "sedation-dentistry" },
  ],
  "invisalign": [
    { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
    { title: "Teeth Whitening", slug: "teeth-whitening" },
    { title: "Dental Cleaning", slug: "dental-cleaning" },
  ],
  "root-canal": [
    { title: "Dental Crowns", slug: "dental-crowns" },
    { title: "Emergency Dentist", slug: "emergency-dentist" },
    { title: "Tooth Extraction", slug: "tooth-extraction" },
    { title: "Sedation Dentistry", slug: "sedation-dentistry" },
  ],
  "dental-cleaning": [
    { title: "Preventive Dentistry", slug: "preventive-dentistry" },
    { title: "Pediatric Dentistry", slug: "pediatric-dentistry" },
    { title: "Teeth Whitening", slug: "teeth-whitening" },
  ],
  "pediatric-dentistry": [
    { title: "Dental Cleaning", slug: "dental-cleaning" },
    { title: "Preventive Dentistry", slug: "preventive-dentistry" },
    { title: "Sedation Dentistry", slug: "sedation-dentistry" },
  ],
  "dentures": [
    { title: "Dental Implants", slug: "dental-implants" },
    { title: "All-on-X Implants", slug: "all-on-x-implants" },
    { title: "Dental Bridges", slug: "dental-bridges" },
  ],
  "veneers": [
    { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
    { title: "Teeth Whitening", slug: "teeth-whitening" },
    { title: "Dental Crowns", slug: "dental-crowns" },
  ],
  "dental-bridges": [
    { title: "Dental Crowns", slug: "dental-crowns" },
    { title: "Dental Implants", slug: "dental-implants" },
    { title: "Dentures", slug: "dentures" },
  ],
  "tooth-extraction": [
    { title: "Oral Surgery", slug: "oral-surgery" },
    { title: "Dental Implants", slug: "dental-implants" },
    { title: "Sedation Dentistry", slug: "sedation-dentistry" },
    { title: "Emergency Dentist", slug: "emergency-dentist" },
  ],
  "oral-surgery": [
    { title: "Tooth Extraction", slug: "tooth-extraction" },
    { title: "Dental Implants", slug: "dental-implants" },
    { title: "All-on-X Implants", slug: "all-on-x-implants" },
    { title: "Sedation Dentistry", slug: "sedation-dentistry" },
  ],
  "sedation-dentistry": [
    { title: "Oral Surgery", slug: "oral-surgery" },
    { title: "Root Canal", slug: "root-canal" },
    { title: "Dental Implants", slug: "dental-implants" },
    { title: "Pediatric Dentistry", slug: "pediatric-dentistry" },
  ],
  "emergency-dentist": [
    { title: "Root Canal", slug: "root-canal" },
    { title: "Tooth Extraction", slug: "tooth-extraction" },
    { title: "Dental Crowns", slug: "dental-crowns" },
    { title: "Sedation Dentistry", slug: "sedation-dentistry" },
  ],
  "preventive-dentistry": [
    { title: "Dental Cleaning", slug: "dental-cleaning" },
    { title: "Pediatric Dentistry", slug: "pediatric-dentistry" },
    { title: "Teeth Whitening", slug: "teeth-whitening" },
  ],
};

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  const loc = LOCATIONS[data.location];
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com${loc.path}/${data.serviceSlug}/`;
  useDocTitle(data.metaTitle);

  const related = data.relatedServices || (DEFAULT_RELATED[data.serviceSlug] || []).map(r => ({
    title: r.title,
    href: `${loc.path}/${r.slug}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DentalService" as const,
    name: data.serviceName,
    description: data.metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "Dentist",
      name: "Smile Avenue Family Dentistry",
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address.split(",")[0],
        addressLocality: loc.name,
        addressRegion: "TX",
        postalCode: loc.address.match(/\d{5}/)?.[0],
        addressCountry: "US",
      },
      telephone: loc.phoneFormatted,
      geo: { "@type": "GeoCoordinates", latitude: loc.geo.lat, longitude: loc.geo.lng },
    },
    areaServed: { "@type": "City", name: `${loc.name}, TX` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const FREE_CONSULT_SLUGS = ["dental-implants", "all-on-x-implants", "cosmetic-dentistry", "veneers", "invisalign"];
  const showFreeConsult = FREE_CONSULT_SLUGS.includes(data.serviceSlug);
  const isEmergency = data.serviceSlug === "emergency-dentist";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
      { "@type": "ListItem", position: 2, name: `${loc.name}, TX`, item: `https://www.smileavenuefamilydentistry.com${loc.path}/` },
      { "@type": "ListItem", position: 3, name: data.serviceName, item: canonicalUrl },
    ],
  };

  const heroImage = SERVICE_IMAGES[data.serviceSlug];

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      </Helmet>
      <Navbar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <TrustStrip />

      {/* Emergency Banner */}
      {isEmergency && (
        <div className="bg-destructive text-destructive-foreground py-3 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-sans font-bold">
              🦷 Dental Emergency? Call Now — Same-Day Appointments Available:{" "}
              <a href={`tel:${loc.phone}`} className="underline hover:no-underline">{loc.phoneFormatted}</a>
            </p>
          </div>
        </div>
      )}

      <main id="main-content" className="pb-14 lg:pb-0 animate-in fade-in duration-500">
        {/* HERO — Full-width banner with background image */}
        <section
          className="relative min-h-[300px] md:min-h-[400px] flex items-end"
          style={heroImage ? {
            backgroundImage: `url(${heroImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          } : undefined}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

          <div className="relative z-10 w-full">
            {/* Breadcrumb — inside the hero, tight to top */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              <nav aria-label="Breadcrumb" className="mb-4 text-xs font-sans text-white/70">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2" aria-hidden="true">›</span>
                <Link to={loc.path} className="hover:text-white transition-colors">{loc.name}, TX</Link>
                <span className="mx-2" aria-hidden="true">›</span>
                <span className="text-white">{data.serviceName}</span>
              </nav>
            </div>

            {/* Hero content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 text-primary" style={{ fontFamily: "var(--font-sans)" }}>
                  {data.heroKicker}
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {data.heroHeading}
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-white/85 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                  {data.heroBody}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={loc.booking} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label={`Book ${data.serviceName} appointment`}>
                    {data.heroCta1}
                  </a>
                  <a href={`tel:${loc.phone}`} className="btn-cta-outline" aria-label={`Call ${loc.phoneFormatted}`}>
                    {data.heroCta2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">{data.introKicker}</p>
              <h2 className="section-heading">{data.introHeading}</h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                {data.introParas.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {data.trustBadges.map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{badge.icon}</div>
                  <span className="text-sm font-sans font-semibold text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSURANCE */}
        <section className="py-12 section-alt">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="kicker">INSURANCE WE ACCEPT</p>
            <h2 className="section-heading">Most Major Plans Accepted</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
              {insuranceLogos.map((name) => (
                <div key={name} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center">
                  <span className="text-sm font-sans font-medium text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUB-SERVICES GRID */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.subServicesKicker}</p>
            <h2 className="section-heading">{data.subServicesHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">{data.subServicesBody}</p>
            <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">
              {data.subServices.map((svc) => (
                <div key={svc.title} className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{svc.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{svc.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.processKicker}</p>
            <h2 className="section-heading">{data.processHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">{data.processBody}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {data.processSteps.map((step) => (
                <div key={step.number} className="bg-card rounded-2xl p-6 border border-border text-left">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">{step.icon}</div>
                  <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {step.number}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading">{data.faqHeading}</h2>
                <p className="section-body">
                  Have more questions? Call us at{" "}
                  <a href={`tel:${loc.phone}`} className="text-primary hover:underline">{loc.phoneFormatted}</a>.
                </p>
              </div>
              <FaqAccordion items={data.faqs} />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.reviewsKicker}</p>
            <h2 className="section-heading">{data.reviewsHeading}</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              {data.testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        {related.length > 0 && (
          <section className="section-padding bg-background">
            <div className="container mx-auto text-center">
              <p className="kicker">EXPLORE MORE</p>
              <h2 className="section-heading">Related Services</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    to={r.href}
                    className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all"
                  >
                    {r.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* LOCATION INFO */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{loc.name} Office</h3>
              <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phoneFormatted}</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Mon–Fri 8am–5pm | Sat by Appointment</span>
                </div>
              </div>
              <a href={loc.booking} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                Book Appointment
              </a>
            </div>
          </div>
        </section>

        {/* FREE CONSULTATION BANNER */}
        {showFreeConsult && <FreeConsultationBanner />}

        {/* CTA BAR */}
        <section className="gradient-cta py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{data.ctaHeading}</h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{data.ctaBody}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={loc.booking} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a>
              <a href={`tel:${loc.phone}`} className="btn-cta-outline">Call {loc.phoneFormatted}</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <BackToTop />

      {/* Inline JSON-LD for guaranteed rendering */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
};

export default ServicePageTemplate;
