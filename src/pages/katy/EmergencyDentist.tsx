import { Shield, Zap, Users, PhoneCall, Stethoscope, Scan, Syringe } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Emergency Dentist",
  serviceSlug: "emergency-dentist",
  metaTitle: "Emergency Dentist Katy, TX | Same-Day Care | Smile Avenue",
  metaDescription: "Dental emergency in Katy, TX? Smile Avenue offers same-day emergency appointments for toothaches, broken teeth, lost fillings & more. Call (281) 800-5008.",
  heroKicker: "SAME-DAY EMERGENCY CARE IN KATY",
  heroHeading: "Emergency Dentist in Katy, TX",
  heroBody: "When a dental emergency strikes in the Katy area, Smile Avenue is here with same-day care to relieve your pain fast. Serving Cinco Ranch, Firethorne, Cross Creek Ranch, and surrounding communities.",
  heroCta1: "Book Emergency Appointment",
  heroCta2: "Call for Immediate Help",
  heroImage: "Emergency Dentistry Photo",
  introKicker: "UNDERSTANDING DENTAL EMERGENCIES",
  introHeading: "What Is Emergency Dental Care?",
  introParas: [
    "Emergency dental care addresses urgent oral health issues that require immediate attention — situations where delaying treatment could lead to permanent damage, severe pain, or infection. At Smile Avenue Katy, we prioritize emergency patients and reserve daily appointment slots for urgent needs.",
    "Common dental emergencies include sudden toothaches, knocked-out or broken teeth, lost fillings or crowns, abscesses, facial swelling, and uncontrolled bleeding. These situations can happen to anyone at any time.",
    "When you call our Katy office, our team will assess your situation, provide at-home care instructions, and schedule you as quickly as possible — often the very same day. Families across Cinco Ranch, Firethorne, and the Westheimer Parkway corridor trust us for fast, compassionate emergency care."
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "Same-Day Available" },
    { icon: <Shield className="w-5 h-5" />, label: "Gentle Care" },
    { icon: <Users className="w-5 h-5" />, label: "Trusted by 5,000+ Families" },
  ],
  subServicesKicker: "HOW WE CAN HELP",
  subServicesHeading: "Emergency Treatments We Provide",
  subServicesBody: "No matter what kind of dental emergency you're facing, our Katy team has the experience and technology to help.",
  subServices: [
    { title: "Toothache & Pain Relief", description: "Severe tooth pain can signal infection, decay, or a cracked tooth. We diagnose the source quickly and provide immediate relief.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Broken or Chipped Teeth", description: "Whether from a meal or a sports injury, a broken tooth needs prompt care. We offer same-day bonding, crowns, and restorations.", icon: <Shield className="w-5 h-5" /> },
    { title: "Lost Crown or Filling", description: "A lost crown or filling exposes your tooth to sensitivity and further damage. We'll replace or re-cement your restoration quickly.", icon: <Zap className="w-5 h-5" /> },
    { title: "Emergency Extraction", description: "When a tooth is too damaged to save, a timely extraction prevents infection. We offer sedation options for maximum comfort.", icon: <Syringe className="w-5 h-5" /> },
  ],
  processKicker: "YOUR EMERGENCY VISIT",
  processHeading: "What to Expect During Your Emergency Visit",
  processBody: "We've streamlined our emergency process so you get care as quickly and comfortably as possible.",
  processSteps: [
    { number: "01", title: "Call Us", description: "Call (281) 800-5008 and let our team know you have a dental emergency. We'll get you scheduled as quickly as possible.", icon: <PhoneCall className="w-6 h-6" /> },
    { number: "02", title: "Same-Day Exam", description: "When you arrive, we'll prioritize your comfort and quickly assess the situation with a thorough examination.", icon: <Stethoscope className="w-6 h-6" /> },
    { number: "03", title: "Digital X-Rays & Diagnosis", description: "We use advanced digital X-rays for a complete picture of the issue, providing an accurate diagnosis in minutes.", icon: <Scan className="w-6 h-6" /> },
    { number: "04", title: "Immediate Treatment", description: "Once diagnosed, we begin treatment right away — whether it's pain relief, a restoration, or an extraction.", icon: <Syringe className="w-6 h-6" /> },
  ],
  faqHeading: "Emergency Dentistry FAQ",
  faqs: [
    { question: "How much does emergency dental care cost in Katy, TX?", answer: "Emergency exam and X-ray fees vary depending on the treatment needed. We accept most major insurance plans and offer flexible financing through CareCredit and Sunbit. Our team will provide a clear cost estimate before treatment begins." },
    { question: "Do you accept walk-in emergencies?", answer: "While we prefer you call ahead at (281) 800-5008, we do accommodate walk-in emergencies whenever possible. Calling first helps us prepare and serve you faster." },
    { question: "What counts as a dental emergency?", answer: "A dental emergency includes severe toothache, knocked-out or loose teeth, broken teeth, lost fillings or crowns, swelling, abscess, uncontrolled bleeding, or jaw pain. When in doubt, call us." },
    { question: "Do you offer same-day emergency appointments?", answer: "Yes. We reserve time daily for dental emergencies. Call us at (281) 800-5008 as early as possible and we'll do our best to see you the same day." },
    { question: "What should I do if I knock out a tooth?", answer: "Handle the tooth by the crown, gently rinse if dirty, and try to place it back in the socket. If not possible, keep it moist in milk or saliva and call us immediately — the best chance of saving the tooth is within 30 minutes." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING",
  reviewsHeading: "Emergency Care Reviews",
  testimonials: [
    { quote: "My daughter fell off her bike and knocked her front tooth loose. They got us in within an hour and saved the tooth. Incredible team!", name: "Amanda R.", source: "Google Review" },
    { quote: "Had a terrible toothache on a Wednesday morning. Called Smile Avenue Katy and they saw me that same afternoon. Dr. Bilal was amazing.", name: "David M.", source: "Google Review" },
    { quote: "Lost a crown while eating dinner. They fit me in first thing the next morning and had a new crown ready the same visit. So impressed!", name: "Patricia L.", source: "Google Review" },
  ],
  ctaHeading: "Book Your Emergency Appointment Today",
  ctaBody: "Don't wait in pain. Call us now or book online for same-day emergency dental care in Katy, TX.",
};

const EmergencyDentistKaty = () => <ServicePageTemplate data={data} />;
export default EmergencyDentistKaty;
