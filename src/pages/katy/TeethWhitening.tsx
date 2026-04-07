import { Sparkles, Shield, Sun, Clock, Eye, Star, Heart } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Teeth Whitening",
  serviceSlug: "teeth-whitening",
  videoId: "QRpwLPBJkS0",
  metaTitle: "Teeth Whitening Katy, TX | Professional Whitening | Smile Avenue",
  metaDescription: "Teeth whitening in Katy, TX — in-office Zoom whitening & custom take-home trays. Up to 8 shades brighter in one visit. Book today. Call (281) 800-5008.",
  heroKicker: "PROFESSIONAL WHITENING IN KATY",
  heroHeading: "Teeth Whitening in Katy, TX",
  heroBody: "Professional whitening at Smile Avenue Katy delivers dramatically brighter results safely in a fraction of the time of store products. Walk out several shades whiter in one visit.",
  heroCta1: "Book Whitening Appointment",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Teeth Whitening Photo",
  heroValueProps: ["Up to 8 shades brighter in one visit", "In-office Zoom whitening available", "Custom take-home trays for maintenance", "Safe for sensitive teeth", "0% financing available"],
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
    { question: "Is teeth whitening safe for my enamel?", answer: "Yes, professional whitening is safe for enamel when supervised by a dentist. Over-the-counter products can cause damage if overused, which is why we recommend professional treatment for the safest and most effective results." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My teeth were several shades whiter after one in-office session. The results were immediate and dramatic. So much better than the strips I'd been using for years.", name: "Sarah L.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "I have sensitive teeth and was worried about whitening. They customized the treatment perfectly — no sensitivity at all and my teeth look amazing.", name: "Kevin D.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "The take-home trays are so convenient. I whiten while watching TV and the results keep getting better. Best investment in my smile.", name: "Rachel W.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  locationFaqs: [
    { question: "Where can I get professional teeth whitening in Katy, TX?", answer: "Smile Avenue Family Dentistry at 21860 Westheimer Pkwy #110, Katy, TX 77450 offers in-office Zoom whitening and custom take-home whitening trays for safe, dramatic results." },
    { question: "How much does teeth whitening cost in Katy?", answer: "We offer multiple whitening options at different price points — professional whitening is more affordable than most patients expect. Call (281) 800-5008 for current pricing and financing options." },
    { question: "How many shades whiter can my teeth get in Katy?", answer: "Professional in-office whitening at our Katy office can brighten teeth up to 8 shades in a single one-hour visit — far beyond store-bought strips or whitening toothpastes." },
    { question: "Is professional teeth whitening safe?", answer: "Yes. Professional whitening under dental supervision is safe for enamel. We customize concentration and duration based on your sensitivity level for a comfortable experience." },
    { question: "Do you offer take-home whitening trays in Katy?", answer: "Yes. We fabricate custom-fitted trays from digital impressions paired with professional-grade gel. Many patients use take-home trays for ongoing maintenance after in-office whitening." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Westheimer Parkway delivers professional teeth whitening to Katy patients who want dramatically brighter results — safely, in a fraction of the time store-bought products take. Our professional-grade formulas are significantly stronger than anything available over the counter, delivering up to 8 shades brighter in one hour.",
    "We offer two whitening pathways: in-office Zoom whitening for immediate same-day results, and custom-fitted take-home trays with professional gel for gradual brightening on your schedule. Many Katy patients combine both — in-office treatment for dramatic initial results followed by periodic at-home maintenance.",
    "Sensitivity is the most common concern patients have about whitening. Our team customizes every treatment based on your individual sensitivity level, using desensitizing agents and adjusted gel concentrations for a comfortable experience. Most patients with sensitivity history are pleasantly surprised.",
    "For patients from Cinco Ranch, Cross Creek Ranch, and Firethorne considering a smile makeover, whitening is the perfect first step before veneers or bonding — we brighten your natural teeth first, then match restorations to your new shade for a cohesive, stunning result.",
  ],
  ctaHeading: "Brighten Your Smile Today",
  ctaBody: "Schedule your professional whitening appointment and see the difference dentist-supervised care makes.",
};

const TeethWhiteningKaty = () => <ServicePageTemplate data={data} />;
export default TeethWhiteningKaty;
