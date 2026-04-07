import { Link } from "react-router-dom";
import { Shield, Star, Users, Crown, Scan, Wrench, SmilePlus } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Dentures",
  serviceSlug: "dentures",
  videoId: "NqiluaBGHpk",
  metaTitle: "Dentures Cypress, TX | Full & Partial Dentures | Smile Avenue",
  metaDescription: "Dentures in Cypress, TX — full, partial & implant-supported options custom-made in our in-house lab. Natural fit guaranteed. Call (832) 648-1756.",
  heroKicker: "DENTURES IN CYPRESS",
  heroHeading: "Dentures in Cypress, TX",
  heroBody: "Modern dentures are nothing like what your grandparents wore. At Smile Avenue Cypress, we create custom dentures using our in-house Smile Dental Lab — delivering natural-looking results that fit comfortably and restore your ability to eat, speak, and smile with confidence.",
  heroCta1: "Book Denture Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Dentures",
  heroValueProps: ["Full, partial & implant-supported options", "Custom-crafted in our in-house lab", "Natural appearance & comfortable fit", "Same-day relines & repairs available", "Most insurance accepted · 0% financing"],
  introKicker: "TOOTH REPLACEMENT OPTIONS",
  introHeading: "Modern Denture Solutions",
  introParas: [
    <>Dentures are removable replacements for missing teeth, available in several types to match your specific needs. Full dentures replace an entire arch of teeth, while partial dentures fill gaps when you still have healthy natural teeth remaining. For the most stable solution, <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">implant-supported dentures</Link> snap onto dental implants for a secure fit without adhesives.</>,
    <>Every set of dentures at Smile Avenue is crafted in our in-house Smile Dental Lab for precise fit and natural appearance. We use digital impressions — no goopy molds — and can make same-day adjustments because our lab is right here. Patients from Bridgeland, Towne Lake, and Cypress trust us for comfortable, beautiful dentures. For patients considering a permanent fixed solution, ask about our <Link to="/cypress-tx/all-on-x-implants" className="text-primary hover:underline">All-on-X implants</Link>.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Crown className="w-5 h-5" />, label: "In-House Lab" },
    { icon: <Users className="w-5 h-5" />, label: "Same-Day Adjustments" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Dentures",
  subServicesBody: "In-house lab precision, digital impressions, and implant-supported options.",
  subServices: [
    { title: "In-House Smile Dental Lab", description: "Our on-site lab fabricates your dentures for precise fit, natural appearance, and faster turnaround.", icon: <Crown className="w-5 h-5" /> },
    { title: "Digital Impressions", description: "No goopy molds — we use digital scanning for comfortable, accurate impressions.", icon: <Scan className="w-5 h-5" /> },
    { title: "Same-Day Adjustments & Relines", description: "Because we have an in-house lab, adjustments and relines are done quickly — often the same day.", icon: <Wrench className="w-5 h-5" /> },
    { title: "Implant-Supported Option", description: "For maximum stability, we offer dentures anchored by dental implants — no adhesives, no slipping.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "THE DENTURE PROCESS",
  processHeading: "What to Expect",
  processBody: "A thorough process ensuring your dentures fit perfectly.",
  processSteps: [
    { number: "01", title: "Consultation & Digital Impressions", description: "We evaluate your oral health, discuss your goals, and take precise digital impressions for your custom dentures.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Denture Design & Fabrication", description: "Your dentures are designed and fabricated in our in-house Smile Dental Lab for a natural look and precise fit.", icon: <Crown className="w-5 h-5" /> },
    { number: "03", title: "Try-In Appointment", description: "You try a model of your dentures so we can verify fit, bite, and appearance before final fabrication.", icon: <SmilePlus className="w-5 h-5" /> },
    { number: "04", title: "Final Delivery & Adjustments", description: "Your finished dentures are delivered, adjusted for comfort, and you receive care instructions.", icon: <Wrench className="w-5 h-5" /> },
  ],
  faqHeading: "Denture Questions",
  faqs: [
    { question: "How much do dentures cost?", answer: "Costs vary by type — full, partial, or implant-supported. We provide a detailed estimate at your consultation. Insurance often covers a portion, and CareCredit financing and our Membership Plan are available." },
    { question: "How long does it take to get used to dentures?", answer: "Most patients adjust within 2-4 weeks. Your mouth needs time to adapt to the new prosthesis. We schedule follow-up visits to make adjustments as needed during this period." },
    { question: "Can I eat normally with dentures?", answer: "Yes, with practice. Start with soft foods and gradually work up to harder items. Implant-supported dentures offer even better chewing ability and stability." },
    { question: "How long do dentures last?", answer: "Traditional dentures typically last 5-10 years before needing replacement as your jaw shape changes over time. Regular checkups help us monitor fit and recommend relines or replacement when needed." },
    { question: "Implant-supported vs traditional dentures?", answer: "Implant-supported dentures snap onto dental implants for superior stability — no adhesives, no slipping. They're more comfortable, allow you to eat more foods, and help preserve jawbone. They're a bigger investment but offer dramatically better quality of life." },
    { question: "Can I convert my dentures to implant-supported dentures?", answer: "Yes! Many patients upgrade from traditional removable dentures to implant-supported dentures or All-on-4 for a permanent, non-removable solution. This eliminates slipping, adhesives, and dietary restrictions." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My new dentures from Smile Avenue look so natural — even my friends can't tell. The in-house lab made the whole process faster than I expected.", name: "Patricia A.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "I switched to implant-supported dentures and it was life-changing. No more adhesive, no more worrying about them slipping. Wish I'd done it years ago.", name: "George F.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "The team was so patient during the whole denture process. Multiple fittings to get everything just right. The final result was worth the wait.", name: "Dorothy N.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Fry Road is the Cypress practice patients choose for comfortable, natural-looking dentures. Our in-house Smile Dental Lab crafts every set of dentures on-site — allowing us to control fit, aesthetics, and turnaround time in ways that practices relying on external labs simply cannot.",
    "We offer the full range of denture solutions: traditional full dentures, flexible partial dentures, and implant-supported overdentures that snap onto dental implants for maximum stability. For patients who want a permanent, non-removable solution, we also provide All-on-X full-arch restorations.",
    "One advantage of our in-house lab is same-day adjustments and relines. If your denture needs a tweak, we handle it on the spot rather than sending it away for days. Patients from Bridgeland, Towne Lake, Fairfield, and Cy-Fair appreciate this convenience, especially during the initial adjustment period.",
    "We use digital impressions (no goopy molds) for a more accurate fit and natural appearance. Most PPO insurance plans cover a portion of denture costs, and we offer 0% financing through CareCredit and Sunbit for the balance.",
  ],
  ctaHeading: "Restore Your Smile with Custom Dentures",
  ctaBody: "Schedule your denture consultation and discover which option is right for you.",
};

const DenturesCypress = () => <ServicePageTemplate data={data} />;
export default DenturesCypress;
