import { Shield, Zap, Users, Heart, Scan, Syringe, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Tooth Extraction",
  serviceSlug: "tooth-extraction",
  metaTitle: "Tooth Extraction Katy, TX | Gentle Extractions | Smile Avenue",
  metaDescription: "Need a tooth extraction in Katy, TX? Gentle simple & surgical extractions, wisdom teeth removal. Sedation available. Call (281) 800-5008.",
  heroKicker: "GENTLE EXTRACTIONS IN KATY",
  heroHeading: "Tooth Extraction in Katy, TX",
  heroBody: "When a tooth can't be saved, a gentle, efficient extraction is the best path forward. Our Katy team makes the process comfortable with sedation options and expert technique.",
  heroCta1: "Book Extraction Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Tooth Extraction Photo",
  introKicker: "ABOUT TOOTH EXTRACTIONS", introHeading: "When Is Extraction Necessary?",
  introParas: [
    "Tooth extraction is recommended when a tooth is too damaged by decay or trauma to be restored, when severe gum disease has compromised the tooth's support, or when wisdom teeth are impacted or causing problems.",
    "Extractions are also sometimes needed for orthodontic treatment or to prepare for dentures or implants. Whatever the reason, our priority is your comfort and a smooth recovery.",
    "At Smile Avenue Katy, we use modern techniques and offer sedation options to ensure extractions are as comfortable as possible. Patients from Cinco Ranch, Firethorne, and Cross Creek Ranch trust us for gentle, expert care."
  ],
  trustBadges: [
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Approach" },
    { icon: <Shield className="w-5 h-5" />, label: "Sedation Available" },
    { icon: <Users className="w-5 h-5" />, label: "Trusted by 5,000+ Families" },
  ],
  subServicesKicker: "EXTRACTION SERVICES", subServicesHeading: "Extraction Types We Offer",
  subServicesBody: "We provide all types of extractions with expert care and sedation options.",
  subServices: [
    { title: "Simple Extraction", description: "For visible teeth that can be removed with standard instruments. Quick procedure with local anesthesia.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Surgical Extraction", description: "For teeth that are broken below the gumline or have complex root structures. May involve minor bone removal.", icon: <Syringe className="w-5 h-5" /> },
    { title: "Wisdom Teeth", description: "Removal of third molars that are impacted, partially erupted, or causing crowding and discomfort.", icon: <Shield className="w-5 h-5" /> },
    { title: "Post-Extraction Care", description: "Comprehensive aftercare instructions and follow-up to ensure smooth healing. Tooth replacement options discussed.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR EXTRACTION VISIT", processHeading: "What to Expect",
  processBody: "We prioritize your comfort from start to finish.",
  processSteps: [
    { number: "01", title: "Evaluation", description: "Digital X-rays reveal the tooth's root structure and position, allowing us to plan the safest approach.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Anesthesia & Sedation", description: "We numb the area completely. Sedation options (nitrous, oral, or IV) are available for added comfort.", icon: <Heart className="w-6 h-6" /> },
    { number: "03", title: "Gentle Removal", description: "Using precise technique and modern instruments, we remove the tooth as gently and efficiently as possible.", icon: <Syringe className="w-6 h-6" /> },
    { number: "04", title: "Recovery Instructions", description: "We provide detailed aftercare instructions and discuss tooth replacement options like implants or bridges.", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "Tooth Extraction FAQ",
  faqs: [
    { question: "How much does a tooth extraction cost in Katy, TX?", answer: "Simple extractions range from $150-$350 per tooth. Surgical extractions range from $250-$600. Wisdom teeth removal ranges from $300-$700 per tooth. Insurance typically covers medically necessary extractions." },
    { question: "Is tooth extraction painful?", answer: "The area is completely numbed before extraction, so you shouldn't feel pain — only pressure. Sedation options are available for additional comfort." },
    { question: "How long does recovery take?", answer: "Most patients recover within 3-7 days. Simple extractions heal faster than surgical ones. We provide detailed aftercare instructions to ensure smooth healing." },
    { question: "What are my tooth replacement options after extraction?", answer: "Options include dental implants, bridges, and partial dentures. We discuss the best options for your situation during your visit." },
    { question: "Can I drive home after an extraction?", answer: "If only local anesthesia was used, yes. If you received sedation (nitrous, oral, or IV), you'll need someone to drive you home." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Extraction Reviews",
  testimonials: [
    { quote: "Had two wisdom teeth removed and barely felt a thing. The sedation was perfect and recovery was much easier than I expected. Great team!", name: "Tyler S.", source: "Google Review" },
    { quote: "Needed an emergency extraction and they got me in the same day. Dr. Yahya was gentle and thorough. Minimal pain after and healing went great.", name: "Natalie K.", source: "Google Review" },
    { quote: "Was dreading getting a tooth pulled but the Katy team made it painless. They even discussed implant options before I left. So proactive!", name: "Omar F.", source: "Google Review" },
  ],
  ctaHeading: "Book Your Extraction Appointment",
  ctaBody: "Gentle, expert tooth extractions with sedation options at our Katy office.",
};

const ToothExtractionKaty = () => <ServicePageTemplate data={data} />;
export default ToothExtractionKaty;
