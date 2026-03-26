import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Stethoscope, Wrench, SmilePlus, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Front Tooth Root Canal", description: "Front teeth typically have a single root canal, making treatment quicker. We restore the tooth with a natural-looking crown for a seamless result.", icon: <SmilePlus className="w-5 h-5" /> },
  { title: "Molar Root Canal", description: "Molars have multiple canals and require more precision. Our advanced tools and techniques ensure thorough treatment of every canal.", icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Root Canal Retreatment", description: "If a previous root canal hasn't healed properly, retreatment can save the tooth. We carefully re-clean and re-seal the canals.", icon: <Wrench className="w-5 h-5" /> },
  { title: "Post & Core Restoration", description: "After root canal therapy, a post and core may be placed inside the tooth to provide additional support for a crown.", icon: <Shield className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Diagnosis", description: "We take digital X-rays and examine the tooth to confirm infection and plan the root canal procedure." },
  { number: "02", title: "Numbing & Access", description: "The area is thoroughly numbed for comfort. We create a small opening to access the infected pulp inside the tooth." },
  { number: "03", title: "Cleaning & Shaping", description: "Infected tissue is carefully removed and the canals are cleaned, shaped, and disinfected." },
  { number: "04", title: "Sealing & Restoration", description: "The canals are filled and sealed. A crown is placed to protect the tooth and restore full function." },
];

const testimonials = [
  { quote: "I was terrified of getting a root canal, but Dr. Vuong made it completely painless. I didn't feel a thing! The relief from that toothache was immediate.", name: "Lisa M.", source: "Google Review" },
  { quote: "Had a root canal on a molar and it was honestly easier than getting a filling. The numbing was thorough and the team kept checking on me the whole time.", name: "Anthony R.", source: "Google Review" },
  { quote: "I put off my root canal for months out of fear. Wish I hadn't waited! The procedure was nothing like what I imagined. Smooth, painless, and done in about an hour.", name: "Rachel K.", source: "Google Review" },
];

const faqs = [
  { question: "How much does a root canal cost in Cypress, TX?", answer: "Root canal treatment typically ranges from $700–$1,200 depending on the tooth. Front teeth are generally less expensive than molars. Most dental insurance plans cover a significant portion of root canal treatment." },
  { question: "Is a root canal painful?", answer: "Modern root canals are virtually painless. We use advanced anesthesia techniques to ensure complete comfort. Most patients say the procedure feels similar to getting a filling." },
  { question: "How long does a root canal take?", answer: "Most root canals are completed in 60–90 minutes in a single visit. Complex cases involving molars or retreatment may take slightly longer." },
  { question: "What happens if I don't get a root canal?", answer: "An untreated infected tooth can lead to abscess, bone loss, and spread of infection. The tooth will eventually need to be extracted, and the infection can become a serious health concern." },
  { question: "Will I need a crown after a root canal?", answer: "In most cases, yes. A crown protects the treated tooth from fracture and restores its full strength and appearance. We offer same-day CEREC crowns so you may be able to complete everything in one visit." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const RootCanalCypress = () => (
  <>
    <Helmet>
      <title>Root Canal Cypress, TX | Pain-Free Treatment | Smile Avenue</title>
      <meta name="description" content="Root canal treatment in Cypress, TX. Pain-free endodontic therapy to save your tooth. Same-day crowns available. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/root-canal/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Root Canal</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">SAVE YOUR TOOTH IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Root Canal in Cypress, TX</h1>
          <p className="section-body">A root canal doesn't have to be something you dread. At Smile Avenue Cypress, we use advanced techniques and gentle care to make root canal treatment comfortable, efficient, and virtually pain-free — saving your natural tooth and relieving your pain fast.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["root-canal"] ? (<img src={SERVICE_IMAGES["root-canal"].url} alt={SERVICE_IMAGES["root-canal"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">ENDODONTIC THERAPY</p><h2 className="section-heading">What Is a Root Canal?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>A root canal is a dental procedure that treats infection inside a tooth. When the soft tissue (pulp) inside a tooth becomes infected due to deep decay, cracks, or trauma, a root canal removes the infected tissue, cleans and disinfects the canals, and seals the tooth to prevent future infection.</p><p>Root canal therapy saves teeth that would otherwise need to be <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">extracted</Link>. With modern anesthesia and technology, the procedure is no more uncomfortable than getting a filling — and it eliminates the severe pain caused by the infection. After a root canal, we typically place a <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">dental crown</Link> to protect and strengthen the treated tooth. For patients with dental anxiety, we offer <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">sedation dentistry</Link> options.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Heart className="w-5 h-5" />, label: "Gentle & Pain-Free" }, { icon: <Shield className="w-5 h-5" />, label: "Save Your Tooth" }, { icon: <Users className="w-5 h-5" />, label: "Experienced Team" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">ROOT CANAL OPTIONS</p><h2 className="section-heading">Endodontic Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Root Canal Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Appointment</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Don't Wait — Save Your Tooth Today</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Pain-free root canal treatment at Smile Avenue Cypress. Book now and feel better fast.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default RootCanalCypress;
