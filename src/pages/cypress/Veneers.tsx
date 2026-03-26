import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Sparkles, Layers, Crown, Eye, Scan } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "In-House Lab Craftsmanship", description: "Our Smile Dental Lab fabricates each veneer on-site for precise color matching, perfect fit, and faster turnaround.", icon: <Crown className="w-5 h-5" /> },
  { title: "Digital Smile Design Preview", description: "See your new smile before treatment begins with digital imaging and virtual previews.", icon: <Eye className="w-5 h-5" /> },
  { title: "Emax & Zirconia Options", description: "We offer both Emax lithium disilicate and zirconia veneers to match your needs — from maximum aesthetics to maximum durability.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Minimal-Prep Veneers Available", description: "For qualifying patients, minimal-prep veneers require little to no removal of natural tooth structure.", icon: <Layers className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Smile Consultation & Digital Design", description: "We discuss your goals, evaluate your teeth, and use digital imaging to preview your new smile." },
  { number: "02", title: "Tooth Preparation", description: "A thin layer of enamel is gently removed (minimal for minimal-prep) and precise digital impressions are taken." },
  { number: "03", title: "Digital Impressions to In-House Lab", description: "Your impressions are sent to our on-site Smile Dental Lab where each veneer is handcrafted to exact specifications." },
  { number: "04", title: "Veneer Fabrication", description: "Our lab team crafts your custom veneers with precise color matching and natural translucency." },
  { number: "05", title: "Bonding & Final Adjustments", description: "Your veneers are permanently bonded and polished for a flawless, natural-looking finish." },
];

const testimonials = [
  { quote: "I got 10 veneers and the transformation is unreal. My teeth were crooked and stained — now they're absolutely perfect. The in-house lab made a huge difference in quality.", name: "Vanessa R.", source: "Google Review" },
  { quote: "The minimal-prep veneers were exactly what I needed. Very little drilling and the results are gorgeous. I get compliments on my smile constantly.", name: "Andrew L.", source: "Google Review" },
  { quote: "Worth every penny. The Emax veneers look so natural — they have the same translucency as real teeth. Nobody can tell they're veneers.", name: "Christine M.", source: "Google Review" },
];

const faqs = [
  { question: "How much do veneers cost?", answer: "Porcelain veneers typically range from $1,200-$2,500 per tooth depending on material (Emax vs zirconia) and complexity. Financing through CareCredit is available. Free consultation to discuss your options." },
  { question: "How long do veneers last?", answer: "With proper care, porcelain veneers typically last 15-20 years. Emax veneers are known for exceptional durability. Good oral hygiene and regular checkups help maximize their lifespan." },
  { question: "Do veneers look natural?", answer: "Yes — our in-house Smile Dental Lab ensures perfect color matching and natural translucency. Modern porcelain and Emax veneers mimic the light-reflecting properties of natural tooth enamel." },
  { question: "Can veneers stain?", answer: "Porcelain resists staining significantly better than natural teeth. However, the bonding material at the edges can discolor over time, so good hygiene is important." },
  { question: "How many veneers do I need?", answer: "It depends on your goals. Most smile transformations involve 4-8 veneers covering the 'smile zone' — the teeth visible when you smile. We'll recommend the ideal number during your consultation." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const VeneersCypress = () => (
  <>
    <Helmet>
      <title>Porcelain Veneers in Cypress, TX - Smile Avenue Family Dentistry</title>
      <meta name="description" content="Custom porcelain veneers in Cypress, TX. Emax and zirconia options from our in-house lab. Natural results. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/veneers/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Veneers</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">VENEERS IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Porcelain Veneers in Cypress, TX</h1>
          <p className="section-body">Veneers are the gold standard for transforming the appearance of your smile. At Smile Avenue Cypress, our in-house Smile Dental Lab crafts each veneer to precise specifications — delivering a natural, beautiful result.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Free Veneer Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["veneers"] ? (<img src={SERVICE_IMAGES["veneers"].url} alt="porcelain veneers smile transformation at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">SMILE TRANSFORMATION</p><h2 className="section-heading">What Are Porcelain Veneers?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Veneers are thin porcelain shells bonded to the front surfaces of your teeth, instantly correcting chips, stains, gaps, and uneven teeth. We offer both Emax lithium disilicate and zirconia options — Emax for superior translucency and aesthetics, zirconia for maximum strength and durability. Both minimal-prep and traditional preparation approaches are available depending on your case.</p><p>Every veneer is designed and fabricated in our in-house Smile Dental Lab for perfect color matching and precise fit. Combined with <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">teeth whitening</Link> on surrounding teeth, veneers deliver a complete <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic transformation</Link>. Our lab ensures consistency that outside labs simply can't match.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for Veneers</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE VENEER PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & FINANCING</p><h2 className="section-heading">Veneer Investment</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Porcelain veneers typically cost $1,200-$2,500 per tooth depending on material choice and complexity. Most smile transformations involve 4-8 veneers. We offer financing through CareCredit to make your dream smile achievable. Free consultations available to discuss your options and receive a personalized estimate.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Veneer Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Veneer Consultation</a></div></div></section>

      <FreeConsultationBanner />

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Transform Your Smile with Veneers</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule your free veneer consultation and see what's possible for your smile.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default VeneersCypress;
