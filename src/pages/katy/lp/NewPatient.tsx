import { Clock, Shield, MessageCircle, X, Frown, Hourglass } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: LandingPageData = {
  location: "katy",
  pageType: "new-patient",
  metaTitle: "New Patient Dentist Katy TX | Cinco Ranch & Firethorne | Smile Avenue",
  metaDescription: "Now accepting new patients in Katy, TX. Serving Cinco Ranch, Cross Creek Ranch & Firethorne. Comprehensive exam, X-rays, cleaning. Open Saturdays. 4.9★ rated.",
  heroHeadline: "Your Family Deserves a Dentist Who Actually Cares",
  heroSubheadline: "Comprehensive exam, digital X-rays, and professional cleaning — all in one visit. Serving Cinco Ranch, Cross Creek Ranch, and Firethorne. Open Saturdays.",
  heroImage: OFFICE_IMAGES.katyHero,
  heroCtaLabel: "Book Your First Visit — Takes 60 Seconds",
  heroCtaType: "book",
  heroReassurance: "Confirmed in 1 hour · Open Saturdays · No surprise fees",
  painPoints: [
    { icon: <Hourglass className="w-6 h-6" />, problem: "Can never get a Saturday appointment", solution: "Open every Saturday 8 AM – 2 PM for busy families" },
    { icon: <Frown className="w-6 h-6" />, problem: "Kids dread going to the dentist", solution: "Netflix in every room, warm blankets, and a team that makes it fun" },
    { icon: <X className="w-6 h-6" />, problem: "Tired of impersonal, assembly-line dentistry", solution: "60-90 minute first visits — we listen first, treat second" },
  ],
  benefits: [
    { icon: <Clock className="w-6 h-6" />, title: "Same-Day & Saturday Appointments", description: "We reserve time daily for new patients — including Saturday mornings. Most patients are seen within 24 hours of booking." },
    { icon: <Shield className="w-6 h-6" />, title: "Most Insurance Accepted", description: "Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian & more. We verify benefits and file claims for you." },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Hablamos Español", description: "Our bilingual team ensures every patient feels comfortable and understood — from intake to treatment." },
  ],
  trustBullets: ["4.9★ with 5,000+ Google Reviews", "In-House Smile Dental Lab", "0% Financing Available", "Open Saturdays 8 AM – 2 PM"],
  doctors: [
    { slug: "sameer-bilal", name: "Dr. Sameer Bilal", credentials: "DDS", specialty: "General & Family Dentistry" },
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "General & Cosmetic Dentistry" },
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Founder · General & Restorative" },
  ],
  videos: [
    { youtubeId: "1PDGSzlt5cs", title: "Your First Visit to Smile Avenue!" },
    { youtubeId: "Do_22b5MX_M", title: "From Uncomfortable to Confident Smiles" },
    { youtubeId: "EtAuvGSjEnI", title: "Why Smile Avenue is Trusted for Caring for Patients & Families" },
  ],
  testimonials: [
    { quote: "We moved to Cinco Ranch and needed a new dentist for the whole family. Smile Avenue exceeded every expectation. The office is gorgeous, the staff remembers our names, and the kids actually enjoy going!", name: "The Garcia Family", service: "New Patients" },
    { quote: "Saturday hours were a game-changer for our family. No more taking off work for dental visits. The team is professional, gentle, and thorough. We're patients for life.", name: "Kevin & Laura S.", service: "New Patients" },
  ],
  objections: [
    { objection: "It's been years since I've seen a dentist.", answer: "You're not alone. Many of our happiest patients hadn't been in 5+ years. We never judge — we just help you get back on track comfortably." },
    { objection: "I'm worried about cost and insurance.", answer: "We accept most PPO plans, offer 0% CareCredit financing, and have an affordable in-house membership plan. We verify your benefits before you visit so there are zero surprises." },
    { objection: "My kids hate going to the dentist.", answer: "Ours don't! Netflix in every room, a caring team that specializes in making kids comfortable, and a beautiful modern office that feels nothing like a 'scary dentist.'" },
  ],
  faqs: [
    { question: "What should I bring to my first visit?", answer: "Bring your photo ID, insurance card, and a list of any medications. Complete paperwork online to save time — we'll send a link when you book." },
    { question: "How long does the first appointment take?", answer: "Plan for 60–90 minutes. This includes exam, digital X-rays, cleaning, and time to discuss your personalized treatment plan." },
    { question: "Which insurance plans do you accept?", answer: "Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, Humana, and many more. We verify benefits and file claims on your behalf." },
    { question: "Are you open on Saturdays?", answer: "Yes! Our Katy office is open every Saturday from 8:00 AM to 2:00 PM — perfect for busy families." },
  ],
  finalCtaHeadline: "Join 5,000+ Happy Families in Katy",
  finalCtaBody: "Book your first visit in 60 seconds — we confirm within 1 hour. Saturday appointments available. No obligation, no pressure.",
};

const KatyNewPatientLP = () => <LandingPageTemplate data={data} />;
export default KatyNewPatientLP;
