import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Eye, Printer, SmilePlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "In-House Aligner Fabrication", description: "We fabricate custom aligners in-house with 3D printing at competitive prices — cutting costs and turnaround time.", icon: <Printer className="w-5 h-5" /> },
  { title: "Digital Medit Scanning", description: "No goopy impressions. Our Medit digital scanners create precise 3D models of your teeth for perfect-fitting aligners.", icon: <Eye className="w-5 h-5" /> },
  { title: "Experienced Clear Aligner Providers", description: "Our doctors have extensive experience with Invisalign and clear aligner therapy for teens and adults.", icon: <Users className="w-5 h-5" /> },
  { title: "Removable & Virtually Invisible", description: "Eat what you want, brush normally, and smile confidently — no one will know you're straightening your teeth.", icon: <SmilePlus className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation & Digital Scan", description: "We evaluate your smile, take digital scans with our Medit scanner, and show you a virtual preview of your projected results." },
  { number: "02", title: "Custom Aligner Fabrication", description: "Your aligners are custom-made — either through Invisalign or fabricated in-house with our 3D printing technology." },
  { number: "03", title: "Wear Your Aligners", description: "Wear aligners 20-22 hours daily, changing to the next set every 1-2 weeks as your teeth gradually shift into place." },
  { number: "04", title: "Completion & Retainer", description: "Once treatment is complete, custom retainers maintain your beautiful new smile for long-term results." },
];

const testimonials = [
  { quote: "I always wanted straight teeth but didn't want metal braces as an adult. Invisalign at Smile Avenue was the perfect solution — no one even noticed I was wearing them!", name: "Jessica F.", source: "Google Review" },
  { quote: "My daughter's Invisalign treatment was so smooth. She loved that she could take them out for meals and sports. Her smile looks amazing now.", name: "Catherine P.", source: "Google Review" },
  { quote: "10 months of Invisalign and my teeth are perfectly straight. The team at Smile Avenue was so encouraging throughout. Best decision I've made!", name: "Daniel G.", source: "Google Review" },
];

const faqs = [
  { question: "How much does Invisalign cost?", answer: "Costs vary by case — we offer a free consultation to provide a detailed estimate. Many insurance plans cover partial orthodontic treatment. CareCredit financing and payment plans available." },
  { question: "How long does Invisalign take?", answer: "Most cases take 6-18 months. Minor cases with our in-house aligners can complete in as few as 3-6 months. We'll give you a clear timeline during your consultation." },
  { question: "Does Invisalign hurt?", answer: "You may feel mild pressure when switching to a new set of aligners, which is a sign the treatment is working. Most patients find Invisalign much more comfortable than traditional braces." },
  { question: "Can I eat normally with Invisalign?", answer: "Yes! You remove your aligners to eat and drink, so there are no food restrictions. Just brush before putting them back in." },
  { question: "Is Invisalign as effective as braces?", answer: "For most cases, yes. Invisalign effectively treats crowding, gaps, overbites, underbites, and crossbites. Complex cases may still benefit from traditional braces." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const InvisalignCypress = () => (
  <>
    <Helmet>
      <title>Invisalign in Cypress, TX - Clear Aligners - Smile Avenue Family Dentistry</title>
      <meta name="description" content="Straighten teeth discreetly with Invisalign in Cypress, TX. Custom clear aligners, in-house fabrication, flexible payment. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/invisalign/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Invisalign</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">CLEAR ALIGNERS IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Invisalign Clear Aligners in Cypress, TX</h1>
          <p className="section-body">Crooked, crowded, or gapped teeth do not require metal brackets. Invisalign at Smile Avenue Cypress offers virtually invisible teeth straightening without disrupting your daily life.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Free Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["invisalign"] ? (<img src={SERVICE_IMAGES["invisalign"].url} alt="patient receiving Invisalign clear aligners at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">CLEAR ALIGNER THERAPY</p><h2 className="section-heading">How Invisalign Works</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Invisalign uses custom clear plastic aligners to gradually move teeth into their ideal positions. Each set is worn for 1-2 weeks, 20-22 hours daily. Invisalign treats crowding, gaps, overbites, underbites, and crossbites — all while being removable for eating and brushing.</p><p>We also fabricate custom aligners in-house with 3D printing at competitive prices, offering an alternative to traditional Invisalign for qualifying cases. Whether you choose Invisalign or our in-house option, families from Towne Lake, Fairfield, and Cypress trust Smile Avenue for beautiful, straight smiles. Invisalign pairs well with <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">professional whitening</Link> after treatment, and our <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic dentistry</Link> team can help plan your complete smile transformation.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for Invisalign</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR INVISALIGN JOURNEY</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & FINANCING</p><h2 className="section-heading">Invisalign Investment</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Invisalign costs vary by complexity. Many insurance plans cover partial orthodontic treatment. We offer CareCredit financing, payment plans, and a free consultation to discuss your options. Our in-house aligner option may offer additional savings for qualifying cases.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Invisalign Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Free Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Start Your Invisalign Journey Today</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Book a free Invisalign consultation and see how clear aligners can transform your smile.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Free Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default InvisalignCypress;
