import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Check, Shield, Zap, Users, PhoneCall, Scan, Stethoscope, Syringe } from "lucide-react";
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

const subServices = [
  {
    title: "Toothache & Pain Relief",
    description: "Severe tooth pain can signal infection, decay, or a cracked tooth. We diagnose the source of your pain quickly and provide immediate relief so you can get back to your day.",
    icon: <Stethoscope className="w-5 h-5" />,
  },
  {
    title: "Broken or Chipped Teeth",
    description: "Whether it happened during a meal or a sports injury, a broken tooth needs prompt attention. We offer same-day bonding, crowns, and restorations to protect your smile.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Lost Crown or Filling",
    description: "A lost crown or filling exposes your tooth to sensitivity and further damage. We'll replace or re-cement your restoration quickly to keep your tooth protected.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Emergency Extraction",
    description: "When a tooth is too damaged to save, a timely extraction prevents infection and further complications. We make the process as comfortable as possible with sedation options.",
    icon: <Syringe className="w-5 h-5" />,
  },
];

const processSteps = [
  { number: "01", title: "Call Us", description: "Call (832) 648-1756 and let our team know you have a dental emergency. We'll get you scheduled as quickly as possible — often the same day.", icon: <PhoneCall className="w-6 h-6" /> },
  { number: "02", title: "Same-Day Exam", description: "When you arrive, we'll prioritize your comfort and quickly assess the situation with a thorough examination.", icon: <Stethoscope className="w-6 h-6" /> },
  { number: "03", title: "Digital X-Rays & Diagnosis", description: "We use advanced digital X-rays to get a complete picture of the issue, allowing us to provide an accurate diagnosis in minutes.", icon: <Scan className="w-6 h-6" /> },
  { number: "04", title: "Immediate Treatment", description: "Once we've diagnosed the problem, we begin treatment right away — whether it's pain relief, a restoration, or an extraction.", icon: <Syringe className="w-6 h-6" /> },
];

const trustBadges = [
  { icon: <Zap className="w-5 h-5" />, label: "Same-Day Available" },
  { icon: <Shield className="w-5 h-5" />, label: "Gentle Care" },
  { icon: <Users className="w-5 h-5" />, label: "Trusted by 5,000+ Families" },
];

const insuranceLogos = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental",
  "MetLife", "United Healthcare", "Guardian", "Humana",
];

const testimonials = [
  { quote: "I chipped my tooth on a Saturday morning and they were able to see me first thing Monday. The repair looks perfect — you can't even tell it happened. So grateful for this team!", name: "Brian C.", source: "Google Review" },
  { quote: "Had a horrible toothache at work and called Smile Avenue. They squeezed me in that same afternoon. Dr. Vuong was so calm and reassuring. Pain was gone by the time I left.", name: "Nicole S.", source: "Google Review" },
  { quote: "My son knocked out a tooth playing basketball. They got us in within an hour and saved the tooth. I can't say enough good things about how they handled the situation.", name: "James P.", source: "Google Review" },
];

const faqs = [
  { question: "How much does emergency dental care cost in Cypress, TX?", answer: "Emergency exam and X-ray fees vary depending on the treatment needed. We accept most major insurance plans and offer flexible financing through CareCredit and Sunbit. Our team will provide a clear cost estimate before any treatment begins." },
  { question: "Do you accept walk-in emergencies?", answer: "While we prefer that you call ahead so we can prepare for your arrival, we do accommodate walk-in emergencies whenever possible. Calling first at (832) 648-1756 helps us serve you faster." },
  { question: "What counts as a dental emergency?", answer: "A dental emergency includes severe toothache, a knocked-out or loose tooth, a broken or cracked tooth, a lost filling or crown, swelling or abscess, uncontrolled bleeding, or jaw pain. When in doubt, call us — we're happy to advise." },
  { question: "Do you offer same-day emergency appointments?", answer: "Yes. We reserve time in our schedule for dental emergencies. Call us at (832) 648-1756 as early as possible, and we'll do our best to see you the same day." },
  { question: "What should I do if I knock out a tooth?", answer: "Handle the tooth by the crown (not the root), gently rinse it if dirty, and try to place it back in the socket. If that's not possible, keep it moist in milk or saliva. Call us immediately — the best chance of saving the tooth is within 30 minutes." },
];

const EmergencyDentistCypress = () => {
  useDocTitle("Emergency Dentist Cypress, TX | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Emergency Dentist Cypress, TX | Same-Day Care | Smile Avenue</title>
        <meta name="description" content="Dental emergency in Cypress, TX? Smile Avenue offers same-day emergency appointments for toothaches, broken teeth, lost fillings & more. Call (832) 648-1756." />
        <link rel="canonical" href="https://smileavenuedentistry.com/cypress-tx/emergency-dentist/" />
        <meta property="og:title" content="Emergency Dentist Cypress, TX | Same-Day Care | Smile Avenue" />
        <meta property="og:description" content="Dental emergency in Cypress, TX? Same-day emergency appointments available. Call (832) 648-1756." />
        <meta property="og:url" content="https://smileavenuedentistry.com/cypress-tx/emergency-dentist/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
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

      <main id="main-content" className="pb-14 lg:pb-0 animate-in fade-in duration-500">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/cypress-tx/" className="hover:text-primary transition-colors">Cypress, TX</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Emergency Dentist</span>
            </nav>

            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">SAME-DAY EMERGENCY CARE IN CYPRESS</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
                  Emergency Dentist in Cypress, TX
                </h1>
                <p className="section-body">
                  When a dental emergency strikes, Smile Avenue Cypress is here with same-day care to relieve your pain fast. Our experienced team handles everything from severe toothaches to knocked-out teeth with the urgency and compassion you deserve.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book Emergency Appointment
                  </a>
                  <a href={`tel:${CYPRESS_PHONE}`} className="btn-secondary pulse-glow">
                    Call for Immediate Help
                  </a>
                </div>
              </div>
              <div className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center shadow-md">
                <span className="text-sm font-sans text-muted-foreground">Emergency Dentistry Photo</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS EMERGENCY DENTAL CARE */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">UNDERSTANDING DENTAL EMERGENCIES</p>
              <h2 className="section-heading">What Is Emergency Dental Care?</h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                <p>
                  Emergency dental care addresses urgent oral health issues that require immediate attention — situations where delaying treatment could lead to permanent damage, severe pain, or infection. Unlike a routine checkup, emergency dentistry focuses on rapid diagnosis and same-day treatment to stabilize your condition and relieve discomfort.
                </p>
                <p>
                  Common dental emergencies include sudden and severe toothaches, teeth that have been knocked out, cracked, or broken, lost fillings or crowns, abscesses or facial swelling, and uncontrolled bleeding from the mouth. These situations can happen to anyone — whether you bite down on something hard, take a hit during sports, or wake up with an unexpected toothache.
                </p>
                <p>
                  At Smile Avenue Cypress, we reserve time in our daily schedule specifically for emergency patients. When you call, our team will assess your situation over the phone, give you immediate at-home care instructions, and get you into the office as quickly as possible — often the very same day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-sans font-semibold text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSURANCE */}
        <section className="py-12 section-alt">
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
          </div>
        </section>

        {/* SUB-SERVICES GRID */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">HOW WE CAN HELP</p>
            <h2 className="section-heading">Emergency Treatments We Provide</h2>
            <p className="section-body max-w-2xl mx-auto">
              No matter what kind of dental emergency you're facing, our Cypress team has the experience and technology to help.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">
              {subServices.map((svc) => (
                <div key={svc.title} className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {svc.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{svc.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">YOUR EMERGENCY VISIT</p>
            <h2 className="section-heading">What to Expect During Your Emergency Visit</h2>
            <p className="section-body max-w-2xl mx-auto">
              We've streamlined our emergency process so you get the care you need as quickly and comfortably as possible.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {processSteps.map((step) => (
                <div key={step.number} className="bg-card rounded-2xl p-6 border border-border text-left">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {step.icon}
                  </div>
                  <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {step.number}</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
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
                <h2 className="section-heading">Emergency Dentistry FAQ</h2>
                <p className="section-body">
                  Have a question about dental emergencies? Call us at{" "}
                  <a href={`tel:${CYPRESS_PHONE}`} className="text-primary hover:underline">{CYPRESS_PHONE_FORMATTED}</a> for immediate guidance.
                </p>
              </div>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WHAT CYPRESS PATIENTS ARE SAYING</p>
            <h2 className="section-heading">Emergency Care Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION INFO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3>
              <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>9212 Fry Rd #120, Cypress, TX 77433</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href={`tel:${CYPRESS_PHONE}`} className="hover:text-primary transition-colors">{CYPRESS_PHONE_FORMATTED}</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Mon–Fri 8am–5pm | Sat by Appointment</span>
                </div>
              </div>
              <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                Book Emergency Appointment
              </a>
            </div>
          </div>
        </section>

        {/* CTA BAR */}
        <section className="gradient-cta py-16 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Book Your Emergency Appointment Today
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Don't wait in pain. Call us now or book online for same-day emergency dental care in Cypress, TX.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">
                Book Now
              </a>
              <a href={`tel:${CYPRESS_PHONE}`} className="btn-cta-outline">
                Call {CYPRESS_PHONE_FORMATTED}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <BackToTop />
    </>
  );
};

export default EmergencyDentistCypress;
