import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, SmilePlus, Crown, Shield, Wrench, Scan } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "In-House Smile Dental Lab", description: "Our on-site lab fabricates your dentures for precise fit, natural appearance, and faster turnaround.", icon: <Crown className="w-5 h-5" /> },
  { title: "Digital Impressions", description: "No goopy molds — we use digital scanning for comfortable, accurate impressions.", icon: <Scan className="w-5 h-5" /> },
  { title: "Same-Day Adjustments & Relines", description: "Because we have an in-house lab, adjustments and relines are done quickly — often the same day.", icon: <Wrench className="w-5 h-5" /> },
  { title: "Implant-Supported Option", description: "For maximum stability, we offer dentures anchored by dental implants — no adhesives, no slipping.", icon: <Shield className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation & Digital Impressions", description: "We evaluate your oral health, discuss your goals, and take precise digital impressions for your custom dentures." },
  { number: "02", title: "Denture Design & Fabrication", description: "Your dentures are designed and fabricated in our in-house Smile Dental Lab for a natural look and precise fit." },
  { number: "03", title: "Try-In Appointment", description: "You try a model of your dentures so we can verify fit, bite, and appearance before final fabrication." },
  { number: "04", title: "Final Delivery & Adjustments", description: "Your finished dentures are delivered, adjusted for comfort, and you receive care instructions." },
  { number: "05", title: "Follow-Up Optimization", description: "We schedule follow-up visits to ensure your dentures remain comfortable and make any needed adjustments." },
];

const testimonials = [
  { quote: "My new dentures from Smile Avenue look so natural — even my friends can't tell. The in-house lab made the whole process faster than I expected.", name: "Patricia A.", source: "Google Review" },
  { quote: "I switched to implant-supported dentures and it was life-changing. No more adhesive, no more worrying about them slipping. Wish I'd done it years ago.", name: "George F.", source: "Google Review" },
  { quote: "The team was so patient during the whole denture process. Multiple fittings to get everything just right. The final result was worth the wait.", name: "Dorothy N.", source: "Google Review" },
];

const faqs = [
  { question: "How much do dentures cost?", answer: "Costs vary by type — full, partial, or implant-supported. We provide a detailed estimate at your consultation. Insurance often covers a portion, and CareCredit financing and our Membership Plan are available." },
  { question: "How long does it take to get used to dentures?", answer: "Most patients adjust within 2-4 weeks. Your mouth needs time to adapt to the new prosthesis. We schedule follow-up visits to make adjustments as needed during this period." },
  { question: "Can I eat normally with dentures?", answer: "Yes, with practice. Start with soft foods and gradually work up to harder items. Implant-supported dentures offer even better chewing ability and stability." },
  { question: "How long do dentures last?", answer: "Traditional dentures typically last 5-10 years before needing replacement as your jaw shape changes over time. Regular checkups help us monitor fit and recommend relines or replacement when needed." },
  { question: "Implant-supported vs traditional dentures?", answer: "Implant-supported dentures snap onto dental implants for superior stability — no adhesives, no slipping. They're more comfortable, allow you to eat more foods, and help preserve jawbone. They're a bigger investment but offer dramatically better quality of life." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const DenturesCypress = () => (
  <>
    <Helmet>
      <title>Dentures in Cypress, TX - Full and Partial - Smile Avenue</title>
      <meta name="description" content="Custom dentures in Cypress, TX. Full, partial, and implant-supported options. In-house lab precision. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/dentures/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Dentures</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">DENTURES IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dentures in Cypress, TX</h1>
          <p className="section-body">Modern dentures are nothing like what your grandparents wore. At Smile Avenue Cypress, we create custom dentures using our in-house Smile Dental Lab — delivering natural-looking results that fit comfortably and restore your ability to eat, speak, and smile with confidence.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Denture Consultation</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["dentures"] ? (<img src={SERVICE_IMAGES["dentures"].url} alt="custom dentures crafted at Smile Avenue Family Dentistry in-house lab Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">TOOTH REPLACEMENT OPTIONS</p><h2 className="section-heading">Modern Denture Solutions</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Dentures are removable replacements for missing teeth, available in several types to match your specific needs. Full dentures replace an entire arch of teeth, while partial dentures fill gaps when you still have healthy natural teeth remaining. For the most stable solution, <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">implant-supported dentures</Link> snap onto dental implants for a secure fit without adhesives.</p><p>Every set of dentures at Smile Avenue is crafted in our in-house Smile Dental Lab for precise fit and natural appearance. We use digital impressions — no goopy molds — and can make same-day adjustments because our lab is right here. Patients from Bridgeland, Towne Lake, and Cypress trust us for comfortable, beautiful dentures. For patients considering a permanent fixed solution, ask about our <Link to="/cypress-tx/all-on-x-implants" className="text-primary hover:underline">All-on-X implants</Link>.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for Dentures</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">THE DENTURE PROCESS</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & FINANCING</p><h2 className="section-heading">Denture Investment</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Denture costs vary by type — full, partial, or implant-supported. Insurance often covers a portion of denture treatment. We accept most major PPO plans and offer financing through CareCredit. Our Smile Avenue Membership Plan provides additional savings for uninsured patients.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Denture Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Denture Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Restore Your Smile with Custom Dentures</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule your denture consultation and discover which option is right for you.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DenturesCypress;
