import { Shield, Zap, Users, Star, Scan, Stethoscope, Wrench } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Bridges",
  serviceSlug: "dental-bridges",
  metaTitle: "Dental Bridges Katy, TX | Fixed Bridges | Smile Avenue",
  metaDescription: "Replace missing teeth with dental bridges in Katy, TX. Traditional, cantilever, Maryland & implant-supported bridges. Call (281) 800-5008.",
  heroKicker: "FIXED BRIDGES IN KATY",
  heroHeading: "Dental Bridges in Katy, TX",
  heroBody: "A dental bridge fills the gap left by one or more missing teeth, restoring your smile, your bite, and your confidence. Our Katy team offers multiple bridge solutions to fit your needs.",
  heroCta1: "Book Bridge Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Dental Bridges Photo",
  introKicker: "ABOUT DENTAL BRIDGES", introHeading: "What Are Dental Bridges?",
  introParas: [
    "A dental bridge is a fixed prosthetic that literally 'bridges' the gap created by missing teeth. It consists of artificial teeth (pontics) anchored to crowns on the adjacent teeth or dental implants.",
    "Bridges restore your ability to chew and speak properly, maintain the shape of your face, prevent remaining teeth from shifting, and distribute bite forces evenly.",
    "At Smile Avenue Katy, we offer traditional, cantilever, Maryland, and implant-supported bridges. Our team serves patients across Cinco Ranch, Cross Creek Ranch, Firethorne, and the greater Westheimer Parkway area."
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "Natural-Looking" },
    { icon: <Shield className="w-5 h-5" />, label: "Long-Lasting" },
    { icon: <Users className="w-5 h-5" />, label: "Trusted by 5,000+ Families" },
  ],
  subServicesKicker: "BRIDGE OPTIONS", subServicesHeading: "Bridge Solutions We Offer",
  subServicesBody: "We provide the right bridge type for your specific situation.",
  subServices: [
    { title: "Traditional Bridges", description: "The most common type — crowns on teeth flanking the gap support one or more artificial teeth in between.", icon: <Shield className="w-5 h-5" /> },
    { title: "Cantilever Bridges", description: "Supported by a crown on only one side of the gap. Used when there's only one adjacent tooth available for support.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Maryland Bridges", description: "A conservative option using metal or porcelain wings bonded to the back of adjacent teeth. Minimal tooth preparation required.", icon: <Star className="w-5 h-5" /> },
    { title: "Implant-Supported Bridges", description: "Anchored by dental implants instead of natural teeth. The most stable and long-lasting bridge option available.", icon: <Zap className="w-5 h-5" /> },
  ],
  processKicker: "YOUR BRIDGE TREATMENT", processHeading: "What to Expect",
  processBody: "Our bridge process is straightforward and designed for comfort.",
  processSteps: [
    { number: "01", title: "Evaluation", description: "We examine the gap, adjacent teeth, and bone structure to determine the best bridge type for you.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Tooth Preparation", description: "Adjacent teeth are shaped to receive crowns. Digital impressions are taken for precise bridge fabrication.", icon: <Wrench className="w-6 h-6" /> },
    { number: "03", title: "Temporary Bridge", description: "A temporary bridge protects your prepared teeth while your permanent bridge is crafted by our lab.", icon: <Shield className="w-6 h-6" /> },
    { number: "04", title: "Final Placement", description: "Your permanent bridge is cemented in place, adjusted for a perfect bite, and polished for a natural finish.", icon: <Star className="w-6 h-6" /> },
  ],
  faqHeading: "Dental Bridge FAQ",
  faqs: [
    { question: "How much do dental bridges cost in Katy, TX?", answer: "Dental bridges typically range from $2,000-$5,000 depending on the number of teeth and type of bridge. Most insurance covers a portion. We offer CareCredit and Sunbit financing." },
    { question: "How long do dental bridges last?", answer: "With proper care, dental bridges typically last 10-15 years. Implant-supported bridges can last even longer." },
    { question: "Is getting a bridge painful?", answer: "The procedure is performed under local anesthesia and is not painful. Some mild sensitivity may occur after preparation but resolves quickly." },
    { question: "Bridge vs. implant — which is better?", answer: "Both are excellent options. Implants preserve bone and don't affect adjacent teeth, while bridges are faster and less invasive. We'll help you decide during your consultation." },
    { question: "How do I care for a dental bridge?", answer: "Brush and floss daily, using floss threaders or water flossers to clean under the bridge. Regular dental checkups are essential for longevity." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Bridge Reviews",
  testimonials: [
    { quote: "Got a three-unit bridge to replace a missing molar. It fits perfectly and I can chew normally again. The Katy team was professional throughout.", name: "Richard E.", source: "Google Review" },
    { quote: "Dr. Lopez did a beautiful Maryland bridge for my front tooth gap. Minimal prep and it looks completely natural. So happy with the results!", name: "Jennifer Y.", source: "Google Review" },
    { quote: "Had an implant-supported bridge done and it feels like real teeth. No slipping, no worries. Best decision for my smile.", name: "Gregory N.", source: "Google Review" },
  ],
  ctaHeading: "Bridge the Gap in Your Smile",
  ctaBody: "Book a bridge consultation at our Katy office and explore your tooth replacement options.",
};

const DentalBridgesKaty = () => <ServicePageTemplate data={data} />;
export default DentalBridgesKaty;
