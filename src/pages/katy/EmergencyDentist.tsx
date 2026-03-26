import { Shield, Zap, Scan, Syringe, Stethoscope, PhoneCall, Clock, AlertCircle } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Emergency Dentist",
  serviceSlug: "emergency-dentist",
  metaTitle: "Emergency Dentist in Katy, TX - Same-Day Care - Smile Avenue",
  metaDescription: "Dental emergency near Cinco Ranch? Same-day appointments at Smile Avenue Katy. Toothaches, broken teeth. Call (281) 800-5008 now.",
  heroKicker: "SAME-DAY EMERGENCY CARE IN KATY",
  heroHeading: "Emergency Dentist in Katy, TX",
  heroBody: "A dental emergency demands immediate action. At Smile Avenue Katy, we provide same-day emergency care for severe toothaches, fractured teeth, knocked-out teeth, and infections. Call (281) 800-5008 for fast relief.",
  heroCta1: "Call (281) 800-5008 Now",
  heroCta2: "Book Emergency Visit",
  heroImage: "Emergency Dentist Photo",
  introKicker: "IMMEDIATE DENTAL CARE",
  introHeading: "When You Need Help Now",
  introParas: [
    "Dental emergencies don't follow schedules. Whether it's a severe toothache at midnight, a cracked tooth during a meal, or a knocked-out tooth on the field, Smile Avenue Katy provides same-day emergency appointments to address your pain and protect your oral health.",
    "Our team includes Dr. Bilal, Dr. Maredia, and Dr. Vuong — experienced in handling urgent dental situations from trauma to infections. We have advanced 3D diagnostics, sedation options, and comprehensive in-house treatment capabilities so you get complete care without referrals. Families across Cinco Ranch, Firethorne, and Westheimer Parkway count on us when emergencies strike.",
  ],
  trustBadges: [
    { icon: <Clock className="w-5 h-5" />, label: "Same-Day Appointments" },
    { icon: <Stethoscope className="w-5 h-5" />, label: "Comprehensive In-House Care" },
    { icon: <Shield className="w-5 h-5" />, label: "Sedation Available" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Emergencies",
  subServicesBody: "Fast, comprehensive care when you need it most.",
  subServices: [
    { title: "Same-Day Scheduling", description: "Call us and we'll get you in the same day. Emergency patients are our priority — we won't make you wait in pain.", icon: <Zap className="w-5 h-5" /> },
    { title: "Comprehensive In-House Treatment", description: "From root canals to extractions to crowns — we handle everything in-office without referring you elsewhere.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Sedation Available", description: "Emergencies are stressful. Nitrous oxide, oral sedation, and IV sedation ensure you're comfortable during treatment.", icon: <Syringe className="w-5 h-5" /> },
    { title: "Advanced 3D Diagnostics", description: "Digital X-rays and 3D CBCT imaging provide immediate, accurate diagnosis so we can treat the problem — not just the symptom.", icon: <Scan className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO DO IN AN EMERGENCY",
  processHeading: "Your Emergency Visit",
  processBody: "Fast action leads to the best outcomes.",
  processSteps: [
    { number: "01", title: "Call (281) 800-5008", description: "Call us immediately. We'll triage your situation over the phone and schedule a same-day appointment.", icon: <PhoneCall className="w-5 h-5" /> },
    { number: "02", title: "Rapid Diagnosis", description: "Digital X-rays and examination to quickly identify the problem and determine the best treatment approach.", icon: <Scan className="w-5 h-5" /> },
    { number: "03", title: "Immediate Treatment", description: "Dr. Bilal, Dr. Maredia, or Dr. Vuong provides treatment to relieve pain and address the emergency.", icon: <Stethoscope className="w-5 h-5" /> },
    { number: "04", title: "Aftercare Instructions", description: "Detailed aftercare instructions and follow-up scheduling to ensure complete healing and recovery.", icon: <Shield className="w-5 h-5" /> },
  ],
  faqHeading: "Emergency Dental Questions",
  faqs: [
    { question: "How much does emergency dental care cost?", answer: "Costs vary by treatment needed. We accept insurance, CareCredit financing, and our Smile Avenue Membership Plan to make emergency care accessible." },
    { question: "What should I do with a knocked-out tooth?", answer: "Handle the tooth by the crown (not the root), keep it moist in milk or saliva, and call us immediately. Time is critical — the sooner you get here, the better the chance of saving the tooth." },
    { question: "Do you accept walk-ins?", answer: "We recommend calling ahead at (281) 800-5008 for the fastest service — we'll prioritize your appointment and have everything ready when you arrive." },
    { question: "Will a toothache resolve on its own?", answer: "No — toothache pain indicates an underlying problem (infection, crack, decay) that will only worsen without treatment. Early treatment prevents more extensive and costly procedures." },
    { question: "Is sedation available for emergency procedures?", answer: "Yes — we offer nitrous oxide, oral sedation, and IV sedation for emergency procedures to ensure you're comfortable during treatment." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Cracked a tooth on a Saturday and they got me in first thing Monday morning. The pain was gone within an hour of sitting in the chair. Incredible team.", name: "Anthony R.", source: "Google Review" },
    { quote: "My son knocked out a tooth playing soccer. We called and they saw us within an hour. Dr. Maredia saved the tooth. Can't thank them enough.", name: "Michelle K.", source: "Google Review" },
    { quote: "I had an abscess that was getting worse by the hour. Smile Avenue got me in the same day, drained it, and started treatment. The relief was immediate.", name: "James P.", source: "Google Review" },
  ],
  ctaHeading: "Dental Emergency? Call Now",
  ctaBody: "Don't wait in pain. Call (281) 800-5008 for same-day emergency care at Smile Avenue Katy.",
};

const EmergencyDentistKaty = () => <ServicePageTemplate data={data} />;
export default EmergencyDentistKaty;
