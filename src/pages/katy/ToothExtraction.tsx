import { Shield, Zap, Heart, Scan, Syringe, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Tooth Extraction",
  serviceSlug: "tooth-extraction",
  videoId: "1nicifZjXoA",
  metaTitle: "Tooth Extraction Katy, TX | Gentle & Safe Extractions | Smile Avenue",
  metaDescription: "Tooth extraction in Katy, TX — wisdom teeth, simple & surgical extractions with sedation options. Same-day appointments available. Call (281) 800-5008.",
  heroKicker: "GENTLE EXTRACTIONS IN KATY",
  heroHeading: "Tooth Extraction in Katy, TX",
  heroBody: "When extraction is necessary, Smile Avenue Katy performs gentle procedures with sedation options. We discuss replacement options to restore your smile.",
  heroCta1: "Book Extraction Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Tooth Extraction Photo",
  heroValueProps: ["Gentle technique for minimal discomfort", "Sedation options available", "Same-day emergency extractions", "Tooth replacement options discussed at visit", "Most insurance accepted · 0% financing"],
  introKicker: "ABOUT TOOTH EXTRACTIONS", introHeading: "When Is Extraction Necessary?",
  introParas: [
    "Extractions are needed for severely decayed teeth, cracked or fractured teeth, impacted wisdom teeth, overcrowded teeth, and failed root canals. Both simple and surgical options are available.",
    "Our priority is your comfort and a smooth recovery. We use modern techniques and offer sedation options to ensure extractions are as comfortable as possible.",
    "Patients from Cinco Ranch, Firethorne, Cross Creek Ranch, Elyson, and the Westheimer Parkway area trust Smile Avenue Katy for gentle, expert extraction care with same-day availability."
  ],
  trustBadges: [
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Technique" },
    { icon: <Shield className="w-5 h-5" />, label: "Sedation Options" },
    { icon: <Zap className="w-5 h-5" />, label: "Same-Day Available" },
    { icon: <Stethoscope className="w-5 h-5" />, label: "Replacement Planning" },
  ],
  subServicesKicker: "EXTRACTION SERVICES", subServicesHeading: "Extraction Types We Offer",
  subServicesBody: "We provide all types of extractions with expert care and sedation options.",
  subServices: [
    { title: "Simple Extraction", description: "For visible teeth that can be removed with standard instruments. Quick procedure with local anesthesia.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Surgical Extraction", description: "For teeth broken below the gumline or with complex root structures. May involve minor bone removal.", icon: <Syringe className="w-5 h-5" /> },
    { title: "Wisdom Teeth", description: "Removal of third molars that are impacted, partially erupted, or causing crowding and discomfort. Simple and surgical options.", icon: <Shield className="w-5 h-5" /> },
    { title: "Post-Extraction Care", description: "Comprehensive aftercare instructions and follow-up. Tooth replacement options (implants, bridges, dentures) discussed.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR EXTRACTION VISIT", processHeading: "What to Expect",
  processBody: "We prioritize your comfort from start to finish.",
  processSteps: [
    { number: "01", title: "Evaluation with X-Rays", description: "Digital X-rays reveal the tooth's root structure and position, allowing us to plan the safest approach.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Anesthesia & Sedation", description: "We numb the area completely. Sedation options (nitrous, oral, or IV) are available for added comfort.", icon: <Heart className="w-6 h-6" /> },
    { number: "03", title: "Extraction", description: "Using precise technique and modern instruments, we remove the tooth as gently and efficiently as possible.", icon: <Syringe className="w-6 h-6" /> },
    { number: "04", title: "Post-Op Care", description: "Detailed aftercare instructions are provided for smooth recovery.", icon: <Shield className="w-6 h-6" /> },
    { number: "05", title: "Replacement Planning", description: "We discuss tooth replacement options like implants, bridges, or dentures to restore your smile.", icon: <Stethoscope className="w-6 h-6" /> },
  ],
  faqHeading: "Tooth Extraction FAQ",
  faqs: [
    { question: "How much does a tooth extraction cost in Katy?", answer: "Costs vary by complexity. Insurance covers medically necessary extractions. CareCredit financing is available." },
    { question: "Does a tooth extraction hurt?", answer: "No. The area is completely numbed with anesthesia, and sedation options are available for additional comfort." },
    { question: "How long is recovery?", answer: "Most patients recover within 3-7 days. Simple extractions heal faster than surgical ones." },
    { question: "How do I replace an extracted tooth?", answer: "We discuss implants, bridges, and dentures at your visit so you can plan ahead for restoring your smile." },
    { question: "Do you remove wisdom teeth?", answer: "Yes. We perform both simple and surgical wisdom tooth extractions with sedation available." },
    { question: "What are my options after a tooth extraction?", answer: "After extraction, you can replace the tooth with a dental implant (most recommended for long-term health), a dental bridge, or a partial denture. We discuss all options during your consultation so you can make an informed decision." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Extraction Reviews",
  testimonials: [
    { quote: "Had two wisdom teeth removed and barely felt a thing. The sedation was perfect and recovery was much easier than I expected.", name: "Tyler S.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "Needed an emergency extraction and they got me in the same day. Dr. Bilal was gentle and thorough. Minimal pain after.", name: "Natalie K.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "Was dreading getting a tooth pulled but the Katy team made it painless. They even discussed implant options before I left.", name: "Omar F.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Book Your Extraction Appointment",
  ctaBody: "Gentle, expert tooth extractions with sedation options at our Katy office.",
};

const ToothExtractionKaty = () => <ServicePageTemplate data={data} />;
export default ToothExtractionKaty;
