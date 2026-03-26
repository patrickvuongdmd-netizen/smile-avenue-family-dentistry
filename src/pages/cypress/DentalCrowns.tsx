import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Crown, Wrench, Sparkles, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Same-Day CEREC Crowns", description: "Using advanced CEREC technology, we design, mill, and place a permanent ceramic crown in a single visit — no temporary crown, no second appointment.", icon: <Zap className="w-5 h-5" /> },
  { title: "Porcelain Crowns", description: "All-ceramic crowns that match the natural translucency and color of your teeth for a seamless, beautiful restoration.", icon: <Crown className="w-5 h-5" /> },
  { title: "Zirconia Crowns", description: "Exceptionally strong and durable crowns ideal for back teeth that endure heavy chewing forces while still looking natural.", icon: <Shield className="w-5 h-5" /> },
  { title: "Crown Repair", description: "If an existing crown is cracked, loose, or damaged, we can repair or replace it to restore function and aesthetics.", icon: <Wrench className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Evaluation", description: "We examine the tooth and take digital scans to determine if a crown is the right solution." },
  { number: "02", title: "Digital Design", description: "Using CEREC technology, your crown is designed digitally for a precise, custom fit." },
  { number: "03", title: "In-House Milling", description: "Your crown is milled from a solid block of ceramic right in our office — no outside lab needed." },
  { number: "04", title: "Bonding & Polish", description: "The finished crown is bonded to your tooth, polished, and adjusted for a perfect bite." },
];

const testimonials = [
  { quote: "I got a same-day crown at Smile Avenue and couldn't believe it. Walked in with a broken tooth, walked out with a brand new crown — all in one visit!", name: "Amanda T.", source: "Google Review" },
  { quote: "The CEREC crown looks just like my natural teeth. No one can tell the difference. And not having to wear a temporary for weeks was such a relief.", name: "Steve R.", source: "Google Review" },
  { quote: "Dr. Vuong replaced an old metal crown with a beautiful porcelain one. The color match is perfect. I'm so happy with how it turned out.", name: "Diana K.", source: "Google Review" },
];

const faqs = [
  { question: "How much do dental crowns cost in Cypress, TX?", answer: "Dental crowns typically range from $800–$1,500 per tooth depending on the material. Most dental insurance plans cover a portion of crown costs. We also offer financing through CareCredit and Sunbit." },
  { question: "What is a CEREC same-day crown?", answer: "CEREC is a technology that allows us to design, fabricate, and place a permanent ceramic crown in a single appointment — usually about 90 minutes. No impressions, no temporaries, no second visit." },
  { question: "How long do dental crowns last?", answer: "With proper care, dental crowns typically last 10–15 years, and many last much longer. Regular checkups, good hygiene, and avoiding habits like teeth grinding help extend their lifespan." },
  { question: "Does getting a crown hurt?", answer: "No. We use local anesthesia to ensure you're completely comfortable during the procedure. Most patients report the process is painless and much easier than they expected." },
  { question: "Can a dental crown be whitened?", answer: "No, crowns don't respond to whitening treatments. If you're considering whitening, we recommend doing it before getting a crown so we can match the crown to your new, brighter shade." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const DentalCrownsCypress = () => (
  <>
    <Helmet>
      <title>Dental Crowns Cypress, TX | Same-Day CEREC | Smile Avenue</title>
      <meta name="description" content="Dental crowns in Cypress, TX. Same-day CEREC crowns, porcelain & zirconia options. Restore your tooth in one visit. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/dental-crowns/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Dental Crowns</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">SAME-DAY CEREC CROWNS IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dental Crowns in Cypress, TX</h1>
          <p className="section-body">A damaged or weakened tooth doesn't have to slow you down. At Smile Avenue Cypress, we offer same-day CEREC crowns — designed, milled, and placed in a single visit — so you can restore your smile without the hassle of temporaries and multiple appointments.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Crown Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["dental-crowns"] ? (<img src={SERVICE_IMAGES["dental-crowns"].url} alt={SERVICE_IMAGES["dental-crowns"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">RESTORE & PROTECT</p><h2 className="section-heading">What Are Dental Crowns?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>A dental crown is a custom-made cap that fits over a damaged, decayed, or weakened tooth to restore its shape, size, strength, and appearance. Crowns are one of the most common and versatile restorations in dentistry.</p><p>At Smile Avenue Cypress, we're proud to offer CEREC same-day crown technology. Using digital scanning and in-office milling, we can create a precise, high-quality ceramic crown while you wait — eliminating the need for messy impressions, temporary crowns, and a second appointment weeks later.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Same-Day CEREC" }, { icon: <Shield className="w-5 h-5" />, label: "Precision Fit" }, { icon: <Users className="w-5 h-5" />, label: "5,000+ Crowns Placed" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">CROWN OPTIONS</p><h2 className="section-heading">Crown Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE CEREC PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Dental Crown Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Crown Appointment</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Restore Your Smile in One Visit</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Same-day CEREC crowns at Smile Avenue Cypress. No temporaries, no second appointment.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DentalCrownsCypress;
