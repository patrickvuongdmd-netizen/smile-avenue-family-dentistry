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
import { SERVICE_IMAGES } from "@/lib/images";
import { SERVICE_NAMES } from "@/lib/brand-service-data";
import { trackPhoneClick } from "@/lib/track-phone";
import type { EducationServiceData } from "@/lib/education-service-data";

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
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com/services/${data.serviceSlug}/`;
  const heroImage = SERVICE_IMAGES[data.serviceSlug];

  const relatedPosts = data.relatedBlogCategory
    ? BLOG_POSTS.filter((p) => p.category === data.relatedBlogCategory).slice(0, 3)
    : [];

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
        {heroImage && <meta property="og:image" content={heroImage.url} />}
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
        <section className="section-warm relative overflow-hidden">
          {/* Flanking hero image — desktop only, positioned behind content */}
          {heroImage && (
            <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
              <img
                src={heroImage.url}
                alt=""
                className="absolute -left-16 xl:-left-8 top-1/2 -translate-y-1/2 w-[340px] xl:w-[400px] aspect-[3/4] object-cover rounded-3xl opacity-90"
                loading="eager"
                width={400}
                height={533}
              />
              <img
                src={heroImage.url}
                alt=""
                className="absolute -right-16 xl:-right-8 top-1/2 -translate-y-1/2 w-[340px] xl:w-[400px] aspect-[3/4] object-cover rounded-3xl opacity-90"
                loading="eager"
                width={400}
                height={533}
                style={{ transform: "translateY(-50%) scaleX(-1)" }}
              />
              {/* Soft fade overlay so text remains readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--warm-bg)/0.92)] to-transparent" />
            </div>
          )}

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

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-4">
                <Link to={`/cypress-tx/${data.cypressSlug}`} className="btn-cta flex-1 whitespace-nowrap text-center">
                  Book in Cypress →
                </Link>
                <Link to={`/katy-tx/${data.katySlug}`} className="btn-secondary flex-1 whitespace-nowrap text-center">
                  Book in Katy →
                </Link>
              </div>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:underline transition-colors"
                onClick={() => trackPhoneClick("Education Hero")}
              >
                <Phone className="w-4 h-4" />
                {PHONE_FORMATTED}
              </a>
            </div>

            {/* Mobile hero image — shown below text on small screens */}
            {heroImage && (
              <div className="lg:hidden mt-10 max-w-md mx-auto">
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
        </section>

        {/* 2. FIND [SERVICE] NEAR YOU — location cards right after hero */}
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

        {/* 3. WHAT IS [SERVICE]? */}
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

        {/* 4. VIDEO TESTIMONIAL (patient story) */}
        {data.testimonialVideoId && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
            <div className="container mx-auto text-center">
              <p className="kicker">PATIENT STORY</p>
              <h2 className="section-heading">Hear From a Real Patient</h2>
              <div className="max-w-3xl mx-auto mt-10">
                <LazyYouTube videoId={data.testimonialVideoId} title={`${data.serviceName} Patient Testimonial`} />
              </div>
            </div>
          </section>
        )}

        {/* 5. VIDEO CAROUSEL (curated service videos) */}
        {SERVICE_VIDEOS[data.serviceSlug] && SERVICE_VIDEOS[data.serviceSlug].length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
            <div className="container mx-auto text-center">
              <p className="kicker">SEE HOW IT WORKS</p>
              <h2 className="section-heading">Watch: Understanding {data.serviceName}</h2>
              <div className="mt-10">
                <VideoCarousel videos={SERVICE_VIDEOS[data.serviceSlug]} />
              </div>
            </div>
          </section>
        )}

        {/* 6. WHO NEEDS [SERVICE]? */}
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

        {/* 7. PROCESS STEPS */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
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

        {/* 8. INSURANCE SECTION (tabbed) */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">INSURANCE & COVERAGE</p>
            <h2 className="section-heading">We Work With Your Insurance</h2>
            <div className="mt-10">
              <TabbedInsurance coverageNote={data.insuranceCoverageNote || `Most PPO plans cover a portion of ${data.serviceName.toLowerCase()} treatment. We verify your benefits before your visit.`} />
            </div>
          </div>
        </section>

        {/* 9. COMPARISON TABLE */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
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

        {/* 10. FAQ */}
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

        {/* 11. PAYMENT OPTIONS */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">FLEXIBLE PAYMENT OPTIONS</p>
            <h2 className="section-heading">Affordable {data.serviceName}</h2>
            <p className="section-body max-w-2xl mx-auto mb-10">{data.costNote}</p>
            <PaymentOptions />
          </div>
        </section>

        {/* 12. RELATED BLOG POSTS */}
        {relatedPosts.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
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

        {/* 13. RELATED SERVICES */}
        {data.relatedSlugs.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
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

        {/* 14. FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 gradient-cta">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Ready to Get Started with {data.serviceName}?
            </h2>
            <p className="text-lg font-body text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Book a free consultation at the location most convenient for you. We'll answer all your questions and create a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link to={`/cypress-tx/${data.cypressSlug}`} className="btn-cta-light flex-1 text-center">
                Book in Cypress →
              </Link>
              <Link to={`/katy-tx/${data.katySlug}`} className="btn-cta-light flex-1 text-center">
                Book in Katy →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <BackToTop />
    </>
  );
};

export default EducationServiceTemplate;
