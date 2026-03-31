import { Zap, Users, Clock, AlertCircle, Ban, DollarSign } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "katy",
  pageType: "emergency",
  metaTitle: "Emergency Dentist Katy TX | Same-Day Pain Relief | Open Saturdays | Smile Avenue",
  metaDescription: "Dental emergency in Katy, TX? Same-day appointments for toothaches, broken teeth & abscesses. Walk-ins welcome. Open Saturdays. Call (281) 800-5008 now.",
  heroHeadline: "Dental Emergency in Katy? We'll See You Today.",
  heroSubheadline: "Severe toothache, broken tooth, or knocked-out tooth? Same-day emergency appointments — including Saturdays. Walk-ins welcome. Don't wait in pain.",
  heroCtaLabel: "Call Now — Get Seen Today",
  heroCtaType: "call",
  isEmergency: true,
  heroReassurance: "Average wait: under 30 min · Walk-ins welcome · Open Saturdays",
  painPoints: [
    { icon: <Ban className="w-6 h-6" />, problem: "ER can't fix dental problems — they just prescribe painkillers", solution: "We diagnose and fix dental emergencies the same day" },
    { icon: <AlertCircle className="w-6 h-6" />, problem: "Other dentists say 'we can see you next week'", solution: "We see emergencies within 1-2 hours — including Saturdays" },
    { icon: <DollarSign className="w-6 h-6" />, problem: "Afraid of a huge unexpected bill", solution: "Clear cost estimate before any treatment — insurance & financing accepted" },
  ],
  benefits: [
    { icon: <Zap className="w-6 h-6" />, title: "Same-Day Emergency Care", description: "We reserve time every day for emergencies — including Saturday mornings. Most patients are seen within 1–2 hours." },
    { icon: <Users className="w-6 h-6" />, title: "Walk-Ins Welcome", description: "Can't call ahead? Walk straight in — we never turn away a genuine dental emergency." },
    { icon: <Clock className="w-6 h-6" />, title: "Open Saturdays", description: "Our Katy office is open Saturday mornings 8 AM – 2 PM — because emergencies don't wait for weekdays." },
  ],
  trustBullets: ["Same-Day Pain Relief", "No Referral Needed", "CareCredit & Insurance Accepted", "Sedation Options Available"],
  doctors: [
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Founder · General & Restorative" },
    { slug: "sameer-bilal", name: "Dr. Sameer Bilal", credentials: "DDS", specialty: "General & Emergency Dentistry" },
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "General & Emergency Dentistry" },
  ],
  videos: [
    { youtubeId: "HB_uTHUfm-o", title: "What To Do During a Dental Emergency | Quick Tips" },
    { youtubeId: "y1YYnlsar3U", title: "Is It Time for a Root Canal?" },
    { youtubeId: "lVFe5d6pAlY", title: "Overcome Dental Anxiety with Sedation Dentistry" },
  ],
  testimonials: [
    { quote: "My son chipped his front tooth at a baseball game on Saturday morning. Smile Avenue saw him within 45 minutes and fixed it beautifully. We're so grateful they're open on weekends.", name: "Mark D.", service: "Emergency Patient" },
    { quote: "I was in severe pain from an abscess and they got me in the same morning. The pain was gone within an hour of walking in the door.", name: "Angela W.", service: "Emergency Patient" },
  ],
  objections: [
    { objection: "I don't know if this is serious enough for an emergency visit.", answer: "If you're in pain, call us. We'll tell you exactly what to do — even if it can wait, we'll prioritize you for the next available slot." },
    { objection: "I'm terrified of dental procedures.", answer: "We offer sedation options for anxious patients. Our team handles scared patients with compassion every single day — you're in safe hands." },
    { objection: "I don't have insurance.", answer: "You can still be seen immediately. We give you a clear cost estimate before treatment. CareCredit 0% financing and our membership plan make emergency care affordable." },
  ],
  faqs: [
    { question: "What counts as a dental emergency?", answer: "Severe toothaches, knocked-out teeth, broken or cracked teeth, lost fillings or crowns, dental abscesses, facial swelling, uncontrolled bleeding, and jaw injuries." },
    { question: "How fast can you see me?", answer: "Same day — often within 1–2 hours. Our Katy office is also open Saturdays. Call (281) 800-5008 now." },
    { question: "How much does an emergency visit cost?", answer: "We provide a clear cost breakdown before any treatment. Most PPO insurance is accepted and we offer CareCredit 0% financing." },
    { question: "What should I do if my tooth gets knocked out?", answer: "Pick it up by the crown, rinse gently, try to reinsert it. If not possible, keep it in milk and call us immediately. We can often save it within 30 minutes." },
  ],
  finalCtaHeadline: "Don't Wait in Pain — Call Now",
  finalCtaBody: "Same-day emergency appointments at Smile Avenue Katy — open Saturdays. We'll get you out of pain fast.",
};

const KatyEmergencyLP = () => <LandingPageTemplate data={data} />;
export default KatyEmergencyLP;
