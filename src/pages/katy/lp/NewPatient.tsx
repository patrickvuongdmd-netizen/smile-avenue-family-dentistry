import { Clock, Shield, MessageCircle } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "katy",
  pageType: "new-patient",
  metaTitle: "New Patient Dentist Katy TX | Cinco Ranch & Firethorne | Smile Avenue",
  metaDescription: "Now accepting new patients in Katy, TX. Serving Cinco Ranch, Cross Creek Ranch & Firethorne. Comprehensive exam, X-rays, cleaning. Open Saturdays. 4.9★ rated. Book now.",
  heroHeadline: "Your Family Deserves a Dentist Who Actually Cares",
  heroSubheadline: "Comprehensive exam, digital X-rays, and professional cleaning — all in one visit. Proudly serving families from Cinco Ranch, Cross Creek Ranch, and Firethorne. Open Saturdays.",
  heroCtaLabel: "Book Your First Visit",
  heroCtaType: "book",
  heroReassurance: "Takes less than 60 seconds · We confirm within 1 hour · Open Saturdays",
  benefits: [
    { icon: <Clock className="w-6 h-6" />, title: "Same-Day Appointments", description: "We reserve time daily for new patients — including Saturday mornings. Most patients are seen within 24 hours of booking." },
    { icon: <Shield className="w-6 h-6" />, title: "Most Insurance Accepted", description: "We accept Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian & more. We file claims for you." },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Hablamos Español", description: "Our bilingual team ensures every patient feels comfortable and understood — from intake to treatment." },
  ],
  trustBullets: [
    "4.9★ with 5,000+ Google Reviews",
    "In-House Smile Dental Lab",
    "0% Financing Available",
    "Open Saturdays 8 AM – 2 PM",
  ],
  testimonials: [
    { quote: "We moved to Cinco Ranch and needed a new dentist for the whole family. Smile Avenue exceeded every expectation. The office is gorgeous, the staff remembers our names, and the kids actually enjoy going!", name: "The Garcia Family", service: "New Patients" },
    { quote: "Saturday hours were a game-changer for our family. No more taking off work for dental visits. The team is professional, gentle, and thorough. We're patients for life.", name: "Kevin & Laura S.", service: "New Patients" },
  ],
  faqs: [
    { question: "What should I bring to my first visit?", answer: "Bring your photo ID, insurance card, and a list of any medications you take. You can complete your paperwork online before your appointment to save time — we'll send you a link when you book." },
    { question: "How long does the first appointment take?", answer: "Plan for about 60–90 minutes. This includes a comprehensive exam, digital X-rays, professional cleaning, and time to discuss your personalized treatment plan with your dentist." },
    { question: "Which insurance plans do you accept?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana. We verify your benefits and file claims on your behalf." },
    { question: "Are you open on Saturdays?", answer: "Yes! Our Katy office is open every Saturday from 8:00 AM to 2:00 PM — perfect for busy families who can't get away during the work week." },
  ],
  finalCtaHeadline: "Join 5,000+ Happy Families in Katy",
  finalCtaBody: "Book your first visit online in 60 seconds — we'll confirm within 1 hour. Saturday appointments available.",
};

const KatyNewPatientLP = () => <LandingPageTemplate data={data} />;
export default KatyNewPatientLP;
