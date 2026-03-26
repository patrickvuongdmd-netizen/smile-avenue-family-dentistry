import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Shield, Zap, Users, Heart } from "lucide-react";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Wisdom Teeth Removal",
  serviceSlug: "wisdom-teeth",
  metaTitle: "Wisdom Teeth Removal Cypress, TX | Smile Avenue Family Dentistry",
  metaDescription: "Wisdom teeth removal in Cypress, TX. Safe, comfortable third molar extraction with sedation options. Same-day consultations. Call (832) 648-1756.",
  heroKicker: "WISDOM TEETH EXTRACTION IN CYPRESS",
  heroHeading: "Wisdom Teeth Removal in Cypress, TX",
  heroBody: "Wisdom teeth can cause crowding, infection, and pain when they don't have enough room to emerge properly. At Smile Avenue Cypress, we provide safe, comfortable wisdom teeth removal with sedation options to keep you relaxed throughout.",
  heroCta1: "Book Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Wisdom Teeth Removal",
  introKicker: "ABOUT WISDOM TEETH",
  introHeading: "Why Remove Wisdom Teeth?",
  introParas: [
    "Wisdom teeth (third molars) typically emerge between ages 17–25. For many people, there isn't enough room in the jaw to accommodate these teeth, leading to impaction, crowding, infection, or damage to adjacent teeth.",
    "Even wisdom teeth that partially emerge can create pockets where bacteria collect, leading to gum disease and decay. Proactive removal prevents these complications and protects your oral health.",
    "Our team uses digital X-rays and 3D imaging to evaluate your wisdom teeth and develop a personalized extraction plan. We offer IV sedation and nitrous oxide to ensure your comfort.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "3D Imaging" },
    { icon: <Shield className="w-5 h-5" />, label: "Sedation Available" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Extraction" },
  ],
  subServicesKicker: "EXTRACTION TYPES",
  subServicesHeading: "Wisdom Teeth Procedures",
  subServicesBody: "We handle all types of wisdom teeth situations.",
  subServices: [
    { title: "Simple Extraction", description: "For fully erupted wisdom teeth that can be removed without surgery using standard extraction techniques.", icon: <Shield className="w-5 h-5" /> },
    { title: "Surgical Extraction", description: "For partially erupted or soft-tissue impacted wisdom teeth that require a small incision for removal.", icon: <Zap className="w-5 h-5" /> },
    { title: "Impacted Wisdom Teeth", description: "Fully impacted teeth trapped in the jawbone require surgical removal with careful bone management.", icon: <Users className="w-5 h-5" /> },
    { title: "Post-Op Care", description: "Comprehensive aftercare instructions and follow-up to ensure smooth, comfortable healing.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO EXPECT",
  processHeading: "Your Extraction Journey",
  processBody: "From consultation to recovery, we make wisdom teeth removal stress-free.",
  processSteps: [
    { number: "01", title: "Exam & Imaging", description: "Digital X-rays and 3D scans reveal the position and condition of your wisdom teeth.", icon: <Zap className="w-5 h-5" /> },
    { number: "02", title: "Sedation & Comfort", description: "Choose from local anesthesia, nitrous oxide, or IV sedation for a comfortable experience.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Extraction", description: "Your wisdom teeth are carefully removed with minimal impact on surrounding tissue.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Recovery Support", description: "Detailed aftercare instructions and a follow-up visit to ensure proper healing.", icon: <Users className="w-5 h-5" /> },
  ],
  faqHeading: "Wisdom Teeth FAQs",
  faqs: [
    { question: "When should wisdom teeth be removed?", answer: "Ideally between ages 17–25, before the roots fully develop. However, wisdom teeth can be removed at any age if they're causing problems." },
    { question: "How long is recovery from wisdom teeth removal?", answer: "Most patients recover within 3–5 days. Swelling and discomfort are managed with prescribed medication and ice packs." },
    { question: "Can I be sedated for wisdom teeth removal?", answer: "Yes! We offer nitrous oxide, oral sedation, and IV sedation. Most patients choose sedation for comfort during the procedure." },
    { question: "How much does wisdom teeth removal cost?", answer: "Simple extractions range from $150–$300 per tooth; surgical extractions $300–$600 per tooth. Most dental insurance covers wisdom teeth removal." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Say",
  testimonials: [
    { quote: "Had all four wisdom teeth out with IV sedation. I don't remember a thing and recovery was smooth. The team was amazing.", name: "Jake M.", source: "Google Review" },
    { quote: "My son had his wisdom teeth removed here and the entire experience was excellent. They were so gentle and caring with him.", name: "Sarah L.", source: "Google Review" },
    { quote: "Fast, professional, and painless wisdom teeth removal. I was back to normal within a few days. Highly recommend!", name: "Chris D.", source: "Google Review" },
  ],
  ctaHeading: "Get Your Wisdom Teeth Evaluated",
  ctaBody: "Schedule a consultation to determine if your wisdom teeth need to be removed.",
};

export default () => <ServicePageTemplate data={data} />;
