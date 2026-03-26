import { Shield, Zap, Users, Stethoscope, Scan, Syringe, Heart } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Root Canal",
  serviceSlug: "root-canal",
  metaTitle: "Root Canal Katy, TX | Painless Endodontic Therapy | Smile Avenue",
  metaDescription: "Need a root canal in Katy, TX? Gentle, modern root canal therapy at Smile Avenue. Save your natural tooth. Call (281) 800-5008.",
  heroKicker: "PAINLESS ROOT CANAL THERAPY IN KATY",
  heroHeading: "Root Canal in Katy, TX",
  heroBody: "Root canals have a reputation they don't deserve. With modern techniques and sedation options, treatment at Smile Avenue Katy is comfortable, efficient, and saves your natural tooth.",
  heroCta1: "Book Root Canal Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Root Canal Photo",
  introKicker: "ABOUT ROOT CANALS", introHeading: "What Is Root Canal Therapy?",
  introParas: [
    "Root canal therapy, or endodontic treatment, removes infected or damaged tissue (the pulp) from inside a tooth. The tooth is then cleaned, sealed, and restored with a crown to function normally for years to come.",
    "When the pulp becomes infected due to deep decay, cracks, or trauma, it causes intense pain and can lead to abscess and bone loss if untreated. A root canal eliminates the infection while preserving your natural tooth.",
    "At Smile Avenue Katy, we use rotary instruments and digital imaging for faster, more comfortable root canals. Patients from Cinco Ranch, Firethorne, and Cross Creek Ranch trust us for gentle endodontic care."
  ],
  trustBadges: [
    { icon: <Heart className="w-5 h-5" />, label: "Gentle & Painless" },
    { icon: <Shield className="w-5 h-5" />, label: "Save Your Natural Tooth" },
    { icon: <Users className="w-5 h-5" />, label: "Trusted by 5,000+ Families" },
  ],
  subServicesKicker: "ROOT CANAL TREATMENTS", subServicesHeading: "Endodontic Services We Offer",
  subServicesBody: "We provide comprehensive endodontic care for all types of root canal needs.",
  subServices: [
    { title: "Front Tooth Root Canal", description: "Front teeth have a single root canal and are typically the quickest and most straightforward to treat.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Molar Root Canal", description: "Molars have multiple root canals and require more time, but our advanced instruments make the process efficient and comfortable.", icon: <Shield className="w-5 h-5" /> },
    { title: "Retreatment", description: "If a previous root canal has failed or reinfected, we can retreat the tooth to save it from extraction.", icon: <Zap className="w-5 h-5" /> },
    { title: "Post & Core", description: "After root canal therapy, we can place a post and core buildup to provide additional support for the final crown.", icon: <Syringe className="w-5 h-5" /> },
  ],
  processKicker: "YOUR ROOT CANAL VISIT", processHeading: "What to Expect",
  processBody: "Modern root canals are nothing like what you've heard. Here's what actually happens.",
  processSteps: [
    { number: "01", title: "Diagnosis", description: "We take digital X-rays to identify the source of infection and determine the best treatment approach.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Numbing & Comfort", description: "The area is completely numbed. Sedation options are available if you experience dental anxiety.", icon: <Heart className="w-6 h-6" /> },
    { number: "03", title: "Pulp Removal", description: "We carefully remove the infected pulp, clean and shape the root canals, then seal them to prevent reinfection.", icon: <Syringe className="w-6 h-6" /> },
    { number: "04", title: "Crown Restoration", description: "A custom crown is placed over the treated tooth to restore its full strength and natural appearance.", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "Root Canal FAQ",
  faqs: [
    { question: "How much does a root canal cost in Katy, TX?", answer: "Root canals typically range from $700-$1,200 for front teeth and $900-$1,500 for molars, not including the crown. Most dental insurance covers a significant portion. We offer financing through CareCredit and Sunbit." },
    { question: "Are root canals painful?", answer: "Modern root canals are no more uncomfortable than getting a filling. We completely numb the area and offer sedation for anxious patients." },
    { question: "How long does a root canal take?", answer: "Most root canals take 60-90 minutes. Front teeth are quicker; molars may take slightly longer due to multiple canals." },
    { question: "What happens if I don't get a root canal?", answer: "An untreated infection will worsen, potentially causing abscess, bone loss, and the need for extraction. Early treatment saves the tooth." },
    { question: "Can I drive home after a root canal?", answer: "If you had only local anesthesia, yes. If you opted for sedation, you'll need someone to drive you home." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Root Canal Reviews",
  testimonials: [
    { quote: "I was terrified of getting a root canal but it was honestly painless. Dr. Yahya was so gentle and the whole thing took about an hour. Wish I hadn't waited so long!", name: "Christina R.", source: "Google Review" },
    { quote: "Had a molar root canal at the Katy office. No pain during or after. The technology they use is impressive and the staff kept me completely at ease.", name: "Steven K.", source: "Google Review" },
    { quote: "Root canal + same-day crown all done in one visit. I came in with a terrible toothache and left pain-free with a beautiful crown. Amazing experience.", name: "Priya N.", source: "Google Review" },
  ],
  ctaHeading: "Stop the Pain — Save Your Tooth",
  ctaBody: "Book a root canal appointment at our Katy office. Modern, gentle treatment that preserves your natural smile.",
};

const RootCanalKaty = () => <ServicePageTemplate data={data} />;
export default RootCanalKaty;
