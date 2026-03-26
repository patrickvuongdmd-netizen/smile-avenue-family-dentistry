import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, PhoneCall, Scan, Stethoscope, Syringe, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "Same-Day Emergency Appointments", description: "We reserve time daily for urgent cases so you're never left waiting in pain.", icon: <Zap className="w-5 h-5" /> },
  { title: "Sedation for Anxious Patients", description: "Dental emergencies are stressful. We offer sedation options to keep you calm and comfortable during treatment.", icon: <Shield className="w-5 h-5" /> },
  { title: "Advanced Digital X-Rays & 3D CBCT", description: "Quick, accurate diagnosis with digital radiography and 3D cone beam imaging — no guesswork.", icon: <Scan className="w-5 h-5" /> },
  { title: "Comprehensive In-House Care", description: "From root canals to extractions to custom crowns, we handle everything under one roof — no referrals needed.", icon: <Stethoscope className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Call (832) 648-1756 Immediately", description: "Our team will assess your situation over the phone, give you at-home care instructions, and schedule you as soon as possible — often the same day.", icon: <PhoneCall className="w-6 h-6" /> },
  { number: "02", title: "Digital X-Rays & 3D Scan", description: "When you arrive, we prioritize pain management first, then take digital X-rays or a 3D CBCT scan for a complete, accurate diagnosis.", icon: <Scan className="w-6 h-6" /> },
  { number: "03", title: "Immediate Treatment", description: "Based on diagnosis, we begin treatment right away — whether it's a filling, crown, root canal, extraction, or stabilization.", icon: <Syringe className="w-6 h-6" /> },
  { number: "04", title: "Aftercare & Follow-Up", description: "We provide detailed aftercare instructions and schedule any necessary follow-up appointments to ensure complete healing.", icon: <Stethoscope className="w-6 h-6" /> },
];

const testimonials = [
  { quote: "I chipped my tooth on a Saturday morning and they were able to see me first thing Monday. The repair looks perfect — you can't even tell it happened. So grateful for this team!", name: "Brian C.", source: "Google Review" },
  { quote: "Had a horrible toothache at work and called Smile Avenue. They squeezed me in that same afternoon. Dr. Vuong was so calm and reassuring. Pain was gone by the time I left.", name: "Nicole S.", source: "Google Review" },
  { quote: "My son knocked out a tooth playing basketball. They got us in within an hour and saved the tooth. I can't say enough good things about how they handled the situation.", name: "James P.", source: "Google Review" },
];

const faqs = [
  { question: "How much does an emergency visit cost?", answer: "Depends on diagnosis — we start with an exam and X-rays, then provide a clear cost breakdown before any treatment. Most PPO insurance accepted. CareCredit financing and our membership plan are also available." },
  { question: "What if my tooth gets knocked out?", answer: "Pick it up by the crown (not the root), rinse gently without scrubbing, and try to reinsert it into the socket. If that's not possible, keep it moist in milk or saliva. Call us immediately — the best chance of saving the tooth is within 30 minutes." },
  { question: "Do you accept walk-ins?", answer: "Call ahead at (832) 648-1756 for the fastest service, but we never turn away genuine emergencies. Calling first allows us to prepare for your arrival." },
  { question: "Can a toothache go away on its own?", answer: "Pain may temporarily subside, but the underlying cause — whether infection, decay, or a crack — will worsen without professional treatment. Don't wait." },
  { question: "Do you offer sedation for emergencies?", answer: "Yes. We offer sedation options for emergency procedures to ensure you're comfortable, especially if you're anxious or the treatment is extensive." },
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

const EmergencyDentistCypress = () => (
  <>
    <SkipToContent />
    <Helmet>
      <title>Emergency Dentist in Cypress, TX - Same-Day Care - Smile Avenue</title>
      <meta name="description" content="Dental emergency in Cypress? Same-day appointments for toothaches, broken teeth and more. Sedation available. Call (832) 648-1756 now." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/emergency-dentist/" />
      <meta property="og:title" content="Emergency Dentist in Cypress, TX - Same-Day Care - Smile Avenue" />
      <meta property="og:description" content="Dental emergency in Cypress? Same-day appointments for toothaches, broken teeth and more. Sedation available. Call (832) 648-1756 now." />
      <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/cypress-tx/emergency-dentist/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
    <TrustStrip />

    {/* Emergency Banner */}
    <div className="bg-destructive text-destructive-foreground py-3 text-center" role="alert">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-sans font-bold">
          🦷 Dental Emergency? Call Now — Same-Day Appointments Available:{" "}
          <a href={`tel:${CYPRESS_PHONE}`} className="underline hover:no-underline">{CYPRESS_PHONE_FORMATTED}</a>
        </p>
      </div>
    </div>

    <main id="main-content" className="pb-14 lg:pb-0">
      {/* HERO */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <nav className="mb-6 text-xs font-sans text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Emergency Dentist</span>
          </nav>
          <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
            <div>
              <p className="kicker">SAME-DAY EMERGENCY CARE IN CYPRESS</p>
              <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Emergency Dentist in Cypress, TX</h1>
              <p className="section-body">
                Dental emergencies do not wait for a convenient time — and neither should your care. At Smile Avenue in Cypress, we offer same-day emergency appointments for severe toothaches, broken teeth, knocked-out teeth, lost restorations, and other urgent dental needs. Call <a href={`tel:${CYPRESS_PHONE}`} className="text-primary hover:underline">{CYPRESS_PHONE_FORMATTED}</a> for immediate assistance.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Emergency Appointment</a>
                <a href={`tel:${CYPRESS_PHONE}`} className="btn-secondary pulse-glow">Call {CYPRESS_PHONE_FORMATTED} Now</a>
              </div>
            </div>
            <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center shadow-md">
              <span className="text-sm font-sans text-muted-foreground">Emergency Dentistry Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl">
          <p className="kicker">UNDERSTANDING DENTAL EMERGENCIES</p>
          <h2 className="section-heading">What Is a Dental Emergency?</h2>
          <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              A dental emergency is any situation involving sudden pain, trauma, or a condition requiring immediate attention. Common emergencies include severe toothaches, cracked, chipped, or broken teeth, knocked-out teeth, lost fillings or crowns, dental abscesses, uncontrolled bleeding, and broken dentures.
            </p>
            <p>
              Families in Cy-Fair, Spring Cypress, and the Fry Road corridor trust Smile Avenue for fast, compassionate emergency care. Whether you need a <Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canal</Link>, an emergency <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">tooth extraction</Link>, or a <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">custom crown</Link> to restore a broken tooth, we handle it all under one roof with no referrals to outside specialists.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <p className="kicker">WHY SMILE AVENUE</p>
          <h2 className="section-heading">Why Choose Us for Emergency Care</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">
            {whyChoose.map(s => (
              <div key={s.title} className="bg-card rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <p className="kicker">YOUR EMERGENCY VISIT</p>
          <h2 className="section-heading">What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map(s => (
              <div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div>
                <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST & FINANCING */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4"><DollarSign className="w-6 h-6" /></div>
          <h2 className="section-heading">Cost & Financing</h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Emergency dental costs vary by diagnosis and treatment. We accept most major PPO insurance plans. For uninsured patients, our <Link to="/membership-plan" className="text-primary hover:underline">Smile Avenue Membership Plan</Link> provides discounts on all services. CareCredit financing is also available for flexible monthly payments.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
            <div>
              <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
              <h2 className="section-heading">Emergency Dentistry FAQ</h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <p className="kicker">WHAT CYPRESS PATIENTS ARE SAYING</p>
          <h2 className="section-heading">Emergency Care Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
            {testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3>
            <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
              <div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div>
              <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${CYPRESS_PHONE}`} className="hover:text-primary transition-colors">{CYPRESS_PHONE_FORMATTED}</a></div>
              <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div>
            </div>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Emergency Appointment</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Dental Emergency? Call {CYPRESS_PHONE_FORMATTED} Now</h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Same-day emergency appointments at Smile Avenue Cypress. Don't wait in pain.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CYPRESS_PHONE}`} className="btn-cta-light">Call Now</a>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-outline">Book Online</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
    <BackToTop />
  </>
);

export default EmergencyDentistCypress;
