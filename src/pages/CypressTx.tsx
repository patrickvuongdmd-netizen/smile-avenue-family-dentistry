import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Check, Shield, Sparkles, Zap, SmilePlus, AlertCircle, Pill, Star, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import CredibilityBar from "@/components/CredibilityBar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

import DoctorCard from "@/components/DoctorCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import BookingLocationModal from "@/components/BookingLocationModal";
import { OFFICE_IMAGES, PAGE_VIDEOS, CYPRESS_HERO_PHOTOS } from "@/lib/images";
import HeroPhotoCarousel from "@/components/HeroPhotoCarousel";
import LazyYouTube from "@/components/LazyYouTube";
import VideoCarousel from "@/components/VideoCarousel";
import { BLOG_POSTS } from "@/lib/blog-data";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const CYPRESS_MAPS = "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Founder — cutting-edge implant, sedation & digital dentistry with a values-first approach.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", bio: "15+ years of gentle, education-focused care. NYU trained.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Precision, calm demeanor & passion for restorative care.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Community-centered care with a heart for education & volunteerism.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  { name: "Dr. Shayan Alkhiro", credentials: "DDS", bio: "Multilingual, judgment-free dentistry with a global perspective.", href: "/doctors/shayan-alkhiro-dds", imgKey: "shayan-alkhiro" },
];

const services = [
  { title: "Preventive Dentistry", description: "Cleanings, exams, and proactive care to keep your smile healthy.", href: "/cypress-tx/preventive-dentistry", icon: <Shield className="w-5 h-5" /> },
  { title: "Cosmetic Dentistry", description: "Veneers, whitening, and smile design for a confident new look.", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Dental Implants", description: "Permanent tooth replacement that looks and functions like natural teeth.", href: "/cypress-tx/dental-implants", icon: <SmilePlus className="w-5 h-5" /> },
  { title: "Invisalign®", description: "Clear aligners for a straighter smile without traditional braces.", href: "/cypress-tx/invisalign", icon: <Zap className="w-5 h-5" /> },
  { title: "Emergency Dentistry", description: "Same-day urgent care when you need it most.", href: "/cypress-tx/emergency-dentist", icon: <AlertCircle className="w-5 h-5" /> },
  { title: "Sedation Dentistry", description: "Relaxed, anxiety-free dental care for nervous patients.", href: "/cypress-tx/sedation-dentistry", icon: <Pill className="w-5 h-5" /> },
];

const testimonials = [
  { quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time. Everyone in here is just very nice and friendly.", name: "Thao H.", source: "Google Review", location: "Fairfield, Cypress" },
  { quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home. I was offered a cozy blanket and my choice of Netflix! AMAZING!", name: "Kashayn P.", source: "Google Review", location: "Towne Lake, Cypress" },
  { quote: "I absolutely love coming to Smile Dentistry! The employees are nice, friendly, and care for the patients. I'm pleased once again with my visit to Smile Dentistry.", name: "Shon M.", source: "Google Review", location: "Bridgeland, Cypress" },
];

const faqs = [
  { question: "Where exactly is Smile Avenue Cypress located?", answer: "We're at 9212 Fry Rd #120, Cypress, TX 77433 — directly across from the HEB on Fry Road, just south of the Fry Road and Jones Road intersection. We're minutes from Bridgeland, Towne Lake, Fairfield, and Cy-Fair." },
  { question: "What insurance plans do you accept at the Cypress location?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana. Our team will verify your benefits before your visit — no surprise bills." },
  { question: "Do you offer same-day emergency dental appointments in Cypress?", answer: "Yes. If you're experiencing a dental emergency — toothache, broken tooth, knocked-out tooth, or swelling — call us at (832) 648-1756 and we'll do our best to see you the same day. We keep emergency slots available daily." },
  { question: "What are the office hours for the Cypress dental office?", answer: "We're open Monday through Friday, 8:30am to 5pm, with Saturday appointments available by request. We also offer early morning availability for patients who need to get in before work or school." },
  { question: "Is Smile Avenue a good dentist for kids in Cypress?", answer: "Absolutely. We treat patients of all ages — from first-tooth toddlers to grandparents. Our CFISD families love our gentle approach to pediatric dentistry, plus our kid-friendly amenities like Netflix and cozy blankets make every visit fun." },
  { question: "Do you offer dental implants at the Cypress office?", answer: "Yes. Our Cypress office offers full-service dental implant treatment, including single implants, implant bridges, and All-on-X full-arch restorations. With our in-house dental lab, we can fabricate your custom restoration faster than practices that outsource." },
  { question: "What's different about Smile Avenue compared to other Cypress dentists?", answer: "We combine modern technology (digital scanners, 3D imaging, in-house dental lab) with a hospitality-first experience. Every room has Netflix, we offer warm blankets and noise-canceling headphones, and our doctors spend real time listening to your concerns before recommending treatment." },
];

const CypressTx = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  useDocTitle("Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue");

  return (
    <>
      <Helmet>
        <title>Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue</title>
        <meta name="description" content="Looking for a dentist in Cypress, TX? Smile Avenue on Fry Road — 4.9★ from 300+ reviews, same-day appointments, in-house dental lab. Implants, Invisalign, emergency care. Serving Bridgeland, Towne Lake, Fairfield & Cy-Fair. Call (832) 648-1756." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/" />
        <meta property="og:title" content="Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue" />
        <meta property="og:description" content="Top-rated family & cosmetic dentist in Cypress, TX on Fry Road. 4.9★ from 300+ reviews. Same-day appointments. In-house dental lab. Serving Bridgeland, Towne Lake, Fairfield & Cy-Fair." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/cypress-tx/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content={OFFICE_IMAGES.cypressHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue" />
        <meta name="twitter:description" content="4.9★ family dentist in Cypress, TX on Fry Road. Same-day appointments, dental implants, Invisalign. In-house lab. Call (832) 648-1756." />
        <meta name="twitter:image" content={OFFICE_IMAGES.cypressHero} />
        <link rel="alternate" hrefLang="en" href="https://www.smileavenuefamilydentistry.com/cypress-tx/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.smileavenuefamilydentistry.com/cypress-tx/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Smile Avenue Family Dentistry - Cypress",
          url: "https://www.smileavenuefamilydentistry.com/cypress-tx/",
          telephone: "(832) 648-1756",
          address: { "@type": "PostalAddress", streetAddress: "9212 Fry Rd #120", addressLocality: "Cypress", addressRegion: "TX", postalCode: "77433", addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: "29.9691", longitude: "-95.6972" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3000", bestRating: "5", worstRating: "1" },
          openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:30", closes: "17:00" }]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
            { "@type": "ListItem", position: 2, name: "Dentist in Cypress, TX", item: "https://www.smileavenuefamilydentistry.com/cypress-tx/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Dentist in Cypress, TX | Smile Avenue",
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".kicker", ".section-body"] },
          url: "https://www.smileavenuefamilydentistry.com/cypress-tx/"
        })}</script>
      </Helmet>
      <TrustTicker />

      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main className="pb-14 lg:pb-0">
        {/* 1 — HERO / LOCATION INTRO WITH PHOTOS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Dentist in Cypress, TX</span>
            </nav>

            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">DENTIST IN CYPRESS, TX · FRY ROAD · NEAR HEB</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
                  Your Family Dentist on Fry Road in Cypress, TX
                </h1>
                <p className="section-body">
                  Smile Avenue on Fry Road is the Cypress dentist families actually look forward to visiting. From <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">routine cleanings</Link> and <Link to="/cypress-tx/pediatric-dentistry" className="text-primary hover:underline">pediatric checkups</Link> to <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, <Link to="/cypress-tx/invisalign" className="text-primary hover:underline">Invisalign</Link>, and <Link to="/cypress-tx/emergency-dentist" className="text-primary hover:underline">same-day emergency visits</Link> — we handle it all under one roof with our in-house dental lab. Proudly serving Bridgeland, Towne Lake, Fairfield, Cy-Fair, and CFISD families.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
                  <button onClick={() => setBookingModalOpen(true)} className="btn-cta w-full sm:w-auto text-center">
                    Book Now
                  </button>
                  <a href={`tel:${CYPRESS_PHONE}`} className="btn-secondary w-full sm:w-auto text-center flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {CYPRESS_PHONE_FORMATTED}
                  </a>
                </div>
                <p className="text-xs font-sans text-muted-foreground mb-2">
                  ✓ We confirm within 1 hour · ✓ Same-day appointments · ✓ 0% financing available
                </p>
                <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
                  <span className="font-semibold text-foreground">4.9</span>
                  <span>from 300+ verified Cypress reviews</span>
                </div>
              </div>
              <HeroPhotoCarousel photos={CYPRESS_HERO_PHOTOS} />
            </div>
          </div>
        </section>

        {/* 2 — SOCIAL PROOF & REVIEWS (combined) */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto text-center">
            <p className="kicker">WHERE HOUSTON TRUSTS US</p>
            <h2 className="section-heading">Real Reviews from Cypress Patients</h2>

            {/* Credibility stats row */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
              {[
                { name: "Google", stat: "4.9 Stars · 5,000+ Reviews", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg> },
                { name: "Yelp", stat: "192 Reviews", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.768-4.076a1.09 1.09 0 011.938.168l2.028 3.264c.35.563.035 1.035-.563.84zm-7.166 5.103l.67-5.225c.124-.967 1.492-1.14 1.862-.236l1.795 4.39c.23.565-.25 1.12-.845 1.025l-3.002-.49c-.446-.073-.535-.998-.48-1.464zM6.12 17.278l4.073-3.207c.765-.603 1.742.25 1.37 1.194l-1.812 4.596c-.233.59-.983.65-1.307.105l-2.261-3.389c-.267-.4-.063-.3-.063-.3zm.91-5.29l5.04 1.548c.947.29.88 1.687-.095 1.876l-4.76.924c-.61.118-1.075-.422-.898-1.015L7.03 12c.102-.34.4-.41.688-.41h-.688zM11.11 2.24L9.085 7.49c-.38.983-1.81.91-2.08-.107L5.912 2.58c-.17-.633.304-1.176.932-1.084l4.12.6c.33.05.465.508.147.143z" /></svg> },
                { name: "Facebook", stat: "1,300+ Community", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                { name: "Instagram", stat: "12K Followers", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
                { name: "YouTube", stat: "25.6K Subscribers", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
              ].map((p) => (
                <div key={p.name} className="flex flex-col items-center gap-1.5 min-w-[100px]">
                  <div className="text-muted-foreground/50 grayscale">{p.icon}</div>
                  <span className="text-xs font-sans font-medium text-muted-foreground">{p.stat}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-border mx-auto mb-10" />

            {/* Review cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 text-left">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
            <div className="md:hidden relative">
              <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1">
                {testimonials.map((t) => (
                  <div key={t.name} className="snap-center shrink-0 w-[85vw] max-w-[340px]">
                    <TestimonialCard {...t} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {testimonials.map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-border" />
                ))}
              </div>
            </div>
            <Link to="/patient-testimonials" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              Read More Cypress Reviews →
            </Link>
          </div>
        </section>

        {/* 3 — SERVICES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">DENTAL SERVICES IN CYPRESS, TX</p>
            <h2 className="section-heading">Complete Family & Cosmetic Dentistry on Fry Road</h2>
            <p className="section-body max-w-2xl mx-auto">
              From your child's first cleaning to your smile makeover, Smile Avenue Cypress offers every dental service your family needs — no referrals, no runaround. Our <Link to="/dental-lab" className="text-primary hover:underline">in-house dental lab</Link> means faster, more precise results.
            </p>
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-left">
              {services.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
            <div className="sm:hidden flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1 mt-10 text-left">
              {services.map((svc) => (
                <div key={svc.title} className="snap-center shrink-0 w-[80vw] max-w-[300px]">
                  <ServiceCard {...svc} />
                </div>
              ))}
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              View All 17 Cypress Services →
            </Link>
          </div>
        </section>

        {/* 4 — LOCATION VIDEOS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="section-heading">Welcome to Smile Avenue Cypress</h2>
            <div className="max-w-3xl mx-auto mt-8">
              <VideoCarousel videos={[
                { youtubeId: "ovn9F8ascxc", title: "Dentist Cypress: Smile Avenue Family Dentistry" },
                { youtubeId: "1PDGSzlt5cs", title: "Your First Visit to Smile Avenue!" },
                { youtubeId: "EtAuvGSjEnI", title: "Why Smile Avenue is Trusted for Caring for Patients & Families" },
              ]} />
            </div>
          </div>
        </section>

        {/* 5 — MEET YOUR DENTISTS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">YOUR CYPRESS DENTAL TEAM</p>
            <h2 className="section-heading">Meet Your Cypress Dentists</h2>
            <p className="section-body max-w-2xl mx-auto">
              Our Cypress team brings decades of combined experience in family, cosmetic, and implant dentistry. Every doctor takes time to listen and build a treatment plan around your goals — never a billing code.
            </p>
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
            <div className="md:hidden flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1 mt-10">
              {doctors.map((doc) => (
                <div key={doc.name} className="snap-center shrink-0 w-[140px]">
                  <DoctorCard {...doc} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — PAYMENTS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">AFFORDABLE DENTAL CARE IN CYPRESS</p>
            <h2 className="section-heading">Payment Made Easy</h2>
            <p className="section-body max-w-2xl mx-auto">
              Don't let cost keep you from the dentist. Between insurance, our membership plan, and 0% financing — we'll find a way to make it work.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Insurance Accepted</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">We accept Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, Humana, and more. We verify your benefits before your visit — no surprise bills.</p>
                <Link to="/insurance" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Verify Your Coverage →</Link>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">No Insurance? Join Our Membership</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">Our in-house membership plan covers cleanings, exams, X-rays, and gives you 20% off all treatment. No deductibles, no waiting periods.</p>
                <Link to="/membership-plan" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Join the Membership →</Link>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">0% Dental Financing</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">Spread the cost with CareCredit or Sunbit — apply in minutes, get approved instantly, and pay monthly with 0% interest options.</p>
                <Link to="/insurance" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Explore Financing →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7 — FIND US */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker">VISIT OUR CYPRESS OFFICE</p>
            <h2 className="section-heading">Find Us on Fry Road</h2>
            <p className="section-body max-w-2xl mx-auto">
              We're on Fry Road in Cypress — directly across from HEB, near Bridgeland High School and the Berry Center. Free parking right at our door.
            </p>

            <div className="grid md:grid-cols-[1fr_1fr_auto] gap-x-8 gap-y-6 mt-10 items-start">
              <div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">Address</h3>
                <p className="text-sm font-sans text-foreground mb-1">9212 Fry Rd #120</p>
                <p className="text-sm font-sans text-foreground mb-5">Cypress, TX 77433</p>

                <h3 className="font-display text-lg font-bold text-primary mb-3">How to Get Here</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  From US-290, exit Fry Road and head south — we're about 1 mile down on the right, directly across from HEB. From Bridgeland or Towne Lake, take Fry Rd south past Bridgeland High School. From Fairfield or Cy-Fair, head north on Fry Rd from Clay Road.
                </p>
                <p className="text-xs font-sans text-muted-foreground mt-3">
                  <span className="font-medium text-foreground">Landmark:</span> Look for the HEB on Fry Road — we're across the street in the same shopping center as Salata. Free parking at our door.
                </p>
                <a
                  href="https://maps.app.goo.gl/DgZBrfjyNed7qKxs8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-primary font-medium hover:underline mt-3 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-primary mb-3">Hours</h3>
                  <div className="space-y-2.5 text-sm font-sans">
                    {[
                      { day: "Monday:", time: "8:30 AM – 5:00 PM" },
                      { day: "Tuesday:", time: "8:30 AM – 5:00 PM" },
                      { day: "Wednesday:", time: "8:30 AM – 5:00 PM" },
                      { day: "Thursday:", time: "8:30 AM – 5:00 PM" },
                      { day: "Friday:", time: "8:30 AM – 5:00 PM" },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between text-foreground">
                        <span className="font-medium">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-muted-foreground">
                      <span>Saturday – Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
                    className="w-full h-[180px] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Smile Avenue Family Dentistry Cypress office location on Google Maps"
                  />
                </div>
              </div>

              <div className="bg-accent/30 border border-accent/50 rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-2.5">
                  {[
                    "Netflix in every room",
                    "Warm blankets & pillows",
                    "Noise-canceling headphones",
                    "Digital scans — no goopy molds",
                    "In-house dental lab",
                    "Same-day emergencies",
                    "0% financing available",
                    "Most PPO insurance accepted",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-sans text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8 — NEIGHBORHOODS WE SERVE */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">NEARBY COMMUNITIES</p>
            <h2 className="section-heading">Neighborhoods We Serve in Cypress</h2>
            <p className="section-body max-w-2xl mx-auto">Smile Avenue Cypress proudly serves families across these communities. Click to learn more about dental care near you.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
              {[
                { label: "Bridgeland Dentist", href: "/cypress-tx/bridgeland-dentist" },
                { label: "Towne Lake Dentist", href: "/cypress-tx/towne-lake-dentist" },
                { label: "Fairfield Dentist", href: "/cypress-tx/fairfield-dentist" },
                { label: "Cy-Fair Dentist", href: "/cypress-tx/cyfair-dentist" },
                { label: "Jersey Village Dentist", href: "/cypress-tx/jersey-village-dentist" },
              ].map((n) => (
                <Link key={n.href} to={n.href} className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm font-sans font-semibold text-foreground hover:text-primary">
                  {n.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9 — OTHER LOCATIONS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Also Serving Katy, TX</h3>
            <p className="text-sm font-body text-muted-foreground mb-6">Smile Avenue also has a location in Katy for your convenience.</p>
            <div className="inline-block bg-card rounded-xl p-6 border border-border text-left max-w-md">
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-sans text-foreground">23541 Westheimer Pkwy Ste #170, Katy, TX 77494</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:2818005008" className="text-sm font-sans text-foreground hover:text-primary transition-colors">(281) 800-5008</a>
              </div>
              <Link to="/katy-tx" className="text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
                Visit Katy Page →
              </Link>
            </div>
          </div>
        </section>

        {/* 10 — FAQ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading">Cypress Dental FAQs</h2>
                <p className="section-body">Have more questions about our Cypress office? Call <a href={`tel:${CYPRESS_PHONE}`} className="text-primary hover:underline">{CYPRESS_PHONE_FORMATTED}</a>.</p>
              </div>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* 11 — BLOG */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="kicker">FROM THE BLOG</p>
                <h2 className="section-heading">Dental Tips & Insights</h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
                View All Posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden">
                  <div className="p-6">
                    <span className="text-xs font-sans font-medium text-primary uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs font-sans text-muted-foreground">{post.readTime}</span>
                      <span className="text-sm font-sans font-medium text-primary group-hover:gap-2 transition-all inline-flex items-center gap-1">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/blog" className="sm:hidden inline-flex items-center gap-2 mt-8 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />

      {/* LocalBusiness + Dentist Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Dentist"],
            name: "Smile Avenue Family Dentistry - Cypress",
            image: OFFICE_IMAGES.cypressHero,
            telephone: "+1-832-648-1756",
            address: {
              "@type": "PostalAddress",
              streetAddress: "9212 Fry Rd #120",
              addressLocality: "Cypress",
              addressRegion: "TX",
              postalCode: "77433",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 29.9691,
              longitude: -95.6977,
            },
            url: "https://www.smileavenuefamilydentistry.com/cypress-tx/",
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "300",
            },
            areaServed: [
              { "@type": "City", name: "Cypress, TX" },
              { "@type": "Place", name: "Bridgeland" },
              { "@type": "Place", name: "Towne Lake" },
              { "@type": "Place", name: "Fairfield" },
              { "@type": "Place", name: "Cy-Fair" },
              { "@type": "Place", name: "Jersey Village" },
            ],
            priceRange: "$$",
            hasMap: "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(f => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
    </>
  );
};

export default CypressTx;
