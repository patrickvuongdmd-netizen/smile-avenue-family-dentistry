import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Shield, Zap, Heart, Users } from "lucide-react";

const data: ServicePageData = {
  location: "katy", serviceName: "Gum Recession Treatment", serviceSlug: "gum-recession-treatment",
  metaTitle: "Gum Recession Treatment Katy, TX | Gum Grafting | Smile Avenue",
  metaDescription: "Gum recession treatment in Katy, TX. Gum grafting, Pinhole Technique & tissue regeneration. Restore your gumline. Call (281) 800-5008.",
  heroKicker: "GUM RESTORATION IN KATY", heroHeading: "Gum Recession Treatment in Katy, TX",
  heroBody: "Receding gums expose tooth roots and increase sensitivity. At Smile Avenue Katy, we offer advanced treatments including the Pinhole Surgical Technique to restore your gumline comfortably.",
  heroCta1: "Book Gum Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Gum Recession Treatment",
  introKicker: "UNDERSTANDING RECESSION", introHeading: "What Causes Gum Recession?",
  introParas: [
    "Gum recession occurs when tissue pulls back from teeth, exposing roots. Causes include aggressive brushing, gum disease, genetics, and teeth grinding.",
    "Exposed roots are vulnerable to decay and sensitivity. Left untreated, recession worsens and can lead to tooth loss.",
    "We offer traditional grafting and the innovative Pinhole Technique — correcting recession without incisions or sutures.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "Pinhole Technique" },
    { icon: <Shield className="w-5 h-5" />, label: "Minimally Invasive" },
    { icon: <Heart className="w-5 h-5" />, label: "Fast Recovery" },
  ],
  subServicesKicker: "TREATMENT OPTIONS", subServicesHeading: "Gum Recession Treatments", subServicesBody: "Multiple approaches to restore your gumline.",
  subServices: [
    { title: "Gum Grafting", description: "Traditional tissue grafting using gum tissue from the palate or donor source.", icon: <Shield className="w-5 h-5" /> },
    { title: "Pinhole Surgical Technique", description: "Scalpel-free method repositioning existing tissue through a tiny pinhole.", icon: <Zap className="w-5 h-5" /> },
    { title: "Connective Tissue Graft", description: "Subepithelial graft for excellent root coverage and aesthetics.", icon: <Heart className="w-5 h-5" /> },
    { title: "Alloderm Graft", description: "Processed donor tissue reducing discomfort and healing time.", icon: <Users className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO EXPECT", processHeading: "Your Treatment Process", processBody: "Comfortable and predictable gum restoration.",
  processSteps: [
    { number: "01", title: "Gum Assessment", description: "Measure recession and determine the cause.", icon: <Shield className="w-5 h-5" /> },
    { number: "02", title: "Treatment Selection", description: "Choose the best approach for your needs.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Procedure Day", description: "Treatment with local anesthesia and optional sedation.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Healing", description: "Most patients heal within 1–2 weeks.", icon: <Users className="w-5 h-5" /> },
  ],
  faqHeading: "Gum Recession FAQs",
  faqs: [
    { question: "Can receding gums grow back?", answer: "Not on their own, but treatments like grafting and Pinhole can restore the gumline." },
    { question: "Is the Pinhole Technique painful?", answer: "Minimal discomfort — no incisions or sutures needed." },
    { question: "How much does treatment cost?", answer: "$600–$3,000 per area. Many insurance plans cover periodontal procedures." },
    { question: "How can I prevent further recession?", answer: "Soft toothbrush, gentle brushing, nightguard for grinding, and regular dental visits." },
  ],
  reviewsKicker: "PATIENT STORIES", reviewsHeading: "Treatment Success Stories",
  testimonials: [
    { quote: "The Pinhole Technique was amazing — no cutting, no stitches, fast recovery!", name: "Diana L.", source: "Google Review" },
    { quote: "My sensitivity is gone and my gums look great. Thank you Smile Avenue!", name: "Frank M.", source: "Google Review" },
    { quote: "They explained every option and helped me choose the best treatment.", name: "Carol S.", source: "Google Review" },
  ],
  ctaHeading: "Restore Your Gumline", ctaBody: "Schedule a gum recession consultation at Smile Avenue Katy.",
};

export default () => <ServicePageTemplate data={data} />;
