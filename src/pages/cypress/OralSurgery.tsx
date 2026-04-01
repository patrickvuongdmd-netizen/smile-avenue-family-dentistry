import { Link } from "react-router-dom";
import { Shield, Star, Users, Stethoscope, Scan, Layers, Wrench } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Oral Surgery",
  serviceSlug: "oral-surgery",
  metaTitle: "Oral Surgery Cypress, TX | Wisdom Teeth & Bone Grafting | Smile Avenue",
  metaDescription: "Oral surgery in Cypress, TX — wisdom teeth removal, bone grafting & surgical extractions. IV sedation for comfort. Same-day available. Call (832) 648-1756.",
  heroKicker: "ORAL SURGERY IN CYPRESS",
  heroHeading: "Oral Surgery in Cypress, TX",
  heroBody: "Not all dental procedures can be handled with a filling or crown. At Smile Avenue Cypress, we provide in-office oral surgery including wisdom teeth removal, bone grafting, and surgical extractions — all with IV sedation for your comfort.",
  heroCta1: "Book Surgical Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Oral Surgery",
  introKicker: "IN-OFFICE SURGICAL CARE",
  introHeading: "Oral Surgery Services",
  introParas: [
    <>Our oral surgery services include wisdom teeth removal, bone grafting for <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">implant preparation</Link>, sinus lifts, surgical <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">extractions</Link>, and soft tissue procedures. All procedures are performed in-office with <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">IV sedation</Link> available — no hospital visits needed.</>,
    <>Our 3D CBCT imaging technology provides detailed visualization of your anatomy for precise surgical planning. Whether you need wisdom teeth removed, bone augmentation for future implants, or complex extractions, our experienced team handles everything under one roof. For patients considering <Link to="/cypress-tx/all-on-x-implants" className="text-primary hover:underline">All-on-X full-arch implants</Link>, we perform all necessary preparatory surgery in-house.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "IV Sedation" },
    { icon: <Users className="w-5 h-5" />, label: "3D CBCT Planning" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Surgery",
  subServicesBody: "IV sedation, 3D imaging, and comprehensive in-office care.",
  subServices: [
    { title: "IV Sedation Available", description: "Complete comfort throughout your procedure with IV sedation — you'll be deeply relaxed and have little to no memory of the surgery.", icon: <Shield className="w-5 h-5" /> },
    { title: "3D CBCT Imaging", description: "Advanced 3D cone beam CT scanning provides detailed surgical planning for precise, predictable outcomes.", icon: <Scan className="w-5 h-5" /> },
    { title: "All Procedures In-Office", description: "No hospital visits needed. All oral surgery procedures are performed comfortably in our modern Cypress office.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Comprehensive Care Under One Roof", description: "From surgical extractions to bone grafting to implant placement — everything handled by our experienced team.", icon: <Layers className="w-5 h-5" /> },
  ],
  processKicker: "THE SURGICAL PROCESS",
  processHeading: "What to Expect",
  processBody: "A carefully planned process for safe, comfortable surgery.",
  processSteps: [
    { number: "01", title: "Consultation with 3D Imaging", description: "3D CBCT scan and detailed examination to plan your surgical procedure with precision and predictability.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Surgical Planning", description: "Your custom surgical plan is developed based on imaging, ensuring the safest and most effective approach.", icon: <Stethoscope className="w-5 h-5" /> },
    { number: "03", title: "Procedure Under Sedation", description: "Your surgery is performed using advanced techniques with IV sedation for complete comfort.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Follow-Up & Healing Monitoring", description: "Scheduled follow-up visits monitor your healing progress and address any concerns.", icon: <Wrench className="w-5 h-5" /> },
  ],
  faqHeading: "Oral Surgery Questions",
  faqs: [
    { question: "How much does oral surgery cost?", answer: "Costs depend on the procedure — wisdom teeth removal, bone grafting, sinus lifts, and surgical extractions all vary. Insurance may cover medically necessary procedures. CareCredit financing available." },
    { question: "Is IV sedation available?", answer: "Yes — IV sedation provides deep relaxation throughout your procedure. You'll be comfortable and have little to no memory of the surgery. Our team carefully monitors you throughout." },
    { question: "How long is recovery?", answer: "Recovery varies by procedure — typically 3-10 days for most oral surgery procedures. Complete bone healing for grafting and sinus lifts may take several months. We provide detailed aftercare instructions." },
    { question: "What is bone grafting?", answer: "Bone grafting restores jawbone density lost after tooth extraction or from periodontal disease. It creates a strong foundation for dental implant placement. Grafting material integrates with your natural bone over several months." },
    { question: "At what age should wisdom teeth be removed?", answer: "Typically late teens to early 20s, but wisdom teeth can be removed at any age if they're causing problems — pain, infection, crowding, or damage to adjacent teeth." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Had bone grafting done in preparation for implants. The procedure was much easier than I expected. Everything was explained clearly and the recovery was smooth.", name: "Robert H.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "All four wisdom teeth removed under IV sedation. I fell asleep and woke up with it all done. Zero pain during the procedure and minimal swelling after.", name: "Stephanie K.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "Needed a sinus lift before getting implants. The team walked me through every step and the whole process went perfectly. Very grateful for their expertise.", name: "William C.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "Expert Oral Surgery, Right Here in Cypress",
  ctaBody: "Schedule your surgical consultation today. IV sedation, 3D planning, and experienced care.",
};

const OralSurgeryCypress = () => <ServicePageTemplate data={data} />;
export default OralSurgeryCypress;
