import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Crown, Wrench, Scan, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "In-House Smile Dental Lab", description: "Custom crowns designed and fabricated on-site for precise fit, faster turnaround, and perfect shade matching — no outsourcing.", icon: <Zap className="w-5 h-5" /> },
  { title: "Digital Medit Impressions", description: "No goopy molds. We use Medit digital scanners for precise, comfortable impressions that produce better-fitting crowns.", icon: <Scan className="w-5 h-5" /> },
  { title: "Porcelain & Zirconia Options", description: "We offer both Emax porcelain and zirconia crown materials — each custom-selected to match your tooth and functional needs.", icon: <Wrench className="w-5 h-5" /> },
  { title: "Natural Shade-Matched Appearance", description: "Every crown is custom color-matched to blend seamlessly with your natural teeth for an invisible restoration.", icon: <Crown className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Examination & Digital Scan", description: "We examine the tooth and take a precise 3D digital scan using our Medit scanner — no goopy impressions needed." },
  { number: "02", title: "Crown Design", description: "Your crown is designed using a digital workflow for a custom, precise fit and natural appearance." },
  { number: "03", title: "In-House Fabrication", description: "Your crown is fabricated in our Smile Dental Lab using high-quality porcelain or zirconia for strength and beauty." },
  { number: "04", title: "Fitting & Permanent Bonding", description: "Your finished crown is fitted, adjusted for a perfect bite, and permanently bonded at your follow-up appointment." },
];

const testimonials = [
  { quote: "My crown from Smile Avenue looks just like my natural teeth. The digital scan was comfortable and the in-house lab did an incredible job with the color match.", name: "Amanda T.", source: "Google Review" },
  { quote: "I was impressed by how fast I got my crown — much quicker than my old dentist who sent everything to an outside lab. And the fit is perfect.", name: "Steve R.", source: "Google Review" },
  { quote: "Dr. Vuong replaced an old metal crown with a beautiful porcelain one. The color match is perfect. I'm so happy with how it turned out.", name: "Diana K.", source: "Google Review" },
];

const faqs = [
  { question: "How much do crowns cost in Cypress?", answer: "Depends on material and insurance coverage. Most PPO plans provide partial coverage for dental crowns. We also offer CareCredit financing and our membership plan for uninsured patients." },
  { question: "How many visits for a crown?", answer: "Our in-house Smile Dental Lab allows for faster turnaround than practices that outsource to external labs. Most crown cases are completed in two visits — one for preparation and impressions, and one for final placement." },
  { question: "How long do dental crowns last?", answer: "10–15+ years with proper care. Regular checkups, good hygiene, and avoiding habits like teeth grinding help extend their lifespan." },
  { question: "What crown materials do you offer?", answer: "We offer both Emax porcelain and zirconia crowns. Our in-house Smile Dental Lab fabricates each crown with precise shade matching for a natural, seamless result." },
  { question: "Does getting a crown hurt?", answer: "No. Local anesthesia ensures complete comfort during the procedure. Sedation is also available for anxious patients." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const DentalCrownsCypress = () => (
  <>
    <Helmet>
      <title>Dental Crowns in Cypress, TX - Same-Day CEREC - Smile Avenue</title>
      <meta name="description" content="Same-day CEREC dental crowns in Cypress, TX. No temporary, no second visit. Digital precision, in-house lab. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/dental-crowns/" />
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      {/* HERO */}
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Dental Crowns</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">SAME-DAY CEREC CROWNS IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dental Crowns in Cypress, TX</h1>
          <p className="section-body">A damaged tooth does not have to mean weeks of waiting with a temporary crown. At Smile Avenue Cypress, we offer same-day CEREC crowns designed, milled, and placed in a single appointment. One visit. One crown. Done.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Crown Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["dental-crowns"] ? (<img src={SERVICE_IMAGES["dental-crowns"].url} alt="patient receiving dental crown at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      {/* EDUCATIONAL */}
      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl">
        <p className="kicker">ABOUT DENTAL CROWNS</p>
        <h2 className="section-heading">What Is a Dental Crown?</h2>
        <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
          <p>A dental crown is a custom cap that covers and protects a damaged tooth, restoring its shape, size, strength, and appearance. Crowns are used for post-<Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canal</Link> protection, severe decay repair, cracked tooth repair, <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implant</Link> coverage, cosmetic improvement, and <Link to="/cypress-tx/dental-bridges" className="text-primary hover:underline">bridge</Link> anchoring.</p>
          <p>At Smile Avenue Cypress, we use CEREC technology to create precision-milled porcelain crowns in-office. No goopy impressions, no temporaries, no second appointment. Patients from Towne Lake, Spring Cypress, and Cypress get permanent crowns in one visit.</p>
        </div>
      </div></section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-background"><div className="container mx-auto text-center">
        <p className="kicker">WHY SMILE AVENUE</p>
        <h2 className="section-heading">Why Choose Us for Dental Crowns</h2>
        <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (
          <div key={s.title} className="bg-card rounded-xl p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}</div>
      </div></section>

      {/* PROCESS */}
      <section className="section-padding section-alt"><div className="container mx-auto text-center">
        <p className="kicker">THE CEREC PROCESS</p>
        <h2 className="section-heading">What to Expect</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (
          <div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left">
            <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span>
            <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}</div>
      </div></section>

      {/* COST & FINANCING */}
      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4"><DollarSign className="w-6 h-6" /></div>
        <h2 className="section-heading">Cost & Financing</h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          Crown costs vary by material type and insurance coverage. Most PPO dental plans cover a portion of crown costs. We also accept CareCredit financing and offer discounts through our <Link to="/membership-plan" className="text-primary hover:underline">Smile Avenue Membership Plan</Link> for uninsured patients.
        </p>
      </div></section>

      {/* FAQ */}
      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Dental Crown Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      {/* REVIEWS */}
      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      {/* LOCATION */}
      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Crown Appointment</a></div></div></section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Restore Your Smile in One Visit</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Same-day CEREC crowns at Smile Avenue Cypress. No temporaries, no second appointment.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DentalCrownsCypress;
