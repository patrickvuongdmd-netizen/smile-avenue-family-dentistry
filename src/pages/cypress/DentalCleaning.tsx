import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Heart, Users, Scan, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "Experienced Gentle Hygienists", description: "Our hygienists Arpine, Ivy, and Jen are known for thorough yet gentle cleanings that patients actually enjoy.", icon: <Heart className="w-5 h-5" /> },
  { title: "Comprehensive Exams Included", description: "Every cleaning includes a full examination, oral cancer screening, and personalized care recommendations.", icon: <Shield className="w-5 h-5" /> },
  { title: "Digital X-Rays", description: "Minimal-radiation digital X-rays detect problems invisible to the naked eye — catching issues early when they're easiest to treat.", icon: <Scan className="w-5 h-5" /> },
  { title: "Family-Friendly — All Ages", description: "From toddlers to grandparents, we welcome patients of all ages and make every visit comfortable and educational.", icon: <Users className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Digital X-Rays", description: "As needed, we capture low-dose digital X-rays to see what's happening beneath the surface." },
  { number: "02", title: "Professional Cleaning", description: "Plaque and tartar removal from all tooth surfaces and along the gumline, followed by polishing." },
  { number: "03", title: "Gum Health Assessment", description: "Your hygienist evaluates gum health, checks for signs of periodontal disease, and measures pocket depths." },
  { number: "04", title: "Dentist Exam & Screening", description: "Your dentist examines teeth, reviews X-rays, performs an oral cancer screening, and discusses findings." },
  { number: "05", title: "Home Care Recommendations", description: "Personalized brushing, flossing, and care tips tailored to your specific oral health needs." },
];

const testimonials = [
  { quote: "Best cleaning I've ever had. The hygienist was so thorough and gentle. My teeth feel amazing and the whole visit was actually enjoyable!", name: "Michelle W.", source: "Google Review" },
  { quote: "I hadn't been to the dentist in 3 years and was embarrassed. The team at Smile Avenue was so non-judgmental and kind. They got my teeth back in great shape.", name: "Derek S.", source: "Google Review" },
  { quote: "My kids actually look forward to their cleanings here! The hygienists are wonderful with children and make it fun. Can't recommend this place enough.", name: "Sarah T.", source: "Google Review" },
];

const faqs = [
  { question: "How much does a dental cleaning cost without insurance?", answer: "Our Membership Plan is the best value for uninsured patients — it includes 2 cleanings, exams, and X-rays annually plus discounts on all other treatments. Call for current pricing." },
  { question: "How often should I get a dental cleaning?", answer: "Every 6 months for most patients. Patients with gum disease may benefit from cleanings every 3-4 months. We'll recommend the right schedule for your needs." },
  { question: "Is a deep cleaning different from a regular cleaning?", answer: "Yes — a deep cleaning (scaling and root planing) treats below the gumline and is necessary when gum disease is present. A regular cleaning (prophylaxis) maintains healthy teeth and gums above the gumline." },
  { question: "Does a dental cleaning hurt?", answer: "No — but if you have sensitivity, we accommodate with numbing gel or local anesthesia to ensure your comfort throughout the procedure." },
  { question: "Do kids need dental cleanings?", answer: "Yes, starting around age 2-3. Early dental visits establish good habits, catch problems early, and help children feel comfortable with dental care. Our team is great with kids of all ages." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const DentalCleaningCypress = () => (
  <>
    <Helmet>
      <title>Dental Cleaning in Cypress, TX - Preventive Care - Smile Avenue</title>
      <meta name="description" content="Professional dental cleanings in Cypress, TX. Thorough gentle care by experienced hygienists. Most insurance accepted. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/dental-cleaning/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Dental Cleaning</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">PREVENTIVE CARE IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dental Cleaning and Preventive Care in Cypress, TX</h1>
          <p className="section-body">Regular cleanings are the foundation of a healthy smile. At Smile Avenue Cypress, we make them comfortable, thorough, and enjoyable. Our hygienists use gentle technique and modern technology to keep teeth and gums in top condition.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Cleaning</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["dental-cleaning"] ? (<img src={SERVICE_IMAGES["dental-cleaning"].url} alt="patient receiving dental cleaning at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">PREVENTIVE DENTISTRY</p><h2 className="section-heading">Why Dental Cleanings Matter</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Even with excellent home care, plaque and tartar build up where brushing and flossing miss. Professional cleanings remove this buildup, polish teeth, assess gum health, screen for oral cancer, and update X-rays as needed. The ADA recommends cleanings every 6 months for most patients.</p><p>Families across Bridgeland, Towne Lake, Fairfield, and Cypress trust our hygienists Arpine, Ivy, and Jen for gentle, thorough care. Regular cleanings help prevent <Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canals</Link>, <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">extractions</Link>, and other costly procedures by catching problems early. We also offer <Link to="/cypress-tx/pediatric-dentistry" className="text-primary hover:underline">pediatric dentistry</Link> for our youngest patients and <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">teeth whitening</Link> to brighten your smile after your cleaning.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Patients Choose Us for Cleanings</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR CLEANING VISIT</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & FINANCING</p><h2 className="section-heading">Cleaning Costs</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Dental cleanings are covered by virtually all insurance plans at 100% for two visits per year. For uninsured patients, our Smile Avenue Membership Plan includes 2 cleanings, exams, and X-rays annually plus discounts on all other treatments.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Dental Cleaning Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Cleaning</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Schedule Your Cleaning Today</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Keep your smile healthy with a professional cleaning at Smile Avenue Cypress.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Cleaning</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DentalCleaningCypress;
