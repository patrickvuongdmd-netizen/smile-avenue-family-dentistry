import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, ClipboardList, Stethoscope, FileText, Check, Download } from "lucide-react";
import { OFFICE_IMAGES, PAGE_VIDEOS } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const KATY_PHONE = "2818005008";
const KATY_PHONE_FORMATTED = "(281) 800-5008";

const steps = [
  {
    number: "01",
    title: "Easy Check-In",
    description: "Complete your paperwork online before you arrive. We'll verify your insurance and have everything ready so your visit starts on time — no clipboard, no wait.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Comprehensive Exam",
    description: "Your first visit includes digital X-rays, a thorough oral exam, and a professional cleaning. We use the latest technology to give you a complete picture of your dental health.",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Your Custom Treatment Plan",
    description: "We'll walk you through our findings and create a personalized treatment plan. We'll discuss all your options, including financing, so you can make informed decisions with confidence.",
    icon: <FileText className="w-6 h-6" />,
  },
];

const bringItems = [
  "Valid photo ID (driver's license or passport)",
  "Dental insurance card (if applicable)",
  "List of current medications and allergies",
  "Previous dental records or X-rays (if available)",
  "Completed patient forms (or arrive 15 minutes early)",
];

const patientForms = [
  { name: "New Patient Registration Form", description: "Required for all new patients" },
  { name: "Medical History Form", description: "Helps us provide safe, personalized care" },
  { name: "HIPAA Privacy Notice", description: "Your privacy rights and our policies" },
  { name: "Financial Policy & Consent", description: "Payment options and authorization" },
];

const testimonials = [
  { quote: "As a new patient, I was so impressed with how smooth everything was. The online forms saved me time and the staff made me feel right at home from the moment I walked in.", name: "Jennifer L.", source: "Google Review", location: "Fairfield, Cypress" },
  { quote: "I was nervous about switching dentists, but Smile Avenue made the transition seamless. Dr. Vuong explained everything clearly and the whole team was incredibly welcoming.", name: "Marcus T.", source: "Google Review", location: "Towne Lake, Cypress" },
  { quote: "Best first dental visit I've ever had! They were thorough, gentle, and genuinely cared about my comfort. The Netflix during my cleaning was a nice surprise!", name: "Ashley R.", source: "Google Review", location: "Bridgeland, Cypress" },
];

const faqs = [
  { question: "What should I expect at my first visit?", answer: "Your first visit includes a warm welcome from our team, digital X-rays, a comprehensive oral exam by one of our doctors, and a professional cleaning. We'll discuss our findings, answer your questions, and create a personalized care plan — all in about 60–90 minutes." },
  { question: "Do you accept my insurance?", answer: "We accept most major PPO dental insurance plans, including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, and more. Our team will verify your benefits before your visit so you know exactly what's covered." },
  { question: "How early should I arrive?", answer: "If you've completed your paperwork online, you can arrive right at your appointment time. If you haven't filled out your forms yet, please arrive 15 minutes early so we can get everything set up." },
  { question: "Can I fill out forms online before my visit?", answer: "Yes! We offer convenient online patient forms that you can complete from home. You'll receive a link after scheduling your appointment, or you can download them from our website and bring them with you." },
  { question: "Do you see children and families?", answer: "Absolutely! Smile Avenue is a family practice and we love seeing patients of all ages — from toddlers getting their first checkup to grandparents maintaining their smiles. Our team specializes in creating a positive, fun experience for kids." },
];

const insuranceLogos = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental",
  "MetLife", "United Healthcare", "Guardian", "Humana",
];

const NewPatientHub = () => {
  useDocTitle("New Patient Hub | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>New Patient Hub | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Welcome to Smile Avenue! Everything you need for your first visit — online forms, insurance info, what to expect, and how to book your appointment." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/patients/new-patient-hub/" />
        <meta property="og:title" content="New Patient Hub | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Everything you need for your first visit — online forms, insurance info, what to expect." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/patients/new-patient-hub/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/logo-full.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <TrustTicker />

      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/patients/new-patient-hub" className="hover:text-primary transition-colors">Patients</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">New Patient Hub</span>
            </nav>

            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">NEW PATIENTS</p>
                <h1 className="section-heading text-4xl md:text-5xl leading-tight">
                  Your First Visit — Stress-Free, Start to Finish
                </h1>
                <p className="font-display text-xl md:text-2xl font-medium text-muted-foreground mb-4">
                  No Surprises. No Long Waits. Just Great Care.
                </p>
                <p className="section-body">
                  Switching dentists can feel like a hassle. We eliminated every friction point — online paperwork, insurance verification before you arrive, and a team that's ready for you the moment you walk in. Your first visit takes about 60 minutes and you'll leave with a clear plan.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book Your First Visit
                  </a>
                  <a href={`tel:${CYPRESS_PHONE}`} className="btn-secondary flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call {CYPRESS_PHONE_FORMATTED}
                  </a>
                </div>
              </div>
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.newPatientHero} alt="New patient welcome at Smile Avenue Family Dentistry Cypress" className="w-full h-full object-cover" fetchPriority="high" width={800} height={600} />
              </div>
            </div>
          </div>
        </section>

        {/* Video: Your First Visit */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH</p>
            <h2 className="section-heading">What to Expect on Your First Visit</h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.newPatient.youtubeId} title={PAGE_VIDEOS.newPatient.title} />
            </div>
          </div>
        </section>

        {/* 3-STEP WALKTHROUGH */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">3 SIMPLE STEPS</p>
            <h2 className="section-heading">Here's Exactly What Happens</h2>
            <p className="section-body max-w-2xl mx-auto">
              No guesswork. We've designed every step to respect your time and keep you comfortable.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {steps.map((step) => (
                <div key={step.number} className="bg-card rounded-2xl p-8 border border-border text-left relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                    {step.icon}
                  </div>
                  <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {step.number}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT TO BRING */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.waitingRoom} alt="Smile Avenue waiting room with comfortable seating" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </div>
              <div>
                <p className="kicker">COME PREPARED</p>
                <h2 className="section-heading">What to Bring (Quick Checklist)</h2>
                <p className="section-body">
                  Bring these items and we'll handle the rest — no paperwork at the front desk.
                </p>
                <ul className="space-y-3 mb-8">
                  {bringItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PATIENT FORMS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">SKIP THE CLIPBOARD</p>
            <h2 className="section-heading">Complete Your Forms from Home</h2>
            <p className="section-body max-w-2xl mx-auto">
              Fill out your paperwork before you arrive and walk straight into your appointment — no waiting room delays.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-10 max-w-3xl mx-auto text-left">
              {patientForms.map((form) => (
                <div key={form.name} className="bg-card rounded-xl p-5 border border-border flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-sm font-semibold text-foreground mb-0.5">{form.name}</h3>
                    <p className="text-xs font-sans text-muted-foreground">{form.description}</p>
                  </div>
                  <button className="text-xs font-sans font-semibold text-primary hover:text-primary-dark transition-colors shrink-0 mt-1">
                    PDF ↓
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSURANCE LOGOS */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="kicker">INSURANCE WE ACCEPT</p>
            <h2 className="section-heading">Most Major Plans Accepted</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
              {insuranceLogos.map((name) => (
                <div key={name} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center">
                  <span className="text-sm font-sans font-medium text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-sans text-muted-foreground mt-6">
              Don't see your plan? <Link to="/insurance" className="text-primary hover:underline">Contact us to verify your coverage.</Link>
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">FIRST-TIME PATIENT EXPERIENCES</p>
            <h2 className="section-heading">What New Patients Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading">Questions About Your First Visit</h2>
                <p className="section-body">
                  Have a question we didn't cover? Call us at{" "}
                  <a href={`tel:${CYPRESS_PHONE}`} className="text-primary hover:underline">{CYPRESS_PHONE_FORMATTED}</a> and our friendly team will be happy to help.
                </p>
              </div>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* LOCATION INFO */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">VISIT US</p>
            <h2 className="section-heading">Choose Your Location</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto text-left">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Cypress Office</h3>
                <div className="space-y-2 text-sm font-sans text-muted-foreground mb-4">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${CYPRESS_PHONE}`} className="hover:text-primary transition-colors">{CYPRESS_PHONE_FORMATTED}</a></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8:30am–5pm</span></div>
                </div>
                <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta text-center w-full">Book at Cypress</a>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Katy Office</h3>
                <div className="space-y-2 text-sm font-sans text-muted-foreground mb-4">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>23541 Westheimer Pkwy Ste #170, Katy, TX 77494</span></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${KATY_PHONE}`} className="hover:text-primary transition-colors">{KATY_PHONE_FORMATTED}</a></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8:30am–5pm · Sat 8am–2pm</span></div>
                </div>
                <a href="https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue" target="_blank" rel="noopener noreferrer" className="btn-primary text-center w-full">Book at Katy</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
    </>
  );
};

export default NewPatientHub;
