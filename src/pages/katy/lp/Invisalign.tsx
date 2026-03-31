import { Sparkles, CreditCard, Award } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";
import beforeAfterInvisalign from "@/assets/gallery/before-after-invisalign.jpg";

const data: LandingPageData = {
  location: "katy",
  metaTitle: "Invisalign Katy TX | Free Consultation | Smile Avenue",
  metaDescription: "Straighter teeth without metal braces. Invisalign clear aligners for teens and adults in Katy, TX. Free consultation available. Book today.",
  heroHeadline: "Straighter Teeth Without Metal Braces — Invisalign in Katy",
  heroSubheadline: "Custom clear aligners for teens and adults. Free consultation available.",
  heroCtaLabel: "Book Your Free Consultation",
  heroCtaType: "book",
  benefits: [
    { icon: <Sparkles className="w-6 h-6" />, title: "Free Invisalign Consultation", description: "Meet with our experienced Invisalign provider for a complimentary evaluation and custom treatment plan." },
    { icon: <CreditCard className="w-6 h-6" />, title: "Flexible Payment Plans", description: "0% financing available through CareCredit. We also accept most PPO insurance plans." },
    { icon: <Award className="w-6 h-6" />, title: "Experienced Invisalign Provider", description: "Our doctors have treated hundreds of Invisalign cases for teens and adults in the Katy community." },
  ],
  extraSection: (
    <section className="py-14 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Real Smiles, Real Results
        </h2>
        <p className="text-muted-foreground mb-8" style={{ fontFamily: "var(--font-body)" }}>
          See the transformations our Invisalign patients have experienced. Straighter teeth, more confidence — without metal braces.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 mb-2 text-xs font-sans font-semibold text-muted-foreground">
                <span className="px-2 py-0.5 rounded bg-destructive/10 text-destructive">Before</span>
                <span className="px-2 py-0.5 rounded text-white" style={{ backgroundColor: "#2B5DA7" }}>After</span>
              </div>
              <p className="text-sm text-muted-foreground">Invisalign Patient {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  faqs: [
    { question: "How long does Invisalign treatment take?", answer: "Most adult cases take 12–18 months, though some mild cases can be completed in as little as 6 months. Your doctor will provide a personalized timeline." },
    { question: "Is Invisalign covered by insurance?", answer: "Many dental insurance plans cover Invisalign the same way they cover traditional braces. We'll verify your benefits at your free consultation." },
    { question: "Does Invisalign hurt?", answer: "Most patients experience mild pressure when switching to new aligners, which is a sign the treatment is working. Any discomfort typically fades within a day or two." },
  ],
  finalCtaHeadline: "Your Straighter Smile Starts Here",
  finalCtaBody: "Book your free Invisalign consultation today — no obligation, no pressure.",
};

const KatyInvisalignLP = () => <LandingPageTemplate data={data} />;
export default KatyInvisalignLP;
