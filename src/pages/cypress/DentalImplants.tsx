import { Link } from "react-router-dom";
import { Shield, Zap, Users, Star, FlaskConical, ScanLine, Heart, Building2 } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Dental Implants",
  serviceSlug: "dental-implants",
  metaTitle: "Dental Implants Cypress, TX | Permanent Tooth Replacement | Smile Avenue",
  metaDescription: "Dental implants in Cypress, TX — single teeth, bridges & All-on-4. 3D-guided placement, in-house lab, sedation options. 0% financing. Call (832) 648-1756.",
  heroKicker: "PERMANENT TOOTH REPLACEMENT IN CYPRESS",
  heroHeading: "Dental Implants in Cypress, TX",
  heroBody: "Missing teeth affect more than your smile — they impact your confidence, your ability to eat comfortably, and your long-term oral health. At Smile Avenue Family Dentistry in Cypress, Dr. Patrick Vuong and our team provide permanent dental implant solutions using advanced digital planning and our in-house Smile Dental Lab for precise, custom restorations.",
  heroCta1: "Book Implant Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Dental Implants",
  introKicker: "UNDERSTANDING DENTAL IMPLANTS",
  introHeading: "What Are Dental Implants?",
  introParas: [
    "A dental implant is a small titanium post surgically placed into the jawbone, where it fuses naturally with bone through osseointegration. Once healed, it serves as a permanent foundation for a custom crown, bridge, or full arch of teeth.",
    <>Unlike <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link> or <Link to="/cypress-tx/dental-bridges" className="text-primary hover:underline">bridges</Link>, implants replicate natural tooth roots, prevent bone loss, preserve facial structure, and allow you to eat, speak, and smile with complete confidence.</>,
    <>For families throughout Bridgeland, Towne Lake, and greater Cypress, Smile Avenue is the trusted choice for implant dentistry. We also offer full-arch solutions like <Link to="/cypress-tx/all-on-x-implants" className="text-primary hover:underline">All-on-4 and All-on-6 implants</Link> for patients missing most or all of their teeth, with <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">sedation options</Link> for complete comfort.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "3D Guided Surgery" },
    { icon: <Users className="w-5 h-5" />, label: "1,000+ Implants Placed" },
  ],
  subServicesKicker: "WHY SMILE AVENUE",
  subServicesHeading: "Why Choose Us for Dental Implants",
  subServicesBody: "Advanced technology and in-house precision for predictable, lasting results.",
  subServices: [
    { title: "In-House Smile Dental Lab", description: "Precise fit and faster turnaround on custom implant restorations — no outsourcing delays.", icon: <Building2 className="w-5 h-5" /> },
    { title: "3D CBCT & Digital Scanners", description: "Medit digital scanners and 3D CBCT imaging for surgical precision — no goopy impressions.", icon: <ScanLine className="w-5 h-5" /> },
    { title: "Sedation Options", description: "Complete comfort during your procedure with multiple sedation options available.", icon: <Heart className="w-5 h-5" /> },
    { title: "All Treatment Under One Roof", description: "No referrals to outside specialists — implant placement and restoration done right here.", icon: <FlaskConical className="w-5 h-5" /> },
  ],
  processKicker: "THE IMPLANT PROCESS",
  processHeading: "What to Expect",
  processBody: "A straightforward process from consultation to your permanent new tooth.",
  processSteps: [
    { number: "01", title: "Comprehensive Consultation", description: "3D CBCT scan and digital impressions to assess bone density and plan precise implant placement.", icon: <ScanLine className="w-5 h-5" /> },
    { number: "02", title: "Implant Placement Surgery", description: "Digitally guided implant placement into the jawbone under local anesthesia or sedation for maximum comfort.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Healing Period", description: "3–6 months of osseointegration while wearing a temporary restoration so you're never without teeth.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Final Crown Delivery", description: "Your permanent crown is designed and fabricated in our in-house Smile Dental Lab for a perfect fit.", icon: <FlaskConical className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Implant Questions",
  faqs: [
    { question: "How much do dental implants cost in Cypress, TX?", answer: "Costs vary based on your specific needs — we provide detailed estimates at your consultation. Financing is available through CareCredit and our Smile Avenue Membership Plan." },
    { question: "Am I a good candidate for dental implants?", answer: "Most adults with missing teeth qualify. You need adequate jawbone density and healthy gums. Bone grafting can restore structure if needed." },
    { question: "How long do dental implants last?", answer: "20+ years with proper care, and many last a lifetime." },
    { question: "Is the dental implant procedure painful?", answer: "Most patients are comfortable with local anesthesia and sedation options. Post-procedure discomfort is mild and managed with over-the-counter medication." },
    { question: "How long does the entire process take?", answer: "3–6 months total, mostly healing time. A temporary restoration is provided so you're never without teeth." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Dr. Vuong placed two implants for me and the results are incredible. They look completely natural and I can eat anything again. The whole process was easier than I expected.", name: "Richard M.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "I was missing my front tooth for years and was embarrassed to smile. The implant Smile Avenue gave me changed my life. I smile all the time now!", name: "Sandra L.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "Got All-on-4 implants at Smile Avenue Cypress and couldn't be happier. The team was so supportive throughout the entire journey. Worth every penny.", name: "Tom B.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "Start Your Implant Journey Today",
  ctaBody: "Schedule a consultation and discover how dental implants can restore your smile permanently.",
};

const DentalImplantsCypress = () => <ServicePageTemplate data={data} />;
export default DentalImplantsCypress;
