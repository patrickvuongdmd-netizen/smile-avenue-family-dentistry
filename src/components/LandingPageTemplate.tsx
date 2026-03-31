import { Helmet } from "react-helmet-async";
import { Phone, Star, Shield, Clock, CreditCard, MessageCircle, Zap, Users, Sparkles, FlaskConical, Award, CheckCircle2, MapPin, Play } from "lucide-react";
import { ReactNode } from "react";
import useDocTitle from "@/hooks/use-doc-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DOCTOR_IMAGES, SERVICE_IMAGES, SERVICE_VIDEOS, OFFICE_IMAGES, VIDEO_TESTIMONIALS } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";
import VideoCarousel from "@/components/VideoCarousel";

/* ── Types ─────────────────────────────────────────────────── */

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface Testimonial {
  quote: string;
  name: string;
  service: string;
}

interface DoctorFeature {
  slug: string;
  name: string;
  credentials: string;
  specialty: string;
}

export interface LandingPageData {
  location: "cypress" | "katy";
  pageType: "new-patient" | "emergency" | "invisalign" | "dental-implants";
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCtaLabel: string;
  heroCtaType: "book" | "call";
  heroImage?: string;
  isEmergency?: boolean;
  /** Reassurance line under hero CTA */
  heroReassurance?: string;
  benefits: Benefit[];
  /** Quick trust bullets shown below benefits */
  trustBullets?: string[];
  testimonials?: Testimonial[];
  /** Doctors to feature on this page */
  doctors?: DoctorFeature[];
  /** YouTube video IDs to show */
  videos?: { youtubeId: string; title: string }[];
  extraSection?: ReactNode;
  faqs: FaqItem[];
  finalCtaHeadline: string;
  finalCtaBody: string;
}

/* ── Location data ─────────────────────────────────────────── */

const LOCATIONS = {
  cypress: {
    phone: "8326481756",
    phoneFormatted: "(832) 648-1756",
    booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress",
    address: "9212 Fry Rd #120, Cypress, TX 77433",
    name: "Cypress",
    hours: "Mon–Fri 8:30 AM – 5:00 PM",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.123!2d-95.6972!3d29.9691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d0a6a0000001%3A0x1!2s9212+Fry+Rd+%23120%2C+Cypress%2C+TX+77433!5e0!3m2!1sen!2sus!4v1",
    geo: { lat: 29.9691, lng: -95.6972 },
  },
  katy: {
    phone: "2818005008",
    phoneFormatted: "(281) 800-5008",
    booking: "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    name: "Katy",
    hours: "Mon–Fri 8:30 AM – 5:00 PM · Sat 8:00 AM – 2:00 PM",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.123!2d-95.7575!3d29.7357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e0a6a0000001%3A0x1!2s23541+Westheimer+Pkwy+Ste+%23170%2C+Katy%2C+TX+77494!5e0!3m2!1sen!2sus!4v1",
    geo: { lat: 29.7357, lng: -95.7575 },
  },
};

/* ── Conversion tracking helper ────────────────────────────── */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const fireConversion = (label: string) => {
  window.gtag?.("event", "conversion", {
    send_to: `AW-XXXXXXXXX/${label}`,
  });
};

/* ── UTM & gclid passthrough helper ────────────────────────── */

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
const GCLID_KEY = "sa_gclid";
const GCLID_TS_KEY = "sa_gclid_ts";
const GCLID_TTL = 90 * 24 * 60 * 60 * 1000;

const captureGclid = () => {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const gclid = params.get("gclid");
  if (gclid) {
    localStorage.setItem(GCLID_KEY, gclid);
    localStorage.setItem(GCLID_TS_KEY, String(Date.now()));
  }
};

const getStoredGclid = (): string | null => {
  try {
    const gclid = localStorage.getItem(GCLID_KEY);
    const ts = localStorage.getItem(GCLID_TS_KEY);
    if (!gclid || !ts) return null;
    if (Date.now() - Number(ts) > GCLID_TTL) {
      localStorage.removeItem(GCLID_KEY);
      localStorage.removeItem(GCLID_TS_KEY);
      return null;
    }
    return gclid;
  } catch {
    return null;
  }
};

const appendUtmParams = (baseUrl: string): string => {
  if (typeof window === "undefined") return baseUrl;
  const incoming = new URLSearchParams(window.location.search);
  const url = new URL(baseUrl);
  UTM_PARAMS.forEach((key) => {
    const val = incoming.get(key);
    if (val) url.searchParams.set(key, val);
  });
  if (!url.searchParams.has("gclid")) {
    const stored = getStoredGclid();
    if (stored) url.searchParams.set("gclid", stored);
  }
  return url.toString();
};

/* ── JSON-LD helpers ──────────────────────────────────────── */

const buildJsonLd = (data: LandingPageData, loc: typeof LOCATIONS.cypress) => {
  const schemas: object[] = [];

  schemas.push({
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `Smile Avenue Family Dentistry — ${loc.name}`,
    image: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/Smile-Avenue-Family-Dentistry.jpg.webp",
    url: `https://www.smileavenuefamilydentistry.com/${data.location === "cypress" ? "cypress-tx" : "katy-tx"}/`,
    telephone: loc.phoneFormatted,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address.split(",")[0],
      addressLocality: loc.name,
      addressRegion: "TX",
      postalCode: loc.address.match(/\d{5}/)?.[0] || "",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.geo.lat,
      longitude: loc.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
      bestRating: "5",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
      ...(data.location === "katy" ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" }] : []),
    ],
  });

  if (data.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
};

/* ── Insurance logos ──────────────────────────────────────── */

const INSURANCE_NAMES = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental",
  "MetLife", "United Healthcare", "Guardian", "Humana",
];

/* ── Component ────────────────────────────────────────────── */

const LandingPageTemplate = ({ data }: { data: LandingPageData }) => {
  const loc = LOCATIONS[data.location];
  useDocTitle(data.metaTitle);
  captureGclid();

  const bookingUrl = appendUtmParams(loc.booking);
  const ctaHref = data.heroCtaType === "call" ? `tel:${loc.phone}` : bookingUrl;
  const ctaTarget = data.heroCtaType === "book" ? "_blank" : undefined;
  const bookLabel = `lp_${data.pageType}_book_${data.location}`;
  const callLabel = `lp_${data.pageType}_call_${data.location}`;
  const conversionLabel = data.heroCtaType === "call" ? callLabel : bookLabel;
  const jsonLdSchemas = buildJsonLd(data, loc);

  // Resolve hero image: explicit prop → service image mapping → fallback
  const heroImageUrl = data.heroImage
    || SERVICE_IMAGES[data.pageType === "new-patient" ? "dental-cleaning" : data.pageType === "emergency" ? "emergency-dentist" : data.pageType]?.url
    || OFFICE_IMAGES.newPatientHero;

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImageUrl} />
        {jsonLdSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      {/* ── STICKY HEADER ─────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5 max-w-5xl mx-auto">
          <a href="/" aria-label="Smile Avenue Home">
            <img
              src="https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/11/logo-mark.webp"
              alt="Smile Avenue Family Dentistry"
              className="h-8 w-auto"
              width={120}
              height={32}
            />
          </a>
          <a
            href={`tel:${loc.phone}`}
            onClick={() => fireConversion(callLabel)}
            className="hidden sm:flex items-center gap-1.5 text-sm font-sans font-semibold"
            style={{ color: "#2B5DA7" }}
          >
            <Phone className="w-4 h-4" />
            {loc.phoneFormatted}
          </a>
          <a
            href={ctaHref}
            target={ctaTarget}
            rel={ctaTarget ? "noopener noreferrer" : undefined}
            onClick={() => fireConversion(conversionLabel)}
            className="text-sm font-sans font-bold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "#D4A853" }}
          >
            Book Now
          </a>
        </div>
      </header>

      <main className="pt-12 pb-16 sm:pb-0">
        {/* ── EMERGENCY URGENCY BANNER ───────────────────── */}
        {data.isEmergency && (
          <div className="bg-destructive text-white text-center py-3 text-sm font-sans font-bold">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
              </span>
              Same-Day Emergency Appointments — Call{" "}
              <a href={`tel:${loc.phone}`} onClick={() => fireConversion(callLabel)} className="underline font-extrabold">{loc.phoneFormatted}</a>
            </span>
          </div>
        )}

        {/* ── HERO SECTION — Full-width with background image ── */}
        <section
          className="relative min-h-[420px] md:min-h-[500px] flex items-center"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="relative z-10 w-full py-16 md:py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-2xl">
                {/* Kicker badge */}
                <span
                  className="inline-block text-xs font-sans font-bold tracking-[0.15em] uppercase mb-4 px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(212, 168, 83, 0.9)", color: "#fff" }}
                >
                  {data.location === "cypress" ? "Cypress, TX" : "Katy, TX"} · {data.isEmergency ? "Same-Day Care" : "Now Accepting Patients"}
                </span>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {data.heroHeadline}
                </h1>
                <p className="text-base md:text-lg text-white/85 mb-8 max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {data.heroSubheadline}
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={ctaHref}
                    target={ctaTarget}
                    rel={ctaTarget ? "noopener noreferrer" : undefined}
                    onClick={() => fireConversion(conversionLabel)}
                    className="inline-block text-white text-lg font-sans font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    style={{ backgroundColor: "#D4A853" }}
                  >
                    {data.heroCtaLabel}
                  </a>
                  {data.heroCtaType === "book" && (
                    <a
                      href={`tel:${loc.phone}`}
                      onClick={() => fireConversion(callLabel)}
                      className="inline-flex items-center gap-2 text-white font-sans font-semibold text-base px-6 py-4 rounded-full border-2 border-white/40 hover:border-white/70 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      {loc.phoneFormatted}
                    </a>
                  )}
                </div>

                {/* Reassurance */}
                {data.heroReassurance && (
                  <p className="mt-4 text-xs text-white/60 font-sans">
                    ✓ {data.heroReassurance.split(" · ").join(" · ✓ ")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF STRIP ─────────────────────────── */}
        <section className="py-4 border-b border-border" style={{ backgroundColor: "#2B5DA7" }}>
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 px-4 text-sm font-sans text-white">
            <div className="flex items-center gap-1.5">
              <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" loading="lazy" width={16} height={16} />
              <span className="font-bold">4.9</span>
              <div className="flex" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-white/80">5,000+ Google Reviews</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-white/80">
              <Shield className="w-4 h-4" /> Most Insurance Accepted
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-white/80">
              <Zap className="w-4 h-4" /> Same-Day Available
            </span>
          </div>
        </section>

        {/* ── BENEFITS SECTION ───────────────────────────── */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-center mb-2" style={{ color: "#D4A853" }}>
              WHY CHOOSE US
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Families Choose Smile Avenue {loc.name}
            </h2>
            <div className="w-12 h-0.5 mx-auto mb-10" style={{ backgroundColor: "#D4A853" }} />

            <div className="grid sm:grid-cols-3 gap-8">
              {data.benefits.map((b) => (
                <div key={b.title} className="text-center group">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-lg transition-transform group-hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #2B5DA7, #1a3f75)" }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-sans font-bold text-foreground mb-2 text-lg">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust bullets */}
            {data.trustBullets && data.trustBullets.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-sm font-sans">
                {data.trustBullets.map((bullet, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-foreground">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "#D4A853" }} />
                    {bullet}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── MEET YOUR DOCTORS ──────────────────────────── */}
        {data.doctors && data.doctors.length > 0 && (
          <section className="py-16 px-4" style={{ backgroundColor: "#f7f4ef" }}>
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-center mb-2" style={{ color: "#D4A853" }}>
                YOUR CARE TEAM
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Meet Your {loc.name} Doctors
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-10" style={{ backgroundColor: "#D4A853" }} />

              <div className={`grid gap-8 ${data.doctors.length <= 2 ? "sm:grid-cols-2 max-w-2xl mx-auto" : data.doctors.length === 3 ? "sm:grid-cols-3 max-w-4xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"}`}>
                {data.doctors.map((doc) => {
                  const img = DOCTOR_IMAGES[doc.slug];
                  return (
                    <div key={doc.slug} className="text-center group">
                      <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:shadow-xl transition-shadow">
                        {img && (
                          <img
                            src={img.url}
                            alt={img.alt}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                            width={160}
                            height={160}
                          />
                        )}
                      </div>
                      <h3 className="font-sans font-bold text-foreground text-lg">{doc.name}</h3>
                      <p className="text-sm font-sans font-medium" style={{ color: "#2B5DA7" }}>{doc.credentials}</p>
                      <p className="text-xs text-muted-foreground mt-1" style={{ fontFamily: "var(--font-body)" }}>{doc.specialty}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA under doctors */}
              <div className="text-center mt-10">
                <a
                  href={ctaHref}
                  target={ctaTarget}
                  rel={ctaTarget ? "noopener noreferrer" : undefined}
                  onClick={() => fireConversion(conversionLabel)}
                  className="inline-block text-white text-base font-sans font-bold px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: "#D4A853" }}
                >
                  {data.heroCtaLabel}
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ── TESTIMONIALS ────────────────────────────────── */}
        {data.testimonials && data.testimonials.length > 0 && (
          <section className="py-16 px-4 bg-card border-y border-border">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-center mb-2" style={{ color: "#D4A853" }}>
                PATIENT STORIES
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What Our Patients Say
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-10" style={{ backgroundColor: "#D4A853" }} />

              <div className="grid sm:grid-cols-2 gap-6">
                {data.testimonials.map((t, i) => (
                  <blockquote key={i} className="bg-background rounded-2xl border border-border p-6 shadow-sm relative">
                    {/* Decorative quote mark */}
                    <span className="absolute -top-3 left-6 text-4xl font-serif leading-none" style={{ color: "#D4A853" }}>"</span>
                    <div className="flex gap-0.5 mb-3 mt-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                      {t.quote}
                    </p>
                    <footer className="text-xs font-sans">
                      <span className="font-bold text-foreground">{t.name}</span>
                      <span className="text-muted-foreground"> · {t.service}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── VIDEO TESTIMONIALS ──────────────────────────── */}
        {data.videos && data.videos.length > 0 && (
          <section className="py-16 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-center mb-2" style={{ color: "#D4A853" }}>
                WATCH & LEARN
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                See the Smile Avenue Difference
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-10" style={{ backgroundColor: "#D4A853" }} />

              <VideoCarousel videos={data.videos} />
            </div>
          </section>
        )}

        {/* ── MID-PAGE CTA ────────────────────────────────── */}
        <section
          className="py-14 px-4 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2B5DA7, #1a3f75)" }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 bg-white -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-5 bg-white translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/80 text-sm mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Join thousands of happy patients at Smile Avenue {loc.name}. Booking takes just 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={ctaHref}
                target={ctaTarget}
                rel={ctaTarget ? "noopener noreferrer" : undefined}
                onClick={() => fireConversion(conversionLabel)}
                className="inline-block text-white text-base font-sans font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#D4A853" }}
              >
                {data.heroCtaLabel}
              </a>
              <a
                href={`tel:${loc.phone}`}
                onClick={() => fireConversion(callLabel)}
                className="inline-flex items-center gap-2 text-white/90 font-sans font-semibold text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Or Call {loc.phoneFormatted}
              </a>
            </div>
          </div>
        </section>

        {/* ── INSURANCE LOGOS ─────────────────────────────── */}
        <section className="py-12 px-4 bg-muted">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "#D4A853" }}>
              WE ACCEPT YOUR INSURANCE
            </p>
            <h2
              className="text-xl md:text-2xl font-bold mb-2 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Use Your Benefits — We Handle the Paperwork
            </h2>
            <div className="w-12 h-0.5 mx-auto mb-8" style={{ backgroundColor: "#D4A853" }} />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {INSURANCE_NAMES.map((name) => (
                <div key={name} className="bg-card rounded-xl border border-border py-4 px-3 flex items-center justify-center shadow-sm">
                  <span className="text-sm font-sans font-medium text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-sans">
              Don't see your plan? We also offer an affordable in-house membership plan & 0% CareCredit financing.
            </p>
          </div>
        </section>

        {/* ── OFFICE TOUR PHOTOS ──────────────────────────── */}
        <section className="py-12 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-center mb-2" style={{ color: "#D4A853" }}>
              OUR OFFICE
            </p>
            <h2
              className="text-xl md:text-2xl font-bold text-center mb-2 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Dental Office You'll Actually Enjoy Visiting
            </h2>
            <div className="w-12 h-0.5 mx-auto mb-8" style={{ backgroundColor: "#D4A853" }} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { url: OFFICE_IMAGES.waitingRoom, alt: "Modern waiting room at Smile Avenue" },
                { url: OFFICE_IMAGES.treatmentRoom, alt: "State-of-the-art treatment room" },
                { url: OFFICE_IMAGES.hallway, alt: "Welcoming hallway at Smile Avenue" },
                { url: OFFICE_IMAGES.coffeeStation, alt: "Complimentary refreshment station" },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-border aspect-[4/3]">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXTRA SECTION (before/after, etc.) ──────────── */}
        {data.extraSection}

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-muted">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-center mb-2" style={{ color: "#D4A853" }}>
              COMMON QUESTIONS
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-3 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 mx-auto mb-8" style={{ backgroundColor: "#D4A853" }} />

            <Accordion type="single" collapsible className="space-y-2">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
                  <AccordionTrigger className="text-left font-sans font-semibold text-foreground text-sm py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4" style={{ fontFamily: "var(--font-body)" }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── GOOGLE MAPS ─────────────────────────────────── */}
        <section className="py-12 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-center mb-2" style={{ color: "#D4A853" }}>
              VISIT US
            </p>
            <h2
              className="text-xl md:text-2xl font-bold text-center mb-2 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Find Us in {loc.name}
            </h2>
            <p className="text-center text-sm text-muted-foreground mb-1 font-sans flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4" /> {loc.address}
            </p>
            <p className="text-center text-xs text-muted-foreground mb-6 font-sans flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {loc.hours}
            </p>
            <div className="rounded-xl overflow-hidden border border-border aspect-video shadow-sm">
              <iframe
                src={loc.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Smile Avenue ${loc.name} location map`}
              />
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────── */}
        <section
          className="py-20 px-4 text-white text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a3f75, #2B5DA7)" }}
        >
          <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full opacity-5 bg-white -translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {data.finalCtaHeadline}
            </h2>
            <p className="opacity-85 mb-8 leading-relaxed text-lg" style={{ fontFamily: "var(--font-body)" }}>
              {data.finalCtaBody}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={ctaHref}
                target={ctaTarget}
                rel={ctaTarget ? "noopener noreferrer" : undefined}
                onClick={() => fireConversion(conversionLabel)}
                className="inline-block text-white text-lg font-sans font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#D4A853" }}
              >
                {data.heroCtaLabel}
              </a>
              <a
                href={`tel:${loc.phone}`}
                onClick={() => fireConversion(callLabel)}
                className="inline-flex items-center gap-2 text-white font-sans font-semibold text-lg underline hover:no-underline"
              >
                <Phone className="w-5 h-5" />
                {loc.phoneFormatted}
              </a>
            </div>
            <p className="mt-5 text-xs text-white/50 font-sans">
              ✓ {(data.heroReassurance || "Booking takes less than 60 seconds · We confirm within 1 hour").split(" · ").join(" · ✓ ")}
            </p>
          </div>
        </section>
      </main>

      {/* ── MINIMAL FOOTER ─────────────────────────────────── */}
      <footer className="bg-foreground text-white/70 py-8 px-4 text-center text-sm font-sans">
        <p className="font-semibold text-white mb-1">Smile Avenue Family Dentistry — {loc.name}</p>
        <p>{loc.address}</p>
        <p>
          <a href={`tel:${loc.phone}`} className="text-white hover:underline">{loc.phoneFormatted}</a>
        </p>
        <p className="mt-1">{loc.hours}</p>
        <p className="mt-4 text-white/40 text-xs">© {new Date().getFullYear()} Smile Avenue Family Dentistry. All rights reserved.</p>
      </footer>

      {/* ── MOBILE STICKY BOTTOM BAR ──────────────────────── */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-white border-t border-border shadow-lg">
        <div className="flex items-center justify-between px-3 py-2">
          <a
            href={`tel:${loc.phone}`}
            onClick={() => fireConversion(callLabel)}
            className="flex-1 text-center text-sm font-sans font-bold py-2.5 rounded-l-full border border-border"
            style={{ color: "#2B5DA7" }}
          >
            <Phone className="w-4 h-4 inline mr-1" />
            Call Now
          </a>
          <a
            href={ctaHref}
            target={ctaTarget}
            rel={ctaTarget ? "noopener noreferrer" : undefined}
            onClick={() => fireConversion(conversionLabel)}
            className="flex-1 text-center text-sm font-sans font-bold py-2.5 rounded-r-full text-white"
            style={{ backgroundColor: "#D4A853" }}
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
};

export { LOCATIONS };
export default LandingPageTemplate;
