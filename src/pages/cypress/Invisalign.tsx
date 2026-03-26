import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, SmilePlus, User, Sparkles, RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Teen Invisalign", description: "Designed specifically for teenagers, with compliance indicators and room for growing teeth. Straighten your teen's smile without the stigma of metal braces.", icon: <User className="w-5 h-5" /> },
  { title: "Adult Invisalign", description: "It's never too late for a straighter smile. Adult Invisalign discreetly corrects crowding, gaps, and bite issues without disrupting your professional life.", icon: <SmilePlus className="w-5 h-5" /> },
  { title: "Invisalign Lite", description: "A shorter treatment option for mild alignment issues like minor crowding or small gaps. Fewer aligners, lower cost, faster results.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Retainers", description: "After your Invisalign treatment, custom retainers keep your new smile in place. We offer both removable and permanent retainer options.", icon: <RotateCcw className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Free Consultation", description: "We evaluate your smile, take digital scans, and discuss your goals to determine if Invisalign is right for you." },
  { number: "02", title: "Custom Treatment Plan", description: "Using 3D imaging, we map your entire treatment and show you a digital preview of your projected results." },
  { number: "03", title: "Wear Your Aligners", description: "Wear each set of clear aligners for 1–2 weeks, switching to the next set as your teeth gradually shift into place." },
  { number: "04", title: "Reveal Your Smile", description: "Once treatment is complete, enjoy your beautifully straight smile and maintain it with custom retainers." },
];

const testimonials = [
  { quote: "I always wanted straight teeth but didn't want metal braces as an adult. Invisalign at Smile Avenue was the perfect solution — no one even noticed I was wearing them!", name: "Jessica F.", source: "Google Review" },
  { quote: "My daughter's Invisalign treatment was so smooth. She loved that she could take them out for meals and sports. Her smile looks amazing now.", name: "Catherine P.", source: "Google Review" },
  { quote: "10 months of Invisalign and my teeth are perfectly straight. The team at Smile Avenue was so encouraging throughout. Best decision I've made!", name: "Daniel G.", source: "Google Review" },
];

const faqs = [
  { question: "How much does Invisalign cost in Cypress, TX?", answer: "Invisalign treatment typically ranges from $3,500–$6,500 depending on the complexity of your case. Invisalign Lite for minor corrections starts around $2,500. We offer financing through CareCredit and Sunbit." },
  { question: "How long does Invisalign treatment take?", answer: "Most cases take 6–18 months, with Invisalign Lite cases completing in as few as 3–6 months. We'll give you a clear timeline during your consultation." },
  { question: "Does Invisalign hurt?", answer: "You may feel mild pressure when switching to a new set of aligners, which is a sign the treatment is working. Most patients find Invisalign much more comfortable than traditional braces." },
  { question: "Can I eat normally with Invisalign?", answer: "Yes! You remove your aligners to eat, so there are no food restrictions. Just brush before putting them back in. This is one of the biggest advantages over traditional braces." },
  { question: "How often do I need to visit during Invisalign treatment?", answer: "We typically schedule check-ups every 6–8 weeks to monitor your progress and provide your next sets of aligners. Each visit is quick — usually about 15 minutes." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const InvisalignCypress = () => (
  <>
    <Helmet>
      <title>Invisalign Cypress, TX | Clear Aligners | Smile Avenue</title>
      <meta name="description" content="Invisalign clear aligners in Cypress, TX. Straighten your teeth discreetly with custom clear aligners for teens and adults. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/invisalign/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Invisalign</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">CLEAR ALIGNERS IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Invisalign in Cypress, TX</h1>
          <p className="section-body">Straighten your teeth without the brackets and wires. Invisalign clear aligners at Smile Avenue Cypress offer a virtually invisible way to achieve the straight, confident smile you've always wanted — for teens and adults alike.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Invisalign Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["invisalign"] ? (<img src={SERVICE_IMAGES["invisalign"].url} alt={SERVICE_IMAGES["invisalign"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">CLEAR ALIGNER THERAPY</p><h2 className="section-heading">What Is Invisalign?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Invisalign uses a series of custom-made, clear plastic aligners to gradually move your teeth into their ideal positions. Each set of aligners is worn for about 1–2 weeks before switching to the next, slowly guiding your teeth through a precisely planned sequence of movements.</p><p>Because the aligners are virtually invisible and removable, Invisalign fits seamlessly into your lifestyle. Eat what you want, brush and floss normally, and smile confidently throughout your treatment — without the restrictions of traditional braces.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Virtually Invisible" }, { icon: <Shield className="w-5 h-5" />, label: "Removable & Comfortable" }, { icon: <Users className="w-5 h-5" />, label: "Certified Provider" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">INVISALIGN OPTIONS</p><h2 className="section-heading">Invisalign Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR INVISALIGN JOURNEY</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Invisalign Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Invisalign Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Start Your Invisalign Journey Today</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Book a free Invisalign consultation and see how clear aligners can transform your smile.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Free Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default InvisalignCypress;
