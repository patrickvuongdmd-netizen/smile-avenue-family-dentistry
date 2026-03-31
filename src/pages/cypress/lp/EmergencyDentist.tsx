import { Zap, Users, Clock, AlertCircle, Ban, DollarSign } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "cypress",
  pageType: "emergency",
  metaTitle: "Emergency Dentist Cypress TX | Same-Day Pain Relief | Smile Avenue",
  metaDescription: "Dental emergency in Cypress, TX? Same-day appointments for toothaches, broken teeth, knocked-out teeth & abscesses. Walk-ins welcome. Call (832) 648-1756 now.",
  heroHeadline: "Dental Emergency? We'll See You Today.",
  heroSubheadline: "Severe toothache, broken tooth, or knocked-out tooth? Don't wait in pain. Same-day emergency appointments in Cypress. Walk-ins welcome — call now.",
  heroCtaLabel: "Call Now — Get Seen Today",
  heroCtaType: "call",
  isEmergency: true,
  heroReassurance: "Average wait: under 30 min · Walk-ins welcome · Most insurance accepted",
  painPoints: [
    { icon: <Ban className="w-6 h-6" />, problem: "ER told you to 'see a dentist' and sent you home", solution: "We actually fix dental emergencies — same day, right here" },
    { icon: <AlertCircle className="w-6 h-6" />, problem: "Can't get an appointment for days or weeks", solution: "We see emergencies within 1-2 hours of your call" },
    { icon: <DollarSign className="w-6 h-6" />, problem: "Worried about a huge unexpected bill", solution: "Clear cost estimate before any treatment begins" },
  ],
  benefits: [
    { icon: <Zap className="w-6 h-6" />, title: "Same-Day Emergency Care", description: "We reserve time every day specifically for emergencies. Most patients are seen within 1–2 hours of calling." },
    { icon: <Users className="w-6 h-6" />, title: "Walk-Ins Welcome", description: "Can't call ahead? Walk straight in — we never turn away a genuine dental emergency. No appointment needed." },
    { icon: <Clock className="w-6 h-6" />, title: "Extended Hours Available", description: "Emergency care when you need it. Contact us for after-hours emergency guidance and next-day priority scheduling." },
  ],
  trustBullets: ["Same-Day Pain Relief", "No Referral Needed", "CareCredit & Insurance Accepted", "Sedation Options Available"],
  doctors: [
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Founder · General & Restorative" },
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "General & Emergency Dentistry" },
    { slug: "shayan-alkhiro", name: "Dr. Shayan Alkhiro", credentials: "DDS", specialty: "General Dentistry" },
    { slug: "laith-yahya", name: "Dr. Laith Yahya", credentials: "DDS", specialty: "General Dentistry" },
  ],
  videos: [
    { youtubeId: "HB_uTHUfm-o", title: "What To Do During a Dental Emergency | Quick Tips" },
    { youtubeId: "y1YYnlsar3U", title: "Is It Time for a Root Canal?" },
    { youtubeId: "lVFe5d6pAlY", title: "Overcome Dental Anxiety with Sedation Dentistry" },
  ],
  testimonials: [
    { quote: "I broke my tooth on a Saturday and they got me in within an hour. The pain was gone immediately. I can't thank this team enough — they truly saved my smile.", name: "Michael T.", service: "Emergency Patient" },
    { quote: "I was in severe pain from an abscess and they squeezed me in the same morning I called. Dr. Bilal was calm, reassuring, and fixed my tooth quickly. Amazing care.", name: "Jennifer L.", service: "Emergency Patient" },
  ],
  objections: [
    { objection: "I don't know if this is a 'real' emergency.", answer: "If you're in pain, it's real to us. Call and we'll tell you exactly what to do — even if it can wait, we'll still prioritize you." },
    { objection: "I'm scared of the dentist, especially for emergency work.", answer: "We offer sedation options so you can relax completely. Our team is trained to handle anxious patients with compassion and zero judgment." },
    { objection: "I don't have insurance — can I still come in?", answer: "Absolutely. We'll provide a clear cost estimate before treatment. CareCredit 0% financing and our membership plan make emergency care affordable." },
  ],
  faqs: [
    { question: "What counts as a dental emergency?", answer: "Severe toothaches, knocked-out teeth, broken or cracked teeth, lost fillings or crowns, dental abscesses, swelling, uncontrolled bleeding, and jaw injuries all require immediate care. When in doubt, call us — we'll advise you right away." },
    { question: "How fast can you see me?", answer: "We aim to see emergency patients the same day you call — often within 1–2 hours. Call (832) 648-1756 now and our team will get you scheduled immediately." },
    { question: "How much does an emergency visit cost?", answer: "We start with an exam and X-rays to diagnose the issue, then provide a clear cost breakdown before any treatment begins. Most PPO insurance is accepted and we offer CareCredit 0% financing." },
    { question: "What should I do if my tooth gets knocked out?", answer: "Pick it up by the crown (not the root), rinse gently with water, and try to reinsert it into the socket. If not possible, keep it moist in milk or saliva and call us immediately. Time is critical — we can often save the tooth if you reach us within 30 minutes." },
  ],
  finalCtaHeadline: "Don't Wait in Pain — Call Now",
  finalCtaBody: "Same-day emergency appointments at Smile Avenue Cypress. We'll get you out of pain fast — no referral needed, no judgment.",
};

const CypressEmergencyLP = () => <LandingPageTemplate data={data} />;
export default CypressEmergencyLP;
