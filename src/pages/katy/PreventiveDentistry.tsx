import { Shield, Eye, Scan, Sparkles, Droplets, Layers, PhoneCall, Stethoscope, CheckCircle, Smile } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Preventive Dentistry",
  serviceSlug: "preventive-dentistry",
  videoId: "O91Y4M9liYs",
  metaTitle: "Preventive Dentistry Katy, TX | Exams & Cleanings | Smile Avenue",
  metaDescription: "Preventive dentistry in Katy, TX near Cinco Ranch — exams, cleanings, digital X-rays & oral cancer screenings. Open Saturdays. Insurance accepted. Book today.",
  heroKicker: "PREVENTIVE CARE IN KATY",
  heroHeading: "Preventive Dentistry in Katy, TX",
  heroBody: "Healthy smiles start with prevention. At Smile Avenue Katy, we provide comprehensive exams, professional cleanings, and advanced digital diagnostics to families across Cinco Ranch, Firethorne, and Cross Creek Ranch.",
  heroCta1: "Book Your Cleaning",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Preventive Dentistry Photo",
  heroValueProps: ["Comprehensive exams with digital X-rays", "Oral cancer screening at every visit", "Fluoride treatments & dental sealants", "Catch problems early — save time & money", "Most insurance covers 100% of preventive care"],
  introKicker: "PROTECT YOUR SMILE",
  introHeading: "Comprehensive Preventive Care in Katy",
  introParas: [
    "Preventive dentistry is the most effective way to maintain your oral health and avoid costly treatments down the road. Regular visits allow us to identify early signs of decay, gum disease, and oral cancer before they progress.",
    "Our Katy office recommends twice-yearly preventive visits for most patients. Each visit includes a comprehensive exam, professional cleaning, and digital X-rays as needed — plus oral cancer screenings, fluoride treatments, and sealants for added protection.",
    "Serving families throughout the Westheimer Parkway corridor, Cinco Ranch, and surrounding Katy neighborhoods, our team uses the latest digital imaging to give you a complete picture of your oral health.",
  ],
  trustBadges: [
    { icon: <Shield className="w-5 h-5" />, label: "Insurance Accepted" },
    { icon: <Eye className="w-5 h-5" />, label: "Digital Diagnostics" },
    { icon: <Smile className="w-5 h-5" />, label: "All Ages Welcome" },
  ],
  subServicesKicker: "COMPREHENSIVE PREVENTIVE SERVICES",
  subServicesHeading: "What's Included in Your Preventive Visit",
  subServicesBody: "Every preventive visit at Smile Avenue Katy is thorough, comfortable, and educational.",
  subServices: [
    { title: "Comprehensive Exams", description: "A detailed evaluation of your teeth, gums, bite, jaw joints, and soft tissues — checking for cavities, gum disease, oral cancer, and other concerns.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Professional Cleanings", description: "Our hygienists gently remove plaque and tartar buildup that brushing and flossing miss, leaving your teeth polished and refreshed.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Digital X-Rays & Screenings", description: "Low-radiation digital X-rays reveal hidden decay, bone loss, and impacted teeth. Oral cancer screenings are performed at every exam.", icon: <Scan className="w-5 h-5" /> },
    { title: "Fluoride & Sealants", description: "Fluoride strengthens enamel against decay, while sealants provide a protective barrier on back teeth — especially beneficial for children.", icon: <Layers className="w-5 h-5" /> },
  ],
  processKicker: "YOUR PREVENTIVE VISIT",
  processHeading: "What to Expect at Your Appointment",
  processBody: "We make preventive visits comfortable, efficient, and informative for the whole family.",
  processSteps: [
    { number: "01", title: "Check-In & Review", description: "We review your health history and any concerns. First-time patients receive a comprehensive new patient exam.", icon: <PhoneCall className="w-6 h-6" /> },
    { number: "02", title: "Digital Imaging", description: "Low-dose digital X-rays capture what's happening beneath the surface, detecting issues invisible to the naked eye.", icon: <Scan className="w-6 h-6" /> },
    { number: "03", title: "Professional Cleaning", description: "Your hygienist removes plaque and tartar, polishes your teeth, and flosses — leaving your mouth clean and fresh.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "04", title: "Exam & Care Plan", description: "Your dentist examines everything, discusses findings, and creates a personalized care plan for your ongoing health.", icon: <CheckCircle className="w-6 h-6" /> },
  ],
  faqHeading: "Preventive Dentistry FAQ",
  faqs: [
    { question: "How much does a dental cleaning cost in Katy, TX?", answer: "A routine cleaning and exam typically ranges from $150–$350 without insurance. Most plans cover two preventive visits per year at 100%. We also accept our in-house membership plan for uninsured patients." },
    { question: "How often should I visit the dentist?", answer: "Most patients should visit every six months. Patients with gum disease or other risk factors may benefit from visits every 3–4 months." },
    { question: "Are dental X-rays safe?", answer: "Yes. Digital X-rays use up to 80% less radiation than traditional film. We follow ADA guidelines and only take X-rays when clinically necessary." },
    { question: "Do you see children for preventive care?", answer: "Absolutely! We recommend a first dental visit by age 1. Our team is experienced with pediatric patients and makes visits fun and comfortable." },
    { question: "What if I haven't been to the dentist in years?", answer: "No judgment here! Many of our patients come to us after a long gap. We'll do a thorough assessment and create a plan to get your oral health back on track." },
    { question: "What does a preventive dental visit include?", answer: "A typical preventive visit includes a comprehensive exam, professional cleaning, digital X-rays (as needed), oral cancer screening, and personalized hygiene recommendations. We also discuss any concerns you may have about your oral health." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS SAY",
  reviewsHeading: "Preventive Care Reviews",
  testimonials: [
    { quote: "The Katy team is phenomenal. My cleanings are thorough but gentle, and they always explain everything clearly. Best dental experience I've had.", name: "Amanda T.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "We bring our whole family here from Cinco Ranch. The kids actually look forward to their cleanings! That says a lot about this practice.", name: "Robert K.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "After years of avoiding the dentist, Smile Avenue made me feel welcome and comfortable. No shame, just excellent care. Highly recommend!", name: "Lisa G.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Westheimer Parkway delivers the most comprehensive preventive dental care in Katy, TX. Our approach goes beyond basic cleanings — combining thorough exams, digital X-rays, oral cancer screenings, fluoride treatments, and sealants to catch and prevent problems before they become costly procedures.",
    "Our Katy hygiene team uses the latest digital imaging and ultrasonic scaling technology for thorough yet gentle care. We serve families across the Westheimer Parkway corridor, Cinco Ranch, Cross Creek Ranch, Firethorne, and Fulshear — from toddlers getting their first checkup to seniors maintaining their oral health.",
    "Prevention is the most cost-effective form of dentistry. A $200 cleaning today can prevent a $2,000 crown or $5,000 implant tomorrow. That's why we make preventive care accessible with insurance acceptance, our Smile Avenue Membership Plan, and convenient Saturday hours (8am-2pm).",
    "Every preventive visit includes a one-on-one conversation with your dentist about your oral health status and personalized home care recommendations. We don't rush through exams — we take time to educate you about what we see and what you can do to keep your smile healthy between visits.",
  ],
  ctaHeading: "Schedule Your Preventive Visit Today",
  ctaBody: "Prevention is the best investment in your smile. Book your cleaning and exam at Smile Avenue Katy.",
};

const PreventiveDentistryKaty = () => <ServicePageTemplate data={data} />;
export default PreventiveDentistryKaty;
