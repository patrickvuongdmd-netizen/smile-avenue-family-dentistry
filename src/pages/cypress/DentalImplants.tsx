import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Shield, Zap, Users, Stethoscope, SmilePlus, Wrench, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import FaqAccordion from "@/components/FaqAccordion";
import { SERVICE_IMAGES } from "@/lib/images";

const PHONE = "8326481756";
const PHONE_F = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const subServices = [
  { title: "Single Tooth Implants", description: "Replace one missing tooth with a titanium post and custom crown that looks, feels, and functions just like a natural tooth. No impact on surrounding teeth.", icon: <SmilePlus className="w-5 h-5" /> },
  { title: "Implant-Supported Bridges", description: "When multiple adjacent teeth are missing, implant-supported bridges provide a permanent, stable solution without removable appliances.", icon: <Wrench className="w-5 h-5" /> },
  { title: "Implant-Supported Dentures", description: "Snap-in dentures anchored by implants eliminate slipping and discomfort, giving you confidence to eat, speak, and smile freely.", icon: <Crown className="w-5 h-5" /> },
  { title: "Full Mouth Reconstruction", description: "Comprehensive restoration combining implants, crowns, and prosthetics to rebuild your entire smile from the ground up.", icon: <Stethoscope className="w-5 h-5" /> },
];

const processSteps = [
  { number: "01", title: "Consultation & 3D Scan", description: "We take detailed 3D images of your jaw to assess bone density and plan precise implant placement." },
  { number: "02", title: "Implant Placement", description: "Your titanium implant is surgically placed into the jawbone under local anesthesia or sedation for maximum comfort." },
  { number: "03", title: "Healing & Integration", description: "Over 3–6 months, the implant fuses with your jawbone through osseointegration, creating a rock-solid foundation." },
  { number: "04", title: "Custom Crown Delivery", description: "Your permanent, custom-crafted crown is attached to the implant — completing your new smile." },
];

const testimonials = [
  { quote: "Dr. Vuong placed two implants for me and the results are incredible. They look completely natural and I can eat anything again. The whole process was easier than I expected.", name: "Richard M.", source: "Google Review" },
  { quote: "I was missing my front tooth for years and was embarrassed to smile. The implant Smile Avenue gave me changed my life. I smile all the time now!", name: "Sandra L.", source: "Google Review" },
  { quote: "Got All-on-4 implants at Smile Avenue Cypress and couldn't be happier. The team was so supportive throughout the entire journey. Worth every penny.", name: "Tom B.", source: "Google Review" },
];

const faqs = [
  { question: "How much do dental implants cost in Cypress, TX?", answer: "Single dental implants typically range from $3,000–$5,000 including the crown. Full arch solutions like All-on-4 range from $20,000–$30,000 per arch. We offer financing through CareCredit and Sunbit, and our team will provide a detailed estimate after your consultation." },
  { question: "Am I a good candidate for dental implants?", answer: "Most adults with good general health are candidates for implants. Adequate jawbone density is important, but bone grafting can often address deficiencies. We'll evaluate your candidacy with a comprehensive exam and 3D scan." },
  { question: "How long do dental implants last?", answer: "With proper care, dental implants can last a lifetime. The implant post itself is designed to be permanent, while the crown may need replacement after 10–15 years due to normal wear." },
  { question: "Is the dental implant procedure painful?", answer: "Most patients report less discomfort than expected. We use local anesthesia and offer sedation options to ensure you're completely comfortable. Post-procedure soreness is typically managed with over-the-counter pain medication." },
  { question: "Do you offer same-day dental implants?", answer: "In some cases, yes. Immediate-load implants allow us to place the implant and a temporary crown in a single visit. We'll determine if this option is right for you during your consultation." },
];

const relatedServices = [
  { title: "All-on-X Implants", href: "/cypress-tx/all-on-x-implants" },
  { title: "Dental Crowns", href: "/cypress-tx/dental-crowns" },
  { title: "Dental Bridges", href: "/cypress-tx/dental-bridges" },
  { title: "Oral Surgery", href: "/cypress-tx/oral-surgery" },
];

const insuranceLogos = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "MetLife", "United Healthcare", "Guardian", "Humana"];

const heroImg = SERVICE_IMAGES["dental-implants"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DentalService",
  name: "Dental Implants",
  description: "Dental implants in Cypress, TX. Permanent tooth replacement with single implants, All-on-X, and full mouth reconstruction.",
  url: "https://www.smileavenuefamilydentistry.com/cypress-tx/dental-implants/",
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

const DentalImplantsCypress = () => (
  <>
    <Helmet>
      <title>Dental Implants Cypress, TX | Smile Avenue Family Dentistry</title>
      <meta name="description" content="Dental implants in Cypress, TX. Permanent tooth replacement with single implants, All-on-X, and full mouth reconstruction. Call (832) 648-1756." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/dental-implants/" />
      <meta property="og:title" content="Dental Implants Cypress, TX | Smile Avenue Family Dentistry" />
      <meta property="og:description" content="Dental implants in Cypress, TX. Permanent tooth replacement with single implants, All-on-X, and full mouth reconstruction." />
      <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/cypress-tx/dental-implants/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
    <main className="pb-14 lg:pb-0">
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <nav className="mb-6 text-xs font-sans text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link><span className="mx-2">›</span>
            <Link to="/cypress-tx" className="hover:text-primary transition-colors">Cypress, TX</Link><span className="mx-2">›</span>
            <span className="text-foreground">Dental Implants</span>
          </nav>
          <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
            <div>
              <p className="kicker">PERMANENT TOOTH REPLACEMENT IN CYPRESS</p>
              <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">Dental Implants in Cypress, TX</h1>
              <p className="section-body">Missing teeth affect more than your smile — they impact your confidence, your ability to eat comfortably, and your long-term oral health. Dental implants are the gold standard for tooth replacement, offering a permanent solution that looks, feels, and functions like your natural teeth.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book Implant Consultation</a>
                <a href={`tel:${PHONE}`} className="btn-secondary">Call {PHONE_F}</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
              <img
                src={heroImg.url}
                alt={heroImg.alt}
                className="w-full h-full object-cover"
                fetchPriority="high"
                width={640}
                height={480}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl">
          <p className="kicker">UNDERSTANDING DENTAL IMPLANTS</p>
          <h2 className="section-heading">What Are Dental Implants?</h2>
          <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
            <p>A dental implant is a small titanium post that is surgically placed into the jawbone to serve as an artificial tooth root. Once the implant integrates with the bone — a process called osseointegration — a custom-made <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">dental crown</Link> is attached, creating a restoration that is virtually indistinguishable from a natural tooth.</p>
            <p>Unlike <Link to="/cypress-tx/dental-bridges" className="text-primary hover:underline">bridges</Link> or <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link>, implants don't rely on neighboring teeth for support. They stimulate the jawbone just like natural roots, preventing the bone loss that typically follows tooth loss. This makes implants not just a cosmetic solution, but a long-term investment in your oral health.</p>
            <p>At Smile Avenue Cypress, we also offer full-arch solutions like <Link to="/cypress-tx/all-on-x-implants" className="text-primary hover:underline">All-on-4 and All-on-6 implants</Link> for patients missing most or all of their teeth. These advanced techniques can restore an entire arch of teeth with as few as four strategically placed implants. For complex cases, our <Link to="/cypress-tx/oral-surgery" className="text-primary hover:underline">oral surgery</Link> team ensures precise, comfortable placement with <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">sedation options</Link> available.</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-3 gap-6">{[{ icon: <Zap className="w-5 h-5" />, label: "Same-Day Consults" }, { icon: <Shield className="w-5 h-5" />, label: "Advanced 3D Planning" }, { icon: <Users className="w-5 h-5" />, label: "5,000+ Happy Patients" }].map(b => (<div key={b.label} className="flex flex-col items-center text-center gap-2"><div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{b.icon}</div><span className="text-sm font-sans font-semibold text-foreground">{b.label}</span></div>))}</div></div></section>

      <section className="py-12 section-alt"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><p className="kicker">INSURANCE WE ACCEPT</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">{insuranceLogos.map(n => (<div key={n} className="bg-card rounded-xl border border-border py-5 px-4 flex items-center justify-center"><span className="text-sm font-sans font-medium text-muted-foreground">{n}</span></div>))}</div></div></section>

      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <p className="kicker">IMPLANT SOLUTIONS</p>
          <h2 className="section-heading">Implant Treatments We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 text-left max-w-4xl mx-auto">{subServices.map(s => (<div key={s.title} className="bg-card rounded-xl p-6 border border-border"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">{s.icon}</div><h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container mx-auto text-center">
          <p className="kicker">THE IMPLANT PROCESS</p>
          <h2 className="section-heading">What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{processSteps.map(s => (<div key={s.number} className="bg-card rounded-2xl p-6 border border-border text-left"><span className="text-xs font-sans font-bold text-primary tracking-wider">STEP {s.number}</span><h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3><p className="text-sm font-body text-muted-foreground leading-relaxed">{s.description}</p></div>))}</div>
        </div>
      </section>

      <section className="section-padding bg-background"><div className="container mx-auto"><div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start"><div><p className="kicker">FAQ</p><h2 className="section-heading">Dental Implant Questions</h2></div><FaqAccordion items={faqs} /></div></div></section>

      <section className="section-padding section-alt"><div className="container mx-auto text-center"><p className="kicker">PATIENT REVIEWS</p><h2 className="section-heading">What Patients Are Saying</h2><div className="grid md:grid-cols-3 gap-6 mt-10 text-left">{testimonials.map(t => (<TestimonialCard key={t.name} {...t} />))}</div></div></section>

      {/* RELATED SERVICES */}
      <section className="section-padding bg-background">
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

      <section className="section-padding section-alt"><div className="container mx-auto"><div className="max-w-lg mx-auto bg-card rounded-xl p-8 border border-border text-center"><h3 className="font-display text-xl font-bold text-foreground mb-4">Cypress Office</h3><div className="space-y-3 text-sm font-sans text-muted-foreground mb-6"><div className="flex items-start justify-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>9212 Fry Rd #120, Cypress, TX 77433</span></div><div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">{PHONE_F}</a></div><div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /><span>Mon–Fri 8am–5pm | Sat by Appointment</span></div></div><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Book Implant Consultation</a></div></div></section>

      <section className="gradient-cta py-16 text-center"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Start Your Implant Journey Today</h2><p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Schedule a consultation and discover how dental implants can restore your smile permanently.</p><div className="flex flex-wrap justify-center gap-4"><a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Consultation</a><a href={`tel:${PHONE}`} className="btn-cta-outline">Call {PHONE_F}</a></div></div></section>
    </main>
    <Footer /><MobileStickyBar phone={PHONE} phoneFormatted={PHONE_F} bookingUrl={BOOKING} />
  </>
);

export default DentalImplantsCypress;
