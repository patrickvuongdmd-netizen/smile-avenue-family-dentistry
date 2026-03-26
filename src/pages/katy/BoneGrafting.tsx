import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Bone, Shield, Zap, Users } from "lucide-react";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Bone Grafting",
  serviceSlug: "bone-grafting",
  metaTitle: "Bone Grafting Katy, TX | Jawbone Restoration | Smile Avenue",
  metaDescription: "Bone grafting in Katy, TX. Jawbone restoration for dental implant candidates. Ridge augmentation, socket preservation & sinus lifts. Call (281) 800-5008.",
  heroKicker: "JAWBONE RESTORATION IN KATY",
  heroHeading: "Bone Grafting in Katy, TX",
  heroBody: "Bone grafting rebuilds the jawbone to create a strong foundation for dental implants. At Smile Avenue Katy, we use advanced grafting techniques to restore bone density lost from tooth extraction, gum disease, or trauma.",
  heroCta1: "Book Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Bone Grafting",
  introKicker: "WHY BONE GRAFTING",
  introHeading: "What Is Bone Grafting?",
  introParas: [
    "Bone grafting is a surgical procedure that adds bone material to the jaw to rebuild areas where bone has been lost. This is often necessary before dental implant placement, as implants require sufficient bone volume to anchor securely.",
    "Without adequate bone, implants cannot integrate properly and may fail. Bone loss commonly occurs after tooth extraction, from advanced gum disease, or from long-term tooth loss.",
    "At Smile Avenue Katy, we use biocompatible bone graft materials and advanced 3D imaging to plan precise, minimally invasive procedures with predictable outcomes.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "3D-Guided Planning" },
    { icon: <Shield className="w-5 h-5" />, label: "Biocompatible Materials" },
    { icon: <Users className="w-5 h-5" />, label: "Implant Specialists" },
  ],
  subServicesKicker: "GRAFTING OPTIONS",
  subServicesHeading: "Bone Grafting Procedures We Offer",
  subServicesBody: "We offer several types of bone grafting to address different clinical needs.",
  subServices: [
    { title: "Ridge Augmentation", description: "Rebuilds the width and height of the jawbone ridge after tooth loss for implant placement.", icon: <Bone className="w-5 h-5" /> },
    { title: "Socket Preservation", description: "Performed immediately after extraction to prevent bone collapse and maintain the socket.", icon: <Shield className="w-5 h-5" /> },
    { title: "Sinus Lift", description: "Adds bone to the upper jaw by lifting the sinus membrane to make room for graft material.", icon: <Zap className="w-5 h-5" /> },
    { title: "Block Bone Graft", description: "Uses a block of bone to rebuild larger areas of bone deficiency.", icon: <Users className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO EXPECT", processHeading: "The Bone Grafting Process", processBody: "Our team guides you through every step.",
  processSteps: [
    { number: "01", title: "3D Imaging & Assessment", description: "CBCT scan to evaluate bone volume and plan the grafting approach.", icon: <Zap className="w-5 h-5" /> },
    { number: "02", title: "Graft Placement", description: "Bone graft material placed under local anesthesia or sedation.", icon: <Bone className="w-5 h-5" /> },
    { number: "03", title: "Healing Period", description: "4–6 months for the graft to integrate with your natural bone.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Implant Placement", description: "Once healed, you're ready for dental implant surgery.", icon: <Users className="w-5 h-5" /> },
  ],
  faqHeading: "Bone Grafting Questions",
  faqs: [
    { question: "Is bone grafting painful?", answer: "Most patients experience minimal discomfort with local anesthesia or sedation." },
    { question: "How long does healing take?", answer: "Typically 4–6 months depending on the type and extent of the graft." },
    { question: "Can I get implants without bone grafting?", answer: "It depends on your bone density. We'll determine this during your 3D imaging consultation." },
    { question: "How much does bone grafting cost?", answer: "Typically $300–$3,000 depending on the procedure. Many insurance plans cover a portion." },
  ],
  reviewsKicker: "PATIENT STORIES", reviewsHeading: "What Our Patients Say",
  testimonials: [
    { quote: "The bone grafting process was explained clearly and recovery was easy. Now I'm ready for my implants!", name: "James R.", source: "Google Review" },
    { quote: "Smile Avenue Katy did a sinus lift for me and the results were excellent. Professional and caring team.", name: "Linda S.", source: "Google Review" },
    { quote: "Great experience with bone grafting. The team made me feel comfortable throughout.", name: "Mark T.", source: "Google Review" },
  ],
  ctaHeading: "Ready to Rebuild Your Foundation?",
  ctaBody: "Schedule a bone grafting consultation at our Katy office.",
};

export default () => <ServicePageTemplate data={data} />;
