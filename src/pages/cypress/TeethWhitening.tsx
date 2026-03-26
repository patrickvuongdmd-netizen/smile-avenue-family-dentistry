import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Sun, Home, Sparkles, Heart, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "Dentist-Supervised Safety", description: "Every whitening treatment is performed or overseen by a licensed dentist, ensuring your enamel and gums are protected throughout the process.", icon: <Shield className="w-5 h-5" /> },
  { title: "Custom Sensitivity Management", description: "We tailor every treatment to your sensitivity level using desensitizing agents and adjusted concentrations for a comfortable experience.", icon: <Heart className="w-5 h-5" /> },
  { title: "Immediate In-Office Results", description: "Walk in with stained teeth, walk out several shades brighter — all in about one hour.", icon: <Sun className="w-5 h-5" /> },
  { title: "Professional Take-Home Option", description: "Custom-fitted trays with professional-grade gel for gradual brightening on your own schedule.", icon: <Home className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation & Shade Assessment", description: "We evaluate your current shade and discuss your whitening goals to determine the best approach for your teeth." },
  { number: "02", title: "Gum Protection & Gel Application", description: "For in-office whitening, we protect your gums and soft tissue, then apply the professional whitening gel." },
  { number: "03", title: "Whitening Activation", description: "The clinical-grade gel is activated and works to break down years of staining. You relax while the formula does its work." },
  { number: "04", title: "Results Review & Maintenance Tips", description: "We reveal your new brighter smile and provide tips on maintaining your results long-term." },
];

const testimonials = [
  { quote: "My teeth were yellow from years of coffee. One in-office whitening session at Smile Avenue and they're literally glowing. I wish I'd done this sooner!", name: "Lauren H.", source: "Google Review" },
  { quote: "I have sensitive teeth and was worried about whitening. They used a gentle formula and I had zero discomfort. My smile looks amazing now.", name: "Chris B.", source: "Google Review" },
  { quote: "Got the take-home trays before my wedding. Two weeks later my smile was camera-ready. The custom trays fit perfectly and were so easy to use.", name: "Emily R.", source: "Google Review" },
];

const faqs = [
  { question: "How much does whitening cost?", answer: "We offer multiple whitening options at different price points. Call (832) 648-1756 for current pricing. CareCredit financing and our membership plan discounts are available." },
  { question: "How long do results last?", answer: "Results typically last 6 months to 2 years depending on your diet and habits. Avoiding coffee, wine, and tobacco, along with periodic touch-ups, will extend your results." },
  { question: "Does whitening damage enamel?", answer: "No. Professional whitening under dental supervision is safe for your enamel. We use controlled concentrations and protective measures throughout the treatment." },
  { question: "Will whitening work on crowns or veneers?", answer: "Whitening only affects natural tooth enamel. We recommend whitening before getting restorations so we can match them to your new, brighter shade." },
  { question: "What about sensitive teeth?", answer: "We customize every treatment for sensitivity using desensitizing agents and adjusted gel concentrations. Most sensitive patients tolerate our protocols very well." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const TeethWhiteningCypress = () => (
  <>
    <Helmet>
      <title>Teeth Whitening in Cypress, TX - Smile Avenue Family Dentistry</title>
      <meta name="description" content="Professional teeth whitening in Cypress, TX. In-office and take-home options for dramatic results. Safe, dentist-supervised. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/teeth-whitening/" />
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      {/* HERO */}
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Teeth Whitening</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">PROFESSIONAL WHITENING IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Teeth Whitening in Cypress, TX</h1>
          <p className="section-body">Years of coffee, wine, tea, and everyday life can leave teeth looking dull. Professional whitening at Smile Avenue Cypress delivers dramatically brighter results safely and effectively. Walk out several shades whiter in just one visit.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Whitening Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["teeth-whitening"] ? (<img src={SERVICE_IMAGES["teeth-whitening"].url} alt="patient receiving teeth whitening at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      {/* EDUCATIONAL */}
      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl">
        <p className="kicker">ABOUT PROFESSIONAL WHITENING</p>
        <h2 className="section-heading">Why Professional Whitening?</h2>
        <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
          <p>Professional whitening uses dentist-grade bleaching agents significantly stronger than store-bought products. We offer in-office whitening for immediate results and custom take-home kits for gradual brightening — both tailored to your sensitivity level and goals.</p>
          <p>Patients from Fairfield, Bridgeland, and Cypress trust us for safe whitening that protects enamel. Whitening pairs beautifully with <Link to="/cypress-tx/veneers" className="text-primary hover:underline">porcelain veneers</Link> or a full <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic dentistry</Link> makeover. For the best results, start with a <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">professional dental cleaning</Link> before your whitening appointment.</p>
        </div>
      </div></section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-background"><div className="container mx-auto text-center">
        <p className="kicker">WHY SMILE AVENUE</p>
        <h2 className="section-heading">Why Choose Us for Whitening</h2>
        <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (
          <div key={s.title} className="bg-card rounded-xl p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}</div>
      </div></section>

      {/* PROCESS */}
      <section className="section-padding section-alt"><div className="container mx-auto text-center">
        <p className="kicker">YOUR WHITENING VISIT</p>
        <h2 className="section-heading">What to Expect</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (
          <div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left">
            <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span>
            <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}</div>
      </div></section>

      {/* COST & FINANCING */}
      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4"><DollarSign className="w-6 h-6" /></div>
        <h2 className="section-heading">Cost & Financing</h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          Professional whitening is one of the most affordable cosmetic dental treatments. We offer multiple options at different price points. CareCredit financing is available, and our <Link to="/membership-plan" className="text-primary hover:underline">Smile Avenue Membership Plan</Link> includes discounts on cosmetic services.
        </p>
      </div></section>

      {/* FAQ */}
      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Teeth Whitening Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      {/* REVIEWS */}
      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      {/* LOCATION */}
      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Whitening Appointment</a></div></div></section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready for a Brighter Smile?</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Professional whitening at Smile Avenue Cypress. Walk out several shades brighter in just one visit.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default TeethWhiteningCypress;
