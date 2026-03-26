import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Shield, Zap, Users, Heart } from "lucide-react";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Gum Disease Treatment",
  serviceSlug: "gum-disease-treatment",
  metaTitle: "Gum Disease Treatment Cypress, TX | Periodontal Care | Smile Avenue",
  metaDescription: "Gum disease treatment in Cypress, TX. Scaling & root planing, laser gum therapy & periodontal maintenance. Protect your smile. Call (832) 648-1756.",
  heroKicker: "PERIODONTAL CARE IN CYPRESS",
  heroHeading: "Gum Disease Treatment in Cypress, TX",
  heroBody: "Gum disease is one of the most common oral health conditions — and if left untreated, it can lead to tooth loss and serious health complications. At Smile Avenue Cypress, we offer comprehensive periodontal care to stop gum disease in its tracks and restore your gum health.",
  heroCta1: "Book Perio Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Gum Disease Treatment",
  introKicker: "UNDERSTANDING GUM DISEASE",
  introHeading: "What Is Periodontal Disease?",
  introParas: [
    "Periodontal (gum) disease is a bacterial infection of the gum tissue that surrounds and supports your teeth. It begins as gingivitis — red, swollen, bleeding gums — and can progress to periodontitis, which destroys the bone and tissue holding your teeth in place.",
    "Risk factors include poor oral hygiene, smoking, diabetes, genetics, and certain medications. The good news is that gum disease is treatable at every stage, and early intervention can prevent irreversible damage.",
    "Our team uses advanced diagnostics including periodontal probing and digital X-rays to assess the extent of your condition and create a personalized treatment plan.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "Laser Technology" },
    { icon: <Shield className="w-5 h-5" />, label: "Non-Surgical Options" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Approach" },
  ],
  subServicesKicker: "TREATMENT OPTIONS",
  subServicesHeading: "Gum Disease Treatments We Offer",
  subServicesBody: "From early-stage gingivitis to advanced periodontitis, we have solutions.",
  subServices: [
    { title: "Deep Cleaning (SRP)", description: "Scaling and root planing removes tartar and bacteria from below the gumline and smooths root surfaces to help gums reattach to teeth.", icon: <Shield className="w-5 h-5" /> },
    { title: "Antibiotic Therapy", description: "Localized or systemic antibiotics to eliminate bacterial infection and support healing after deep cleaning procedures.", icon: <Heart className="w-5 h-5" /> },
    { title: "Laser Gum Treatment", description: "Minimally invasive laser therapy targets infected tissue while preserving healthy gum tissue, with less discomfort and faster healing.", icon: <Zap className="w-5 h-5" /> },
    { title: "Periodontal Maintenance", description: "Ongoing cleanings every 3–4 months to maintain gum health and prevent recurrence of periodontal disease after initial treatment.", icon: <Users className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO EXPECT",
  processHeading: "Your Treatment Journey",
  processBody: "We guide you through every step of periodontal care.",
  processSteps: [
    { number: "01", title: "Comprehensive Evaluation", description: "Full periodontal exam with probing measurements and digital imaging to assess disease severity.", icon: <Shield className="w-5 h-5" /> },
    { number: "02", title: "Treatment Planning", description: "We create a customized plan based on your condition, from non-surgical SRP to advanced laser therapy.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Active Treatment", description: "Your treatment is performed with comfort-focused care, including anesthesia and sedation options.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Maintenance Program", description: "Regular follow-ups and maintenance cleanings to keep your gums healthy long-term.", icon: <Users className="w-5 h-5" /> },
  ],
  faqHeading: "Gum Disease FAQs",
  faqs: [
    { question: "How do I know if I have gum disease?", answer: "Common signs include bleeding gums when brushing, persistent bad breath, receding gums, loose teeth, and red or swollen gum tissue. A professional exam can confirm the diagnosis." },
    { question: "Is gum disease treatment painful?", answer: "We use local anesthesia and offer sedation to ensure your comfort. Most patients report minimal discomfort during and after treatment." },
    { question: "Can gum disease be cured?", answer: "Gingivitis (early-stage) can be reversed with professional treatment and improved oral hygiene. Advanced periodontitis can be managed and controlled but requires ongoing maintenance." },
    { question: "How much does gum disease treatment cost?", answer: "Deep cleaning typically costs $200–$400 per quadrant. Most dental insurance plans cover periodontal treatment. We also offer financing options." },
    { question: "How often do I need periodontal maintenance?", answer: "After initial treatment, we typically recommend maintenance cleanings every 3–4 months instead of the standard 6-month schedule." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Say About Our Periodontal Care",
  testimonials: [
    { quote: "I was diagnosed with gum disease and was scared. The team at Smile Avenue made the deep cleaning comfortable and my gums have improved dramatically.", name: "Patricia M.", source: "Google Review" },
    { quote: "The laser gum treatment was so much easier than I expected. Minimal pain and fast recovery. My gums look and feel healthier than they have in years.", name: "Robert J.", source: "Google Review" },
    { quote: "Great periodontal care. They explained everything thoroughly and checked in on me throughout the healing process. Truly caring team.", name: "Nancy W.", source: "Google Review" },
  ],
  ctaHeading: "Protect Your Gum Health Today",
  ctaBody: "Schedule a periodontal evaluation and take control of your gum health.",
};

export default () => <ServicePageTemplate data={data} />;
