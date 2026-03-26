import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Bone, Shield, Zap, Users } from "lucide-react";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Bone Grafting",
  serviceSlug: "bone-grafting",
  metaTitle: "Bone Grafting Cypress, TX | Jawbone Restoration | Smile Avenue",
  metaDescription: "Bone grafting in Cypress, TX. Jawbone restoration for dental implant candidates. Ridge augmentation, socket preservation & sinus lifts. Call (832) 648-1756.",
  heroKicker: "JAWBONE RESTORATION IN CYPRESS",
  heroHeading: "Bone Grafting in Cypress, TX",
  heroBody: "Bone grafting rebuilds the jawbone to create a strong foundation for dental implants. At Smile Avenue Cypress, we use advanced grafting techniques to restore bone density lost from tooth extraction, gum disease, or trauma — so you can qualify for the implants you need.",
  heroCta1: "Book Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Bone Grafting",
  introKicker: "WHY BONE GRAFTING",
  introHeading: "What Is Bone Grafting?",
  introParas: [
    "Bone grafting is a surgical procedure that adds bone material to the jaw to rebuild areas where bone has been lost. This is often necessary before dental implant placement, as implants require sufficient bone volume to anchor securely.",
    "Without adequate bone, implants cannot integrate properly and may fail. Bone loss commonly occurs after tooth extraction, from advanced gum disease, or simply from long-term tooth loss. The good news is that modern grafting techniques can restore bone in nearly all cases.",
    "At Smile Avenue, Dr. Vuong uses biocompatible bone graft materials and advanced imaging to plan precise, minimally invasive procedures with predictable outcomes.",
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
    { title: "Ridge Augmentation", description: "Rebuilds the width and height of the jawbone ridge after tooth loss, creating a suitable foundation for implant placement.", icon: <Bone className="w-5 h-5" /> },
    { title: "Socket Preservation", description: "Performed immediately after tooth extraction to prevent bone collapse and maintain the socket for future implant placement.", icon: <Shield className="w-5 h-5" /> },
    { title: "Sinus Lift", description: "Adds bone to the upper jaw in the area of the molars and premolars by lifting the sinus membrane to make room for bone graft material.", icon: <Zap className="w-5 h-5" /> },
    { title: "Block Bone Graft", description: "Uses a block of bone harvested from another area of the jaw or a donor source to rebuild larger areas of bone deficiency.", icon: <Users className="w-5 h-5" /> },
  ],
  processKicker: "WHAT TO EXPECT",
  processHeading: "The Bone Grafting Process",
  processBody: "Our team guides you through every step of the bone grafting journey.",
  processSteps: [
    { number: "01", title: "3D Imaging & Assessment", description: "We take a CBCT scan to evaluate bone volume and plan the ideal grafting approach.", icon: <Zap className="w-5 h-5" /> },
    { number: "02", title: "Graft Placement", description: "The bone graft material is placed at the treatment site under local anesthesia or sedation.", icon: <Bone className="w-5 h-5" /> },
    { number: "03", title: "Healing Period", description: "Over 4–6 months, the graft integrates with your natural bone, rebuilding density and volume.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Implant Placement", description: "Once healing is complete, you're ready for dental implant surgery on a strong, solid foundation.", icon: <Users className="w-5 h-5" /> },
  ],
  faqHeading: "Bone Grafting Questions",
  faqs: [
    { question: "Is bone grafting painful?", answer: "Most patients experience minimal discomfort. The procedure is performed under local anesthesia or sedation, and post-op discomfort is managed with prescribed medication." },
    { question: "How long does bone graft healing take?", answer: "Healing typically takes 4–6 months, depending on the type and extent of the graft. We monitor your progress with follow-up imaging." },
    { question: "Can I get implants without bone grafting?", answer: "It depends on your bone density. Some patients have sufficient bone; others need grafting first. We'll determine this during your consultation with 3D imaging." },
    { question: "What materials are used for bone grafting?", answer: "We use biocompatible materials including human donor bone, bovine bone, and synthetic bone substitutes. Dr. Vuong will recommend the best option for your case." },
    { question: "How much does bone grafting cost?", answer: "Costs vary by procedure type, typically ranging from $300–$3,000. Many dental insurance plans cover a portion. We also offer financing through CareCredit and Sunbit." },
  ],
  reviewsKicker: "PATIENT STORIES",
  reviewsHeading: "What Our Patients Say",
  testimonials: [
    { quote: "Dr. Vuong explained the bone grafting process clearly and the recovery was much easier than I expected. Now I'm ready for my implants!", name: "James R.", source: "Google Review" },
    { quote: "I was told I didn't have enough bone for implants at another office. Smile Avenue did a sinus lift and now I have beautiful new teeth.", name: "Linda S.", source: "Google Review" },
    { quote: "The team made me feel comfortable throughout the entire bone grafting procedure. Highly recommend for anyone needing implant prep.", name: "Mark T.", source: "Google Review" },
  ],
  ctaHeading: "Ready to Rebuild Your Foundation?",
  ctaBody: "Schedule a bone grafting consultation and take the first step toward dental implants.",
};

export default () => <ServicePageTemplate data={data} />;
