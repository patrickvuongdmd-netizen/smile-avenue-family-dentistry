import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Check, X, ArrowRight } from "lucide-react";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import TrustTicker from "@/components/TrustTicker";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import LazyYouTube from "@/components/LazyYouTube";
import VideoCarousel from "@/components/VideoCarousel";
import { SERVICE_VIDEOS } from "@/lib/images";
import TabbedInsurance from "@/components/TabbedInsurance";
import PaymentOptions from "@/components/PaymentOptions";
import BlogCardCarousel from "@/components/BlogCardCarousel";
import BlogDesktopGrid from "@/components/BlogDesktopGrid";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BLOG_CATEGORY_IMAGES, BLOG_CATEGORY_COLORS, BLOG_FALLBACK_IMAGE } from "@/lib/blog-styles";
import { SERVICE_IMAGES, OFFICE_IMAGES } from "@/lib/images";
import { TEAM_IMAGES } from "@/lib/team-images";
import { SERVICE_NAMES } from "@/lib/brand-service-data";
import { trackPhoneClick } from "@/lib/track-phone";
import type { EducationServiceData } from "@/lib/education-service-data";
import { EDUCATION_SERVICES } from "@/lib/education-service-data";
import BookingLocationModal from "@/components/BookingLocationModal";

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

const EducationServiceTemplate = ({ data }: { data: EducationServiceData }) => {
  useDocTitle(data.metaTitle);
  const [bookingOpen, setBookingOpen] = useState(false);
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com/services/${data.serviceSlug}/`;
  // Standardised hero flanking photos — left: team member headshot, right: office/location
  // Deterministic rotation based on slug hash so each page gets a unique pairing
  const slugHash = data.serviceSlug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);

  const teamHeadshots = Object.values(TEAM_IMAGES).map(t => t.url);
  const staffPhotos = [
    OFFICE_IMAGES.teamPhoto,
    OFFICE_IMAGES.aboutTeamAction,
    OFFICE_IMAGES.patientCare,
    OFFICE_IMAGES.aboutKatyTeam,
    ...teamHeadshots,
  ];

  const locationPhotos = [
    OFFICE_IMAGES.cypressHero,
    OFFICE_IMAGES.katyHero,
    OFFICE_IMAGES.waitingRoom,
    OFFICE_IMAGES.treatmentRoom,
    OFFICE_IMAGES.hallway,
    OFFICE_IMAGES.receptionDesk,
  ];

  const leftFlankImage = staffPhotos[slugHash % staffPhotos.length];
  const rightFlankImage = locationPhotos[slugHash % locationPhotos.length];

  const relatedPosts = data.relatedBlogCategory
    ? BLOG_POSTS.filter((p) => p.category === data.relatedBlogCategory).slice(0, 3)
    : [];

  // Dynamic background alternation — ensures no two adjacent sections share a bg
  const hasServiceComparison = !!data.serviceComparison;
  const hasVideos = !!(SERVICE_VIDEOS[data.serviceSlug]?.length);
  const hasTestimonialVideo = !!data.testimonialVideoId;
  const hasBlog = relatedPosts.length > 0;
  const flip = (bg: "warm" | "bg"): "warm" | "bg" => bg === "warm" ? "bg" : "warm";
  const cls = (bg: "warm" | "bg") => bg === "warm" ? "section-warm" : "bg-background";

  // Sections 1-4 are fixed: warm, bg, warm, bg
  let last: "warm" | "bg" = "bg"; // after section 4

  const bg5a = hasServiceComparison ? flip(last) : null;
  if (bg5a) last = bg5a;
  const bg5b = flip(last); last = bg5b;
  const bg6 = hasVideos ? flip(last) : null;
  if (bg6) last = bg6;
  const bg7 = flip(last); last = bg7;
  // Section 8 = gradient-cta (visual break, resets)
  const bg9 = hasTestimonialVideo ? "bg" as const : null;
  last = hasTestimonialVideo ? "bg" : "bg"; // after gradient, start fresh
  const bg10: "warm" | "bg" = hasTestimonialVideo ? "warm" : "warm"; last = bg10;
  const bg11 = hasBlog ? flip(last) : null;
  if (bg11) last = bg11;
  const bg12 = data.relatedSlugs.length > 0 ? flip(last) : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: data.metaTitle,
    description: data.metaDescription,
    url: canonicalUrl,
    about: { "@type": "MedicalCondition", name: data.serviceName },
    provider: {
      "@type": "Dentist",
      name: "Smile Avenue Family Dentistry",
      url: "https://www.smileavenuefamilydentistry.com",
    },
  };

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
        {SERVICE_IMAGES[data.serviceSlug] && <meta property="og:image" content={SERVICE_IMAGES[data.serviceSlug].url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* 1. HERO — center-aligned, Tend-inspired */}
        <section className="section-warm relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
            <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
              {/* Left flank — tall rounded rectangle, pinned to top like Tend */}
              <img
                src={leftFlankImage}
                alt="Smile Avenue dental team"
                className="absolute left-[-2%] xl:left-[2%] 2xl:left-[4%] top-0 w-[22vw] max-w-[380px] min-w-[260px] h-[90%] object-cover rounded-b-[2.5rem] rounded-t-none"
                loading="eager"
                width={380}
                height={600}
              />
              {/* Right flank — tall rounded rectangle, pinned to bottom (mirror of left) */}
              <img
                src={rightFlankImage}
                alt="Smile Avenue dental office"
                className="absolute right-[-2%] xl:right-[2%] 2xl:right-[4%] bottom-0 w-[22vw] max-w-[380px] min-w-[260px] h-[90%] object-cover rounded-t-[2.5rem] rounded-b-none"
                loading="eager"
                width={380}
                height={600}
              />
            </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-sans text-muted-foreground text-center">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">{data.serviceName}</span>
            </nav>

            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-[1.08] font-display">
                {data.serviceName}
              </h1>
              <p className="text-[15px] md:text-lg lg:text-xl leading-relaxed mb-8 text-muted-foreground font-body max-w-xl mx-auto">
                {data.heroSubtitle}
              </p>

              {data.heroValueProps && data.heroValueProps.length > 0 && (
                <ul className="inline-flex flex-col items-start space-y-2.5 mb-8">
                  {data.heroValueProps.map((prop, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{prop}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm font-sans font-semibold text-foreground">4.9 ★★★★★</span>
                <span className="text-xs font-sans text-muted-foreground">from 5,000+ reviews</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <button onClick={() => setBookingOpen(true)} className="btn-cta flex-1 whitespace-nowrap text-center">
                  Book Now →
                </button>
                <a
                  href={`tel:${PHONE}`}
                  className="btn-secondary flex-1 whitespace-nowrap text-center inline-flex items-center justify-center gap-2"
                  onClick={() => trackPhoneClick("Education Hero")}
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_FORMATTED}
                </a>
              </div>
            </div>

            <div className="lg:hidden mt-10 max-w-md mx-auto">
                <img
                  src={leftFlankImage}
                  alt="Smile Avenue dental team"
                  className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg"
                  loading="eager"
                  fetchPriority="high"
                  width={640}
                  height={480}
                />
              </div>
          </div>
        </section>

        {/* 2. FIND [SERVICE] NEAR YOU — immediate action */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">AVAILABLE AT BOTH LOCATIONS</p>
            <h2 className="section-heading text-center">Find {data.serviceName} Near You</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
              {(["cypress", "katy"] as const).map((locKey) => {
                const loc = LOCATIONS[locKey];
                const slug = locKey === "cypress" ? data.cypressSlug : data.katySlug;
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
                        <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors" onClick={() => trackPhoneClick(loc.name)}>{loc.phoneFormatted}</a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a href={loc.booking} target="_blank" rel="noopener noreferrer" className="btn-cta w-full text-center">
                        Book in {loc.name}
                      </a>
                      <Link
                        to={`${loc.path}/${slug}`}
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

        {/* 3. WHAT IS [SERVICE]? — establish authority */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">UNDERSTANDING THE BASICS</p>
              <h2 className="section-heading">What Is {data.serviceName}?</h2>
              <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
                {data.whatIs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHO NEEDS [SERVICE]? — "is this for me?" */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">IS THIS RIGHT FOR YOU?</p>
              <h2 className="section-heading">Who Needs {data.serviceName}?</h2>
              <p className="section-body max-w-2xl mx-auto mb-10">
                You may benefit from {data.serviceName.toLowerCase()} if any of the following apply to you:
              </p>
              <ul className="space-y-4">
                {data.whoNeeds.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5a. SERVICE-SPECIFIC COMPARISON — educational, "which option is right for me?" */}
        {data.serviceComparison && (
          <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${cls(bg5a!)}`}>
            <div className="container mx-auto text-center">
              <p className="kicker">COMPARE YOUR OPTIONS</p>
              <h2 className="section-heading">{data.serviceComparison.titleA} vs {data.serviceComparison.titleB}</h2>

              <div className="hidden md:block max-w-4xl mx-auto mt-12">
                <div className="rounded-2xl border border-border overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="px-6 py-4 font-display text-sm font-bold">Feature</th>
                        <th className="px-6 py-4 font-display text-sm font-bold">{data.serviceComparison.titleA}</th>
                        <th className="px-6 py-4 font-display text-sm font-bold">{data.serviceComparison.titleB}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.serviceComparison.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                          <td className="px-6 py-4 font-sans text-sm font-semibold text-foreground">{row.feature}</td>
                          <td className="px-6 py-4 font-sans text-sm text-primary font-medium">{row.optionA}</td>
                          <td className="px-6 py-4 font-sans text-sm text-muted-foreground">{row.optionB}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="md:hidden mt-10 text-left max-w-sm mx-auto space-y-6">
                {data.serviceComparison.rows.map((row, i) => (
                  <div key={i} className="card-soft">
                    <h3 className="font-display text-sm font-bold text-foreground mb-3">{row.feature}</h3>
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-xs font-sans font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">{data.serviceComparison!.titleA}</span>
                      <span className="text-sm font-sans text-foreground">{row.optionA}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-sans font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full shrink-0">{data.serviceComparison!.titleB}</span>
                      <span className="text-sm font-sans text-muted-foreground">{row.optionB}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5b. SMILE AVENUE VS TYPICAL — practice differentiator */}
        <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${cls(bg5b)}`}>
          <div className="container mx-auto text-center">
            <p className="kicker">THE SMILE AVENUE DIFFERENCE</p>
            <h2 className="section-heading">Why Choose Smile Avenue for {data.serviceName}?</h2>

            <div className="hidden md:block max-w-4xl mx-auto mt-12">
              <div className="rounded-2xl border border-border overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-6 py-4 font-display text-sm font-bold">Feature</th>
                      <th className="px-6 py-4 font-display text-sm font-bold">Smile Avenue</th>
                      <th className="px-6 py-4 font-display text-sm font-bold">Typical Office</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                        <td className="px-6 py-4 font-sans text-sm font-semibold text-foreground">{row.feature}</td>
                        <td className="px-6 py-4 font-sans text-sm text-primary font-medium">{row.smileAvenue}</td>
                        <td className="px-6 py-4 font-sans text-sm text-muted-foreground">{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="md:hidden mt-10 text-left max-w-sm mx-auto space-y-6">
              {data.comparisonRows.map((row, i) => (
                <div key={i} className="card-soft">
                  <h3 className="font-display text-sm font-bold text-foreground mb-3">{row.feature}</h3>
                  <div className="flex items-start gap-2 mb-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-sans text-primary font-medium">{row.smileAvenue}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                    <span className="text-sm font-sans text-muted-foreground">{row.typical}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. VIDEO CAROUSEL — visual proof mid-page */}
        {SERVICE_VIDEOS[data.serviceSlug] && SERVICE_VIDEOS[data.serviceSlug].length > 0 && (
           <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${cls(bg6!)}`}>
            <div className="container mx-auto text-center">
              <p className="kicker">SEE HOW IT WORKS</p>
              <h2 className="section-heading">Watch: Understanding {data.serviceName}</h2>
              <div className="mt-10">
                <VideoCarousel videos={SERVICE_VIDEOS[data.serviceSlug]} />
              </div>
            </div>
          </section>
        )}

        {/* 7. PROCESS STEPS — "what happens next" */}
        <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${cls(bg7)}`}>
          <div className="container mx-auto text-center">
            <p className="kicker">WHAT TO EXPECT</p>
            <h2 className="section-heading">The {data.serviceName} Process</h2>
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

        {/* 8. FAQ — visual anchor, upper-mid page */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 gradient-cta">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
              <div>
                <p className="kicker text-primary-foreground/60">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading text-primary-foreground">{data.serviceName} FAQ</h2>
                <p className="section-body text-primary-foreground/60">
                  Have more questions? Call us or book a free consultation.
                </p>
              </div>
              <FaqAccordion items={data.faqs} variant="dark" />
            </div>
          </div>
        </section>

        {/* 9. VIDEO TESTIMONIAL — social proof after FAQ */}
        {data.testimonialVideoId && (
           <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${cls(bg9!)}`}>
            <div className="container mx-auto text-center">
              <p className="kicker">PATIENT STORY</p>
              <h2 className="section-heading">Hear From a Real Patient</h2>
              <div className="max-w-3xl mx-auto mt-10">
                <LazyYouTube videoId={data.testimonialVideoId} title={`${data.serviceName} Patient Testimonial`} />
              </div>
            </div>
          </section>
        )}

        {/* 10. INSURANCE & PAYMENT — consolidated affordability */}
        <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${cls(bg10)}`}>
          <div className="container mx-auto text-center">
            <p className="kicker">INSURANCE & AFFORDABILITY</p>
            <h2 className="section-heading">Affordable {data.serviceName}</h2>
            <p className="section-body max-w-2xl mx-auto mb-10">{data.costNote}</p>
            <div className="mb-16">
              <TabbedInsurance coverageNote={data.insuranceCoverageNote || `Most PPO plans cover a portion of ${data.serviceName.toLowerCase()} treatment. We verify your benefits before your visit.`} />
            </div>
            <PaymentOptions />
          </div>
        </section>

        {/* 11. RELATED BLOG POSTS */}
        {relatedPosts.length > 0 && (
           <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${cls(bg11!)}`}>
            <div className="container mx-auto text-center">
              <p className="kicker">FROM OUR BLOG</p>
              <h2 className="section-heading">Learn More About {data.serviceName}</h2>
              <div className="mt-10">
                <div className="hidden md:block">
                  <BlogDesktopGrid posts={relatedPosts} categoryImages={BLOG_CATEGORY_IMAGES} categoryColors={BLOG_CATEGORY_COLORS} fallbackImage={BLOG_FALLBACK_IMAGE} />
                </div>
                <div className="md:hidden">
                  <BlogCardCarousel posts={relatedPosts} categoryImages={BLOG_CATEGORY_IMAGES} categoryColors={BLOG_CATEGORY_COLORS} fallbackImage={BLOG_FALLBACK_IMAGE} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 12. RELATED SERVICES — rich cross-linking cards */}
        {data.relatedSlugs.length > 0 && (
           <section className={`px-4 sm:px-6 lg:px-8 py-24 md:py-28 ${cls(bg12!)}`}>
            <div className="container mx-auto text-center">
              <p className="kicker">EXPLORE MORE SERVICES</p>
              <h2 className="section-heading">You Might Also Need</h2>
              <p className="section-body max-w-2xl mx-auto mb-12">
                Explore related treatments available at both of our locations.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                {data.relatedSlugs.slice(0, 4).map((slug) => {
                  const related = EDUCATION_SERVICES[slug];
                  const name = SERVICE_NAMES[slug] || slug;
                  const description = related?.heroSubtitle || "";
                  const cypressSlug = related?.cypressSlug || slug;
                  const katySlug = related?.katySlug || slug;
                  return (
                    <div key={slug} className="card-soft flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">
                          <Link to={`/services/${slug}`} className="hover:text-primary transition-colors">
                            {name}
                          </Link>
                        </h3>
                        {description && (
                          <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                            {description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-4 pt-3 border-t border-border/40">
                        <Link
                          to={`/services/${slug}`}
                          className="text-xs font-sans font-semibold text-primary hover:underline inline-flex items-center gap-1"
                        >
                          Learn More <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-border">|</span>
                        <Link
                          to={`/cypress-tx/${cypressSlug}`}
                          className="text-xs font-sans font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          Cypress
                        </Link>
                        <Link
                          to={`/katy-tx/${katySlug}`}
                          className="text-xs font-sans font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          Katy
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 13. FINAL CTA — upgraded with trust signals & phone */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 gradient-cta relative overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary-foreground/5 pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary-foreground/5 pointer-events-none" aria-hidden="true" />

          <div className="container mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl text-primary-foreground">★</span>
              ))}
            </div>
            <p className="text-sm font-sans font-semibold text-primary-foreground/70 mb-6">
              4.9 rating from 5,000+ happy patients
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Get Started<br className="hidden sm:block" /> with {data.serviceName}?
            </h2>
            <p className="text-base md:text-lg font-body text-primary-foreground/70 max-w-xl mx-auto mb-10">
              Book a free consultation at the location most convenient for you. We'll create a personalized treatment plan — no obligation, no pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <button onClick={() => setBookingOpen(true)} className="btn-cta-light flex-1 text-center">
                Book Now →
              </button>
              <a
                href={`tel:${PHONE}`}
                className="btn-cta-light flex-1 text-center inline-flex items-center justify-center gap-2"
                onClick={() => trackPhoneClick("Education Final CTA")}
              >
                <Phone className="w-4 h-4" />
                {PHONE_FORMATTED}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs font-sans text-primary-foreground/50">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Free consultation</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Insurance accepted</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> 0% financing available</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Booking takes 60 seconds</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <BackToTop />
      <BookingLocationModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default EducationServiceTemplate;
