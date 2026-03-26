import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Stethoscope, Wrench, Layers, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Wisdom Teeth Removal", description: "Safe, comfortable removal of impacted or problematic wisdom teeth. Sedation options available for a stress-free experience.", icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Bone Grafting", description: "Rebuilds jawbone density lost after tooth extraction or from periodontal disease, creating a strong foundation for dental implants.", icon: <Layers className="w-5 h-5" /> },
  { title: "Sinus Lift", description: "A specialized procedure that adds bone to the upper jaw near the molars and premolars, enabling successful implant placement.", icon: <Wrench className="w-5 h-5" /> },
  { title: "Surgical Extractions", description: "Complex extractions for impacted, broken, or hard-to-reach teeth performed with precision instruments and sedation options.", icon: <Shield className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation & Imaging", description: "3D CT scans and detailed examination to plan your surgical procedure with precision." },
  { number: "02", title: "Sedation & Preparation", description: "Your comfort comes first. We administer sedation and thoroughly numb the surgical area." },
  { number: "03", title: "Surgical Procedure", description: "Your procedure is performed using advanced techniques and instruments for optimal outcomes." },
  { number: "04", title: "Recovery & Follow-Up", description: "Detailed aftercare instructions and scheduled follow-ups ensure proper healing." },
];

const testimonials = [
  { quote: "Had bone grafting done in preparation for implants. The procedure was much easier than I expected. Dr. Vuong explained everything clearly and the recovery was smooth.", name: "Robert H.", source: "Google Review" },
  { quote: "All four wisdom teeth removed under IV sedation. I fell asleep and woke up with it all done. Zero pain during the procedure and minimal swelling after.", name: "Stephanie K.", source: "Google Review" },
  { quote: "Needed a sinus lift before getting implants. The team walked me through every step and the whole process went perfectly. Very grateful for their expertise.", name: "William C.", source: "Google Review" },
];

const faqs = [
  { question: "How much does oral surgery cost in Cypress, TX?", answer: "Costs vary by procedure: wisdom teeth removal $350–$650 per tooth, bone grafting $300–$800 per site, sinus lifts $1,500–$3,000. Insurance often covers medically necessary procedures. We offer financing for out-of-pocket costs." },
  { question: "Is oral surgery painful?", answer: "No. All procedures are performed under local anesthesia with sedation options available. You won't feel pain during the surgery. Post-operative discomfort is manageable with prescribed or over-the-counter medication." },
  { question: "How long is recovery after oral surgery?", answer: "Recovery varies by procedure. Most patients return to normal activities within 2–5 days. Complete bone healing may take several months for procedures like bone grafting or sinus lifts." },
  { question: "Do you offer sedation for oral surgery?", answer: "Yes. We offer nitrous oxide (laughing gas), oral sedation, and IV sedation. Our team will recommend the best option based on your procedure and comfort level." },
  { question: "Do I need bone grafting for dental implants?", answer: "Not always. If you have adequate bone density, implants can be placed without grafting. If bone loss has occurred, grafting creates the foundation needed for successful implant placement. We'll determine this during your consultation." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const OralSurgeryCypress = () => (
  <>
    <Helmet>
      <title>Oral Surgery Cypress, TX | Wisdom Teeth & More | Smile Avenue</title>
      <meta name="description" content="Oral surgery in Cypress, TX. Wisdom teeth removal, bone grafting, sinus lifts & surgical extractions with sedation. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/oral-surgery/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Oral Surgery</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">SURGICAL PROCEDURES IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Oral Surgery in Cypress, TX</h1>
          <p className="section-body">From wisdom teeth removal to bone grafting for implants, Smile Avenue Cypress provides expert oral surgery services with advanced sedation options. Our experienced team ensures your safety, comfort, and optimal results throughout every procedure.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["oral-surgery"] ? (<img src={SERVICE_IMAGES["oral-surgery"].url} alt={SERVICE_IMAGES["oral-surgery"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">ADVANCED SURGICAL CARE</p><h2 className="section-heading">Oral Surgery at Smile Avenue</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Oral surgery encompasses a range of procedures that go beyond routine dental care. Whether you need wisdom teeth removed, bone rebuilt for implant placement, or a complex extraction, our team has the training, technology, and experience to deliver exceptional results.</p><p>We understand that the word "surgery" can be intimidating. That's why we offer multiple levels of sedation, thorough pre-operative consultations, and comprehensive aftercare to make your experience as comfortable and stress-free as possible.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Heart className="w-5 h-5" />, label: "Sedation Options" }, { icon: <Shield className="w-5 h-5" />, label: "Advanced Technology" }, { icon: <Users className="w-5 h-5" />, label: "Experienced Surgeons" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">SURGICAL SERVICES</p><h2 className="section-heading">Procedures We Perform</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR SURGICAL VISIT</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Oral Surgery Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Expert Oral Surgery in Cypress</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule a consultation and let our experienced team take care of you.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default OralSurgeryCypress;
