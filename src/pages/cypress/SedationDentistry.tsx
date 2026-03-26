import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Wind, Pill, Syringe, Tv, Headphones, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "Multiple Sedation Levels", description: "From mild relaxation (nitrous oxide) to deep sedation (IV) — we match the sedation level to your anxiety and procedure.", icon: <Heart className="w-5 h-5" /> },
  { title: "Comfort Amenities", description: "Blankets, Netflix on ceiling-mounted TVs, and noise-canceling headphones make every visit more comfortable.", icon: <Tv className="w-5 h-5" /> },
  { title: "Experienced Sedation Team", description: "Our team is specially trained in sedation administration with continuous vital sign monitoring throughout every procedure.", icon: <Syringe className="w-5 h-5" /> },
  { title: "All Procedures Under Sedation", description: "From routine cleanings to oral surgery — every procedure at Smile Avenue can be performed with sedation.", icon: <Wind className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation", description: "We discuss your anxiety level, medical history, and the planned procedure to recommend the ideal sedation option." },
  { number: "02", title: "Sedation Plan Customized", description: "Your sedation plan is tailored to your specific needs — from mild nitrous oxide to deep IV sedation." },
  { number: "03", title: "Pre-Appointment Instructions", description: "You'll receive specific instructions based on your sedation type — fasting guidelines, transportation needs, etc." },
  { number: "04", title: "Sedation Administered", description: "Your sedation is administered and carefully monitored throughout the procedure. You stay relaxed and comfortable." },
  { number: "05", title: "Recovery & Post-Care", description: "Depending on sedation level, you may need a driver home. We provide detailed aftercare instructions and follow up." },
];

const testimonials = [
  { quote: "I have severe dental anxiety and hadn't been to a dentist in 8 years. The IV sedation made it possible. I don't remember a thing and woke up with all my work done!", name: "Amanda G.", source: "Google Review" },
  { quote: "The nitrous oxide was perfect for my cleaning. I went from white-knuckling the chair to actually relaxing. Such a game changer for anxious patients like me.", name: "Tyler B.", source: "Google Review" },
  { quote: "My son needed several fillings and was terrified. The oral sedation worked beautifully — he was calm and cooperative, and had no memory of any discomfort.", name: "Natalie V.", source: "Google Review" },
];

const faqs = [
  { question: "How much does sedation cost?", answer: "Varies by sedation type — nitrous oxide is the most affordable, IV sedation costs more but provides the deepest relaxation. We discuss costs during your consultation. Insurance may cover sedation for certain procedures." },
  { question: "Is sedation dentistry safe?", answer: "Yes — sedation is administered by trained professionals with continuous vital sign monitoring throughout every procedure. We review your complete medical history before recommending any sedation option." },
  { question: "Will I be unconscious?", answer: "It depends on the level. Nitrous oxide provides mild relaxation while you remain fully conscious. Oral sedation makes you drowsy but responsive. IV sedation provides deep relaxation — you likely won't remember the procedure, but it's not general anesthesia." },
  { question: "Can I drive home after sedation?", answer: "After nitrous oxide, yes — the effects wear off within minutes. After oral or IV sedation, you'll need a responsible adult to drive you home. We provide specific instructions based on your sedation type." },
  { question: "Which sedation is right for me?", answer: "We recommend based on your anxiety level, medical history, and the procedure being performed. Nitrous is great for mild anxiety, oral sedation for moderate anxiety, and IV sedation for severe anxiety or complex procedures." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const SedationDentistryCypress = () => (
  <>
    <Helmet>
      <title>Sedation Dentistry in Cypress, TX - Anxiety-Free Care - Smile Avenue</title>
      <meta name="description" content="Sedation dentistry in Cypress, TX. Nitrous oxide, oral and IV sedation for anxiety-free dental care. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/sedation-dentistry/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Sedation Dentistry</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">ANXIETY-FREE DENTISTRY IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Sedation Dentistry in Cypress, TX</h1>
          <p className="section-body">Dental anxiety is real, and it should never prevent you from getting the care you need. At Smile Avenue Cypress, we offer multiple sedation options — from mild relaxation to deep sedation — so every patient can receive treatment comfortably.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Anxiety-Free Visit</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["sedation-dentistry"] ? (<img src={SERVICE_IMAGES["sedation-dentistry"].url} alt="comfortable sedation dentistry at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">RELAXATION OPTIONS</p><h2 className="section-heading">Sedation Options for Every Comfort Level</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>We offer three levels of sedation: <strong>Nitrous oxide</strong> (laughing gas) for mild relaxation — you remain fully conscious and effects wear off within minutes. <strong>Oral sedation</strong> (a pill taken before your appointment) for deeper relaxation — you'll feel drowsy but can still respond. <strong>IV sedation</strong> for the deepest level of relaxation — you'll have little to no memory of the procedure.</p><p>Beyond sedation, we provide comfort amenities including warm blankets, Netflix on ceiling-mounted TVs, and noise-canceling headphones. Sedation is ideal for dental anxiety, strong gag reflex, extensive procedures, and special needs patients. Whether you need a routine <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">cleaning</Link>, <Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canal</Link>, or <Link to="/cypress-tx/oral-surgery" className="text-primary hover:underline">oral surgery</Link>, we can make it comfortable. Families across Cy-Fair and Cypress trust us for anxiety-free dental care.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for Sedation</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR SEDATION EXPERIENCE</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & INSURANCE</p><h2 className="section-heading">Sedation Costs</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Sedation fees vary by type — nitrous oxide is the most affordable per visit, while IV sedation costs more but provides the deepest level of comfort. Insurance may cover sedation for certain procedures. We discuss all costs upfront during your consultation and offer CareCredit financing.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Sedation Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Anxiety-Free Visit</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Dental Care Without the Anxiety</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Don't let fear keep you from the care you deserve. Schedule your anxiety-free visit today.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default SedationDentistryCypress;
