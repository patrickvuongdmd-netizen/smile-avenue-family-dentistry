import { Shield, Zap, Users, Star, Scan, Wrench, Smile } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dentures",
  serviceSlug: "dentures",
  metaTitle: "Dentures Katy, TX | Full & Partial Dentures | Smile Avenue",
  metaDescription: "Custom dentures in Katy, TX. Full dentures, partial dentures, implant-supported dentures & repairs. Call (281) 800-5008.",
  heroKicker: "CUSTOM DENTURES IN KATY",
  heroHeading: "Dentures in Katy, TX",
  heroBody: "Missing teeth shouldn't hold you back. Our custom-crafted dentures restore your smile, your confidence, and your ability to eat the foods you love — comfortably and naturally.",
  heroCta1: "Book Denture Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Dentures Photo",
  introKicker: "ABOUT DENTURES", introHeading: "What Are Dentures?",
  introParas: [
    "Dentures are removable prosthetic devices designed to replace missing teeth and surrounding tissue. Modern dentures are more comfortable, natural-looking, and functional than ever before.",
    "Whether you're missing a few teeth or an entire arch, we offer solutions tailored to your needs — from traditional full and partial dentures to implant-supported options that eliminate slipping and adhesives.",
    "At Smile Avenue Katy, we use digital impressions and work with premium dental labs to ensure every denture fits precisely and looks natural. Patients from Cinco Ranch, Firethorne, and Cross Creek Ranch trust us for comfortable, beautiful dentures."
  ],
  trustBadges: [
    { icon: <Smile className="w-5 h-5" />, label: "Natural-Looking" },
    { icon: <Shield className="w-5 h-5" />, label: "Precision Fit" },
    { icon: <Users className="w-5 h-5" />, label: "Trusted by 5,000+ Families" },
  ],
  subServicesKicker: "DENTURE OPTIONS", subServicesHeading: "Denture Solutions We Offer",
  subServicesBody: "We provide the right denture solution for every patient's needs and budget.",
  subServices: [
    { title: "Full Dentures", description: "Complete upper or lower dentures that replace an entire arch of missing teeth. Custom-fitted for comfort and natural appearance.", icon: <Smile className="w-5 h-5" /> },
    { title: "Partial Dentures", description: "Replace several missing teeth while preserving your remaining natural teeth. Metal or flexible framework options available.", icon: <Star className="w-5 h-5" /> },
    { title: "Implant-Supported Dentures", description: "Snap-in dentures anchored by dental implants for superior stability — no slipping, no adhesives, no embarrassment.", icon: <Zap className="w-5 h-5" /> },
    { title: "Denture Repair", description: "Quick repairs for cracked, chipped, or broken dentures. We also offer relines and adjustments for improved fit.", icon: <Wrench className="w-5 h-5" /> },
  ],
  processKicker: "YOUR DENTURE JOURNEY", processHeading: "What to Expect",
  processBody: "We take a thorough, personalized approach to ensure your dentures fit perfectly.",
  processSteps: [
    { number: "01", title: "Consultation", description: "We examine your mouth, discuss your goals, and recommend the best denture solution for your needs.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Impressions", description: "We take precise digital or traditional impressions to ensure your dentures fit comfortably and function properly.", icon: <Star className="w-6 h-6" /> },
    { number: "03", title: "Try-In", description: "Before finalizing, you try a wax model to verify the fit, bite, and appearance. Adjustments are made as needed.", icon: <Smile className="w-6 h-6" /> },
    { number: "04", title: "Final Delivery", description: "Your finished dentures are delivered and adjusted for a perfect fit. We provide care instructions and schedule follow-ups.", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "Denture FAQ",
  faqs: [
    { question: "How much do dentures cost in Katy, TX?", answer: "Full dentures range from $1,500-$3,500 per arch. Partial dentures start around $1,200. Implant-supported dentures range from $5,000-$15,000. We offer CareCredit and Sunbit financing." },
    { question: "How long do dentures last?", answer: "With proper care, dentures typically last 5-10 years before needing replacement. Relines may be needed every 1-2 years as your jawbone naturally changes shape." },
    { question: "Can I eat normally with dentures?", answer: "Most patients adapt to eating with dentures within a few weeks. Start with soft foods and gradually reintroduce harder foods. Implant-supported dentures allow you to eat almost anything." },
    { question: "Do you offer same-day dentures?", answer: "We offer immediate dentures that are placed the same day as extractions so you're never without teeth. These are later replaced with your permanent dentures after healing." },
    { question: "How do I care for my dentures?", answer: "Remove and rinse after eating, brush daily with a soft denture brush, soak overnight in denture solution, and visit us regularly for checkups and adjustments." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Denture Reviews",
  testimonials: [
    { quote: "Got implant-supported dentures and it's like having real teeth again. No more adhesive, no slipping. I can eat anything. Life-changing!", name: "Barbara W.", source: "Google Review" },
    { quote: "My new partial denture from Smile Avenue Katy fits perfectly and looks so natural. Nobody can tell which teeth are real and which aren't.", name: "Henry L.", source: "Google Review" },
    { quote: "The team took extra time to make sure my full dentures looked natural and felt comfortable. The fit is excellent and I'm smiling again!", name: "Dolores C.", source: "Google Review" },
  ],
  ctaHeading: "Restore Your Smile with Custom Dentures",
  ctaBody: "Book a denture consultation at our Katy office and explore your tooth replacement options.",
};

const DenturesKaty = () => <ServicePageTemplate data={data} />;
export default DenturesKaty;
