import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Layers, Crown, Shield, SmilePlus, Scan, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "In-House Lab Fabrication", description: "Our Smile Dental Lab fabricates your bridge on-site for precise fit, natural appearance, and faster completion.", icon: <Crown className="w-5 h-5" /> },
  { title: "Digital Impressions", description: "Comfortable digital scanning replaces goopy molds for more accurate results.", icon: <Scan className="w-5 h-5" /> },
  { title: "Faster Turnaround", description: "Our in-house lab fabricates bridges faster than practices that outsource — fewer appointments and shorter wait times.", icon: <Zap className="w-5 h-5" /> },
  { title: "Implant-Supported Bridges", description: "For maximum durability, we offer bridges anchored by dental implants — preserving bone and adjacent teeth.", icon: <Shield className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Evaluation & Treatment Planning", description: "We examine the gap and supporting teeth, take digital X-rays and impressions, and discuss the best bridge option." },
  { number: "02", title: "Tooth Preparation & Impressions", description: "Supporting teeth are prepared and precise digital impressions are taken and sent to our in-house lab." },
  { number: "03", title: "Bridge Fabrication In-House", description: "Your custom bridge is fabricated in our Smile Dental Lab for precise color matching and natural appearance." },
  { number: "04", title: "Fitting & Permanent Cementation", description: "Your bridge is checked for fit, adjusted as needed, and permanently cemented for a lasting restoration." },
];

const testimonials = [
  { quote: "My bridge looks and feels just like my natural teeth. You can't see where the bridge starts and my real teeth end. Really impressed with the craftsmanship.", name: "Linda H.", source: "Google Review" },
  { quote: "I was missing two teeth and the implant-supported bridge was the perfect solution. Rock solid, no slipping, and it looks completely natural.", name: "Michael S.", source: "Google Review" },
  { quote: "The whole bridge process was painless and much faster than I expected. Dr. Vuong explained every step clearly. Very happy with my results.", name: "Karen W.", source: "Google Review" },
];

const faqs = [
  { question: "How much do dental bridges cost?", answer: "Costs depend on the type of bridge and number of teeth involved. Insurance usually covers a portion. CareCredit financing and our Membership Plan are available for out-of-pocket costs." },
  { question: "How long do dental bridges last?", answer: "With proper care, dental bridges typically last 10-15+ years. Implant-supported bridges can last even longer. Good oral hygiene and regular checkups are key to longevity." },
  { question: "Bridge vs implant — which is better?", answer: "Both are excellent options. Implants preserve bone and don't require altering adjacent teeth, but require surgery and healing time. Bridges are faster and less invasive. We'll help you choose the best option for your situation." },
  { question: "Can I eat normally with a dental bridge?", answer: "Yes — dental bridges function like natural teeth. Once placed and adjusted, you can eat most foods normally without restriction." },
  { question: "How long does the bridge process take?", answer: "Usually 2 visits over 2-3 weeks. Our in-house lab provides faster turnaround than practices that outsource to external labs." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const DentalBridgesCypress = () => (
  <>
    <Helmet>
      <title>Dental Bridges in Cypress, TX - Smile Avenue Family Dentistry</title>
      <meta name="description" content="Custom dental bridges in Cypress, TX. Replace missing teeth with fixed bridges. In-house lab precision. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/dental-bridges/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Dental Bridges</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">DENTAL BRIDGES IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dental Bridges in Cypress, TX</h1>
          <p className="section-body">A gap in your smile affects more than appearance — it impacts chewing, speech, and the alignment of surrounding teeth. Dental bridges at Smile Avenue Cypress provide a fixed, natural-looking solution.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Bridge Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["dental-bridges"] ? (<img src={SERVICE_IMAGES["dental-bridges"].url} alt="dental bridge restoration at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">REPLACE MISSING TEETH</p><h2 className="section-heading">What Are Dental Bridges?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>A dental bridge spans the gap created by one or more missing teeth. It's anchored by <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">crowns</Link> placed on adjacent teeth (or <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>) with a false tooth (pontic) filling the gap. Types include traditional bridges, cantilever bridges, Maryland bridges, and implant-supported bridges.</p><p>Every bridge at Smile Avenue is fabricated in our in-house Smile Dental Lab for precise fit and natural appearance. Without treatment, a missing tooth gap can lead to shifting of surrounding teeth, bite problems, and bone loss. Bridges restore function, appearance, and protect your long-term oral health. For patients who prefer a non-removable option over <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link>, bridges are an excellent choice.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for Bridges</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE BRIDGE PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & FINANCING</p><h2 className="section-heading">Bridge Investment</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Bridge costs vary by type and number of teeth involved. Insurance often covers a significant portion of dental bridge treatment. We accept most major PPO plans and offer financing through CareCredit. Our Membership Plan provides additional savings for uninsured patients.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Bridge Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Bridge Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Close the Gap in Your Smile</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule your bridge consultation and restore your complete, confident smile.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DentalBridgesCypress;
