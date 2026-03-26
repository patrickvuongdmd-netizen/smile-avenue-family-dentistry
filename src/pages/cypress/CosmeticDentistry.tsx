import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Sparkles, Palette, Sun, Pencil } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Porcelain Veneers", description: "Ultra-thin shells bonded to the front of your teeth to correct chips, gaps, discoloration, and uneven shapes for a flawless, natural-looking smile.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Professional Teeth Whitening", description: "In-office and take-home whitening treatments that safely brighten your smile by several shades in as little as one visit.", icon: <Sun className="w-5 h-5" /> },
  { title: "Dental Bonding", description: "A quick, affordable solution for minor chips, cracks, and gaps using tooth-colored composite resin sculpted and polished to perfection.", icon: <Pencil className="w-5 h-5" /> },
  { title: "Smile Design", description: "A comprehensive approach combining multiple cosmetic treatments — veneers, whitening, bonding, and more — to create your ideal smile.", icon: <Palette className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Smile Consultation", description: "Share your goals and we'll evaluate your teeth, discuss options, and create a personalized cosmetic treatment plan." },
  { number: "02", title: "Digital Smile Preview", description: "Using advanced imaging, we show you a preview of your potential results before any treatment begins." },
  { number: "03", title: "Custom Treatment", description: "Whether it's veneers, whitening, or a full smile makeover, we execute your plan with precision and artistry." },
  { number: "04", title: "Reveal Your New Smile", description: "See your stunning results and leave our office with the confidence that comes from a beautiful, healthy smile." },
];

const testimonials = [
  { quote: "I got 8 veneers at Smile Avenue and my smile has never looked better. Dr. Vuong has an incredible eye for detail — they look so natural!", name: "Heather J.", source: "Google Review" },
  { quote: "The in-office whitening was amazing! I was in and out in about an hour and my teeth are noticeably whiter. The staff was great about checking my comfort level.", name: "Kevin D.", source: "Google Review" },
  { quote: "I had bonding done on two front teeth that were chipped. You literally cannot tell they were ever damaged. So happy I chose Smile Avenue!", name: "Priya N.", source: "Google Review" },
];

const faqs = [
  { question: "How much does cosmetic dentistry cost in Cypress, TX?", answer: "Costs vary by treatment: teeth whitening starts around $300–$600, dental bonding $200–$500 per tooth, and porcelain veneers $1,200–$2,500 per tooth. We offer financing through CareCredit and Sunbit to make your dream smile affordable." },
  { question: "Are porcelain veneers permanent?", answer: "Veneers are considered a permanent treatment because a thin layer of enamel is removed during preparation. With proper care, porcelain veneers typically last 10–20 years before needing replacement." },
  { question: "Does teeth whitening damage enamel?", answer: "Professional whitening supervised by a dentist is safe for your enamel. We use controlled concentrations and protective measures to ensure effective results without damaging your teeth." },
  { question: "How long does a smile makeover take?", answer: "It depends on the treatments involved. Teeth whitening can be done in a single visit, while a full veneer case typically requires 2–3 appointments over 2–4 weeks. We'll give you a clear timeline during your consultation." },
  { question: "Can cosmetic dentistry fix crooked teeth?", answer: "Yes! Veneers can mask mild misalignment, and we also offer Invisalign for more significant orthodontic correction. We'll recommend the best approach based on your specific situation." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const CosmeticDentistryCypress = () => (
  <>
    <Helmet>
      <title>Cosmetic Dentistry Cypress, TX | Smile Avenue Family Dentistry</title>
      <meta name="description" content="Cosmetic dentistry in Cypress, TX. Veneers, teeth whitening, bonding & smile makeovers. Transform your smile at Smile Avenue. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/cosmetic-dentistry/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Cosmetic Dentistry</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">SMILE MAKEOVERS IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Cosmetic Dentistry in Cypress, TX</h1>
          <p className="section-body">Your smile is the first thing people notice. At Smile Avenue Cypress, our cosmetic dentistry services are designed to help you achieve the beautiful, confident smile you've always wanted — using the latest techniques and materials for results that look completely natural.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Cosmetic Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["cosmetic-dentistry"] ? (<img src={SERVICE_IMAGES["cosmetic-dentistry"].url} alt={SERVICE_IMAGES["cosmetic-dentistry"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">TRANSFORM YOUR SMILE</p><h2 className="section-heading">What Is Cosmetic Dentistry?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. While general dentistry addresses oral health needs, cosmetic treatments are designed to enhance aesthetics — correcting issues like staining, chips, gaps, misalignment, and uneven tooth shapes.</p><p>At Smile Avenue, we believe that form and function go hand in hand. Our cosmetic treatments not only make your smile more beautiful but also strengthen and protect your teeth for the long term. From quick fixes like bonding and whitening to comprehensive smile makeovers with porcelain veneers, we offer a full range of solutions tailored to your goals.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Same-Day Options" }, { icon: <Shield className="w-5 h-5" />, label: "Natural-Looking Results" }, { icon: <Users className="w-5 h-5" />, label: "5,000+ Smiles Created" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">OUR COSMETIC SERVICES</p><h2 className="section-heading">Cosmetic Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR COSMETIC JOURNEY</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Cosmetic Dentistry Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Cosmetic Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready for Your Dream Smile?</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Book a cosmetic consultation and let us design the smile you've always wanted.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default CosmeticDentistryCypress;
