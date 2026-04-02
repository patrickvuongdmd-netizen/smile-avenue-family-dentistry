import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, Shield, Sparkles, SmilePlus, Zap, AlertCircle, Pill, Phone, Check, ArrowRight, Play } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import categoryImplants from "@/assets/blog/category-implants.jpg";
import categoryCosmetic from "@/assets/blog/category-cosmetic.jpg";
import categoryEmergency from "@/assets/blog/category-emergency.jpg";
import categoryInvisalign from "@/assets/blog/category-invisalign.jpg";
import categoryPediatric from "@/assets/blog/category-pediatric.jpg";
import categorySedation from "@/assets/blog/category-sedation.jpg";
import categoryPreventive from "@/assets/blog/category-preventive.jpg";

const BLOG_CATEGORY_IMAGES: Record<string, string> = {
  Implants: categoryImplants,
  Cosmetic: categoryCosmetic,
  Emergency: categoryEmergency,
  Invisalign: categoryInvisalign,
  Pediatric: categoryPediatric,
  Sedation: categorySedation,
  Preventive: categoryPreventive,
};

const BLOG_CATEGORY_COLORS: Record<string, { bg: string; badge: string; text: string }> = {
  Implants: { bg: "bg-[hsl(192,40%,92%)]", badge: "bg-[hsl(192,72%,55%)]/15 text-[hsl(192,78%,33%)]", text: "text-[hsl(192,78%,33%)]" },
  Cosmetic: { bg: "bg-[hsl(340,30%,93%)]", badge: "bg-[hsl(340,60%,60%)]/15 text-[hsl(340,60%,40%)]", text: "text-[hsl(340,60%,40%)]" },
  Emergency: { bg: "bg-[hsl(20,40%,92%)]", badge: "bg-[hsl(20,80%,55%)]/15 text-[hsl(20,70%,38%)]", text: "text-[hsl(20,70%,38%)]" },
  Invisalign: { bg: "bg-[hsl(160,30%,92%)]", badge: "bg-[hsl(160,50%,45%)]/15 text-[hsl(160,50%,32%)]", text: "text-[hsl(160,50%,32%)]" },
  Pediatric: { bg: "bg-[hsl(45,50%,92%)]", badge: "bg-[hsl(45,70%,50%)]/15 text-[hsl(45,70%,32%)]", text: "text-[hsl(45,70%,32%)]" },
  Sedation: { bg: "bg-[hsl(260,30%,93%)]", badge: "bg-[hsl(260,50%,60%)]/15 text-[hsl(260,50%,40%)]", text: "text-[hsl(260,50%,40%)]" },
  Preventive: { bg: "bg-[hsl(140,30%,92%)]", badge: "bg-[hsl(140,45%,45%)]/15 text-[hsl(140,45%,30%)]", text: "text-[hsl(140,45%,30%)]" },
};
import { useRef, useState } from "react";

import OfficePhotoGrid from "@/components/OfficePhotoGrid";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import BookingLocationModal from "@/components/BookingLocationModal";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import TechnologyTrust from "@/components/TechnologyTrust";
import ScrollReveal from "@/components/ScrollReveal";
import InsuranceLogoBar from "@/components/InsuranceLogoBar";
import LazySection from "@/components/LazySection";
import { DOCTOR_IMAGES, OFFICE_IMAGES, VIDEO_TESTIMONIALS, HERO_VIDEO_URL, SERVICE_IMAGES } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";
import CredibilityBar from "@/components/CredibilityBar";
import SmileAvenueDifference from "@/components/SmileAveneDifference";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import LocationCard from "@/components/LocationCard";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";

const trustStats = [
  { value: "5,000+", label: "Five-Star Google Reviews" },
  { value: "Most", label: "Insurance Plans Accepted" },
  { value: "Same-Day", label: "Appointments Available" },
  { value: "2", label: "Convenient Locations" },
];

const services = [
  { title: "Dental Implants", description: "Replace missing teeth permanently.", slug: "dental-implants", icon: <SmilePlus className="w-6 h-6" />, imgKey: "dental-implants" },
  { title: "Cosmetic Dentistry", description: "Veneers, whitening, and complete smile makeovers.", slug: "cosmetic-dentistry", icon: <Sparkles className="w-6 h-6" />, imgKey: "cosmetic-dentistry" },
  { title: "Invisalign®", description: "Straighter teeth in months — no metal brackets.", slug: "invisalign", icon: <Zap className="w-6 h-6" />, imgKey: "invisalign" },
  { title: "Emergency Dentistry", description: "Toothache or broken tooth? We'll see you today.", slug: "emergency-dentist", icon: <AlertCircle className="w-6 h-6" />, imgKey: "emergency-dentist" },
  { title: "Preventive Care", description: "Gentle cleanings to protect your family's smiles.", slug: "dental-cleaning", icon: <Shield className="w-6 h-6" />, imgKey: "dental-cleaning" },
  { title: "Sedation Dentistry", description: "Nervous? Relax completely with sedation options.", slug: "sedation-dentistry", icon: <Pill className="w-6 h-6" />, imgKey: "sedation-dentistry" },
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
  const [heroLoc, setHeroLoc] = useState<"cypress" | "katy">("cypress");
  const [mobileHeroPlaying, setMobileHeroPlaying] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const pillCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: "left" | "right") => {
    const el = pillCarouselRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  const heroPhone = heroLoc === "cypress" ? CYPRESS_PHONE : "2818005008";
  const heroPhoneFmt = heroLoc === "cypress" ? CYPRESS_PHONE_FORMATTED : "(281) 800-5008";
  const heroBooking = heroLoc === "cypress" ? CYPRESS_BOOKING : KATY_BOOKING;
  const locationPrefix = heroLoc === "katy" ? "/katy-tx" : "/cypress-tx";

  useDocTitle("Smile Avenue Family Dentistry | Dentist in Cypress & Katy, TX");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Smile Avenue Family Dentistry | Dentist in Cypress & Katy, TX</title>
        <meta name="description" content="Smile Avenue Family Dentistry — your trusted family dentist in Cypress and Katy, TX. 5,000+ five-star reviews. Same-day appointments. Book online today." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/" />
        <meta property="og:title" content="Smile Avenue Family Dentistry | Dentist in Cypress & Katy, TX" />
        <meta property="og:description" content="Smile Avenue Family Dentistry — your trusted family dentist in Cypress and Katy, TX. 5,000+ five-star reviews. Same-day appointments." />
        <meta property="og:image" content={OFFICE_IMAGES.homepageHero} />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smile Avenue Family Dentistry | Dentist in Cypress & Katy, TX" />
        <meta name="twitter:description" content="Smile Avenue Family Dentistry — your trusted family dentist in Cypress and Katy, TX. 5,000+ five-star reviews." />
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
      <Navbar phone={heroPhone} phoneFormatted={heroPhoneFmt} bookingUrl={heroBooking} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO — Original two-column layout */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-20 bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div>
                <p className="kicker mb-2">FAMILY DENTIST IN CYPRESS & KATY, TX</p>
                <h1 className="font-display text-[1.75rem] md:text-5xl lg:text-[3.75rem] font-bold leading-[1.1] mb-3 md:mb-4 text-foreground">Your Family Deserves a Dentist Who <em className="not-italic text-primary">Actually Cares</em></h1>
                <p className="font-body text-base md:text-lg leading-relaxed mb-4 md:mb-8 text-muted-foreground">Whether it's been 6 months or 6 years, we make it easy — with no judgment, ever. Netflix in every room, warm blankets, and doctors who listen first and treat second.</p>
                {/* Location selector */}
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="text-xs font-sans font-medium text-muted-foreground">Your location:</span>
                  <button onClick={() => setHeroLoc("cypress")} className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-colors ${heroLoc === "cypress" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>Cypress</button>
                  <button onClick={() => setHeroLoc("katy")} className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-colors ${heroLoc === "katy" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>Katy</button>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-2 md:mb-3">
                  <button onClick={() => setBookingModalOpen(true)} className="btn-cta text-sm md:text-base !px-5 !py-3 md:!px-8 md:!py-4 w-full sm:w-auto">Book Online</button>
                  <a href={`tel:${heroPhone}`} className="btn-secondary flex items-center justify-center gap-2 text-sm md:text-base !px-5 !py-3 md:!px-8 md:!py-4 w-full sm:w-auto"><Phone className="w-4 h-4" />{heroPhoneFmt}</a>
                </div>
                <p className="text-[11px] md:text-xs font-sans text-muted-foreground mb-2 md:mb-3">
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 inline text-primary mr-0.5" />Confirmed in 1 hour
                  <span className="mx-1.5 md:mx-2 text-border">·</span>
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 inline text-primary mr-0.5" />Insurance accepted
                  <span className="mx-1.5 md:mx-2 text-border">·</span>
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 inline text-primary mr-0.5" />0% financing
                </p>
                <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-sans text-muted-foreground">
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-primary text-primary" />)}</div>
                  <span className="font-semibold text-foreground">4.9</span>
                  <span>from 5,000+ reviews</span>
                </div>

                {/* Intent Quick-Paths */}
                <div className="hidden md:flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
                  <Link to="/patients/new-patient-hub" className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-sans font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all">
                    <Check className="w-3.5 h-3.5 text-primary" /> New Patient? Start Here
                  </Link>
                  <Link to={`${locationPrefix}/emergency-dentist`} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/10 text-xs font-sans font-bold text-foreground hover:bg-foreground/10 transition-all">
                    <AlertCircle className="w-3.5 h-3.5" /> Dental Emergency
                  </Link>
                  <Link to="/insurance" className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-sans font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all">
                    <Shield className="w-3.5 h-3.5 text-primary" /> Check Insurance
                  </Link>
                  <Link to="/free-consultation" className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-sans font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-all">
                    <Sparkles className="w-3.5 h-3.5 text-primary" /> Free Consultation
                  </Link>
                </div>
              </div>
              {/* Hero media */}
              <div className="aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
                <video
                  src={HERO_VIDEO_URL}
                  autoPlay loop muted playsInline preload="metadata"
                  poster={OFFICE_IMAGES.homepageHero}
                  className="hidden lg:block w-full h-full object-cover"
                />
                <div className="lg:hidden w-full h-full">
                  {mobileHeroPlaying ? (
                    <video src={HERO_VIDEO_URL} autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover" />
                  ) : (
                    <button onClick={() => setMobileHeroPlaying(true)} className="w-full h-full relative group cursor-pointer" aria-label="Play office tour video">
                      <img src={OFFICE_IMAGES.homepageHero} alt="Smile Avenue Family Dentistry office — modern, welcoming dental practice in Cypress and Katy, TX" className="w-full h-full object-cover" fetchPriority="high" width={800} height={600} />
                      <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-foreground/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>


        {/* CREDIBILITY BAR */}
        <CredibilityBar />

        {/* SERVICES — Clean card grid inspired by Tend */}
        <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">WHAT WE DO</p>
            <h2 className="section-heading text-center">Everything Your Family Needs, Under One Roof</h2>
            <div className="grid sm:grid-cols-2 gap-5 mt-10 max-w-4xl mx-auto">
              {services.map((s, i) => (
                <Link
                  key={i}
                  to={`/${heroLoc === "katy" ? "katy" : "cypress"}-tx/${s.slug}`}
                  className="flex items-start gap-5 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0 text-muted-foreground transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary mb-1">{s.title}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
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




        {/* FAQ */}
        <LazySection>
          <section className="section-padding gradient-cta">
            <div className="container mx-auto max-w-3xl">
              <p className="kicker text-center text-white/70">FAQ</p>
              <h2 className="section-heading text-center text-white">Frequently Asked Questions</h2>
              <div className="mt-10"><FaqAccordion items={faqs} variant="dark" /></div>
            </div>
          </section>
        </LazySection>

        {/* TESTIMONIALS CAROUSEL */}
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

        {/* Blog */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Blog</h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 btn-cta !text-sm !px-6 !py-3">
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_POSTS.slice(0, 3).map((post) => {
                const colors = BLOG_CATEGORY_COLORS[post.category] || BLOG_CATEGORY_COLORS.Implants;
                return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Featured image with tinted overlay */}
                  <div className={`aspect-[16/10] relative overflow-hidden ${colors.bg}`}>
                    <img
                      src={BLOG_CATEGORY_IMAGES[post.category] || categoryImplants}
                      alt={post.title}
                      loading="lazy"
                      width={800}
                      height={512}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[11px] font-sans font-bold uppercase tracking-widest backdrop-blur-sm px-3 py-1 rounded-full ${colors.badge}`}>{post.category}</span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="flex-1 bg-card border border-t-0 border-border/50 rounded-b-2xl p-6 flex flex-col">
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm font-body text-muted-foreground line-clamp-2 mb-5 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs font-sans text-muted-foreground pt-4 border-t border-border/50">
                      <span className="font-semibold text-foreground">{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
                );
              })}
            </div>
            <Link to="/blog" className="sm:hidden flex items-center justify-center gap-1.5 mt-6 text-sm font-sans font-medium text-primary hover:underline">
              View all posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={heroPhone} phoneFormatted={heroPhoneFmt} bookingUrl={heroBooking} />
      <Footer />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};

export default Home;
