import { Link } from "react-router-dom";
import { Shield, Zap, Star, Users, Crown, Wrench, Scan } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Dental Crowns",
  serviceSlug: "dental-crowns",
  metaTitle: "Dental Crowns Cypress, TX | Same-Day Custom Crowns | Smile Avenue",
  metaDescription: "Same-day dental crowns in Cypress, TX. Porcelain & zirconia crowns crafted in our in-house lab with digital impressions. Insurance & financing. Call (832) 648-1756.",
  heroKicker: "CUSTOM CROWNS IN CYPRESS",
  heroHeading: "Dental Crowns in Cypress, TX",
  heroBody: "A damaged tooth deserves a restoration that looks and feels natural. At Smile Avenue Cypress, our in-house Smile Dental Lab designs and fabricates custom porcelain and zirconia crowns with digital precision — faster turnaround than practices that outsource their lab work.",
  heroCta1: "Book Crown Appointment",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Dental Crowns",
  heroValueProps: ["In-house Smile Dental Lab for precise fit", "Porcelain & zirconia options", "Digital impressions — no goopy molds", "Faster turnaround than outside labs", "Most insurance accepted · 0% financing"],
  introKicker: "ABOUT DENTAL CROWNS",
  introHeading: "What Is a Dental Crown?",
  introParas: [
    <>A dental crown is a custom cap that covers and protects a damaged tooth, restoring its shape, size, strength, and appearance. Crowns are used for post-<Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canal</Link> protection, severe decay repair, cracked tooth repair, <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implant</Link> coverage, cosmetic improvement, and <Link to="/cypress-tx/dental-bridges" className="text-primary hover:underline">bridge</Link> anchoring.</>,
    "At Smile Avenue Cypress, our in-house Smile Dental Lab fabricates custom crowns using digital Medit impressions — no goopy molds. We offer both porcelain and zirconia options with precise shade matching for a natural result. Patients from Towne Lake, Spring Cypress, and Cypress trust us for quality crown restorations with faster turnaround than practices that outsource to external labs.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Crown className="w-5 h-5" />, label: "In-House Lab" },
    { icon: <Users className="w-5 h-5" />, label: "Porcelain & Zirconia" },
  ],
  subServicesKicker: "WHY SMILE AVENUE",
  subServicesHeading: "Why Choose Us for Dental Crowns",
  subServicesBody: "In-house lab precision, digital impressions, and expert craftsmanship.",
  subServices: [
    { title: "In-House Smile Dental Lab", description: "Custom crowns designed and fabricated on-site for precise fit, faster turnaround, and perfect shade matching — no outsourcing.", icon: <Zap className="w-5 h-5" /> },
    { title: "Digital Medit Impressions", description: "No goopy molds. We use Medit digital scanners for precise, comfortable impressions that produce better-fitting crowns.", icon: <Scan className="w-5 h-5" /> },
    { title: "Porcelain & Zirconia Options", description: "We offer both Emax porcelain and zirconia crown materials — each custom-selected to match your tooth and functional needs.", icon: <Wrench className="w-5 h-5" /> },
    { title: "Natural Shade-Matched Appearance", description: "Every crown is custom color-matched to blend seamlessly with your natural teeth for an invisible restoration.", icon: <Crown className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CROWN PROCESS",
  processHeading: "What to Expect",
  processBody: "A precise, two-visit process for a perfect-fitting crown.",
  processSteps: [
    { number: "01", title: "Examination & Digital Scan", description: "We examine the tooth and take a precise 3D digital scan using our Medit scanner — no goopy impressions needed.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Crown Design", description: "Your crown is designed using a digital workflow for a custom, precise fit and natural appearance.", icon: <Crown className="w-5 h-5" /> },
    { number: "03", title: "In-House Fabrication", description: "Your crown is fabricated in our Smile Dental Lab using high-quality porcelain or zirconia for strength and beauty.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Fitting & Permanent Bonding", description: "Your finished crown is fitted, adjusted for a perfect bite, and permanently bonded at your follow-up appointment.", icon: <Wrench className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Crown Questions",
  faqs: [
    { question: "How much do crowns cost in Cypress?", answer: "Depends on material and insurance coverage. Most PPO plans provide partial coverage for dental crowns. We also offer CareCredit financing and our membership plan for uninsured patients." },
    { question: "How many visits for a crown?", answer: "Our in-house Smile Dental Lab allows for faster turnaround than practices that outsource to external labs. Most crown cases are completed in two visits — one for preparation and impressions, and one for final placement." },
    { question: "How long do dental crowns last?", answer: "10–15+ years with proper care. Regular checkups, good hygiene, and avoiding habits like teeth grinding help extend their lifespan." },
    { question: "What crown materials do you offer?", answer: "We offer both Emax porcelain and zirconia crowns. Our in-house Smile Dental Lab fabricates each crown with precise shade matching for a natural, seamless result." },
    { question: "Does getting a crown hurt?", answer: "No. Local anesthesia ensures complete comfort during the procedure. Sedation is also available for anxious patients." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My crown from Smile Avenue looks just like my natural teeth. The digital scan was comfortable and the in-house lab did an incredible job with the color match.", name: "Amanda T.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "I was impressed by how fast I got my crown — much quicker than my old dentist who sent everything to an outside lab. And the fit is perfect.", name: "Steve R.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "Dr. Vuong replaced an old metal crown with a beautiful porcelain one. The color match is perfect. I'm so happy with how it turned out.", name: "Diana K.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "Restore Your Smile with a Custom Crown",
  ctaBody: "Custom crowns from our in-house Smile Dental Lab — precision craftsmanship, faster turnaround.",
};

const DentalCrownsCypress = () => <ServicePageTemplate data={data} />;
export default DentalCrownsCypress;
