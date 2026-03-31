import { Sparkles, CreditCard, Award, Frown, Timer, Eye } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";
import beforeAfterInvisalign from "@/assets/gallery/before-after-invisalign.jpg";

const data: LandingPageData = {
  location: "katy",
  pageType: "invisalign",
  metaTitle: "Invisalign Katy TX | Free Consultation | Clear Aligners | Smile Avenue",
  metaDescription: "Straighter teeth without metal braces. Invisalign clear aligners for teens and adults in Katy, TX. Free consultation with 3D smile preview. 0% financing. Book today.",
  heroHeadline: "Straight Teeth. No Metal. No Lifestyle Disruption.",
  heroSubheadline: "Invisalign clear aligners for teens and adults in Katy. Custom-fitted, virtually invisible, and removable. Your free consultation includes a 3D smile preview.",
  heroCtaLabel: "Book Your Free Consultation",
  heroCtaType: "book",
  heroReassurance: "Free consultation & 3D preview · 0% financing · Most insurance accepted",
  painPoints: [
    { icon: <Frown className="w-6 h-6" />, problem: "Avoiding photos because of your smile", solution: "See your new smile in 3D before you commit — free preview" },
    { icon: <Eye className="w-6 h-6" />, problem: "Don't want visible metal brackets at work", solution: "Virtually invisible aligners — most people won't notice" },
    { icon: <Timer className="w-6 h-6" />, problem: "Think straightening teeth takes years", solution: "Many cases done in 6-12 months — faster than traditional braces" },
  ],
  benefits: [
    { icon: <Sparkles className="w-6 h-6" />, title: "Free Invisalign Consultation", description: "Complimentary evaluation with 3D iTero scan — preview your new smile before treatment begins." },
    { icon: <CreditCard className="w-6 h-6" />, title: "Flexible Payment Plans", description: "0% financing through CareCredit with payments as low as $99/month. Most PPO insurance plans accepted." },
    { icon: <Award className="w-6 h-6" />, title: "Experienced Invisalign Provider", description: "Hundreds of successful Invisalign cases — from mild crowding to complex bite correction." },
  ],
  trustBullets: ["Results in as Few as 6 Months", "No Food Restrictions", "Virtually Invisible", "Teens & Adults Welcome"],
  doctors: [
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Founder · Invisalign Provider" },
    { slug: "sameer-bilal", name: "Dr. Sameer Bilal", credentials: "DDS", specialty: "Invisalign Provider" },
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "Invisalign & Cosmetic Dentistry" },
  ],
  videos: [
    { youtubeId: "qMXDWzTh3Cs", title: "Essential Teeth Care Tips for Your Invisalign Journey" },
    { youtubeId: "nS2MUEQXbWE", title: "Invisalign Patient Testimonial" },
    { youtubeId: "JLVp9i_Vru4", title: "Transform Your Smile with a Custom Makeover at Smile Avenue" },
  ],
  testimonials: [
    { quote: "I'm a teacher in Cinco Ranch and didn't want metal braces in front of my students. Invisalign was perfect — nobody noticed! My smile looks amazing after just 11 months.", name: "Rachel T.", service: "Invisalign Patient" },
    { quote: "My son did Invisalign instead of traditional braces. The convenience of removable aligners made it so much easier for his sports. Results were incredible.", name: "James M.", service: "Teen Invisalign" },
  ],
  objections: [
    { objection: "Invisalign is too expensive for my budget.", answer: "Many insurance plans cover $1,000-$2,000. With 0% financing, payments can be as low as $99/month. Your free consult includes a full cost breakdown — no surprises." },
    { objection: "I'm not sure I'm a candidate.", answer: "The only way to know is a free evaluation — no obligation. If Invisalign isn't right for you, we'll be upfront about it." },
    { objection: "I tried aligners before and they didn't work.", answer: "Mail-order aligners lack in-person supervision. At Smile Avenue, your doctor monitors every stage and adjusts as needed for optimal results." },
  ],
  extraSection: (
    <section className="py-14 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "#D4A853" }}>REAL RESULTS</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>Real Smiles, Real Results</h2>
        <div className="w-12 h-0.5 mx-auto mb-6" style={{ backgroundColor: "#D4A853" }} />
        <div className="max-w-2xl mx-auto">
          <img src={beforeAfterInvisalign} alt="Before and after Invisalign treatment at Smile Avenue Katy TX" className="w-full h-auto rounded-2xl border border-border shadow-sm" loading="lazy" width={1024} height={768} />
          <p className="text-sm font-sans font-semibold text-foreground mt-3">Invisalign — Actual Patient Result</p>
        </div>
      </div>
    </section>
  ),
  faqs: [
    { question: "How long does Invisalign take?", answer: "Most adult cases: 12–18 months. Mild cases: as few as 6 months. Teen treatment: typically 12–16 months." },
    { question: "Is Invisalign covered by insurance?", answer: "Many plans cover Invisalign like braces — typically $1,000–$2,000. We verify your benefits at your free consultation." },
    { question: "Does Invisalign hurt?", answer: "Mild pressure when switching aligners. Much less than braces. Discomfort fades within a day or two." },
    { question: "Can I eat normally?", answer: "Yes! Aligners are removable. Eat anything, brush normally, then pop them back in. Zero food restrictions." },
  ],
  finalCtaHeadline: "Your Straighter Smile Starts with a Free Consultation",
  finalCtaBody: "See your new smile in 3D before you commit. No obligation, no pressure — just a friendly conversation about your options.",
};

const KatyInvisalignLP = () => <LandingPageTemplate data={data} />;
export default KatyInvisalignLP;
