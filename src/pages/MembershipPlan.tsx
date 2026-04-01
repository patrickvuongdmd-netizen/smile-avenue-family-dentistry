import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Check, X, Shield, Heart, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const included = [
  "2 professional cleanings per year",
  "2 comprehensive exams per year",
  "Full set of necessary X-rays",
  "1 emergency exam per year",
  "15% off all additional treatments",
  "No waiting periods",
  "No annual maximums",
  "No deductibles",
];

const comparison = [
  { feature: "Monthly cost", membership: "From $25/mo", insurance: "$50–$150/mo" },
  { feature: "Waiting periods", membership: false, insurance: true },
  { feature: "Annual maximums", membership: false, insurance: true },
  { feature: "Deductibles", membership: false, insurance: true },
  { feature: "Cleanings included", membership: true, insurance: true },
  { feature: "Exams & X-rays included", membership: true, insurance: true },
  { feature: "Discount on treatments", membership: "15% off", insurance: "Varies" },
  { feature: "Pre-authorization needed", membership: false, insurance: true },
  { feature: "Works at any dentist", membership: false, insurance: true },
];

const faqs = [
  { question: "Who is the membership plan for?", answer: "Our membership plan is ideal for patients without dental insurance, those with limited coverage, or anyone who wants straightforward, affordable dental care without the hassle of insurance." },
  { question: "How much does the membership plan cost?", answer: "Individual plans start at $25/month or $275/year. Family plans offer discounted rates for additional members. Contact us for exact pricing." },
  { question: "What's included in the membership?", answer: "Two cleanings, two exams, necessary X-rays, one emergency exam, and 15% off all additional treatments including cosmetic work, implants, and restorative care." },
  { question: "Can I use the membership at both locations?", answer: "Yes! Your Smile Avenue membership is valid at both our Cypress and Katy offices." },
  { question: "Is there a contract or commitment?", answer: "Annual memberships are paid upfront or monthly. There are no long-term contracts — you can cancel at the end of your membership period." },
];

const MembershipPlan = () => {
  useDocTitle("Dental Membership Plan | Smile Avenue Family Dentistry");

  return (
    <>
      <Helmet>
        <title>Membership Plan — No Insurance? No Problem | Smile Avenue</title>
        <meta name="description" content="Save on dental care without insurance. Smile Avenue's membership plan includes cleanings, exams, X-rays, and 15% off treatments. From $25/month." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/membership-plan/" />
        <meta property="og:title" content="Membership Plan — No Insurance? No Problem | Smile Avenue" />
        <meta property="og:description" content="Save on dental care without insurance. Includes cleanings, exams, X-rays, and 15% off treatments." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/membership-plan/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/logo-full.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        {/* Hero */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center max-w-3xl">
            <nav className="mb-6 text-xs font-sans text-muted-foreground text-left">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Membership Plan</span>
            </nav>
            <p className="kicker">AFFORDABLE DENTAL CARE</p>
            <h1 className="section-heading text-4xl md:text-5xl">No Insurance? No Problem.</h1>
            <p className="section-body">Our in-house membership plan gives you access to quality dental care at a predictable, affordable price — no deductibles, no waiting periods, no surprises.</p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary"><Shield className="w-6 h-6" /></div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-1">Individual Plan</h2>
                <p className="text-sm font-sans text-muted-foreground mb-6">Perfect for single adults</p>
                <div className="mb-6">
                  <span className="font-display text-5xl font-bold text-primary">$25</span>
                  <span className="text-muted-foreground font-sans text-sm">/month</span>
                  <p className="text-sm font-sans text-muted-foreground mt-1">or $275/year (save $25)</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-sans text-foreground"><Check className="w-4 h-4 text-primary shrink-0" />{item}</li>
                  ))}
                </ul>
                <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Sign Up Today</a>
              </div>

              <div className="bg-card rounded-2xl border-2 border-primary p-8 shadow-lg relative">
                <span className="absolute -top-3 right-6 bg-primary text-primary-foreground text-[10px] font-sans font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">BEST VALUE</span>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary"><Heart className="w-6 h-6" /></div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-1">Family Plan</h2>
                <p className="text-sm font-sans text-muted-foreground mb-6">For families of 2+</p>
                <div className="mb-6">
                  <span className="font-display text-5xl font-bold text-primary">$20</span>
                  <span className="text-muted-foreground font-sans text-sm">/month per person</span>
                  <p className="text-sm font-sans text-muted-foreground mt-1">or $225/year per person</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-sans text-foreground"><Check className="w-4 h-4 text-primary shrink-0" />{item}</li>
                  ))}
                </ul>
                <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">Sign Up Today</a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            <p className="kicker text-center">COMPARE</p>
            <h2 className="section-heading text-center">Membership vs. Traditional Insurance</h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 text-primary font-semibold">Membership</th>
                    <th className="text-center py-4 px-4 text-muted-foreground font-semibold">Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="py-3.5 px-4 text-foreground">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof row.membership === "boolean" ? (row.membership ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />) : <span className="text-primary font-medium">{row.membership}</span>}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        {typeof row.insurance === "boolean" ? (row.insurance ? <Check className="w-5 h-5 text-muted-foreground mx-auto" /> : <X className="w-5 h-5 text-muted-foreground mx-auto" />) : <span className="text-muted-foreground">{row.insurance}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding section-alt">
          <div className="container mx-auto max-w-3xl">
            <h2 className="section-heading text-center">Membership Plan FAQ</h2>
            <div className="mt-10"><FaqAccordion items={faqs} /></div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Start Saving on Your Dental Care Today</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Join hundreds of families who save with our membership plan. No insurance needed.</p>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Enroll Now</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default MembershipPlan;
