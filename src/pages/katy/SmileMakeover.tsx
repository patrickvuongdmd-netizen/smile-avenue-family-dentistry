import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Sparkles, Shield, Zap, Heart } from "lucide-react";

const data: ServicePageData = {
  location: "katy", serviceName: "Smile Makeover", serviceSlug: "smile-makeover",
  metaTitle: "Smile Makeover Katy, TX | Complete Transformation | Smile Avenue",
  metaDescription: "Smile makeover in Katy, TX. Comprehensive cosmetic transformation with veneers, whitening, implants & digital smile design. Call (281) 800-5008.",
  heroKicker: "COMPLETE SMILE TRANSFORMATION IN KATY", heroHeading: "Smile Makeover in Katy, TX",
  heroBody: "A smile makeover combines multiple cosmetic treatments into one comprehensive plan. At Smile Avenue Katy, we use digital smile design to preview your results before treatment begins.",
  heroCta1: "Book Smile Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Smile Makeover",
  introKicker: "YOUR DREAM SMILE", introHeading: "What Is a Smile Makeover?",
  introParas: [
    "A smile makeover addresses multiple cosmetic concerns — color, alignment, shape, spacing, and gum symmetry — through a customized combination of treatments.",
    "Every makeover begins with digital smile design, creating a virtual preview of your new smile before any work begins.",
    "Whether subtle refinements or dramatic transformation, we create a plan that fits your goals, timeline, and budget.",
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "Digital Smile Design" },
    { icon: <Shield className="w-5 h-5" />, label: "Customized Plans" },
    { icon: <Heart className="w-5 h-5" />, label: "Life-Changing Results" },
  ],
  subServicesKicker: "MAKEOVER OPTIONS", subServicesHeading: "Smile Makeover Treatments", subServicesBody: "Combined treatments for comprehensive transformations.",
  subServices: [
    { title: "Veneers + Whitening Combo", description: "Porcelain veneers with whitening for a uniformly bright, beautiful smile.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Full Mouth Restoration", description: "Crowns, implants, and prosthetics to rebuild your entire smile.", icon: <Shield className="w-5 h-5" /> },
    { title: "Digital Smile Design", description: "Virtual preview of your new smile before treatment starts.", icon: <Zap className="w-5 h-5" /> },
    { title: "Gum Contouring", description: "Reshape the gumline for a balanced, proportionate smile.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "THE JOURNEY", processHeading: "Your Makeover Process", processBody: "Vision to reality, guided every step.",
  processSteps: [
    { number: "01", title: "Vision Consultation", description: "Share your goals; we photograph and discuss options.", icon: <Heart className="w-5 h-5" /> },
    { number: "02", title: "Digital Design", description: "Virtual mockup of your new smile for preview.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Treatment Phase", description: "Customized plan executed over one or more visits.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Reveal", description: "Your new smile is revealed with final adjustments.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  faqHeading: "Smile Makeover FAQs",
  faqs: [
    { question: "How much does a smile makeover cost?", answer: "$2,000 to $30,000+ depending on treatments. Financing available." },
    { question: "How long does it take?", answer: "2 weeks to several months depending on complexity." },
    { question: "Can I preview my new smile?", answer: "Yes! Digital smile design shows you results before treatment." },
    { question: "Is it worth it?", answer: "Patients consistently report it as one of the best investments in their confidence." },
  ],
  reviewsKicker: "TRANSFORMATIONS", reviewsHeading: "Makeover Success Stories",
  testimonials: [
    { quote: "My smile makeover changed my life. The digital preview was exactly what I got!", name: "Jennifer K.", source: "Google Review" },
    { quote: "Veneers and whitening combo looks stunning. Dr. Vuong is a true artist.", name: "Michael W.", source: "Google Review" },
    { quote: "Beyond my expectations. The team truly listened and delivered.", name: "Samantha B.", source: "Google Review" },
  ],
  ctaHeading: "Start Your Transformation", ctaBody: "Book your smile makeover consultation at Smile Avenue Katy.",
};

export default () => <ServicePageTemplate data={data} />;
