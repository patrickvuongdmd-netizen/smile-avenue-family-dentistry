import { Link } from "react-router-dom";
import BlogDesktopGrid from "@/components/BlogDesktopGrid";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, Phone, Check, ArrowRight } from "lucide-react";
import { trackPhoneClick } from "@/lib/track-phone";
import LazyBlogSection from "@/components/LazyBlogSection";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import BookingLocationModal from "@/components/BookingLocationModal";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import ScrollReveal from "@/components/ScrollReveal";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import LazySection from "@/components/LazySection";
import { OFFICE_IMAGES, HERO_VIDEO_URL } from "@/lib/images";
import CredibilityBar from "@/components/CredibilityBar";
import SmileAvenueDifference from "@/components/SmileAveneDifference";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ScrollBookingPrompt from "@/components/ScrollBookingPrompt";
import ServicesCarousel from "@/components/ServicesCarousel";
import HomepageLocations from "@/components/HomepageLocations";
import HomepageInsurance from "@/components/HomepageInsurance";
import HomepageDoctors from "@/components/HomepageDoctors";
import FullWidthPhotoBreak from "@/components/FullWidthPhotoBreak";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";

const Home = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useDocTitle("Smile Avenue Family Dentistry | A Dentist That Feels Like Home");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Smile Avenue Family Dentistry | A Dentist That Feels Like Home</title>
        <meta name="description" content="A dentist that feels like home — warm blankets, Netflix in every room, and no judgment, ever. 5,000+ five-star reviews. Cypress & Katy, TX." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/" />
        <meta property="og:title" content="Smile Avenue Family Dentistry | A Dentist That Feels Like Home" />
        <meta property="og:description" content="A dentist that feels like home — warm blankets, Netflix in every room, and no judgment, ever. 5,000+ five-star reviews." />
        <meta property="og:image" content={OFFICE_IMAGES.homepageHero} />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smile Avenue Family Dentistry | A Dentist That Feels Like Home" />
        <meta name="twitter:description" content="A dentist that feels like home — warm blankets, Netflix in every room, and no judgment, ever. 5,000+ five-star reviews." />
        <meta name="twitter:image" content={OFFICE_IMAGES.homepageHero} />
        <link rel="alternate" hrefLang="es" href="https://www.smileavenuefamilydentistry.com/es/" />
        <link rel="alternate" hrefLang="en" href="https://www.smileavenuefamilydentistry.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.smileavenuefamilydentistry.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Smile Avenue Family Dentistry",
          url: "https://www.smileavenuefamilydentistry.com",
          logo: "https://www.smileavenuefamilydentistry.com/logo-full.webp",
          foundingDate: "2018",
          founder: { "@type": "Person", name: "Dr. Patrick Vuong", jobTitle: "DMD, Founder" },
          numberOfEmployees: { "@type": "QuantitativeValue", minValue: 20, maxValue: 50 },
          contactPoint: [
            { "@type": "ContactPoint", telephone: "+1-832-648-1756", contactType: "customer service", areaServed: "US", availableLanguage: ["English", "Spanish", "Vietnamese"] },
            { "@type": "ContactPoint", telephone: "+1-281-800-5008", contactType: "customer service", areaServed: "US", availableLanguage: ["English", "Spanish"] },
          ],
          areaServed: [
            { "@type": "City", name: "Cypress, TX" },
            { "@type": "City", name: "Katy, TX" },
            { "@type": "Place", name: "Bridgeland" },
            { "@type": "Place", name: "Towne Lake" },
            { "@type": "Place", name: "Cinco Ranch" },
            { "@type": "Place", name: "Fulshear" },
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000", bestRating: "5", worstRating: "1" },
          sameAs: [
            "https://www.facebook.com/SmileAvenueFamilyDentistry/",
            "https://www.instagram.com/smileavenuefamilydentistry/",
            "https://www.tiktok.com/@smileavenuetx",
            "https://www.youtube.com/@SmileAvenueTX",
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Smile Avenue Family Dentistry",
          url: "https://www.smileavenuefamilydentistry.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.smileavenuefamilydentistry.com/services/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Smile Avenue Family Dentistry",
          url: "https://www.smileavenuefamilydentistry.com",
          telephone: ["+18326481756", "+12818005008"],
          address: [
            { "@type": "PostalAddress", streetAddress: "9212 Fry Rd #120", addressLocality: "Cypress", addressRegion: "TX", postalCode: "77433", addressCountry: "US" },
            { "@type": "PostalAddress", streetAddress: "23541 Westheimer Pkwy Ste #170", addressLocality: "Katy", addressRegion: "TX", postalCode: "77494", addressCountry: "US" },
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000", bestRating: "5", worstRating: "1" },
          priceRange: "$$",
          openingHours: ["Mo-Fr 08:30-17:00", "Sa 08:00-14:00"],
          sameAs: [
            "https://www.facebook.com/SmileAvenueFamilyDentistry/",
            "https://www.instagram.com/smileavenuefamilydentistry/",
            "https://www.tiktok.com/@smileavenuetx",
            "https://www.youtube.com/@SmileAvenueTX",
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Smile Avenue Family Dentistry | Dentist in Cypress & Katy, TX",
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".kicker", ".section-body"] },
          url: "https://www.smileavenuefamilydentistry.com/"
        })}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl="" />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* 1 — HERO */}
        <section className="section-warm lg:bg-background">
          {/* ── MOBILE HERO ── */}
          <div className="lg:hidden px-5 pt-12 pb-14 text-center">
            <h1 className="font-display text-[32px] leading-[1.2] font-bold text-foreground mb-3">
              Dentistry Done{" "}
              <em className="not-italic text-primary">Differently.</em>
            </h1>
            <p className="font-display text-xl font-medium text-muted-foreground mb-8">
              Smiles that prove it.
            </p>
            <p className="font-display text-[17px] leading-[1.65] text-muted-foreground mb-10 max-w-[340px] mx-auto">
              We built Smile Avenue around a simple idea: dental care should leave you feeling better — not just about your teeth, but about the <strong className="text-foreground font-semibold">whole experience.</strong>
            </p>
            <div className="flex gap-3 justify-center mb-4">
              <button onClick={() => setBookingModalOpen(true)} className="inline-flex items-center justify-center font-sans font-bold tracking-wide text-sm py-3.5 px-8 rounded-full bg-primary text-primary-foreground transition-all pulse-glow">Book Now</button>
              <a href={`tel:${CYPRESS_PHONE}`} onClick={() => trackPhoneClick(CYPRESS_PHONE)} className="btn-secondary flex items-center justify-center gap-1.5 text-sm py-3.5 px-6 rounded-full"><Phone className="w-4 h-4" />Call Us</a>
            </div>
            <p className="text-xs font-sans text-muted-foreground">Booking takes less than 60 seconds</p>
          </div>

          {/* ── DESKTOP HERO ── */}
          <div className="hidden lg:block py-24 xl:py-32">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
                <div className="text-left">
                  <p className="kicker mb-3 text-xs tracking-[0.2em]">5,000+ FAMILIES TRUST US WITH THEIR SMILES</p>
                  <h1 className="font-display text-6xl xl:text-7xl font-bold leading-[1.05] mb-3 text-foreground">Dentistry Done <em className="not-italic text-primary">Differently.</em></h1>
                  <p className="font-display text-2xl xl:text-3xl font-semibold text-muted-foreground mb-6">Smiles that prove it.</p>
                  <p className="font-body text-xl leading-relaxed text-muted-foreground mb-4 max-w-lg">
                    We built Smile Avenue around a simple idea: dental care should leave you feeling better — not just about your teeth, but about the whole experience. From your first visit to your hundredth, we show up for you.
                  </p>
                  <p className="font-body text-lg leading-relaxed text-muted-foreground mb-10 max-w-lg">
                    Our doctors bring advanced training and genuine warmth to every appointment. No rushing, no guessing, no dread. Just honest care, modern techniques, and a team that treats you like family — <strong className="text-foreground font-semibold">because most of our patients are.</strong>
                  </p>
                  <div className="flex gap-4 mb-3 max-w-md">
                    <button onClick={() => setBookingModalOpen(true)} className="flex-1 inline-flex items-center justify-center font-sans font-bold tracking-wide text-base py-4 px-8 rounded-full transition-all duration-200 bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] shadow-[0_2px_8px_hsl(var(--gold)/0.25)] hover:bg-[hsl(40,55%,48%)] hover:shadow-lg">Book Now</button>
                    <a href={`tel:${CYPRESS_PHONE}`} onClick={() => trackPhoneClick(CYPRESS_PHONE)} className="flex-1 btn-secondary flex items-center justify-center gap-1.5 text-base py-4 px-8 rounded-full"><Phone className="w-4 h-4" />{CYPRESS_PHONE_FORMATTED}</a>
                  </div>
                  <p className="text-[11px] font-sans text-muted-foreground mb-2">Booking takes less than 60 seconds</p>
                  <p className="text-xs font-sans text-muted-foreground mb-4">
                    <Check className="w-3.5 h-3.5 inline text-primary mr-0.5" />Confirmed in 1 hour
                    <span className="mx-2 text-border">·</span>
                    <Check className="w-3.5 h-3.5 inline text-primary mr-0.5" />Insurance accepted
                    <span className="mx-2 text-border">·</span>
                    <Check className="w-3.5 h-3.5 inline text-primary mr-0.5" />0% financing
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-sans text-muted-foreground">
                    <div className="flex gap-px">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4A853] text-[#D4A853]" />)}</div>
                    <span className="font-bold text-foreground text-base">4.9</span>
                    <span>from 5,000+ verified reviews</span>
                  </div>
                </div>
                <div className="aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative">
                  <video
                    src={HERO_VIDEO_URL}
                    autoPlay loop muted playsInline preload="metadata"
                    poster={OFFICE_IMAGES.homepageHero}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 — CREDIBILITY BAR */}
        <CredibilityBar />

        {/* 3 — SERVICES CAROUSEL */}
        <ScrollReveal>
          <ServicesCarousel locationPrefix="/services" />
        </ScrollReveal>

        {/* 4 — FULL-WIDTH PHOTO BREAK */}
        <FullWidthPhotoBreak
          src={OFFICE_IMAGES.waitingRoom}
          alt="Smile Avenue modern waiting room with 3D accent wall and leather sofas"
          overlayText="Care That Feels Like Home"
          overlaySubtext="Warm blankets. Netflix in every room. No judgment, ever."
          height="h-56 md:h-80"
        />

        {/* 5 — SMILE AVENUE DIFFERENCE */}
        <ScrollReveal>
          <SmileAvenueDifference onBook={() => setBookingModalOpen(true)} />
        </ScrollReveal>

        {/* 6 — TESTIMONIALS */}
        <LazySection>
          <TestimonialCarousel />
        </LazySection>

        {/* 7 — LOCATIONS */}
        <LazySection>
          <ScrollReveal>
            <HomepageLocations />
          </ScrollReveal>
        </LazySection>

        {/* 8 — INSURANCE (tabbed) */}
        <LazySection>
          <HomepageInsurance />
        </LazySection>

        {/* 9 — DOCTORS / CLINICAL TEAM */}
        <LazySection>
          <ScrollReveal>
            <HomepageDoctors />
          </ScrollReveal>
        </LazySection>

        {/* 10 — FREE CONSULTATION CTA */}
        <section className="py-12 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div>
                <p className="kicker mb-1">CONSIDERING A SMILE MAKEOVER?</p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                  Get a Free Consultation — No Obligation
                </h3>
                <p className="text-sm font-body text-muted-foreground">
                  Implants, veneers, Invisalign, or cosmetic dentistry — get a personalized treatment plan at no cost.
                </p>
              </div>
              <Link to="/free-consultation" className="btn-primary shrink-0 w-full sm:w-auto">
                Claim Your Free Visit
              </Link>
            </div>
          </div>
        </section>

        {/* 11 — BLOG */}
        <section className="hidden sm:block section-padding bg-background">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Blog</h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:underline">
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <BlogDesktopGrid
                posts={BLOG_POSTS.slice(0, 3)}
                variant="image"
                categoryColors={BLOG_CATEGORY_COLORS}
                categoryImages={BLOG_CATEGORY_IMAGES}
                fallbackImage={BLOG_FALLBACK_IMAGE}
              />
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl="" />
      <ScrollBookingPrompt bookingUrl="https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress" />
      <Footer />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <ExitIntentPopup />
    </>
  );
};

export default Home;
