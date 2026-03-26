import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Shield, CreditCard, Phone, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const insuranceProviders = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental",
  "Guardian", "MetLife", "United Concordia", "United Healthcare",
  "Humana", "Ameritas", "Principal", "Sun Life",
];

const Insurance = () => {
  useDocTitle("Dental Insurance Accepted | Smile Avenue Family Dentistry");

  return (
    <>
      <Helmet>
        <title>Insurance & Financing | Smile Avenue Family Dentistry</title>
        <meta name="description" content="We accept most major dental insurance plans. Financing available through CareCredit and Sunbit. No insurance? Ask about our membership plan." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/insurance/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Insurance & Financing</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <p className="kicker">INSURANCE & FINANCING</p>
              <h1 className="section-heading text-4xl md:text-5xl">We Make Dental Care Affordable</h1>
              <p className="section-body">We accept most major insurance plans, offer flexible financing, and have an in-house membership plan for uninsured patients. No one should skip dental care because of cost.</p>
            </div>
          </div>
        </section>

        {/* Insurance Grid */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">ACCEPTED INSURANCE</p>
            <h2 className="section-heading text-center">Insurance Plans We Accept</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
              {insuranceProviders.map((name, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5 flex items-center justify-center text-center">
                  <span className="font-sans text-sm font-semibold text-foreground">{name}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 bg-card rounded-xl border border-border p-6 max-w-2xl mx-auto">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Don't see your plan?</h3>
              <p className="text-sm font-sans text-muted-foreground mb-4">We work with many additional plans. Call us and our team will verify your coverage before your visit — at no charge.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:8326481756" className="btn-primary flex items-center gap-2 text-sm"><Phone className="w-4 h-4" /> Cypress: (832) 648-1756</a>
                <a href="tel:2818005008" className="btn-secondary flex items-center gap-2 text-sm"><Phone className="w-4 h-4" /> Katy: (281) 800-5008</a>
              </div>
            </div>
          </div>
        </section>

        {/* Financing */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">FLEXIBLE FINANCING</p>
            <h2 className="section-heading text-center">Payment Plans That Fit Your Budget</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary"><CreditCard className="w-6 h-6" /></div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">CareCredit</h3>
                <p className="text-sm font-body text-muted-foreground mb-4">Apply in minutes for 0% interest financing on qualifying treatments. Plans from 6 to 24 months make even major dental work affordable.</p>
                <ul className="space-y-2 mb-6">
                  {["0% interest options available", "Apply in under 5 minutes", "Instant approval decisions", "Use for the whole family"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-sans text-muted-foreground"><Check className="w-4 h-4 text-primary shrink-0" />{item}</li>
                  ))}
                </ul>
                <a href="https://www.carecredit.com" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 justify-center">Apply for CareCredit <ArrowRight className="w-4 h-4" /></a>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary"><CreditCard className="w-6 h-6" /></div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Sunbit</h3>
                <p className="text-sm font-body text-muted-foreground mb-4">Split your dental bill into easy monthly payments. Sunbit approves 90% of applicants with no hard credit check — apply right from our office.</p>
                <ul className="space-y-2 mb-6">
                  {["No hard credit check", "90% approval rate", "Pay over 6–72 months", "Apply at checkout"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-sans text-muted-foreground"><Check className="w-4 h-4 text-primary shrink-0" />{item}</li>
                  ))}
                </ul>
                <a href="https://www.sunbit.com" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 justify-center">Apply for Sunbit <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Membership cross-link */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center max-w-3xl">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary"><Shield className="w-8 h-8" /></div>
            <h2 className="section-heading">No Insurance? Try Our Membership Plan</h2>
            <p className="section-body">For patients without dental insurance, our in-house membership plan covers cleanings, exams, X-rays, and gives you 15% off all additional treatments — starting at just $25/month.</p>
            <Link to="/membership-plan" className="btn-primary">View Membership Plan</Link>
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Questions About Insurance or Financing?</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Our team will help you maximize your benefits and find the most affordable path to great dental care.</p>
            <a href="tel:8326481756" className="btn-cta-light">Call Us Today</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default Insurance;
