import { Clock, Shield, MessageCircle } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "cypress",
  pageType: "new-patient",
  metaTitle: "New Patient Dentist Cypress TX | $99 Exam & Cleaning | Smile Avenue",
  metaDescription: "Now accepting new patients in Cypress, TX. Comprehensive exam, digital X-rays, and professional cleaning. Same-day appointments available. 4.9★ rated with 5,000+ reviews. Book online in 60 seconds.",
  heroHeadline: "Finally, a Dentist You'll Actually Look Forward To",
  heroSubheadline: "Comprehensive exam, digital X-rays, and professional cleaning — all in one visit. Same-day appointments available for families in Cypress.",
  heroCtaLabel: "Book Your First Visit",
  heroCtaType: "book",
  heroReassurance: "Takes less than 60 seconds · We confirm within 1 hour · No surprise fees",
  benefits: [
    { icon: <Clock className="w-6 h-6" />, title: "Same-Day Appointments", description: "We reserve time daily for new patients so you're never waiting weeks. Most patients are seen within 24 hours of calling." },
    { icon: <Shield className="w-6 h-6" />, title: "Most Insurance Accepted", description: "We accept Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian & more. We file claims for you." },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Hablamos Español", description: "Our bilingual team ensures every patient feels comfortable and understood — from intake to treatment." },
  ],
  trustBullets: [
    "4.9★ with 5,000+ Google Reviews",
    "In-House Smile Dental Lab",
    "0% Financing Available",
    "Open Saturdays in Katy",
  ],
  testimonials: [
    { quote: "Best dental experience I've ever had. The office is beautiful, the staff is incredibly kind, and Dr. Maredia explained everything clearly. I actually look forward to my cleanings now!", name: "Sarah M.", service: "New Patient" },
    { quote: "They got me in the same day I called. No wait, no hassle. The entire process from check-in to checkout was seamless. Highly recommend for anyone in Cypress.", name: "David R.", service: "New Patient" },
  ],
  faqs: [
    { question: "What should I bring to my first visit?", answer: "Bring your photo ID, insurance card, and a list of any medications you take. You can complete your paperwork online before your appointment to save time — we'll send you a link when you book." },
    { question: "How long does the first appointment take?", answer: "Plan for about 60–90 minutes. This includes a comprehensive exam, digital X-rays, professional cleaning, and time to discuss your personalized treatment plan with your dentist." },
    { question: "Which insurance plans do you accept?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana. We verify your benefits and file claims on your behalf." },
    { question: "What if I don't have dental insurance?", answer: "We offer an affordable in-house membership plan that includes two cleanings, exams, and X-rays per year with discounts on all treatments. CareCredit 0% financing is also available for larger treatment plans." },
  ],
  finalCtaHeadline: "Your New Dentist Is One Click Away",
  finalCtaBody: "Join 5,000+ families who trust Smile Avenue. Book your first visit online in 60 seconds — we'll confirm within 1 hour.",
};

const CypressNewPatientLP = () => <LandingPageTemplate data={data} />;
export default CypressNewPatientLP;
