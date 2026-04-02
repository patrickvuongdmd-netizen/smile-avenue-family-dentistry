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
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            {/* Breadcrumb */}
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

        <CredibilityBar />


        {/* REVIEWS — moved up for early social proof */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WHAT CYPRESS FAMILIES ARE SAYING</p>
            <h2 className="section-heading">Real Reviews from Cypress Patients</h2>
            <div className="inline-flex items-center gap-2 mb-10 text-sm font-sans font-semibold text-foreground bg-muted px-4 py-2 rounded-full">
              ⭐ 4.9 RATING · 300+ GOOGLE REVIEWS
            </div>
            {/* Desktop: grid — Mobile: horizontal scroll carousel */}
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

        {/* VIDEO — brand moment after social proof */}
        <section className="section-padding section-alt">
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

        {/* MEET OUR DOCTORS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">YOUR CYPRESS DENTAL TEAM</p>
            <h2 className="section-heading">Meet Your Cypress Dentists</h2>
            <p className="section-body max-w-2xl mx-auto">
              Our Cypress team brings decades of combined experience in family, cosmetic, and implant dentistry. Every doctor takes time to listen and build a treatment plan around your goals — never a billing code.
            </p>
            {/* Desktop: 5-col grid — Mobile: horizontal scroll */}
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

        {/* SERVICES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">DENTAL SERVICES IN CYPRESS, TX</p>
            <h2 className="section-heading">Complete Family & Cosmetic Dentistry on Fry Road</h2>
            <p className="section-body max-w-2xl mx-auto">
              From your child's first cleaning to your smile makeover, Smile Avenue Cypress offers every dental service your family needs — no referrals, no runaround. Our <Link to="/dental-lab" className="text-primary hover:underline">in-house dental lab</Link> means faster, more precise results.
            </p>
            {/* Desktop: grid — Mobile: horizontal scroll carousel */}
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

        {/* PAYMENT MADE EASY — consolidated insurance, membership, financing */}
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

        {/* FAQ */}
        <section className="section-padding section-alt">
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

        {/* FIND US — moved lower in flow */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker">VISIT OUR CYPRESS OFFICE</p>
            <h2 className="section-heading">Find Us on Fry Road</h2>
            <p className="section-body max-w-2xl mx-auto">
              We're on Fry Road in Cypress — directly across from HEB, near Bridgeland High School and the Berry Center. Free parking right at our door.
            </p>

            <div className="grid md:grid-cols-[1fr_1fr_auto] gap-x-8 gap-y-6 mt-10 items-start">
              {/* Address + Directions */}
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

              {/* Hours + Map stacked */}
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

              {/* Amenities */}
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-6">
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

        {/* NEIGHBORHOODS WE SERVE */}
        <section className="section-padding section-alt">
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

        {/* CROSS-LINK KATY */}
        <section className="section-padding bg-background">
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
