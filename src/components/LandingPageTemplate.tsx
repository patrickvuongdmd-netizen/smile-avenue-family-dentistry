import { Helmet } from "react-helmet-async";
import { Phone, Star, Shield, Clock, CreditCard, MessageCircle, Zap, Users, Sparkles, FlaskConical, Award } from "lucide-react";
import { ReactNode } from "react";
import useDocTitle from "@/hooks/use-doc-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export interface LandingPageData {
  location: "cypress" | "katy";
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCtaLabel: string;
  /** "book" → opens Modento link; "call" → tel: link */
  heroCtaType: "book" | "call";
  isEmergency?: boolean;
  benefits: Benefit[];
  /** Optional extra content block between benefits and FAQ */
  extraSection?: ReactNode;
  faqs: FaqItem[];
  /** Bottom CTA copy */
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
  },
  katy: {
    phone: "2818005008",
    phoneFormatted: "(281) 800-5008",
    booking: "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    name: "Katy",
    hours: "Mon–Fri 8:30 AM – 5:00 PM · Sat 8:00 AM – 2:00 PM",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.123!2d-95.7575!3d29.7357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e0a6a0000001%3A0x1!2s23541+Westheimer+Pkwy+Ste+%23170%2C+Katy%2C+TX+77494!5e0!3m2!1sen!2sus!4v1",
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

/* ── Component ────────────────────────────────────────────── */

const LandingPageTemplate = ({ data }: { data: LandingPageData }) => {
  const loc = LOCATIONS[data.location];
  useDocTitle(data.metaTitle);

  const ctaHref = data.heroCtaType === "call" ? `tel:${loc.phone}` : loc.booking;
  const ctaTarget = data.heroCtaType === "book" ? "_blank" : undefined;
  const conversionLabel = data.heroCtaType === "call" ? "lp_call_click" : "lp_book_click";

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── STICKY HEADER ─────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-2 max-w-5xl mx-auto">
          {/* Logo */}
          <a href="/" aria-label="Smile Avenue Home">
            <img
              src="https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/11/logo-mark.webp"
              alt="Smile Avenue"
              className="h-8 w-auto"
            />
          </a>
          {/* Phone */}
          <a
            href={`tel:${loc.phone}`}
            onClick={() => fireConversion("lp_call_click")}
            className="hidden sm:flex items-center gap-1.5 text-sm font-sans font-semibold"
            style={{ color: "#2B5DA7" }}
          >
            <Phone className="w-4 h-4" />
            {loc.phoneFormatted}
          </a>
          {/* CTA */}
          <a
            href={ctaHref}
            target={ctaTarget}
            rel={ctaTarget ? "noopener noreferrer" : undefined}
            onClick={() => fireConversion(conversionLabel)}
            className="text-sm font-sans font-bold text-white px-4 py-2 rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#D4A853" }}
          >
            Book Now
          </a>
        </div>
      </header>

      <main className="pt-12">
        {/* ── EMERGENCY URGENCY BANNER ───────────────────── */}
        {data.isEmergency && (
          <div className="bg-destructive text-white text-center py-2 text-sm font-sans font-bold animate-pulse">
            🦷 Same-Day Emergency Appointments — Call{" "}
            <a href={`tel:${loc.phone}`} onClick={() => fireConversion("lp_call_click")} className="underline">{loc.phoneFormatted}</a>{" "}
            Now
          </div>
        )}

        {/* ── HERO SECTION ───────────────────────────────── */}
        <section className="text-white py-14 px-4" style={{ backgroundColor: "#2B5DA7" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {data.heroHeadline}
            </h1>
            <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
              {data.heroSubheadline}
            </p>
            <a
              href={ctaHref}
              target={ctaTarget}
              rel={ctaTarget ? "noopener noreferrer" : undefined}
              onClick={() => fireConversion(conversionLabel)}
              className="inline-block text-white text-lg font-sans font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#D4A853" }}
            >
              {data.heroCtaLabel}
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm opacity-90">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 4.9 Stars</span>
              <span className="hidden sm:inline text-white/40">|</span>
              <span>5,000+ Reviews</span>
              <span className="hidden sm:inline text-white/40">|</span>
              <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Same-Day Available</span>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF STRIP ─────────────────────────── */}
        <section className="bg-muted py-4">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 px-4 text-sm font-sans">
            <div className="flex items-center gap-1.5">
              <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" loading="lazy" />
              <span className="font-semibold text-foreground">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-muted-foreground">5,000+ Google Reviews</span>
            <span
              className="text-xs font-bold px-2 py-1 rounded-full text-white"
              style={{ backgroundColor: "#2B5DA7" }}
            >
              TOP RATED
            </span>
          </div>
        </section>

        {/* ── BENEFITS ───────────────────────────────────── */}
        <section className="py-14 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Choose Smile Avenue {loc.name}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {data.benefits.map((b) => (
                <div key={b.title} className="text-center p-6 rounded-2xl border border-border bg-card">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: "#2B5DA7" }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-sans font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXTRA SECTION (before/after, etc.) ──────────── */}
        {data.extraSection}

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section className="py-14 px-4 bg-muted">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-4">
                  <AccordionTrigger className="text-left font-sans font-semibold text-foreground text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── GOOGLE MAPS ─────────────────────────────────── */}
        <section className="py-10 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-xl font-bold text-center mb-4 text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Find Us in {loc.name}
            </h2>
            <div className="rounded-xl overflow-hidden border border-border aspect-video">
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
        <section className="py-14 px-4 text-white text-center" style={{ backgroundColor: "#2B5DA7" }}>
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {data.finalCtaHeadline}
            </h2>
            <p className="opacity-90 mb-8" style={{ fontFamily: "var(--font-body)" }}>
              {data.finalCtaBody}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={ctaHref}
                target={ctaTarget}
                rel={ctaTarget ? "noopener noreferrer" : undefined}
                onClick={() => fireConversion(conversionLabel)}
                className="inline-block text-white text-lg font-sans font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: "#D4A853" }}
              >
                {data.heroCtaLabel}
              </a>
              <a
                href={`tel:${loc.phone}`}
                onClick={() => fireConversion("lp_call_click")}
                className="inline-flex items-center gap-2 text-white font-sans font-semibold text-lg underline hover:no-underline"
              >
                <Phone className="w-5 h-5" />
                {loc.phoneFormatted}
              </a>
            </div>
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
            onClick={() => fireConversion("lp_call_click")}
            className="flex-1 text-center text-sm font-sans font-bold py-2 rounded-l-full border border-border"
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
            className="flex-1 text-center text-sm font-sans font-bold py-2 rounded-r-full text-white"
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
