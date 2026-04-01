import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, Shield, Sparkles, SmilePlus, Zap, AlertCircle, Pill, MapPin, Phone, Clock, Check, ChevronRight, ChevronLeft, ArrowRight, Play } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { useRef, useState } from "react";
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
import { DOCTOR_IMAGES, OFFICE_IMAGES, VIDEO_TESTIMONIALS, HERO_VIDEO_URL } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";
import CredibilityBar from "@/components/CredibilityBar";
import SmileAvenueDifference from "@/components/SmileAveneDifference";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ServicesCarousel from "@/components/ServicesCarousel";
import TaglineBanner from "@/components/TaglineBanner";
import LocationCard from "@/components/LocationCard";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", role: "Founder", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", role: "General Dentist", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", role: "General Dentist", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  { name: "Dr. Sameer Bilal", credentials: "DDS", role: "General Dentist", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", role: "Dentist", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  { name: "Dr. Shayan Alkhiro", credentials: "DDS", role: "Dentist", href: "/doctors/shayan-alkhiro-dds", imgKey: "shayan-alkhiro" },
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

        {/* ═══ 1. HERO — Emotion-first ═══ */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#1a1a2e" }}>
          {/* Background video/image */}
          <div className="absolute inset-0">
            <video
              src={HERO_VIDEO_URL}
              autoPlay loop muted playsInline preload="metadata"
              poster={OFFICE_IMAGES.homepageHero}
              className="hidden lg:block w-full h-full object-cover opacity-30"
            />
            <img
              src={OFFICE_IMAGES.homepageHero}
              alt=""
              className="lg:hidden w-full h-full object-cover opacity-25"
              fetchPriority="high"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#1a1a2e]/80 to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative z-10">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
                You'll actually look forward to this.
              </h1>
              <p className="font-body text-base md:text-lg leading-relaxed mb-8 text-white/70">
                Hospitality-driven dental care for the whole family — with no judgment, ever.
              </p>

              {/* Location selector */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-sans font-medium text-white/50">Your location:</span>
                <button onClick={() => setHeroLoc("cypress")} className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-colors ${heroLoc === "cypress" ? "bg-white/20 text-white" : "text-white/50 hover:text-white/70"}`}>Cypress</button>
                <button onClick={() => setHeroLoc("katy")} className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-colors ${heroLoc === "katy" ? "bg-white/20 text-white" : "text-white/50 hover:text-white/70"}`}>Katy</button>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-200 font-sans hover:opacity-90"
                  style={{ backgroundColor: "hsl(40 63% 58%)", color: "#fff" }}
                >
                  Book an Appointment
                </button>
                <a
                  href={`tel:${heroPhone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-200 font-sans border-2 border-white/40 text-white hover:bg-white/10"
                >
                  <Phone className="w-4 h-4" />{heroPhoneFmt}
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm font-sans text-white/60">
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[hsl(40,63%,58%)] text-[hsl(40,63%,58%)]" />)}</div>
                <span className="font-semibold text-white">4.9</span>
                <span>from 5,000+ reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. CREDIBILITY BAR ═══ */}
        <CredibilityBar />

        {/* ═══ 3. SERVICES CAROUSEL ═══ */}
        <ServicesCarousel locationPrefix={locationPrefix} />

        {/* ═══ 4. THE SMILE AVENUE DIFFERENCE ═══ */}
        <ScrollReveal>
          <SmileAvenueDifference onBook={() => setBookingModalOpen(true)} />
        </ScrollReveal>

        {/* TECHNOLOGY TRUST */}
        <ScrollReveal>
          <TechnologyTrust />
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

        {/* ═══ 8. TAGLINE BANNER ═══ */}
        <TaglineBanner onBook={() => setBookingModalOpen(true)} />

        {/* ═══ 5. TESTIMONIALS CAROUSEL ═══ */}
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

        {/* ═══ 6. LOCATIONS WITH LIVE STATUS ═══ */}
        <LazySection>
          <section className="section-padding bg-background">
            <div className="container mx-auto">
              <p className="kicker text-center">TWO CONVENIENT LOCATIONS</p>
              <h2 className="section-heading text-center">Find Your Nearest Office</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
                <LocationCard
                  name="Smile Avenue Cypress"
                  address="9212 Fry Rd #120, Cypress, TX 77433"
                  phone="(832) 648-1756"
                  phoneRaw="8326481756"
                  hours="Mon–Fri 8:30am–5pm"
                  image={OFFICE_IMAGES.cypressHero}
                  bookingUrl={CYPRESS_BOOKING}
                  reviewCount="3,000+"
                />
                <LocationCard
                  name="Smile Avenue Katy"
                  address="23541 Westheimer Pkwy Ste #170, Katy, TX 77494"
                  phone="(281) 800-5008"
                  phoneRaw="2818005008"
                  hours="Mon–Fri 8:30am–5pm"
                  satHours="Sat 8am–2pm"
                  image={OFFICE_IMAGES.katyHero}
                  bookingUrl={KATY_BOOKING}
                  reviewCount="2,000+"
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* VIDEO TESTIMONIALS */}
        <LazySection>
          <section className="section-padding section-alt">
            <div className="container mx-auto">
              <p className="kicker text-center">REAL PATIENTS, REAL STORIES</p>
              <h2 className="section-heading text-center">Hear It Directly from Our Patients</h2>
              <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
                {VIDEO_TESTIMONIALS.slice(0, 4).map((vid, i) => (
                  <LazyYouTube key={i} videoId={vid.youtubeId} title={vid.title} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/patient-testimonials" className="btn-secondary">See All Patient Stories</Link>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection>
          <InsuranceLogoBar />
        </LazySection>

        {/* SMILE GALLERY CTA */}
        <LazySection>
          <section className="section-padding section-alt">
            <div className="container mx-auto text-center max-w-2xl">
              <p className="kicker">REAL RESULTS</p>
              <h2 className="section-heading">See Real Patient Transformations</h2>
              <p className="section-body">Browse before-and-after photos from real Smile Avenue patients — dental implants, veneers, Invisalign, and more.</p>
              <Link to="/smile-gallery" className="btn-primary">View Smile Gallery</Link>
            </div>
          </section>
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
                <p className="text-sm font-sans font-semibold uppercase tracking-wider text-primary mb-2">From Our Blog</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Dental Tips & Insights</h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:underline">
                View all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 px-6 py-8">
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm font-body text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs font-sans text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
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
