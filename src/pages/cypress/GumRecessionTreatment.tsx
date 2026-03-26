import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Shield, Zap, Heart, Users } from "lucide-react";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Gum Recession Treatment",
  serviceSlug: "gum-recession-treatment",
  metaTitle: "Gum Recession Treatment Cypress, TX | Gum Grafting | Smile Avenue",
  metaDescription: "Gum recession treatment in Cypress, TX. Gum grafting, Pinhole Surgical Technique & tissue regeneration. Restore your gumline. Call (832) 648-1756.",
  heroKicker: "GUM RESTORATION IN CYPRESS",
  heroHeading: "Gum Recession Treatment in Cypress, TX",
  heroBody: "Receding gums expose tooth roots, increase sensitivity, and put you at risk for decay and tooth loss. At Smile Avenue Cypress, we offer advanced gum recession treatments including the minimally invasive Pinhole Surgical Technique to restore your gumline comfortably.",
  heroCta1: "Book Gum Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Gum Recession Treatment",
  introKicker: "UNDERSTANDING RECESSION",
  introHeading: "What Causes Gum Recession?",
  introParas: [
    "Gum recession occurs when gum tissue pulls back from the teeth, exposing the root surfaces. This can result from aggressive brushing, gum disease, genetics, teeth grinding, or misaligned teeth.",
    "Exposed roots are vulnerable to decay, sensitivity to hot and cold, and can make teeth appear longer than normal. Left untreated, recession can worsen and lead to tooth loss.",
    "Modern treatment options range from traditional gum grafting to the innovative Pinhole Surgical Technique, which corrects recession without incisions, sutures, or donor tissue in most cases.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "Pinhole Technique" },
    { icon: <Shield className="w-5 h-5" />, label: "Minimally Invasive" },
    { icon: <Heart className="w-5 h-5" />, label: "Fast Recovery" },
  ],
  subServicesKicker: "TREATMENT OPTIONS",
  subServicesHeading: "Gum Recession Treatments",
  subServicesBody: "We offer multiple approaches to restore your gumline.",
  subServices: [
    { title: "Gum Grafting", description: "Traditional tissue grafting to cover exposed roots using gum tissue from the palate or a donor source.", icon: <Shield className="w-5 h-5" /> },
    { title: "Pinhole Surgical Technique", description: "A scalpel-free, suture-free method that repositions existing gum tissue over exposed roots through a tiny pinhole.", icon: <Zap className="w-5 h-5" /> },
    { title: "Connective Tissue Graft", description: "A subepithelial graft using tissue from under the palate, providing excellent root coverage and aesthetic results.", icon: <Heart className="w-5 h-5" /> },
    { title: "Alloderm Graft", description: "Uses processed donor tissue instead of tissue from your own palate, reducing discomfort and healing time.", icon: <Users className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO EXPECT",
  processHeading: "Your Treatment Process",
  processBody: "We make gum recession treatment comfortable and predictable.",
  processSteps: [
    { number: "01", title: "Gum Assessment", description: "We measure recession levels and determine the cause to recommend the best treatment approach.", icon: <Shield className="w-5 h-5" /> },
    { number: "02", title: "Treatment Selection", description: "Choose between traditional grafting, Pinhole Technique, or Alloderm based on your needs.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Procedure Day", description: "Your chosen treatment is performed with local anesthesia and optional sedation for comfort.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Healing & Follow-Up", description: "Most patients heal within 1–2 weeks. We monitor your progress to ensure optimal results.", icon: <Users className="w-5 h-5" /> },
  ],
  faqHeading: "Gum Recession FAQs",
  faqs: [
    { question: "Can receding gums grow back?", answer: "Gum tissue doesn't regenerate on its own, but treatments like gum grafting and the Pinhole Technique can effectively restore the gumline." },
    { question: "Is the Pinhole Technique painful?", answer: "Most patients experience minimal discomfort. The procedure is less invasive than traditional grafting, with no incisions or sutures." },
    { question: "How much does gum recession treatment cost?", answer: "Costs range from $600–$3,000 per area depending on the technique. Many insurance plans cover periodontal procedures, and we offer financing." },
    { question: "How can I prevent further gum recession?", answer: "Use a soft-bristled toothbrush, avoid aggressive brushing, treat gum disease early, wear a nightguard if you grind, and maintain regular dental visits." },
  ],
  reviewsKicker: "PATIENT STORIES",
  reviewsHeading: "Gum Treatment Success Stories",
  testimonials: [
    { quote: "The Pinhole Technique was amazing — no cutting, no stitches, and my gums look so much better. Recovery was incredibly fast.", name: "Diana L.", source: "Google Review" },
    { quote: "I was self-conscious about my receding gums for years. Smile Avenue restored my gumline and eliminated my sensitivity.", name: "Frank M.", source: "Google Review" },
    { quote: "The team explained every option and helped me choose the best treatment. My gums have never looked better.", name: "Carol S.", source: "Google Review" },
  ],
  ctaHeading: "Restore Your Gumline Today",
  ctaBody: "Schedule a gum recession consultation and explore your treatment options.",
};

export default () => <ServicePageTemplate data={data} />;
