import { Link } from "react-router-dom";
import { Shield, Star, Users, Eye, Printer, SmilePlus, ScanLine } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Invisalign",
  serviceSlug: "invisalign",
  metaTitle: "Invisalign Cypress, TX | Clear Aligners for Adults & Teens | Smile Avenue",
  metaDescription: "Straighten teeth discreetly with Invisalign in Cypress, TX. Custom clear aligners, in-house fabrication, flexible payment. Call (832) 648-1756.",
  heroKicker: "CLEAR ALIGNERS IN CYPRESS",
  heroHeading: "Invisalign Clear Aligners in Cypress, TX",
  heroBody: "Crooked, crowded, or gapped teeth do not require metal brackets. Invisalign at Smile Avenue Cypress offers virtually invisible teeth straightening without disrupting your daily life.",
  heroCta1: "Book Free Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Invisalign",
  introKicker: "CLEAR ALIGNER THERAPY",
  introHeading: "How Invisalign Works",
  introParas: [
    "Invisalign uses custom clear plastic aligners to gradually move teeth into their ideal positions. Each set is worn for 1-2 weeks, 20-22 hours daily. Invisalign treats crowding, gaps, overbites, underbites, and crossbites — all while being removable for eating and brushing.",
    <>We also fabricate custom aligners in-house with 3D printing at competitive prices, offering an alternative to traditional Invisalign for qualifying cases. Whether you choose Invisalign or our in-house option, families from Towne Lake, Fairfield, and Cypress trust Smile Avenue for beautiful, straight smiles. Invisalign pairs well with <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">professional whitening</Link> after treatment, and our <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic dentistry</Link> team can help plan your complete smile transformation.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "In-House Aligner Fabrication" },
    { icon: <Users className="w-5 h-5" />, label: "Experienced Providers" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Invisalign",
  subServicesBody: "In-house aligner fabrication, digital scanning, and experienced providers.",
  subServices: [
    { title: "In-House Aligner Fabrication", description: "We fabricate custom aligners in-house with 3D printing at competitive prices — cutting costs and turnaround time.", icon: <Printer className="w-5 h-5" /> },
    { title: "Digital Medit Scanning", description: "No goopy impressions. Our Medit digital scanners create precise 3D models of your teeth for perfect-fitting aligners.", icon: <Eye className="w-5 h-5" /> },
    { title: "Experienced Clear Aligner Providers", description: "Our doctors have extensive experience with Invisalign and clear aligner therapy for teens and adults.", icon: <Users className="w-5 h-5" /> },
    { title: "Removable & Virtually Invisible", description: "Eat what you want, brush normally, and smile confidently — no one will know you're straightening your teeth.", icon: <SmilePlus className="w-5 h-5" /> },
  ],
  processKicker: "YOUR INVISALIGN JOURNEY",
  processHeading: "What to Expect",
  processBody: "A clear path to a straighter smile.",
  processSteps: [
    { number: "01", title: "Consultation & Digital Scan", description: "We evaluate your smile, take digital scans with our Medit scanner, and show you a virtual preview of your projected results.", icon: <ScanLine className="w-5 h-5" /> },
    { number: "02", title: "Custom Aligner Fabrication", description: "Your aligners are custom-made — either through Invisalign or fabricated in-house with our 3D printing technology.", icon: <Printer className="w-5 h-5" /> },
    { number: "03", title: "Wear Your Aligners", description: "Wear aligners 20-22 hours daily, changing to the next set every 1-2 weeks as your teeth gradually shift into place.", icon: <SmilePlus className="w-5 h-5" /> },
    { number: "04", title: "Completion & Retainer", description: "Once treatment is complete, custom retainers maintain your beautiful new smile for long-term results.", icon: <Star className="w-5 h-5" /> },
  ],
  faqHeading: "Invisalign Questions",
  faqs: [
    { question: "How much does Invisalign cost?", answer: "Costs vary by case — we offer a free consultation to provide a detailed estimate. Many insurance plans cover partial orthodontic treatment. CareCredit financing and payment plans available." },
    { question: "How long does Invisalign take?", answer: "Most cases take 6-18 months. Minor cases with our in-house aligners can complete in as few as 3-6 months. We'll give you a clear timeline during your consultation." },
    { question: "Does Invisalign hurt?", answer: "You may feel mild pressure when switching to a new set of aligners, which is a sign the treatment is working. Most patients find Invisalign much more comfortable than traditional braces." },
    { question: "Can I eat normally with Invisalign?", answer: "Yes! You remove your aligners to eat and drink, so there are no food restrictions. Just brush before putting them back in." },
    { question: "Is Invisalign as effective as braces?", answer: "For most cases, yes. Invisalign effectively treats crowding, gaps, overbites, underbites, and crossbites. Complex cases may still benefit from traditional braces." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "I always wanted straight teeth but didn't want metal braces as an adult. Invisalign at Smile Avenue was the perfect solution — no one even noticed I was wearing them!", name: "Jessica F.", source: "Google Review" },
    { quote: "My daughter's Invisalign treatment was so smooth. She loved that she could take them out for meals and sports. Her smile looks amazing now.", name: "Catherine P.", source: "Google Review" },
    { quote: "10 months of Invisalign and my teeth are perfectly straight. The team at Smile Avenue was so encouraging throughout. Best decision I've made!", name: "Daniel G.", source: "Google Review" },
  ],
  ctaHeading: "Start Your Invisalign Journey Today",
  ctaBody: "Book a free Invisalign consultation and see how clear aligners can transform your smile.",
};

const InvisalignCypress = () => <ServicePageTemplate data={data} />;
export default InvisalignCypress;
