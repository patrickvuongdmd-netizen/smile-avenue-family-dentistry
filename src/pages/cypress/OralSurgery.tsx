import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Stethoscope, Wrench, Layers, Scan } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "IV Sedation Available", description: "Complete comfort throughout your procedure with IV sedation — you'll be deeply relaxed and have little to no memory of the surgery.", icon: <Shield className="w-5 h-5" /> },
  { title: "3D CBCT Imaging", description: "Advanced 3D cone beam CT scanning provides detailed surgical planning for precise, predictable outcomes.", icon: <Scan className="w-5 h-5" /> },
  { title: "All Procedures In-Office", description: "No hospital visits needed. All oral surgery procedures are performed comfortably in our modern Cypress office.", icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Comprehensive Care Under One Roof", description: "From surgical extractions to bone grafting to implant placement — everything handled by our experienced team.", icon: <Layers className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation with 3D Imaging", description: "3D CBCT scan and detailed examination to plan your surgical procedure with precision and predictability." },
  { number: "02", title: "Surgical Planning", description: "Your custom surgical plan is developed based on imaging, ensuring the safest and most effective approach." },
  { number: "03", title: "Procedure Under Sedation", description: "Your surgery is performed using advanced techniques with IV sedation for complete comfort." },
  { number: "04", title: "Post-Op Care", description: "Detailed aftercare instructions are provided to ensure proper healing and minimize discomfort." },
  { number: "05", title: "Follow-Up & Healing Monitoring", description: "Scheduled follow-up visits monitor your healing progress and address any concerns." },
];

const testimonials = [
  { quote: "Had bone grafting done in preparation for implants. The procedure was much easier than I expected. Everything was explained clearly and the recovery was smooth.", name: "Robert H.", source: "Google Review" },
  { quote: "All four wisdom teeth removed under IV sedation. I fell asleep and woke up with it all done. Zero pain during the procedure and minimal swelling after.", name: "Stephanie K.", source: "Google Review" },
  { quote: "Needed a sinus lift before getting implants. The team walked me through every step and the whole process went perfectly. Very grateful for their expertise.", name: "William C.", source: "Google Review" },
];

const faqs = [
  { question: "How much does oral surgery cost?", answer: "Costs depend on the procedure — wisdom teeth removal, bone grafting, sinus lifts, and surgical extractions all vary. Insurance may cover medically necessary procedures. CareCredit financing available." },
  { question: "Is IV sedation available?", answer: "Yes — IV sedation provides deep relaxation throughout your procedure. You'll be comfortable and have little to no memory of the surgery. Our team carefully monitors you throughout." },
  { question: "How long is recovery?", answer: "Recovery varies by procedure — typically 3-10 days for most oral surgery procedures. Complete bone healing for grafting and sinus lifts may take several months. We provide detailed aftercare instructions." },
  { question: "What is bone grafting?", answer: "Bone grafting restores jawbone density lost after tooth extraction or from periodontal disease. It creates a strong foundation for dental implant placement. Grafting material integrates with your natural bone over several months." },
  { question: "At what age should wisdom teeth be removed?", answer: "Typically late teens to early 20s, but wisdom teeth can be removed at any age if they're causing problems — pain, infection, crowding, or damage to adjacent teeth." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const OralSurgeryCypress = () => (
  <>
    <Helmet>
      <title>Oral Surgery in Cypress, TX - Smile Avenue Family Dentistry</title>
      <meta name="description" content="In-office oral surgery in Cypress, TX. Wisdom teeth, bone grafting, surgical extractions. IV sedation available. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/oral-surgery/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Oral Surgery</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">ORAL SURGERY IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Oral Surgery in Cypress, TX</h1>
          <p className="section-body">Not all dental procedures can be handled with a filling or crown. At Smile Avenue Cypress, we provide in-office oral surgery including wisdom teeth removal, bone grafting, and surgical extractions — all with IV sedation for your comfort.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Surgical Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["oral-surgery"] ? (<img src={SERVICE_IMAGES["oral-surgery"].url} alt="oral surgery procedure at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">IN-OFFICE SURGICAL CARE</p><h2 className="section-heading">Oral Surgery Services</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Our oral surgery services include wisdom teeth removal, bone grafting for <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">implant preparation</Link>, sinus lifts, surgical <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">extractions</Link>, and soft tissue procedures. All procedures are performed in-office with <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">IV sedation</Link> available — no hospital visits needed.</p><p>Our 3D CBCT imaging technology provides detailed visualization of your anatomy for precise surgical planning. Whether you need wisdom teeth removed, bone augmentation for future implants, or complex extractions, our experienced team handles everything under one roof. For patients considering <Link to="/cypress-tx/all-on-x-implants" className="text-primary hover:underline">All-on-X full-arch implants</Link>, we perform all necessary preparatory surgery in-house.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for Surgery</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE SURGICAL PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & INSURANCE</p><h2 className="section-heading">Oral Surgery Costs</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Costs vary by procedure. Insurance may cover medically necessary oral surgery procedures. We accept most major PPO plans and offer CareCredit financing for any remaining costs.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Oral Surgery Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Surgical Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Expert Oral Surgery, Right Here in Cypress</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule your surgical consultation today. IV sedation, 3D planning, and experienced care.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default OralSurgeryCypress;
