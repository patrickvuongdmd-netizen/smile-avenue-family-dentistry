import { Helmet } from "react-helmet-async";
import { Phone, Star, Shield, Clock, CreditCard, Zap, CheckCircle2, MapPin, X as XIcon } from "lucide-react";
import { ReactNode } from "react";
import useDocTitle from "@/hooks/use-doc-title";
import { DOCTOR_IMAGES, SERVICE_IMAGES, OFFICE_IMAGES } from "@/lib/images";
import VideoCarousel from "@/components/VideoCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import InsuranceLogoBar from "@/components/InsuranceLogoBar";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import TrustTicker from "@/components/TrustTicker";

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
  location?: string;
}

interface DoctorFeature {
  slug: string;
  name: string;
  credentials: string;
  specialty: string;
}

interface PainPoint {
  icon: ReactNode;
  problem: string;
  solution: string;
}

interface Objection {
  objection: string;
  answer: string;
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
  heroReassurance?: string;
  painPoints?: PainPoint[];
  benefits: Benefit[];
  trustBullets?: string[];
  doctors?: DoctorFeature[];
  videos?: { youtubeId: string; title: string }[];
  testimonials?: Testimonial[];
  objections?: Objection[];
  extraSection?: ReactNode;
  faqs: FaqItem[];
  finalCtaHeadline: string;
  finalCtaBody: string;
  darkHeader?: boolean;
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
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    geo: { lat: 29.9691, lng: -95.6972 },
  },
  katy: {
    phone: "2818005008",
    phoneFormatted: "(281) 800-5008",
    booking: "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    name: "Katy",
    hours: "Mon–Fri 8:30 AM – 5:00 PM · Sat 8:00 AM – 2:00 PM",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
    geo: { lat: 29.7357, lng: -95.7575 },
  },
};

/* ── Conversion tracking ───────────────────────────────────── */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const fireConversion = (label: string) => {
  window.gtag?.("event", "conversion", { send_to: `AW-XXXXXXXXX/${label}` });
};

/* ── UTM & gclid passthrough ───────────────────────────────── */

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

/* ── JSON-LD ──────────────────────────────────────────────── */

const buildJsonLd = (data: LandingPageData, loc: typeof LOCATIONS.cypress) => {
  const schemas: object[] = [];
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `Smile Avenue Family Dentistry — ${loc.name}`,
    image: "https://www.smileavenuefamilydentistry.com/og-image.webp",
    url: `https://www.smileavenuefamilydentistry.com/${data.location === "cypress" ? "cypress-tx" : "katy-tx"}/`,
    telephone: loc.phoneFormatted,
    address: { "@type": "PostalAddress", streetAddress: loc.address.split(",")[0], addressLocality: loc.name, addressRegion: "TX", postalCode: loc.address.match(/\d{5}/)?.[0] || "", addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: loc.geo.lat, longitude: loc.geo.lng },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000", bestRating: "5" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
      ...(data.location === "katy" ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" }] : []),
    ],
  });
  if (data.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    });
  }
  return schemas;
};

/* ═══════════════════════════════════════════════════════════
   COMPONENT — STRICT SALES FUNNEL
   Hook → Pain → Solution → Proof → Objections → CTA
   ═══════════════════════════════════════════════════════════ */

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

      {/* ═══ TRUST TICKER ═══ */}
      <div className="fixed top-0 inset-x-0 z-[51]">
        <TrustTicker />
      </div>

      {/* ═══ STICKY HEADER ═══ */}
      <header className={`fixed top-10 inset-x-0 z-50 backdrop-blur-sm shadow-sm border-b ${data.darkHeader ? "bg-foreground/95 border-foreground/20 text-background" : "bg-background/95 border-border"}`}>
        <div className="flex items-center justify-between px-4 py-2.5 max-w-5xl mx-auto">
          <a href="/" aria-label="Smile Avenue Home">
            <img src={data.darkHeader ? "/favicon-192.png" : "/logo-mark.webp"} alt="Smile Avenue Family Dentistry" className="h-8 w-auto sm:hidden" width={32} height={32} />
            <img src={data.darkHeader ? "/logo-white.webp" : "/logo-full.webp"} alt="Smile Avenue Family Dentistry" className="hidden sm:block h-12 w-auto" width={160} height={48} />
          </a>
          <a href={`tel:${loc.phone}`} onClick={() => fireConversion(callLabel)} className="hidden sm:flex items-center gap-1.5 text-sm font-sans font-semibold text-primary-dark">
            <Phone className="w-4 h-4" />{loc.phoneFormatted}
          </a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => fireConversion(bookLabel)}
            className="btn-cta rounded-full !px-5 !py-2.5 text-sm"
          >
            Book Now
          </a>
        </div>
      </header>

      <main className="pt-[5.5rem] pb-16 lg:pb-0 ">
        {/* ═══ EMERGENCY BANNER ═══ */}
        {data.isEmergency && (
          <div className="bg-destructive text-destructive-foreground text-center py-3 text-sm font-sans font-bold">
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

        {/* ╔═══════════════════════════════════════════════════╗
           ║  SECTION 1: HOOK — Above the fold                ║
           ╚═══════════════════════════════════════════════════╝ */}
        <section
          className="relative min-h-[400px] md:min-h-[500px] flex items-end"
          style={{ backgroundImage: `url(${heroImageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

          <div className="relative z-10 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
              <div className="max-w-2xl">
                {/* Urgency badge */}
                <span className={`inline-block text-xs font-sans font-bold tracking-[0.15em] uppercase mb-4 px-3 py-1.5 rounded-full ${data.isEmergency ? "bg-destructive pulse-glow" : "bg-primary"} text-white`}>
                  {data.isEmergency ? "🔴 URGENT — Same-Day Care" : `📍 ${loc.name}, TX — Now Accepting Patients`}
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-white font-display">
                  {data.heroHeadline}
                </h1>
                <p className="text-base md:text-lg text-white/85 mb-6 max-w-xl leading-relaxed font-body">
                  {data.heroSubheadline}
                </p>

                {/* CTA cluster */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href={ctaHref}
                    target={ctaTarget}
                    rel={ctaTarget ? "noopener noreferrer" : undefined}
                    onClick={() => fireConversion(conversionLabel)}
                    className="btn-cta rounded-full !px-8 !py-4 text-base"
                  >
                    {data.heroCtaLabel}
                  </a>
                  {data.heroCtaType === "book" && (
                    <a href={`tel:${loc.phone}`} onClick={() => fireConversion(callLabel)} className="btn-cta-outline rounded-full !px-6 !py-4">
                      <Phone className="w-5 h-5 mr-2" />{loc.phoneFormatted}
                    </a>
                  )}
                </div>

                {/* Reassurance strip */}
                {data.heroReassurance && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70 font-sans">
                    {data.heroReassurance.split(" · ").map((item, i) => (
                      <span key={i} className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" />{item}</span>
                    ))}
                  </div>
                )}

                {/* Star rating */}
                <div className="flex items-center gap-2 mt-4 text-sm text-white/80">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                  <span className="font-bold text-white">4.9</span>
                  <span>from 5,000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="py-3.5 gradient-cta">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-sm font-sans text-white">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <span className="font-bold">4.9★</span> 5,000+ Reviews
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:flex items-center gap-1.5"><Shield className="w-4 h-4" /> Most Insurance Accepted</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> Same-Day Available</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:flex items-center gap-1.5"><CreditCard className="w-4 h-4" /> 0% Financing</span>
          </div>
        </section>

        {/* ╔═══════════════════════════════════════════════════╗
           ║  SECTION 2: PAIN POINTS — Agitate the problem    ║
           ╚═══════════════════════════════════════════════════╝ */}
        {data.painPoints && data.painPoints.length > 0 && (
          <ScrollReveal>
            <section className="section-padding bg-background">
              <div className="max-w-4xl mx-auto">
                <p className="kicker text-center">SOUND FAMILIAR?</p>
                <h2 className="section-heading text-center">
                  We Get It — Finding the Right Dentist Is Hard
                </h2>
                <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-10 rounded-full" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.painPoints.map((p, i) => (
                    <div key={i} className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-destructive/10 text-destructive">
                        {p.icon}
                      </div>
                      <p className="text-sm font-sans font-semibold text-destructive/80 mb-2 line-through decoration-destructive/30">{p.problem}</p>
                      <p className="text-sm font-sans font-semibold text-foreground flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        {p.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ═══ CTA #2 — After pain points ═══ */}
        <section className="py-8 px-4 text-center section-alt">
          <div className="max-w-xl mx-auto">
            <p className="text-sm font-sans font-semibold text-foreground mb-4">Stop settling for less. You deserve better.</p>
            <a
              href={ctaHref}
              target={ctaTarget}
              rel={ctaTarget ? "noopener noreferrer" : undefined}
              onClick={() => fireConversion(conversionLabel)}
              className="btn-cta rounded-full !px-8 !py-3.5"
            >
              {data.heroCtaLabel}
            </a>
          </div>
        </section>

        {/* ╔═══════════════════════════════════════════════════╗
           ║  SECTION 3: SOLUTION — Benefits grid             ║
           ╚═══════════════════════════════════════════════════╝ */}
        <ScrollReveal>
          <section className="section-padding bg-background">
            <div className="max-w-5xl mx-auto">
              <p className="kicker text-center">THE SMILE AVENUE DIFFERENCE</p>
              <h2 className="section-heading text-center">
                Here's Why {loc.name} Families Choose Us
              </h2>
              <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-10 rounded-full" />
              <div className="grid sm:grid-cols-3 gap-8">
                {data.benefits.map((b) => (
                  <div key={b.title} className="text-center group">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary-foreground shadow-lg transition-transform group-hover:scale-105 gradient-cta">
                      {b.icon}
                    </div>
                    <h3 className="font-sans font-bold text-foreground mb-2 text-lg">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">{b.description}</p>
                  </div>
                ))}
              </div>
              {data.trustBullets && data.trustBullets.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-sm font-sans">
                  {data.trustBullets.map((bullet, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-foreground">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-primary" />{bullet}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>
        </ScrollReveal>

        {/* ╔═══════════════════════════════════════════════════╗
           ║  SECTION 4: PROOF — Doctors + Testimonials + Video║
           ╚═══════════════════════════════════════════════════╝ */}

        {/* 4a. Meet Your Doctors */}
        {data.doctors && data.doctors.length > 0 && (
          <ScrollReveal>
            <section className="section-padding section-alt">
              <div className="max-w-5xl mx-auto">
                <p className="kicker text-center">YOUR CARE TEAM</p>
                <h2 className="section-heading text-center">
                  Meet Your {loc.name} Doctors
                </h2>
                <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-10 rounded-full" />
                <div className={`grid gap-8 ${data.doctors.length <= 2 ? "sm:grid-cols-2 max-w-2xl mx-auto" : data.doctors.length === 3 ? "sm:grid-cols-3 max-w-4xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"}`}>
                  {data.doctors.map((doc) => {
                    const img = DOCTOR_IMAGES[doc.slug];
                    return (
                      <div key={doc.slug} className="text-center group">
                        <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-card group-hover:shadow-xl transition-shadow duration-300 ring-2 ring-transparent group-hover:ring-primary/30">
                          {img && <img src={img.url} alt={img.alt} className="w-full h-full object-cover object-top" loading="lazy" width={144} height={144} />}
                        </div>
                        <h3 className="font-sans font-bold text-foreground text-base">{doc.name}</h3>
                        <p className="text-sm font-sans font-medium text-primary-dark">{doc.credentials}</p>
                        <p className="text-xs text-muted-foreground mt-1 font-body">{doc.specialty}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* 4b. Written Testimonials */}
        {data.testimonials && data.testimonials.length > 0 && (
          <ScrollReveal>
            <section className="section-padding bg-card border-y border-border">
              <div className="max-w-4xl mx-auto">
                <p className="kicker text-center">REAL PATIENT STORIES</p>
                <h2 className="section-heading text-center">
                  Don't Take Our Word for It
                </h2>
                <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-10 rounded-full" />
                <div className="grid sm:grid-cols-2 gap-6">
                  {data.testimonials.map((t, i) => (
                    <blockquote key={i} className="bg-background rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                      <span className="absolute -top-3 left-6 text-4xl font-serif leading-none text-primary">"</span>
                      <div className="flex gap-0.5 mb-3 mt-1">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                      <p className="text-sm text-foreground leading-relaxed mb-4 font-body">{t.quote}</p>
                      <footer className="text-xs font-sans">
                        <span className="font-bold text-foreground">{t.name}</span>
                        <span className="text-muted-foreground"> · {t.service}</span>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}


        {/* 4c. Video Testimonials */}
        {data.videos && data.videos.length > 0 && (
          <ScrollReveal>
            <section className="section-padding bg-background">
              <div className="max-w-5xl mx-auto">
                <p className="kicker text-center">SEE FOR YOURSELF</p>
                <h2 className="section-heading text-center">
                  Watch Real Patients Share Their Experience
                </h2>
                <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-10 rounded-full" />
                <VideoCarousel videos={data.videos} />
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ╔═══════════════════════════════════════════════════╗
           ║  SECTION 5: OBJECTION HANDLING                    ║
           ╚═══════════════════════════════════════════════════╝ */}
        {data.objections && data.objections.length > 0 && (
          <ScrollReveal>
            <section className="section-padding section-alt">
              <div className="max-w-3xl mx-auto">
                <p className="kicker text-center">STILL ON THE FENCE?</p>
                <h2 className="section-heading text-center">
                  We Get These Questions All the Time
                </h2>
                <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-10 rounded-full" />
                <div className="space-y-4">
                  {data.objections.map((obj, i) => (
                    <div key={i} className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="text-sm font-sans font-bold text-foreground mb-2 flex items-start gap-2">
                        <XIcon className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        "{obj.objection}"
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-6 font-body">
                        <span className="font-semibold text-foreground">→ </span>{obj.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* ═══ Insurance Section — Shared Component ═══ */}
        <InsuranceLogoBar />

        {/* ═══ Office Tour Photos ═══ */}
        <ScrollReveal>
          <section className="section-padding bg-background">
            <div className="max-w-5xl mx-auto">
              <p className="kicker text-center">STEP INSIDE</p>
              <h2 className="section-heading text-center">
                Not Your Typical Dental Office
              </h2>
              <div className="w-12 h-0.5 bg-[#D4A853] mx-auto mb-10 rounded-full" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { url: OFFICE_IMAGES.waitingRoom, alt: "Modern waiting room at Smile Avenue" },
                  { url: OFFICE_IMAGES.treatmentRoom, alt: "State-of-the-art treatment room with Netflix" },
                  { url: OFFICE_IMAGES.hallway, alt: "Welcoming hallway at Smile Avenue" },
                  { url: OFFICE_IMAGES.coffeeStation, alt: "Complimentary refreshment station" },
                ].map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-border aspect-[4/3] group">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={300} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Extra section (before/after, etc.) */}
        {data.extraSection}

        {/* ╔═══════════════════════════════════════════════════╗
           ║  SECTION 6: FAQ — Shared Component               ║
           ╚═══════════════════════════════════════════════════╝ */}
        <ScrollReveal>
          <section className="section-padding gradient-cta">
            <div className="max-w-2xl mx-auto">
              <p className="kicker text-center text-white/70">COMMON QUESTIONS</p>
              <h2 className="section-heading text-center text-white">
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-0.5 bg-white/30 mx-auto mb-8 rounded-full" />
              <FaqAccordion items={data.faqs} variant="dark" />
            </div>
          </section>
        </ScrollReveal>

        {/* ═══ Google Maps ═══ */}
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto">
            <p className="kicker text-center">VISIT US</p>
            <h2 className="section-heading text-center">
              Find Us in {loc.name}
            </h2>
            <p className="text-center text-sm text-muted-foreground mb-1 font-sans flex items-center justify-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {loc.address}</p>
            <p className="text-center text-xs text-muted-foreground mb-6 font-sans flex items-center justify-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {loc.hours}</p>
            <div className="rounded-xl overflow-hidden border border-border aspect-video shadow-sm">
              <iframe src={loc.mapsEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Smile Avenue ${loc.name} location map`} />
            </div>
          </div>
        </section>

      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-foreground text-white/70 py-10 px-4 text-center text-sm font-sans">
        <img src="/logo-white.webp" alt="Smile Avenue Family Dentistry" className="h-10 w-auto mx-auto mb-4 opacity-80" width={160} height={40} />
        <p className="font-semibold text-white mb-1">Smile Avenue Family Dentistry — {loc.name}</p>
        <p>{loc.address}</p>
        <p><a href={`tel:${loc.phone}`} className="text-white hover:underline">{loc.phoneFormatted}</a></p>
        <p className="mt-1">{loc.hours}</p>
        <p className="mt-4 text-white/40 text-xs">© {new Date().getFullYear()} Smile Avenue Family Dentistry. All rights reserved.</p>
      </footer>

      {/* ═══ MOBILE STICKY BAR ═══ */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-background border-t border-border shadow-[0_-2px_10px_hsl(var(--foreground)/0.08)]">
        <div className="bg-primary/5 text-center py-1 border-b border-border">
          <span className="text-[10px] font-sans font-semibold text-muted-foreground tracking-wide">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1 animate-pulse" />
            OPEN NOW · Same-Day Appointments Available
          </span>
        </div>
        <div className="grid grid-cols-2 h-14">
          <a
            href={`tel:${loc.phone}`}
            onClick={() => fireConversion(callLabel)}
            className="flex items-center justify-center gap-2 text-sm font-sans font-bold text-foreground min-h-[48px] border-r border-border"
          >
            <Phone className="w-5 h-5 text-primary" />
            Call Now
          </a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => fireConversion(bookLabel)}
            className="flex items-center justify-center gap-2 text-sm font-sans font-bold min-h-[48px]"
            style={{ backgroundColor: "hsl(40 63% 58%)", color: "#fff" }}
          >
            Book Now
          </a>
        </div>
      </div>

      <BackToTop />
    </>
  );
};

export { LOCATIONS };
export default LandingPageTemplate;
