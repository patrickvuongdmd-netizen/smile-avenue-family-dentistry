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
    { question: "How much do dental implants cost in Cypress, TX?", answer: "A single implant with crown typically ranges from $3,000–$5,000. All-on-4 full-arch restorations start around $20,000 per arch. We provide a detailed, line-item estimate at your free consultation. CareCredit 0% financing and most major PPO plans accepted." },
    { question: "Am I a good candidate for dental implants?", answer: "Most adults with one or more missing teeth are candidates. You need adequate jawbone density and healthy gums. If bone loss has occurred, bone grafting or sinus lifts can rebuild the foundation. Conditions like uncontrolled diabetes or heavy smoking may require management first — we evaluate everything at your consultation." },
    { question: "How long do dental implants last?", answer: "The titanium implant post is designed to last 20+ years and often a lifetime with proper oral hygiene. The crown on top typically lasts 10–15 years before it may need replacement due to normal wear." },
    { question: "Is the dental implant procedure painful?", answer: "No. Local anesthesia numbs the area completely, and we offer nitrous oxide, oral sedation, and IV sedation for anxious patients. Most people report the procedure itself is painless and that post-op discomfort is milder than expected — comparable to a tooth extraction, managed with over-the-counter ibuprofen." },
    { question: "How long does the entire implant process take?", answer: "The full timeline is typically 3–6 months. Implant placement takes about an hour per implant. The majority of time is healing (osseointegration). You'll wear a temporary restoration during this period so you're never without teeth." },
    { question: "What is the difference between a dental implant and a bridge?", answer: "A bridge requires grinding down healthy adjacent teeth to anchor the replacement. An implant is a standalone post in the jawbone — it doesn't affect neighboring teeth, preserves bone density, and typically lasts much longer than a bridge." },
    { question: "What is All-on-4 / All-on-X?", answer: "All-on-4 is a full-arch solution where four to six implants support an entire set of fixed teeth. It's ideal for patients missing most or all teeth, or those tired of removable dentures. Many patients receive temporary teeth the same day as surgery." },
    { question: "Do dental implants look natural?", answer: "Yes. Our in-house Smile Dental Lab custom-fabricates each crown to match the color, shape, and translucency of your natural teeth. Most people cannot tell the difference between an implant crown and a real tooth." },
    { question: "Does insurance cover dental implants?", answer: "Many PPO dental plans cover a portion of implant treatment — typically $1,000–$2,000 toward the procedure. Medical insurance may also cover implants if tooth loss resulted from an accident or medical condition. We verify your benefits before treatment begins." },
    { question: "What happens if I don't replace a missing tooth?", answer: "Adjacent teeth shift into the gap, your bite changes, and the jawbone where the tooth was begins to deteriorate. This can lead to further tooth loss, TMJ issues, and facial structure changes over time. Early replacement prevents these complications." },
    { question: "Can I get implants if I currently wear dentures?", answer: "Absolutely. Many denture wearers upgrade to implant-supported dentures or All-on-4 for a permanent, non-removable solution. Implants eliminate the slipping, adhesives, and dietary restrictions associated with traditional dentures." },
    { question: "How do I care for dental implants?", answer: "Brush twice daily, floss around the implant, and keep regular cleaning appointments. Implants can't get cavities, but the surrounding gum tissue still needs care to prevent peri-implantitis. With good hygiene, implants require no special maintenance." },
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
