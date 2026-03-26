import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Baby, Sparkles, Droplets, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "First Dental Visit", description: "We make your child's first trip to the dentist fun and positive. A gentle exam, age-appropriate education, and a prize at the end set the stage for a lifetime of healthy habits.", icon: <Baby className="w-5 h-5" /> },
  { title: "Dental Sealants", description: "Thin protective coatings applied to the chewing surfaces of back teeth to prevent cavities in the deep grooves where bacteria love to hide.", icon: <Shield className="w-5 h-5" /> },
  { title: "Fluoride Treatments", description: "Professional fluoride strengthens developing enamel and helps prevent decay. Quick, painless, and especially beneficial for cavity-prone kids.", icon: <Droplets className="w-5 h-5" /> },
  { title: "Gentle Cleanings", description: "Kid-friendly cleanings that remove plaque, polish teeth, and reinforce good brushing habits — all in a warm, encouraging environment.", icon: <Sparkles className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Warm Welcome", description: "Your child is greeted by our friendly team and shown around the office to feel comfortable and at ease." },
  { number: "02", title: "Gentle Exam", description: "The dentist gently examines your child's teeth, gums, and jaw development using kid-friendly tools." },
  { number: "03", title: "Fun Cleaning", description: "Our hygienist provides a gentle, thorough cleaning with flavored polish your child gets to choose." },
  { number: "04", title: "Education & Prizes", description: "We teach proper brushing and flossing techniques, and your child picks a prize from our treasure chest!" },
];

const testimonials = [
  { quote: "My 3-year-old was so nervous for her first dentist visit, but the team made it like a fun adventure. She left saying she wants to come back! That's a win in my book.", name: "Brittany L.", source: "Google Review" },
  { quote: "We've been bringing all three of our kids to Smile Avenue for years. The hygienists are incredibly patient and gentle. My kids actually remind me when their appointments are coming up.", name: "Jason H.", source: "Google Review" },
  { quote: "Dr. Vuong is amazing with kids. He explained everything to my son at his level and made him feel like a superhero for being brave. We'll never go anywhere else.", name: "Rebecca C.", source: "Google Review" },
];

const faqs = [
  { question: "How much does pediatric dental care cost in Cypress, TX?", answer: "Pediatric exams and cleanings typically range from $75–$200. Sealants are $30–$60 per tooth and fluoride treatments $20–$40. Most dental insurance covers preventive care for children at 100%." },
  { question: "When should my child first see a dentist?", answer: "The American Academy of Pediatric Dentistry recommends a first dental visit by age 1 or within 6 months of the first tooth erupting. Early visits establish a dental home and catch any developmental concerns." },
  { question: "How do you handle anxious children?", answer: "We use a gentle, tell-show-do approach to help kids feel comfortable. Our office has a kid-friendly environment with TV, cozy blankets, and a prize system. For very anxious children, we offer sedation options." },
  { question: "Are dental sealants safe for kids?", answer: "Yes! Dental sealants are safe, BPA-free, and one of the most effective ways to prevent cavities in children. They're quick and painless to apply and can protect teeth for several years." },
  { question: "How often should my child see the dentist?", answer: "We recommend checkups and cleanings every 6 months. Regular visits help us monitor development, catch issues early, and reinforce healthy habits during your child's formative years." },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const PediatricDentistryCypress = () => (
  <>
    <Helmet>
      <title>Pediatric Dentist Cypress, TX | Kids Dentistry | Smile Avenue</title>
      <meta name="description" content="Pediatric dentist in Cypress, TX. Gentle, fun dental care for kids of all ages. First visits, sealants, fluoride & more. Call (832) 648-1756." />
      <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/pediatric-dentistry/" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Pediatric Dentistry</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">KIDS DENTISTRY IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Pediatric Dentistry in Cypress, TX</h1>
          <p className="section-body">At Smile Avenue Cypress, we believe every child deserves a positive dental experience. Our team specializes in making dental visits fun, comfortable, and educational — building healthy habits that last a lifetime.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Kids Appointment</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center shadow-md"><span className="text-sm font-sans text-muted-foreground">Kids Dentistry Photo</span></div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">GENTLE CHILDREN'S DENTISTRY</p><h2 className="section-heading">Dental Care Your Kids Will Love</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>We understand that a child's early dental experiences shape their attitude toward oral health for life. That's why our team goes above and beyond to create a warm, welcoming environment where kids feel safe, valued, and even excited about their dental visits.</p><p>From the moment they walk in, your child will be greeted with smiles, shown our kid-friendly treatment rooms, and given choices that make them feel in control. Our gentle approach, combined with age-appropriate explanations, helps even the most nervous little ones feel at ease.</p></div></div></section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Heart className="w-5 h-5" />, label: "Gentle & Fun" }, { icon: <Shield className="w-5 h-5" />, label: "Cavity Prevention" }, { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">KIDS SERVICES</p><h2 className="section-heading">Pediatric Treatments We Offer</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR CHILD'S VISIT</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Kids Dentistry Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PARENT REVIEWS</p><h2 className="section-heading">What Parents Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Kids Appointment</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Give Your Child a Smile They Love</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule your child's visit at Smile Avenue Cypress — where kids' dentistry is always fun.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default PediatricDentistryCypress;
