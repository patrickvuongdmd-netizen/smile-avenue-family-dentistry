import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Check, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import ReviewsWidget from "@/components/ReviewsWidget";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import TrustTicker from "@/components/TrustTicker";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import BookingLocationModal from "@/components/BookingLocationModal";
import { ReactNode } from "react";
import { SERVICE_IMAGES, SERVICE_VIDEOS, OFFICE_IMAGES } from "@/lib/images";
import VideoCarousel from "@/components/VideoCarousel";
import OfficePhotoGrid from "@/components/OfficePhotoGrid";
import BlogCardCarousel from "@/components/BlogCardCarousel";
import { BLOG_POSTS } from "@/lib/blog-data";
import categoryImplants from "@/assets/blog/category-implants.jpg";
import categoryCosmetic from "@/assets/blog/category-cosmetic.jpg";
import categoryEmergency from "@/assets/blog/category-emergency.jpg";
import categoryInvisalign from "@/assets/blog/category-invisalign.jpg";
import categoryPediatric from "@/assets/blog/category-pediatric.jpg";
import categorySedation from "@/assets/blog/category-sedation.jpg";
import categoryPreventive from "@/assets/blog/category-preventive.jpg";

const BLOG_CATEGORY_IMAGES: Record<string, string> = {
  Implants: categoryImplants, Cosmetic: categoryCosmetic, Emergency: categoryEmergency,
  Invisalign: categoryInvisalign, Pediatric: categoryPediatric, Sedation: categorySedation, Preventive: categoryPreventive,
};

const BLOG_CATEGORY_COLORS: Record<string, { bg: string; badge: string; text: string }> = {
  Implants: { bg: "bg-[hsl(192,40%,92%)]", badge: "bg-[hsl(192,72%,55%)]/15 text-[hsl(192,78%,33%)]", text: "text-[hsl(192,78%,33%)]" },
  Cosmetic: { bg: "bg-[hsl(340,30%,93%)]", badge: "bg-[hsl(340,60%,60%)]/15 text-[hsl(340,60%,40%)]", text: "text-[hsl(340,60%,40%)]" },
  Emergency: { bg: "bg-[hsl(15,40%,93%)]", badge: "bg-[hsl(15,70%,55%)]/15 text-[hsl(15,70%,35%)]", text: "text-[hsl(15,70%,35%)]" },
  Invisalign: { bg: "bg-[hsl(160,30%,92%)]", badge: "bg-[hsl(160,50%,45%)]/15 text-[hsl(160,55%,30%)]", text: "text-[hsl(160,55%,30%)]" },
  Pediatric: { bg: "bg-[hsl(270,30%,93%)]", badge: "bg-[hsl(270,50%,60%)]/15 text-[hsl(270,50%,40%)]", text: "text-[hsl(270,50%,40%)]" },
  Sedation: { bg: "bg-[hsl(220,30%,93%)]", badge: "bg-[hsl(220,55%,55%)]/15 text-[hsl(220,55%,35%)]", text: "text-[hsl(220,55%,35%)]" },
  Preventive: { bg: "bg-[hsl(80,30%,92%)]", badge: "bg-[hsl(80,50%,40%)]/15 text-[hsl(80,50%,28%)]", text: "text-[hsl(80,50%,28%)]" },
};

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

export interface Testimonial {
  quote: string;
  name: string;
  source: string;
  location?: string;
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
  heroValueProps?: string[];
  introKicker: string;
  introHeading: string;
  introParas: ReactNode[];
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
    hours: "Mon–Fri 8:30am–5pm",
  },
  katy: {
    phone: "2818005008",
    phoneFormatted: "(281) 800-5008",
    booking: "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    name: "Katy",
    path: "/katy-tx",
    geo: { lat: "29.7357", lng: "-95.7575" },
    hours: "Mon–Fri 8:30am–5pm, Sat 8am–2pm",
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
  "family-dental-care": [
    { title: "Dental Cleaning", slug: "dental-cleaning" },
    { title: "Pediatric Dentistry", slug: "pediatric-dentistry" },
    { title: "Preventive Dentistry", slug: "preventive-dentistry" },
  ],
};

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  const loc = LOCATIONS[data.location];
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com${loc.path}/${data.serviceSlug}/`;
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
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
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: data.location === "cypress" ? "3000" : "2000", bestRating: "5", worstRating: "1" },
    },
    areaServed: { "@type": "City", name: `${loc.name}, TX` },
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.metaTitle,
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".kicker", ".section-body"] },
    url: canonicalUrl,
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
  const HIGH_VALUE_SLUGS = ["dental-implants", "all-on-x-implants", "cosmetic-dentistry", "veneers", "invisalign", "sedation-dentistry", "dental-crowns"];
  const showLiveReviews = HIGH_VALUE_SLUGS.includes(data.serviceSlug);
  const isEmergency = data.serviceSlug === "emergency-dentist";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.smileavenuefamilydentistry.com/services/" },
      { "@type": "ListItem", position: 3, name: data.serviceName, item: `https://www.smileavenuefamilydentistry.com/services/${data.serviceSlug}/` },
      { "@type": "ListItem", position: 4, name: `in ${loc.name}, TX`, item: canonicalUrl },
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
        {heroImage && <meta property="og:image" content={heroImage.url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        {heroImage && <meta name="twitter:image" content={heroImage.url} />}
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableJsonLd)}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <TrustStrip />

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

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-warm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-sans text-muted-foreground text-center md:text-left">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to={`/services/${data.serviceSlug}`} className="hover:text-primary transition-colors">{data.serviceName}</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">in {loc.name}, TX</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="text-center md:text-left">
                <p className="kicker">{data.heroKicker}</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-[1.08] font-display">
                  {data.heroHeading}
                </h1>
                <p className="text-[15px] md:text-xl leading-relaxed mb-8 text-muted-foreground max-w-xl mx-auto md:mx-0 font-body">
                  {data.heroBody}
                </p>

                {(data.heroValueProps && data.heroValueProps.length > 0) && (
                  <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto md:mx-0">
                    {data.heroValueProps.map((prop, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-sans text-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{prop}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex gap-3 mb-5 max-w-sm mx-auto md:mx-0">
                  <button onClick={() => setBookingModalOpen(true)} className="btn-cta flex-1 whitespace-nowrap" aria-label={`Book ${data.serviceName} appointment`}>
                    {data.heroCta1}
                  </button>
                  <a href={`tel:${loc.phone}`} className="btn-secondary flex-1 whitespace-nowrap flex items-center justify-center gap-2" aria-label={`Call ${loc.phoneFormatted}`}>
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                  <span className="text-sm font-sans font-semibold text-foreground">4.9 ★★★★★</span>
                  <span className="text-xs font-sans text-muted-foreground">from 5,000+ reviews</span>
                </div>
              </div>

              {heroImage && (
                <div className="relative">
                  <img
                    src={heroImage.url}
                    alt={heroImage.alt}
                    className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* INTRO — editorial single-column flow */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">{data.introKicker}</p>
              <h2 className="section-heading">{data.introHeading}</h2>
              <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
                {data.introParas.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES — inline pill style */}
        <section className="py-10 bg-background border-t border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-3xl mx-auto">
              {data.trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2.5 bg-card rounded-full border border-border/60 px-5 py-2.5">
                  <span className="text-primary">{badge.icon}</span>
                  <span className="text-xs font-sans font-semibold text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSURANCE TICKER */}
        <section className="py-10 section-warm overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="kicker">WE ACCEPT YOUR INSURANCE</p>
            <h2 className="section-heading">Use Your Benefits — We Handle the Paperwork</h2>
          </div>
          <div className="relative mt-8">
            <div className="flex animate-ticker whitespace-nowrap">
              {[...insuranceLogos, ...insuranceLogos].map((name, i) => (
                <span key={`${name}-${i}`} className="inline-flex shrink-0 items-center bg-card rounded-full border border-border/60 py-2.5 px-6 mx-3">
                  <span className="text-sm font-sans font-medium text-muted-foreground">{name}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SUB-SERVICES — soft cards with left accent */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.subServicesKicker}</p>
            <h2 className="section-heading">{data.subServicesHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">{data.subServicesBody}</p>
            <div className="grid sm:grid-cols-2 gap-8 mt-12 text-left max-w-4xl mx-auto">
              {data.subServices.map((svc) => (
                <div key={svc.title} className="card-soft border-l-4 border-l-primary/20">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5">{svc.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{svc.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS — large serif numbers */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.processKicker}</p>
            <h2 className="section-heading">{data.processHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">{data.processBody}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
              {data.processSteps.map((step) => (
                <div key={step.number} className="text-left">
                  <span className="step-number">{step.number}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-2">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 gradient-cta">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
              <div>
                <p className="kicker text-primary-foreground/60">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading text-primary-foreground">{data.faqHeading}</h2>
                <p className="section-body text-primary-foreground/60">
                  Have more questions? Call us at{" "}
                  <a href={`tel:${loc.phone}`} className="text-primary-foreground underline hover:no-underline">{loc.phoneFormatted}</a>.
                </p>
              </div>
              <FaqAccordion items={data.faqs} variant="dark" />
            </div>
          </div>
        </section>

        {/* MID-CONTENT BOOKING CTA */}
        <section className="py-12 section-warm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                  Ready to Get Started?
                </h3>
                <p className="text-sm font-body text-muted-foreground">
                  Book online in 60 seconds or call us — same-day appointments often available.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <button onClick={() => setBookingModalOpen(true)} className="btn-cta">
                  Book Online
                </button>
                <a href={`tel:${loc.phone}`} className="btn-secondary">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO CAROUSEL */}
        {SERVICE_VIDEOS[data.serviceSlug] && SERVICE_VIDEOS[data.serviceSlug].length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
            <div className="container mx-auto text-center">
              <p className="kicker">SEE IT IN ACTION</p>
              <h2 className="section-heading">Watch Real Procedures & Results</h2>
              <div className="mt-10">
                <VideoCarousel videos={SERVICE_VIDEOS[data.serviceSlug]} />
              </div>
            </div>
          </section>
        )}

        {/* REVIEWS */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.reviewsKicker}</p>
            <h2 className="section-heading">{data.reviewsHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">
              4.9★ average from {data.location === "cypress" ? "3,000+" : "2,000+"} verified Google reviews.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
              {data.testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
            </div>
            {showLiveReviews && (
              <div className="mt-12">
                <ReviewsWidget location={data.location} title={`${data.serviceName} Google Reviews — ${loc.name}`} />
              </div>
            )}
          </div>
        </section>

        {/* OFFICE PHOTO GRID */}
        <OfficePhotoGrid kicker="VISIT OUR OFFICE" heading="A Space Designed for Your Comfort" />

        {/* RELATED SERVICES */}
        {related.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
            <div className="container mx-auto text-center">
              <p className="kicker">YOU MIGHT ALSO NEED</p>
              <h2 className="section-heading">Related Treatments</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    to={r.href}
                    className="px-6 py-3.5 rounded-2xl bg-card border border-border/60 text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary hover:shadow-md transition-all"
                  >
                    {r.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* LOCATION INFO — warm card */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
          <div className="container mx-auto">
            <div className="max-w-lg mx-auto card-warm text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-5">{loc.name} Office</h3>
              <div className="space-y-3 text-sm font-sans text-muted-foreground mb-8">
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
                  <span>{loc.hours}</span>
                </div>
              </div>
              <button onClick={() => setBookingModalOpen(true)} className="btn-cta w-full text-center">
                Book Appointment Online
              </button>
              <p className="text-xs font-sans text-muted-foreground mt-3">Takes less than 60 seconds · No obligation</p>
            </div>
          </div>
        </section>

        {showFreeConsult && <FreeConsultationBanner />}
      </main>

      <Footer />
      <MobileStickyBar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};

export default ServicePageTemplate;
