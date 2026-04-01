import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import MobileStickyBar from "@/components/MobileStickyBar";
import FaqAccordion from "@/components/FaqAccordion";

const PHONE = "8326481756";
const PHONE_FMT = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const categories = [
  {
    title: "General",
    faqs: [
      { question: "What locations do you have?", answer: "We have two offices — Cypress (9212 Fry Rd #120, Cypress, TX 77433) and Katy (23541 Westheimer Pkwy Ste #170, Katy, TX 77494). Both serve the greater Houston area." },
      { question: "What are your office hours?", answer: "Both offices are open Monday through Friday, 8:30am to 5pm. Saturday hours are available at the Katy location (8am–2pm)." },
      { question: "Do you offer same-day appointments?", answer: "Yes! We reserve time for emergencies and often have same-day availability for routine visits. Call us to check." },
      { question: "What ages do you treat?", answer: "We treat patients of all ages — from toddlers to seniors. Our team includes pediatric and geriatric dental expertise." },
      { question: "Do you speak Spanish?", answer: "¡Sí! Hablamos Español. We have bilingual team members at both locations to ensure every patient feels comfortable and understood." },
    ],
  },
  {
    title: "Insurance & Payment",
    faqs: [
      { question: "What insurance plans do you accept?", answer: "We accept most major PPO plans including Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and more. Contact us to verify your specific plan." },
      { question: "What if I don't have insurance?", answer: "We offer an in-house Membership Plan that covers cleanings, exams, X-rays, and gives you 15% off all treatments. We also offer financing through CareCredit and Sunbit." },
      { question: "Do you offer payment plans?", answer: "Yes. Through CareCredit and Sunbit, you can apply for 0% interest financing in minutes — right from your phone. Our team will help you find the best option." },
      { question: "How much does a dental cleaning cost?", answer: "A routine cleaning and exam typically ranges from $150–$350 without insurance. Most PPO plans cover two preventive visits per year at 100%." },
    ],
  },
  {
    title: "Dental Implants",
    faqs: [
      { question: "How much do dental implants cost?", answer: "A single dental implant typically ranges from $3,000–$5,000 including the crown. Full-arch All-on-X solutions range from $20,000–$35,000 per arch. We offer free implant consultations and financing." },
      { question: "Am I a candidate for dental implants?", answer: "Most adults with missing teeth are candidates. We use 3D imaging to assess bone density and plan your treatment. Even patients with bone loss may qualify with bone grafting." },
      { question: "How long do dental implants last?", answer: "With proper care, dental implants can last a lifetime. The implant crown may need replacement after 10–15 years due to normal wear." },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    faqs: [
      { question: "What's the difference between veneers and bonding?", answer: "Veneers are thin porcelain shells custom-made for your teeth — they're more durable and natural-looking. Bonding uses composite resin applied directly to the tooth and is more affordable but less long-lasting." },
      { question: "How long does teeth whitening last?", answer: "Professional whitening results typically last 6–12 months depending on your diet and habits. We provide take-home trays for touch-ups to maintain your results." },
      { question: "Can I get a smile makeover?", answer: "Absolutely! We offer comprehensive smile design consultations to create a custom plan that may include veneers, whitening, bonding, Invisalign, and more." },
    ],
  },
  {
    title: "Emergency Care",
    faqs: [
      { question: "What counts as a dental emergency?", answer: "Severe toothache, knocked-out tooth, broken tooth, lost filling or crown, swelling, abscess, uncontrolled bleeding, or jaw injury. When in doubt, call us." },
      { question: "Do you accept walk-in emergencies?", answer: "We accommodate walk-in emergencies when possible, but calling ahead at (832) 648-1756 or (281) 800-5008 helps us prepare and serve you faster." },
      { question: "What should I do if I knock out a tooth?", answer: "Handle by the crown only, rinse gently, try to re-insert in the socket. If not possible, keep it moist in milk. Call us immediately — time is critical." },
    ],
  },
  {
    title: "Invisalign & Orthodontics",
    faqs: [
      { question: "How much does Invisalign cost?", answer: "Invisalign treatment typically ranges from $3,500–$6,500 depending on complexity. Many insurance plans cover a portion. We offer free Invisalign consultations and financing." },
      { question: "How long does Invisalign take?", answer: "Most cases complete in 6–18 months. Simple cases may be done in as little as 3–6 months with Invisalign Lite." },
      { question: "Is Invisalign available for teens?", answer: "Yes! Invisalign Teen is designed specifically for adolescents, with compliance indicators and replacement aligners for active lifestyles." },
    ],
  },
  {
    title: "Sedation Dentistry",
    faqs: [
      { question: "What sedation options do you offer?", answer: "We offer nitrous oxide (laughing gas), oral sedation (pill), and IV sedation for deeper relaxation. Your dentist will recommend the best option based on your procedure and anxiety level." },
      { question: "Is dental sedation safe?", answer: "Yes. All our sedation options are administered by trained professionals with continuous monitoring. We review your medical history to ensure safety." },
      { question: "Will I be asleep during sedation?", answer: "With nitrous oxide and oral sedation, you'll be relaxed but conscious. IV sedation provides deeper relaxation where you may not remember the procedure, though you're not fully asleep." },
    ],
  },
];

const Faq = () => {
  useDocTitle("Frequently Asked Questions | Smile Avenue Family Dentistry");
  const allFaqs = categories.flatMap(c => c.faqs);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
  <>
    <Helmet>
      <title>FAQ | Smile Avenue Family Dentistry — Cypress & Katy, TX</title>
      <meta name="description" content="Frequently asked questions about dental care at Smile Avenue Family Dentistry in Cypress and Katy, TX. Insurance, costs, implants, Invisalign, emergencies & more." />
      <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/faq/" />
      <meta property="og:title" content="FAQ | Smile Avenue Family Dentistry" />
      <meta property="og:description" content="Frequently asked questions about dental care at Smile Avenue in Cypress and Katy, TX." />
      <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/faq/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <Navbar phone={PHONE} phoneFormatted={PHONE_FMT} bookingUrl={BOOKING} />
      <TrustStrip />

    <main id="main-content" className="pb-14 lg:pb-0">
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <nav className="mb-6 text-xs font-sans text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">FAQ</span>
          </nav>
          <p className="kicker">HAVE QUESTIONS?</p>
          <h1 className="section-heading text-4xl md:text-5xl">Frequently Asked Questions</h1>
          <p className="section-body max-w-2xl mx-auto">
            Find answers to the most common questions about our services, insurance, costs, and what to expect at Smile Avenue Family Dentistry.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {categories.map((cat, idx) => (
        <section key={cat.title} className={`section-padding ${idx % 2 === 0 ? "section-alt" : "bg-background"}`}>
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">{cat.title}</h2>
              <FaqAccordion items={cat.faqs} />
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="gradient-cta py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Still Have Questions?</h2>
          <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help. Call us or book online — we're happy to answer any questions about your dental care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Online</a>
            <a href={`tel:${PHONE}`} className="btn-cta-outline">Call (832) 648-1756</a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FMT} bookingUrl={BOOKING} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
  </>
);
};

export default Faq;
