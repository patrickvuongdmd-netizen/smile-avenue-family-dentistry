import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Check, Shield, Sparkles, Zap, SmilePlus, AlertCircle, Pill, Star, Building, GraduationCap, ShoppingBag, ChevronRight, CircleDot, AlignLeft, Gem, Siren, Sun, Smile, Crown, Brush, Moon, Baby, Wrench, Heart } from "lucide-react";
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
import InsuranceLogoBar from "@/components/InsuranceLogoBar";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { OFFICE_IMAGES, PAGE_VIDEOS, KATY_HERO_PHOTOS } from "@/lib/images";
import HeroPhotoCarousel from "@/components/HeroPhotoCarousel";
import LazyYouTube from "@/components/LazyYouTube";

const KATY_PHONE = "2818005008";
const KATY_PHONE_FORMATTED = "(281) 800-5008";
const KATY_BOOKING = "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty";
const KATY_MAPS = "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Katy/@29.732508,-95.775455,17z/data=!3m1!4b1!4m6!3m5!1s0x864121d672dd8005:0xc421718f6ea402f7!8m2!3d29.732508!4d-95.775455!16s";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Founder — cutting-edge implant, sedation & digital dentistry with a values-first approach.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "Award-winning aesthetic dentistry & compassionate family care.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Community-centered care with a heart for education & volunteerism.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
];

const services = [
  { title: "Preventive Dentistry", description: "Cleanings, exams, and proactive care to keep your smile healthy.", href: "/katy-tx/preventive-dentistry", icon: <Shield className="w-5 h-5" /> },
  { title: "Cosmetic Dentistry", description: "Veneers, whitening, and smile design for a confident new look.", href: "/katy-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Dental Implants", description: "Permanent tooth replacement that looks and functions like natural teeth.", href: "/katy-tx/dental-implants", icon: <SmilePlus className="w-5 h-5" /> },
  { title: "Invisalign®", description: "Clear aligners for a straighter smile without traditional braces.", href: "/katy-tx/invisalign", icon: <Zap className="w-5 h-5" /> },
  { title: "Emergency Dentistry", description: "Same-day urgent care when you need it most.", href: "/katy-tx/emergency-dentist", icon: <AlertCircle className="w-5 h-5" /> },
  { title: "Sedation Dentistry", description: "Relaxed, anxiety-free dental care for nervous patients.", href: "/katy-tx/sedation-dentistry", icon: <Pill className="w-5 h-5" /> },
];

const testimonials = [
  { quote: "Dr. Bilal and the team are fantastic! They took the time to explain every step and made sure I was comfortable throughout my treatment. Highly recommend to anyone in Katy.", name: "David W.", source: "Google Review", location: "Cross Creek Ranch, Katy" },
  { quote: "We moved to Cinco Ranch last year and finding Smile Avenue was the best thing. The entire family goes here now, even our 4-year-old loves it. The kids area is so cute!", name: "Maria G.", source: "Google Review", location: "Firethorne, Katy" },
  { quote: "I had a dental emergency on a Friday and they saw me within the hour. The care was outstanding and the follow-up was thorough. I'm a patient for life.", name: "Robert K.", source: "Google Review", location: "Cinco Ranch, Katy" },
];

const faqs = [
  { question: "Where exactly is Smile Avenue Katy located?", answer: "We're at 23541 Westheimer Pkwy Ste #170, Katy, TX 77494 — along Westheimer Parkway between Cinco Ranch Blvd and Peek Road, minutes from LaCenterra at Cinco Ranch. We're centrally located for families in Cinco Ranch, Cross Creek Ranch, Firethorne, Elyson, Cane Island, and Fulshear." },
  { question: "What dental insurance do you accept at the Katy office?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana. Our team verifies your benefits before your visit so there are no surprise bills." },
  { question: "Do you offer same-day emergency dental appointments in Katy?", answer: "Yes. If you have a dental emergency — toothache, broken tooth, knocked-out tooth, or swelling — call us at (281) 800-5008. We keep emergency slots available daily and will do our best to see you the same day." },
  { question: "What are the office hours for the Katy dental office?", answer: "We're open Monday through Friday, 8:30am to 5pm, and Saturday 8am to 2pm, with Saturday appointments available by request. We also offer early morning availability for patients with busy schedules." },
  { question: "Is Smile Avenue a good family dentist for kids in Katy?", answer: "Absolutely. We treat patients of all ages — from toddlers getting their first checkup to grandparents needing dentures. Katy ISD families love our gentle approach to pediatric dentistry, and our kid-friendly amenities make every visit fun." },
  { question: "Do you offer dental implants at the Katy office?", answer: "Yes. Our Katy office provides comprehensive dental implant services including single implants, implant bridges, and All-on-X full-arch restorations. With our in-house dental lab, we deliver faster turnaround and more precise results than practices that outsource." },
  { question: "How is Smile Avenue different from other dentists in Katy?", answer: "We're not your typical Katy dentist. We combine advanced technology (digital scanners, 3D imaging, in-house lab) with hotel-level hospitality — Netflix in every room, warm blankets, noise-canceling headphones. Our doctors spend real time with you before recommending any treatment." },
];

const KatyTx = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  useDocTitle("Dentist in Katy, TX | Westheimer Pkwy Dentist | Smile Avenue");

  return (
    <>
      <Helmet>
        <title>Dentist in Katy, TX | Westheimer Pkwy Dentist | Smile Avenue</title>
        <meta name="description" content="Looking for a dentist in Katy, TX? Smile Avenue on Westheimer Parkway — 4.9★ from 200+ reviews, same-day appointments, in-house dental lab. Implants, Invisalign, emergency care. Serving Cinco Ranch, Firethorne, Cross Creek Ranch & Fulshear. Call (281) 800-5008." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/katy-tx/" />
        <meta property="og:title" content="Dentist in Katy, TX | Westheimer Pkwy Dentist | Smile Avenue" />
        <meta property="og:description" content="Top-rated family & cosmetic dentist in Katy, TX on Westheimer Parkway. 4.9★ from 200+ reviews. Same-day appointments. In-house dental lab. Serving Cinco Ranch, Firethorne & Cross Creek Ranch." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/katy-tx/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content={OFFICE_IMAGES.katyHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dentist in Katy, TX | Westheimer Pkwy Dentist | Smile Avenue" />
        <meta name="twitter:description" content="4.9★ family dentist in Katy, TX on Westheimer Parkway. Same-day appointments, dental implants, Invisalign. In-house lab. Call (281) 800-5008." />
        <meta name="twitter:image" content={OFFICE_IMAGES.katyHero} />
        <link rel="alternate" hrefLang="en" href="https://www.smileavenuefamilydentistry.com/katy-tx/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.smileavenuefamilydentistry.com/katy-tx/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Smile Avenue Family Dentistry - Katy",
          url: "https://www.smileavenuefamilydentistry.com/katy-tx/",
          telephone: "(281) 800-5008",
          address: { "@type": "PostalAddress", streetAddress: "23541 Westheimer Pkwy Ste #170", addressLocality: "Katy", addressRegion: "TX", postalCode: "77494", addressCountry: "US" },
          geo: { "@type": "GeoCoordinates", latitude: "29.7357", longitude: "-95.7575" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2000", bestRating: "5", worstRating: "1" },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:30", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
            { "@type": "ListItem", position: 2, name: "Dentist in Katy, TX", item: "https://www.smileavenuefamilydentistry.com/katy-tx/" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Dentist in Katy, TX | Smile Avenue",
          speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".kicker", ".section-body"] },
          url: "https://www.smileavenuefamilydentistry.com/katy-tx/"
        })}</script>
      </Helmet>
      <TrustTicker />

      <Navbar phone={KATY_PHONE} phoneFormatted={KATY_PHONE_FORMATTED} bookingUrl={KATY_BOOKING} />
      <TrustStrip />

      <main className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Dentist in Katy, TX</span>
            </nav>

            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">DENTIST IN KATY, TX · WESTHEIMER PARKWAY · NEAR LACENTERRA</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
                  Your Family Dentist on Westheimer Parkway in Katy, TX
                </h1>
                <p className="section-body">
                  Smile Avenue on Westheimer Parkway is the Katy dentist that makes dental care feel effortless. From <Link to="/katy-tx/dental-cleaning" className="text-primary hover:underline">routine cleanings</Link> and <Link to="/katy-tx/pediatric-dentistry" className="text-primary hover:underline">kids' checkups</Link> to <Link to="/katy-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, <Link to="/katy-tx/invisalign" className="text-primary hover:underline">Invisalign</Link>, and <Link to="/katy-tx/emergency-dentist" className="text-primary hover:underline">same-day emergencies</Link> — we do it all with our in-house dental lab. Proudly serving Cinco Ranch, Cross Creek Ranch, Firethorne, Fulshear, and Katy ISD families.
                </p>
                <div className="flex flex-row items-center gap-3 mb-4">
                  <button onClick={() => setBookingModalOpen(true)} className="btn-cta">
                    Book Now
                  </button>
                  <a href={`tel:${KATY_PHONE}`} className="btn-secondary">
                    {KATY_PHONE_FORMATTED}
                  </a>
                </div>
                <p className="text-xs font-sans text-muted-foreground mb-2">
                  ✓ We confirm within 1 hour · ✓ Same-day appointments · ✓ 0% financing available
                </p>
                <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
                  <span className="font-semibold text-foreground">4.9</span>
                  <span>from 200+ verified Katy reviews</span>
                </div>
              </div>
              <HeroPhotoCarousel photos={KATY_HERO_PHOTOS} />
            </div>
          </div>
        </section>

        <CredibilityBar />

        {/* SERVICE PILL CAROUSEL */}
        <section className="py-6 bg-background overflow-hidden">
          <div className="relative">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 snap-x snap-mandatory pb-2">
              {[
                { label: "Dental Implants", slug: "dental-implants", icon: CircleDot },
                { label: "Invisalign®", slug: "invisalign", icon: AlignLeft },
                { label: "Cosmetic Dentistry", slug: "cosmetic-dentistry", icon: Gem },
                { label: "Emergency Dentist", slug: "emergency-dentist", icon: Siren },
                { label: "Teeth Whitening", slug: "teeth-whitening", icon: Sun },
                { label: "Veneers", slug: "veneers", icon: Smile },
                { label: "Dental Crowns", slug: "dental-crowns", icon: Crown },
                { label: "Cleanings & Exams", slug: "dental-cleaning", icon: Brush },
                { label: "Sedation Dentistry", slug: "sedation-dentistry", icon: Moon },
                { label: "Kids Dentistry", slug: "pediatric-dentistry", icon: Baby },
                { label: "Root Canal", slug: "root-canal", icon: Wrench },
                { label: "Dentures", slug: "dentures", icon: Heart },
              ].map((pill) => (
                <Link
                  key={pill.slug}
                  to={`/katy-tx/${pill.slug}`}
                  className="snap-start shrink-0 flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-sm font-sans font-medium text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary transition-all whitespace-nowrap shadow-sm"
                >
                  <pill.icon className="w-4 h-4 text-primary" />
                  {pill.label}
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                </Link>
              ))}
            </div>
            <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </section>

        {/* OFFICE INFO BAR */}
        <section className="section-alt py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm font-sans">
                  <span className="text-foreground">23541 Westheimer Pkwy Ste #170, Katy, TX 77494</span>
                  <a href={KATY_MAPS} target="_blank" rel="noopener noreferrer" className="block text-primary text-xs font-medium mt-0.5 hover:underline">
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${KATY_PHONE}`} className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">
                  {KATY_PHONE_FORMATTED}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-sans text-foreground">Mon–Fri 8:30am–5pm · Sat 8am–2pm</span>
              </div>
            </div>
          </div>
        </section>

        {/* FIND US — Tend-style: info grid first, map below */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker">VISIT OUR KATY OFFICE</p>
            <h2 className="section-heading">Find Us on Westheimer Parkway</h2>
            <p className="section-body max-w-2xl mx-auto">
              We're on Westheimer Parkway in Katy — minutes from LaCenterra at Cinco Ranch, near the Grand Parkway (99). Free parking right at our door.
            </p>

            {/* Tend-style grid: Address+Hours+Map left/center, Amenities right */}
            <div className="grid md:grid-cols-[1fr_1fr_auto] gap-x-8 gap-y-6 mt-10">
              {/* Address + Directions */}
              <div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">Address</h3>
                <p className="text-sm font-sans text-foreground mb-1">23541 Westheimer Pkwy Ste #170</p>
                <p className="text-sm font-sans text-foreground mb-5">Katy, TX 77494</p>

                <h3 className="font-display text-lg font-bold text-primary mb-3">How to Get Here</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                  From I-10, exit Grand Parkway (99) south and take Westheimer Parkway west — we're about 2 minutes ahead on the right. From Cinco Ranch or LaCenterra, head east on Cinco Ranch Blvd to Westheimer Pkwy. From Fulshear, take FM 1093 east to Westheimer Parkway.
                </p>
                <p className="text-xs font-sans text-muted-foreground mt-3">
                  <span className="font-medium text-foreground">Landmark:</span> Look for the shopping center on the south side of Westheimer Pkwy between Grand Parkway (99) and Cinco Ranch Blvd — Suite #170 with free parking at our door.
                </p>
                <a
                  href="https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Katy/@29.732508,-95.775455,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-primary font-medium hover:underline mt-3 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Hours */}
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
                  <div className="flex justify-between text-foreground">
                    <span className="font-medium">Saturday:</span>
                    <span>8:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Amenities — spans full height on right */}
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-6 md:row-span-2">
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

              {/* Map — under Hours column only */}
              <div className="md:col-start-2 rounded-xl overflow-hidden shadow-md border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
                  className="w-full h-[200px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smile Avenue Family Dentistry Katy office location on Google Maps"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT OUR KATY LOCATION — unique geo content */}
        <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">ABOUT OUR KATY DENTAL OFFICE</p>
              <h2 className="section-heading">Why Katy, TX Families Choose Smile Avenue on Westheimer Parkway</h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                <p>
                  Katy, Texas has become one of the fastest-growing family communities west of Houston — and Smile Avenue is proud to be the neighborhood dentist these families trust. Located at 23541 Westheimer Pkwy Ste #170, just minutes from LaCenterra at Cinco Ranch and the Katy Mills corridor, our office is easy to reach from every corner of the Katy area.
                </p>
                <p>
                  We serve families throughout <Link to="/katy-tx/cinco-ranch-dentist" className="text-primary hover:underline">Cinco Ranch</Link>, <Link to="/katy-tx/firethorne-dentist" className="text-primary hover:underline">Firethorne</Link>, <Link to="/katy-tx/cross-creek-ranch-dentist" className="text-primary hover:underline">Cross Creek Ranch</Link>, <Link to="/katy-tx/fulshear-dentist" className="text-primary hover:underline">Fulshear</Link>, Elyson, Cane Island, and the <Link to="/katy-tx/westheimer-parkway-dentist" className="text-primary hover:underline">Westheimer Parkway</Link> corridor. Whether your kids are in Katy ISD schools or you commute along I-10, our Westheimer Parkway location puts exceptional dental care within a short drive.
                </p>
                <p>
                  Our Katy team — led by founder Dr. Patrick Vuong alongside Dr. Sameer Bilal and Dr. Sarah Maredia — specializes in comprehensive family dentistry, <Link to="/katy-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic transformations</Link>, and complex <Link to="/katy-tx/dental-implants" className="text-primary hover:underline">implant cases</Link>. With our <Link to="/dental-lab" className="text-primary hover:underline">in-house dental lab</Link>, we fabricate crowns, veneers, and aligners on-site for faster, more precise results. That means fewer visits and better outcomes for Katy families.
                </p>
              </div>
              {/* Local landmark badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="flex flex-col items-center text-center gap-2 p-4 bg-card rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-foreground">Minutes from LaCenterra</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4 bg-card rounded-xl border border-border">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-foreground">Near Katy Mills & I-10</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4 bg-card rounded-xl border border-border">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-foreground">Serving Katy ISD Families</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4 bg-card rounded-xl border border-border">
                  <Building className="w-5 h-5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-foreground">Central to Cinco Ranch & Fulshear</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        {/* MEET OUR DOCTORS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">YOUR KATY DENTAL TEAM</p>
            <h2 className="section-heading">3 Experienced Dentists at Our Katy Office</h2>
            <p className="section-body max-w-2xl mx-auto">
              Our Katy team combines expertise in family, cosmetic, and implant dentistry with genuine compassion. Every doctor takes time to listen before recommending treatment.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">DENTAL SERVICES IN KATY, TX</p>
            <h2 className="section-heading">Complete Family & Cosmetic Dentistry on Westheimer Parkway</h2>
            <p className="section-body max-w-2xl mx-auto">
              Everything your family needs under one roof — no referrals needed. Our <Link to="/dental-lab" className="text-primary hover:underline">in-house dental lab</Link> delivers faster, more precise results.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-left">
              {services.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              View All 17 Katy Services →
            </Link>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WHAT KATY FAMILIES ARE SAYING</p>
            <h2 className="section-heading">Real Reviews from Katy Patients</h2>
            <div className="inline-flex items-center gap-2 mb-10 text-sm font-sans font-semibold text-foreground bg-muted px-4 py-2 rounded-full">
              ⭐ 4.9 RATING · 200+ GOOGLE REVIEWS
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
            <Link to="/patient-testimonials" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              Read More Katy Reviews →
            </Link>
          </div>
        </section>


        {/* INSURANCE LOGOS */}
        <InsuranceLogoBar />

        {/* FREE CONSULTATION */}
        <FreeConsultationBanner />

        {/* FINANCING OPTIONS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">AFFORDABLE DENTAL CARE IN KATY</p>
            <h2 className="section-heading">Flexible Payment Options for Katy Families</h2>
            <p className="section-body max-w-2xl mx-auto">
              Don't let cost keep you from the dentist. Between insurance, our membership plan, and 0% financing — we'll find a way to make it work.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Insurance Accepted</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">We accept Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, Humana, and more. We verify your benefits before your visit.</p>
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
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading">Katy Dental FAQs</h2>
                <p className="section-body">Have more questions about our Katy office? Call <a href={`tel:${KATY_PHONE}`} className="text-primary hover:underline">{KATY_PHONE_FORMATTED}</a>.</p>
              </div>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS WE SERVE */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">NEARBY COMMUNITIES</p>
            <h2 className="section-heading">Neighborhoods We Serve in Katy</h2>
            <p className="section-body max-w-2xl mx-auto">Smile Avenue Katy proudly serves families across these communities. Click to learn more about dental care near you.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
              {[
                { label: "Cinco Ranch Dentist", href: "/katy-tx/cinco-ranch-dentist" },
                { label: "Firethorne Dentist", href: "/katy-tx/firethorne-dentist" },
                { label: "Cross Creek Ranch Dentist", href: "/katy-tx/cross-creek-ranch-dentist" },
                { label: "Westheimer Parkway Dentist", href: "/katy-tx/westheimer-parkway-dentist" },
                { label: "Fulshear Dentist", href: "/katy-tx/fulshear-dentist" },
              ].map((n) => (
                <Link key={n.href} to={n.href} className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm font-sans font-semibold text-foreground hover:text-primary">
                  {n.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CROSS-LINK CYPRESS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Also Serving Cypress, TX</h3>
            <p className="text-sm font-body text-muted-foreground mb-6">Smile Avenue also has a location in Cypress for your convenience.</p>
            <div className="inline-block bg-card rounded-xl p-6 border border-border text-left max-w-md">
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-sans text-foreground">9212 Fry Rd #120, Cypress, TX 77433</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:8326481756" className="text-sm font-sans text-foreground hover:text-primary transition-colors">(832) 648-1756</a>
              </div>
              <Link to="/cypress-tx" className="text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
                Visit Cypress Page →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        {/* Video */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="section-heading">Welcome to Smile Avenue Katy</h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.katyIntro.youtubeId} title={PAGE_VIDEOS.katyIntro.title} />
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <MobileStickyBar phone={KATY_PHONE} phoneFormatted={KATY_PHONE_FORMATTED} bookingUrl={KATY_BOOKING} />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />

      {/* LocalBusiness + Dentist Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Dentist"],
            name: "Smile Avenue Family Dentistry - Katy",
            image: OFFICE_IMAGES.katyHero,
            telephone: "+1-281-800-5008",
            address: {
              "@type": "PostalAddress",
              streetAddress: "23541 Westheimer Pkwy Ste #170",
              addressLocality: "Katy",
              addressRegion: "TX",
              postalCode: "77494",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 29.7357,
              longitude: -95.7575,
            },
            url: "https://www.smileavenuefamilydentistry.com/katy-tx/",
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "200",
            },
            areaServed: [
              { "@type": "City", name: "Katy, TX" },
              { "@type": "Place", name: "Cinco Ranch" },
              { "@type": "Place", name: "Firethorne" },
              { "@type": "Place", name: "Cross Creek Ranch" },
              { "@type": "Place", name: "Fulshear" },
            ],
            priceRange: "$$",
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

export default KatyTx;
