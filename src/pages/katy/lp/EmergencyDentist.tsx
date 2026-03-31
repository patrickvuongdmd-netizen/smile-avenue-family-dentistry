import { Zap, Users, Clock } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "katy",
  pageType: "emergency",
  metaTitle: "Emergency Dentist Katy TX | Same-Day Pain Relief | Open Saturdays | Smile Avenue",
  metaDescription: "Dental emergency in Katy, TX? Same-day appointments for toothaches, broken teeth & abscesses. Walk-ins welcome. Open Saturdays. Call (281) 800-5008 now.",
  heroHeadline: "Dental Emergency in Katy? We'll See You Today.",
  heroSubheadline: "Severe toothache, broken tooth, or knocked-out tooth? Same-day emergency appointments — including Saturdays. Walk-ins welcome. Call now.",
  heroCtaLabel: "Call Now — Get Seen Today",
  heroCtaType: "call",
  isEmergency: true,
  heroReassurance: "Average wait time: under 30 minutes · Walk-ins welcome · Open Saturdays",
  benefits: [
    { icon: <Zap className="w-6 h-6" />, title: "Same-Day Emergency Care", description: "We reserve time every day specifically for emergencies — including Saturday mornings. Most patients are seen within 1–2 hours." },
    { icon: <Users className="w-6 h-6" />, title: "Walk-Ins Welcome", description: "Can't call ahead? Walk straight in — we never turn away a genuine dental emergency. No appointment needed." },
    { icon: <Clock className="w-6 h-6" />, title: "Open Saturdays", description: "Our Katy office is open Saturday mornings 8 AM – 2 PM for urgent care — because emergencies don't wait for weekdays." },
  ],
  trustBullets: [
    "Same-Day Pain Relief",
    "No Referral Needed",
    "CareCredit & Insurance Accepted",
    "Sedation Options Available",
  ],
  testimonials: [
    { quote: "My son chipped his front tooth at a baseball game on Saturday morning. Smile Avenue saw him within 45 minutes and fixed it beautifully. We're so grateful they're open on weekends.", name: "Mark D.", service: "Emergency Patient" },
    { quote: "I had the worst toothache of my life and they got me in the same morning. The pain was gone within an hour of walking in the door. This is what dental care should be.", name: "Angela W.", service: "Emergency Patient" },
  ],
  faqs: [
    { question: "What counts as a dental emergency?", answer: "Severe toothaches, knocked-out teeth, broken or cracked teeth, lost fillings or crowns, dental abscesses, facial swelling, uncontrolled bleeding, and jaw injuries all require immediate care. When in doubt, call us — we'll advise you right away." },
    { question: "How fast can you see me?", answer: "We aim to see emergency patients the same day you call — often within 1–2 hours. Our Katy office is also open Saturdays for emergencies. Call (281) 800-5008 now." },
    { question: "How much does an emergency visit cost?", answer: "We start with an exam and X-rays to diagnose the issue, then provide a clear cost breakdown before any treatment begins. Most PPO insurance is accepted and we offer CareCredit 0% financing for out-of-pocket costs." },
    { question: "What should I do if my tooth gets knocked out?", answer: "Pick it up by the crown (not the root), rinse gently with water, and try to reinsert it into the socket. If not possible, keep it moist in milk or saliva and call us immediately. Time is critical — we can often save the tooth if you reach us within 30 minutes." },
  ],
  finalCtaHeadline: "Don't Wait in Pain — Call Now",
  finalCtaBody: "Same-day emergency appointments at Smile Avenue Katy — open Saturdays. We'll get you out of pain fast.",
};

const KatyEmergencyLP = () => <LandingPageTemplate data={data} />;
export default KatyEmergencyLP;
