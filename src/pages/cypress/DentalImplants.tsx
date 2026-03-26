import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Stethoscope, SmilePlus, Wrench, Crown, FlaskConical, ScanLine, Heart, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756";
const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "In-House Smile Dental Lab", description: "Precise fit and faster turnaround on custom implant restorations — no outsourcing delays.", icon: <Building2 className="w-5 h-5" /> },
  { title: "3D CBCT & Digital Scanners", description: "Medit digital scanners and 3D CBCT imaging for surgical precision — no goopy impressions.", icon: <ScanLine className="w-5 h-5" /> },
  { title: "Sedation Options", description: "Complete comfort during your procedure with multiple sedation options available.", icon: <Heart className="w-5 h-5" /> },
  { title: "All Treatment Under One Roof", description: "No referrals to outside specialists — implant placement and restoration done right here.", icon: <FlaskConical className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Comprehensive Consultation", description: "3D CBCT scan and digital impressions to assess bone density and plan precise implant placement." },
  { number: "02", title: "Implant Placement Surgery", description: "Digitally guided implant placement into the jawbone under local anesthesia or sedation for maximum comfort." },
  { number: "03", title: "Healing Period", description: "3–6 months of osseointegration while wearing a temporary restoration so you're never without teeth." },
  { number: "04", title: "Final Crown Delivery", description: "Your permanent crown is designed and fabricated in our in-house Smile Dental Lab for a perfect fit." },
];

const testimonials = [
  { quote: "Dr. Vuong placed two implants for me and the results are incredible. They look completely natural and I can eat anything again. The whole process was easier than I expected.", name: "Richard M.", source: "Google Review" },
  { quote: "I was missing my front tooth for years and was embarrassed to smile. The implant Smile Avenue gave me changed my life. I smile all the time now!", name: "Sandra L.", source: "Google Review" },
  { quote: "Got All-on-4 implants at Smile Avenue Cypress and couldn't be happier. The team was so supportive throughout the entire journey. Worth every penny.", name: "Tom B.", source: "Google Review" },
];

const faqs = [
  { question: "How much do dental implants cost in Cypress, TX?", answer: "Costs vary based on your specific needs — we provide detailed estimates at your consultation. Financing is available through CareCredit and our Smile Avenue Membership Plan." },
  { question: "Am I a good candidate for dental implants?", answer: "Most adults with missing teeth qualify. You need adequate jawbone density and healthy gums. Bone grafting can restore structure if needed." },
  { question: "How long do dental implants last?", answer: "20+ years with proper care, and many last a lifetime." },
  { question: "Is the dental implant procedure painful?", answer: "Most patients are comfortable with local anesthesia and sedation options. Post-procedure discomfort is mild and managed with over-the-counter medication." },
  { question: "How long does the entire process take?", answer: "3–6 months total, mostly healing time. A temporary restoration is provided so you're never without teeth." },
];

const relatedServices = [
  { title: "All-on-X Implants", href: "/cypress-tx/all-on-x-implants" },
  { title: "Dental Crowns", href: "/cypress-tx/dental-crowns" },
  { title: "Dental Bridges", href: "/cypress-tx/dental-bridges" },
  { title: "Oral Surgery", href: "/cypress-tx/oral-surgery" },
];

const heroImg = SERVICE_IMAGES["dental-implants"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DentalService",
  name: "Dental Implants",
  description: "Permanent dental implant solutions in Cypress, TX. Advanced 3D planning, in-house lab for precise restorations. Sedation available.",
  url: "https://www.smileavenuefamilydentistry.com/cypress-tx/dental-implants/",
  provider: {
    "@type": "Dentist",
    name: "Smile Avenue Family Dentistry",
    address: { "@type": "PostalAddress", streetAddress: "9212 Fry Rd #120", addressLocality: "Cypress", addressRegion: "TX", postalCode: "77433", addressCountry: "US" },
    telephone: "(832) 648-1756",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const DentalImplantsCypress = () => (
  <>
    <Helmet>
      <title>Dental Implants in Cypress, TX - Smile Avenue Family Dentistry</title>
      <meta name="description" content="Permanent dental implant solutions in Cypress, TX. Advanced 3D planning, in-house lab for precise restorations. Sedation available. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/dental-implants/" />
      <meta property="og:title" content="Dental Implants in Cypress, TX - Smile Avenue Family Dentistry" />
      <meta property="og:description" content="Permanent dental implant solutions in Cypress, TX. Advanced 3D planning, in-house lab for precise restorations. Sedation available." />
      <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/cypress-tx/dental-implants/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      {/* HERO */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <nav className="mb-6 text-xs font-sans text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span>
            <Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span>
            <span className="text-foreground">Dental Implants</span>
          </nav>
          <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
            <div>
              <p className="kicker">PERMANENT TOOTH REPLACEMENT IN CYPRESS</p>
              <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dental Implants in Cypress, TX</h1>
              <p className="section-body">Missing teeth affect more than your smile — they impact your confidence, your ability to eat comfortably, and your long-term oral health. At Smile Avenue Family Dentistry in Cypress, Dr. Patrick Vuong and our team provide permanent dental implant solutions using advanced digital planning and our in-house Smile Dental Lab for precise, custom restorations.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Implant Consultation</a>
                <a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
              <img
                src={heroImg.url}
                alt="Patient receiving dental implants at Smile Avenue Family Dentistry Cypress TX"
                className="w-full h-full object-cover"
                fetchPriority="high"
                width={640}
                height={480}
              />
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl">
          <p className="kicker">UNDERSTANDING DENTAL IMPLANTS</p>
          <h2 className="section-heading">What Are Dental Implants?</h2>
          <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
            <p>A dental implant is a small titanium post surgically placed into the jawbone, where it fuses naturally with bone through osseointegration. Once healed, it serves as a permanent foundation for a custom crown, bridge, or full arch of teeth.</p>
            <p>Unlike <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link> or <Link to="/cypress-tx/dental-bridges" className="text-primary hover:underline">bridges</Link>, implants replicate natural tooth roots, prevent bone loss, preserve facial structure, and allow you to eat, speak, and smile with complete confidence.</p>
            <p>For families throughout Bridgeland, Towne Lake, and greater Cypress, Smile Avenue is the trusted choice for implant dentistry. We also offer full-arch solutions like <Link to="/cypress-tx/all-on-x-implants" className="text-primary hover:underline">All-on-4 and All-on-6 implants</Link> for patients missing most or all of their teeth, with <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">sedation options</Link> for complete comfort.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <p className="kicker">WHY SMILE AVENUE</p>
          <h2 className="section-heading">Why Choose Us for Dental Implants</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (
            <div key={s.title} className="bg-card rounded-xl p-6 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}</div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <p className="kicker">THE IMPLANT PROCESS</p>
          <h2 className="section-heading">What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (
            <div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left">
              <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span>
              <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}</div>
        </div>
      </section>

      {/* COST & FINANCING */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <p className="kicker">INVESTMENT</p>
          <h2 className="section-heading">Cost & Financing</h2>
          <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
            <p>The cost of dental implants varies based on the number of implants needed, bone grafting requirements, and the type of restoration. We provide detailed estimates at your consultation so there are no surprises.</p>
            <p>We accept most major PPO insurance plans and offer flexible financing through CareCredit. Our Smile Avenue Membership Plan is also available for patients without insurance.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
            <div>
              <p className="kicker">FAQ</p>
              <h2 className="section-heading">Dental Implant Questions</h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <p className="kicker">PATIENT REVIEWS</p>
          <h2 className="section-heading">What Patients Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <p className="kicker">EXPLORE MORE</p>
          <h2 className="section-heading">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {relatedServices.map(r => (
              <Link key={r.href} to={r.href} className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                {r.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE INFO */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3>
            <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
              <div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div>
              <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div>
              <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div>
            </div>
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Implant Consultation</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Start Your Implant Journey Today</h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule a consultation and discover how dental implants can restore your smile permanently.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a>
            <a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a>
          </div>
        </div>
      </section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DentalImplantsCypress;
