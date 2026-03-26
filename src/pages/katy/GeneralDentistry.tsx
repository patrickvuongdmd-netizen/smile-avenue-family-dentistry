import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Shield, Zap, Heart, Scan } from "lucide-react";

const data: ServicePageData = {
  location: "katy", serviceName: "General Dentistry", serviceSlug: "general-dentistry",
  metaTitle: "General Dentistry Katy, TX | Comprehensive Care | Smile Avenue",
  metaDescription: "General dentistry in Katy, TX. Dental exams, X-rays, fillings, fluoride treatments & comprehensive care. Your dental home. Call (281) 800-5008.",
  heroKicker: "COMPREHENSIVE DENTAL CARE IN KATY", heroHeading: "General Dentistry in Katy, TX",
  heroBody: "General dentistry is the foundation of a healthy smile. At Smile Avenue Katy, we cover everything from routine exams and cleanings to fillings, fluoride, and early detection.",
  heroCta1: "Book Your Exam", heroCta2: "Call (281) 800-5008", heroImage: "General Dentistry",
  introKicker: "YOUR DENTAL FOUNDATION", introHeading: "What Is General Dentistry?",
  introParas: [
    "General dentistry covers diagnostic, preventive, and restorative care — the starting point for all dental treatment.",
    "Regular exams and cleanings prevent cavities, gum disease, and other problems. We use digital technology for early detection.",
    "At Smile Avenue Katy, we focus on building long-term relationships through education, prevention, and personalized care.",
  ],
  trustBadges: [
    { icon: <Scan className="w-5 h-5" />, label: "Digital X-Rays" },
    { icon: <Shield className="w-5 h-5" />, label: "Comprehensive Exams" },
    { icon: <Heart className="w-5 h-5" />, label: "Personalized Care" },
  ],
  subServicesKicker: "CORE SERVICES", subServicesHeading: "General Dentistry Services", subServicesBody: "Essential services for your oral health foundation.",
  subServices: [
    { title: "Dental Exams", description: "Comprehensive evaluations including oral cancer screening and bite analysis.", icon: <Shield className="w-5 h-5" /> },
    { title: "Digital X-Rays", description: "Low-radiation imaging for accurate cavity and bone loss diagnosis.", icon: <Scan className="w-5 h-5" /> },
    { title: "Fillings", description: "Tooth-colored composite fillings that blend with natural tooth structure.", icon: <Zap className="w-5 h-5" /> },
    { title: "Fluoride Treatments", description: "Professional fluoride to strengthen enamel and protect against cavities.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR VISIT", processHeading: "What to Expect", processBody: "A thorough, comfortable dental experience.",
  processSteps: [
    { number: "01", title: "Digital Imaging", description: "Low-dose X-rays of teeth, roots, and jawbone.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Comprehensive Exam", description: "Tooth-by-tooth examination, gum check, and oral cancer screening.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Professional Cleaning", description: "Plaque and tartar removal, polishing, and hygiene tips.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Treatment Plan", description: "Review findings and create a plan that fits your goals.", icon: <Heart className="w-5 h-5" /> },
  ],
  faqHeading: "General Dentistry FAQs",
  faqs: [
    { question: "How often should I visit?", answer: "Every 6 months for exams and cleanings. More frequent if needed." },
    { question: "Are digital X-rays safe?", answer: "Yes — up to 80% less radiation than traditional film." },
    { question: "Are tooth-colored fillings strong?", answer: "Yes — modern composites are durable, long-lasting, and natural-looking." },
    { question: "What does an exam include?", answer: "X-rays, oral cancer screening, gum evaluation, and thorough tooth examination." },
  ],
  reviewsKicker: "PATIENT REVIEWS", reviewsHeading: "What Patients Say",
  testimonials: [
    { quote: "Thorough, gentle, and always on time. Best dental office I've ever visited.", name: "Laura P.", source: "Google Review" },
    { quote: "Digital X-rays were quick and painless. Everything explained clearly.", name: "Steven M.", source: "Google Review" },
    { quote: "I actually look forward to checkups now. Five stars!", name: "Rachel T.", source: "Google Review" },
  ],
  ctaHeading: "Schedule Your Dental Exam", ctaBody: "Book your comprehensive exam at Smile Avenue Katy.",
};

export default () => <ServicePageTemplate data={data} />;
