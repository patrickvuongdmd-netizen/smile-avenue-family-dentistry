import { Link } from "react-router-dom";
import { Shield, Star, Users, Heart, Stethoscope, Wrench, AlertCircle } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Tooth Extraction",
  serviceSlug: "tooth-extraction",
  videoId: "1nicifZjXoA",
  metaTitle: "Tooth Extraction Cypress, TX | Gentle & Safe Extractions | Smile Avenue",
  metaDescription: "Tooth extraction in Cypress, TX — wisdom teeth, simple & surgical extractions with sedation options. Same-day appointments available. Call (832) 648-1756.",
  heroKicker: "TOOTH EXTRACTION IN CYPRESS",
  heroHeading: "Tooth Extraction in Cypress, TX",
  heroBody: "Sometimes saving a tooth is not possible, and extraction is the best path to protecting your oral health. At Smile Avenue Cypress, we perform gentle extractions with sedation options.",
  heroCta1: "Book Appointment",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Tooth Extraction",
  heroValueProps: ["Gentle technique for minimal discomfort", "Sedation options available", "Same-day emergency extractions", "Tooth replacement options discussed at visit", "Most insurance accepted · 0% financing"],
  introKicker: "WHEN EXTRACTION IS NEEDED",
  introHeading: "Reasons for Tooth Extraction",
  introParas: [
    <>Extractions may be necessary for severely decayed teeth, cracked or fractured teeth, impacted wisdom teeth, overcrowded teeth, or teeth with failed <Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canals</Link>. Both simple extractions (for visible teeth) and surgical extractions (for impacted or broken teeth) are performed in-office.</>,
    <>We always discuss tooth replacement options — <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, <Link to="/cypress-tx/dental-bridges" className="text-primary hover:underline">bridges</Link>, or <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link> — so you have a plan for restoring your smile. <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">Sedation</Link> is available for anxious patients or complex extractions.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Technique" },
    { icon: <Users className="w-5 h-5" />, label: "Sedation Available" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us",
  subServicesBody: "Gentle technique, sedation options, and replacement planning.",
  subServices: [
    { title: "Gentle Technique", description: "Our doctors use modern, minimally invasive techniques to make extractions as comfortable as possible.", icon: <Heart className="w-5 h-5" /> },
    { title: "Sedation Options", description: "Nitrous oxide, oral sedation, and IV sedation available to ensure a stress-free, comfortable experience.", icon: <Shield className="w-5 h-5" /> },
    { title: "Same-Day When Possible", description: "For urgent cases, we offer same-day extractions to relieve your pain quickly.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Replacement Options Discussed", description: "We plan ahead — discussing implants, bridges, or dentures to replace your extracted tooth.", icon: <Wrench className="w-5 h-5" /> },
  ],
  processKicker: "THE EXTRACTION PROCESS",
  processHeading: "What to Expect",
  processBody: "A gentle, straightforward process from evaluation to recovery.",
  processSteps: [
    { number: "01", title: "Evaluation with Digital X-Rays", description: "We examine the tooth and take digital X-rays to plan the safest, most efficient extraction approach.", icon: <Stethoscope className="w-5 h-5" /> },
    { number: "02", title: "Anesthesia & Sedation", description: "The area is thoroughly numbed. Sedation options are available for anxious patients or complex extractions.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Gentle Extraction", description: "The tooth is carefully removed using specialized instruments designed to minimize trauma to surrounding tissue.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Replacement Planning", description: "We discuss tooth replacement options — implants, bridges, or dentures — to restore your smile.", icon: <Wrench className="w-5 h-5" /> },
  ],
  faqHeading: "Extraction Questions",
  faqs: [
    { question: "How much does a tooth extraction cost?", answer: "Costs vary by complexity. Insurance covers medically necessary extractions. CareCredit financing and our Membership Plan are available for any out-of-pocket costs." },
    { question: "Does tooth extraction hurt?", answer: "No — anesthesia completely numbs the area, and sedation options ensure total comfort. You'll feel pressure but no pain during the procedure. Post-extraction discomfort is manageable with medication." },
    { question: "How long is recovery?", answer: "Simple extractions heal within 3-7 days typically. Surgical extractions may take 1-2 weeks. Most patients return to normal activities within 1-2 days." },
    { question: "Should I replace the extracted tooth?", answer: "In most cases, yes. Missing teeth can cause shifting, bite problems, and bone loss over time. We offer dental implants, bridges, and dentures as replacement options." },
    { question: "Do you remove wisdom teeth?", answer: "Yes — we perform both simple and surgical wisdom tooth extractions, with sedation available for comfort. No referral to an outside oral surgeon needed." },
    { question: "What are my options after a tooth extraction?", answer: "After extraction, you can replace the tooth with a dental implant (most recommended for long-term health), a dental bridge, or a partial denture. We discuss all options during your consultation so you can make an informed decision." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Had a tooth extracted that was causing me pain for months. The whole thing took about 20 minutes and I barely felt anything. Healing was quick too.", name: "Marcus J.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "My daughter had all four wisdom teeth removed here. They used sedation and she had zero memory of the procedure. Recovery was smooth.", name: "Linda P.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "I was so nervous about having a tooth pulled but the doctor was incredibly gentle and calming. The extraction was painless and the follow-up care was thorough.", name: "Gregory T.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  locationFaqs: [
    { question: "Where can I get a tooth extraction in Cypress, TX?", answer: "Smile Avenue Family Dentistry at 9212 Fry Rd #120, Cypress, TX 77433 performs simple and surgical tooth extractions with sedation options. Same-day emergency extractions are available." },
    { question: "How much does a tooth extraction cost in Cypress?", answer: "Extraction costs depend on complexity — simple extractions cost less than surgical or wisdom tooth removals. Most PPO insurance plans cover medically necessary extractions. 0% financing available through CareCredit and Sunbit." },
    { question: "Does Smile Avenue Cypress offer same-day emergency extractions?", answer: "Yes. If you're in severe pain, we offer same-day emergency extractions. Call (832) 648-1756 and our team will get you in as quickly as possible for immediate relief." },
    { question: "Do you remove wisdom teeth at Smile Avenue Cypress?", answer: "Yes. We perform both simple and surgical wisdom tooth extractions in-office with IV sedation available. Our 3D CBCT imaging allows precise planning for safe, efficient removal." },
    { question: "What tooth replacement options are available after extraction in Cypress?", answer: "After extraction, we discuss dental implants (most recommended for long-term health), dental bridges, and dentures at your visit. We can often place a bone graft at extraction time to preserve bone for future implant placement." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Fry Road provides gentle tooth extraction services for patients across Cypress, TX. Whether you need a simple extraction, surgical removal of impacted wisdom teeth, or emergency same-day extraction, our experienced team handles it all in-office with sedation options for your comfort.",
    "What sets our Cypress extraction practice apart is our comprehensive approach. We don't just remove the tooth — we discuss replacement options (dental implants, bridges, or dentures) at the same visit so you have a plan for restoring your smile before you leave. For patients needing implants, we can often place a bone graft at the time of extraction to preserve bone for future implant placement.",
    "Our team uses modern, minimally invasive techniques designed to minimize trauma and speed healing. Combined with nitrous oxide, oral sedation, or IV sedation, most patients are surprised by how comfortable the experience is. Families from Bridgeland, Towne Lake, Fairfield, and Cy-Fair trust us for expert extraction care.",
    "Most PPO dental insurance plans cover medically necessary extractions. We verify your benefits before treatment and offer 0% financing through CareCredit and Sunbit for any out-of-pocket costs. Same-day emergency extractions are available — call (832) 648-1756 for immediate relief.",
  ],
  ctaHeading: "Relief Is One Call Away",
  ctaBody: "Don't suffer with tooth pain. Schedule a gentle extraction and get back to feeling great.",
};

const ToothExtractionCypress = () => <ServicePageTemplate data={data} />;
export default ToothExtractionCypress;
