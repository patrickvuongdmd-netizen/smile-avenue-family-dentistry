import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, SmilePlus, Crown, Wrench, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "All-on-4 Implants", description: "Restore a full arch of teeth with just four strategically placed implants. A proven, cost-effective solution for patients with significant tooth loss.", icon: <SmilePlus className="w-5 h-5" /> },
  { title: "All-on-6 Implants", description: "Six implants provide additional support and stability for patients with more bone loss or those seeking maximum durability.", icon: <Shield className="w-5 h-5" /> },
  { title: "Zirconia Full Arch", description: "Premium zirconia prosthetics offer exceptional strength, natural aesthetics, and stain resistance for a beautiful, long-lasting full arch restoration.", icon: <Crown className="w-5 h-5" /> },
  { title: "Hybrid Prosthetics", description: "Combining implant support with advanced prosthetic design, hybrid restorations offer the look of natural teeth with the stability of implants.", icon: <Layers className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Comprehensive Evaluation", description: "3D CT scans, detailed examination, and discussion of your goals to develop a personalized treatment plan." },
  { number: "02", title: "Implant Placement", description: "Four to six implants are strategically placed in the jawbone under sedation for maximum comfort." },
  { number: "03", title: "Temporary Teeth Same Day", description: "In many cases, a temporary set of teeth is attached the same day — so you never leave without a smile." },
  { number: "04", title: "Final Prosthetic", description: "After healing, your permanent zirconia or hybrid prosthetic is delivered for a stunning, lasting result." },
];

const testimonials = [
  { quote: "All-on-4 changed my life. I went from being embarrassed to smile to grinning ear to ear. Dr. Vuong and the team were incredible throughout the whole process.", name: "Harold W.", source: "Google Review" },
  { quote: "I had dentures for years and hated them. All-on-X implants gave me permanent teeth that feel completely natural. Best investment I've ever made.", name: "Carol M.", source: "Google Review" },
  { quote: "The whole team made a scary procedure feel manageable. I walked in with failing teeth and left with a temporary smile the same day. The final result is stunning.", name: "Frank D.", source: "Google Review" },
];

const faqs = [
  { question: "How much do All-on-X implants cost in Cypress, TX?", answer: "All-on-4 typically ranges from $20,000–$30,000 per arch, and All-on-6 from $25,000–$35,000 per arch depending on materials. We offer financing through CareCredit and Sunbit with monthly payment plans." },
  { question: "What is the difference between All-on-4 and All-on-6?", answer: "All-on-4 uses four implants per arch, while All-on-6 uses six. All-on-6 provides additional support and may be recommended for patients with less bone density or those wanting maximum stability." },
  { question: "Can I get teeth the same day as my implant surgery?", answer: "In many cases, yes. We place a temporary prosthetic on the day of surgery so you never go without teeth. Your permanent prosthetic is placed after the implants fully integrate with the bone." },
  { question: "Am I too old for All-on-X implants?", answer: "Age alone doesn't disqualify you. We've successfully treated patients in their 70s and 80s. Overall health and bone quality are more important factors, which we evaluate during your consultation." },
  { question: "How long do All-on-X implants last?", answer: "The implants themselves are designed to last a lifetime. The prosthetic on top typically lasts 15–20+ years with proper care before needing any maintenance or replacement." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const AllOnXCypress = () => (
  <>
    <Helmet>
      <title>All-on-X Full Mouth Implants Cypress, TX | Smile Avenue</title>
      <meta name="description" content="All-on-4 and All-on-6 full mouth implants in Cypress, TX. Restore your entire smile with permanent implant-supported teeth. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/all-on-x-implants/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">All-on-X Implants</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">FULL ARCH RESTORATION IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">All-on-X Full Mouth Implants in Cypress, TX</h1>
          <p className="section-body">If you're living with failing teeth, ill-fitting dentures, or significant tooth loss, All-on-X implants can give you a brand-new, permanent smile in as little as one day. At Smile Avenue Cypress, we specialize in full arch implant solutions that transform lives.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book All-on-X Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["all-on-x-implants"] ? (<img src={SERVICE_IMAGES["all-on-x-implants"].url} alt={SERVICE_IMAGES["all-on-x-implants"].alt} className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">FULL MOUTH IMPLANTS</p><h2 className="section-heading">What Are All-on-X Implants?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>All-on-X is a revolutionary implant technique that replaces an entire arch of teeth using just four to six strategically placed <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>. Unlike traditional <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link> that sit on top of the gums, All-on-X teeth are permanently anchored to your jawbone — providing stability, comfort, and function that closely mimics natural teeth.</p><p>The "X" in All-on-X refers to the number of implants used (typically 4 or 6). These implants are angled to maximize contact with available bone, often eliminating the need for bone grafting. In many cases, temporary teeth can be placed the same day as <Link to="/cypress-tx/oral-surgery" className="text-primary hover:underline">surgery</Link>, so you never have to go without a smile.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Teeth in a Day" }, { icon: <Shield className="w-5 h-5" />, label: "Permanent Solution" }, { icon: <Users className="w-5 h-5" />, label: "Life-Changing Results" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">FULL ARCH OPTIONS</p><h2 className="section-heading">All-on-X Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE ALL-ON-X PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">All-on-X Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book All-on-X Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">A New Smile in One Day</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule your All-on-X consultation and take the first step toward permanent, life-changing teeth.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default AllOnXCypress;
