import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, SmilePlus, Crown, Wrench, Layers, FlaskConical, Scan } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "Teeth in a Day", description: "Walk out with a full set of functional temporary teeth the same day as your implant surgery.", icon: <Zap className="w-5 h-5" /> },
  { title: "In-House Smile Dental Lab", description: "Our on-site lab fabricates your final zirconia prosthesis for precise fit and faster turnaround.", icon: <FlaskConical className="w-5 h-5" /> },
  { title: "3D CBCT & Digital Surgical Planning", description: "Advanced 3D imaging and Medit digital scanners guide every implant placement with surgical precision.", icon: <Scan className="w-5 h-5" /> },
  { title: "IV Sedation Available", description: "Complete comfort throughout your procedure with IV sedation options — no referrals to outside specialists needed.", icon: <Shield className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Comprehensive Consultation", description: "3D CBCT scan, digital impressions, detailed examination, and discussion of your goals to develop a personalized treatment plan." },
  { number: "02", title: "Implant Placement Under Sedation", description: "4-6 implants are strategically placed using digitally guided surgical planning. Same-day temporary teeth attached before you leave." },
  { number: "03", title: "Healing Period", description: "3-6 months of healing while your implants fuse with the jawbone. Your functional temporary teeth let you eat, speak, and smile throughout." },
  { number: "04", title: "Final Zirconia Prosthesis", description: "Your permanent zirconia prosthesis is fabricated in our in-house lab and delivered for a stunning, lasting result." },
];

const testimonials = [
  { quote: "All-on-4 changed my life. I went from being embarrassed to smile to grinning ear to ear. Dr. Vuong and the team were incredible throughout the whole process.", name: "Harold W.", source: "Google Review" },
  { quote: "I had dentures for years and hated them. All-on-X implants gave me permanent teeth that feel completely natural. Best investment I've ever made.", name: "Carol M.", source: "Google Review" },
  { quote: "The whole team made a scary procedure feel manageable. I walked in with failing teeth and left with a temporary smile the same day. The final result is stunning.", name: "Frank D.", source: "Google Review" },
];

const faqs = [
  { question: "How much do All-on-X implants cost?", answer: "Costs vary by case — we provide a detailed estimate at your consultation. All-on-X often costs less over a lifetime than ongoing denture maintenance and replacements. Financing through CareCredit and payment plans available." },
  { question: "Can I get teeth the same day?", answer: "Yes. In most cases, temporary fixed teeth are placed the day of surgery so you never go without a smile. Your permanent prosthesis is placed after the implants fully integrate with the bone." },
  { question: "How long do All-on-X implants last?", answer: "The implants themselves are designed to last a lifetime with proper care. The prosthesis on top typically lasts 15-20+ years before needing any maintenance or replacement." },
  { question: "Am I too old for All-on-X?", answer: "Age alone rarely disqualifies you. We've successfully treated patients in their 70s and 80s. General health and bone quality are more important factors, which we evaluate during your consultation." },
  { question: "What can I eat with All-on-X?", answer: "After the healing period, you can eat virtually anything — steak, apples, nuts, corn on the cob. All-on-X teeth function like natural teeth, unlike removable dentures." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const AllOnXCypress = () => (
  <>
    <Helmet>
      <title>All-on-X Dental Implants in Cypress, TX - Full Mouth Restoration - Smile Avenue</title>
      <meta name="description" content="All-on-X full-arch dental implants in Cypress, TX. Permanent fixed smile in one day. In-house lab, 3D planning, sedation available. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/all-on-x-implants/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">All-on-X Implants</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">FULL ARCH RESTORATION IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">All-on-X Full-Arch Dental Implants in Cypress, TX</h1>
          <p className="section-body">If you are living with slipping dentures, multiple missing teeth, or failing teeth, All-on-X at Smile Avenue offers a life-changing solution. A complete arch of permanent teeth supported by 4-6 strategically placed implants — walk out with a new smile the same day.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book All-on-X Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["all-on-x-implants"] ? (<img src={SERVICE_IMAGES["all-on-x-implants"].url} alt="patient receiving All-on-X dental implants at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">FULL MOUTH IMPLANTS</p><h2 className="section-heading">What Are All-on-X Implants?</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>All-on-X (All-on-4) replaces an entire row of teeth with a fixed, non-removable prosthesis supported by 4-6 <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>. The result is permanently anchored teeth that look, feel, and function like natural teeth. Implants are placed at precise angles to maximize bone contact, often eliminating the need for bone grafting.</p><p>Unlike removable <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link> that sit on top of the gums, All-on-X teeth are anchored directly to your jawbone — preventing bone loss, preserving facial structure, and restoring your ability to eat anything you want. Families throughout Bridgeland, Cy-Fair, and greater Cypress trust Smile Avenue for full-arch implant restorations. <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">Sedation dentistry</Link> options ensure complete comfort throughout the procedure.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for All-on-X</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE ALL-ON-X PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & FINANCING</p><h2 className="section-heading">All-on-X Investment</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>All-on-X is a significant investment in your quality of life — but it often costs less over a lifetime than ongoing denture maintenance, adhesives, relines, and replacements. We provide detailed cost estimates at your consultation. Financing through CareCredit, our Smile Avenue Membership Plan, and most major PPO insurance accepted.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">All-on-X Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book All-on-X Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">A New Smile in One Day</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule your All-on-X consultation and take the first step toward permanent, life-changing teeth.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default AllOnXCypress;
