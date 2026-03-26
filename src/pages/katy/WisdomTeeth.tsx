import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Shield, Zap, Users, Heart } from "lucide-react";

const data: ServicePageData = {
  location: "katy", serviceName: "Wisdom Teeth Removal", serviceSlug: "wisdom-teeth",
  metaTitle: "Wisdom Teeth Removal Katy, TX | Smile Avenue Family Dentistry",
  metaDescription: "Wisdom teeth removal in Katy, TX. Safe, comfortable third molar extraction with sedation options. Call (281) 800-5008.",
  heroKicker: "WISDOM TEETH EXTRACTION IN KATY", heroHeading: "Wisdom Teeth Removal in Katy, TX",
  heroBody: "Wisdom teeth can cause crowding, infection, and pain. At Smile Avenue Katy, we provide safe, comfortable wisdom teeth removal with sedation options.",
  heroCta1: "Book Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Wisdom Teeth Removal",
  introKicker: "ABOUT WISDOM TEETH", introHeading: "Why Remove Wisdom Teeth?",
  introParas: [
    "Wisdom teeth typically emerge between ages 17–25. When there isn't enough room, they can become impacted, cause crowding, or lead to infection.",
    "Even partially emerged wisdom teeth create pockets where bacteria collect. Proactive removal prevents complications.",
    "We use 3D imaging to evaluate your wisdom teeth and offer IV sedation for comfortable extraction.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "3D Imaging" },
    { icon: <Shield className="w-5 h-5" />, label: "Sedation Available" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Extraction" },
  ],
  subServicesKicker: "EXTRACTION TYPES", subServicesHeading: "Wisdom Teeth Procedures", subServicesBody: "We handle all types of wisdom teeth situations.",
  subServices: [
    { title: "Simple Extraction", description: "For fully erupted wisdom teeth removed with standard techniques.", icon: <Shield className="w-5 h-5" /> },
    { title: "Surgical Extraction", description: "For partially erupted teeth requiring a small incision.", icon: <Zap className="w-5 h-5" /> },
    { title: "Impacted Wisdom Teeth", description: "Fully impacted teeth requiring surgical removal with bone management.", icon: <Users className="w-5 h-5" /> },
    { title: "Post-Op Care", description: "Comprehensive aftercare and follow-up for smooth healing.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO EXPECT", processHeading: "Your Extraction Journey", processBody: "Stress-free wisdom teeth removal.",
  processSteps: [
    { number: "01", title: "Exam & Imaging", description: "Digital X-rays and 3D scans reveal wisdom teeth position.", icon: <Zap className="w-5 h-5" /> },
    { number: "02", title: "Sedation & Comfort", description: "Choose from local anesthesia, nitrous, or IV sedation.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Extraction", description: "Careful removal with minimal tissue impact.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Recovery", description: "Detailed aftercare and follow-up visit.", icon: <Users className="w-5 h-5" /> },
  ],
  faqHeading: "Wisdom Teeth FAQs",
  faqs: [
    { question: "When should wisdom teeth be removed?", answer: "Ideally ages 17–25, but can be removed at any age if causing problems." },
    { question: "How long is recovery?", answer: "Most patients recover within 3–5 days." },
    { question: "Can I be sedated?", answer: "Yes — we offer nitrous, oral sedation, and IV sedation." },
    { question: "How much does it cost?", answer: "Simple: $150–$300/tooth; Surgical: $300–$600/tooth. Most insurance covers it." },
  ],
  reviewsKicker: "PATIENT REVIEWS", reviewsHeading: "What Patients Say",
  testimonials: [
    { quote: "Had all four wisdom teeth out with sedation. Don't remember a thing and recovery was smooth!", name: "Jake M.", source: "Google Review" },
    { quote: "Excellent care for my son's wisdom teeth removal. Gentle and professional.", name: "Sarah L.", source: "Google Review" },
    { quote: "Fast and painless. Back to normal in days. Highly recommend!", name: "Chris D.", source: "Google Review" },
  ],
  ctaHeading: "Get Your Wisdom Teeth Evaluated", ctaBody: "Schedule a consultation at Smile Avenue Katy.",
};

export default () => <ServicePageTemplate data={data} />;
