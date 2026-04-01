import { Sparkles, Shield, Sun, Clock, Eye, Star, Heart } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Teeth Whitening",
  serviceSlug: "teeth-whitening",
  metaTitle: "Teeth Whitening Katy, TX | Professional Whitening | Smile Avenue",
  metaDescription: "Teeth whitening in Katy, TX — in-office Zoom whitening & custom take-home trays. Up to 8 shades brighter in one visit. Book today. Call (281) 800-5008.",
  heroKicker: "PROFESSIONAL WHITENING IN KATY",
  heroHeading: "Teeth Whitening in Katy, TX",
  heroBody: "Professional whitening at Smile Avenue Katy delivers dramatically brighter results safely in a fraction of the time of store products. Walk out several shades whiter in one visit.",
  heroCta1: "Book Whitening Appointment",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Teeth Whitening Photo",
  introKicker: "BRIGHTER SMILE, SAFELY",
  introHeading: "Professional Teeth Whitening",
  introParas: [
    "Years of coffee, tea, wine, and everyday wear can dull even the healthiest smile. Professional teeth whitening at Smile Avenue Katy uses dentist-grade formulas that deliver dramatic results safely — far beyond what store-bought strips and toothpastes can achieve.",
    "We offer both in-office whitening for immediate results and custom take-home trays for gradual brightening at your convenience. Our team customizes every treatment for your sensitivity level and desired shade. Families across Cinco Ranch, Cross Creek Ranch, and Cane Island trust us for safe, stunning whitening results.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Sun className="w-5 h-5" />, label: "Professional-Grade Results" },
    { icon: <Shield className="w-5 h-5" />, label: "Dentist-Supervised Safety" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Whitening",
  subServicesBody: "Safe, effective whitening with customized care.",
  subServices: [
    { title: "Dentist-Supervised Safety", description: "Professional whitening is monitored by our dental team, protecting your enamel and gums throughout the process.", icon: <Shield className="w-5 h-5" /> },
    { title: "Custom Sensitivity Management", description: "We customize whitening strength and technique based on your sensitivity level for a comfortable experience.", icon: <Heart className="w-5 h-5" /> },
    { title: "Immediate In-Office Results", description: "Walk out several shades whiter in a single visit with our professional in-office whitening treatment.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Take-Home Option Available", description: "Custom-fitted trays and professional whitening gel for gradual brightening on your own schedule.", icon: <Clock className="w-5 h-5" /> },
  ],
  processKicker: "THE WHITENING PROCESS",
  processHeading: "What to Expect",
  processBody: "Simple, fast, and effective.",
  processSteps: [
    { number: "01", title: "Shade Assessment", description: "We evaluate your current shade, discuss your whitening goals, and recommend the best approach for your teeth.", icon: <Eye className="w-5 h-5" /> },
    { number: "02", title: "Treatment", description: "In-office: professional gel applied and activated for dramatic same-day results. Or custom take-home trays fabricated for at-home use.", icon: <Sparkles className="w-5 h-5" /> },
    { number: "03", title: "Results & Maintenance", description: "Review your stunning results and receive maintenance tips to keep your smile bright for months to come.", icon: <Sun className="w-5 h-5" /> },
  ],
  faqHeading: "Teeth Whitening Questions",
  faqs: [
    { question: "How much does whitening cost?", answer: "We offer multiple whitening options at different price points. Call us for current pricing. Whitening is often more affordable than patients expect." },
    { question: "How long do results last?", answer: "Professional whitening results typically last 6 months to 2 years depending on diet and habits. Touch-up treatments and take-home trays help maintain your bright smile." },
    { question: "Will whitening damage my enamel?", answer: "No — professional whitening is safe under dental supervision. We use proven formulas and customize treatment to protect your enamel and minimize sensitivity." },
    { question: "Does whitening work on crowns and veneers?", answer: "Whitening only affects natural tooth enamel. Crowns, veneers, and bonding won't change color. We'll discuss this during your consultation if you have restorations." },
    { question: "What if I have sensitive teeth?", answer: "We customize whitening treatments for sensitivity — adjusting concentration, application time, and providing desensitizing products for a comfortable experience." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My teeth were several shades whiter after one in-office session. The results were immediate and dramatic. So much better than the strips I'd been using for years.", name: "Sarah L.", source: "Google Review" },
    { quote: "I have sensitive teeth and was worried about whitening. They customized the treatment perfectly — no sensitivity at all and my teeth look amazing.", name: "Kevin D.", source: "Google Review" },
    { quote: "The take-home trays are so convenient. I whiten while watching TV and the results keep getting better. Best investment in my smile.", name: "Rachel W.", source: "Google Review" },
  ],
  ctaHeading: "Brighten Your Smile Today",
  ctaBody: "Schedule your professional whitening appointment and see the difference dentist-supervised care makes.",
};

const TeethWhiteningKaty = () => <ServicePageTemplate data={data} />;
export default TeethWhiteningKaty;
