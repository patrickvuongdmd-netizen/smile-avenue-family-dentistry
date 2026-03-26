import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Sparkles, Droplets, Stethoscope, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Routine Cleaning (Prophylaxis)", description: "A standard professional cleaning that removes plaque and tartar buildup, polishes your teeth, and helps prevent cavities and gum disease.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Deep Cleaning (Scaling & Root Planing)", description: "A therapeutic cleaning for patients with gum disease. We clean below the gumline and smooth root surfaces to help gums reattach to teeth.", icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Periodontal Maintenance", description: "Ongoing cleanings for patients who have been treated for gum disease. Typically scheduled every 3–4 months to maintain gum health.", icon: <Shield className="w-5 h-5" /> },
  { title: "Fluoride Treatment", description: "A quick, painless treatment that strengthens enamel and helps prevent cavities. Recommended for children and adults at higher risk for decay.", icon: <Droplets className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Exam & Assessment", description: "Your hygienist examines your teeth and gums, checks for signs of decay, gum disease, and oral health changes." },
  { number: "02", title: "Plaque & Tartar Removal", description: "Using specialized instruments, we carefully remove plaque and tartar from all tooth surfaces and along the gumline." },
  { number: "03", title: "Polish & Floss", description: "Your teeth are polished to a smooth shine and flossed to remove any remaining debris between teeth." },
  { number: "04", title: "Doctor Exam & Plan", description: "Your dentist reviews findings, discusses any concerns, and recommends next steps for your ongoing care." },
];

const testimonials = [
  { quote: "Best cleaning I've ever had. The hygienist was so thorough and gentle. My teeth feel amazing and the whole visit was actually enjoyable!", name: "Michelle W.", source: "Google Review" },
  { quote: "I hadn't been to the dentist in 3 years and was embarrassed. The team at Smile Avenue was so non-judgmental and kind. They got my teeth back in great shape.", name: "Derek S.", source: "Google Review" },
  { quote: "My kids actually look forward to their cleanings here! The hygienists are wonderful with children and make it fun. Can't recommend this place enough.", name: "Sarah T.", source: "Google Review" },
];

const faqs = [
  { question: "How much does a dental cleaning cost in Cypress, TX?", answer: "Routine cleanings typically range from $100–$250. Deep cleanings cost $200–$400 per quadrant. Most dental insurance plans cover two preventive cleanings per year at 100%." },
  { question: "How often should I get a dental cleaning?", answer: "Most patients should get a professional cleaning every 6 months. Patients with gum disease may need cleanings every 3–4 months. We'll recommend the right schedule for your needs." },
  { question: "What's the difference between a regular cleaning and a deep cleaning?", answer: "A regular cleaning (prophylaxis) removes plaque and tartar above the gumline. A deep cleaning (scaling and root planing) cleans below the gumline and is necessary when gum disease is present." },
  { question: "Does a dental cleaning hurt?", answer: "Routine cleanings are generally painless. If you have sensitive teeth or gum disease, we can use numbing gel or local anesthesia to ensure your comfort throughout the procedure." },
  { question: "Can dental cleanings whiten my teeth?", answer: "Cleanings remove surface stains and polish your teeth, which can make them appear brighter. For more significant whitening, we recommend our professional teeth whitening treatments." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const DentalCleaningCypress = () => (
  <>
    <Helmet>
      <title>Dental Cleaning Cypress, TX | Smile Avenue Family Dentistry</title>
      <meta name="description" content="Professional dental cleanings in Cypress, TX. Routine cleanings, deep cleanings & periodontal care for the whole family. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/dental-cleaning/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Dental Cleaning</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">PREVENTIVE CARE IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dental Cleaning in Cypress, TX</h1>
          <p className="section-body">Regular dental cleanings are the foundation of a healthy smile. At Smile Avenue Cypress, our gentle hygienists provide thorough, comfortable cleanings that keep your teeth and gums in optimal condition — for patients of all ages.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Cleaning</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center shadow-md"><span className="text-sm font-sans text-muted-foreground">Dental Cleaning Photo</span></div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">PREVENTIVE DENTISTRY</p><h2 className="section-heading">Why Dental Cleanings Matter</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Even with diligent brushing and flossing, plaque and tartar can build up in hard-to-reach areas. Professional cleanings remove these deposits before they lead to cavities, gum disease, and other oral health problems.</p><p>Beyond keeping your teeth clean, regular dental visits allow us to catch potential issues early — when they're easier and less expensive to treat. Your cleaning appointment includes a thorough examination, oral cancer screening, and personalized recommendations for your home care routine.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Heart className="w-5 h-5" />, label: "Gentle Care" }, { icon: <Shield className="w-5 h-5" />, label: "Prevent Problems" }, { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">CLEANING OPTIONS</p><h2 className="section-heading">Cleaning Services We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR CLEANING VISIT</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Dental Cleaning Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Cleaning</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Schedule Your Cleaning Today</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Keep your smile healthy with a professional cleaning at Smile Avenue Cypress.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Cleaning</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DentalCleaningCypress;
