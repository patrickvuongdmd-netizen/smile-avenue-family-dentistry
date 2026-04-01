import { Shield, Zap, Users, Scan, FlaskConical, Syringe, Star, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Implants",
  serviceSlug: "dental-implants",
  metaTitle: "Dental Implants Katy, TX | Permanent Tooth Replacement | Smile Avenue",
  metaDescription: "Dental implants in Katy, TX near Cinco Ranch — single teeth, bridges & All-on-4. 3D-guided placement, in-house lab, sedation. 0% financing. Call (281) 800-5008.",
  heroKicker: "PERMANENT TOOTH REPLACEMENT IN KATY",
  heroHeading: "Dental Implants in Katy, TX",
  heroBody: "Missing teeth impact your confidence, eating ability, and oral health. At Smile Avenue Katy near Cinco Ranch, Dr. Vuong and Dr. Bilal provide permanent implant solutions with 3D planning and our in-house Smile Dental Lab.",
  heroCta1: "Book Implant Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Dental Implants Photo",
  introKicker: "PERMANENT TOOTH REPLACEMENT",
  introHeading: "What Are Dental Implants?",
  introParas: [
    "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Once integrated with the bone, they support crowns, bridges, or dentures that look, feel, and function like natural teeth. Unlike dentures that slip or bridges that require grinding adjacent teeth, implants are a standalone, permanent solution.",
    "At Smile Avenue Katy, Dr. Vuong and Dr. Bilal use 3D CBCT imaging and Medit digital scanners for precise, guided implant placement. Our in-house Smile Dental Lab fabricates your final crown or prosthesis for perfect fit and natural appearance. Families across Cinco Ranch, Cross Creek Ranch, Firethorne, and Westheimer Parkway trust us for life-changing implant dentistry.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "3D Guided Surgery" },
    { icon: <Users className="w-5 h-5" />, label: "1,000+ Implants Placed" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Implants",
  subServicesBody: "Advanced technology and in-house precision for predictable, lasting results.",
  subServices: [
    { title: "In-House Smile Dental Lab", description: "Your implant crown is fabricated on-site for precise fit, natural appearance, and faster turnaround — no outside lab delays.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "3D CBCT & Medit Scanners", description: "Advanced 3D imaging and digital scanning guide every implant placement with surgical precision and predictable outcomes.", icon: <Scan className="w-5 h-5" /> },
    { title: "Sedation Available", description: "Nitrous oxide, oral sedation, and IV sedation options ensure complete comfort throughout your implant procedure.", icon: <Syringe className="w-5 h-5" /> },
    { title: "All Treatment Under One Roof", description: "From bone grafting to implant placement to final crown — everything handled by our team without referrals.", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  processKicker: "THE IMPLANT PROCESS",
  processHeading: "What to Expect",
  processBody: "A straightforward process from consultation to your permanent new tooth.",
  processSteps: [
    { number: "01", title: "3D Consultation", description: "Comprehensive exam with 3D CBCT scan, digital impressions, and personalized treatment plan.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Implant Placement", description: "Titanium implant is precisely placed using 3D-guided surgery under sedation for complete comfort.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Healing Period", description: "3-6 months for the implant to fuse with your jawbone (osseointegration) while you heal comfortably.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Final Crown from In-House Lab", description: "Your permanent crown is fabricated in our Smile Dental Lab and placed for a natural, lasting result.", icon: <FlaskConical className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Implant Questions",
  faqs: [
    { question: "How much do dental implants cost in Katy?", answer: "Costs vary by case — we provide a detailed estimate at your free consultation. CareCredit financing and most major PPO insurance plans accepted." },
    { question: "Am I a good candidate for implants?", answer: "Most adults with adequate bone density qualify for dental implants. If bone loss has occurred, bone grafting can create the foundation needed. We evaluate candidacy during your consultation." },
    { question: "How long do dental implants last?", answer: "Dental implants are designed to last 20+ years — often a lifetime with proper care. The crown on top typically lasts 10-15 years before potential replacement." },
    { question: "Is the implant procedure painful?", answer: "No — local anesthesia and sedation options ensure complete comfort. Most patients report less discomfort than expected, comparable to a tooth extraction." },
    { question: "What is the implant process timeline?", answer: "The full process takes 3-6 months from implant placement to final crown. During healing, you'll have a temporary restoration so you're never without a tooth." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Dr. Bilal placed my implant and the whole experience was smooth. The 3D planning made me feel confident they knew exactly what they were doing.", name: "Carlos R.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "I got two implants to replace teeth I lost years ago. The in-house lab made a crown that matches my other teeth perfectly. Wish I'd done it sooner.", name: "Janet M.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "The sedation option made the implant placement completely comfortable. I was nervous but the team put me at ease from the moment I walked in.", name: "David K.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Replace Missing Teeth Permanently",
  ctaBody: "Schedule your free implant consultation and take the first step toward a complete, confident smile.",
};

const DentalImplantsKaty = () => <ServicePageTemplate data={data} />;
export default DentalImplantsKaty;
