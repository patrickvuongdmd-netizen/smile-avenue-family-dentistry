import { Shield, Zap, Scan, Clock, Star, FlaskConical, Wrench } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Crowns",
  serviceSlug: "dental-crowns",
  metaTitle: "Dental Crowns in Katy, TX - Same-Day CEREC - Smile Avenue",
  metaDescription: "Same-day CEREC crowns in Katy, TX. No temporary, no second visit. Digital precision. Call (281) 800-5008.",
  heroKicker: "SAME-DAY CROWNS IN KATY",
  heroHeading: "Dental Crowns in Katy, TX",
  heroBody: "A damaged tooth does not mean weeks with a temporary crown. Smile Avenue Katy offers same-day CEREC crowns — designed, milled, and placed in one appointment.",
  heroCta1: "Book Crown Appointment",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Dental Crowns Photo",
  introKicker: "ONE-VISIT CROWNS",
  introHeading: "Same-Day CEREC Dental Crowns",
  introParas: [
    "Traditional dental crowns require two visits and weeks with an uncomfortable temporary. With CEREC technology at Smile Avenue Katy, we design, mill, and place your permanent crown in a single appointment — typically about 2 hours from start to finish.",
    "Our Medit digital scanner captures precise 3D impressions (no goopy molds), and our CEREC system mills your crown from a solid block of ceramic right in the office. For complex cases, our in-house Smile Dental Lab handcrafts crowns for the highest level of customization. Patients from Cinco Ranch, Elyson, and Westheimer Parkway choose us for convenient, high-quality crown restorations.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Zap className="w-5 h-5" />, label: "Same-Day CEREC" },
    { icon: <FlaskConical className="w-5 h-5" />, label: "In-House Lab" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Crowns",
  subServicesBody: "Advanced technology for faster, better-fitting crowns.",
  subServices: [
    { title: "Same-Day CEREC Technology", description: "Your crown is designed, milled, and placed in one visit — no temporary crown, no second appointment.", icon: <Zap className="w-5 h-5" /> },
    { title: "Digital Medit Impressions", description: "Comfortable digital scanning replaces goopy molds for more accurate, better-fitting crowns.", icon: <Scan className="w-5 h-5" /> },
    { title: "In-House Lab for Complex Cases", description: "Our Smile Dental Lab handcrafts crowns for cases requiring the highest level of customization and artistry.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "Natural Appearance", description: "Ceramic crowns are color-matched to blend seamlessly with your surrounding teeth for an invisible restoration.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "THE CEREC PROCESS",
  processHeading: "What to Expect",
  processBody: "One visit. One crown. Done.",
  processSteps: [
    { number: "01", title: "Exam & 3D Scan", description: "We evaluate the tooth and capture a precise 3D digital scan using our Medit scanner.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Chairside Crown Design", description: "Your crown is designed on-screen using CEREC software, customized for perfect fit and natural appearance.", icon: <Wrench className="w-5 h-5" /> },
    { number: "03", title: "In-Office Milling", description: "Your crown is milled from a solid ceramic block right in our office — takes about 15 minutes.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Same-Visit Bonding", description: "Your permanent crown is bonded in place, adjusted for comfort, and polished for a flawless finish.", icon: <Shield className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Crown Questions",
  faqs: [
    { question: "How much do crowns cost?", answer: "Most dental insurance covers a significant portion of crown costs. We accept all major PPO plans and offer CareCredit financing for any remaining balance." },
    { question: "Is a same-day crown really possible?", answer: "Yes — with CEREC technology, your crown is designed, milled, and placed in about 2 hours. No temporary, no second visit." },
    { question: "How long do CEREC crowns last?", answer: "CEREC crowns are made from the same high-quality ceramic as traditional lab crowns and typically last 10-15+ years with proper care." },
    { question: "Does getting a crown hurt?", answer: "No — local anesthesia numbs the area completely. Sedation options are also available for anxious patients." },
    { question: "CEREC vs traditional crowns?", answer: "CEREC crowns offer the same quality as traditional lab crowns but are completed in one visit. For highly complex aesthetic cases, our in-house lab provides additional customization." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "I was in and out with a permanent crown in under 2 hours. No temporary, no second visit. The CEREC technology is incredible.", name: "Brian M.", source: "Google Review" },
    { quote: "My crown matches my other teeth perfectly — you can't tell which one is the crown. The digital scanning was so much better than those awful goopy impressions.", name: "Diana F.", source: "Google Review" },
    { quote: "I needed a crown after a root canal and they did both in the same day. One visit, done. So convenient and the result looks great.", name: "Tom S.", source: "Google Review" },
  ],
  ctaHeading: "Get Your Crown in One Visit",
  ctaBody: "Schedule your same-day CEREC crown appointment at Smile Avenue Katy.",
};

const DentalCrownsKaty = () => <ServicePageTemplate data={data} />;
export default DentalCrownsKaty;
