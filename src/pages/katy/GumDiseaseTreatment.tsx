import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Shield, Zap, Users, Heart } from "lucide-react";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Gum Disease Treatment",
  serviceSlug: "gum-disease-treatment",
  metaTitle: "Gum Disease Treatment Katy, TX | Periodontal Care | Smile Avenue",
  metaDescription: "Gum disease treatment in Katy, TX. Scaling & root planing, laser gum therapy & periodontal maintenance. Call (281) 800-5008.",
  heroKicker: "PERIODONTAL CARE IN KATY",
  heroHeading: "Gum Disease Treatment in Katy, TX",
  heroBody: "Gum disease threatens your oral health and overall wellbeing. At Smile Avenue Katy, we offer comprehensive periodontal care including deep cleanings, laser therapy, and ongoing maintenance to restore and protect your gum health.",
  heroCta1: "Book Perio Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Gum Disease Treatment",
  introKicker: "UNDERSTANDING GUM DISEASE", introHeading: "What Is Periodontal Disease?",
  introParas: [
    "Periodontal disease is a bacterial infection that damages the gum tissue and bone supporting your teeth. It ranges from gingivitis (mild inflammation) to advanced periodontitis.",
    "Risk factors include poor oral hygiene, smoking, diabetes, and genetics. Early detection and treatment are key to preventing tooth loss.",
    "Our Katy team uses advanced diagnostics to assess your condition and create a personalized treatment plan.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "Laser Technology" },
    { icon: <Shield className="w-5 h-5" />, label: "Non-Surgical Options" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Approach" },
  ],
  subServicesKicker: "TREATMENT OPTIONS", subServicesHeading: "Gum Disease Treatments", subServicesBody: "Solutions for every stage of gum disease.",
  subServices: [
    { title: "Deep Cleaning (SRP)", description: "Scaling and root planing removes bacteria and tartar from below the gumline.", icon: <Shield className="w-5 h-5" /> },
    { title: "Antibiotic Therapy", description: "Targeted antibiotics to eliminate infection and support healing.", icon: <Heart className="w-5 h-5" /> },
    { title: "Laser Gum Treatment", description: "Minimally invasive laser therapy preserves healthy tissue with faster healing.", icon: <Zap className="w-5 h-5" /> },
    { title: "Periodontal Maintenance", description: "Ongoing cleanings every 3–4 months to maintain gum health.", icon: <Users className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO EXPECT", processHeading: "Your Treatment Journey", processBody: "Comprehensive periodontal care from diagnosis to maintenance.",
  processSteps: [
    { number: "01", title: "Evaluation", description: "Full periodontal exam with probing and digital imaging.", icon: <Shield className="w-5 h-5" /> },
    { number: "02", title: "Treatment Plan", description: "Customized plan from SRP to advanced laser therapy.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Active Treatment", description: "Comfort-focused care with anesthesia and sedation options.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Maintenance", description: "Regular follow-ups to keep your gums healthy.", icon: <Users className="w-5 h-5" /> },
  ],
  faqHeading: "Gum Disease FAQs",
  faqs: [
    { question: "How do I know if I have gum disease?", answer: "Signs include bleeding gums, bad breath, receding gums, and loose teeth." },
    { question: "Is treatment painful?", answer: "We use anesthesia and sedation to ensure comfort throughout." },
    { question: "Can gum disease be cured?", answer: "Gingivitis can be reversed; advanced periodontitis requires ongoing management." },
    { question: "How much does treatment cost?", answer: "Deep cleaning typically $200–$400 per quadrant. Insurance often covers periodontal treatment." },
  ],
  reviewsKicker: "PATIENT REVIEWS", reviewsHeading: "What Patients Say",
  testimonials: [
    { quote: "My gum health has improved dramatically since starting treatment at Smile Avenue Katy. Excellent care.", name: "Patricia M.", source: "Google Review" },
    { quote: "The laser treatment was easy and my gums healed fast. Highly recommend.", name: "Robert J.", source: "Google Review" },
    { quote: "Thorough and caring periodontal team. They explained everything clearly.", name: "Nancy W.", source: "Google Review" },
  ],
  ctaHeading: "Protect Your Gum Health",
  ctaBody: "Schedule a periodontal evaluation at Smile Avenue Katy.",
};

export default () => <ServicePageTemplate data={data} />;
