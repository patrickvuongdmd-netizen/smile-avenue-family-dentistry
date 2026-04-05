import { Link } from "react-router-dom";
import { Shield, Star, Users, Sun, Home, Heart, Sparkles } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Teeth Whitening",
  serviceSlug: "teeth-whitening",
  videoId: "QRpwLPBJkS0",
  metaTitle: "Teeth Whitening Cypress, TX | Professional Whitening | Smile Avenue",
  metaDescription: "Teeth whitening in Cypress, TX — in-office Zoom whitening & custom take-home trays. Up to 8 shades brighter in one visit. Book today. Call (832) 648-1756.",
  heroKicker: "PROFESSIONAL WHITENING IN CYPRESS",
  heroHeading: "Teeth Whitening in Cypress, TX",
  heroBody: "Years of coffee, wine, tea, and everyday life can leave teeth looking dull. Professional whitening at Smile Avenue Cypress delivers dramatically brighter results safely and effectively. Walk out several shades whiter in just one visit.",
  heroCta1: "Book Whitening Appointment",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Teeth Whitening",
  heroValueProps: ["Up to 8 shades brighter in one visit", "In-office Zoom whitening available", "Custom take-home trays for maintenance", "Safe for sensitive teeth", "0% financing available"],
  introKicker: "ABOUT PROFESSIONAL WHITENING",
  introHeading: "Why Professional Whitening?",
  introParas: [
    "Professional whitening uses dentist-grade bleaching agents significantly stronger than store-bought products. We offer in-office whitening for immediate results and custom take-home kits for gradual brightening — both tailored to your sensitivity level and goals.",
    <>Patients from Fairfield, Bridgeland, and Cypress trust us for safe whitening that protects enamel. Whitening pairs beautifully with <Link to="/cypress-tx/veneers" className="text-primary hover:underline">porcelain veneers</Link> or a full <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic dentistry</Link> makeover. For the best results, start with a <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">professional dental cleaning</Link> before your whitening appointment.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Sun className="w-5 h-5" />, label: "Same-Day Results" },
    { icon: <Users className="w-5 h-5" />, label: "Sensitivity Management" },
  ],
  subServicesKicker: "WHY SMILE AVENUE",
  subServicesHeading: "Why Choose Us for Whitening",
  subServicesBody: "Safe, dentist-supervised whitening with customized sensitivity management.",
  subServices: [
    { title: "Dentist-Supervised Safety", description: "Every whitening treatment is performed or overseen by a licensed dentist, ensuring your enamel and gums are protected throughout the process.", icon: <Shield className="w-5 h-5" /> },
    { title: "Custom Sensitivity Management", description: "We tailor every treatment to your sensitivity level using desensitizing agents and adjusted concentrations for a comfortable experience.", icon: <Heart className="w-5 h-5" /> },
    { title: "Immediate In-Office Results", description: "Walk in with stained teeth, walk out several shades brighter — all in about one hour.", icon: <Sun className="w-5 h-5" /> },
    { title: "Professional Take-Home Option", description: "Custom-fitted trays with professional-grade gel for gradual brightening on your own schedule.", icon: <Home className="w-5 h-5" /> },
  ],
  processKicker: "YOUR WHITENING VISIT",
  processHeading: "What to Expect",
  processBody: "A simple, comfortable process for a dramatically brighter smile.",
  processSteps: [
    { number: "01", title: "Consultation & Shade Assessment", description: "We evaluate your current shade and discuss your whitening goals to determine the best approach for your teeth.", icon: <Star className="w-5 h-5" /> },
    { number: "02", title: "Gum Protection & Gel Application", description: "For in-office whitening, we protect your gums and soft tissue, then apply the professional whitening gel.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Whitening Activation", description: "The clinical-grade gel is activated and works to break down years of staining. You relax while the formula does its work.", icon: <Sparkles className="w-5 h-5" /> },
    { number: "04", title: "Results Review & Maintenance Tips", description: "We reveal your new brighter smile and provide tips on maintaining your results long-term.", icon: <Sun className="w-5 h-5" /> },
  ],
  faqHeading: "Teeth Whitening Questions",
  faqs: [
    { question: "How much does whitening cost?", answer: "We offer multiple whitening options at different price points. Call (832) 648-1756 for current pricing. CareCredit financing and our membership plan discounts are available." },
    { question: "How long do results last?", answer: "Results typically last 6 months to 2 years depending on your diet and habits. Avoiding coffee, wine, and tobacco, along with periodic touch-ups, will extend your results." },
    { question: "Does whitening damage enamel?", answer: "No. Professional whitening under dental supervision is safe for your enamel. We use controlled concentrations and protective measures throughout the treatment." },
    { question: "Will whitening work on crowns or veneers?", answer: "Whitening only affects natural tooth enamel. We recommend whitening before getting restorations so we can match them to your new, brighter shade." },
    { question: "What about sensitive teeth?", answer: "We customize every treatment for sensitivity using desensitizing agents and adjusted gel concentrations. Most sensitive patients tolerate our protocols very well." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My teeth were yellow from years of coffee. One in-office whitening session at Smile Avenue and they're literally glowing. I wish I'd done this sooner!", name: "Lauren H.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "I have sensitive teeth and was worried about whitening. They used a gentle formula and I had zero discomfort. My smile looks amazing now.", name: "Chris B.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "Got the take-home trays before my wedding. Two weeks later my smile was camera-ready. The custom trays fit perfectly and were so easy to use.", name: "Emily R.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "Ready for a Brighter Smile?",
  ctaBody: "Professional whitening at Smile Avenue Cypress. Walk out several shades brighter in just one visit.",
};

const TeethWhiteningCypress = () => <ServicePageTemplate data={data} />;
export default TeethWhiteningCypress;
