import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Baby, Shield, Droplets, Sparkles, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "Kid-Friendly Environment", description: "Our office is designed to make children feel safe, comfortable, and even excited about their dental visit.", icon: <Baby className="w-5 h-5" /> },
  { title: "Dr. Kim — Experienced with Children", description: "Dr. Peter Kim has advanced pediatric training and a gentle, patient approach that puts kids at ease.", icon: <Heart className="w-5 h-5" /> },
  { title: "Never Rush a Child", description: "We take the time each child needs to feel comfortable — building trust and positive associations with dental care.", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Sedation Available When Needed", description: "For anxious children or extensive treatment, we offer safe sedation options to ensure a stress-free experience.", icon: <Shield className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Welcome & Warm-Up", description: "Your child is greeted by our friendly team and shown around the office to feel comfortable and at ease." },
  { number: "02", title: "Gentle Examination", description: "The dentist gently examines your child's teeth, gums, and jaw development using kid-friendly tools and language." },
  { number: "03", title: "Age-Appropriate Cleaning", description: "Our hygienist provides a gentle, thorough cleaning with flavored polish your child gets to choose." },
  { number: "04", title: "Fluoride & Sealants", description: "Protective fluoride treatment and sealants applied to guard against cavities in those hard-to-brush areas." },
  { number: "05", title: "Parent Consultation", description: "We discuss findings, answer questions, and provide personalized home care tips for your child's oral health." },
];

const testimonials = [
  { quote: "My 3-year-old was so nervous for her first dentist visit, but the team made it like a fun adventure. She left saying she wants to come back!", name: "Brittany L.", source: "Google Review" },
  { quote: "We've been bringing all three of our kids to Smile Avenue for years. The hygienists are incredibly patient and gentle. My kids actually remind me when their appointments are coming up.", name: "Jason H.", source: "Google Review" },
  { quote: "Dr. Kim is amazing with kids. He explained everything to my son at his level and made him feel like a superhero for being brave. We'll never go anywhere else.", name: "Rebecca C.", source: "Google Review" },
];

const faqs = [
  { question: "When should my child first see a dentist?", answer: "The AAPD recommends a first dental visit by age 1 or within 6 months of the first tooth erupting. Early visits establish a dental home and catch developmental concerns early." },
  { question: "How do I prepare my child for their first visit?", answer: "Keep it positive! Avoid scary words, read children's books about the dentist, and let them know it will be fun. Our team handles the rest with a warm, welcoming approach." },
  { question: "Are dental sealants worth it?", answer: "Absolutely — sealants reduce cavity risk by up to 80% on the chewing surfaces of back teeth. They're quick, painless, and one of the most effective preventive treatments available." },
  { question: "How do you handle anxious children?", answer: "We go at their pace, using a gentle tell-show-do approach. For very anxious children, sedation options are available to ensure a comfortable, stress-free experience." },
  { question: "How much does kids dental care cost?", answer: "Most dental insurance covers pediatric preventive care at 100%. Our Smile Avenue Membership Plan also covers children with two cleanings, exams, and X-rays annually." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const PediatricDentistryCypress = () => (
  <>
    <Helmet>
      <title>Pediatric Dentist in Cypress, TX - Kids Dentistry - Smile Avenue</title>
      <meta name="description" content="Gentle pediatric dentistry in Cypress, TX. First visits, cleanings, sealants for kids of all ages. Fun environment. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/pediatric-dentistry/" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background"><div className="container mx-auto">
        <nav className="mb-6 text-xs font-sans text-muted-foreground"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span><Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span><span className="text-foreground">Pediatric Dentistry</span></nav>
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center"><div>
          <p className="kicker">KIDS DENTISTRY IN CYPRESS</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Pediatric Dentistry in Cypress, TX</h1>
          <p className="section-body">Your child's dental health journey starts earlier than most parents realize. At Smile Avenue Cypress, we make kids' visits fun, comfortable, and educational — building positive habits from the first appointment.</p>
          <div className="flex flex-wrap gap-3 mb-6"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Your Child's Visit</a><a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a></div>
        </div><div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">{SERVICE_IMAGES["pediatric-dentistry"] ? (<img src={SERVICE_IMAGES["pediatric-dentistry"].url} alt="child smiling during pediatric dental visit at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />) : (<div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>)}</div></div>
      </div></section>

      <section className="section-padding section-alt"><div className="container mx-auto max-w-3xl"><p className="kicker">GENTLE CARE FOR LITTLE SMILES</p><h2 className="section-heading">Why Early Dental Care Matters</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>The American Academy of Pediatric Dentistry recommends a child's first dental visit by age 1 or within 6 months of their first tooth. Baby teeth are critical for speech development, proper nutrition, and guiding permanent teeth into the correct position. Our pediatric services include first visits, <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">cleanings</Link>, fluoride treatments, sealants, cavity treatment, orthodontic monitoring, custom mouthguards, and emergency care.</p><p>Dr. Peter Kim has advanced pediatric training and a natural ability to connect with children of all ages. Families across Bridgeland, Towne Lake, and Cy-Fair trust Smile Avenue for their children's dental care. We also offer <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">sedation options</Link> for anxious children who need a little extra help feeling comfortable.</p></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">WHY CHOOSE SMILE AVENUE</p><h2 className="section-heading">Why Parents Choose Us</h2><div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">YOUR CHILD'S VISIT</p><h2 className="section-heading">What to Expect</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto max-w-3xl"><p className="kicker">COST & INSURANCE</p><h2 className="section-heading">Affordable Kids Dentistry</h2><div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"><p>Most dental insurance covers pediatric preventive care — cleanings, exams, fluoride, and X-rays — at 100% for two visits per year. We accept all major PPO plans. Our Smile Avenue Membership Plan also covers children and includes two cleanings, exams, and X-rays annually at an affordable rate.</p></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Kids Dentistry Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding bg-background"><div className="container mx-auto text-center"><p className="kicker">PARENT REVIEWS</p><h2 className="section-heading">What Parents Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Your Child's Visit</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Give Your Child a Healthy Smile</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule your child's dental visit today. Fun, gentle, and thorough care for kids of all ages.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default PediatricDentistryCypress;
