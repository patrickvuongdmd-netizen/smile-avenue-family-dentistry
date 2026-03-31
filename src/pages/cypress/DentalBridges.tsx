import { Link } from "react-router-dom";
import { Shield, Star, Users, Crown, Scan, Zap, Layers } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Dental Bridges",
  serviceSlug: "dental-bridges",
  metaTitle: "Dental Bridges Cypress, TX | Fixed Bridge Restorations | Smile Avenue",
  metaDescription: "Custom dental bridges in Cypress, TX. Replace missing teeth with fixed bridges. In-house lab precision. Call (832) 648-1756.",
  heroKicker: "DENTAL BRIDGES IN CYPRESS",
  heroHeading: "Dental Bridges in Cypress, TX",
  heroBody: "A gap in your smile affects more than appearance — it impacts chewing, speech, and the alignment of surrounding teeth. Dental bridges at Smile Avenue Cypress provide a fixed, natural-looking solution.",
  heroCta1: "Book Bridge Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Dental Bridges",
  introKicker: "REPLACE MISSING TEETH",
  introHeading: "What Are Dental Bridges?",
  introParas: [
    <>A dental bridge spans the gap created by one or more missing teeth. It's anchored by <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">crowns</Link> placed on adjacent teeth (or <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>) with a false tooth (pontic) filling the gap. Types include traditional bridges, cantilever bridges, Maryland bridges, and implant-supported bridges.</>,
    <>Every bridge at Smile Avenue is fabricated in our in-house Smile Dental Lab for precise fit and natural appearance. Without treatment, a missing tooth gap can lead to shifting of surrounding teeth, bite problems, and bone loss. Bridges restore function, appearance, and protect your long-term oral health. For patients who prefer a non-removable option over <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link>, bridges are an excellent choice.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Crown className="w-5 h-5" />, label: "In-House Lab" },
    { icon: <Users className="w-5 h-5" />, label: "Faster Turnaround" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Bridges",
  subServicesBody: "In-house lab fabrication, digital impressions, and implant-supported options.",
  subServices: [
    { title: "In-House Lab Fabrication", description: "Our Smile Dental Lab fabricates your bridge on-site for precise fit, natural appearance, and faster completion.", icon: <Crown className="w-5 h-5" /> },
    { title: "Digital Impressions", description: "Comfortable digital scanning replaces goopy molds for more accurate results.", icon: <Scan className="w-5 h-5" /> },
    { title: "Faster Turnaround", description: "Our in-house lab fabricates bridges faster than practices that outsource — fewer appointments and shorter wait times.", icon: <Zap className="w-5 h-5" /> },
    { title: "Implant-Supported Bridges", description: "For maximum durability, we offer bridges anchored by dental implants — preserving bone and adjacent teeth.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "THE BRIDGE PROCESS",
  processHeading: "What to Expect",
  processBody: "A precise process for a natural-looking, lasting restoration.",
  processSteps: [
    { number: "01", title: "Evaluation & Treatment Planning", description: "We examine the gap and supporting teeth, take digital X-rays and impressions, and discuss the best bridge option.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Tooth Preparation & Impressions", description: "Supporting teeth are prepared and precise digital impressions are taken and sent to our in-house lab.", icon: <Layers className="w-5 h-5" /> },
    { number: "03", title: "Bridge Fabrication In-House", description: "Your custom bridge is fabricated in our Smile Dental Lab for precise color matching and natural appearance.", icon: <Crown className="w-5 h-5" /> },
    { number: "04", title: "Fitting & Permanent Cementation", description: "Your bridge is checked for fit, adjusted as needed, and permanently cemented for a lasting restoration.", icon: <Zap className="w-5 h-5" /> },
  ],
  faqHeading: "Bridge Questions",
  faqs: [
    { question: "How much do dental bridges cost?", answer: "Costs depend on the type of bridge and number of teeth involved. Insurance usually covers a portion. CareCredit financing and our Membership Plan are available for out-of-pocket costs." },
    { question: "How long do dental bridges last?", answer: "With proper care, dental bridges typically last 10-15+ years. Implant-supported bridges can last even longer. Good oral hygiene and regular checkups are key to longevity." },
    { question: "Bridge vs implant — which is better?", answer: "Both are excellent options. Implants preserve bone and don't require altering adjacent teeth, but require surgery and healing time. Bridges are faster and less invasive. We'll help you choose the best option for your situation." },
    { question: "Can I eat normally with a dental bridge?", answer: "Yes — dental bridges function like natural teeth. Once placed and adjusted, you can eat most foods normally without restriction." },
    { question: "How long does the bridge process take?", answer: "Usually 2 visits over 2-3 weeks. Our in-house lab provides faster turnaround than practices that outsource to external labs." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My bridge looks and feels just like my natural teeth. You can't see where the bridge starts and my real teeth end. Really impressed with the craftsmanship.", name: "Linda H.", source: "Google Review" },
    { quote: "I was missing two teeth and the implant-supported bridge was the perfect solution. Rock solid, no slipping, and it looks completely natural.", name: "Michael S.", source: "Google Review" },
    { quote: "The whole bridge process was painless and much faster than I expected. Dr. Vuong explained every step clearly. Very happy with my results.", name: "Karen W.", source: "Google Review" },
  ],
  ctaHeading: "Close the Gap in Your Smile",
  ctaBody: "Schedule your bridge consultation and restore your complete, confident smile.",
};

const DentalBridgesCypress = () => <ServicePageTemplate data={data} />;
export default DentalBridgesCypress;
