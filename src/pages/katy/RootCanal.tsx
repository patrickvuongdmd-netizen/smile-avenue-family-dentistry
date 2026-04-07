import { Shield, Zap, Stethoscope, Scan, Syringe, Heart, Star } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Root Canal",
  serviceSlug: "root-canal",
  videoId: "y1YYnlsar3U",
  metaTitle: "Root Canal Katy, TX | Gentle, Pain-Free Treatment | Smile Avenue",
  metaDescription: "Root canal in Katy, TX — painless treatment with sedation options. Save your natural tooth in one visit. Insurance & 0% financing. Call (281) 800-5008.",
  heroKicker: "GENTLE ROOT CANAL IN KATY",
  heroHeading: "Root Canal Treatment in Katy, TX",
  heroBody: "Modern root canal at Smile Avenue Katy is nothing like its reputation. Gentle technique, sedation options, and our in-house lab for fast crown turnaround make it comfortable.",
  heroCta1: "Book Appointment",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Root Canal Photo",
  heroValueProps: ["Gentle, virtually painless procedure", "Sedation options for complete comfort", "Save your natural tooth in one visit", "In-house lab for fast crown turnaround", "Most insurance accepted · 0% financing"],
  introKicker: "SAVE YOUR NATURAL TOOTH",
  introHeading: "Modern Root Canal Treatment",
  introParas: [
    "A root canal saves a tooth with infected or inflamed pulp — the soft tissue inside the tooth containing nerves and blood vessels. Infection is typically caused by deep decay, repeated dental procedures, cracks, or trauma. During treatment, the infected pulp is removed, the inside is cleaned, disinfected, and shaped, then filled, sealed, and crowned.",
    "Without treatment, infection can spread to surrounding bone and tissue, and the tooth will eventually be lost. At Smile Avenue Katy, we use advanced rotary instruments and gentle technique to make root canals comfortable and efficient. Our in-house Smile Dental Lab fabricates your permanent crown with faster turnaround than practices that outsource. Patients across Cinco Ranch, Firethorne, and Westheimer Parkway trust us for pain-free root canal treatment.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Approach" },
    { icon: <Zap className="w-5 h-5" />, label: "In-House Crown Lab" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Root Canals",
  subServicesBody: "Modern technology for comfortable, efficient treatment.",
  subServices: [
    { title: "Gentle Modern Approach", description: "Advanced rotary instruments and refined technique make modern root canals comfortable — nothing like the old reputation.", icon: <Heart className="w-5 h-5" /> },
    { title: "Sedation for Comfort", description: "Nitrous oxide, oral sedation, and IV sedation options ensure you're completely comfortable throughout the procedure.", icon: <Syringe className="w-5 h-5" /> },
    { title: "In-House Crown Fabrication", description: "After your root canal, our Smile Dental Lab fabricates your permanent crown with faster turnaround than outside labs.", icon: <Zap className="w-5 h-5" /> },
    { title: "Pain Relief, Not Pain", description: "Root canals relieve the pain of infection. Most patients feel immediate relief and are surprised how comfortable the procedure is.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "THE ROOT CANAL PROCESS",
  processHeading: "What to Expect",
  processBody: "A comfortable, straightforward procedure that saves your tooth.",
  processSteps: [
    { number: "01", title: "Diagnosis with Digital X-Rays", description: "We identify the infected tooth and assess the extent of infection using digital imaging.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Anesthesia & Sedation", description: "The area is thoroughly numbed. Sedation options are available for anxious patients.", icon: <Syringe className="w-5 h-5" /> },
    { number: "03", title: "Infected Pulp Removal", description: "The infected pulp is carefully removed using advanced rotary instruments.", icon: <Stethoscope className="w-5 h-5" /> },
    { number: "04", title: "Canal Filling & Sealing", description: "The cleaned canals are filled with biocompatible material and sealed to prevent reinfection.", icon: <Shield className="w-5 h-5" /> },
    { number: "05", title: "Crown Placement", description: "A custom crown is fabricated in our in-house Smile Dental Lab and placed at your follow-up visit to protect your treated tooth.", icon: <Zap className="w-5 h-5" /> },
  ],
  faqHeading: "Root Canal Questions",
  faqs: [
    { question: "How much does a root canal cost?", answer: "Costs vary by tooth — front teeth are simpler than molars. Insurance usually covers a significant portion of root canal treatment. CareCredit financing available for any remaining balance." },
    { question: "Is a root canal painful?", answer: "No — a root canal actually relieves the pain caused by infection. With modern anesthesia and sedation, the procedure itself is comfortable. Most patients are surprised how easy it is." },
    { question: "How long does a root canal take?", answer: "Typically 60-90 minutes. A follow-up visit is usually needed for crown placement. Our in-house lab provides faster turnaround than outside labs." },
    { question: "What happens if I skip the root canal?", answer: "The infection will worsen, potentially spreading to surrounding bone and tissue. The tooth will eventually be lost, and you'll need a more expensive replacement like an implant." },
    { question: "Do I need a crown after a root canal?", answer: "Usually yes — a crown protects the treated tooth from fracturing. Our in-house Smile Dental Lab fabricates your crown with faster turnaround than practices that outsource." },
    { question: "How do I know if I need a root canal?", answer: "Common signs include persistent tooth pain, prolonged sensitivity to hot or cold, darkening of the tooth, swelling or tenderness in nearby gums, and a recurring pimple on the gums. Only a dental exam with X-rays can confirm if a root canal is needed." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "I was dreading the root canal but it was completely painless. The sedation helped and Dr. Bilal was so gentle. The crown came out great too!", name: "Angela M.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "I came in with excruciating tooth pain and left feeling amazing. The root canal was nothing like I feared. The relief was immediate.", name: "Steven R.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "The whole process was smooth and I didn't feel a thing. The in-house lab made the crown turnaround really fast. Highly recommend Smile Avenue.", name: "Laura K.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  locationFaqs: [
    { question: "Where can I get a root canal in Katy, TX?", answer: "Smile Avenue Family Dentistry at 21860 Westheimer Pkwy #110, Katy, TX 77450 performs gentle root canal treatment with modern rotary instruments and multiple sedation options for comfort." },
    { question: "How much does a root canal cost in Katy?", answer: "Root canal costs vary by tooth — front teeth are less complex than molars. Most PPO dental plans cover a significant portion of root canal therapy. We offer 0% financing through CareCredit and Sunbit." },
    { question: "Does a root canal hurt at Smile Avenue Katy?", answer: "No. Modern root canal treatment is comfortable — most patients compare it to getting a filling. We also offer nitrous oxide, oral sedation, and IV sedation for anxious patients." },
    { question: "Can I get a same-day emergency root canal in Katy?", answer: "Yes. If you're in pain from an infected tooth, call (281) 800-5008 for same-day emergency care. We'll relieve your pain and begin treatment immediately." },
    { question: "Do I need a crown after a root canal in Katy?", answer: "Usually, yes. A crown protects the treated tooth from fracture. Our in-house Smile Dental Lab fabricates crowns on-site for faster turnaround and precise fit." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Westheimer Parkway is where Katy patients come for gentle, modern root canal treatment. Our advanced rotary instruments and refined technique make today's root canals comfortable and efficient — nothing like the painful reputation from decades past.",
    "After removing the infection, our in-house Smile Dental Lab fabricates your permanent crown on-site — meaning faster turnaround and fewer appointments compared to offices that ship impressions to external labs. Many patients are surprised to learn that root canal and crown can be completed in just two visits.",
    "We offer multiple sedation options for anxious patients: nitrous oxide for mild relaxation, oral sedation for moderate anxiety, and IV sedation for patients who prefer to sleep through the procedure. Dr. Bilal and Dr. Vuong are experienced in gentle endodontic therapy and monitor every patient continuously.",
    "Patients from Cinco Ranch, Cross Creek Ranch, Firethorne, and Fulshear trust us for root canal treatment because we combine clinical expertise with genuine compassion. Most PPO plans cover a significant portion of root canal therapy, and we offer 0% financing through CareCredit and Sunbit.",
  ],
  ctaHeading: "Relief Is One Call Away",
  ctaBody: "Don't suffer with tooth pain. Schedule your gentle root canal treatment at Smile Avenue Katy.",
};

const RootCanalKaty = () => <ServicePageTemplate data={data} />;
export default RootCanalKaty;
