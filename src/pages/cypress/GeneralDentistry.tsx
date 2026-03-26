import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Shield, Zap, Heart, Scan } from "lucide-react";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "General Dentistry",
  serviceSlug: "general-dentistry",
  metaTitle: "General Dentistry Cypress, TX | Comprehensive Care | Smile Avenue",
  metaDescription: "General dentistry in Cypress, TX. Dental exams, X-rays, fillings, fluoride treatments & comprehensive oral care. Your dental home. Call (832) 648-1756.",
  heroKicker: "COMPREHENSIVE DENTAL CARE IN CYPRESS",
  heroHeading: "General Dentistry in Cypress, TX",
  heroBody: "General dentistry is the foundation of a healthy smile. At Smile Avenue Cypress, our general dentistry services cover everything from routine exams and cleanings to fillings, fluoride treatments, and early detection of dental issues — keeping your oral health on track.",
  heroCta1: "Book Your Exam",
  heroCta2: "Call (832) 648-1756",
  heroImage: "General Dentistry",
  introKicker: "YOUR DENTAL FOUNDATION",
  introHeading: "What Is General Dentistry?",
  introParas: [
    "General dentistry encompasses the full range of diagnostic, preventive, and restorative dental care that keeps your smile healthy throughout life. It's the starting point for all dental treatment and the core of your ongoing oral health maintenance.",
    "Regular dental exams and professional cleanings are the most effective way to prevent cavities, gum disease, and other oral health problems. Our team uses advanced digital technology to detect issues at their earliest stages.",
    "At Smile Avenue, general dentistry is about more than fixing problems — it's about building a long-term relationship with your dental health through education, prevention, and personalized care.",
  ],
  trustBadges: [
    { icon: <Scan className="w-5 h-5" />, label: "Digital X-Rays" },
    { icon: <Shield className="w-5 h-5" />, label: "Comprehensive Exams" },
    { icon: <Heart className="w-5 h-5" />, label: "Personalized Care" },
  ],
  subServicesKicker: "CORE SERVICES",
  subServicesHeading: "General Dentistry Services",
  subServicesBody: "The essential dental services that form the foundation of your oral health.",
  subServices: [
    { title: "Dental Exams", description: "Comprehensive oral evaluations including oral cancer screening, gum health assessment, and bite analysis.", icon: <Shield className="w-5 h-5" /> },
    { title: "Digital X-Rays", description: "Low-radiation digital imaging for accurate diagnosis of cavities, bone loss, and other issues not visible to the naked eye.", icon: <Scan className="w-5 h-5" /> },
    { title: "Fillings", description: "Tooth-colored composite fillings to restore teeth damaged by decay, blending seamlessly with your natural tooth structure.", icon: <Zap className="w-5 h-5" /> },
    { title: "Fluoride Treatments", description: "Professional-strength fluoride application to strengthen enamel and protect against cavities for patients of all ages.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR VISIT",
  processHeading: "What to Expect at Your Exam",
  processBody: "A thorough, comfortable experience designed around your needs.",
  processSteps: [
    { number: "01", title: "Digital Imaging", description: "Low-dose digital X-rays capture detailed images of your teeth, roots, and jawbone.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Comprehensive Exam", description: "Your dentist examines every tooth, checks your gums, screens for oral cancer, and assesses your bite.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Professional Cleaning", description: "A dental hygienist removes plaque and tartar, polishes your teeth, and provides personalized hygiene tips.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Treatment Plan", description: "We review findings, discuss any needed treatment, and create a plan that fits your goals and budget.", icon: <Heart className="w-5 h-5" /> },
  ],
  faqHeading: "General Dentistry FAQs",
  faqs: [
    { question: "How often should I visit the dentist?", answer: "We recommend dental exams and cleanings every 6 months. Patients with gum disease or other conditions may need more frequent visits." },
    { question: "Do dental X-rays emit a lot of radiation?", answer: "No. Digital X-rays emit up to 80% less radiation than traditional film X-rays. They're very safe and essential for accurate diagnosis." },
    { question: "Are tooth-colored fillings as strong as silver fillings?", answer: "Yes! Modern composite fillings are durable, long-lasting, and bond directly to the tooth structure for added strength. They also look natural." },
    { question: "What does a general dental exam include?", answer: "A comprehensive exam includes digital X-rays, oral cancer screening, gum health evaluation, bite analysis, and a thorough tooth-by-tooth examination." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Say",
  testimonials: [
    { quote: "Thorough, gentle, and always on time. Smile Avenue is the best dental office I've ever visited. They genuinely care about their patients.", name: "Laura P.", source: "Google Review" },
    { quote: "The digital X-rays were quick and painless. Dr. Kim explained everything clearly and made sure I understood my treatment options.", name: "Steven M.", source: "Google Review" },
    { quote: "I actually look forward to my dental checkups now. The staff is so friendly and the office is beautiful. Five stars all the way.", name: "Rachel T.", source: "Google Review" },
  ],
  ctaHeading: "Schedule Your Dental Exam",
  ctaBody: "Book your comprehensive exam and take the first step toward optimal oral health.",
};

export default () => <ServicePageTemplate data={data} />;
