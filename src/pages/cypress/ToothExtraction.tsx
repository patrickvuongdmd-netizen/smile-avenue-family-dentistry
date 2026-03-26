import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Stethoscope, Wrench, AlertCircle, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Simple Extraction", description: "For teeth that are visible above the gumline and can be removed with standard instruments. Quick recovery, minimal discomfort.", icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Surgical Extraction", description: "For teeth that are impacted, broken below the gumline, or have complex root structures. Performed with care under sedation if needed.", icon: <Wrench className="w-5 h-5" /> },
  { title: "Wisdom Teeth Removal", description: "Third molars that are impacted, crowded, or causing pain are safely removed. We offer sedation for a comfortable experience.", icon: <AlertCircle className="w-5 h-5" /> },
  { title: "Post-Extraction Care", description: "Comprehensive aftercare instructions and follow-up to ensure proper healing. We also discuss tooth replacement options when appropriate.", icon: <Heart className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Evaluation & X-Rays", description: "We examine the tooth and take digital X-rays to plan the safest, most efficient extraction approach." },
  { number: "02", title: "Anesthesia & Comfort", description: "The area is thoroughly numbed. Sedation options are available for anxious patients or complex extractions." },
  { number: "03", title: "Gentle Extraction", description: "The tooth is carefully removed using specialized instruments designed to minimize trauma to surrounding tissue." },
  { number: "04", title: "Healing & Follow-Up", description: "We provide detailed aftercare instructions and schedule a follow-up to ensure proper healing." },
];

const testimonials = [
  { quote: "Had a tooth extracted that was causing me pain for months. The whole thing took about 20 minutes and I barely felt anything. Healing was quick too.", name: "Marcus J.", source: "Google Review" },
  { quote: "My daughter had all four wisdom teeth removed here. They used sedation and she had zero memory of the procedure. Recovery was smooth — she was eating normally in 3 days.", name: "Linda P.", source: "Google Review" },
  { quote: "I was so nervous about having a tooth pulled but Dr. Vuong was incredibly gentle and calming. The extraction was painless and the follow-up care was thorough.", name: "Gregory T.", source: "Google Review" },
];

const faqs = [
  { question: "How much does a tooth extraction cost in Cypress, TX?", answer: "Simple extractions typically range from $150–$350 per tooth. Surgical extractions and wisdom teeth removal range from $350–$650 per tooth. Most dental insurance covers a portion of extraction costs." },
  { question: "Does tooth extraction hurt?", answer: "No. We use local anesthesia to completely numb the area, and sedation is available for anxious patients. You'll feel pressure but no pain during the procedure. Post-extraction discomfort is manageable with over-the-counter pain medication." },
  { question: "How long is recovery after a tooth extraction?", answer: "Simple extractions heal within 1–2 weeks. Surgical extractions typically require 2–3 weeks. Most patients return to normal activities within 1–2 days. We provide detailed aftercare instructions to ensure smooth healing." },
  { question: "Should I replace a missing tooth after extraction?", answer: "In most cases, yes. Missing teeth can cause shifting, bite problems, and bone loss over time. We offer implants, bridges, and dentures as replacement options and will discuss what's best for your situation." },
  { question: "When should wisdom teeth be removed?", answer: "Wisdom teeth are typically removed in the late teens or early twenties, but can be extracted at any age if they're causing problems. Signs include pain, crowding, infection, or damage to adjacent teeth." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const ToothExtractionCypress = () => (
  <>
    <Helmet>
      <title>Tooth Extraction Cypress, TX | Smile Avenue Family Dentistry</title>
      <meta name="description" content="Tooth extraction in Cypress, TX. Simple & surgical extractions, wisdom teeth removal with sedation options. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/tooth-extraction/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Tooth Extraction</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">GENTLE EXTRACTIONS IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Tooth Extraction in Cypress, TX</h1>
          <p className="section-body">Sometimes a tooth needs to come out — whether it's damaged beyond repair, impacted, or causing crowding. At Smile Avenue Cypress, our gentle approach and sedation options make extractions as comfortable and stress-free as possible.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["tooth-extraction"] ? (<img src={SERVICE_IMAGES["tooth-extraction"].url} alt={SERVICE_IMAGES["tooth-extraction"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">WHEN EXTRACTION IS NEEDED</p><h2 className="section-heading">Understanding Tooth Extractions</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>While we always prioritize saving natural teeth, there are situations where extraction is the best course of action. Severe decay, advanced gum disease, irreparable fractures, crowding, and impacted wisdom teeth are common reasons a tooth may need to be removed.</p><p>Our team uses the latest techniques and instruments to make extractions as quick and comfortable as possible. We also discuss tooth replacement options before the procedure so you have a clear plan for restoring your smile.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Heart className="w-5 h-5" />, label: "Gentle Approach" }, { icon: <Shield className="w-5 h-5" />, label: "Sedation Available" }, { icon: <Users className="w-5 h-5" />, label: "Quick Recovery" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">EXTRACTION SERVICES</p><h2 className="section-heading">Extraction Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR EXTRACTION VISIT</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Extraction Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Appointment</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Need a Tooth Extraction?</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Gentle, stress-free extractions at Smile Avenue Cypress. Book your appointment today.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default ToothExtractionCypress;
