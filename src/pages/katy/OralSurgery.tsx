import { Shield, Zap, Scan, Syringe, Stethoscope, Star } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Oral Surgery",
  serviceSlug: "oral-surgery",
  metaTitle: "Oral Surgery Katy, TX | Wisdom Teeth & Bone Grafting | Smile Avenue",
  metaDescription: "Oral surgery in Katy, TX — wisdom teeth removal, bone grafting & surgical extractions. IV sedation for comfort. Same-day available. Call (281) 800-5008.",
  heroKicker: "ORAL SURGERY IN KATY",
  heroHeading: "Oral Surgery in Katy, TX",
  heroBody: "Smile Avenue Katy provides in-office oral surgery including wisdom teeth removal, bone grafting, and surgical extractions with IV sedation for comfort.",
  heroCta1: "Book Surgical Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Oral Surgery Photo",
  heroValueProps: ["In-office surgery — no hospital visit needed", "IV sedation for complete comfort", "3D CBCT imaging for precise planning", "Wisdom teeth, bone grafting & more", "Most insurance accepted · 0% financing"],
  introKicker: "ABOUT ORAL SURGERY", introHeading: "When Is Oral Surgery Needed?",
  introParas: [
    "Oral surgery services include wisdom teeth removal, bone grafting for implant preparation, sinus lifts, surgical extractions, and soft tissue procedures. All performed in-office with IV sedation available — no hospital visits needed.",
    "At Smile Avenue Katy, we use 3D CBCT imaging for precise surgical planning and minimally invasive techniques for faster healing and better outcomes.",
    "Our team serves patients from Cinco Ranch, Firethorne, Cross Creek Ranch, Elyson, and the greater Katy area with comprehensive surgical care under one roof."
  ],
  trustBadges: [
    { icon: <Shield className="w-5 h-5" />, label: "IV Sedation Available" },
    { icon: <Scan className="w-5 h-5" />, label: "3D CBCT Imaging" },
    { icon: <Zap className="w-5 h-5" />, label: "All Procedures In-Office" },
    { icon: <Stethoscope className="w-5 h-5" />, label: "Comprehensive Treatment" },
  ],
  subServicesKicker: "SURGICAL SERVICES", subServicesHeading: "Procedures We Perform",
  subServicesBody: "We offer a comprehensive range of oral surgical procedures in our comfortable Katy office.",
  subServices: [
    { title: "Wisdom Teeth Removal", description: "Safe, comfortable removal of impacted or problematic wisdom teeth. IV sedation available for a relaxed experience.", icon: <Syringe className="w-5 h-5" /> },
    { title: "Bone Grafting", description: "Build up jawbone volume to support dental implants. Advanced grafting materials for predictable bone regeneration.", icon: <Shield className="w-5 h-5" /> },
    { title: "Sinus Lift", description: "Augment the sinus floor to create sufficient bone height for upper jaw implant placement.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Surgical Extractions", description: "Removal of teeth with complex root structures, broken teeth, or those requiring surgical access.", icon: <Star className="w-5 h-5" /> },
  ],
  processKicker: "YOUR SURGICAL EXPERIENCE", processHeading: "What to Expect",
  processBody: "We prioritize safety, comfort, and predictable outcomes for every surgical procedure.",
  processSteps: [
    { number: "01", title: "3D Consultation", description: "CBCT 3D scans provide a complete view of the surgical area for precise, safe treatment planning.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Surgical Planning", description: "We create a detailed surgical plan and discuss sedation options, timeline, and recovery expectations.", icon: <Star className="w-6 h-6" /> },
    { number: "03", title: "Procedure Under Sedation", description: "Your procedure is performed with IV sedation for maximum comfort. Our team monitors you continuously.", icon: <Syringe className="w-6 h-6" /> },
    { number: "04", title: "Post-Op Care", description: "Detailed post-op instructions and prescribed medications ensure a smooth recovery.", icon: <Shield className="w-6 h-6" /> },
    { number: "05", title: "Follow-Up", description: "We schedule follow-up appointments to monitor healing and ensure optimal results.", icon: <Stethoscope className="w-6 h-6" /> },
  ],
  faqHeading: "Oral Surgery FAQ",
  faqs: [
    { question: "How much does oral surgery cost in Katy?", answer: "Costs vary by procedure. Insurance may cover medically necessary procedures. CareCredit financing is available." },
    { question: "Do you offer IV sedation?", answer: "Yes. We offer nitrous oxide, oral sedation, and IV sedation. You will be comfortable throughout your procedure." },
    { question: "How long is recovery after oral surgery?", answer: "Recovery varies by procedure — typically 3-10 days. We provide detailed recovery timelines for each procedure." },
    { question: "What is bone grafting?", answer: "Bone grafting restores jawbone volume to create a stable foundation for dental implant placement." },
    { question: "What age for wisdom teeth removal?", answer: "Typically late teens to early 20s, but wisdom teeth can be removed at any age if they're causing problems." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Oral Surgery Reviews",
  testimonials: [
    { quote: "Had all four wisdom teeth out under IV sedation at the Katy office. I literally don't remember anything. Recovery was smooth and fast.", name: "Brandon H.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "Needed bone grafting before implants. The procedure was comfortable and the team was so reassuring. Healing went perfectly.", name: "Linda S.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "Dr. Vuong performed a sinus lift and implant placement. His expertise was evident from the planning through recovery.", name: "Charles D.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Schedule Your Surgical Consultation",
  ctaBody: "Expert oral surgery with sedation options at our Katy office. Book your consultation today.",
};

const OralSurgeryKaty = () => <ServicePageTemplate data={data} />;
export default OralSurgeryKaty;
