import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, SmilePlus, Wrench, Crown, Stethoscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Full Dentures", description: "Complete dentures replace an entire arch of missing teeth. Custom-crafted for a natural look and comfortable fit that restores your ability to eat, speak, and smile.", icon: <SmilePlus className="w-5 h-5" /> },
  { title: "Partial Dentures", description: "When you're missing several teeth but still have healthy ones remaining, partial dentures fill the gaps and prevent shifting of your natural teeth.", icon: <Crown className="w-5 h-5" /> },
  { title: "Implant-Supported Dentures", description: "Dentures anchored by dental implants for superior stability — no adhesives, no slipping. The gold standard in removable tooth replacement.", icon: <Shield className="w-5 h-5" /> },
  { title: "Denture Repair & Reline", description: "Broken, cracked, or ill-fitting dentures repaired quickly. Relines restore a snug fit as your jaw changes shape over time.", icon: <Wrench className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation", description: "We evaluate your oral health, discuss your goals, and determine the best denture solution for your needs." },
  { number: "02", title: "Impressions & Design", description: "Precise impressions and bite records are taken to create dentures that fit comfortably and look natural." },
  { number: "03", title: "Try-In Appointment", description: "You try a wax model of your dentures so we can verify the fit, bite, and appearance before final fabrication." },
  { number: "04", title: "Delivery & Adjustment", description: "Your finished dentures are delivered, adjusted for comfort, and you receive care instructions for long-lasting wear." },
];

const testimonials = [
  { quote: "My new dentures from Smile Avenue look so natural — even my friends can't tell they're not real teeth. The fit is comfortable and I can eat everything again.", name: "Patricia A.", source: "Google Review" },
  { quote: "I switched to implant-supported dentures and it was life-changing. No more adhesive, no more worrying about them slipping. Wish I'd done it years ago.", name: "George F.", source: "Google Review" },
  { quote: "The team was so patient with me during the whole denture process. Multiple fittings to get everything just right. The final result was worth the wait.", name: "Dorothy N.", source: "Google Review" },
];

const faqs = [
  { question: "How much do dentures cost in Cypress, TX?", answer: "Full dentures range from $1,000–$3,000 per arch. Partial dentures range from $800–$2,500. Implant-supported dentures start around $5,000 per arch. We offer financing to make treatment affordable." },
  { question: "How long does it take to get dentures?", answer: "The complete denture process typically takes 4–6 weeks from initial impressions to final delivery. This includes multiple appointments for impressions, try-ins, and adjustments." },
  { question: "Can I eat normally with dentures?", answer: "Yes, though there's an adjustment period. Most patients adapt within a few weeks. Implant-supported dentures offer the most natural eating experience, allowing you to enjoy a wider variety of foods." },
  { question: "How do I care for my dentures?", answer: "Remove and brush dentures daily with a soft brush and denture cleaner. Soak them overnight in denture solution. Continue to clean your gums and any remaining teeth, and visit us regularly for checkups." },
  { question: "When should I replace my dentures?", answer: "Dentures typically need replacement every 5–7 years as your jaw shape changes. Regular checkups help us monitor fit and recommend relining or replacement when needed." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const DenturesCypress = () => (
  <>
    <Helmet>
      <title>Dentures Cypress, TX | Full & Partial | Smile Avenue</title>
      <meta name="description" content="Dentures in Cypress, TX. Full dentures, partial dentures & implant-supported options. Restore your smile comfortably. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/dentures/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Dentures</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">TOOTH REPLACEMENT IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dentures in Cypress, TX</h1>
          <p className="section-body">Missing teeth shouldn't hold you back. At Smile Avenue Cypress, we create custom dentures that look natural, fit comfortably, and restore your confidence — from full and partial dentures to advanced implant-supported options.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Denture Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center shadow-md"><span className="text-sm font-sans text-muted-foreground">Dentures Photo</span></div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">RESTORE YOUR SMILE</p><h2 className="section-heading">Modern Denture Solutions</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Today's dentures are nothing like the bulky, obvious prosthetics of the past. Advances in materials and fabrication techniques mean modern dentures look remarkably natural and fit more comfortably than ever before.</p><p>Whether you need to replace all of your teeth or just a few, we offer solutions ranging from traditional removable dentures to implant-supported options that snap securely into place. We'll work with you to find the right balance of function, aesthetics, and budget.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Natural Looking" }, { icon: <Shield className="w-5 h-5" />, label: "Custom Fit" }, { icon: <Users className="w-5 h-5" />, label: "Experienced Team" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">DENTURE OPTIONS</p><h2 className="section-heading">Denture Solutions We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE DENTURE PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Denture Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Denture Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Restore Your Smile with Custom Dentures</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule a denture consultation and discover the right solution for your smile.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DenturesCypress;
