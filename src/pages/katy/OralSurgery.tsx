import { Shield, Zap, Users, Scan, Syringe, Stethoscope, Star } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Oral Surgery",
  serviceSlug: "oral-surgery",
  metaTitle: "Oral Surgery Katy, TX | Wisdom Teeth & Bone Grafting | Smile Avenue",
  metaDescription: "Oral surgery in Katy, TX. Wisdom teeth removal, bone grafting, sinus lifts & surgical extractions. IV sedation available. Call (281) 800-5008.",
  heroKicker: "ORAL SURGERY IN KATY",
  heroHeading: "Oral Surgery in Katy, TX",
  heroBody: "From wisdom teeth removal to bone grafting and sinus lifts, our Katy surgical team delivers expert care with advanced technology and comfortable sedation options.",
  heroCta1: "Book Surgical Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Oral Surgery Photo",
  introKicker: "ABOUT ORAL SURGERY", introHeading: "When Is Oral Surgery Needed?",
  introParas: [
    "Oral surgery encompasses a range of surgical procedures performed in the mouth and jaw. Common reasons include impacted wisdom teeth, preparation for dental implants, bone grafting, and treatment of jaw-related conditions.",
    "At Smile Avenue Katy, we perform many oral surgical procedures in-office using 3D imaging for precise planning and multiple sedation options for patient comfort.",
    "Our team serves patients from Cinco Ranch, Firethorne, Cross Creek Ranch, and the greater Westheimer Parkway area. We focus on minimally invasive techniques for faster healing and better outcomes."
  ],
  trustBadges: [
    { icon: <Shield className="w-5 h-5" />, label: "IV Sedation Available" },
    { icon: <Zap className="w-5 h-5" />, label: "3D-Guided Surgery" },
    { icon: <Users className="w-5 h-5" />, label: "Expert Surgical Team" },
  ],
  subServicesKicker: "SURGICAL SERVICES", subServicesHeading: "Procedures We Perform",
  subServicesBody: "We offer a comprehensive range of oral surgical procedures in our comfortable Katy office.",
  subServices: [
    { title: "Wisdom Teeth Removal", description: "Safe, comfortable removal of impacted or problematic wisdom teeth. IV sedation available for a relaxed experience.", icon: <Syringe className="w-5 h-5" /> },
    { title: "Bone Grafting", description: "Build up jawbone volume to support dental implants. We use advanced grafting materials for predictable bone regeneration.", icon: <Shield className="w-5 h-5" /> },
    { title: "Sinus Lift", description: "Augment the sinus floor to create sufficient bone height for upper jaw implant placement.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Surgical Extractions", description: "Removal of teeth with complex root structures, broken teeth, or those that cannot be removed with simple extraction.", icon: <Star className="w-5 h-5" /> },
  ],
  processKicker: "YOUR SURGICAL EXPERIENCE", processHeading: "What to Expect",
  processBody: "We prioritize safety, comfort, and predictable outcomes for every surgical procedure.",
  processSteps: [
    { number: "01", title: "3D Imaging & Planning", description: "CBCT 3D scans provide a complete view of the surgical area for precise, safe treatment planning.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Sedation & Comfort", description: "Choose from nitrous oxide, oral sedation, or IV sedation for a relaxed, anxiety-free experience.", icon: <Syringe className="w-6 h-6" /> },
    { number: "03", title: "Minimally Invasive Surgery", description: "We use advanced techniques and instrumentation to minimize tissue disruption and promote faster healing.", icon: <Stethoscope className="w-6 h-6" /> },
    { number: "04", title: "Recovery Support", description: "Detailed post-op instructions, prescribed medications, and follow-up appointments ensure a smooth recovery.", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "Oral Surgery FAQ",
  faqs: [
    { question: "How much does oral surgery cost in Katy, TX?", answer: "Costs vary by procedure: wisdom teeth removal ranges from $300-$700 per tooth, bone grafting from $500-$3,000, and sinus lifts from $1,500-$3,000. Insurance often covers medically necessary procedures. We offer financing." },
    { question: "Is oral surgery painful?", answer: "All procedures are performed under anesthesia and sedation. You should not feel pain during surgery. Post-operative discomfort is managed with prescribed medications." },
    { question: "How long is recovery after oral surgery?", answer: "Recovery varies by procedure: wisdom teeth 3-7 days, bone grafting 2-4 weeks for initial healing. We provide detailed recovery timelines for each procedure." },
    { question: "Do you offer IV sedation?", answer: "Yes. We offer nitrous oxide, oral sedation, and IV sedation. Our team will recommend the appropriate level based on your procedure and comfort needs." },
    { question: "When should wisdom teeth be removed?", answer: "We typically recommend removal between ages 17-25 when roots aren't fully formed. However, wisdom teeth can be removed at any age if they're causing problems." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Oral Surgery Reviews",
  testimonials: [
    { quote: "Had all four wisdom teeth out under IV sedation at the Katy office. I literally don't remember anything. Recovery was smooth and fast.", name: "Brandon H.", source: "Google Review" },
    { quote: "Needed bone grafting before implants. The procedure was comfortable and the team was so reassuring. Healing went perfectly.", name: "Linda S.", source: "Google Review" },
    { quote: "Dr. Vuong performed a sinus lift and implant placement. His expertise was evident from the planning through recovery. Exceptional care.", name: "Charles D.", source: "Google Review" },
  ],
  ctaHeading: "Schedule Your Surgical Consultation",
  ctaBody: "Expert oral surgery with sedation options at our Katy office. Book your consultation today.",
};

const OralSurgeryKaty = () => <ServicePageTemplate data={data} />;
export default OralSurgeryKaty;
