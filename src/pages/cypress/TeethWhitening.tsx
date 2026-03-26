import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Sun, Home, Sparkles, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "In-Office Whitening", description: "Professional-grade whitening in about one hour. Our in-office treatment delivers dramatic results — up to 8 shades brighter — in a single comfortable visit.", icon: <Sun className="w-5 h-5" /> },
  { title: "Take-Home Whitening Trays", description: "Custom-fitted trays and professional whitening gel you use at home on your own schedule. Achieve beautiful results in 1–2 weeks.", icon: <Home className="w-5 h-5" /> },
  { title: "Touch-Up Treatments", description: "Maintain your bright smile with periodic touch-up treatments. Perfect for keeping your results fresh after coffee, wine, or everyday staining.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Whitening for Sensitive Teeth", description: "Specially formulated whitening options for patients with sensitivity. We adjust concentrations and use desensitizing agents to keep you comfortable.", icon: <Heart className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Shade Assessment", description: "We evaluate your current tooth shade and discuss your whitening goals to determine the best approach." },
  { number: "02", title: "Preparation", description: "Your gums and soft tissues are protected before the professional whitening gel is carefully applied to your teeth." },
  { number: "03", title: "Whitening Treatment", description: "The gel is activated and works to break down stains. In-office sessions take about 45–60 minutes." },
  { number: "04", title: "Bright Results", description: "See your dramatically whiter smile immediately. We provide care instructions to maintain your results." },
];

const testimonials = [
  { quote: "My teeth were yellow from years of coffee. One in-office whitening session at Smile Avenue and they're literally glowing. I wish I'd done this sooner!", name: "Lauren H.", source: "Google Review" },
  { quote: "I have sensitive teeth and was worried about whitening. They used a gentle formula and I had zero discomfort. My smile looks amazing now.", name: "Chris B.", source: "Google Review" },
  { quote: "Got the take-home trays before my wedding. Two weeks later my smile was camera-ready. The custom trays fit perfectly and were so easy to use.", name: "Emily R.", source: "Google Review" },
];

const faqs = [
  { question: "How much does teeth whitening cost in Cypress, TX?", answer: "In-office professional whitening typically costs $300–$600, and custom take-home trays range from $200–$400. We offer financing options to make a brighter smile accessible to everyone." },
  { question: "How long does professional whitening last?", answer: "Results typically last 6 months to 2 years depending on your diet and habits. Avoiding dark beverages and tobacco, along with periodic touch-ups, will help maintain your results." },
  { question: "Is teeth whitening safe?", answer: "Yes. Professional teeth whitening supervised by a dentist is safe and effective. We use controlled concentrations and protective measures to prevent sensitivity and protect your enamel and gums." },
  { question: "Will whitening work on crowns or veneers?", answer: "Whitening treatments only affect natural tooth enamel. If you have crowns or veneers, we'll discuss options to ensure a uniform shade across your entire smile." },
  { question: "How white can my teeth get?", answer: "Most patients achieve results 4–8 shades brighter. The final result depends on your starting shade, the type of staining, and the treatment used. We'll set realistic expectations during your consultation." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const TeethWhiteningCypress = () => (
  <>
    <Helmet>
      <title>Teeth Whitening Cypress, TX | Smile Avenue Family Dentistry</title>
      <meta name="description" content="Professional teeth whitening in Cypress, TX. In-office and take-home options for a brighter smile. Call (832) 648-1756 to book." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/teeth-whitening/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Teeth Whitening</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">BRIGHTER SMILES IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Teeth Whitening in Cypress, TX</h1>
          <p className="section-body">A brighter smile can transform your confidence. At Smile Avenue Cypress, we offer professional teeth whitening treatments that deliver dramatic, long-lasting results — safely and comfortably, in as little as one visit.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Whitening Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center shadow-md"><span className="text-sm font-sans text-muted-foreground">Teeth Whitening Photo</span></div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">PROFESSIONAL WHITENING</p><h2 className="section-heading">Why Choose Professional Whitening?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Over-the-counter whitening strips and toothpastes can only do so much. Professional teeth whitening uses higher-concentration gels and custom-fitted application methods that deliver results far beyond what drugstore products can achieve — safely and under the supervision of a dentist.</p><p>Whether you want quick results with our in-office treatment or prefer the flexibility of whitening at home with custom trays, Smile Avenue Cypress offers options tailored to your lifestyle, sensitivity level, and whitening goals.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Results in 1 Hour" }, { icon: <Shield className="w-5 h-5" />, label: "Safe & Gentle" }, { icon: <Users className="w-5 h-5" />, label: "Thousands Whitened" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHITENING OPTIONS</p><h2 className="section-heading">Whitening Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE WHITENING PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Teeth Whitening Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Whitening Appointment</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready for a Brighter Smile?</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Book your professional whitening appointment today and see the difference.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default TeethWhiteningCypress;
