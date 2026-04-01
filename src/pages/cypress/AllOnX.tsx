import { Link } from "react-router-dom";
import { Shield, Zap, Star, Users, FlaskConical, Scan, Layers } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "All-on-X Implants",
  serviceSlug: "all-on-x-implants",
  metaTitle: "All-on-4 Dental Implants Cypress, TX | Full Arch Restoration | Smile Avenue",
  metaDescription: "All-on-4 & All-on-X full-arch dental implants in Cypress, TX. New teeth in one day with 3D-guided surgery & in-house lab. 4.9★ rated. Call (832) 648-1756.",
  heroKicker: "FULL ARCH RESTORATION IN CYPRESS",
  heroHeading: "All-on-X Full-Arch Dental Implants in Cypress, TX",
  heroBody: "If you are living with slipping dentures, multiple missing teeth, or failing teeth, All-on-X at Smile Avenue offers a life-changing solution. A complete arch of permanent teeth supported by 4-6 strategically placed implants — walk out with a new smile the same day.",
  heroCta1: "Book All-on-X Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "All-on-X Implants",
  heroValueProps: ["New teeth in one day — walk out smiling", "3D-guided surgery for precision", "In-house lab for custom prosthesis", "IV sedation for complete comfort", "0% financing · Most insurance accepted"],
  introKicker: "FULL MOUTH IMPLANTS",
  introHeading: "What Are All-on-X Implants?",
  introParas: [
    <>All-on-X (All-on-4) replaces an entire row of teeth with a fixed, non-removable prosthesis supported by 4-6 <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>. The result is permanently anchored teeth that look, feel, and function like natural teeth. Implants are placed at precise angles to maximize bone contact, often eliminating the need for bone grafting.</>,
    <>Unlike removable <Link to="/cypress-tx/dentures" className="text-primary hover:underline">dentures</Link> that sit on top of the gums, All-on-X teeth are anchored directly to your jawbone — preventing bone loss, preserving facial structure, and restoring your ability to eat anything you want. Families throughout Bridgeland, Cy-Fair, and greater Cypress trust Smile Avenue for full-arch implant restorations. <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">Sedation dentistry</Link> options ensure complete comfort throughout the procedure.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "Teeth in a Day" },
    { icon: <Users className="w-5 h-5" />, label: "In-House Lab" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for All-on-X",
  subServicesBody: "Same-day teeth, in-house lab, 3D planning, and IV sedation.",
  subServices: [
    { title: "Teeth in a Day", description: "Walk out with a full set of functional temporary teeth the same day as your implant surgery.", icon: <Zap className="w-5 h-5" /> },
    { title: "In-House Smile Dental Lab", description: "Our on-site lab fabricates your final zirconia prosthesis for precise fit and faster turnaround.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "3D CBCT & Digital Surgical Planning", description: "Advanced 3D imaging and Medit digital scanners guide every implant placement with surgical precision.", icon: <Scan className="w-5 h-5" /> },
    { title: "IV Sedation Available", description: "Complete comfort throughout your procedure with IV sedation options — no referrals to outside specialists needed.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "THE ALL-ON-X PROCESS",
  processHeading: "What to Expect",
  processBody: "A life-changing process from consultation to your permanent new smile.",
  processSteps: [
    { number: "01", title: "Comprehensive Consultation", description: "3D CBCT scan, digital impressions, detailed examination, and discussion of your goals to develop a personalized treatment plan.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Implant Placement Under Sedation", description: "4-6 implants are strategically placed using digitally guided surgical planning. Same-day temporary teeth attached before you leave.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Healing Period", description: "3-6 months of healing while your implants fuse with the jawbone. Your functional temporary teeth let you eat, speak, and smile throughout.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Final Zirconia Prosthesis", description: "Your permanent zirconia prosthesis is fabricated in our in-house lab and delivered for a stunning, lasting result.", icon: <FlaskConical className="w-5 h-5" /> },
  ],
  faqHeading: "All-on-X Questions",
  faqs: [
    { question: "How much do All-on-X implants cost?", answer: "Costs vary by case — we provide a detailed estimate at your consultation. All-on-X often costs less over a lifetime than ongoing denture maintenance and replacements. Financing through CareCredit and payment plans available." },
    { question: "Can I get teeth the same day?", answer: "Yes. In most cases, temporary fixed teeth are placed the day of surgery so you never go without a smile. Your permanent prosthesis is placed after the implants fully integrate with the bone." },
    { question: "How long do All-on-X implants last?", answer: "The implants themselves are designed to last a lifetime with proper care. The prosthesis on top typically lasts 15-20+ years before needing any maintenance or replacement." },
    { question: "Am I too old for All-on-X?", answer: "Age alone rarely disqualifies you. We've successfully treated patients in their 70s and 80s. General health and bone quality are more important factors, which we evaluate during your consultation." },
    { question: "What can I eat with All-on-X?", answer: "After the healing period, you can eat virtually anything — steak, apples, nuts, corn on the cob. All-on-X teeth function like natural teeth, unlike removable dentures." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "All-on-4 changed my life. I went from being embarrassed to smile to grinning ear to ear. Dr. Vuong and the team were incredible throughout the whole process.", name: "Harold W.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "I had dentures for years and hated them. All-on-X implants gave me permanent teeth that feel completely natural. Best investment I've ever made.", name: "Carol M.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "The whole team made a scary procedure feel manageable. I walked in with failing teeth and left with a temporary smile the same day. The final result is stunning.", name: "Frank D.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "A New Smile in One Day",
  ctaBody: "Schedule your All-on-X consultation and take the first step toward permanent, life-changing teeth.",
};

const AllOnXCypress = () => <ServicePageTemplate data={data} />;
export default AllOnXCypress;
