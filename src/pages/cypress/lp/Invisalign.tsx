import { Sparkles, CreditCard, Award } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";
import beforeAfterInvisalign from "@/assets/gallery/before-after-invisalign.jpg";

const data: LandingPageData = {
  location: "cypress",
  pageType: "invisalign",
  metaTitle: "Invisalign Cypress TX | Free Consultation | Clear Aligners | Smile Avenue",
  metaDescription: "Straighter teeth without metal braces. Invisalign clear aligners for teens and adults in Cypress, TX. Free consultation & flexible financing. 4.9★ rated. Book today.",
  heroHeadline: "Get the Straight Smile You've Always Wanted — Without Metal Braces",
  heroSubheadline: "Invisalign clear aligners for teens and adults. Custom-fitted to your smile, virtually invisible, and removable. Free consultation includes 3D smile preview.",
  heroCtaLabel: "Book Your Free Consultation",
  heroCtaType: "book",
  heroReassurance: "Free consultation · 0% financing available · Most insurance accepted",
  benefits: [
    { icon: <Sparkles className="w-6 h-6" />, title: "Free Invisalign Consultation", description: "Get a complimentary evaluation with 3D iTero scan so you can preview your new smile before treatment begins." },
    { icon: <CreditCard className="w-6 h-6" />, title: "Flexible Payment Plans", description: "0% financing through CareCredit with monthly payments as low as $99/month. We also accept most PPO insurance plans." },
    { icon: <Award className="w-6 h-6" />, title: "Experienced Invisalign Provider", description: "Our doctors have successfully treated hundreds of Invisalign cases — from mild crowding to complex bite correction." },
  ],
  trustBullets: [
    "Results in as Few as 6 Months",
    "No Food Restrictions",
    "Virtually Invisible",
    "Teens & Adults Welcome",
  ],
  doctors: [
    { slug: "sarah-maredia", name: "Dr. Sarah Maredia", credentials: "DDS", specialty: "Invisalign & Cosmetic Dentistry" },
    { slug: "patrick-vuong", name: "Dr. Patrick Vuong", credentials: "DMD", specialty: "Invisalign Provider" },
  ],
  videos: [
    { youtubeId: "qMXDWzTh3Cs", title: "Essential Teeth Care Tips for Your Invisalign Journey" },
    { youtubeId: "nS2MUEQXbWE", title: "Invisalign Patient Testimonial" },
    { youtubeId: "JLVp9i_Vru4", title: "Transform Your Smile with a Custom Makeover at Smile Avenue" },
  ],
  testimonials: [
    { quote: "I was self-conscious about my smile for years. After 10 months of Invisalign at Smile Avenue, I can't stop smiling. The process was so easy — and nobody even noticed I was wearing aligners!", name: "Amanda K.", service: "Invisalign Patient" },
    { quote: "My teenage daughter finished her Invisalign treatment in 8 months. The staff made her feel comfortable at every visit. The results are absolutely stunning — worth every penny.", name: "Lisa P.", service: "Teen Invisalign" },
  ],
  extraSection: (
    <section className="py-14 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-sans font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "#D4A853" }}>
          REAL RESULTS
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Real Smiles, Real Results
        </h2>
        <div className="w-12 h-0.5 mx-auto mb-6" style={{ backgroundColor: "#D4A853" }} />
        <p className="text-muted-foreground mb-8" style={{ fontFamily: "var(--font-body)" }}>
          See actual before-and-after transformations from our Invisalign patients.
        </p>
        <div className="max-w-2xl mx-auto">
          <img
            src={beforeAfterInvisalign}
            alt="Before and after Invisalign clear aligner treatment at Smile Avenue Cypress TX"
            className="w-full h-auto rounded-2xl border border-border shadow-sm"
            loading="lazy"
            width={1024}
            height={768}
          />
          <p className="text-sm font-sans font-semibold text-foreground mt-3">Invisalign — Actual Patient Result</p>
        </div>
      </div>
    </section>
  ),
  faqs: [
    { question: "How long does Invisalign treatment take?", answer: "Most adult cases take 12–18 months, though mild cases can be completed in as few as 6 months. Teen treatment typically takes 12–16 months. Your doctor will provide a personalized timeline at your free consultation." },
    { question: "Is Invisalign covered by dental insurance?", answer: "Many dental insurance plans cover Invisalign the same way they cover traditional braces — typically $1,000–$2,000 in coverage. We'll verify your specific benefits at your free consultation and maximize your savings." },
    { question: "Does Invisalign hurt?", answer: "Most patients experience mild pressure when switching to new aligners every 1–2 weeks, which is a sign the treatment is working. Any discomfort typically fades within a day or two and is much less than traditional braces." },
    { question: "Can I eat normally with Invisalign?", answer: "Yes! Unlike braces, Invisalign aligners are removable. You take them out to eat, drink, brush, and floss — then pop them back in. There are zero food restrictions." },
  ],
  finalCtaHeadline: "Your Straighter Smile Starts Here",
  finalCtaBody: "Book your free Invisalign consultation today — includes 3D smile preview. No obligation, no pressure.",
};

const CypressInvisalignLP = () => <LandingPageTemplate data={data} />;
export default CypressInvisalignLP;
