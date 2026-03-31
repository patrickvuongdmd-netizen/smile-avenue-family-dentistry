import { Clock, Shield, MessageCircle } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "cypress",
  metaTitle: "New Patient Dentist Cypress TX | Smile Avenue Family Dentistry",
  metaDescription: "Now accepting new patients in Cypress, TX. Comprehensive exam, X-rays, and cleaning. Same-day appointments. Most insurance accepted. Book online now.",
  heroHeadline: "Welcome to Smile Avenue — Cypress' Trusted Family Dentist",
  heroSubheadline: "Now accepting new patients. Comprehensive exam, X-rays, and cleaning — book your first visit today.",
  heroCtaLabel: "Book Your First Visit",
  heroCtaType: "book",
  benefits: [
    { icon: <Clock className="w-6 h-6" />, title: "Same-Day Appointments", description: "Need to be seen quickly? We reserve time daily for new patients so you never wait long." },
    { icon: <Shield className="w-6 h-6" />, title: "Most Insurance Accepted", description: "We accept most PPO plans and file claims for you. CareCredit financing also available." },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Hablamos Español", description: "Our bilingual team ensures every patient feels comfortable and understood." },
  ],
  faqs: [
    { question: "What should I bring to my first visit?", answer: "Bring your photo ID, insurance card, and a list of any medications you take. You can complete your paperwork online before your appointment to save time." },
    { question: "How long does the first appointment take?", answer: "Plan for about 60–90 minutes. This includes a comprehensive exam, digital X-rays, professional cleaning, and time to discuss your treatment plan." },
    { question: "Do you accept my insurance?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana." },
    { question: "What if I don't have insurance?", answer: "We offer an in-house membership plan with discounted rates on exams, cleanings, and treatments. CareCredit 0% financing is also available." },
  ],
  finalCtaHeadline: "Ready to Experience the Smile Avenue Difference?",
  finalCtaBody: "Book your first visit online in 60 seconds — we'll confirm within 1 hour.",
};

const CypressNewPatientLP = () => <LandingPageTemplate data={data} />;
export default CypressNewPatientLP;
