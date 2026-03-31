import { FlaskConical, Sparkles, CreditCard, Frown, Clock, ShieldAlert } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "cypress",
  pageType: "dental-implants",
  metaTitle: "Dental Implants Cypress TX | Free Consultation | In-House Lab | Smile Avenue",
  metaDescription: "Missing teeth? Natural-looking dental implants at Smile Avenue Cypress. In-house Smile Dental Lab for faster results. Free consultation & 0% financing. Book today.",
  heroHeadline: "Stop Hiding Your Smile. Get Permanent, Natural-Looking Teeth.",
  heroSubheadline: "Our in-house Smile Dental Lab means faster results and a perfect fit. Your free implant consultation includes a 3D CT scan and personalized treatment plan — no obligation.",
  heroCtaLabel: "Book Your Free Implant Consultation",
  heroCtaType: "book",
  heroReassurance: "Free consultation & 3D scan · 0% financing · Lifetime implant warranty",
  painPoints: [
    { icon: <Frown className="w-6 h-6" />, problem: "Embarrassed to eat, laugh, or smile in public", solution: "Permanent implants that look and feel like your real teeth" },
    { icon: <Clock className="w-6 h-6" />, problem: "Told by other offices it'll take 6+ months", solution: "In-house dental lab = fewer visits and faster results" },
    { icon: <ShieldAlert className="w-6 h-6" />, problem: "Scared the procedure will be painful", solution: "Sedation options available — most patients say it's easier than an extraction" },
  ],
  benefits: [
    { icon: <FlaskConical className="w-6 h-6" />, title: "In-House Dental Lab", description: "Our Smile Dental Lab crafts your implant restorations on-site — meaning faster turnaround, precise fit, and no outsourcing delays." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Free Implant Consultation", description: "Complimentary evaluation with 3D CT scan, bone density assessment, and personalized treatment plan. No pressure, no obligation." },
    { icon: <CreditCard className="w-6 h-6" />, title: "0% Financing Available", description: "Flexible payment plans through CareCredit make implants affordable. We also accept most PPO insurance plans and maximize your benefits." },
  ],
  trustBullets: ["Lifetime Implant Warranty", "3D CT Scan Technology", "Single Teeth to Full Arch", "Sedation Options Available"],
  doctors: [
    { slug: "peter-kim", name: "Dr. Peter Kim", credentials: "DDS", specialty: "Implants & Oral Surgery" },
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "Restorative Dentistry" },
  ],
  videos: [
    { youtubeId: "UAwWDYzJdvw", title: "From Start to Finish: The Dental Implant Process" },
    { youtubeId: "wiocP_nsFPY", title: "Can One Visit Change Your Smile?" },
    { youtubeId: "1nicifZjXoA", title: "Restore Confidence with Advanced Bone Grafting" },
  ],
  testimonials: [
    { quote: "I had been missing my front tooth for years and was embarrassed to smile. The implant looks completely natural — even my dentist friends can't tell. The in-house lab made the whole process so much faster.", name: "Robert H.", service: "Single Implant" },
    { quote: "I got All-on-4 implants and it changed my life. I can eat anything, smile without thinking about it, and it was more affordable than I expected with their financing options.", name: "Patricia W.", service: "All-on-X Patient" },
  ],
  objections: [
    { objection: "Dental implants are too expensive.", answer: "A single implant runs $3,000-$5,000. With 0% CareCredit financing, that's often under $100/month. Compare that to a lifetime of denture adhesive, relines, and replacements — implants actually cost less long-term." },
    { objection: "I've been told I don't have enough bone.", answer: "Many patients are told this elsewhere but qualify here. We perform bone grafting in-house and use 3D CT scans for precise evaluation. Come for a free consult — you may have more options than you think." },
    { objection: "I'm too old for implants.", answer: "There's no upper age limit for dental implants. We've placed them for patients in their 80s. If you're healthy enough for a tooth extraction, you're likely a candidate." },
  ],
  extraSection: (
    <section className="py-14 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "#D4A853" }}>FULL ARCH SOLUTIONS</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>All-on-X Dental Implants</h2>
        <div className="w-12 h-0.5 mx-auto mb-6" style={{ backgroundColor: "#D4A853" }} />
        <p className="text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>Replace a full arch with just 4-6 implants. Permanent. Beautiful. Life-changing.</p>
        <ul className="text-sm text-muted-foreground space-y-2 mb-6 max-w-md mx-auto text-left" style={{ fontFamily: "var(--font-body)" }}>
          <li className="flex items-start gap-2"><span style={{ color: "#D4A853" }}>✓</span> Permanent — no more removable dentures</li>
          <li className="flex items-start gap-2"><span style={{ color: "#D4A853" }}>✓</span> Eat anything — steak, apples, corn on the cob</li>
          <li className="flex items-start gap-2"><span style={{ color: "#D4A853" }}>✓</span> In-house lab = faster delivery & precise fit</li>
          <li className="flex items-start gap-2"><span style={{ color: "#D4A853" }}>✓</span> Sedation available for anxious patients</li>
        </ul>
      </div>
    </section>
  ),
  faqs: [
    { question: "How long do dental implants last?", answer: "With proper care, the titanium implant post lasts a lifetime. The crown on top typically lasts 15–25 years before needing replacement." },
    { question: "Am I a candidate for dental implants?", answer: "Most adults with good general health are candidates. During your free consultation, we'll evaluate your jawbone density with a 3D CT scan and discuss all options." },
    { question: "What is the recovery time?", answer: "Most patients return to normal activities within 2–3 days. Many patients report less discomfort than a tooth extraction." },
    { question: "How much do dental implants cost?", answer: "Single implants: $3,000–$5,000. Full arch All-on-X: from $20,000/arch. We provide a detailed cost breakdown at your free consultation, and 0% financing makes monthly payments very manageable." },
  ],
  finalCtaHeadline: "Stop Hiding. Start Smiling. Book Your Free Consultation.",
  finalCtaBody: "Join thousands of patients who've restored their confidence at Smile Avenue. Free 3D scan, in-house lab, flexible financing — absolutely no obligation.",
};

const CypressDentalImplantsLP = () => <LandingPageTemplate data={data} />;
export default CypressDentalImplantsLP;
