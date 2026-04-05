import { Shield, Zap, Scan, Syringe, Star, FlaskConical, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "All-on-X Implants",
  serviceSlug: "all-on-x-implants",
  videoId: "UAwWDYzJdvw",
  metaTitle: "All-on-4 Dental Implants Katy, TX | Full Arch Restoration | Smile Avenue",
  metaDescription: "All-on-4 & All-on-X full-arch dental implants in Katy, TX. New teeth in one day with 3D-guided surgery & in-house lab. 4.9★ rated. Call (281) 800-5008.",
  heroKicker: "FULL ARCH RESTORATION IN KATY",
  heroHeading: "All-on-X Full-Arch Dental Implants in Katy, TX",
  heroBody: "Tired of slipping dentures? All-on-X at Smile Avenue Katy gives you a complete arch of permanent teeth on 4-6 implants. Walk out with a new smile the same day.",
  heroCta1: "Book All-on-X Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "All-on-X Photo",
  heroValueProps: ["New teeth in one day — walk out smiling", "3D-guided surgery for precision", "In-house lab for custom prosthesis", "IV sedation for complete comfort", "0% financing · Most insurance accepted"],
  introKicker: "PERMANENT FULL-ARCH TEETH",
  introHeading: "What Are All-on-X Implants?",
  introParas: [
    "All-on-X (All-on-4) replaces an entire row of teeth with a fixed, non-removable prosthesis supported by 4-6 strategically placed dental implants. The result is permanently anchored teeth that look, feel, and function like natural teeth — no adhesives, no slipping, no removable dentures.",
    "Implants are placed at precise angles to maximize bone contact, often eliminating the need for bone grafting. Our in-house Smile Dental Lab fabricates your final zirconia prosthesis for a stunning, lasting result. Families across Cinco Ranch, Firethorne, Cross Creek Ranch, and Cane Island trust Smile Avenue for life-changing All-on-X restorations.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <FlaskConical className="w-5 h-5" />, label: "In-House Zirconia Lab" },
    { icon: <Zap className="w-5 h-5" />, label: "Teeth in a Day" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for All-on-X",
  subServicesBody: "Complete full-arch restoration under one roof.",
  subServices: [
    { title: "Teeth in a Day", description: "Walk out with a full set of functional temporary teeth the same day as your implant surgery.", icon: <Zap className="w-5 h-5" /> },
    { title: "In-House Zirconia Prosthesis", description: "Our Smile Dental Lab fabricates your final zirconia prosthesis on-site for precise fit and stunning aesthetics.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "3D Surgical Planning", description: "3D CBCT imaging and digital surgical guides ensure precise, predictable implant placement.", icon: <Scan className="w-5 h-5" /> },
    { title: "IV Sedation — No Referrals", description: "Complete comfort with IV sedation throughout your procedure. All treatment in-house — no outside referrals needed.", icon: <Syringe className="w-5 h-5" /> },
  ],
  processKicker: "THE ALL-ON-X PROCESS",
  processHeading: "What to Expect",
  processBody: "From consultation to permanent smile.",
  processSteps: [
    { number: "01", title: "3D Consultation", description: "Comprehensive exam with 3D CBCT scan, digital impressions, and personalized treatment plan.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Implant Placement + Same-Day Teeth", description: "4-6 implants placed under sedation with same-day temporary teeth attached before you leave.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Healing Period", description: "3-6 months of healing while implants fuse with bone. Functional temporary teeth let you eat, speak, and smile.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Final Zirconia Prosthesis", description: "Your permanent zirconia prosthesis is fabricated in our in-house lab and delivered for a stunning, lasting result.", icon: <FlaskConical className="w-5 h-5" /> },
  ],
  faqHeading: "All-on-X Questions",
  faqs: [
    { question: "How much do All-on-X implants cost?", answer: "Costs vary by case — we provide a detailed estimate at your consultation. All-on-X often costs less over a lifetime than ongoing denture maintenance. CareCredit financing available." },
    { question: "Can I get teeth the same day?", answer: "Yes — in most cases, temporary fixed teeth are placed the day of surgery so you never go without a smile." },
    { question: "How long do All-on-X implants last?", answer: "The implants themselves are designed to last a lifetime. The prosthesis on top typically lasts 15-20+ years before any maintenance." },
    { question: "Am I too old for All-on-X?", answer: "Age alone rarely disqualifies you. General health and bone quality are more important factors, which we evaluate during your consultation." },
    { question: "What can I eat with All-on-X?", answer: "After the healing period, virtually anything — steak, apples, nuts, corn on the cob. All-on-X teeth function like natural teeth." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "All-on-X at Smile Avenue Katy changed my life. I went from dentures I hated to permanent teeth that feel completely natural. The best decision I ever made.", name: "Robert L.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "Dr. Vuong and the team made a scary procedure feel manageable. I walked in with failing teeth and left with a new smile the same day. Incredible.", name: "Patricia D.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "The in-house lab made the whole process smoother and faster. My final zirconia teeth look absolutely stunning. Worth every penny.", name: "Frank G.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "A New Smile in One Day",
  ctaBody: "Schedule your All-on-X consultation and take the first step toward permanent, life-changing teeth.",
};

const AllOnXKaty = () => <ServicePageTemplate data={data} />;
export default AllOnXKaty;
