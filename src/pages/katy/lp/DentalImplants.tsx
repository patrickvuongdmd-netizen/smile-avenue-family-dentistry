import { FlaskConical, Sparkles, CreditCard } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "katy",
  pageType: "dental-implants",
  metaTitle: "Dental Implants Katy TX | Free Consultation | In-House Lab | Smile Avenue",
  metaDescription: "Missing teeth? Natural-looking dental implants at Smile Avenue Katy. In-house Smile Dental Lab for faster results. Free consultation & 0% financing. Open Saturdays.",
  heroHeadline: "Permanent, Natural-Looking Teeth — Dental Implants in Katy",
  heroSubheadline: "Our in-house Smile Dental Lab means faster results and a perfect fit. Free implant consultation includes 3D CT scan. Serving Cinco Ranch, Cross Creek Ranch & Firethorne.",
  heroCtaLabel: "Book Your Free Implant Consultation",
  heroCtaType: "book",
  heroReassurance: "Free consultation & 3D scan · 0% financing available · Open Saturdays",
  benefits: [
    { icon: <FlaskConical className="w-6 h-6" />, title: "In-House Dental Lab", description: "Our Smile Dental Lab crafts your implant restorations on-site — meaning faster turnaround, precise fit, and no outsourcing delays." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Free Implant Consultation", description: "Meet with our implant specialist for a complimentary evaluation with 3D CT scan, bone density assessment, and personalized treatment plan." },
    { icon: <CreditCard className="w-6 h-6" />, title: "0% Financing Available", description: "Flexible payment plans through CareCredit make implants affordable. We also accept most PPO insurance plans and maximize your benefits." },
  ],
  trustBullets: [
    "Lifetime Implant Warranty",
    "3D CT Scan Technology",
    "Single Teeth to Full Arch",
    "Open Saturdays",
  ],
  testimonials: [
    { quote: "I put off getting an implant for 3 years because I was scared. Dr. Kim was so patient and explained everything step by step. The result looks completely natural and the financing made it easy.", name: "Carlos M.", service: "Single Implant" },
    { quote: "My mom got All-on-4 implants at Smile Avenue Katy and it's been life-changing. She can eat whatever she wants and smiles all the time now. The in-house lab meant it was done much faster than we expected.", name: "Michelle S.", service: "All-on-X Patient" },
  ],
  extraSection: (
    <section className="py-14 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Full Arch Solutions — All-on-X Implants
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          Missing most or all of your teeth? All-on-X dental implants replace a full arch with just 4–6 implants — a permanent, beautiful solution that lets you eat, smile, and live with confidence.
        </p>
        <ul className="text-sm text-muted-foreground space-y-2 mb-6 max-w-md mx-auto text-left" style={{ fontFamily: "var(--font-body)" }}>
          <li className="flex items-start gap-2"><span style={{ color: "#D4A853" }}>✓</span> Permanent — no more removable dentures</li>
          <li className="flex items-start gap-2"><span style={{ color: "#D4A853" }}>✓</span> Eat anything — steak, apples, corn on the cob</li>
          <li className="flex items-start gap-2"><span style={{ color: "#D4A853" }}>✓</span> In-house lab = faster delivery & precise fit</li>
          <li className="flex items-start gap-2"><span style={{ color: "#D4A853" }}>✓</span> Sedation available for anxious patients</li>
        </ul>
        <a
          href="https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white font-sans font-bold px-6 py-3 rounded-full transition-transform hover:scale-105"
          style={{ backgroundColor: "#D4A853" }}
        >
          Book Your All-on-X Consultation
        </a>
      </div>
    </section>
  ),
  faqs: [
    { question: "How long do dental implants last?", answer: "With proper care, the titanium implant post lasts a lifetime — it fuses permanently with your jawbone through osseointegration. The crown on top typically lasts 15–25 years before needing replacement." },
    { question: "Am I a candidate for dental implants?", answer: "Most adults with good general health are candidates. During your free consultation, we'll evaluate your jawbone density with a 3D CT scan, review your medical history, and discuss all your options including bone grafting if needed." },
    { question: "What is the recovery time for dental implants?", answer: "Most patients return to normal activities within 2–3 days. The implant fully integrates with your jawbone over 3–6 months, during which you'll have a natural-looking temporary restoration. Many patients report less discomfort than a tooth extraction." },
    { question: "How much do dental implants cost?", answer: "A single implant typically ranges from $3,000–$5,000 including the crown. Full arch All-on-X solutions start at $20,000 per arch. We provide a detailed cost breakdown at your free consultation, and 0% CareCredit financing makes monthly payments very manageable." },
  ],
  finalCtaHeadline: "Restore Your Smile — Start with a Free Consultation",
  finalCtaBody: "Join thousands of patients who've restored their smile at Smile Avenue. Free consultation, in-house lab, flexible financing — no obligation.",
};

const KatyDentalImplantsLP = () => <LandingPageTemplate data={data} />;
export default KatyDentalImplantsLP;
