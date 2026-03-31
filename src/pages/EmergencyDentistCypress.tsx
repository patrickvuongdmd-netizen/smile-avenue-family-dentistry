import { Link } from "react-router-dom";
import { Shield, Zap, Star, Users, Scan, Stethoscope, Syringe, PhoneCall } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Emergency Dentist",
  serviceSlug: "emergency-dentist",
  metaTitle: "Emergency Dentist Cypress, TX | Same-Day Urgent Care | Smile Avenue",
  metaDescription: "Dental emergency in Cypress? Same-day appointments for toothaches, broken teeth and more. Sedation available. Call (832) 648-1756 now.",
  heroKicker: "SAME-DAY EMERGENCY CARE IN CYPRESS",
  heroHeading: "Emergency Dentist in Cypress, TX",
  heroBody: "Dental emergencies do not wait for a convenient time — and neither should your care. At Smile Avenue in Cypress, we offer same-day emergency appointments for severe toothaches, broken teeth, knocked-out teeth, lost restorations, and other urgent dental needs. Call (832) 648-1756 for immediate assistance.",
  heroCta1: "Book Emergency Appointment",
  heroCta2: "Call (832) 648-1756 Now",
  heroImage: "Emergency Dentist",
  introKicker: "UNDERSTANDING DENTAL EMERGENCIES",
  introHeading: "What Is a Dental Emergency?",
  introParas: [
    "A dental emergency is any situation involving sudden pain, trauma, or a condition requiring immediate attention. Common emergencies include severe toothaches, cracked, chipped, or broken teeth, knocked-out teeth, lost fillings or crowns, dental abscesses, uncontrolled bleeding, and broken dentures.",
    <>Families in Cy-Fair, Spring Cypress, and the Fry Road corridor trust Smile Avenue for fast, compassionate emergency care. Whether you need a <Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canal</Link>, an emergency <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">tooth extraction</Link>, or a <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">custom crown</Link> to restore a broken tooth, we handle it all under one roof with no referrals to outside specialists.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Zap className="w-5 h-5" />, label: "Same-Day Appointments" },
    { icon: <Users className="w-5 h-5" />, label: "All Treatment In-House" },
  ],
  subServicesKicker: "WHY SMILE AVENUE",
  subServicesHeading: "Why Choose Us for Emergency Care",
  subServicesBody: "Same-day appointments, sedation options, and comprehensive in-house care.",
  subServices: [
    { title: "Same-Day Emergency Appointments", description: "We reserve time daily for urgent cases so you're never left waiting in pain.", icon: <Zap className="w-5 h-5" /> },
    { title: "Sedation for Anxious Patients", description: "Dental emergencies are stressful. We offer sedation options to keep you calm and comfortable during treatment.", icon: <Shield className="w-5 h-5" /> },
    { title: "Advanced Digital X-Rays & 3D CBCT", description: "Quick, accurate diagnosis with digital radiography and 3D cone beam imaging — no guesswork.", icon: <Scan className="w-5 h-5" /> },
    { title: "Comprehensive In-House Care", description: "From root canals to extractions to custom crowns, we handle everything under one roof — no referrals needed.", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  processKicker: "YOUR EMERGENCY VISIT",
  processHeading: "What to Expect",
  processBody: "Fast, compassionate care when you need it most.",
  processSteps: [
    { number: "01", title: "Call (832) 648-1756 Immediately", description: "Our team will assess your situation over the phone, give you at-home care instructions, and schedule you as soon as possible — often the same day.", icon: <PhoneCall className="w-5 h-5" /> },
    { number: "02", title: "Digital X-Rays & 3D Scan", description: "When you arrive, we prioritize pain management first, then take digital X-rays or a 3D CBCT scan for a complete, accurate diagnosis.", icon: <Scan className="w-5 h-5" /> },
    { number: "03", title: "Immediate Treatment", description: "Based on diagnosis, we begin treatment right away — whether it's a filling, crown, root canal, extraction, or stabilization.", icon: <Syringe className="w-5 h-5" /> },
    { number: "04", title: "Aftercare & Follow-Up", description: "We provide detailed aftercare instructions and schedule any necessary follow-up appointments to ensure complete healing.", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  faqHeading: "Emergency Dentistry FAQ",
  faqs: [
    { question: "How much does an emergency visit cost?", answer: "Depends on diagnosis — we start with an exam and X-rays, then provide a clear cost breakdown before any treatment. Most PPO insurance accepted. CareCredit financing and our membership plan are also available." },
    { question: "What if my tooth gets knocked out?", answer: "Pick it up by the crown (not the root), rinse gently without scrubbing, and try to reinsert it into the socket. If that's not possible, keep it moist in milk or saliva. Call us immediately — the best chance of saving the tooth is within 30 minutes." },
    { question: "Do you accept walk-ins?", answer: "Call ahead at (832) 648-1756 for the fastest service, but we never turn away genuine emergencies. Calling first allows us to prepare for your arrival." },
    { question: "Can a toothache go away on its own?", answer: "Pain may temporarily subside, but the underlying cause — whether infection, decay, or a crack — will worsen without professional treatment. Don't wait." },
    { question: "Do you offer sedation for emergencies?", answer: "Yes. We offer sedation options for emergency procedures to ensure you're comfortable, especially if you're anxious or the treatment is extensive." },
  ],
  reviewsKicker: "WHAT CYPRESS PATIENTS ARE SAYING",
  reviewsHeading: "Emergency Care Reviews",
  testimonials: [
    { quote: "I chipped my tooth on a Saturday morning and they were able to see me first thing Monday. The repair looks perfect — you can't even tell it happened. So grateful for this team!", name: "Brian C.", source: "Google Review" },
    { quote: "Had a horrible toothache at work and called Smile Avenue. They squeezed me in that same afternoon. Dr. Vuong was so calm and reassuring. Pain was gone by the time I left.", name: "Nicole S.", source: "Google Review" },
    { quote: "My son knocked out a tooth playing basketball. They got us in within an hour and saved the tooth. I can't say enough good things about how they handled the situation.", name: "James P.", source: "Google Review" },
  ],
  ctaHeading: "Dental Emergency? Call (832) 648-1756 Now",
  ctaBody: "Same-day emergency appointments at Smile Avenue Cypress. Don't wait in pain.",
};

const EmergencyDentistCypress = () => <ServicePageTemplate data={data} />;
export default EmergencyDentistCypress;
