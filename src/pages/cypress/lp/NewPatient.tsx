import { Clock, Shield, MessageCircle, X, Frown, Hourglass } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: LandingPageData = {
  location: "cypress",
  pageType: "new-patient",
  metaTitle: "New Patient Dentist Cypress TX | $99 Exam & Cleaning | Smile Avenue",
  metaDescription: "New patients welcome in Cypress, TX. Exam, X-rays & cleaning. Same-day appointments. 4.9★ with 5,000+ reviews. Book online in 60 seconds.",
  heroHeadline: "Finally, a Dentist You'll Actually Look Forward To",
  heroSubheadline: "Comprehensive exam, digital X-rays, and professional cleaning — all in one visit. Same-day appointments for families in Cypress. No judgment if it's been a while.",
  heroImage: OFFICE_IMAGES.newPatientHero,
  heroCtaLabel: "Book Your First Visit — Takes 60 Seconds",
  heroCtaType: "book",
  heroReassurance: "Confirmed in 1 hour · No surprise fees · Most insurance accepted",
  painPoints: [
    { icon: <Hourglass className="w-6 h-6" />, problem: "Waiting weeks for an appointment", solution: "Same-day & next-day openings reserved daily for new patients" },
    { icon: <Frown className="w-6 h-6" />, problem: "Feeling rushed and ignored by your dentist", solution: "60-90 minute first visits — we listen first, treat second" },
    { icon: <X className="w-6 h-6" />, problem: "Surprise bills and insurance headaches", solution: "We verify benefits, file claims, and explain costs upfront" },
  ],
  benefits: [
    { icon: <Clock className="w-6 h-6" />, title: "Same-Day Appointments", description: "We reserve time daily for new patients so you're never waiting weeks. Most patients are seen within 24 hours of calling." },
    { icon: <Shield className="w-6 h-6" />, title: "Most Insurance Accepted", description: "Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian & more. We file claims for you — zero paperwork on your end." },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Hablamos Español", description: "Our bilingual team ensures every patient feels comfortable and understood — from intake forms to treatment discussions." },
  ],
  trustBullets: [
    "4.9★ with 5,000+ Google Reviews",
    "In-House Smile Dental Lab",
    "0% Financing Available",
    "Netflix in Every Room",
  ],
  doctors: [
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "General & Cosmetic Dentistry" },
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Founder · General & Restorative" },
    { slug: "peter-kim", name: "Dr. Peter Kim", credentials: "DDS", specialty: "Implants & Oral Surgery" },
    { slug: "laith-yahya", name: "Dr. Laith Yahya", credentials: "DDS", specialty: "General Dentistry" },
  ],
  videos: [
    { youtubeId: "1PDGSzlt5cs", title: "Your First Visit to Smile Avenue!" },
    { youtubeId: "EtAuvGSjEnI", title: "Why Smile Avenue is Trusted for Caring for Patients & Families" },
    { youtubeId: "ilqukqtmvjY", title: "Needed A Dentist? Found My Go-To Spot!" },
  ],
  testimonials: [
    { quote: "Best dental experience I've ever had. The office is beautiful, the staff is incredibly kind, and Dr. Maredia explained everything clearly. I actually look forward to my cleanings now!", name: "Sarah M.", service: "New Patient" },
    { quote: "They got me in the same day I called. No wait, no hassle. The entire process from check-in to checkout was seamless. Highly recommend for anyone in Cypress.", name: "David R.", service: "New Patient" },
  ],
  objections: [
    { objection: "It's been years since I've seen a dentist — I'm embarrassed.", answer: "You're not alone, and we never judge. Many of our happiest patients started the same way. We'll go at your pace and make you feel completely comfortable." },
    { objection: "I'm worried about the cost.", answer: "We accept most PPO insurance and offer 0% CareCredit financing. Plus our in-house membership plan covers 2 cleanings, exams, and X-rays per year with treatment discounts." },
    { objection: "I don't know if you take my insurance.", answer: "We accept Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, Humana, and many more. We verify your benefits before your visit so there are zero surprises." },
  ],
  faqs: [
    { question: "What should I bring to my first visit?", answer: "Bring your photo ID, insurance card, and a list of any medications you take. You can complete your paperwork online before your appointment to save time — we'll send you a link when you book." },
    { question: "How long does the first appointment take?", answer: "Plan for about 60–90 minutes. This includes a comprehensive exam, digital X-rays, professional cleaning, and time to discuss your personalized treatment plan with your dentist." },
    { question: "Which insurance plans do you accept?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana. We verify your benefits and file claims on your behalf." },
    { question: "What if I don't have dental insurance?", answer: "We offer an affordable in-house membership plan that includes two cleanings, exams, and X-rays per year with discounts on all treatments. CareCredit 0% financing is also available for larger treatment plans." },
  ],
  finalCtaHeadline: "Your New Smile Is One Click Away",
  finalCtaBody: "Join 5,000+ families who trust Smile Avenue. Book your first visit in 60 seconds — we'll confirm within 1 hour. No obligation, no pressure.",
};

const CypressNewPatientLP = () => <LandingPageTemplate data={data} />;
export default CypressNewPatientLP;
