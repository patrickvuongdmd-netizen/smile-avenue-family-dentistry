import { Zap, Users, Clock } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "cypress",
  metaTitle: "Emergency Dentist Cypress TX | Same-Day Care | Smile Avenue",
  metaDescription: "Dental emergency in Cypress? Same-day appointments for toothaches, broken teeth, and more. Walk-ins welcome. Call (832) 648-1756 now.",
  heroHeadline: "Dental Emergency in Cypress? We're Here Now.",
  heroSubheadline: "Same-day emergency appointments available. Walk-ins welcome. Call us — we'll get you out of pain fast.",
  heroCtaLabel: "Call Now for Emergency Care",
  heroCtaType: "call",
  isEmergency: true,
  benefits: [
    { icon: <Zap className="w-6 h-6" />, title: "Same-Day Emergency Care", description: "We reserve time every day for urgent cases. Call now and we'll get you in as soon as possible." },
    { icon: <Users className="w-6 h-6" />, title: "Walk-Ins Welcome", description: "Can't call ahead? Come straight in — we never turn away genuine dental emergencies." },
    { icon: <Clock className="w-6 h-6" />, title: "Extended Hours Available", description: "Emergency care when you need it. Contact us for after-hours emergency guidance." },
  ],
  faqs: [
    { question: "What counts as a dental emergency?", answer: "Severe toothaches, knocked-out teeth, broken or cracked teeth, lost fillings or crowns, dental abscesses, and uncontrolled bleeding all require immediate care." },
    { question: "How fast can you see me?", answer: "We aim to see emergency patients the same day you call. In many cases, we can get you in within hours." },
    { question: "How much does an emergency visit cost?", answer: "We start with an exam and X-rays, then provide a clear cost breakdown before any treatment. Most PPO insurance accepted. CareCredit financing available." },
    { question: "What should I do if my tooth gets knocked out?", answer: "Pick it up by the crown (not the root), rinse gently, and try to reinsert it. If not possible, keep it moist in milk and call us immediately." },
  ],
  finalCtaHeadline: "Don't Wait in Pain — Call Now",
  finalCtaBody: "Same-day emergency appointments at Smile Avenue Cypress. We'll get you out of pain fast.",
};

const CypressEmergencyLP = () => <LandingPageTemplate data={data} />;
export default CypressEmergencyLP;
