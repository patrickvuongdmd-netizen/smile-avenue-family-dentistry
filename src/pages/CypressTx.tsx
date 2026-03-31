import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { MapPin, Phone, Clock, Check, Shield, Sparkles, Zap, SmilePlus, AlertCircle, Pill, Star, Building, GraduationCap, TreePine } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import DoctorCard from "@/components/DoctorCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import BookingLocationModal from "@/components/BookingLocationModal";
import InsuranceLogoBar from "@/components/InsuranceLogoBar";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { OFFICE_IMAGES } from "@/lib/images";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";
const CYPRESS_MAPS = "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Founder with a focus on comprehensive family and implant dentistry.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", bio: "Trusted for his gentle approach and commitment to patient comfort.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Known for his integrity, precision, and passion for restorative care.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Passionate about cosmetic and family dentistry at both locations.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  { name: "Dr. Shayan Alkhiro", credentials: "DDS", bio: "Dedicated to gentle, high-quality dental care with a calm demeanor.", href: "/doctors/shayan-alkhiro-dds", imgKey: "shayan-alkhiro" },
];

const services = [
  { title: "Preventive Dentistry", description: "Cleanings, exams, and proactive care to keep your smile healthy.", href: "/cypress-tx/preventive-dentistry", icon: <Shield className="w-5 h-5" /> },
  { title: "Cosmetic Dentistry", description: "Veneers, whitening, and smile design for a confident new look.", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Dental Implants", description: "Permanent tooth replacement that looks and functions like natural teeth.", href: "/cypress-tx/dental-implants", icon: <SmilePlus className="w-5 h-5" /> },
  { title: "Invisalign®", description: "Clear aligners for a straighter smile without traditional braces.", href: "/cypress-tx/invisalign", icon: <Zap className="w-5 h-5" /> },
  { title: "Emergency Dentistry", description: "Same-day urgent care when you need it most.", href: "/cypress-tx/emergency-dentist", icon: <AlertCircle className="w-5 h-5" /> },
  { title: "Sedation Dentistry", description: "Relaxed, anxiety-free dental care for nervous patients.", href: "/cypress-tx/sedation-dentistry", icon: <Pill className="w-5 h-5" /> },
];

const testimonials = [
  { quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time. Everyone in here is just very nice and friendly.", name: "Thao H.", source: "Google Review" },
  { quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home. I was offered a cozy blanket and my choice of Netflix! AMAZING!", name: "Kashayn P.", source: "Google Review" },
  { quote: "I absolutely love coming to Smile Dentistry! The employees are nice, friendly, and care for the patients. I'm pleased once again with my visit to Smile Dentistry.", name: "Shon M.", source: "Google Review" },
];

const faqs = [
  { question: "Where exactly is Smile Avenue Cypress located?", answer: "We're at 9212 Fry Rd #120, Cypress, TX 77433 — directly across from the HEB on Fry Road, just south of the Fry Road and Jones Road intersection. We're minutes from Bridgeland, Towne Lake, Fairfield, and Cy-Fair." },
  { question: "What insurance plans do you accept at the Cypress location?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana. Our team will verify your benefits before your visit — no surprise bills." },
  { question: "Do you offer same-day emergency dental appointments in Cypress?", answer: "Yes. If you're experiencing a dental emergency — toothache, broken tooth, knocked-out tooth, or swelling — call us at (832) 648-1756 and we'll do our best to see you the same day. We keep emergency slots available daily." },
  { question: "What are the office hours for the Cypress dental office?", answer: "We're open Monday through Friday, 8am to 5pm, with Saturday appointments available by request. We also offer early morning availability for patients who need to get in before work or school." },
  { question: "Is Smile Avenue a good dentist for kids in Cypress?", answer: "Absolutely. We treat patients of all ages — from first-tooth toddlers to grandparents. Our CFISD families love our gentle approach to pediatric dentistry, plus our kid-friendly amenities like Netflix and cozy blankets make every visit fun." },
  { question: "Do you offer dental implants at the Cypress office?", answer: "Yes. Our Cypress office offers full-service dental implant treatment, including single implants, implant bridges, and All-on-X full-arch restorations. With our in-house dental lab, we can fabricate your custom restoration faster than practices that outsource." },
  { question: "What's different about Smile Avenue compared to other Cypress dentists?", answer: "We combine modern technology (digital scanners, 3D imaging, in-house dental lab) with a hospitality-first experience. Every room has Netflix, we offer warm blankets and noise-canceling headphones, and our doctors spend real time listening to your concerns before recommending treatment." },
];

const CypressTx = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  useDocTitle("Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue");

  return (
    <>
      <Helmet>
        <title>Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue</title>
        <meta name="description" content="Looking for a dentist in Cypress, TX? Smile Avenue on Fry Road — 4.9★ from 300+ reviews, same-day appointments, in-house dental lab. Implants, Invisalign, emergency care. Serving Bridgeland, Towne Lake, Fairfield & Cy-Fair. Call (832) 648-1756." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/cypress-tx/" />
        <meta property="og:title" content="Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue" />
        <meta property="og:description" content="Top-rated family & cosmetic dentist in Cypress, TX on Fry Road. 4.9★ from 300+ reviews. Same-day appointments. In-house dental lab. Serving Bridgeland, Towne Lake, Fairfield & Cy-Fair." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/cypress-tx/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content={OFFICE_IMAGES.cypressHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue" />
        <meta name="twitter:description" content="4.9★ family dentist in Cypress, TX on Fry Road. Same-day appointments, dental implants, Invisalign. In-house lab. Call (832) 648-1756." />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-xs font-sans text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Dentist in Cypress, TX</span>
            </nav>

            <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">DENTIST IN CYPRESS, TX · FRY ROAD · NEAR HEB</p>
                <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
                  Your Family Dentist on Fry Road in Cypress, TX
                </h1>
                <p className="section-body">
                  Smile Avenue on Fry Road is the Cypress dentist families actually look forward to visiting. From <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">routine cleanings</Link> and <Link to="/cypress-tx/pediatric-dentistry" className="text-primary hover:underline">pediatric checkups</Link> to <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, <Link to="/cypress-tx/invisalign" className="text-primary hover:underline">Invisalign</Link>, and <Link to="/cypress-tx/emergency-dentist" className="text-primary hover:underline">same-day emergency visits</Link> — we handle it all under one roof with our in-house dental lab. Proudly serving Bridgeland, Towne Lake, Fairfield, Cy-Fair, and CFISD families.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <button onClick={() => setBookingModalOpen(true)} className="btn-primary">
                    Book at Cypress — Takes 60 Seconds
                  </button>
                  <a href={`tel:${CYPRESS_PHONE}`} className="btn-secondary">
                    Call {CYPRESS_PHONE_FORMATTED}
                  </a>
                </div>
                <p className="text-xs font-sans text-muted-foreground mb-2">
                  ✓ We confirm within 1 hour · ✓ Same-day appointments · ✓ 0% financing available
                </p>
                <div className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
                  <span className="font-semibold text-foreground">4.9</span>
                  <span>from 300+ verified Cypress reviews</span>
                </div>
              </div>
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.cypressHero} alt="Smile Avenue Cypress dental office exterior on Fry Road, Cypress TX 77433" className="w-full h-full object-cover" fetchPriority="high" width={800} height={600} />
              </div>
            </div>
          </div>
        </section>

        {/* OFFICE INFO BAR */}
        <section className="section-alt py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div className="text-sm font-sans">
                  <span className="text-foreground">9212 Fry Rd #120, Cypress, TX 77433</span>
                  <a href={CYPRESS_MAPS} target="_blank" rel="noopener noreferrer" className="block text-primary text-xs font-medium mt-0.5 hover:underline">
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${CYPRESS_PHONE}`} className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">
                  {CYPRESS_PHONE_FORMATTED}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-sans text-foreground">Mon–Fri 8am–5pm | Sat by Appointment</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT OUR CYPRESS LOCATION — unique geo content */}
        <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">ABOUT OUR CYPRESS DENTAL OFFICE</p>
              <h2 className="section-heading">Why Cypress, TX Families Choose Smile Avenue on Fry Road</h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                <p>
                  Cypress, Texas has grown into one of the most sought-after family communities in the greater Houston area — and Smile Avenue has grown with it. Located at 9212 Fry Rd #120, directly across from the HEB on Fry Road and just south of the Jones Road intersection, our Cypress office is central to the neighborhoods that define Northwest Harris County.
                </p>
                <p>
                  We serve families throughout the Fry Road corridor including <Link to="/cypress-tx/bridgeland-dentist" className="text-primary hover:underline">Bridgeland</Link>, <Link to="/cypress-tx/towne-lake-dentist" className="text-primary hover:underline">Towne Lake</Link>, <Link to="/cypress-tx/fairfield-dentist" className="text-primary hover:underline">Fairfield</Link>, <Link to="/cypress-tx/cyfair-dentist" className="text-primary hover:underline">Cy-Fair</Link>, <Link to="/cypress-tx/jersey-village-dentist" className="text-primary hover:underline">Jersey Village</Link>, and the Spring Cypress communities. Whether your kids attend CFISD schools or you commute along US-290, our central Fry Road location puts quality dental care within a 10-minute drive of most Cypress neighborhoods.
                </p>
                <p>
                  What sets us apart from other dentists in Cypress? Our <Link to="/dental-lab" className="text-primary hover:underline">in-house dental lab</Link> means we fabricate <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">crowns</Link>, <Link to="/cypress-tx/veneers" className="text-primary hover:underline">veneers</Link>, and clear aligners on-site — delivering faster turnaround and more precise results than practices that outsource. Combine that with Netflix in every treatment room, warm blankets, noise-canceling headphones, and a team of five experienced dentists, and you get a dental experience that 300+ five-star Google reviewers describe as "the best dentist I've ever been to."
                </p>
              </div>
              {/* Local landmark badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="flex flex-col items-center text-center gap-2 p-4 bg-card rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-foreground">Across from HEB on Fry Rd</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4 bg-card rounded-xl border border-border">
                  <Building className="w-5 h-5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-foreground">Near Berry Center & Cypress Creek</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4 bg-card rounded-xl border border-border">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-foreground">Serving CFISD Families</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2 p-4 bg-card rounded-xl border border-border">
                  <TreePine className="w-5 h-5 text-primary" />
                  <span className="text-xs font-sans font-semibold text-foreground">10 Min from Towne Lake & Bridgeland</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        {/* MEET OUR DOCTORS */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">YOUR CYPRESS DENTAL TEAM</p>
            <h2 className="section-heading">5 Experienced Dentists at Our Cypress Office</h2>
            <p className="section-body max-w-2xl mx-auto">
              Our Cypress team brings decades of combined experience in family, cosmetic, and implant dentistry. Every doctor takes time to listen and build a treatment plan around your goals — never a billing code.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">COMPREHENSIVE DENTAL CARE IN CYPRESS</p>
            <h2 className="section-heading">Dental Services for Your Entire Family</h2>
            <p className="section-body max-w-2xl mx-auto">
              From preventive care to advanced cosmetic treatments, Smile Avenue Cypress offers complete dental solutions for your whole family.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-left">
              {services.map((svc) => (
                <ServiceCard key={svc.title} {...svc} />
              ))}
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              Explore All Cypress Services →
            </Link>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">WHAT CYPRESS FAMILIES ARE SAYING</p>
            <h2 className="section-heading">Real Reviews from Cypress Patients</h2>
            <div className="inline-flex items-center gap-2 mb-10 text-sm font-sans font-semibold text-foreground bg-muted px-4 py-2 rounded-full">
              ⭐ 4.9 RATING · 300+ GOOGLE REVIEWS
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
            <Link to="/patient-testimonials" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              Read More Cypress Reviews →
            </Link>
          </div>
        </section>

        {/* SMILE GALLERY */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">CYPRESS SMILE TRANSFORMATIONS</p>
            <h2 className="section-heading">Real Results from Our Cypress Patients</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <BeforeAfterCard label="Porcelain Veneers" />
              <BeforeAfterCard label="Dental Implants" />
              <BeforeAfterCard label="Invisalign® Treatment" />
            </div>
            <Link to="/smile-gallery" className="inline-flex items-center gap-2 mt-10 text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
              View Full Cypress Gallery →
            </Link>
          </div>
        </section>

        {/* WHY CHOOSE CYPRESS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.waitingRoom} alt="Smile Avenue Cypress waiting room interior" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
              </div>
              <div>
                <p className="kicker">WHY FAMILIES CHOOSE SMILE AVENUE CYPRESS</p>
                <h2 className="section-heading">Your Neighborhood Dentist in Cypress, TX</h2>
                <p className="section-body">
                  Conveniently located on Fry Road, Smile Avenue Cypress serves families across Cypress, Bridgeland, Fairfield, Towne Lake, and the surrounding communities. Our modern office was designed with your comfort in mind.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Conveniently located at 9212 Fry Rd, near HEB",
                    "Same-day emergency appointments available",
                    "Cozy blankets, Netflix, and noise-canceling headphones",
                    "Digital impressions — no goopy molds",
                    "Serving Cypress, Bridgeland, Fairfield & Towne Lake",
                    "Most major insurance plans accepted",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-sans text-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setBookingModalOpen(true)} className="btn-primary">
                  Book at Cypress
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* INSURANCE & PAYMENT */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">FLEXIBLE PAYMENT OPTIONS</p>
            <h2 className="section-heading">Making Dental Care Affordable</h2>
            <p className="section-body max-w-2xl mx-auto">
              At our Cypress office, we believe great dental care should be accessible. We offer multiple ways to make your treatment affordable.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Most Insurance Accepted</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">We accept most major PPO plans and will verify your benefits before your visit.</p>
                <Link to="/insurance" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Verify Your Coverage →</Link>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Smile Avenue Membership Plan</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">No insurance? Our in-house plan covers cleanings, exams, and gives you discounts on treatment.</p>
                <Link to="/membership-plan" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Join the Membership →</Link>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">Dental Financing</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">Flexible monthly payment options through CareCredit and Sunbit — apply in minutes.</p>
                <Link to="/insurance" className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">Explore Financing →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading">Cypress Dental FAQs</h2>
                <p className="section-body">Have more questions about our Cypress office? Call <a href={`tel:${CYPRESS_PHONE}`} className="text-primary hover:underline">{CYPRESS_PHONE_FORMATTED}</a>.</p>
              </div>
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS WE SERVE */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">NEARBY COMMUNITIES</p>
            <h2 className="section-heading">Neighborhoods We Serve in Cypress</h2>
            <p className="section-body max-w-2xl mx-auto">Smile Avenue Cypress proudly serves families across these communities. Click to learn more about dental care near you.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
              {[
                { label: "Bridgeland Dentist", href: "/cypress-tx/bridgeland-dentist" },
                { label: "Towne Lake Dentist", href: "/cypress-tx/towne-lake-dentist" },
                { label: "Fairfield Dentist", href: "/cypress-tx/fairfield-dentist" },
                { label: "Cy-Fair Dentist", href: "/cypress-tx/cyfair-dentist" },
                { label: "Jersey Village Dentist", href: "/cypress-tx/jersey-village-dentist" },
              ].map((n) => (
                <Link key={n.href} to={n.href} className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm font-sans font-semibold text-foreground hover:text-primary">
                  {n.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CROSS-LINK KATY */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Also Serving Katy, TX</h3>
            <p className="text-sm font-body text-muted-foreground mb-6">Smile Avenue also has a location in Katy for your convenience.</p>
            <div className="inline-block bg-card rounded-xl p-6 border border-border text-left max-w-md">
              <div className="flex items-start gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-sans text-foreground">23541 Westheimer Pkwy Ste #170, Katy, TX 77494</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:2818005008" className="text-sm font-sans text-foreground hover:text-primary transition-colors">(281) 800-5008</a>
              </div>
              <Link to="/katy-tx" className="text-sm font-sans font-semibold text-primary hover:text-primary-dark transition-colors">
                Visit Katy Page →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="gradient-cta py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Book Your Cypress Dental Appointment Today
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join 300+ families who rate us 4.9 stars. Same-day appointments available at our Fry Road office.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => setBookingModalOpen(true)} className="btn-cta-light">
                Book Online — Takes 60 Seconds
              </button>
              <a href={`tel:${CYPRESS_PHONE}`} className="btn-cta-outline">
                Call {CYPRESS_PHONE_FORMATTED}
              </a>
            </div>
            <p className="text-xs font-sans text-primary-foreground/60 mt-4">Most insurance accepted · 0% financing · No obligation</p>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <BackToTop />
      <BookingLocationModal open={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />

      {/* LocalBusiness + Dentist Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Dentist"],
            name: "Smile Avenue Family Dentistry - Cypress",
            image: OFFICE_IMAGES.cypressHero,
            telephone: "+1-832-648-1756",
            address: {
              "@type": "PostalAddress",
              streetAddress: "9212 Fry Rd #120",
              addressLocality: "Cypress",
              addressRegion: "TX",
              postalCode: "77433",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 29.9691,
              longitude: -95.6977,
            },
            url: "https://www.smileavenuefamilydentistry.com/cypress-tx/",
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "300",
            },
            areaServed: [
              { "@type": "City", name: "Cypress, TX" },
              { "@type": "Place", name: "Bridgeland" },
              { "@type": "Place", name: "Towne Lake" },
              { "@type": "Place", name: "Fairfield" },
              { "@type": "Place", name: "Cy-Fair" },
              { "@type": "Place", name: "Jersey Village" },
            ],
            priceRange: "$$",
            hasMap: "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
              { "@type": "ListItem", position: 2, name: "Dentist in Cypress, TX", item: "https://www.smileavenuefamilydentistry.com/cypress-tx/" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(f => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
    </>
  );
};

export default CypressTx;
