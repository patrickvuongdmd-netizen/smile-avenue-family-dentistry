import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Heart, Shield, Stethoscope, Wrench, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "Gentle Technique", description: "Our doctors use modern, minimally invasive techniques to make extractions as comfortable as possible.", icon: <Heart className="w-5 h-5" /> },
  { title: "Sedation Options", description: "Nitrous oxide, oral sedation, and IV sedation available to ensure a stress-free, comfortable experience.", icon: <Shield className="w-5 h-5" /> },
  { title: "Same-Day When Possible", description: "For urgent cases, we offer same-day extractions to relieve your pain quickly.", icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Replacement Options Discussed", description: "We plan ahead — discussing implants, bridges, or dentures to replace your extracted tooth.", icon: <Wrench className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Evaluation with Digital X-Rays", description: "We examine the tooth and take digital X-rays to plan the safest, most efficient extraction approach." },
  { number: "02", title: "Anesthesia & Sedation", description: "The area is thoroughly numbed. Sedation options are available for anxious patients or complex extractions." },
  { number: "03", title: "Gentle Extraction", description: "The tooth is carefully removed using specialized instruments designed to minimize trauma to surrounding tissue." },
  { number: "04", title: "Post-Op Care Instructions", description: "Detailed aftercare instructions are provided to ensure proper healing and minimize discomfort." },
  { number: "05", title: "Replacement Planning", description: "We discuss tooth replacement options — implants, bridges, or dentures — to restore your smile." },
];

const testimonials = [
  { quote: "Had a tooth extracted that was causing me pain for months. The whole thing took about 20 minutes and I barely felt anything. Healing was quick too.", name: "Marcus J.", source: "Google Review" },
  { quote: "My daughter had all four wisdom teeth removed here. They used sedation and she had zero memory of the procedure. Recovery was smooth.", name: "Linda P.", source: "Google Review" },
  { quote: "I was so nervous about having a tooth pulled but the doctor was incredibly gentle and calming. The extraction was painless and the follow-up care was thorough.", name: "Gregory T.", source: "Google Review" },
];

const faqs = [
  { question: "How much does a tooth extraction cost?", answer: "Costs vary by complexity. Insurance covers medically necessary extractions. CareCredit financing and our Membership Plan are available for any out-of-pocket costs." },
  { question: "Does tooth extraction hurt?", answer: "No — anesthesia completely numbs the area, and sedation options ensure total comfort. You'll feel pressure but no pain during the procedure. Post-extraction discomfort is manageable with medication." },
  { question: "How long is recovery?", answer: "Simple extractions heal within 3-7 days typically. Surgical extractions may take 1-2 weeks. Most patients return to normal activities within 1-2 days." },
  { question: "Should I replace the extracted tooth?", answer: "In most cases, yes. Missing teeth can cause shifting, bite problems, and bone loss over time. We offer dental implants, bridges, and dentures as replacement options." },
  { question: "Do you remove wisdom teeth?", answer: "Yes — we perform both simple and surgical wisdom tooth extractions, with sedation available for comfort. No referral to an outside oral surgeon needed." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const ToothExtractionCypress = () => (
  <>
    <Helmet>
      <title>Tooth Extraction in Cypress, TX - Gentle Care - Smile Avenue</title>
      <meta name="description" content="Gentle tooth extractions in Cypress, TX. Wisdom teeth, damaged teeth, surgical extractions. Sedation available. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/tooth-extraction/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Tooth Extraction</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">TOOTH EXTRACTION IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Tooth Extraction in Cypress, TX</h1>
          <p className="section-body">Sometimes saving a tooth is not possible, and extraction is the best path to protecting your oral health. At Smile Avenue Cypress, we perform gentle extractions with sedation options.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["tooth-extraction"] ? (<img src={SERVICE_IMAGES["tooth-extraction"].url} alt="gentle tooth extraction procedure at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">WHEN EXTRACTION IS NEEDED</p><h2 className="section-heading">Reasons for Tooth Extraction</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Extractions may be necessary for severely decayed teeth, cracked or fractured teeth, impacted wisdom teeth, overcrowded teeth, or teeth with failed <Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canals</Link>. Both simple extractions (for visible teeth) and surgical extractions (for impacted or broken teeth) are performed in-office.</p><p>We always discuss tooth replacement options — <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, <Link to="/cypress-tx/dental-bridges" className="text-primary hover:underline">bridges</Link>, or <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link> — so you have a plan for restoring your smile. <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">Sedation</Link> is available for anxious patients or complex extractions.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE EXTRACTION PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & INSURANCE</p><h2 className="section-heading">Extraction Costs</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Extraction costs vary by complexity — simple vs. surgical, single tooth vs. multiple. Insurance covers medically necessary extractions. We accept most major PPO plans and offer CareCredit financing for any remaining balance.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Extraction Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Appointment</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Relief Is One Call Away</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Don't suffer with tooth pain. Schedule a gentle extraction and get back to feeling great.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default ToothExtractionCypress;
