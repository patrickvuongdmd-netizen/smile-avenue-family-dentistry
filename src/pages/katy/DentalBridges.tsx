import { Shield, Zap, Star, Scan, Wrench, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Bridges",
  serviceSlug: "dental-bridges",
  metaTitle: "Dental Bridges Katy, TX | Fixed Bridge Restorations | Smile Avenue",
  metaDescription: "Dental bridges in Katy, TX — traditional, Maryland & implant-supported options. Crafted in our in-house lab. Insurance accepted. Call (281) 800-5008.",
  heroKicker: "FIXED BRIDGES IN KATY",
  heroHeading: "Dental Bridges in Katy, TX",
  heroBody: "Bridge the gap in your smile with a fixed, natural-looking dental bridge from Smile Avenue Katy. Fabricated in our in-house lab.",
  heroCta1: "Book Bridge Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Dental Bridges Photo",
  introKicker: "ABOUT DENTAL BRIDGES", introHeading: "What Are Dental Bridges?",
  introParas: [
    "A dental bridge spans the gap of one or more missing teeth. It consists of artificial teeth (pontics) anchored by crowns on adjacent teeth or dental implants.",
    "Types include traditional, cantilever, Maryland, and implant-supported bridges. Each type is fabricated in our in-house Smile Dental Lab using digital impressions for precise fit.",
    "Patients from Cinco Ranch, Cross Creek Ranch, Firethorne, and the Westheimer Parkway area trust Smile Avenue Katy for natural-looking, long-lasting bridge restorations."
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "In-House Fabrication" },
    { icon: <Scan className="w-5 h-5" />, label: "Digital Impressions" },
    { icon: <Zap className="w-5 h-5" />, label: "Same-Day Options" },
    { icon: <Shield className="w-5 h-5" />, label: "Implant-Supported Available" },
  ],
  subServicesKicker: "BRIDGE OPTIONS", subServicesHeading: "Bridge Solutions We Offer",
  subServicesBody: "We provide the right bridge type for your specific situation.",
  subServices: [
    { title: "Traditional Bridges", description: "The most common type — crowns on teeth flanking the gap support one or more artificial teeth in between.", icon: <Shield className="w-5 h-5" /> },
    { title: "Maryland Bridges", description: "A conservative option using metal or porcelain wings bonded to the back of adjacent teeth. Minimal tooth preparation required.", icon: <Star className="w-5 h-5" /> },
    { title: "Implant-Supported Bridges", description: "Anchored by dental implants instead of natural teeth. The most stable and long-lasting bridge option available.", icon: <Zap className="w-5 h-5" /> },
    { title: "Cantilever Bridges", description: "Supported by a crown on only one side of the gap. Used when there's only one adjacent tooth available for support.", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  processKicker: "YOUR BRIDGE TREATMENT", processHeading: "What to Expect",
  processBody: "Our bridge process is straightforward and designed for comfort.",
  processSteps: [
    { number: "01", title: "Evaluation", description: "We examine the gap, adjacent teeth, and bone structure to determine the best bridge type for you.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Prep & Impressions", description: "Adjacent teeth are shaped to receive crowns. Digital impressions are taken for precise bridge fabrication.", icon: <Wrench className="w-6 h-6" /> },
    { number: "03", title: "Fabrication", description: "Your bridge is crafted in our in-house lab for a perfect fit and natural appearance.", icon: <Star className="w-6 h-6" /> },
    { number: "04", title: "Permanent Placement", description: "Your bridge is cemented in place, adjusted for a perfect bite, and polished for a natural finish.", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "Dental Bridge FAQ",
  faqs: [
    { question: "How much do dental bridges cost in Katy?", answer: "Cost depends on the type and number of teeth involved. Insurance usually covers a portion. CareCredit financing is available." },
    { question: "How long do dental bridges last?", answer: "With proper care, dental bridges typically last 10-15+ years. Implant-supported bridges can last even longer." },
    { question: "Bridge vs. implant — which is better?", answer: "Both are excellent options. Implants preserve bone and don't affect adjacent teeth, while bridges are faster. We'll help you decide during your consultation." },
    { question: "Can I eat normally with a bridge?", answer: "Yes. Dental bridges function like natural teeth and allow you to chew and speak normally." },
    { question: "How long does it take to get a bridge?", answer: "Usually 2 visits over a couple of weeks, or same-day in some cases with our in-house lab." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Bridge Reviews",
  testimonials: [
    { quote: "Got a three-unit bridge to replace a missing molar. It fits perfectly and I can chew normally again. The Katy team was professional throughout.", name: "Richard E.", source: "Google Review" },
    { quote: "Dr. Maredia did a beautiful Maryland bridge for my front tooth gap. Minimal prep and it looks completely natural.", name: "Jennifer Y.", source: "Google Review" },
    { quote: "Had an implant-supported bridge done and it feels like real teeth. No slipping, no worries. Best decision for my smile.", name: "Gregory N.", source: "Google Review" },
  ],
  ctaHeading: "Bridge the Gap in Your Smile",
  ctaBody: "Book a bridge consultation at our Katy office and explore your tooth replacement options.",
};

const DentalBridgesKaty = () => <ServicePageTemplate data={data} />;
export default DentalBridgesKaty;
