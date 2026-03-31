import { FlaskConical, Sparkles, CreditCard } from "lucide-react";
import LandingPageTemplate, { LandingPageData } from "@/components/LandingPageTemplate";

const data: LandingPageData = {
  location: "katy",
  pageType: "dental-implants",
  metaTitle: "Dental Implants Katy TX | Free Consultation | Smile Avenue",
  metaDescription: "Missing teeth? Natural-looking dental implants with our in-house Smile Dental Lab in Katy, TX. Free implant consultation. Financing available.",
  heroHeadline: "Missing Teeth? Dental Implants That Look and Feel Natural",
  heroSubheadline: "In-house Smile Dental Lab for faster results. Financing available. Free implant consultation.",
  heroCtaLabel: "Book Your Free Implant Consultation",
  heroCtaType: "book",
  benefits: [
    { icon: <FlaskConical className="w-6 h-6" />, title: "In-House Dental Lab", description: "Our Smile Dental Lab crafts your implant restorations on-site for faster turnaround and precise fit — no outsourcing." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Free Implant Consultation", description: "Meet with our implant specialist for a complimentary evaluation, 3D scan, and personalized treatment plan." },
    { icon: <CreditCard className="w-6 h-6" />, title: "Financing Available", description: "0% financing through CareCredit and flexible payment plans to make implants affordable." },
  ],
  extraSection: (
    <section className="py-14 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Full Arch Solutions — All-on-X Implants
        </h2>
        <p className="text-muted-foreground mb-6" style={{ fontFamily: "var(--font-body)" }}>
          Missing most or all of your teeth? All-on-X dental implants replace a full arch with just 4–6 implants — a permanent, beautiful solution that lets you eat, smile, and live with confidence. Our in-house lab means faster delivery and precise results.
        </p>
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
    { question: "How long do dental implants last?", answer: "With proper care, dental implants can last a lifetime. The implant post fuses with your jawbone permanently, while the crown on top typically lasts 15–25 years." },
    { question: "Am I a candidate for dental implants?", answer: "Most adults with good general health are candidates. During your free consultation, we'll evaluate your jawbone density with a 3D scan and discuss your options." },
    { question: "What is the recovery time?", answer: "Most patients return to normal activities within a few days. Full integration of the implant with your jawbone takes 3–6 months, during which you'll have a temporary restoration." },
    { question: "How much do dental implants cost?", answer: "Cost varies based on the number of implants and type of restoration. We provide a detailed cost breakdown at your free consultation. Insurance and financing options available." },
  ],
  finalCtaHeadline: "Restore Your Smile with Dental Implants",
  finalCtaBody: "Book your free implant consultation today. In-house lab. Financing available. No obligation.",
};

const KatyDentalImplantsLP = () => <LandingPageTemplate data={data} />;
export default KatyDentalImplantsLP;
