import { FlaskConical, Sparkles, CreditCard, Frown, Clock, ShieldAlert } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "katy",
  pageType: "dental-implants",
  metaTitle: "Dental Implants Katy TX | Free Consultation | In-House Lab | Smile Avenue",
  metaDescription: "Missing teeth? Dental implants at Smile Avenue Katy. In-house lab for faster results. Free consultation & 0% financing. Open Saturdays.",
  heroHeadline: "Stop Hiding Your Smile. Get Permanent, Natural-Looking Teeth.",
  heroSubheadline: "In-house Smile Dental Lab means faster results and a perfect fit. Free implant consultation includes 3D CT scan. Serving Cinco Ranch, Cross Creek Ranch & Firethorne.",
  heroCtaLabel: "Book Your Free Implant Consultation",
  heroCtaType: "book",
  heroReassurance: "Free consultation & 3D scan · 0% financing · Open Saturdays",
  painPoints: [
    { icon: <Frown className="w-6 h-6" />, problem: "Embarrassed to eat, laugh, or smile around others", solution: "Permanent implants that look and feel like your real teeth" },
    { icon: <Clock className="w-6 h-6" />, problem: "Other offices say it'll take forever", solution: "In-house dental lab = fewer visits, faster results" },
    { icon: <ShieldAlert className="w-6 h-6" />, problem: "Afraid the procedure will be painful", solution: "Sedation options — most patients say it's easier than an extraction" },
  ],
  benefits: [
    { icon: <FlaskConical className="w-6 h-6" />, title: "In-House Dental Lab", description: "Smile Dental Lab crafts restorations on-site — faster turnaround, precise fit, no outsourcing delays." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Free Implant Consultation", description: "Complimentary evaluation with 3D CT scan, bone density assessment, and personalized treatment plan." },
    { icon: <CreditCard className="w-6 h-6" />, title: "0% Financing Available", description: "CareCredit flexible payment plans make implants affordable. Most PPO insurance accepted." },
  ],
  trustBullets: ["Lifetime Implant Warranty", "3D CT Scan Technology", "Single Teeth to Full Arch", "Open Saturdays"],
  doctors: [
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Founder · General & Restorative" },
    { slug: "sameer-bilal", name: "Dr. Sameer Bilal", credentials: "DDS", specialty: "Implants & Restorative Dentistry" },
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "Restorative Dentistry" },
  ],
  videos: [
    { youtubeId: "UAwWDYzJdvw", title: "From Start to Finish: The Dental Implant Process" },
    { youtubeId: "Do_22b5MX_M", title: "From Uncomfortable to Confident Smiles" },
    { youtubeId: "1nicifZjXoA", title: "Restore Confidence with Advanced Bone Grafting" },
  ],
  testimonials: [
    { quote: "I put off getting an implant for 3 years because I was scared. Dr. Bilal was so patient and explained everything. The result looks completely natural and the financing made it easy.", name: "Carlos M.", service: "Single Implant" },
    { quote: "My mom got All-on-4 implants at Smile Avenue Katy and it's been life-changing. She can eat whatever she wants and smiles all the time now.", name: "Michelle S.", service: "All-on-X Patient" },
  ],
  objections: [
    { objection: "Dental implants are too expensive.", answer: "Single implants are $3,000-$5,000. With 0% CareCredit, that's often under $100/month. Long-term, implants cost less than dentures when you factor in adhesive, relines, and replacements." },
    { objection: "I've been told I don't have enough bone.", answer: "Many patients told this elsewhere qualify here. We perform bone grafting in-house. Come for a free consult with 3D CT scan — you may have more options than you think." },
    { objection: "I'm nervous about the surgery.", answer: "We offer multiple sedation options. Most patients tell us the procedure was easier than they expected — many say it's less painful than a tooth extraction." },
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
    { question: "How long do dental implants last?", answer: "The titanium post lasts a lifetime with proper care. The crown typically lasts 15–25 years." },
    { question: "Am I a candidate?", answer: "Most adults with good general health qualify. We evaluate with a 3D CT scan at your free consultation." },
    { question: "What is recovery like?", answer: "Most return to normal activities in 2–3 days. Many report less discomfort than a tooth extraction." },
    { question: "How much do implants cost?", answer: "Single: $3,000–$5,000. Full arch All-on-X: from $20,000/arch. Free consultation includes detailed cost breakdown. 0% financing available." },
  ],
  finalCtaHeadline: "Stop Hiding. Start Smiling. Book Your Free Consultation.",
  finalCtaBody: "Free 3D scan, in-house lab, flexible financing — absolutely no obligation. Join thousands who've restored their confidence at Smile Avenue.",
};

const KatyDentalImplantsLP = () => <LandingPageTemplate data={data} />;
export default KatyDentalImplantsLP;
