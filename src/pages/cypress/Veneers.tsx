import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Sparkles, Layers, Crown, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Porcelain Veneers", description: "Traditional porcelain veneers offer exceptional durability and a luminous, natural-looking finish that resists staining for years.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Emax Veneers", description: "Emax lithium disilicate veneers combine superior strength with beautiful translucency, closely mimicking the light-reflecting properties of natural teeth.", icon: <Crown className="w-5 h-5" /> },
  { title: "Minimal-Prep Veneers", description: "For patients who want a conservative approach, minimal-prep veneers require little to no removal of natural tooth structure.", icon: <Layers className="w-5 h-5" /> },
  { title: "Veneer Consultation", description: "Not sure if veneers are right for you? Our comprehensive consultation includes a digital smile preview so you can see your potential results.", icon: <Eye className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Smile Design", description: "We discuss your goals, evaluate your teeth, and use digital imaging to preview your new smile." },
  { number: "02", title: "Tooth Preparation", description: "A thin layer of enamel is gently removed and precise impressions are taken for your custom veneers." },
  { number: "03", title: "Custom Fabrication", description: "Your veneers are handcrafted by a master ceramist to match the exact shade, shape, and contour we designed." },
  { number: "04", title: "Bonding & Reveal", description: "Your veneers are permanently bonded and polished for a flawless finish. See your stunning new smile!" },
];

const testimonials = [
  { quote: "I got 10 veneers and the transformation is unreal. My teeth were crooked and stained — now they're absolutely perfect. Dr. Vuong is a true artist.", name: "Vanessa R.", source: "Google Review" },
  { quote: "The minimal-prep veneers were exactly what I needed. Very little drilling and the results are gorgeous. I get compliments on my smile constantly now.", name: "Andrew L.", source: "Google Review" },
  { quote: "Worth every penny. The Emax veneers look so natural — they have the same translucency as real teeth. Nobody can tell they're veneers.", name: "Christine M.", source: "Google Review" },
];

const faqs = [
  { question: "How much do veneers cost in Cypress, TX?", answer: "Porcelain veneers typically range from $1,200–$2,500 per tooth. Emax and minimal-prep options vary based on complexity. We offer financing through CareCredit and Sunbit to make your dream smile achievable." },
  { question: "How long do porcelain veneers last?", answer: "With proper care, porcelain veneers typically last 10–20 years. Emax veneers are known for exceptional durability and may last even longer. Good hygiene and regular checkups help maximize their lifespan." },
  { question: "Do veneers look natural?", answer: "Absolutely. Modern porcelain and Emax veneers are designed to mimic the light-reflecting properties, translucency, and texture of natural tooth enamel. Our ceramist custom-crafts each veneer for seamless results." },
  { question: "Can veneers fix gaps and crooked teeth?", answer: "Yes! Veneers can correct gaps, mild misalignment, chips, cracks, staining, and uneven tooth shapes. For more significant orthodontic issues, we may recommend Invisalign first." },
  { question: "Is the veneer process painful?", answer: "No. We use local anesthesia during preparation, and most patients report minimal discomfort. The bonding appointment is typically painless. Some mild sensitivity may occur for a few days after." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const VeneersCypress = () => (
  <>
    <Helmet>
      <title>Veneers Cypress, TX | Porcelain Veneers | Smile Avenue</title>
      <meta name="description" content="Porcelain veneers in Cypress, TX. Transform your smile with custom veneers — Emax, minimal-prep & traditional options. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/veneers/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Veneers</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">PORCELAIN VENEERS IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Veneers in Cypress, TX</h1>
          <p className="section-body">Veneers are the ultimate smile transformation. At Smile Avenue Cypress, we craft custom porcelain veneers that correct chips, gaps, staining, and misalignment — giving you a flawless, natural-looking smile you'll love to show off.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Veneer Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["veneers"] ? (<img src={SERVICE_IMAGES["veneers"].url} alt={SERVICE_IMAGES["veneers"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">SMILE TRANSFORMATION</p><h2 className="section-heading">What Are Porcelain Veneers?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Porcelain veneers are ultra-thin shells of ceramic that are custom-made and bonded to the front surfaces of your teeth. They can dramatically change the color, shape, size, and alignment of your smile in as few as two appointments.</p><p>Unlike <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">dental crowns</Link> that cover the entire tooth, veneers are a conservative option that preserves most of your natural tooth structure while delivering transformative results. They're ideal for addressing multiple cosmetic concerns at once — creating a uniform, beautiful smile. For an even brighter finish, many patients combine veneers with <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">professional teeth whitening</Link> on their remaining natural teeth. Learn more about our full range of <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic dentistry</Link> options.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "2-Visit Transformation" }, { icon: <Shield className="w-5 h-5" />, label: "Stain Resistant" }, { icon: <Users className="w-5 h-5" />, label: "Natural Results" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">VENEER OPTIONS</p><h2 className="section-heading">Veneer Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE VENEER PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Veneer Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Veneer Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready for Your Dream Smile?</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Book a veneer consultation and see what's possible for your smile.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default VeneersCypress;
