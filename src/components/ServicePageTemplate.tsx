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
import LazyYouTube from "@/components/LazyYouTube";
import { ReactNode } from "react";
import { SERVICE_IMAGES, SERVICE_VIDEOS, OFFICE_IMAGES, DOCTOR_IMAGES } from "@/lib/images";
import { trackPhoneClick } from "@/lib/track-phone";
import VideoCarousel from "@/components/VideoCarousel";
import OfficePhotoGrid from "@/components/OfficePhotoGrid";
import BlogCardCarousel from "@/components/BlogCardCarousel";
import BlogDesktopGrid from "@/components/BlogDesktopGrid";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BLOG_CATEGORY_IMAGES, BLOG_CATEGORY_COLORS, BLOG_FALLBACK_IMAGE } from "@/lib/blog-styles";

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
  subServicesKicker?: string;
  subServicesHeading?: string;
  subServicesBody?: string;
  subServices?: SubService[];
  processKicker?: string;
  processHeading?: string;
  processBody?: string;
  processSteps?: ProcessStep[];
  faqHeading: string;
  faqs: FaqItem[];
  locationFaqs?: FaqItem[];
  reviewsKicker: string;
  reviewsHeading: string;
  testimonials: Testimonial[];
  ctaHeading: string;
  ctaBody: string;
  relatedServices?: RelatedService[];
  blogCategory?: string;
  videoId?: string;
  canonicalPath?: string;
  lang?: string;
  hreflangAlternates?: { lang: string; href: string }[];
  aboutInCity?: string[];
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

const SERVICE_SLUG_TO_BLOG_CATEGORY: Record<string, string> = {
  "dental-implants": "Implants",
  "all-on-x-implants": "Implants",
  "cosmetic-dentistry": "Cosmetic",
  "teeth-whitening": "Cosmetic",
  "veneers": "Cosmetic",
  "emergency-dentist": "Emergency",
  "invisalign": "Invisalign",
  "pediatric-dentistry": "Pediatric",
  "sedation-dentistry": "Sedation",
  "dental-cleaning": "Preventive",
  "preventive-dentistry": "Preventive",
  "family-dental-care": "Preventive",
  "root-canal": "Emergency",
  "tooth-extraction": "Emergency",
  "oral-surgery": "Implants",
  "dental-crowns": "Cosmetic",
  "dental-bridges": "Implants",
  "dentures": "Implants",
};

const ServicePageTemplate = ({ data }: { data: ServicePageData }) => {
  const loc = LOCATIONS[data.location];
  const canonicalUrl = data.canonicalPath
    ? `https://www.smileavenuefamilydentistry.com${data.canonicalPath}/`
    : `https://www.smileavenuefamilydentistry.com${loc.path}/${data.serviceSlug}/`;
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
        {data.hreflangAlternates ? (
          data.hreflangAlternates.map(alt => (
            <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.href} />
          ))
        ) : (
          <>
            <link rel="alternate" hrefLang="en" href={canonicalUrl} />
            <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
          </>
        )}
        {data.lang && <html lang={data.lang} />}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableJsonLd)}</script>
        {data.videoId && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: `${data.serviceName} Explained — Smile Avenue Family Dentistry`,
            description: `Watch how ${data.serviceName.toLowerCase()} works at Smile Avenue Family Dentistry in ${loc.name}, TX. Learn about the process, benefits, and what to expect.`,
            thumbnailUrl: `https://img.youtube.com/vi/${data.videoId}/maxresdefault.jpg`,
            uploadDate: "2024-01-15",
            contentUrl: `https://www.youtube.com/watch?v=${data.videoId}`,
            embedUrl: `https://www.youtube.com/embed/${data.videoId}`,
            publisher: { "@type": "Organization", name: "Smile Avenue Family Dentistry", logo: { "@type": "ImageObject", url: "https://www.smileavenuefamilydentistry.com/logo-full.webp" } },
          })}</script>
        )}
      </Helmet>
      <TrustTicker />
      <Navbar phone={loc.phone} phoneFormatted={loc.phoneFormatted} bookingUrl={loc.booking} />
      <TrustStrip />

      {isEmergency && (
        <div className="bg-destructive text-destructive-foreground py-3 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-sans font-bold">
               🦷 Dental Emergency? Call Now — Same-Day Appointments Available:{" "}
               <a href={`tel:${loc.phone}`} onClick={() => trackPhoneClick(loc.phone)} className="underline hover:no-underline">{loc.phoneFormatted}</a>
            </p>
          </div>
        </div>
      )}

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO — simplified on mobile */}
        <section className="section-warm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
            {/* Breadcrumb — hidden on mobile */}
            <nav aria-label="Breadcrumb" className="hidden sm:block mb-8 text-xs font-sans text-muted-foreground text-center md:text-left">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to={`/services/${data.serviceSlug}`} className="hover:text-primary transition-colors">{data.serviceName}</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">in {loc.name}, TX</span>
            </nav>

            {/* Mobile hero — streamlined */}
            <div className="sm:hidden text-center">
              <h1 className="text-2xl font-bold text-foreground leading-[1.12] font-display mb-4">
                {data.heroHeading}
              </h1>
              <p className="text-[15px] leading-relaxed text-muted-foreground mb-6 max-w-[340px] mx-auto font-body">
                {data.heroBody}
              </p>
              <button onClick={() => setBookingModalOpen(true)} className="w-full py-4 rounded-full font-sans font-bold text-base tracking-wide bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] shadow-[0_2px_8px_hsl(var(--gold)/0.25)] hover:bg-[hsl(40,55%,48%)] transition-all" aria-label={`Book ${data.serviceName} appointment`}>
                Book Now
              </button>
              <p className="text-[11px] font-sans text-muted-foreground mt-2">Booking takes less than 60 seconds</p>
              {heroImage && (
                <img
                  src={heroImage.url}
                  alt={heroImage.alt}
                  className="w-full aspect-[16/7] object-cover rounded-2xl shadow-md mt-6"
                  loading="eager"
                  fetchPriority="high"
                  width={640}
                  height={280}
                />
              )}
            </div>

            {/* Desktop hero */}
            <div className="hidden sm:grid md:grid-cols-2 gap-12 md:gap-20 items-center">
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
                  <a href={`tel:${loc.phone}`} onClick={() => trackPhoneClick(loc.phone)} className="btn-secondary flex-1 whitespace-nowrap flex items-center justify-center gap-2" aria-label={`Call ${loc.phoneFormatted}`}>
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>
                <p className="text-[11px] font-sans text-muted-foreground">Booking takes less than 60 seconds</p>

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
                    width={640}
                    height={480}
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
              <Link
                to={`/services/${data.serviceSlug}`}
                className="inline-flex items-center gap-1.5 mt-8 text-sm font-sans font-semibold text-primary hover:underline"
              >
                Learn More About {data.serviceName} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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

        {/* PROCESS STEPS — timeline on mobile, grid on desktop */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
          <div className="container mx-auto text-center">
            <p className="kicker">{data.processKicker}</p>
            <h2 className="section-heading">{data.processHeading}</h2>
            <p className="section-body max-w-2xl mx-auto">{data.processBody}</p>
            {/* Desktop grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
              {data.processSteps.map((step) => (
                <div key={step.number} className="text-left">
                  <span className="step-number">{step.number}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-2">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            {/* Mobile timeline */}
            <div className="sm:hidden mt-10 text-left max-w-sm mx-auto">
              {data.processSteps.map((step, i) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary font-display w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 shrink-0">{step.number}</span>
                    {i < data.processSteps.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 my-1" />}
                  </div>
                  <div className={`pb-8 ${i === data.processSteps.length - 1 ? 'pb-0' : ''}`}>
                    <h3 className="font-display text-base font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEET YOUR DOCTOR */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-background">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className="card-soft flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6">
                {DOCTOR_IMAGES["patrick-vuong"] && (
                  <img
                    src={DOCTOR_IMAGES["patrick-vuong"].url}
                    alt={DOCTOR_IMAGES["patrick-vuong"].alt}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0 ring-2 ring-primary/20"
                    loading="lazy"
                    decoding="async"
                    width={96}
                    height={96}
                  />
                )}
                <div>
                  <p className="text-[10px] font-sans font-semibold tracking-[0.15em] uppercase text-primary mb-1">MEET YOUR DOCTOR</p>
                  <h3 className="font-display text-lg font-bold text-foreground">Dr. Patrick Vuong, DMD</h3>
                  <p className="text-sm font-sans text-primary font-medium mb-2">Founder & Lead Dentist</p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-3">
                    Over 1,000 implants placed. Advanced training in digital dentistry. Dr. Vuong leads every complex case with precision and compassion.
                  </p>
                  <Link to="/doctors/patrick-vuong-dmd" className="text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
                    Meet Dr. Vuong →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COST TRANSPARENCY */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">PRICING & AFFORDABILITY</p>
              <h2 className="section-heading">What Does {data.serviceName} Cost?</h2>
              <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  The cost of {data.serviceName.toLowerCase()} varies based on your unique treatment plan, the complexity of your case, and your insurance coverage. At Smile Avenue, we believe in full price transparency — you'll always know the cost before we begin.
                </p>
                <p>
                  Most PPO dental insurance plans cover a portion of {data.serviceName.toLowerCase()} treatment. Our team will verify your benefits and provide a detailed breakdown before your appointment.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-5 mt-10">
                <div className="card-soft text-center">
                  <h3 className="font-display text-base font-bold text-foreground mb-2">Insurance Accepted</h3>
                  <p className="text-sm font-body text-muted-foreground">We accept most PPO plans and verify your benefits for you.</p>
                </div>
                <div className="card-soft text-center">
                  <h3 className="font-display text-base font-bold text-foreground mb-2">0% Financing</h3>
                  <p className="text-sm font-body text-muted-foreground">CareCredit & Sunbit — apply in minutes, pay monthly.</p>
                </div>
                <div className="card-soft text-center">
                  <h3 className="font-display text-base font-bold text-foreground mb-2">Membership Plan</h3>
                  <p className="text-sm font-body text-muted-foreground">No insurance? Get 20% off all treatments with our plan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WATCH: SERVICE EXPLAINED — single video embed */}
        {data.videoId && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
            <div className="container mx-auto text-center">
              <p className="kicker">WATCH & LEARN</p>
              <h2 className="section-heading">Watch: {data.serviceName} Explained</h2>
              <p className="section-body max-w-2xl mx-auto">See how {data.serviceName.toLowerCase()} works at Smile Avenue — from consultation to results.</p>
              <div className="max-w-2xl mx-auto mt-10">
                <LazyYouTube videoId={data.videoId} title={`${data.serviceName} Explained — Smile Avenue Family Dentistry`} />
              </div>
            </div>
          </section>
        )}

        {/* WHY PATIENTS CHOOSE US — comparison table */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">THE SMILE AVENUE DIFFERENCE</p>
            <h2 className="section-heading">Why Patients Choose Us for {data.serviceName}</h2>
            <p className="section-body max-w-2xl mx-auto">See how Smile Avenue compares to a typical dental office.</p>

            {/* Desktop table */}
            <div className="hidden sm:block max-w-3xl mx-auto mt-10 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-4 px-4 text-sm font-sans font-bold text-foreground">Feature</th>
                    <th className="py-4 px-4 text-sm font-sans font-bold text-primary text-center">Smile Avenue</th>
                    <th className="py-4 px-4 text-sm font-sans font-bold text-muted-foreground text-center">Typical Office</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-sans">
                  {[
                    { feature: "In-House Dental Lab", us: "✓", them: "✗ Outsourced" },
                    { feature: "Same-Day Appointments", us: "✓", them: "1–2 week wait" },
                    { feature: "Sedation Options", us: "✓ Nitrous, Oral & IV", them: "Limited" },
                    { feature: "5,000+ Verified Reviews", us: "4.9★ average", them: "Varies" },
                    { feature: "Netflix & Comfort Amenities", us: "✓ Every room", them: "✗" },
                    { feature: "0% Financing Available", us: "✓ CareCredit & Sunbit", them: "Varies" },
                    { feature: "Digital Scanners (No Molds)", us: "✓", them: "✗ Goopy impressions" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                      <td className="py-3.5 px-4 font-medium text-foreground">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center text-primary font-semibold">{row.us}</td>
                      <td className="py-3.5 px-4 text-center text-muted-foreground">{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile checklist */}
            <div className="sm:hidden mt-8 max-w-sm mx-auto text-left space-y-3">
              {[
                { feature: "In-House Dental Lab", note: "Most offices outsource" },
                { feature: "Same-Day Appointments", note: "Skip the 1–2 week wait" },
                { feature: "Sedation Options", note: "Nitrous, Oral & IV available" },
                { feature: "5,000+ Verified Reviews", note: "4.9★ average rating" },
                { feature: "Netflix & Comfort Amenities", note: "In every treatment room" },
                { feature: "0% Financing Available", note: "CareCredit & Sunbit accepted" },
                { feature: "Digital Scanners", note: "No goopy impressions" },
              ].map((row, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${i % 2 === 0 ? 'bg-muted/30' : ''}`}>
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-sans font-semibold text-foreground">{row.feature}</p>
                    <p className="text-xs font-sans text-muted-foreground">{row.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 gradient-cta">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
              <div>
                <p className="kicker text-primary-foreground/60">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading text-primary-foreground">{data.faqHeading}</h2>
                <p className="section-body text-primary-foreground/60">
                  Have more questions? Call us at{" "}
                  <a href={`tel:${loc.phone}`} onClick={() => trackPhoneClick(loc.phone)} className="text-primary-foreground underline hover:no-underline">{loc.phoneFormatted}</a>.
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
                <a href={`tel:${loc.phone}`} onClick={() => trackPhoneClick(loc.phone)} className="btn-secondary">
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

        {/* FROM THE BLOG */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="kicker">FROM THE BLOG</p>
                <h2 className="section-heading">Dental Tips & Insights</h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
                View All Posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              {(() => {
                const cat = data.blogCategory || SERVICE_SLUG_TO_BLOG_CATEGORY[data.serviceSlug];
                const categoryPosts = cat
                  ? BLOG_POSTS.filter(p => p.category === cat).slice(0, 3)
                  : [];
                const blogPosts = categoryPosts.length >= 2 ? categoryPosts : BLOG_POSTS.slice(0, 3);
                return (
                  <>
                    <BlogCardCarousel
                      posts={blogPosts}
                      categoryColors={BLOG_CATEGORY_COLORS}
                      categoryImages={BLOG_CATEGORY_IMAGES}
                      fallbackImage={BLOG_FALLBACK_IMAGE}
                    />
                    <BlogDesktopGrid posts={blogPosts} />
                  </>
                );
              })()}
            </div>
          </div>
        </section>


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
                  <a href={`tel:${loc.phone}`} onClick={() => trackPhoneClick(loc.phone)} className="hover:text-primary transition-colors">{loc.phoneFormatted}</a>
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
