import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Sparkles, Shield, Zap, Heart } from "lucide-react";

const data: ServicePageData = {
  location: "katy", serviceName: "Dental Bonding", serviceSlug: "dental-bonding",
  metaTitle: "Dental Bonding Katy, TX | Cosmetic Tooth Repair | Smile Avenue",
  metaDescription: "Dental bonding in Katy, TX. Quick, affordable cosmetic repair for chipped, gapped, or discolored teeth. Same-day results. Call (281) 800-5008.",
  heroKicker: "COSMETIC TOOTH REPAIR IN KATY", heroHeading: "Dental Bonding in Katy, TX",
  heroBody: "Dental bonding is a quick, affordable way to repair chips, close gaps, reshape teeth, and fix discoloration — often in a single visit.",
  heroCta1: "Book Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Dental Bonding",
  introKicker: "ABOUT DENTAL BONDING", introHeading: "What Is Dental Bonding?",
  introParas: [
    "Dental bonding uses tooth-colored composite resin to improve a tooth's appearance. The material is sculpted, shaped, and polished for a seamless result.",
    "Unlike veneers, bonding requires no tooth preparation and can be completed in one appointment. It's ideal for minor cosmetic issues.",
    "Bonding is one of the most cost-effective cosmetic procedures available.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "Same-Day Results" },
    { icon: <Shield className="w-5 h-5" />, label: "No Anesthesia Needed" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Natural-Looking" },
  ],
  subServicesKicker: "BONDING SOLUTIONS", subServicesHeading: "Dental Bonding Treatments", subServicesBody: "Bonding for a variety of cosmetic concerns.",
  subServices: [
    { title: "Chipped Tooth Repair", description: "Restore chipped or cracked teeth with color-matched composite.", icon: <Shield className="w-5 h-5" /> },
    { title: "Gap Closure", description: "Close small gaps between teeth without orthodontics.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Tooth Reshaping", description: "Adjust shape, length, or contour of uneven teeth.", icon: <Zap className="w-5 h-5" /> },
    { title: "Discoloration Fix", description: "Cover stubborn stains that don't respond to whitening.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "THE PROCESS", processHeading: "How Bonding Works", processBody: "Quick, comfortable, beautiful results.",
  processSteps: [
    { number: "01", title: "Color Matching", description: "Select the perfect composite shade.", icon: <Sparkles className="w-5 h-5" /> },
    { number: "02", title: "Surface Prep", description: "Light etching and conditioning for optimal bonding.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Sculpting", description: "Composite applied, shaped, and cured with light.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Polish", description: "Final polish for a natural, seamless finish.", icon: <Heart className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Bonding FAQs",
  faqs: [
    { question: "How long does bonding last?", answer: "5–10 years with proper care." },
    { question: "Does it look natural?", answer: "Yes — we color-match to your teeth for an undetectable result." },
    { question: "Is it painful?", answer: "No — bonding rarely requires anesthesia." },
    { question: "How much does it cost?", answer: "$150–$400 per tooth, one of the most affordable cosmetic options." },
  ],
  reviewsKicker: "PATIENT REVIEWS", reviewsHeading: "Bonding Success Stories",
  testimonials: [
    { quote: "Fixed my chipped tooth in under an hour. You can't even tell! Amazing work.", name: "Emily R.", source: "Google Review" },
    { quote: "Closed the gap in my front teeth with bonding. Quick, painless, and beautiful.", name: "Kevin H.", source: "Google Review" },
    { quote: "Affordable and natural-looking results. Love my new smile!", name: "Ashley P.", source: "Google Review" },
  ],
  ctaHeading: "Transform Your Smile Today", ctaBody: "Schedule a dental bonding consultation at Smile Avenue Katy.",
};

export default () => <ServicePageTemplate data={data} />;
