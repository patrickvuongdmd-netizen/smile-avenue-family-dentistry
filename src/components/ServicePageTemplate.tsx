import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Check, Calendar, ArrowRight, Star } from "lucide-react";
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
import { TEAM_IMAGES } from "@/lib/team-images";
import { trackPhoneClick } from "@/lib/track-phone";
import VideoCarousel from "@/components/VideoCarousel";
import ServicesCrossLink from "@/components/ServicesCrossLink";
import TabbedInsurance from "@/components/TabbedInsurance";
import PaymentOptions from "@/components/PaymentOptions";
import OfficePhotoGrid from "@/components/OfficePhotoGrid";
import LazyBlogSection from "@/components/LazyBlogSection";

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
    postalCode: "77433",
    streetAddress: "9212 Fry Rd #120",
    mapsUrl: "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Cypress/",
    reviewCount: "3000",
    openingHours: [
      { "@type": "OpeningHoursSpecification" as const, dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
    ],
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
    postalCode: "77494",
    streetAddress: "23541 Westheimer Pkwy Ste #170",
    mapsUrl: "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Katy/",
    reviewCount: "2000",
    openingHours: [
      { "@type": "OpeningHoursSpecification" as const, dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
      { "@type": "OpeningHoursSpecification" as const, dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" },
    ],
  },
};

const SAME_AS = [
  "https://www.facebook.com/smileavenuedentistry",
  "https://www.instagram.com/smileavenuedentistry",
  "https://www.youtube.com/@SmileAvenueFamilyDentistry",
  "https://www.yelp.com/biz/smile-avenue-family-dentistry-cypress",
];

const LOCATION_DOCTORS: Record<string, { slug: string; name: string; credentials: string; specialty: string }[]> = {
  cypress: [
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Founder · General & Restorative" },
    { slug: "peter-kim", name: "Dr. Peter Kim", credentials: "DDS", specialty: "Implants & Oral Surgery" },
    { slug: "laith-yahya", name: "Dr. Laith Yahya", credentials: "DDS", specialty: "Oral Surgery & Implants" },
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "Restorative Dentistry" },
    { slug: "shayan-alkhiro", name: "Dr. Shayan Alkhiro", credentials: "DDS", specialty: "General Dentistry" },
  ],
  katy: [
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Founder · General & Restorative" },
    { slug: "sameer-bilal", name: "Dr. Sameer Bilal", credentials: "DDS", specialty: "Implants & Restorative" },
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "Restorative Dentistry" },
  ],
};

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

  const doctors = LOCATION_DOCTORS[data.location] || LOCATION_DOCTORS.cypress;
  const serviceVideos = SERVICE_VIDEOS[data.serviceSlug];
  const hasVideoCarousel = serviceVideos && serviceVideos.length > 0;
  const hasVideoId = !!data.videoId;
  const hasAnyVideo = hasVideoCarousel || hasVideoId;

  const heroImage = SERVICE_IMAGES[`${data.serviceSlug}-${data.location}`] || SERVICE_IMAGES[data.serviceSlug];

  // Flanking photos: team member (left/large oval) + doctor/hygienist (right/small oval)
  const slugHash = data.serviceSlug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const hygienistKeys = ["arpine-janbazian", "ivy-doan", "ngoc-huynh"];
  const teamEntries = Object.entries(TEAM_IMAGES);
  const staffPhotos = teamEntries
    .filter(([key]) => !hygienistKeys.includes(key))
    .map(([, t]) => t.url);
  const doctorPhotos = Object.values(DOCTOR_IMAGES).map(d => d.url);
  const hygienistPhotos = hygienistKeys.map(k => TEAM_IMAGES[k]?.url).filter(Boolean);
  const clinicalPhotos = [...doctorPhotos, ...hygienistPhotos];

  const heroLeftPhoto = staffPhotos[(slugHash + (data.location === "katy" ? 7 : 0)) % staffPhotos.length];
  const heroRightPhoto = clinicalPhotos[(slugHash + (data.location === "katy" ? 3 : 0)) % clinicalPhotos.length];

  const practiceAddress = {
    "@type": "PostalAddress" as const,
    streetAddress: loc.streetAddress,
    addressLocality: loc.name,
    addressRegion: "TX",
    postalCode: loc.postalCode,
    addressCountry: "US",
  };

  const practiceGeo = { "@type": "GeoCoordinates" as const, latitude: loc.geo.lat, longitude: loc.geo.lng };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DentalService" as const,
    name: `${data.serviceName} - Smile Avenue Family Dentistry - ${loc.name}`,
    description: data.metaDescription,
    url: canonicalUrl,
    image: heroImage?.url,
    serviceType: data.serviceName,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: loc.booking,
      servicePhone: loc.phoneFormatted,
      serviceSmsNumber: loc.phone,
    },
    areaServed: [
      { "@type": "City", name: `${loc.name}, TX` },
      { "@type": "State", name: "Texas" },
    ],
    provider: {
      "@type": "Dentist",
      name: `Smile Avenue Family Dentistry - ${loc.name}`,
      url: `https://www.smileavenuefamilydentistry.com${loc.path}/`,
      telephone: loc.phoneFormatted,
      address: practiceAddress,
      geo: practiceGeo,
      image: "https://www.smileavenuefamilydentistry.com/logo-full.webp",
      priceRange: "$$",
      paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Insurance", "CareCredit", "Sunbit"],
      currenciesAccepted: "USD",
      openingHoursSpecification: loc.openingHours,
      hasMap: loc.mapsUrl,
      sameAs: SAME_AS,
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: loc.reviewCount, bestRating: "5", worstRating: "1" },
      knowsAbout: [data.serviceName, "General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Invisalign", "Pediatric Dentistry"],
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: loc.booking,
      description: `${data.serviceName} at Smile Avenue ${loc.name}. Most PPO insurance accepted. 0% financing available.`,
    },
  };

  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: data.metaTitle,
    description: data.metaDescription,
    url: canonicalUrl,
    inLanguage: data.lang || "en",
    datePublished: "2024-01-15",
    dateModified: "2025-06-01",
    lastReviewed: "2025-06-01",
    about: { "@type": "MedicalCondition", name: data.serviceName },
    mainEntity: { "@type": "DentalService", name: data.serviceName, url: canonicalUrl },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".kicker", ".section-body"] },
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    author: {
      "@type": "Person",
      name: "Dr. Patrick Vuong",
      jobTitle: "Founder & Lead Dentist",
      url: "https://www.smileavenuefamilydentistry.com/doctors/patrick-vuong-dmd/",
    },
    publisher: {
      "@type": "Organization",
      name: "Smile Avenue Family Dentistry",
      url: "https://www.smileavenuefamilydentistry.com/",
      logo: { "@type": "ImageObject", url: "https://www.smileavenuefamilydentistry.com/logo-full.webp" },
      sameAs: SAME_AS,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...data.faqs, ...(data.locationFaqs || [])].map(f => ({
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

  // Standalone Dentist schema — full practice entity for AI entity graph
  const dentistJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `https://www.smileavenuefamilydentistry.com${loc.path}/#dentist`,
    name: `Smile Avenue Family Dentistry - ${loc.name}`,
    url: `https://www.smileavenuefamilydentistry.com${loc.path}/`,
    telephone: loc.phoneFormatted,
    email: "info@smileavenuedentistry.com",
    image: "https://www.smileavenuefamilydentistry.com/logo-full.webp",
    logo: "https://www.smileavenuefamilydentistry.com/logo-full.webp",
    description: `Top-rated family & cosmetic dental practice in ${loc.name}, TX. 5,000+ five-star reviews. Same-day appointments, in-house dental lab, and IV sedation available.`,
    address: practiceAddress,
    geo: practiceGeo,
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Insurance", "CareCredit", "Sunbit"],
    currenciesAccepted: "USD",
    openingHoursSpecification: loc.openingHours,
    hasMap: loc.mapsUrl,
    sameAs: SAME_AS,
    founder: {
      "@type": "Person",
      name: "Dr. Patrick Vuong",
      jobTitle: "Founder & Lead Dentist",
      url: "https://www.smileavenuefamilydentistry.com/doctors/patrick-vuong-dmd/",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: loc.reviewCount, bestRating: "5", worstRating: "1" },
    knowsAbout: [
      "Dental Implants", "All-on-4 Dental Implants", "Cosmetic Dentistry", "Porcelain Veneers",
      "Invisalign", "Emergency Dentistry", "Teeth Whitening", "Dental Crowns", "Dental Bridges",
      "Root Canal Therapy", "Oral Surgery", "Sedation Dentistry", "Pediatric Dentistry",
      "Preventive Dentistry", "Dentures", "Tooth Extraction", "Family Dental Care",
    ],
    medicalSpecialty: "Dentistry",
    isAcceptingNewPatients: true,
    availableService: {
      "@type": "MedicalProcedure",
      name: data.serviceName,
      url: canonicalUrl,
    },
  };

  // Review schema for testimonials (from verified Google Reviews)
  const reviewJsonLd = data.testimonials.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `https://www.smileavenuefamilydentistry.com${loc.path}/#dentist`,
    name: `Smile Avenue Family Dentistry - ${loc.name}`,
    review: data.testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      publisher: { "@type": "Organization", name: t.source },
    })),
  } : null;

  // ItemList schema for sub-services (potential carousel rich results)
  const subServicesItemListJsonLd = data.subServices && data.subServices.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.serviceName} Options at Smile Avenue - ${loc.name}`,
    numberOfItems: data.subServices.length,
    itemListElement: data.subServices.map((svc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: svc.title,
      description: svc.description,
    })),
  } : null;



  /* Dynamic background alternation — hero is always section-warm,
     subsequent content sections alternate bg-background / section-warm.
     Special sections (FAQ gradient, mid-CTA strip, final CTA) use fixed backgrounds.
     Only rendered optional sections advance the counter, keeping alternation perfect. */
  let sectionIndex = 0;
  const nextBg = () => {
    const bg = sectionIndex % 2 === 0 ? "bg-background" : "section-warm";
    sectionIndex++;
    return bg;
  };

  // Auto-generate aboutInCity if not provided
  const aboutCityContent = data.aboutInCity && data.aboutInCity.length > 0
    ? data.aboutInCity
    : [
      `Looking for ${data.serviceName.toLowerCase()} in ${loc.name}, Texas? Smile Avenue Family Dentistry provides expert ${data.serviceName.toLowerCase()} services at our ${loc.address}. Our experienced team combines advanced technology with a hospitality-first approach to deliver exceptional results.`,
      `Patients across the ${loc.name} area choose Smile Avenue for our in-house dental lab, digital scanners, and commitment to transparent pricing. Whether you need ${data.serviceName.toLowerCase()} or a comprehensive dental plan, we make the process comfortable and convenient.`,
      `We accept most PPO insurance plans, offer 0% financing through CareCredit and Sunbit, and welcome patients of all ages. Book your ${data.serviceName.toLowerCase()} consultation today — same-day appointments are often available.`,
    ];

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content={`${loc.name}, TX`} />
        <meta name="geo.position" content={`${loc.geo.lat};${loc.geo.lng}`} />
        <meta name="ICBM" content={`${loc.geo.lat}, ${loc.geo.lng}`} />
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
        <script type="application/ld+json">{JSON.stringify(medicalWebPageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(dentistJsonLd)}</script>
        {reviewJsonLd && <script type="application/ld+json">{JSON.stringify(reviewJsonLd)}</script>}
        {subServicesItemListJsonLd && <script type="application/ld+json">{JSON.stringify(subServicesItemListJsonLd)}</script>}
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
        {/* ─── 1. HERO ─── */}
        <section className="section-warm" aria-label={`${data.serviceName} in ${loc.name} Texas`}>
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

            {/* Mobile hero */}
            <div className="sm:hidden text-center">
              <h1 className="text-2xl font-bold text-foreground leading-[1.12] font-display mb-4">
                {data.heroHeading}
              </h1>
              <p className="text-[15px] leading-relaxed text-muted-foreground mb-4 max-w-[340px] mx-auto font-body">
                {data.heroBody}
              </p>
              {(data.heroValueProps && data.heroValueProps.length > 0) && (
                <ul className="space-y-2 mb-6 text-left max-w-[320px] mx-auto">
                  {data.heroValueProps.map((prop, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-sans text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{prop}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex gap-3 mb-3">
                <button onClick={() => setBookingModalOpen(true)} className="flex-1 py-4 rounded-full font-sans font-bold text-base tracking-wide bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] shadow-[0_2px_8px_hsl(var(--gold)/0.25)] hover:bg-[hsl(40,55%,48%)] transition-all" aria-label={`Book ${data.serviceName} appointment`}>
                  Book Now
                </button>
                <a href={`tel:${loc.phone}`} onClick={() => trackPhoneClick(loc.phone)} className="flex items-center justify-center gap-2 px-5 py-4 rounded-full font-sans font-bold text-sm border border-border bg-card text-foreground hover:bg-muted transition-all" aria-label={`Call ${loc.phoneFormatted}`}>
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
              <p className="text-[11px] font-sans text-muted-foreground">Booking takes less than 60 seconds</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />)}
                </div>
                <span className="text-xs font-sans font-semibold text-foreground">4.9</span>
                <span className="text-xs font-sans text-muted-foreground">from 5,000+ reviews</span>
              </div>
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

              {/* Two overlapping oval photos — Tend-style */}
              <div className="relative h-[420px] md:h-[480px] lg:h-[540px]">
                {/* Single vibrant geometric shape behind both ovals */}
                <div
                  className="absolute left-[-4%] top-[4%] w-[108%] h-[92%] rounded-[50%/46%] bg-neon-blue/20"
                  aria-hidden="true"
                />

                {/* Large oval — doctor/hygienist */}
                <img
                  src={heroRightPhoto}
                  alt="Smile Avenue dentist"
                  className="absolute left-0 top-0 w-[65%] h-full object-cover rounded-[50%/45%]"
                  loading="eager"
                  fetchPriority="high"
                  width={400}
                  height={540}
                />
                {/* Small oval — team member, positioned lower-right */}
                <img
                  src={heroLeftPhoto}
                  alt="Smile Avenue dental team member"
                  className="absolute right-0 bottom-0 w-[45%] h-[75%] object-cover rounded-[50%/45%]"
                  loading="eager"
                  width={280}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. INTRO + TRUST BADGES (merged) ─── */}
        <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`} aria-label={`About ${data.serviceName}`}>
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
              {/* Trust badges — inline pills */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-10 pt-10 border-t border-border/40">
                {data.trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 bg-card rounded-full border border-border/60 px-4 py-2">
                    <span className="text-primary">{badge.icon}</span>
                    <span className="text-xs font-sans font-semibold text-foreground">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. MEET YOUR DOCTORS (moved up for trust) ─── */}
        <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`}>
          <div className="container mx-auto text-center">
            <p className="kicker">YOUR {loc.name.toUpperCase()} DENTAL TEAM</p>
            <h2 className="section-heading">Meet Your Doctors</h2>
            <p className="section-body max-w-2xl mx-auto">
              Our {loc.name} team brings decades of combined experience in {data.serviceName.toLowerCase()} and comprehensive dental care.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {doctors.slice(0, 3).map((doc) => {
                const img = DOCTOR_IMAGES[doc.slug];
                const href = `/doctors/${doc.slug}-${doc.credentials.toLowerCase()}`;
                return (
                  <Link key={doc.slug} to={href} className="card-soft flex flex-col items-center text-center hover:shadow-md transition-shadow group">
                    {img && (
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20 mb-4"
                        loading="lazy"
                        decoding="async"
                        width={80}
                        height={80}
                      />
                    )}
                    <h3 className="font-display text-base font-bold text-foreground">{doc.name}, {doc.credentials}</h3>
                    <p className="text-xs font-sans text-primary font-medium mt-1">{doc.specialty}</p>
                    <span className="text-xs font-sans font-semibold text-primary mt-3 group-hover:underline">
                      View Profile →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 4. SUB-SERVICES (optional) ─── */}
        {data.subServices && data.subServices.length > 0 && (
          <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`}>
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
        )}

        {/* ─── 5. PROCESS STEPS (optional) ─── */}
        {data.processSteps && data.processSteps.length > 0 && (
          <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`}>
            <div className="container mx-auto text-center">
              <p className="kicker">{data.processKicker}</p>
              <h2 className="section-heading">{data.processHeading}</h2>
              <p className="section-body max-w-2xl mx-auto">{data.processBody}</p>
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                {data.processSteps.map((step) => (
                  <div key={step.number} className="text-left">
                    <span className="step-number">{step.number}</span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-2">{step.title}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="sm:hidden mt-10 text-left max-w-sm mx-auto">
                {data.processSteps.map((step, i) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-primary font-display w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 shrink-0">{step.number}</span>
                      {i < data.processSteps!.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 my-1" />}
                    </div>
                    <div className={`pb-8 ${i === data.processSteps!.length - 1 ? 'pb-0' : ''}`}>
                      <h3 className="font-display text-base font-bold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── 6. REVIEWS (moved up for social proof) ─── */}
        <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`} aria-label={`${data.serviceName} patient reviews in ${loc.name}`}>
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

        {/* ─── 7. VIDEO (consolidated: carousel or single) ─── */}
        {hasAnyVideo && (
          <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`}>
            <div className="container mx-auto text-center">
              <p className="kicker">SEE IT IN ACTION</p>
              <h2 className="section-heading">Watch: {data.serviceName} Explained</h2>
              <p className="section-body max-w-2xl mx-auto">See how {data.serviceName.toLowerCase()} works at Smile Avenue — from consultation to results.</p>
              <div className="mt-10">
                {hasVideoCarousel ? (
                  <VideoCarousel videos={serviceVideos} />
                ) : (
                  <div className="max-w-2xl mx-auto">
                    <LazyYouTube videoId={data.videoId!} title={`${data.serviceName} Explained — Smile Avenue Family Dentistry`} />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─── 8. WHY CHOOSE US — comparison table ─── */}
        <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`} aria-label={`Why choose Smile Avenue for ${data.serviceName}`}>
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

        {/* ─── 9. FAQ (split layout, gradient background) ─── */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 gradient-cta" aria-label={`Frequently asked questions about ${data.serviceName}`}>
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

        {/* ─── 10. MID-CONTENT BOOKING CTA ─── */}
        <section className="py-10 section-warm">
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

        {/* ─── 11. PRICING & INSURANCE (merged) ─── */}
        <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`} aria-label={`${data.serviceName} cost and insurance in ${loc.name}`}>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <p className="kicker">PRICING & INSURANCE</p>
              <h2 className="section-heading">What Does {data.serviceName} Cost in {loc.name}?</h2>
              <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed text-left mt-8">
                <p>
                  The cost of {data.serviceName.toLowerCase()} varies based on your unique treatment plan, the complexity of your case, and your insurance coverage. At Smile Avenue, we believe in full price transparency — you'll always know the cost before we begin.
                </p>
                <p>
                  Most PPO dental insurance plans cover a portion of {data.serviceName.toLowerCase()} treatment. Our team will verify your benefits and provide a detailed breakdown before your appointment.
                </p>
              </div>
            </div>
            {/* Payment option cards */}
            <div className="grid sm:grid-cols-3 gap-5 mt-10 max-w-3xl mx-auto">
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
            {/* Insurance logos */}
            <div className="mt-12 max-w-3xl mx-auto">
              <TabbedInsurance coverageNote={`Most PPO plans cover a portion of ${data.serviceName.toLowerCase()} treatment. We verify your benefits before your visit.`} />
            </div>
          </div>
        </section>

        {/* ─── 12. OFFICE PHOTO GRID ─── */}
        <OfficePhotoGrid kicker="VISIT OUR OFFICE" heading="A Space Designed for Your Comfort" bgClassName={nextBg()} />

        {/* ─── 13. ABOUT [SERVICE] IN [CITY] — local SEO block ─── */}
        <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`} aria-label={`About ${data.serviceName} in ${loc.name} Texas`}>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">ABOUT {data.serviceName.toUpperCase()} IN {loc.name.toUpperCase()}, TX</p>
              <h2 className="section-heading">{data.serviceName} in {loc.name}, Texas</h2>
              <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
                {aboutCityContent.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
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

        {/* ─── 14. LOCATION-SPECIFIC FAQ (optional) ─── */}
        {data.locationFaqs && data.locationFaqs.length > 0 && (
          <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`}>
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
                <div>
                  <p className="kicker">{loc.name.toUpperCase()}-SPECIFIC QUESTIONS</p>
                  <h2 className="section-heading">{data.serviceName} in {loc.name} FAQ</h2>
                  <p className="section-body">
                    Common questions about getting {data.serviceName.toLowerCase()} at our {loc.name} office.
                  </p>
                </div>
                <FaqAccordion items={data.locationFaqs} />
              </div>
            </div>
          </section>
        )}

        {/* ─── 15. BLOG ─── */}
        <section className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${nextBg()}`}>
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
            <LazyBlogSection
              category={data.blogCategory}
              serviceSlug={data.serviceSlug}
              slugCategoryMap={SERVICE_SLUG_TO_BLOG_CATEGORY}
            />
          </div>
        </section>

        {/* ─── 16. CROSS-SERVICE CAROUSEL ─── */}
        <ServicesCrossLink location={data.location} currentSlug={data.serviceSlug} bgClassName={nextBg()} />

        {/* ─── 17. FINAL CTA — location card ─── */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 section-warm">
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
