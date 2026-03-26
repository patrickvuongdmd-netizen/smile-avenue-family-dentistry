import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Wind, Pill, Syringe, Baby } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Nitrous Oxide (Laughing Gas)", description: "A mild, inhaled sedative that helps you relax during treatment. You remain fully conscious and the effects wear off within minutes after your appointment.", icon: <Wind className="w-5 h-5" /> },
  { title: "Oral Sedation", description: "A prescription medication taken before your appointment that provides a deeper level of relaxation. You'll feel drowsy but can still respond to instructions.", icon: <Pill className="w-5 h-5" /> },
  { title: "IV Sedation", description: "Administered intravenously for maximum comfort during complex procedures. You'll have little to no memory of the procedure while being carefully monitored throughout.", icon: <Syringe className="w-5 h-5" /> },
  { title: "Sedation for Children", description: "Safe, age-appropriate sedation options for children who are anxious or need extensive treatment. Our team is specially trained in pediatric sedation techniques.", icon: <Baby className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation", description: "We discuss your anxiety level, medical history, and the procedure to recommend the ideal sedation option." },
  { number: "02", title: "Pre-Appointment Prep", description: "You'll receive specific instructions based on your sedation type — fasting guidelines, transportation needs, etc." },
  { number: "03", title: "Comfortable Treatment", description: "Your sedation is administered and carefully monitored throughout the procedure. You stay relaxed and pain-free." },
  { number: "04", title: "Recovery", description: "Depending on sedation level, you may need a driver home. We provide detailed aftercare instructions and follow up." },
];

const testimonials = [
  { quote: "I have severe dental anxiety and hadn't been to a dentist in 8 years. The IV sedation at Smile Avenue made it possible. I don't remember a thing and woke up with all my work done!", name: "Amanda G.", source: "Google Review" },
  { quote: "The nitrous oxide was perfect for my cleaning. I went from white-knuckling the chair to actually relaxing. Such a game changer for anxious patients like me.", name: "Tyler B.", source: "Google Review" },
  { quote: "My son needed several fillings and was terrified. The oral sedation worked beautifully — he was calm and cooperative, and had no memory of any discomfort.", name: "Natalie V.", source: "Google Review" },
];

const faqs = [
  { question: "How much does sedation dentistry cost in Cypress, TX?", answer: "Nitrous oxide is typically $50–$100 per visit. Oral sedation ranges from $150–$500. IV sedation costs $250–$900 depending on the length of the procedure. Some dental insurance plans cover sedation for certain procedures." },
  { question: "Is sedation dentistry safe?", answer: "Yes. Sedation dentistry is very safe when administered by trained professionals. We continuously monitor your vital signs throughout the procedure and follow strict safety protocols. We review your medical history thoroughly before recommending any sedation." },
  { question: "Will I be asleep during the procedure?", answer: "With nitrous oxide and oral sedation, you'll be relaxed but conscious. With IV sedation, you'll be in a deeply relaxed state and likely won't remember the procedure, though you're not fully unconscious like general anesthesia." },
  { question: "Can I drive home after sedation?", answer: "After nitrous oxide, yes — the effects wear off quickly. After oral or IV sedation, you'll need a responsible adult to drive you home. We'll provide specific instructions based on your sedation type." },
  { question: "Is sedation available for routine cleanings?", answer: "Absolutely. Sedation isn't just for complex procedures. If dental anxiety prevents you from getting routine care, nitrous oxide or oral sedation can make your cleaning comfortable and stress-free." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const SedationDentistryCypress = () => (
  <>
    <Helmet>
      <title>Sedation Dentistry Cypress, TX | Anxiety-Free | Smile Avenue</title>
      <meta name="description" content="Sedation dentistry in Cypress, TX. Nitrous oxide, oral sedation & IV sedation for anxiety-free dental care. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/sedation-dentistry/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Sedation Dentistry</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">ANXIETY-FREE DENTISTRY IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Sedation Dentistry in Cypress, TX</h1>
          <p className="section-body">Dental anxiety shouldn't keep you from the care you need. At Smile Avenue Cypress, we offer multiple levels of sedation — from mild relaxation to deep comfort — so every patient can receive treatment in a calm, stress-free environment.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Sedation Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center shadow-md"><span className="text-sm font-sans text-muted-foreground">Sedation Dentistry Photo</span></div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">RELAXED, COMFORTABLE CARE</p><h2 className="section-heading">What Is Sedation Dentistry?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Sedation dentistry uses medication to help patients relax during dental procedures. It's ideal for people with dental anxiety, fear of needles, a strong gag reflex, or those who need extensive treatment completed in fewer visits.</p><p>From mild nitrous oxide that wears off in minutes to IV sedation that lets you sleep through complex procedures, we tailor the level of sedation to your needs. Our team is specially trained in sedation techniques and monitors your vitals continuously for your safety and comfort.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Multiple Options" }, { icon: <Shield className="w-5 h-5" />, label: "Safe & Monitored" }, { icon: <Users className="w-5 h-5" />, label: "For All Ages" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">SEDATION OPTIONS</p><h2 className="section-heading">Sedation Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR SEDATION VISIT</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Sedation Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Sedation Appointment</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Dental Care Without the Anxiety</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Sedation dentistry at Smile Avenue Cypress makes every visit comfortable. Book today.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default SedationDentistryCypress;
