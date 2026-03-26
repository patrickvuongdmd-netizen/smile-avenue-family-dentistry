import { Shield, Zap, Users, PhoneCall, Stethoscope, Scan, Syringe, Star } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Implants",
  serviceSlug: "dental-implants",
  metaTitle: "Dental Implants Katy, TX | Permanent Tooth Replacement | Smile Avenue",
  metaDescription: "Get dental implants in Katy, TX at Smile Avenue. Single implants, implant bridges, All-on-X full arch solutions. Call (281) 800-5008 for a free consultation.",
  heroKicker: "PERMANENT TOOTH REPLACEMENT IN KATY",
  heroHeading: "Dental Implants in Katy, TX",
  heroBody: "Dental implants are the gold standard for replacing missing teeth. At Smile Avenue Katy, we offer single implants, implant-supported bridges, and full mouth reconstruction including All-on-X solutions — all under one roof.",
  heroCta1: "Book Implant Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Dental Implants Photo",
  introKicker: "ABOUT DENTAL IMPLANTS",
  introHeading: "What Are Dental Implants?",
  introParas: [
    "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Once integrated with the bone, they support crowns, bridges, or dentures that look, feel, and function like natural teeth.",
    "Unlike dentures that can slip or bridges that require grinding down adjacent teeth, implants are a standalone, permanent solution. They also help preserve jawbone density, preventing the facial collapse that can occur after tooth loss.",
    "At Smile Avenue Katy, Dr. Vuong and our implant team use 3D imaging and guided surgery for precise placement and predictable results. Families across Cinco Ranch, Cross Creek Ranch, and Firethorne trust us for life-changing implant dentistry."
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "Guided Implant Surgery" },
    { icon: <Users className="w-5 h-5" />, label: "1,000+ Implants Placed" },
  ],
  subServicesKicker: "IMPLANT SOLUTIONS",
  subServicesHeading: "Implant Treatments We Offer",
  subServicesBody: "From a single missing tooth to a full mouth restoration, we have the right implant solution for you.",
  subServices: [
    { title: "Single Tooth Implants", description: "Replace one missing tooth with a titanium implant and porcelain crown that blends seamlessly with your natural teeth.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Implant-Supported Bridges", description: "Bridge the gap of multiple missing teeth without affecting healthy adjacent teeth. Implant bridges offer superior stability.", icon: <Shield className="w-5 h-5" /> },
    { title: "Implant-Supported Dentures", description: "Snap-in dentures anchored by implants eliminate slipping and discomfort, giving you confidence to eat and speak naturally.", icon: <Zap className="w-5 h-5" /> },
    { title: "Full Mouth Reconstruction", description: "Comprehensive restoration combining implants with crowns, bridges, or All-on-X arches for a complete smile transformation.", icon: <Syringe className="w-5 h-5" /> },
  ],
  processKicker: "YOUR IMPLANT JOURNEY",
  processHeading: "What to Expect with Dental Implants",
  processBody: "Our streamlined implant process is designed for comfort and predictable results.",
  processSteps: [
    { number: "01", title: "Consultation & 3D Scan", description: "We take a CBCT 3D scan to assess bone density and plan your implant placement with precision.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Implant Placement", description: "Using guided surgery, we place the titanium implant into your jawbone. Sedation options are available for comfort.", icon: <Syringe className="w-6 h-6" /> },
    { number: "03", title: "Healing & Integration", description: "Over 3-6 months, the implant fuses with your jawbone through a process called osseointegration.", icon: <Stethoscope className="w-6 h-6" /> },
    { number: "04", title: "Final Restoration", description: "We attach your custom porcelain crown, bridge, or denture — completing your new smile.", icon: <Star className="w-6 h-6" /> },
  ],
  faqHeading: "Dental Implant FAQ",
  faqs: [
    { question: "How much do dental implants cost in Katy, TX?", answer: "Single implants typically range from $3,000–$5,000 including the crown. Full arch All-on-X solutions start around $20,000 per arch. We offer CareCredit and Sunbit financing and accept most dental insurance." },
    { question: "Are dental implants painful?", answer: "Most patients report less discomfort than expected. We use local anesthesia and offer sedation options. Post-procedure soreness is manageable with over-the-counter pain medication." },
    { question: "How long do dental implants last?", answer: "With proper care, dental implants can last a lifetime. The crown on top may need replacement after 10-15 years due to normal wear." },
    { question: "Am I a candidate for dental implants?", answer: "Most adults with good general health are candidates. We assess bone density with 3D imaging. If bone grafting is needed, we can perform that as well." },
    { question: "Do you offer same-day implants?", answer: "In select cases, we can place an implant and attach a temporary crown the same day. During your consultation, we'll determine if immediate loading is right for you." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING",
  reviewsHeading: "Dental Implant Reviews",
  testimonials: [
    { quote: "Dr. Vuong placed two implants and the results are incredible. They look and feel like my real teeth. The whole Katy team made the process so easy.", name: "Robert T.", source: "Google Review" },
    { quote: "I was nervous about implants but the 3D planning they showed me was reassuring. Six months later I have a perfect smile. Worth every penny.", name: "Sandra K.", source: "Google Review" },
    { quote: "Got All-on-4 implants at Smile Avenue Katy after years of struggling with dentures. Life-changing doesn't even begin to describe it.", name: "Gerald W.", source: "Google Review" },
  ],
  ctaHeading: "Start Your Implant Journey Today",
  ctaBody: "Schedule a free implant consultation at our Katy office. Let's restore your smile with the permanent solution you deserve.",
};

const DentalImplantsKaty = () => <ServicePageTemplate data={data} />;
export default DentalImplantsKaty;
