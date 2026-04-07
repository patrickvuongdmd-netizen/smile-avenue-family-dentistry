import { Shield, Zap, Star, Scan, Wrench, Smile, Sparkles } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dentures",
  serviceSlug: "dentures",
  videoId: "NqiluaBGHpk",
  metaTitle: "Dentures Katy, TX | Full & Partial Dentures | Smile Avenue",
  metaDescription: "Dentures in Katy, TX — full, partial & implant-supported options custom-made in our in-house lab. Natural fit guaranteed. Call (281) 800-5008.",
  heroKicker: "CUSTOM DENTURES IN KATY",
  heroHeading: "Dentures in Katy, TX",
  heroBody: "Modern dentures from Smile Avenue Katy are crafted in our in-house lab for natural appearance and comfortable fit. Full, partial, and implant-supported options available.",
  heroCta1: "Book Denture Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Dentures Photo",
  heroValueProps: ["Full, partial & implant-supported options", "Custom-crafted in our in-house lab", "Natural appearance & comfortable fit", "Same-day relines & repairs available", "Most insurance accepted · 0% financing"],
  introKicker: "ABOUT DENTURES", introHeading: "What Are Dentures?",
  introParas: [
    "Dentures are removable prosthetic devices designed to replace missing teeth and surrounding tissue. Modern dentures are more comfortable, natural-looking, and functional than ever before.",
    "Whether you're missing a few teeth or an entire arch, we offer solutions tailored to your needs — from traditional full and partial dentures to implant-supported options that eliminate slipping and adhesives.",
    "At Smile Avenue Katy, we use digital impressions and our in-house Smile Dental Lab to ensure every denture fits precisely and looks natural. Patients from Cinco Ranch, Firethorne, Cross Creek Ranch, and Elyson trust us for comfortable, beautiful dentures."
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "In-House Lab" },
    { icon: <Scan className="w-5 h-5" />, label: "Digital Impressions" },
    { icon: <Wrench className="w-5 h-5" />, label: "Same-Day Adjustments" },
    { icon: <Zap className="w-5 h-5" />, label: "Implant-Supported Option" },
  ],
  subServicesKicker: "DENTURE OPTIONS", subServicesHeading: "Denture Solutions We Offer",
  subServicesBody: "We provide the right denture solution for every patient's needs and budget.",
  subServices: [
    { title: "Full Dentures", description: "Complete upper or lower dentures that replace an entire arch of missing teeth. Custom-fitted for comfort and natural appearance.", icon: <Smile className="w-5 h-5" /> },
    { title: "Partial Dentures", description: "Replace several missing teeth while preserving your remaining natural teeth. Metal or flexible framework options available.", icon: <Star className="w-5 h-5" /> },
    { title: "Implant-Supported Dentures", description: "Snap-in dentures anchored by dental implants for superior stability — no slipping, no adhesives, no embarrassment.", icon: <Zap className="w-5 h-5" /> },
    { title: "Denture Repair & Relines", description: "Quick repairs for cracked, chipped, or broken dentures. We also offer relines and adjustments for improved fit.", icon: <Wrench className="w-5 h-5" /> },
  ],
  processKicker: "YOUR DENTURE JOURNEY", processHeading: "What to Expect",
  processBody: "We take a thorough, personalized approach to ensure your dentures fit perfectly.",
  processSteps: [
    { number: "01", title: "Consultation & Impressions", description: "We examine your mouth, discuss your goals, and take precise digital impressions for your custom dentures.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Design & Fabrication", description: "Your dentures are designed and fabricated in our in-house Smile Dental Lab for precise fit and natural appearance.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "03", title: "Try-In", description: "Before finalizing, you try a model to verify the fit, bite, and appearance. Adjustments are made as needed.", icon: <Smile className="w-6 h-6" /> },
    { number: "04", title: "Delivery & Adjustments", description: "Your finished dentures are delivered and adjusted for a perfect fit. We provide care instructions and schedule follow-ups.", icon: <Shield className="w-6 h-6" /> },
    { number: "05", title: "Follow-Up", description: "We schedule follow-up visits to optimize comfort and make any needed adjustments as you adapt.", icon: <Star className="w-6 h-6" /> },
  ],
  faqHeading: "Denture FAQ",
  faqs: [
    { question: "How much do dentures cost in Katy, TX?", answer: "Cost varies by type — we provide a personalized estimate at your consultation. Insurance often covers a portion. CareCredit financing and our Membership Plan are also available." },
    { question: "How long does it take to get used to dentures?", answer: "Most patients adjust within 2-4 weeks. Start with soft foods and gradually reintroduce harder items as you become comfortable." },
    { question: "Can I eat normally with dentures?", answer: "Yes, with practice most patients eat normally. Implant-supported dentures offer even better stability for eating virtually anything." },
    { question: "How long do dentures last?", answer: "With proper care, dentures typically last 5-10 years before needing replacement. Relines may be needed every 1-2 years." },
    { question: "Implant-supported vs traditional dentures?", answer: "Implant-supported dentures eliminate slipping, are more comfortable, and feel more like natural teeth. They snap onto dental implants for superior stability." },
    { question: "Can I convert my dentures to implant-supported dentures?", answer: "Yes! Many patients upgrade from traditional removable dentures to implant-supported dentures or All-on-4 for a permanent, non-removable solution. This eliminates slipping, adhesives, and dietary restrictions." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Denture Reviews",
  testimonials: [
    { quote: "Got implant-supported dentures and it's like having real teeth again. No more adhesive, no slipping. I can eat anything. Life-changing!", name: "Barbara W.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "My new partial denture from Smile Avenue Katy fits perfectly and looks so natural. Nobody can tell which teeth are real and which aren't.", name: "Henry L.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "The team took extra time to make sure my full dentures looked natural and felt comfortable. The fit is excellent and I'm smiling again!", name: "Dolores C.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  locationFaqs: [
    { question: "Where can I get dentures in Katy, TX?", answer: "Smile Avenue Family Dentistry at 21860 Westheimer Pkwy #110, Katy, TX 77450 offers full dentures, partial dentures, and implant-supported overdentures — all crafted in our in-house Smile Dental Lab." },
    { question: "How much do dentures cost in Katy?", answer: "Denture costs vary by type and materials. Most PPO insurance plans cover a portion. We provide transparent pricing upfront and offer 0% financing through CareCredit and Sunbit for any balance." },
    { question: "Does Smile Avenue Katy make dentures in-house?", answer: "Yes. Our in-house Smile Dental Lab fabricates all dentures on-site — enabling same-day adjustments, faster turnaround, and superior quality control compared to offices that outsource." },
    { question: "Can I get implant-supported dentures in Katy?", answer: "Yes. We offer implant-supported overdentures that snap onto implants for maximum stability without adhesives. For a permanent, non-removable option, we also provide All-on-X full-arch restorations." },
    { question: "How long does it take to get dentures at Smile Avenue Katy?", answer: "The process typically takes 3-5 appointments over several weeks. Immediate dentures can be placed same-day as extractions so you're never without teeth. Our in-house lab ensures faster completion." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Westheimer Parkway is the Katy practice patients trust for comfortable, natural-looking dentures. Our in-house Smile Dental Lab fabricates every set of dentures on-site — giving us full control over fit, aesthetics, and turnaround time that external labs simply can't match.",
    "We offer the complete range of denture solutions: traditional full dentures for patients missing an entire arch, flexible partial dentures for those with some remaining natural teeth, and implant-supported overdentures that snap onto dental implants for maximum stability without adhesives.",
    "Our Katy office advantage is same-day adjustments and relines. During the initial adjustment period, many patients need small tweaks — and because our lab is right here, we handle them on the spot rather than sending your dentures away for days. Patients from Cinco Ranch, Firethorne, Cross Creek Ranch, and Fulshear appreciate this convenience.",
    "We use digital impressions for a more accurate fit and provide transparent pricing with most PPO insurance plans accepted. 0% financing through CareCredit and Sunbit is available, and our Saturday hours (8am-2pm) make consultations convenient for busy patients.",
  ],
  ctaHeading: "Restore Your Smile with Custom Dentures",
  ctaBody: "Book a denture consultation at our Katy office and explore your tooth replacement options.",
};

const DenturesKaty = () => <ServicePageTemplate data={data} />;
export default DenturesKaty;
