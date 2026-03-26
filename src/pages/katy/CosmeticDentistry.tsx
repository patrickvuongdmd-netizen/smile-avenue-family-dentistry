import { Sparkles, Shield, Users, Palette, Eye, Star, Scan } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Cosmetic Dentistry",
  serviceSlug: "cosmetic-dentistry",
  metaTitle: "Cosmetic Dentistry Katy, TX | Smile Makeovers | Smile Avenue",
  metaDescription: "Transform your smile with cosmetic dentistry in Katy, TX. Veneers, whitening, bonding & smile design at Smile Avenue. Call (281) 800-5008.",
  heroKicker: "SMILE MAKEOVERS IN KATY",
  heroHeading: "Cosmetic Dentistry in Katy, TX",
  heroBody: "Your smile is the first thing people notice. At Smile Avenue Katy, we combine artistry with advanced technology to create stunning, natural-looking results that boost your confidence every day.",
  heroCta1: "Book Cosmetic Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Cosmetic Dentistry Photo",
  introKicker: "ABOUT COSMETIC DENTISTRY",
  introHeading: "What Is Cosmetic Dentistry?",
  introParas: [
    "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. While general dentistry addresses health and function, cosmetic procedures enhance color, alignment, shape, and proportion.",
    "Modern cosmetic treatments are minimally invasive and deliver dramatic results. Whether you're looking to brighten stained teeth, close gaps, reshape uneven teeth, or completely redesign your smile, we have solutions tailored to your goals.",
    "At our Katy location, we serve patients from Cinco Ranch, Firethorne, Cross Creek Ranch, and beyond with personalized smile design consultations and expert cosmetic treatments."
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "Smile Design Experts" },
    { icon: <Shield className="w-5 h-5" />, label: "Natural-Looking Results" },
    { icon: <Users className="w-5 h-5" />, label: "Trusted by 5,000+ Families" },
  ],
  subServicesKicker: "OUR COSMETIC SERVICES",
  subServicesHeading: "Cosmetic Treatments We Offer",
  subServicesBody: "From subtle enhancements to complete smile makeovers, we have the right cosmetic solution for you.",
  subServices: [
    { title: "Porcelain Veneers", description: "Ultra-thin porcelain shells bonded to the front of your teeth to correct chips, stains, gaps, and misalignment for a flawless smile.", icon: <Star className="w-5 h-5" /> },
    { title: "Teeth Whitening", description: "Professional-grade whitening that delivers results up to 8 shades brighter — far beyond what over-the-counter products can achieve.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Bonding", description: "A quick, affordable way to repair chips, close small gaps, and reshape teeth using tooth-colored composite resin.", icon: <Palette className="w-5 h-5" /> },
    { title: "Smile Design", description: "A comprehensive consultation where we digitally preview your new smile before any treatment begins, so you know exactly what to expect.", icon: <Eye className="w-5 h-5" /> },
  ],
  processKicker: "YOUR COSMETIC JOURNEY",
  processHeading: "How Cosmetic Treatment Works",
  processBody: "We take a thoughtful, personalized approach to every cosmetic case.",
  processSteps: [
    { number: "01", title: "Smile Consultation", description: "Share your goals and concerns. We'll examine your teeth and discuss the best options for your desired outcome.", icon: <Eye className="w-6 h-6" /> },
    { number: "02", title: "Digital Smile Preview", description: "Using digital imaging, we show you a preview of your transformed smile before any work begins.", icon: <Scan className="w-6 h-6" /> },
    { number: "03", title: "Custom Treatment", description: "We execute your personalized treatment plan with precision, whether it's veneers, whitening, bonding, or a combination.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "04", title: "Reveal Your Smile", description: "See your stunning results and leave our office with the confidence of a brand-new smile.", icon: <Star className="w-6 h-6" /> },
  ],
  faqHeading: "Cosmetic Dentistry FAQ",
  faqs: [
    { question: "How much does cosmetic dentistry cost in Katy, TX?", answer: "Costs vary by procedure: bonding starts around $300-$600 per tooth, whitening from $400-$800, and veneers from $1,200-$2,500 per tooth. We offer financing through CareCredit and Sunbit." },
    { question: "Is cosmetic dentistry covered by insurance?", answer: "Most cosmetic procedures are considered elective and not covered by insurance. However, some treatments like crowns may have partial coverage. We'll verify your benefits before treatment." },
    { question: "How long do veneers last?", answer: "Porcelain veneers typically last 10-20 years with proper care. They resist staining better than natural teeth and maintain their appearance beautifully." },
    { question: "Does teeth whitening damage enamel?", answer: "Professional whitening supervised by a dentist is safe and does not damage enamel. We customize the treatment to minimize sensitivity." },
    { question: "Can cosmetic dentistry fix crooked teeth?", answer: "Yes! Veneers can address mild misalignment, and we also offer Invisalign for more significant orthodontic concerns. We'll recommend the best approach during your consultation." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING",
  reviewsHeading: "Cosmetic Dentistry Reviews",
  testimonials: [
    { quote: "Got 8 veneers at the Katy office and my smile has never looked better. Dr. Chang's attention to detail is remarkable. I smile all the time now!", name: "Michelle T.", source: "Google Review" },
    { quote: "The teeth whitening results were amazing — my teeth are so bright and the process was comfortable. Best investment I've made in myself.", name: "Kevin R.", source: "Google Review" },
    { quote: "Had bonding done on two front teeth and you honestly can't tell which ones were repaired. Natural-looking and affordable. Love this practice!", name: "Laura G.", source: "Google Review" },
  ],
  ctaHeading: "Start Your Smile Transformation",
  ctaBody: "Book a cosmetic consultation at our Katy office and discover what's possible for your smile.",
};

const CosmeticDentistryKaty = () => <ServicePageTemplate data={data} />;
export default CosmeticDentistryKaty;
