import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, Shield, Sparkles, SmilePlus, Zap, AlertCircle, Pill, MapPin, Phone, Clock, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import { useState } from "react";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";

const trustStats = [
  { value: "5,000+", label: "Five-Star Reviews" },
  { value: "Most", label: "Insurance Accepted" },
  { value: "Same-Day", label: "Appointments" },
  { value: "2", label: "Houston Locations" },
];

const services = [
  { title: "Dental Implants", description: "Permanent tooth replacement that looks and functions like natural teeth.", href: "/cypress-tx/dental-implants", icon: <SmilePlus className="w-6 h-6" /> },
  { title: "Cosmetic Dentistry", description: "Veneers, whitening, and smile design for a confident new look.", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-6 h-6" /> },
  { title: "Invisalign®", description: "Clear aligners for a straighter smile without traditional braces.", href: "/cypress-tx/invisalign", icon: <Zap className="w-6 h-6" /> },
  { title: "Emergency Dentistry", description: "Same-day urgent care when you need it most.", href: "/cypress-tx/emergency-dentist", icon: <AlertCircle className="w-6 h-6" /> },
  { title: "Preventive Care", description: "Cleanings, exams, and proactive care to keep your smile healthy.", href: "/cypress-tx/dental-cleaning", icon: <Shield className="w-6 h-6" /> },
  { title: "Sedation Dentistry", description: "Relaxed, anxiety-free dental care for nervous patients.", href: "/cypress-tx/sedation-dentistry", icon: <Pill className="w-6 h-6" /> },
];

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", role: "Founder", href: "/doctors/patrick-vuong-dmd" },
  { name: "Dr. Peter Kim", credentials: "DDS", role: "General Dentist", href: "/doctors/peter-kim-dds" },
  { name: "Dr. Laith Yahya", credentials: "DDS", role: "General Dentist", href: "/doctors/laith-yahya-dds" },
  { name: "Dr. Weiyen Chang", credentials: "DDS", role: "General Dentist", href: "/doctors/weiyen-chang-dds" },
  { name: "Dr. Christian Lopez", credentials: "DDS", role: "General Dentist", href: "/doctors/christian-lopez-dds" },
  { name: "Dr. Tamaara Willis", credentials: "DDS, MS", role: "Specialist", href: "/doctors/tamaara-willis-dds-ms" },
];

const testimonials = [
  { quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time.", name: "Thao H.", source: "Google Review" },
  { quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome. I was offered a cozy blanket and my choice of Netflix!", name: "Kashayn P.", source: "Google Review" },
  { quote: "Dr. Vuong and his team are absolutely amazing. They made me feel comfortable throughout my implant procedure. Highly recommend!", name: "Michael R.", source: "Google Review" },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const blogPosts = [
  { title: "5 Signs You May Need a Dental Implant", category: "Implants", date: "Mar 15, 2026" },
  { title: "Porcelain Veneers vs. Dental Bonding", category: "Cosmetic", date: "Mar 8, 2026" },
  { title: "What to Do When You Knock Out a Tooth", category: "Emergency", date: "Feb 28, 2026" },
];

const faqs = [
  { question: "What locations do you serve?", answer: "We have two convenient offices — one in Cypress, TX (9212 Fry Rd) and one in Katy, TX (23541 Westheimer Pkwy). We serve families throughout the greater Houston area." },
  { question: "Do you accept dental insurance?", answer: "Yes! We accept most major PPO plans including Aetna, BCBS, Cigna, Delta Dental, MetLife, and more. We also offer financing through CareCredit and Sunbit, plus an in-house membership plan for uninsured patients." },
  { question: "Do you offer same-day appointments?", answer: "Yes. We offer same-day appointments for emergencies and often have availability for routine visits as well. Call us to check availability." },
  { question: "What ages do you treat?", answer: "We treat patients of all ages — from toddlers to seniors. Our team includes specialists in pediatric dentistry and geriatric dental care." },
  { question: "What makes Smile Avenue different?", answer: "We combine modern technology (digital scanners, CEREC same-day crowns, 3D imaging) with a hospitality-driven experience. Think Netflix in every room, warm blankets, and a team that genuinely cares about your comfort." },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState<"cypress" | "katy">("cypress");
  const [heroLoc, setHeroLoc] = useState<"cypress" | "katy">("cypress");

  const heroPhone = heroLoc === "cypress" ? CYPRESS_PHONE : "2818005008";
  const heroPhoneFmt = heroLoc === "cypress" ? CYPRESS_PHONE_FORMATTED : "(281) 800-5008";
  const heroBooking = heroLoc === "cypress" ? CYPRESS_BOOKING : KATY_BOOKING;

  return (
    <>
      <Helmet>
        <title>Smile Avenue Family Dentistry | Dentist in Cypress & Katy, TX</title>
        <meta name="description" content="Smile Avenue Family Dentistry — your trusted family dentist in Cypress and Katy, TX. 5,000+ five-star reviews. Same-day appointments. Book online today." />
        <link rel="canonical" href="https://smileavenuedentistry.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Smile Avenue Family Dentistry",
          url: "https://smileavenuedentistry.com",
          logo: "https://smileavenuedentistry.com/logo-full.png",
          sameAs: ["https://facebook.com/smileavenuedentistry", "https://instagram.com/smileavenuedentistry"],
          contactPoint: [
            { "@type": "ContactPoint", telephone: "+1-832-648-1756", contactType: "customer service", areaServed: "US" },
            { "@type": "ContactPoint", telephone: "+1-281-800-5008", contactType: "customer service", areaServed: "US" },
          ],
          location: [
            {
              "@type": "Dentist",
              name: "Smile Avenue Family Dentistry - Cypress",
              address: { "@type": "PostalAddress", streetAddress: "9212 Fry Rd #120", addressLocality: "Cypress", addressRegion: "TX", postalCode: "77433", addressCountry: "US" },
              telephone: "+1-832-648-1756",
              geo: { "@type": "GeoCoordinates", latitude: "29.9691", longitude: "-95.6972" },
              openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "5000" },
            },
            {
              "@type": "Dentist",
              name: "Smile Avenue Family Dentistry - Katy",
              address: { "@type": "PostalAddress", streetAddress: "23541 Westheimer Pkwy Ste #170", addressLocality: "Katy", addressRegion: "TX", postalCode: "77494", addressCountry: "US" },
              telephone: "+1-281-800-5008",
              geo: { "@type": "GeoCoordinates", latitude: "29.7357", longitude: "-95.7575" },
              openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
            },
          ],
        })}</script>
        <meta property="og:title" content="Smile Avenue Family Dentistry | Dentist in Cypress & Katy, TX" />
        <meta property="og:description" content="Smile Avenue Family Dentistry — your trusted family dentist in Cypress and Katy, TX. 5,000+ five-star reviews. Same-day appointments." />
        <meta property="og:url" content="https://smileavenuedentistry.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      </Helmet>
      <Navbar phone={heroPhone} phoneFormatted={heroPhoneFmt} bookingUrl={heroBooking} />
      <TrustStrip />

      <main className="pb-14 lg:pb-0 animate-in fade-in duration-500">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="kicker">CYPRESS & KATY, TEXAS</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.5rem] leading-tight">Helping Houston Families Love Their Smiles</h1>
                <p className="section-body">From routine checkups to full smile makeovers, Smile Avenue delivers hospitality-driven dental care with modern technology at two convenient Houston-area locations.</p>
                {/* Location selector */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-sans font-medium text-muted-foreground">Your location:</span>
                  <button onClick={() => setHeroLoc("cypress")} className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-colors ${heroLoc === "cypress" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>Cypress</button>
                  <button onClick={() => setHeroLoc("katy")} className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-colors ${heroLoc === "katy" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>Katy</button>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <a href={heroBooking} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Appointment</a>
                  <Link to="/convenient-locations" className="btn-secondary">Find a Location</Link>
                </div>
                <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                  <a href={`tel:${heroPhone}`} className="flex items-center gap-1 hover:text-primary transition-colors"><Phone className="w-3.5 h-3.5" /> {heroPhoneFmt}</a>
                  <span className="text-border">|</span>
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
                  <span>4.9 from 5,000+ reviews</span>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center text-muted-foreground text-sm font-sans">Hero Image — Happy Family Smiling</div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="py-8 border-y border-border bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {trustStats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-sans text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">OUR SERVICES</p>
            <h2 className="section-heading text-center">Comprehensive Dental Care</h2>
            <p className="section-body text-center max-w-2xl mx-auto">Everything your family needs under one roof — from preventive care to advanced restorative and cosmetic treatments.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {services.map((s, i) => (
                <Link key={i} to={s.href} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{s.icon}</div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm font-body text-muted-foreground mb-3">{s.description}</p>
                  <span className="text-sm font-sans font-semibold text-primary flex items-center gap-1">Learn More <ChevronRight className="w-4 h-4" /></span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="btn-secondary">View All Services</Link>
            </div>
          </div>
        </section>

        {/* BRAND STATEMENT */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center max-w-3xl">
            <p className="kicker">OUR MISSION</p>
            <h2 className="section-heading text-3xl md:text-4xl">Helping Houston Families Love Their Smiles Again</h2>
            <p className="section-body">At Smile Avenue, we believe every patient deserves to feel heard, comfortable, and confident in their care. Our team combines clinical excellence with genuine hospitality — because a great dental experience starts with how you feel the moment you walk through our door.</p>
            <Link to="/about" className="btn-primary">Learn About Us</Link>
          </div>
        </section>

        {/* DOCTORS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">MEET OUR TEAM</p>
            <h2 className="section-heading text-center">Your Smile Avenue Doctors</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
              {doctors.map((doc, i) => (
                <Link key={i} to={doc.href} className="text-center group">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-3 group-hover:ring-4 ring-primary/20 transition-all" />
                  <h3 className="font-sans text-sm font-semibold text-foreground">{doc.name}</h3>
                  <p className="text-xs font-sans text-muted-foreground">{doc.credentials}</p>
                  <p className="text-xs font-sans text-primary mt-1">{doc.role}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/doctors" className="btn-secondary">Meet All Doctors</Link>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">TWO CONVENIENT LOCATIONS</p>
            <h2 className="section-heading text-center">Find Your Nearest Office</h2>
            <div className="flex justify-center gap-2 mt-6 mb-8">
              <button onClick={() => setActiveTab("cypress")} className={`px-6 py-2.5 rounded-full text-sm font-sans font-medium transition-colors ${activeTab === "cypress" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>Cypress</button>
              <button onClick={() => setActiveTab("katy")} className={`px-6 py-2.5 rounded-full text-sm font-sans font-medium transition-colors ${activeTab === "katy" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"}`}>Katy</button>
            </div>
            <div className="max-w-3xl mx-auto">
              {activeTab === "cypress" ? (
                <div className="bg-card rounded-2xl border border-border p-8 grid md:grid-cols-2 gap-8">
                  <div className="aspect-video rounded-xl bg-muted flex items-center justify-center text-sm font-sans text-muted-foreground">Map — Cypress</div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">Smile Avenue Cypress</h3>
                    <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
                      <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />9212 Fry Rd #120, Cypress, TX 77433</div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href="tel:8326481756" className="hover:text-primary">(832) 648-1756</a></div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" />Mon–Fri 8am–5pm</div>
                    </div>
                    <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book at Cypress</a>
                  </div>
                </div>
              ) : (
                <div className="bg-card rounded-2xl border border-border p-8 grid md:grid-cols-2 gap-8">
                  <div className="aspect-video rounded-xl bg-muted flex items-center justify-center text-sm font-sans text-muted-foreground">Map — Katy</div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">Smile Avenue Katy</h3>
                    <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
                      <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />23541 Westheimer Pkwy Ste #170, Katy, TX 77494</div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href="tel:2818005008" className="hover:text-primary">(281) 800-5008</a></div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" />Mon–Fri 8am–5pm</div>
                    </div>
                    <a href={KATY_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book at Katy</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">PATIENT REVIEWS</p>
            <h2 className="section-heading text-center">What Our Patients Say</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
            </div>
            <div className="text-center mt-8">
              <Link to="/patient-testimonials" className="btn-secondary">Read All Reviews</Link>
            </div>
          </div>
        </section>

        {/* INSURANCE */}
        <section className="py-12 bg-background border-y border-border">
          <div className="container mx-auto text-center">
            <p className="kicker">INSURANCE ACCEPTED</p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              {insuranceLogos.map((name, i) => (
                <div key={i} className="px-5 py-3 bg-card rounded-lg border border-border text-sm font-sans font-medium text-muted-foreground">{name}</div>
              ))}
            </div>
            <Link to="/insurance" className="inline-block mt-6 text-sm font-sans font-semibold text-primary hover:underline">View all accepted plans →</Link>
          </div>
        </section>

        {/* BEFORE/AFTER PREVIEW */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">REAL RESULTS</p>
            <h2 className="section-heading">See the Transformations</h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
              {["Dental Implants", "Veneers", "Invisalign"].map((label, i) => (
                <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="aspect-square bg-muted flex items-center justify-center text-xs font-sans text-muted-foreground border-r border-border">Before</div>
                    <div className="aspect-square bg-muted flex items-center justify-center text-xs font-sans text-muted-foreground">After</div>
                  </div>
                  <div className="p-3 text-center"><span className="text-sm font-sans font-semibold text-foreground">{label}</span></div>
                </div>
              ))}
            </div>
            <Link to="/smile-gallery" className="btn-secondary mt-8 inline-flex">View Full Gallery</Link>
          </div>
        </section>

        {/* BLOG FEED */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">FROM THE BLOG</p>
            <h2 className="section-heading text-center">Latest Dental Health Tips</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {blogPosts.map((post, i) => (
                <article key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className="aspect-video bg-muted" />
                  <div className="p-5">
                    <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-primary">{post.category}</span>
                    <h3 className="font-display text-base font-bold text-foreground mt-1 mb-2">{post.title}</h3>
                    <span className="text-xs font-sans text-muted-foreground">{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/blog" className="btn-secondary">Read All Posts</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding section-alt">
          <div className="container mx-auto max-w-3xl">
            <p className="kicker text-center">FAQ</p>
            <h2 className="section-heading text-center">Frequently Asked Questions</h2>
            <div className="mt-10"><FaqAccordion items={faqs} /></div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Ready to Love Your Smile?</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Book your appointment at Smile Avenue today. Two locations, same exceptional care.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-online" className="btn-cta-light">Book Online</Link>
              <a href="tel:8326481756" className="btn-cta-outline">Call (832) 648-1756</a>
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={heroPhone} phoneFormatted={heroPhoneFmt} bookingUrl={heroBooking} />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
