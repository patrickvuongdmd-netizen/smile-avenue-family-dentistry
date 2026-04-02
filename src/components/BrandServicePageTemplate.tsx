import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import TrustTicker from "@/components/TrustTicker";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import BookingLocationModal from "@/components/BookingLocationModal";
import { SERVICE_IMAGES, SERVICE_VIDEOS } from "@/lib/images";
import { BrandServiceData, SERVICE_NAMES } from "@/lib/brand-service-data";
import VideoCarousel from "@/components/VideoCarousel";
import { useState } from "react";

const PHONE = "8326481756";
const PHONE_FORMATTED = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const LOCATIONS = {
  cypress: {
    name: "Cypress",
    path: "/cypress-tx",
    phone: "8326481756",
    phoneFormatted: "(832) 648-1756",
    booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress",
    address: "9212 Fry Rd #120, Cypress, TX 77433",
    hours: "Mon–Fri 8:30am–5pm",
  },
  katy: {
    name: "Katy",
    path: "/katy-tx",
    phone: "2818005008",
    phoneFormatted: "(281) 800-5008",
    booking: "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    hours: "Mon–Fri 8:30am–5pm, Sat 8am–2pm",
  },
};

const BrandServicePageTemplate = ({ data }: { data: BrandServiceData }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com/services/${data.serviceSlug}/`;
  useDocTitle(data.metaTitle);

  const heroImage = SERVICE_IMAGES[data.serviceSlug];

  // DentalService schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DentalService",
    name: data.serviceName,
    description: data.metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "Dentist",
      name: "Smile Avenue Family Dentistry",
      url: "https://www.smileavenuefamilydentistry.com",
    },
  };

  // MedicalProcedure schema (when procedure info is available)
  const medicalProcedureJsonLd = data.procedureType ? {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: data.serviceName,
    description: data.metaDescription,
    url: canonicalUrl,
    procedureType: data.procedureType,
    ...(data.howPerformed && { howPerformed: data.howPerformed }),
    ...(data.bodyLocation && { bodyLocation: data.bodyLocation }),
    status: "https://schema.org/EventScheduled",
  } : null;

  // HowTo schema from process steps
  const howToJsonLd = data.processSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: data.processHeading,
    description: `Step-by-step guide to the ${data.serviceName.toLowerCase()} process at Smile Avenue Family Dentistry.`,
    step: data.processSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  } : null;

  // VideoObject schema for embedded videos
  const serviceVideos = SERVICE_VIDEOS[data.serviceSlug];
  const videoObjectsJsonLd = serviceVideos && serviceVideos.length > 0
    ? serviceVideos.map((v) => ({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: v.title,
        description: `${v.title} — ${data.serviceName} at Smile Avenue Family Dentistry`,
        thumbnailUrl: `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`,
        uploadDate: "2024-01-01",
        contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
        embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
      }))
    : null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.smileavenuefamilydentistry.com/services/" },
      { "@type": "ListItem", position: 3, name: data.serviceName, item: canonicalUrl },
    ],
  };

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
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {medicalProcedureJsonLd && <script type="application/ld+json">{JSON.stringify(medicalProcedureJsonLd)}</script>}
        {howToJsonLd && <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>}
        {videoObjectsJsonLd && <script type="application/ld+json">{JSON.stringify(videoObjectsJsonLd)}</script>}
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">{data.serviceName}</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary font-sans">
                  {data.heroKicker}
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-[1.1] font-display">
                  {data.heroHeading}
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-muted-foreground max-w-xl font-body">
                  {data.heroBody}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setBookingOpen(true)} className="btn-cta">
                    Book Appointment
                  </button>
                  <a href={`tel:${PHONE}`} className="btn-secondary">
                    Call {PHONE_FORMATTED}
                  </a>
                </div>
              </div>

              {heroImage && (
                <div className="relative">
                  <img
                    src={heroImage.url}
                    alt={heroImage.alt}
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              )}
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
                {data.introParas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {/* Contextual Cross-Links */}
              {data.crossLinks && data.crossLinks.length > 0 && (
                <p className="mt-6 font-body text-base text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Related services:</span>{" "}
                  {data.crossLinks.map((link, i) => (
                    <span key={link.slug}>
                      <Link to={`/services/${link.slug}`} className="text-primary hover:underline font-semibold">
                        {link.text}
                      </Link>
                      {i < data.crossLinks!.length - 1 && (i === data.crossLinks!.length - 2 ? ", and " : ", ")}
                    </span>
                  ))}
                  .
                </p>
              )}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WHY SMILE AVENUE</p>
            <h2 className="section-heading">{data.whyHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">
              {data.whyPoints.map((point) => (
                <div key={point.title} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="section-heading">{data.processHeading}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {data.processSteps.map((step) => (
                <div key={step.number} className="bg-card rounded-2xl p-6 border border-border text-left">
                  <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {step.number}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO CAROUSEL */}
        {serviceVideos && serviceVideos.length > 0 && (
          <section className="section-padding bg-background">
            <div className="container mx-auto text-center">
              <p className="kicker">SEE IT IN ACTION</p>
              <h2 className="section-heading">Watch Real Procedures & Results</h2>
              <p className="section-body max-w-2xl mx-auto">
                See how our team delivers exceptional {data.serviceName.toLowerCase()} care — from consultation to final results.
              </p>
              <div className="mt-8">
                <VideoCarousel videos={serviceVideos} />
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section-padding gradient-cta">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker text-white/70">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading text-white">{data.faqHeading}</h2>
                <p className="section-body text-white/70">
                  Have more questions? Call us or book a consultation.
                </p>
              </div>
              <FaqAccordion items={data.faqs} variant="dark" />
            </div>
          </div>
        </section>

        {/* FIND THIS SERVICE NEAR YOU */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">FIND THIS SERVICE NEAR YOU</p>
            <h2 className="section-heading">Two Convenient Locations</h2>
            <p className="section-body max-w-2xl mx-auto">
              {data.serviceName} is available at both our Cypress and Katy offices. Choose the location most convenient for you.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
              {(["cypress", "katy"] as const).map((locKey) => {
                const loc = LOCATIONS[locKey];
                return (
                  <div key={locKey} className="bg-card rounded-xl p-8 border border-border text-left">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">{loc.name} Office</h3>
                    <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phoneFormatted}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href={loc.booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta w-full text-center"
                      >
                        Book in {loc.name}
                      </a>
                      <Link
                        to={`${loc.path}/${data.serviceSlug}`}
                        className="inline-flex items-center justify-center gap-1.5 text-sm font-sans font-semibold text-primary hover:underline py-2"
                      >
                        {data.serviceName} in {loc.name}, TX <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        {data.relatedSlugs.length > 0 && (
          <section className="section-padding section-alt">
            <div className="container mx-auto text-center">
              <p className="kicker">EXPLORE MORE SERVICES</p>
              <h2 className="section-heading">Related Treatments</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {data.relatedSlugs.map((slug) => (
                  <Link
                    key={slug}
                    to={`/services/${slug}`}
                    className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all"
                  >
                    {SERVICE_NAMES[slug] || slug}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <BackToTop />
      <BookingLocationModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default BrandServicePageTemplate;
