import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Wrench, Crown, SmilePlus, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Traditional Bridges", description: "The most common type — a pontic (false tooth) supported by crowns on the adjacent natural teeth. Durable and reliable for replacing one or more missing teeth.", icon: <Layers className="w-5 h-5" /> },
  { title: "Cantilever Bridges", description: "Used when only one adjacent tooth is available for support. Ideal for areas with lower biting force, such as front teeth.", icon: <Crown className="w-5 h-5" /> },
  { title: "Maryland Bridges", description: "A conservative option that uses a metal or porcelain framework bonded to the backs of adjacent teeth — minimal preparation required.", icon: <Shield className="w-5 h-5" /> },
  { title: "Implant-Supported Bridges", description: "Bridges anchored by dental implants rather than natural teeth. The strongest, most stable option for replacing multiple missing teeth.", icon: <SmilePlus className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Evaluation", description: "We examine the gap and supporting teeth, take X-rays, and discuss the best bridge option for your situation." },
  { number: "02", title: "Tooth Preparation", description: "Supporting teeth are prepared by reshaping them to accommodate the bridge crowns. Impressions are taken." },
  { number: "03", title: "Temporary Bridge", description: "A temporary bridge protects your prepared teeth while your permanent bridge is custom-fabricated." },
  { number: "04", title: "Final Placement", description: "Your permanent bridge is checked for fit, adjusted as needed, and cemented in place for a lasting restoration." },
];

const testimonials = [
  { quote: "My bridge looks and feels just like my natural teeth. You can't see where the bridge starts and my real teeth end. Really impressed with the craftsmanship.", name: "Linda H.", source: "Google Review" },
  { quote: "I was missing two teeth and the implant-supported bridge was the perfect solution. Rock solid, no slipping, and it looks completely natural.", name: "Michael S.", source: "Google Review" },
  { quote: "The whole bridge process was painless and much faster than I expected. Dr. Vuong explained every step clearly. Very happy with my results.", name: "Karen W.", source: "Google Review" },
];

const faqs = [
  { question: "How much do dental bridges cost in Cypress, TX?", answer: "Traditional bridges typically range from $2,000–$5,000 depending on the number of teeth being replaced. Implant-supported bridges cost more but offer superior longevity. Insurance often covers a portion of bridge costs." },
  { question: "How long do dental bridges last?", answer: "With proper care, dental bridges typically last 10–15 years, and some last much longer. Implant-supported bridges can last 20+ years. Good oral hygiene and regular checkups are key." },
  { question: "Is a bridge better than an implant?", answer: "Both are excellent options. Bridges are faster and less expensive upfront, while implants preserve bone and don't require altering adjacent teeth. We'll help you choose the best option for your specific situation." },
  { question: "Can I eat normally with a dental bridge?", answer: "Yes. Once your permanent bridge is placed and you've adjusted to it, you can eat most foods normally. We'll advise you on any specific precautions during your adjustment period." },
  { question: "How do I clean under a dental bridge?", answer: "We'll teach you to use floss threaders or interdental brushes to clean under the pontic (false tooth). Proper cleaning prevents decay in the supporting teeth and keeps your gums healthy." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const DentalBridgesCypress = () => (
  <>
    <Helmet>
      <title>Dental Bridges Cypress, TX | Smile Avenue Family Dentistry</title>
      <meta name="description" content="Dental bridges in Cypress, TX. Traditional, Maryland & implant-supported bridges to replace missing teeth. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/dental-bridges/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Dental Bridges</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">BRIDGE THE GAP IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dental Bridges in Cypress, TX</h1>
          <p className="section-body">A missing tooth affects your smile, your bite, and your confidence. Dental bridges at Smile Avenue Cypress provide a fixed, natural-looking solution that restores function and aesthetics — bridging the gap left by one or more missing teeth.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Bridge Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["dental-bridges"] ? (<img src={SERVICE_IMAGES["dental-bridges"].url} alt={SERVICE_IMAGES["dental-bridges"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">FIXED TOOTH REPLACEMENT</p><h2 className="section-heading">What Are Dental Bridges?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>A dental bridge is a fixed prosthetic that literally "bridges" the gap created by one or more missing teeth. It consists of one or more false teeth (pontics) held in place by dental crowns cemented onto the natural teeth or implants on either side of the gap.</p><p>Bridges restore your ability to chew and speak properly, maintain your facial shape, prevent remaining teeth from shifting, and distribute bite forces evenly. They're a time-tested, reliable solution that can be completed in just two to three appointments.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Quick Restoration" }, { icon: <Shield className="w-5 h-5" />, label: "Natural Look & Feel" }, { icon: <Users className="w-5 h-5" />, label: "Proven Results" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">BRIDGE OPTIONS</p><h2 className="section-heading">Bridge Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE BRIDGE PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Dental Bridge Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Bridge Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Bridge the Gap in Your Smile</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule a consultation and explore your dental bridge options.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DentalBridgesCypress;
