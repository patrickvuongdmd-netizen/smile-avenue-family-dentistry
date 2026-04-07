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

const SPANISH_ALTERNATES: Record<string, string> = {
  "dental-implants": "/es/implantes-dentales",
  "emergency-dentist": "/es/dentista-de-emergencia",
  "invisalign": "/es/invisalign",
  "cosmetic-dentistry": "/es/odontologia-cosmetica",
};

const BrandServicePageTemplate = ({ data }: { data: BrandServiceData }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com/services/${data.serviceSlug}/`;
  useDocTitle(data.metaTitle);

  const heroImage = SERVICE_IMAGES[data.serviceSlug];
  const serviceVideos = SERVICE_VIDEOS[data.serviceSlug];

  const SAME_AS = [
    "https://www.facebook.com/smileavenuedentistry",
    "https://www.instagram.com/smileavenuedentistry",
    "https://www.youtube.com/@SmileAvenueFamilyDentistry",
    "https://www.yelp.com/biz/smile-avenue-family-dentistry-cypress",
  ];

  // Enriched DentalService schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DentalService",
    name: `${data.serviceName} - Smile Avenue Family Dentistry`,
    description: data.metaDescription,
    url: canonicalUrl,
    image: heroImage?.url,
    serviceType: data.serviceName,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: BOOKING,
      servicePhone: PHONE_FORMATTED,
    },
    areaServed: [
      { "@type": "City", name: "Cypress, TX" },
      { "@type": "City", name: "Katy, TX" },
      { "@type": "State", name: "Texas" },
    ],
    provider: {
      "@type": "Dentist",
      "@id": "https://www.smileavenuefamilydentistry.com/#dentist",
      name: "Smile Avenue Family Dentistry",
      url: "https://www.smileavenuefamilydentistry.com",
      telephone: PHONE_FORMATTED,
      address: {
        "@type": "PostalAddress",
        streetAddress: "9212 Fry Rd #120",
        addressLocality: "Cypress",
        addressRegion: "TX",
        postalCode: "77433",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: "29.9691", longitude: "-95.6972" },
      priceRange: "$$",
      paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Insurance", "CareCredit", "Sunbit"],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
      ],
      hasMap: "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Cypress/",
      sameAs: SAME_AS,
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3000", bestRating: "5", worstRating: "1" },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      description: `${data.serviceName} at Smile Avenue Family Dentistry. Most PPO insurance accepted. 0% financing available.`,
    },
  };

  // MedicalWebPage schema (enriched)
  const medicalWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: data.metaTitle,
    description: data.metaDescription,
    url: canonicalUrl,
    inLanguage: "en",
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

  // Standalone Dentist schema
  const dentistJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://www.smileavenuefamilydentistry.com/#dentist",
    name: "Smile Avenue Family Dentistry",
    url: "https://www.smileavenuefamilydentistry.com/",
    telephone: PHONE_FORMATTED,
    image: "https://www.smileavenuefamilydentistry.com/logo-full.webp",
    logo: "https://www.smileavenuefamilydentistry.com/logo-full.webp",
    description: "Top-rated family & cosmetic dental practice in Cypress and Katy, TX. 5,000+ five-star reviews. Same-day appointments, in-house dental lab, and IV sedation available.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9212 Fry Rd #120",
      addressLocality: "Cypress",
      addressRegion: "TX",
      postalCode: "77433",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: "29.9691", longitude: "-95.6972" },
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Insurance", "CareCredit", "Sunbit"],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
    ],
    hasMap: "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Cypress/",
    sameAs: SAME_AS,
    founder: {
      "@type": "Person",
      name: "Dr. Patrick Vuong",
      jobTitle: "Founder & Lead Dentist",
      url: "https://www.smileavenuefamilydentistry.com/doctors/patrick-vuong-dmd/",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3000", bestRating: "5", worstRating: "1" },
    knowsAbout: [
      "Dental Implants", "All-on-4 Dental Implants", "Cosmetic Dentistry", "Porcelain Veneers",
      "Invisalign", "Emergency Dentistry", "Teeth Whitening", "Dental Crowns", "Dental Bridges",
      "Root Canal Therapy", "Oral Surgery", "Sedation Dentistry", "Pediatric Dentistry",
      "Preventive Dentistry", "Dentures", "Tooth Extraction", "Family Dental Care",
    ],
    medicalSpecialty: "Dentistry",
    isAcceptingNewPatients: true,
    department: [
      {
        "@type": "Dentist",
        name: "Smile Avenue Family Dentistry - Cypress",
        telephone: "(832) 648-1756",
        address: { "@type": "PostalAddress", streetAddress: "9212 Fry Rd #120", addressLocality: "Cypress", addressRegion: "TX", postalCode: "77433", addressCountry: "US" },
      },
      {
        "@type": "Dentist",
        name: "Smile Avenue Family Dentistry - Katy",
        telephone: "(281) 800-5008",
        address: { "@type": "PostalAddress", streetAddress: "23541 Westheimer Pkwy Ste #170", addressLocality: "Katy", addressRegion: "TX", postalCode: "77494", addressCountry: "US" },
      },
    ],
  };

  // ItemList for process steps
  const itemListJsonLd = data.processSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.serviceName} Process at Smile Avenue Family Dentistry`,
    numberOfItems: data.processSteps.length,
    itemListElement: data.processSteps.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.title,
      description: step.description,
    })),
  } : null;

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
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        {SPANISH_ALTERNATES[data.serviceSlug] && (
          <link rel="alternate" hrefLang="es" href={`https://www.smileavenuefamilydentistry.com${SPANISH_ALTERNATES[data.serviceSlug]}/`} />
        )}
      </Helmet>
      <TrustTicker />
      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-warm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-sans text-muted-foreground text-center md:text-left">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">{data.serviceName}</span>
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
                <div className="flex gap-3 mb-5 max-w-sm mx-auto md:mx-0">
                  <button onClick={() => setBookingOpen(true)} className="btn-cta flex-1 whitespace-nowrap">
                    Book Appointment
                  </button>
                  <a href={`tel:${PHONE}`} className="btn-secondary flex-1 whitespace-nowrap flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
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

        {/* INTRO — editorial single-column */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">{data.introKicker}</p>
              <h2 className="section-heading">{data.introHeading}</h2>
              <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
                {data.introParas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {data.crossLinks && data.crossLinks.length > 0 && (
                <p className="mt-8 font-body text-lg text-muted-foreground leading-relaxed">
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

        {/* WHY CHOOSE US — soft cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
          <div className="container mx-auto text-center">
            <p className="kicker">WHY SMILE AVENUE</p>
            <h2 className="section-heading">{data.whyHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-8 mt-12 text-left max-w-4xl mx-auto">
              {data.whyPoints.map((point) => (
                <div key={point.title} className="card-soft">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{point.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS — timeline on mobile */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="section-heading">{data.processHeading}</h2>
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

        {/* VIDEO CAROUSEL */}
        {serviceVideos && serviceVideos.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
            <div className="container mx-auto text-center">
              <p className="kicker">SEE IT IN ACTION</p>
              <h2 className="section-heading">Watch Real Procedures & Results</h2>
              <p className="section-body max-w-2xl mx-auto">
                See how our team delivers exceptional {data.serviceName.toLowerCase()} care — from consultation to final results.
              </p>
              <div className="mt-10">
                <VideoCarousel videos={serviceVideos} />
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 gradient-cta">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
              <div>
                <p className="kicker text-primary-foreground/60">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading text-primary-foreground">{data.faqHeading}</h2>
                <p className="section-body text-primary-foreground/60">
                  Have more questions? Call us or book a consultation.
                </p>
              </div>
              <FaqAccordion items={data.faqs} variant="dark" />
            </div>
          </div>
        </section>

        {/* TWO LOCATIONS — warm cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">FIND THIS SERVICE NEAR YOU</p>
            <h2 className="section-heading">Two Convenient Locations</h2>
            <p className="section-body max-w-2xl mx-auto">
              {data.serviceName} is available at both our Cypress and Katy offices. Choose the location most convenient for you.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              {(["cypress", "katy"] as const).map((locKey) => {
                const loc = LOCATIONS[locKey];
                return (
                  <div key={locKey} className="card-warm text-left">
                    <h3 className="font-display text-xl font-bold text-foreground mb-5">{loc.name} Office</h3>
                    <div className="space-y-3.5 text-sm font-sans text-muted-foreground mb-8">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">{loc.phoneFormatted}</a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
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
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
            <div className="container mx-auto text-center">
              <p className="kicker">EXPLORE MORE SERVICES</p>
              <h2 className="section-heading">Related Treatments</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                {data.relatedSlugs.map((slug) => (
                  <Link
                    key={slug}
                    to={`/services/${slug}`}
                    className="px-6 py-3.5 rounded-2xl bg-card border border-border/60 text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary hover:shadow-md transition-all"
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
