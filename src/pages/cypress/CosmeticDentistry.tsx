import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Sparkles, Palette, Sun, Pencil, Building2, ScanLine, Layers, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756"; const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const whyChoose = [
  { title: "In-House Lab for Custom Veneers & Crowns", description: "Our Smile Dental Lab crafts restorations on-site for precise color matching and faster turnaround.", icon: <Building2 className="w-5 h-5" /> },
  { title: "Digital Smile Design Previews", description: "See a preview of your new smile using advanced digital imaging before any treatment begins.", icon: <ScanLine className="w-5 h-5" /> },
  { title: "Comprehensive Services Under One Roof", description: "From veneers to whitening to full smile makeovers — everything you need in one location.", icon: <Layers className="w-5 h-5" /> },
  { title: "Proven Results with Real Transformations", description: "Real patient before-and-after results you can see in our smile gallery.", icon: <Award className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Smile Assessment Consultation", description: "Share your goals and we'll evaluate your teeth, discuss all available options, and recommend a personalized plan." },
  { number: "02", title: "Digital Smile Design", description: "Using advanced imaging, we create a digital preview of your potential results before any treatment begins." },
  { number: "03", title: "Treatment Plan Presentation", description: "We walk you through the recommended treatments, timeline, and investment so you can make an informed decision." },
  { number: "04", title: "Smile Transformation", description: "Whether veneers, whitening, or a full makeover, we execute your plan with precision and artistry for stunning results." },
];

const testimonials = [
  { quote: "I got 8 veneers at Smile Avenue and my smile has never looked better. Dr. Vuong has an incredible eye for detail — they look so natural!", name: "Heather J.", source: "Google Review" },
  { quote: "The in-office whitening was amazing! I was in and out in about an hour and my teeth are noticeably whiter. The staff was great about checking my comfort level.", name: "Kevin D.", source: "Google Review" },
  { quote: "I had bonding done on two front teeth that were chipped. You literally cannot tell they were ever damaged. So happy I chose Smile Avenue!", name: "Priya N.", source: "Google Review" },
];

const faqs = [
  { question: "How much do veneers cost in Cypress?", answer: "Porcelain veneers typically cost $1,200–$2,500 per tooth. We offer financing through CareCredit and our membership plan to make your dream smile affordable." },
  { question: "How long does a smile makeover take?", answer: "2–4 visits over 2–6 weeks depending on the treatments involved. We'll give you a clear timeline during your consultation." },
  { question: "Is cosmetic dentistry covered by insurance?", answer: "Some procedures with functional benefit may be partially covered by dental insurance. Our team will help you understand your coverage." },
  { question: "Will cosmetic results look natural?", answer: "Yes — our in-house Smile Dental Lab ensures custom color-matched restorations that blend seamlessly with your natural teeth." },
  { question: "How long do cosmetic treatments last?", answer: "Porcelain veneers last 15–20 years, dental bonding 5–10 years, and whitening results vary based on habits and maintenance." },
];

const relatedServices = [
  { title: "Porcelain Veneers", href: "/cypress-tx/veneers" },
  { title: "Teeth Whitening", href: "/cypress-tx/teeth-whitening" },
  { title: "Invisalign", href: "/cypress-tx/invisalign" },
  { title: "Dental Crowns", href: "/cypress-tx/dental-crowns" },
];

const heroImg = SERVICE_IMAGES["cosmetic-dentistry"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DentalService",
  name: "Cosmetic Dentistry",
  description: "Transform your smile with cosmetic dentistry in Cypress, TX. Veneers, whitening, bonding and smile makeovers.",
  url: "https://www.smileavenuefamilydentistry.com/cypress-tx/cosmetic-dentistry/",
  provider: {
    "@type": "Dentist",
    name: "Smile Avenue Family Dentistry",
    address: { "@type": "PostalAddress", streetAddress: "9212 Fry Rd #120", addressLocality: "Cypress", addressRegion: "TX", postalCode: "77433", addressCountry: "US" },
    telephone: "(832) 648-1756",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

const CosmeticDentistryCypress = () => (
  <>
    <Helmet>
      <title>Cosmetic Dentist in Cypress, TX - Smile Avenue Family Dentistry</title>
      <meta name="description" content="Transform your smile with cosmetic dentistry in Cypress, TX. Veneers, whitening, bonding and smile makeovers. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/cosmetic-dentistry/" />
      <meta property="og:title" content="Cosmetic Dentist in Cypress, TX - Smile Avenue Family Dentistry" />
      <meta property="og:description" content="Transform your smile with cosmetic dentistry in Cypress, TX. Veneers, whitening, bonding and smile makeovers." />
      <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/cypress-tx/cosmetic-dentistry/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      {/* HERO */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <nav className="mb-6 text-xs font-sans text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span>
            <Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span>
            <span className="text-foreground">Cosmetic Dentistry</span>
          </nav>
          <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
            <div>
              <p className="kicker">SMILE MAKEOVERS IN CYPRESS</p>
              <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Cosmetic Dentistry in Cypress, TX</h1>
              <p className="section-body">Your smile is one of the first things people notice. If you have been hiding yours because of chips, stains, gaps, or uneven teeth, cosmetic dentistry at Smile Avenue in Cypress can help you feel confident again.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Cosmetic Consultation</a>
                <a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
              {heroImg ? (
                <img src={heroImg.url} alt="Patient receiving cosmetic dentistry at Smile Avenue Family Dentistry Cypress TX" className="w-full h-full object-cover" fetchPriority="high" width={640} height={480} />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center"><span className="text-sm font-sans text-muted-foreground">Service Photo</span></div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl">
          <p className="kicker">TRANSFORM YOUR SMILE</p>
          <h2 className="section-heading">What Is Cosmetic Dentistry?</h2>
          <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
            <p>Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. Services include <Link to="/cypress-tx/veneers" className="text-primary hover:underline">porcelain veneers</Link>, <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">professional whitening</Link>, dental bonding, gum contouring, and comprehensive smile makeovers.</p>
            <p>Dr. Vuong combines artistic vision with digital technology for natural-looking results. Whether you need a quick fix like bonding or a complete transformation with veneers, we offer a full range of solutions tailored to your goals. For straighter teeth without braces, ask about <Link to="/cypress-tx/invisalign" className="text-primary hover:underline">Invisalign clear aligners</Link>.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <p className="kicker">WHY SMILE AVENUE</p>
          <h2 className="section-heading">Why Choose Us for Cosmetic Dentistry</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{whyChoose.map(s => (
            <div key={s.title} className="bg-card rounded-xl p-6 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}</div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <p className="kicker">YOUR COSMETIC JOURNEY</p>
          <h2 className="section-heading">What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (
            <div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left">
              <span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span>
              <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}</div>
        </div>
      </section>

      {/* COST & FINANCING */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <p className="kicker">INVESTMENT</p>
          <h2 className="section-heading">Cost & Financing</h2>
          <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
            <p>Cosmetic dentistry costs vary by procedure. We offer free cosmetic consultations so you can explore your options with no obligation.</p>
            <p>Financing is available through CareCredit, and some procedures with functional benefits may be partially covered by dental insurance. Our team will help you understand your options.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
            <div>
              <p className="kicker">FAQ</p>
              <h2 className="section-heading">Cosmetic Dentistry Questions</h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <p className="kicker">PATIENT REVIEWS</p>
          <h2 className="section-heading">What Patients Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <p className="kicker">EXPLORE MORE</p>
          <h2 className="section-heading">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {relatedServices.map(r => (
              <Link key={r.href} to={r.href} className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                {r.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE INFO */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3>
            <div className="space-y-3 text-sm font-sans text-muted-foreground mb-6">
              <div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div>
              <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div>
              <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div>
            </div>
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Cosmetic Consultation</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready for Your Dream Smile?</h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Book a cosmetic consultation and let us design the smile you've always wanted.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a>
            <a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a>
          </div>
        </div>
      </section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default CosmeticDentistryCypress;
