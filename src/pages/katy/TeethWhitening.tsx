import { Sparkles, Shield, Users, Sun, Clock, Star, Eye } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Teeth Whitening",
  serviceSlug: "teeth-whitening",
  metaTitle: "Teeth Whitening Katy, TX | Professional Whitening | Smile Avenue",
  metaDescription: "Professional teeth whitening in Katy, TX. In-office and take-home options. Up to 8 shades brighter. Call (281) 800-5008 to book.",
  heroKicker: "PROFESSIONAL WHITENING IN KATY",
  heroHeading: "Teeth Whitening in Katy, TX",
  heroBody: "Stained or yellowed teeth can hold back your confidence. Our professional whitening treatments deliver dramatically brighter results in a single visit — safely and comfortably.",
  heroCta1: "Book Whitening Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Teeth Whitening Photo",
  introKicker: "ABOUT TEETH WHITENING", introHeading: "Why Professional Whitening?",
  introParas: [
    "Over-the-counter whitening strips and toothpastes can only do so much. Professional whitening uses clinical-grade formulas applied under controlled conditions for results that are faster, more even, and longer-lasting.",
    "At Smile Avenue Katy, we offer both in-office whitening for instant results and custom take-home trays for gradual brightening on your schedule. We also have solutions specifically designed for patients with sensitive teeth.",
    "Whether you're preparing for a special event or simply want to refresh your smile, our Katy team serving Cinco Ranch, Firethorne, and Cross Creek Ranch will help you achieve the bright, confident smile you deserve."
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "Up to 8 Shades Brighter" },
    { icon: <Shield className="w-5 h-5" />, label: "Safe & Gentle" },
    { icon: <Clock className="w-5 h-5" />, label: "Results in 1 Visit" },
  ],
  subServicesKicker: "WHITENING OPTIONS", subServicesHeading: "Whitening Treatments We Offer",
  subServicesBody: "We have a whitening solution for every lifestyle and sensitivity level.",
  subServices: [
    { title: "In-Office Whitening", description: "Our most popular option — achieve dramatic results in about one hour with professional-grade whitening gel and LED activation.", icon: <Sun className="w-5 h-5" /> },
    { title: "Take-Home Trays", description: "Custom-fitted trays with professional whitening gel so you can brighten your smile gradually from the comfort of home.", icon: <Star className="w-5 h-5" /> },
    { title: "Touch-Up Treatments", description: "Maintain your bright smile with periodic touch-up sessions, perfect for coffee and wine lovers.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Whitening for Sensitive Teeth", description: "Specially formulated low-sensitivity whitening options for patients who experience discomfort with standard treatments.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "YOUR WHITENING VISIT", processHeading: "What to Expect",
  processBody: "Professional whitening is quick, comfortable, and delivers immediate results.",
  processSteps: [
    { number: "01", title: "Shade Assessment", description: "We evaluate your current shade and discuss your whitening goals to determine the best approach.", icon: <Eye className="w-6 h-6" /> },
    { number: "02", title: "Prep & Protection", description: "We protect your gums and soft tissue before applying the professional whitening gel to your teeth.", icon: <Shield className="w-6 h-6" /> },
    { number: "03", title: "Whitening Application", description: "The clinical-grade gel is applied and activated. You relax while the formula works its magic.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "04", title: "Reveal Results", description: "We remove the gel, rinse, and reveal your new brighter smile — up to 8 shades lighter.", icon: <Star className="w-6 h-6" /> },
  ],
  faqHeading: "Teeth Whitening FAQ",
  faqs: [
    { question: "How much does teeth whitening cost in Katy, TX?", answer: "In-office professional whitening ranges from $400-$800. Take-home custom trays are typically $250-$400. We offer financing through CareCredit and Sunbit." },
    { question: "How long does professional whitening last?", answer: "Results typically last 1-3 years depending on your habits. Avoiding staining foods and beverages and using touch-up trays can extend your results." },
    { question: "Is teeth whitening safe?", answer: "Yes. Professional whitening under dental supervision is safe for your enamel. We customize the treatment to minimize any sensitivity." },
    { question: "Will whitening work on crowns or veneers?", answer: "Whitening only works on natural tooth structure. If you have visible restorations, we may recommend replacing them after whitening to match your new shade." },
    { question: "Can I whiten my teeth if I have sensitive teeth?", answer: "Absolutely. We offer specially formulated low-sensitivity options and can adjust the treatment protocol to ensure your comfort." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Whitening Reviews",
  testimonials: [
    { quote: "Got in-office whitening before my wedding and my teeth looked amazing in every photo. Quick, painless, and the results were stunning!", name: "Jessica H.", source: "Google Review" },
    { quote: "I've tried every whitening strip on the market. One professional session at Smile Avenue Katy blew them all away. Should have done this years ago.", name: "Marcus D.", source: "Google Review" },
    { quote: "I have sensitive teeth and was worried about whitening. They used a gentle formula and I had zero discomfort. My smile is so much brighter!", name: "Angela P.", source: "Google Review" },
  ],
  ctaHeading: "Get a Brighter Smile Today",
  ctaBody: "Book a professional whitening appointment at our Katy office and see the difference in just one visit.",
};

const TeethWhiteningKaty = () => <ServicePageTemplate data={data} />;
export default TeethWhiteningKaty;
