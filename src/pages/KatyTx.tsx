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

const KATY_PHONE = "2818005008";
const KATY_PHONE_FORMATTED = "(281) 800-5008";
const KATY_BOOKING = "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue";
const KATY_MAPS = "https://maps.app.goo.gl/katyoffice";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Founder of Smile Avenue, known for his comprehensive approach to family and implant dentistry.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "Compassionate, detail-oriented approach to general dentistry.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Passionate about cosmetic and family dentistry at both locations.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
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
  { quote: "Dr. Bilal and the team are fantastic! They took the time to explain every step and made sure I was comfortable throughout my treatment. Highly recommend to anyone in Katy.", name: "David W.", source: "Google Review" },
  { quote: "We moved to Cinco Ranch last year and finding Smile Avenue was the best thing. The entire family goes here now, even our 4-year-old loves it. The kids area is so cute!", name: "Maria G.", source: "Google Review" },
  { quote: "I had a dental emergency on a Friday and they saw me within the hour. The care was outstanding and the follow-up was thorough. I'm a patient for life.", name: "Robert K.", source: "Google Review" },
];

const faqs = [
  { question: "Where is Smile Avenue Katy located?", answer: "We're at 23541 Westheimer Pkwy Ste #170, Katy, TX 77494 — conveniently located along Westheimer Parkway, serving Katy, Cinco Ranch, Cross Creek Ranch, Firethorne, and surrounding communities." },
  { question: "What insurance do you accept at the Katy office?", answer: "We accept most major PPO plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, and more. Our team will verify your coverage before your visit." },
  { question: "Do you offer same-day emergency appointments in Katy?", answer: "Yes. If you're experiencing a dental emergency, call us at (281) 800-5008 and we'll do our best to see you the same day." },
  { question: "What are your Katy office hours?", answer: "We're open Monday through Friday, 8am to 5pm, with Saturday appointments available by request." },
  { question: "Can my whole family be seen at the Katy location?", answer: "Absolutely. We treat patients of all ages — from toddlers to grandparents. Our team specializes in gentle care for kids and comprehensive treatment for adults." },
];

const KatyTx = () => {
  useDocTitle("Dentist in Katy, TX | Smile Avenue Family Dentistry");

  return (
    <>
      <Helmet>
        <title>Dentist in Katy, TX | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Your family dentist in Katy, TX. Personalized care, advanced comfort, and same-day appointments at 23541 Westheimer Pkwy. Serving Katy, Cinco Ranch, Cross Creek Ranch, and Firethorne families." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/katy-tx/" />
      </Helmet>
      <Navbar phone={KATY_PHONE} phoneFormatted={KATY_PHONE_FORMATTED} bookingUrl={KATY_BOOKING} />

      <main className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Katy, TX</span>
            </nav>

            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">SERVING KATY, CINCO RANCH & CROSS CREEK FAMILIES</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
                  Your Family Dentist in Katy, TX
                </h1>
                <p className="section-body">
                  At Smile Avenue Katy, we combine modern technology with hospitality-driven care to create a dental experience your whole family will love. Whether you need a routine cleaning, a same-day emergency visit, or a complete smile makeover — we're here for you.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <a href={KATY_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book at Katy
                  </a>
                  <a href={`tel:${KATY_PHONE}`} className="btn-secondary">
                    Call {KATY_PHONE_FORMATTED}
                  </a>
                </div>
                <p className="text-sm font-sans text-muted-foreground">
                  ⭐ 4.9 from 200+ Katy Reviews · Same-Day Appointments · All Ages Welcome
                </p>
              </div>
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.katyHero} alt="Smile Avenue Katy office on Westheimer Parkway" className="w-full h-full object-cover" fetchPriority="high" width={800} height={600} />
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
                <span className="text-sm font-sans text-foreground">Mon–Fri 8am–5pm | Sat by Appointment</span>
              </div>
            </div>
          </div>
        </section>

        {/* MEET OUR DOCTORS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">YOUR KATY CARE TEAM</p>
            <h2 className="section-heading">Meet Our Katy Doctors</h2>
            <p className="section-body max-w-2xl mx-auto">
              Our Katy team brings exceptional skill and genuine compassion to every visit. Get to know the doctors behind your smile.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">COMPREHENSIVE DENTAL CARE IN KATY</p>
            <h2 className="section-heading">Dental Services for Your Entire Family</h2>
            <p className="section-body max-w-2xl mx-auto">
              From preventive care to advanced cosmetic treatments, Smile Avenue Katy offers complete dental solutions for your whole family.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-left">
              {services.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              Explore All Katy Services →
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

        {/* SMILE GALLERY */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">KATY SMILE TRANSFORMATIONS</p>
            <h2 className="section-heading">Real Results from Our Katy Patients</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <BeforeAfterCard label="Porcelain Veneers" />
              <BeforeAfterCard label="Dental Implants" />
              <BeforeAfterCard label="Invisalign® Treatment" />
            </div>
            <Link to="/smile-gallery" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              View Full Katy Gallery →
            </Link>
          </div>
        </section>

        {/* WHY CHOOSE KATY */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.treatmentRoom} alt="Smile Avenue Katy treatment room interior" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </div>
              <div>
                <p className="kicker">WHY FAMILIES CHOOSE SMILE AVENUE KATY</p>
                <h2 className="section-heading">Your Neighborhood Dentist in Katy, TX</h2>
                <p className="section-body">
                  Located along Westheimer Parkway, Smile Avenue Katy serves families across Cinco Ranch, Firethorne, Cross Creek Ranch, and the greater Katy area. Our state-of-the-art office was designed with your comfort in mind.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Conveniently located on Westheimer Parkway near LaCenterra",
                    "Same-day emergency appointments available",
                    "Cozy blankets, Netflix, and noise-canceling headphones",
                    "Digital impressions — no goopy molds",
                    "Serving Cinco Ranch, Firethorne, Cross Creek & Katy",
                    "Most major insurance plans accepted",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={KATY_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book at Katy
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
              At our Katy office, we believe great dental care should be accessible. We offer multiple ways to make your treatment affordable.
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
                <h2 className="section-heading">Common Questions About Our Katy Office</h2>
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
        <section className="gradient-cta py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Book Your Katy Appointment?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Schedule your visit today at our Katy office. Your best smile is closer than you think.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={KATY_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">
                Book at Katy
              </a>
              <a href={`tel:${KATY_PHONE}`} className="btn-cta-outline">
                Call {KATY_PHONE_FORMATTED}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={KATY_PHONE} phoneFormatted={KATY_PHONE_FORMATTED} bookingUrl={KATY_BOOKING} />

      {/* LocalBusiness + Dentist Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Dentist"],
            name: "Smile Avenue Family Dentistry - Katy",
            image: "",
            telephone: "+1-281-800-5008",
            address: {
              "@type": "PostalAddress",
              streetAddress: "23541 Westheimer Pkwy Ste #170",
              addressLocality: "Katy",
              addressRegion: "TX",
              postalCode: "77494",
              addressCountry: "US",
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
          }),
        }}
      />
    </>
  );
};

export default KatyTx;
