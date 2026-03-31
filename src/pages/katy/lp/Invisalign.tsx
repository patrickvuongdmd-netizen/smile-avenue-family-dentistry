import { Sparkles, CreditCard, Award } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";
import beforeAfterInvisalign from "@/assets/gallery/before-after-invisalign.jpg";

const data: LandingPageData = {
  location: "katy",
  pageType: "invisalign",
  metaTitle: "Invisalign Katy TX | Free Consultation | Clear Aligners | Smile Avenue",
  metaDescription: "Straighter teeth without metal braces. Invisalign clear aligners for teens and adults in Katy, TX. Free consultation with 3D smile preview. 0% financing. Book today.",
  heroHeadline: "Get the Straight Smile You've Always Wanted — Without Metal Braces",
  heroSubheadline: "Invisalign clear aligners for teens and adults in Katy. Custom-fitted, virtually invisible, and removable. Free consultation includes 3D smile preview.",
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
  testimonials: [
    { quote: "I'm a teacher in Cinco Ranch and didn't want metal braces in front of my students. Invisalign was perfect — nobody noticed! My smile looks amazing after just 11 months.", name: "Rachel T.", service: "Invisalign Patient" },
    { quote: "My son did Invisalign instead of traditional braces. The convenience of removable aligners made it so much easier for his sports and school activities. Results were incredible.", name: "James M.", service: "Teen Invisalign" },
  ],
  extraSection: (
    <section className="py-14 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Real Smiles, Real Results
        </h2>
        <p className="text-muted-foreground mb-8" style={{ fontFamily: "var(--font-body)" }}>
          See actual before-and-after transformations from our Invisalign patients. Straighter teeth, more confidence — without metal braces.
        </p>
        <div className="max-w-2xl mx-auto">
          <img
            src={beforeAfterInvisalign}
            alt="Before and after Invisalign clear aligner treatment at Smile Avenue Katy TX"
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

const KatyInvisalignLP = () => <LandingPageTemplate data={data} />;
export default KatyInvisalignLP;
