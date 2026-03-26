import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Heart, Users, Zap, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "Gentle Modern Approach", description: "Advanced rotary instruments and precise techniques make modern root canals comfortable and efficient.", icon: <Heart className="w-5 h-5" /> },
  { title: "Sedation for Comfort", description: "Anxious about dental work? We offer sedation options so you can relax completely during your procedure.", icon: <Shield className="w-5 h-5" /> },
  { title: "Crown Placement After Treatment", description: "Our in-house Smile Dental Lab fabricates your permanent crown quickly — faster turnaround than practices that outsource.", icon: <Crown className="w-5 h-5" /> },
  { title: "Pain Relief, Not Pain", description: "Root canal treatment relieves the severe pain of infection. Most patients feel dramatically better immediately.", icon: <Zap className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Diagnosis", description: "Digital X-rays and examination to confirm infection, assess the tooth, and plan your treatment." },
  { number: "02", title: "Anesthesia & Sedation", description: "Thorough local anesthesia ensures complete comfort. Optional sedation available for anxious patients." },
  { number: "03", title: "Infected Pulp Removal", description: "Infected tissue is carefully removed, and the canals are cleaned, shaped, and disinfected." },
  { number: "04", title: "Canals Filled & Sealed", description: "The canals are filled with biocompatible material and sealed to prevent reinfection." },
  { number: "05", title: "Crown Placement", description: "A custom crown is fabricated in our in-house Smile Dental Lab and placed at your follow-up visit to protect and restore the tooth." },
];

const testimonials = [
  { quote: "I was terrified of getting a root canal, but Dr. Vuong made it completely painless. I didn't feel a thing! The relief from that toothache was immediate.", name: "Lisa M.", source: "Google Review" },
  { quote: "Had a root canal on a molar and it was honestly easier than getting a filling. The numbing was thorough and the team kept checking on me the whole time.", name: "Anthony R.", source: "Google Review" },
  { quote: "I put off my root canal for months out of fear. Wish I hadn't waited! The procedure was nothing like what I imagined. Smooth, painless, and done in about an hour.", name: "Rachel K.", source: "Google Review" },
];

const faqs = [
  { question: "How much does a root canal cost in Cypress, TX?", answer: "Costs vary by tooth — front teeth are simpler than molars. Most dental insurance plans cover a significant portion of root canal treatment. CareCredit financing and our membership plan are also available." },
  { question: "Is a root canal painful?", answer: "No — modern root canals actually relieve the severe pain caused by infection. We use advanced anesthesia and sedation options to ensure complete comfort throughout the procedure." },
  { question: "How long does a root canal take?", answer: "Most root canals are completed in 60-90 minutes. With our same-day CEREC crown option, you can have the entire treatment — root canal and permanent crown — done in a single visit." },
  { question: "What happens if I skip a root canal?", answer: "An untreated infected tooth will worsen. The infection can spread to surrounding teeth and bone, cause an abscess, and ultimately result in tooth loss. The tooth will eventually need to be extracted." },
  { question: "Do I need a crown after a root canal?", answer: "Usually yes — a crown protects the treated tooth from fracture and restores full strength. Our CEREC same-day crowns mean you can complete everything in one visit." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const RootCanalCypress = () => (
  <>
    <Helmet>
      <title>Root Canal Treatment in Cypress, TX - Gentle Care - Smile Avenue</title>
      <meta name="description" content="Painless root canal in Cypress, TX. Save your natural tooth with gentle modern care. Sedation available. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/root-canal/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Root Canal</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">SAVE YOUR TOOTH IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Root Canal Treatment in Cypress, TX</h1>
          <p className="section-body">Modern root canal treatment at Smile Avenue Cypress is nothing like its reputation. With advanced technology, gentle technique, and sedation options, most patients are surprised by how comfortable it is — and relieved to be out of pain.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["root-canal"] ? (<img src={SERVICE_IMAGES["root-canal"].url} alt="patient receiving root canal treatment at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">ENDODONTIC THERAPY</p><h2 className="section-heading">What Is a Root Canal?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>A root canal saves a tooth with infected or inflamed pulp — the soft tissue inside the tooth containing nerves and blood vessels. Infection is typically caused by deep decay, repeated dental procedures, cracks, or trauma. During treatment, the infected pulp is removed, the inside of the tooth is cleaned, disinfected, and shaped, then filled, sealed, and protected with a <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">dental crown</Link>.</p><p>Without treatment, the infection spreads, the tooth is lost, and your health is at risk. Patients from Cy-Fair, Fry Road, and Cypress trust Smile Avenue for gentle, effective root canal therapy. If you're experiencing a <Link to="/cypress-tx/emergency-dentist" className="text-primary hover:underline">dental emergency</Link> with severe tooth pain, call us immediately. We also offer <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">sedation dentistry</Link> for anxious patients and <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">tooth extraction</Link> when a tooth cannot be saved.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for Root Canals</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & FINANCING</p><h2 className="section-heading">Root Canal Investment</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Root canal treatment is typically covered by dental insurance. Most PPO plans accepted. We also offer CareCredit financing and our Smile Avenue Membership Plan for patients without insurance.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Root Canal Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Appointment</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Don't Wait — Save Your Tooth Today</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Gentle root canal treatment at Smile Avenue Cypress. Call now and feel better fast.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default RootCanalCypress;
