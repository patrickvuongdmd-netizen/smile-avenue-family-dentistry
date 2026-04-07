import { Link } from "react-router-dom";
import { Shield, Star, Users, Stethoscope, Scan, Layers, Wrench } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Oral Surgery",
  serviceSlug: "oral-surgery",
  videoId: "1nicifZjXoA",
  metaTitle: "Oral Surgery Cypress, TX | Wisdom Teeth & Bone Grafting | Smile Avenue",
  metaDescription: "Oral surgery in Cypress, TX — wisdom teeth removal, bone grafting & surgical extractions. IV sedation for comfort. Same-day available. Call (832) 648-1756.",
  heroKicker: "ORAL SURGERY IN CYPRESS",
  heroHeading: "Oral Surgery in Cypress, TX",
  heroBody: "Not all dental procedures can be handled with a filling or crown. At Smile Avenue Cypress, we provide in-office oral surgery including wisdom teeth removal, bone grafting, and surgical extractions — all with IV sedation for your comfort.",
  heroCta1: "Book Surgical Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Oral Surgery",
  heroValueProps: ["In-office surgery — no hospital visit needed", "IV sedation for complete comfort", "3D CBCT imaging for precise planning", "Wisdom teeth, bone grafting & more", "Most insurance accepted · 0% financing"],
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
    { question: "How long is recovery after oral surgery?", answer: "Recovery time varies by procedure. Simple extractions typically heal in 3-5 days. More complex procedures like bone grafting or impacted wisdom teeth may take 1-2 weeks. We provide detailed post-operative instructions for optimal healing." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Had bone grafting done in preparation for implants. The procedure was much easier than I expected. Everything was explained clearly and the recovery was smooth.", name: "Robert H.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "All four wisdom teeth removed under IV sedation. I fell asleep and woke up with it all done. Zero pain during the procedure and minimal swelling after.", name: "Stephanie K.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "Needed a sinus lift before getting implants. The team walked me through every step and the whole process went perfectly. Very grateful for their expertise.", name: "William C.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  locationFaqs: [
    { question: "Where can I get oral surgery in Cypress, TX?", answer: "Smile Avenue Family Dentistry at 9212 Fry Rd #120, Cypress, TX 77433 performs all oral surgery procedures in-office — wisdom teeth removal, bone grafting, sinus lifts, and surgical extractions — with IV sedation available." },
    { question: "How much does oral surgery cost in Cypress?", answer: "Costs vary by procedure complexity. Insurance typically covers medically necessary procedures like wisdom teeth removal. We offer 0% financing through CareCredit and Sunbit for any out-of-pocket costs." },
    { question: "Do you offer IV sedation for oral surgery in Cypress?", answer: "Yes. We offer nitrous oxide, oral sedation, and IV sedation for oral surgery procedures. Our team monitors your vital signs continuously for maximum safety and comfort throughout the procedure." },
    { question: "Do I need a referral for oral surgery at Smile Avenue Cypress?", answer: "No referral is needed. We perform all oral surgery procedures in-house, including wisdom teeth removal, bone grafting, sinus lifts, and complex surgical extractions. Call (832) 648-1756 to schedule a consultation." },
    { question: "How long is recovery after oral surgery in Cypress?", answer: "Recovery varies by procedure — typically 3-5 days for simple extractions and 7-14 days for more complex procedures like bone grafting or impacted wisdom teeth. We provide detailed post-operative instructions for optimal healing." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Fry Road provides comprehensive oral surgery services right here in Cypress — no hospital visits, no outside specialist referrals. From wisdom teeth removal and bone grafting to sinus lifts and complex surgical extractions, everything is performed in our modern office with IV sedation for complete comfort.",
    "Our 3D CBCT imaging technology gives our surgical team a detailed, three-dimensional view of your jaw anatomy — including nerve pathways, sinus cavities, and bone density. This precision planning leads to safer, more predictable surgical outcomes and faster healing times.",
    "Patients from Bridgeland, Towne Lake, Fairfield, Cy-Fair, and Spring choose Smile Avenue for oral surgery because we combine advanced surgical capability with a gentle, reassuring approach. IV sedation ensures you're deeply relaxed throughout — most patients have little to no memory of the procedure.",
    "For patients needing bone grafting in preparation for dental implants, our in-house approach streamlines the entire journey from extraction to grafting to final implant placement. Most PPO insurance plans cover medically necessary oral surgery, and we offer 0% financing for any remaining balance.",
  ],
  ctaHeading: "Expert Oral Surgery, Right Here in Cypress",
  ctaBody: "Schedule your surgical consultation today. IV sedation, 3D planning, and experienced care.",
};

const OralSurgeryCypress = () => <ServicePageTemplate data={data} />;
export default OralSurgeryCypress;
