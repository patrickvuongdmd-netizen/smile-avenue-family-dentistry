import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Check, Shield, Sparkles, Zap, SmilePlus, AlertCircle, Pill } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import DoctorCard from "@/components/DoctorCard";
import FaqAccordion from "@/components/FaqAccordion";
import { OFFICE_IMAGES } from "@/lib/images";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const CYPRESS_MAPS = "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Founder with a focus on comprehensive family and implant dentistry.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", bio: "Trusted for his gentle approach and commitment to patient comfort.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Known for his integrity, precision, and passion for restorative care.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Passionate about cosmetic and family dentistry at both locations.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  { name: "Dr. Shayan Alkhiro", credentials: "DDS", bio: "Dedicated to gentle, high-quality dental care with a calm demeanor.", href: "/doctors/shayan-alkhiro-dds", imgKey: "shayan-alkhiro" },
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
  { quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time. Everyone in here is just very nice and friendly.", name: "Thao H.", source: "Google Review" },
  { quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home. I was offered a cozy blanket and my choice of Netflix! AMAZING!", name: "Kashayn P.", source: "Google Review" },
  { quote: "I absolutely love coming to Smile Dentistry! The employees are nice, friendly, and care for the patients. I'm pleased once again with my visit to Smile Dentistry.", name: "Shon M.", source: "Google Review" },
];

const faqs = [
  { question: "Where is Smile Avenue Cypress located?", answer: "We're at 9212 Fry Rd #120, Cypress, TX 77433 — conveniently located near HEB on Fry Road, serving Cypress, Bridgeland, Fairfield, and Towne Lake." },
  { question: "What insurance do you accept at the Cypress office?", answer: "We accept most major PPO plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, and more. Our team will verify your coverage before your visit." },
  { question: "Do you offer same-day emergency appointments in Cypress?", answer: "Yes. If you're experiencing a dental emergency, call us at (832) 648-1756 and we'll do our best to see you the same day." },
  { question: "What are your Cypress office hours?", answer: "We're open Monday through Friday, 8am to 5pm, with Saturday appointments available by request." },
  { question: "Can my whole family be seen at the Cypress location?", answer: "Absolutely. We treat patients of all ages — from toddlers to grandparents. Our team specializes in gentle care for kids and comprehensive treatment for adults." },
];

const CypressTx = () => {
  useDocTitle("Dentist in Cypress, TX | Smile Avenue Family Dentistry");

  return (
    <>
      <Helmet>
        <title>Dentist in Cypress, TX | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Your family dentist in Cypress, TX. Personalized care, advanced comfort, and same-day appointments at 9212 Fry Rd. Serving Cypress, Bridgeland, Fairfield, and Towne Lake families." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/" />
        <meta property="og:title" content="Dentist in Cypress, TX | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Your family dentist in Cypress, TX. Personalized care, advanced comfort, and same-day appointments." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/cypress-tx/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content={OFFICE_IMAGES.cypressHero} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Cypress, TX</span>
            </nav>

            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">SERVING CYPRESS, BRIDGELAND & FAIRFIELD FAMILIES</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
                  Your Family Dentist in Cypress, TX
                </h1>
                <p className="section-body">
                  At Smile Avenue Cypress, we combine modern technology with hospitality-driven care to create a dental experience your whole family will love. Whether you need a routine cleaning, a same-day emergency visit, or a complete smile makeover — we're here for you.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book at Cypress
                  </a>
                  <a href={`tel:${CYPRESS_PHONE}`} className="btn-secondary">
                    Call {CYPRESS_PHONE_FORMATTED}
                  </a>
                </div>
                <p className="text-sm font-sans text-muted-foreground">
                  ⭐ 4.9 from 300+ Cypress Reviews · Same-Day Appointments · All Ages Welcome
                </p>
              </div>
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.cypressHero} alt="Smile Avenue Cypress office exterior on Fry Road" className="w-full h-full object-cover" fetchPriority="high" width={800} height={600} />
              </div>
            </div>
          </div>
        </section>

        {/* OFFICE INFO BAR */}
        <section className="section-alt py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm font-sans">
                  <span className="text-foreground">9212 Fry Rd #120, Cypress, TX 77433</span>
                  <a href={CYPRESS_MAPS} target="_blank" rel="noopener noreferrer" className="block text-primary text-xs font-medium mt-0.5 hover:underline">
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${CYPRESS_PHONE}`} className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">
                  {CYPRESS_PHONE_FORMATTED}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-sans text-foreground">Mon–Fri 8am–5pm | Sat by Appointment</span>
              </div>
            </div>
          </div>
        </section>

        {/* MEET OUR DOCTORS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">YOUR CYPRESS CARE TEAM</p>
            <h2 className="section-heading">Meet Our Cypress Doctors</h2>
            <p className="section-body max-w-2xl mx-auto">
              Our Cypress team brings exceptional skill and genuine compassion to every visit. Get to know the doctors behind your smile.
            </p>
            <div className="grid md:grid-cols-3 gap-10 mt-12">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">COMPREHENSIVE DENTAL CARE IN CYPRESS</p>
            <h2 className="section-heading">Dental Services for Your Entire Family</h2>
            <p className="section-body max-w-2xl mx-auto">
              From preventive care to advanced cosmetic treatments, Smile Avenue Cypress offers complete dental solutions for your whole family.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-left">
              {services.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              Explore All Cypress Services →
            </Link>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WHAT CYPRESS FAMILIES ARE SAYING</p>
            <h2 className="section-heading">Real Reviews from Cypress Patients</h2>
            <div className="inline-flex items-center gap-2 mb-10 text-sm font-sans font-semibold text-foreground bg-muted px-4 py-2 rounded-full">
              ⭐ 4.9 RATING · 300+ GOOGLE REVIEWS
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
            <Link to="/patient-testimonials" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              Read More Cypress Reviews →
            </Link>
          </div>
        </section>

        {/* SMILE GALLERY */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">CYPRESS SMILE TRANSFORMATIONS</p>
            <h2 className="section-heading">Real Results from Our Cypress Patients</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <BeforeAfterCard label="Porcelain Veneers" />
              <BeforeAfterCard label="Dental Implants" />
              <BeforeAfterCard label="Invisalign® Treatment" />
            </div>
            <Link to="/smile-gallery" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              View Full Cypress Gallery →
            </Link>
          </div>
        </section>

        {/* WHY CHOOSE CYPRESS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.waitingRoom} alt="Smile Avenue Cypress waiting room interior" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </div>
              <div>
                <p className="kicker">WHY FAMILIES CHOOSE SMILE AVENUE CYPRESS</p>
                <h2 className="section-heading">Your Neighborhood Dentist in Cypress, TX</h2>
                <p className="section-body">
                  Conveniently located on Fry Road, Smile Avenue Cypress serves families across Cypress, Bridgeland, Fairfield, Towne Lake, and the surrounding communities. Our modern office was designed with your comfort in mind.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Conveniently located at 9212 Fry Rd, near HEB",
                    "Same-day emergency appointments available",
                    "Cozy blankets, Netflix, and noise-canceling headphones",
                    "Digital impressions — no goopy molds",
                    "Serving Cypress, Bridgeland, Fairfield & Towne Lake",
                    "Most major insurance plans accepted",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book at Cypress
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INSURANCE & PAYMENT */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">FLEXIBLE PAYMENT OPTIONS</p>
            <h2 className="section-heading">Making Dental Care Affordable</h2>
            <p className="section-body max-w-2xl mx-auto">
              At our Cypress office, we believe great dental care should be accessible. We offer multiple ways to make your treatment affordable.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Most Insurance Accepted</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">We accept most major PPO plans and will verify your benefits before your visit.</p>
                <Link to="/insurance" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Verify Your Coverage →</Link>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Smile Avenue Membership Plan</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">No insurance? Our in-house plan covers cleanings, exams, and gives you discounts on treatment.</p>
                <Link to="/membership-plan" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Join the Membership →</Link>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Dental Financing</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">Flexible monthly payment options through CareCredit and Sunbit — apply in minutes.</p>
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
                <h2 className="section-heading">Common Questions About Our Cypress Office</h2>
                <div className="bg-muted rounded-2xl aspect-square hidden lg:flex items-center justify-center mt-6">
                  <span className="text-sm font-sans text-muted-foreground">FAQ Image</span>
                </div>
              </div>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS WE SERVE */}
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

        {/* CROSS-LINK KATY */}
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

        {/* FINAL CTA */}
        <section className="gradient-cta py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" style={{ color: 'hsl(0 0% 100%)' }}>
              Ready to Book Your Cypress Appointment?
            </h2>
            <p className="font-body text-lg mb-8 max-w-xl mx-auto" style={{ color: 'hsl(0 0% 100% / 0.85)' }}>
              Schedule your visit today at our Cypress office. Your best smile is closer than you think.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="inline-block bg-background text-foreground font-sans font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
                Book at Cypress
              </a>
              <a href={`tel:${CYPRESS_PHONE}`} className="inline-block bg-transparent border-2 border-background text-background font-sans font-semibold px-8 py-4 rounded-xl hover:bg-background/10 transition-colors">
                Call {CYPRESS_PHONE_FORMATTED}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

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
          }),
        }}
      />
    </>
  );
};

export default CypressTx;
