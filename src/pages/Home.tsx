import { Link } from "react-router-dom";
import BlogCardCarousel from "@/components/BlogCardCarousel";
import BlogDesktopGrid from "@/components/BlogDesktopGrid";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, Shield, Sparkles, SmilePlus, Zap, AlertCircle, Pill, Phone, Check, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { BLOG_CATEGORY_IMAGES, BLOG_CATEGORY_COLORS, BLOG_FALLBACK_IMAGE } from "@/lib/blog-styles";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import BookingLocationModal from "@/components/BookingLocationModal";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import ScrollReveal from "@/components/ScrollReveal";
import LazySection from "@/components/LazySection";
import { DOCTOR_IMAGES, OFFICE_IMAGES, HERO_VIDEO_URL } from "@/lib/images";
import CredibilityBar from "@/components/CredibilityBar";
import SmileAvenueDifference from "@/components/SmileAveneDifference";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TaglineBanner from "@/components/TaglineBanner";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";

const services = [
  { title: "Dental Implants", description: "Replace missing teeth permanently.", slug: "dental-implants", icon: <SmilePlus className="w-6 h-6" /> },
  { title: "Cosmetic Dentistry", description: "Veneers, whitening, and complete smile makeovers.", slug: "cosmetic-dentistry", icon: <Sparkles className="w-6 h-6" /> },
  { title: "Invisalign®", description: "Straighter teeth in months — no metal brackets.", slug: "invisalign", icon: <Zap className="w-6 h-6" /> },
  { title: "Emergency Dentistry", description: "Toothache or broken tooth? We'll see you today.", slug: "emergency-dentist", icon: <AlertCircle className="w-6 h-6" /> },
  { title: "Preventive Care", description: "Gentle cleanings to protect your family's smiles.", slug: "dental-cleaning", icon: <Shield className="w-6 h-6" /> },
  { title: "Sedation Dentistry", description: "Nervous? Relax completely with sedation options.", slug: "sedation-dentistry", icon: <Pill className="w-6 h-6" /> },
];

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", role: "Founder", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", role: "General Dentist", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", role: "General Dentist", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  { name: "Dr. Sameer Bilal", credentials: "DDS", role: "General & Cosmetic Dentist", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", role: "General Dentist", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  { name: "Dr. Shayan Alkhiro", credentials: "DDS", role: "General Dentist", href: "/doctors/shayan-alkhiro-dds", imgKey: "shayan-alkhiro" },
];

const faqs = [
  { question: "What locations do you serve?", answer: "We have two convenient offices — one in Cypress, TX (9212 Fry Rd) and one in Katy, TX (23541 Westheimer Pkwy). We serve families throughout the greater Houston area." },
  { question: "Do you accept dental insurance?", answer: "Yes! We accept most major PPO plans including Aetna, BCBS, Cigna, Delta Dental, MetLife, and more. We also offer financing through CareCredit and Sunbit, plus an in-house membership plan for uninsured patients." },
  { question: "Do you offer same-day appointments?", answer: "Yes. We offer same-day appointments for emergencies and often have availability for routine visits as well. Call us to check availability." },
  { question: "What ages do you treat?", answer: "We treat patients of all ages — from toddlers to seniors. Our team includes specialists in pediatric dentistry and geriatric dental care." },
  { question: "What makes Smile Avenue different?", answer: "We combine modern technology (digital scanners, in-house dental lab, 3D imaging) with a hospitality-driven experience. Think Netflix in every room, warm blankets, and a team that genuinely cares about your comfort." },
];

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
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000", bestRating: "5", worstRating: "1" },
          sameAs: ["https://www.facebook.com/smileavenuedentistry", "https://www.instagram.com/smileavenuedentistry", "https://g.page/smileavenuedentistry"]
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
        {/* HERO — Tend-inspired editorial on mobile, two-col on desktop */}
        <section className="bg-background">
          {/* ── MOBILE HERO ── */}
          <div className="lg:hidden px-5 pt-8 pb-10 text-center">
            {/* Logo mark as brand anchor */}
            <img src="/logo-mark.png" alt="" className="w-16 h-16 mx-auto mb-5 rounded-full shadow-sm" width={64} height={64} />

            <h1 className="font-display text-[2rem] leading-[1.12] font-bold text-foreground mb-5">
              A Dentist That{" "}
              <em className="not-italic text-primary">Feels Like Home</em>
            </h1>

            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground mb-4 max-w-[340px] mx-auto">
              Caring for yourself starts with your smile. At Smile Avenue, we deliver exceptional dental care that treats your oral health as an essential part of your overall well-being.
            </p>
            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground mb-8 max-w-[340px] mx-auto">
              Warm blankets, Netflix in every room, and a team that listens first. Whether it's been 6 months or 6 years — <strong className="text-foreground font-semibold">no judgment, ever.</strong>
            </p>

            {/* CTAs */}
            <div className="flex gap-2.5 max-w-[300px] mx-auto mb-5">
              <button onClick={() => setBookingModalOpen(true)} className="flex-1 inline-flex items-center justify-center font-sans font-bold tracking-wide text-[15px] py-3 rounded-full bg-primary text-primary-foreground transition-all">Book Now</button>
              <a href={`tel:${CYPRESS_PHONE}`} className="flex-1 btn-secondary flex items-center justify-center gap-1.5 text-[15px] py-3 rounded-full"><Phone className="w-4 h-4" />Call Us</a>
            </div>

            {/* Circular doctor photos — peeking strip */}
            <div className="flex justify-center -space-x-2 mb-5">
              {doctors.slice(0, 4).map((doc) => {
                const img = DOCTOR_IMAGES[doc.imgKey];
                return (
                  <img key={doc.imgKey} src={img.url} alt={img.alt} className="w-11 h-11 rounded-full border-2 border-background object-cover" loading="eager" width={44} height={44} />
                );
              })}
              <div className="w-11 h-11 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center text-[11px] font-sans font-semibold text-primary">+2</div>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-1 text-xs font-sans text-muted-foreground">
              <div className="flex gap-px">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}</div>
              <span className="font-semibold text-foreground">4.9</span>
              <span>from 5,000+ verified reviews</span>
            </div>
          </div>

          {/* ── DESKTOP HERO ── */}
          <div className="hidden lg:block px-8 py-20">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <p className="kicker mb-2 text-xs">5,000+ FAMILIES TRUST US WITH THEIR SMILES</p>
                  <h1 className="font-display text-5xl lg:text-[3.75rem] font-bold leading-[1.1] mb-4 text-foreground">A Dentist That <em className="not-italic text-primary">Feels Like Home</em></h1>
                  <p className="font-body text-lg leading-relaxed text-muted-foreground mb-8">
                    Warm blankets, Netflix in every room, and a team that listens first. Whether it's been 6 months or 6 years — <strong className="text-foreground font-semibold">no judgment, ever.</strong>
                  </p>
                  <div className="flex gap-3 mb-3 max-w-sm">
                    <button onClick={() => setBookingModalOpen(true)} className="flex-1 inline-flex items-center justify-center font-sans font-bold tracking-wide text-base py-4 px-8 rounded-full transition-all duration-200 bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] shadow-[0_2px_8px_hsl(var(--gold)/0.25)] hover:bg-[hsl(40,55%,48%)]">Book Now</button>
                    <a href={`tel:${CYPRESS_PHONE}`} className="flex-1 btn-secondary flex items-center justify-center gap-1.5 text-base py-4 px-8 rounded-full"><Phone className="w-4 h-4" />{CYPRESS_PHONE_FORMATTED}</a>
                  </div>
                  <p className="text-xs font-sans text-muted-foreground mb-2">
                    <Check className="w-3.5 h-3.5 inline text-primary mr-0.5" />Confirmed in 1 hour
                    <span className="mx-2 text-border">·</span>
                    <Check className="w-3.5 h-3.5 inline text-primary mr-0.5" />Insurance accepted
                    <span className="mx-2 text-border">·</span>
                    <Check className="w-3.5 h-3.5 inline text-primary mr-0.5" />0% financing
                  </p>
                  <div className="flex items-center gap-1 text-sm font-sans text-muted-foreground">
                    <div className="flex gap-px">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
                    <span className="font-semibold text-foreground">4.9</span>
                    <span>from 5,000+ verified reviews</span>
                  </div>
                </div>
                {/* Desktop hero video */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
                  <video
                    src={HERO_VIDEO_URL}
                    autoPlay loop muted playsInline preload="metadata"
                    poster={OFFICE_IMAGES.homepageHero}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-foreground/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CREDIBILITY BAR */}
        <CredibilityBar />

        {/* SERVICES — Brand-global links */}
        <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">WHAT WE DO</p>
            <h2 className="section-heading text-center">Everything Your Family Needs, Under One Roof</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-5 mt-8 sm:mt-10 max-w-4xl mx-auto">
              {services.map((s, i) => (
                <Link
                  key={i}
                  to={`/services/${s.slug}`}
                  className="flex flex-col items-center text-center gap-2 sm:flex-row sm:items-start sm:text-left sm:gap-5 bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-muted flex items-center justify-center shrink-0 text-muted-foreground transition-colors [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] sm:text-lg font-bold text-primary mb-0.5 sm:mb-1">{s.title}</h3>
                    <p className="text-xs sm:text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="btn-secondary">View All Services</Link>
            </div>
          </div>
        </section>
        </ScrollReveal>


        {/* THE SMILE AVENUE DIFFERENCE */}
        <ScrollReveal>
          <SmileAvenueDifference onBook={() => setBookingModalOpen(true)} />
        </ScrollReveal>

        {/* TESTIMONIALS CAROUSEL — Social proof before FAQ */}
        <LazySection>
          <TestimonialCarousel />
        </LazySection>

        {/* DOCTORS */}
        <LazySection>
          <ScrollReveal>
            <section className="section-padding section-alt">
              <div className="container mx-auto">
                <p className="kicker text-center">YOUR CARE TEAM</p>
                <h2 className="section-heading text-center">Meet the Doctors Behind Your Smile</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
                  {doctors.map((doc, i) => {
                    const img = DOCTOR_IMAGES[doc.imgKey];
                    return (
                      <Link key={i} to={doc.href} className="text-center group">
                        <div className="w-24 h-24 rounded-full mx-auto mb-3 group-hover:ring-4 ring-primary/20 transition-all overflow-hidden">
                          <img src={img.url} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={96} height={96} />
                        </div>
                        <h3 className="font-sans text-sm font-semibold text-foreground">{doc.name}</h3>
                        <p className="text-xs font-sans text-muted-foreground">{doc.credentials}</p>
                        <p className="text-xs font-sans text-primary mt-1">{doc.role}</p>
                      </Link>
                    );
                  })}
                </div>
                <div className="text-center mt-8">
                  <Link to="/doctors" className="btn-secondary">Meet All Doctors</Link>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </LazySection>

        {/* FREE CONSULTATION CTA */}
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
              <Link to="/free-consultation" className="btn-primary shrink-0">
                Claim Your Free Visit
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ — Objection handling at the end */}
        <LazySection>
          <section className="section-padding gradient-cta">
            <div className="container mx-auto max-w-3xl">
              <p className="kicker text-center text-white/70">FAQ</p>
              <h2 className="section-heading text-center text-white">Frequently Asked Questions</h2>
              <div className="mt-10"><FaqAccordion items={faqs} variant="dark" /></div>
            </div>
          </section>
        </LazySection>

        {/* Blog */}
        <section className="section-padding bg-background">
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
              <BlogCardCarousel
                posts={BLOG_POSTS.slice(0, 3)}
                categoryColors={BLOG_CATEGORY_COLORS}
                categoryImages={BLOG_CATEGORY_IMAGES}
                fallbackImage={BLOG_FALLBACK_IMAGE}
              />
              <BlogDesktopGrid
                posts={BLOG_POSTS.slice(0, 3)}
                variant="image"
                categoryColors={BLOG_CATEGORY_COLORS}
                categoryImages={BLOG_CATEGORY_IMAGES}
                fallbackImage={BLOG_FALLBACK_IMAGE}
              />
            </div>
            <Link to="/blog" className="sm:hidden flex items-center justify-center gap-1.5 mt-6 text-sm font-sans font-medium text-primary hover:underline">
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl="" />
      <Footer />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};

export default Home;
