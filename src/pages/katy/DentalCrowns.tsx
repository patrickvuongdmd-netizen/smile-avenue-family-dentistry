import { Shield, Zap, Users, Clock, Star, Scan, Wrench } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Crowns",
  serviceSlug: "dental-crowns",
  metaTitle: "Dental Crowns Katy, TX | Same-Day CEREC Crowns | Smile Avenue",
  metaDescription: "Get same-day CEREC dental crowns in Katy, TX. Porcelain, zirconia & ceramic options. No temporary crowns needed. Call (281) 800-5008.",
  heroKicker: "SAME-DAY CROWNS IN KATY",
  heroHeading: "Dental Crowns in Katy, TX",
  heroBody: "Need a dental crown? With CEREC same-day technology at Smile Avenue Katy, you can get a custom, permanent crown in a single visit — no temporaries, no second appointment.",
  heroCta1: "Book Crown Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Dental Crowns Photo",
  introKicker: "ABOUT DENTAL CROWNS", introHeading: "What Are Dental Crowns?",
  introParas: [
    "A dental crown is a custom-made cap that covers a damaged, weakened, or cosmetically imperfect tooth. Crowns restore the tooth's strength, shape, size, and appearance while protecting it from further damage.",
    "At Smile Avenue Katy, we use CEREC technology to design and mill your crown right in our office. This means you get a precision-fit, natural-looking crown in about two hours — no messy impressions, no temporary crown, and no return visit.",
    "Our Katy team serves patients across Cinco Ranch, Firethorne, Cross Creek Ranch, and the greater Westheimer Parkway area with the latest in same-day crown technology."
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "Same-Day CEREC" },
    { icon: <Shield className="w-5 h-5" />, label: "Precision Fit" },
    { icon: <Users className="w-5 h-5" />, label: "Trusted by 5,000+ Families" },
  ],
  subServicesKicker: "CROWN OPTIONS", subServicesHeading: "Crown Treatments We Offer",
  subServicesBody: "We offer a range of crown materials and solutions to fit your needs.",
  subServices: [
    { title: "Same-Day CEREC Crowns", description: "Designed and milled in our office in about 2 hours using advanced CAD/CAM technology. No temporaries needed.", icon: <Zap className="w-5 h-5" /> },
    { title: "Porcelain Crowns", description: "Natural-looking crowns that blend seamlessly with your surrounding teeth. Ideal for front teeth and visible areas.", icon: <Star className="w-5 h-5" /> },
    { title: "Zirconia Crowns", description: "Extremely durable and natural-looking. Zirconia is the strongest crown material available, ideal for back teeth.", icon: <Shield className="w-5 h-5" /> },
    { title: "Crown Repair", description: "If your existing crown is chipped, loose, or damaged, we can often repair or replace it in a single visit.", icon: <Wrench className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CROWN VISIT", processHeading: "What to Expect",
  processBody: "Our same-day crown process is fast, comfortable, and eliminates the need for a second visit.",
  processSteps: [
    { number: "01", title: "Digital Scan", description: "We take a precise 3D digital scan of your tooth — no messy putty impressions needed.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Crown Design", description: "Using CEREC software, we design your custom crown right on screen, ensuring perfect fit and aesthetics.", icon: <Star className="w-6 h-6" /> },
    { number: "03", title: "In-Office Milling", description: "Your crown is milled from a solid block of ceramic right in our office in about 15 minutes.", icon: <Zap className="w-6 h-6" /> },
    { number: "04", title: "Bond & Polish", description: "We bond the crown to your prepared tooth, adjust the bite, and polish for a natural finish. Done in one visit!", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "Dental Crown FAQ",
  faqs: [
    { question: "How much do dental crowns cost in Katy, TX?", answer: "Crowns typically range from $1,000-$1,800 per tooth depending on the material. Most dental insurance covers a portion. We also offer CareCredit and Sunbit financing." },
    { question: "How long do same-day crowns take?", answer: "The entire process — from scan to bonding — takes about 2 hours. You walk in with a damaged tooth and leave with a permanent crown." },
    { question: "Are CEREC crowns as durable as lab crowns?", answer: "Yes. CEREC crowns are milled from the same high-quality ceramic materials used by dental labs and can last 15+ years with proper care." },
    { question: "Does getting a crown hurt?", answer: "We numb the area completely before any work begins. Most patients report little to no discomfort during the procedure." },
    { question: "How long do dental crowns last?", answer: "With good oral hygiene and regular checkups, dental crowns typically last 15-20 years or longer." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Crown Reviews",
  testimonials: [
    { quote: "Got a CEREC crown at the Katy office — in and out in under 2 hours with a perfect permanent crown. No temporary, no second visit. Incredible technology!", name: "Thomas B.", source: "Google Review" },
    { quote: "Needed a crown on my molar and was dreading two appointments. Smile Avenue did it all in one visit. The crown fits perfectly and looks completely natural.", name: "Rebecca S.", source: "Google Review" },
    { quote: "Dr. Bilal replaced my old metal crown with a beautiful porcelain one. The difference is night and day. So happy I switched to Smile Avenue Katy.", name: "Frank M.", source: "Google Review" },
  ],
  ctaHeading: "Get Your Same-Day Crown Today",
  ctaBody: "Skip the temporary crown and second appointment. Book your same-day CEREC crown at our Katy office.",
};

const DentalCrownsKaty = () => <ServicePageTemplate data={data} />;
export default DentalCrownsKaty;
