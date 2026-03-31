import { Link } from "react-router-dom";
import { Sparkles, Shield, Star, Users, Building2, ScanLine, Layers, Award, Palette, Eye } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Cosmetic Dentistry",
  serviceSlug: "cosmetic-dentistry",
  metaTitle: "Cosmetic Dentist in Cypress, TX - Smile Avenue Family Dentistry",
  metaDescription: "Transform your smile with cosmetic dentistry in Cypress, TX. Veneers, whitening, bonding and smile makeovers. Call (832) 648-1756.",
  heroKicker: "SMILE MAKEOVERS IN CYPRESS",
  heroHeading: "Cosmetic Dentistry in Cypress, TX",
  heroBody: "Your smile is one of the first things people notice. If you have been hiding yours because of chips, stains, gaps, or uneven teeth, cosmetic dentistry at Smile Avenue in Cypress can help you feel confident again.",
  heroCta1: "Book Cosmetic Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Cosmetic Dentistry",
  introKicker: "TRANSFORM YOUR SMILE",
  introHeading: "What Is Cosmetic Dentistry?",
  introParas: [
    <>Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. Services include <Link to="/cypress-tx/veneers" className="text-primary hover:underline">porcelain veneers</Link>, <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">professional whitening</Link>, dental bonding, gum contouring, and comprehensive smile makeovers.</>,
    <>Dr. Vuong combines artistic vision with digital technology for natural-looking results. Whether you need a quick fix like bonding or a complete transformation with veneers, we offer a full range of solutions tailored to your goals. For straighter teeth without braces, ask about <Link to="/cypress-tx/invisalign" className="text-primary hover:underline">Invisalign clear aligners</Link>.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Sparkles className="w-5 h-5" />, label: "In-House Lab" },
    { icon: <Users className="w-5 h-5" />, label: "500+ Smile Makeovers" },
  ],
  subServicesKicker: "WHY SMILE AVENUE",
  subServicesHeading: "Why Choose Us for Cosmetic Dentistry",
  subServicesBody: "Expert artistry, advanced technology, and in-house lab precision.",
  subServices: [
    { title: "In-House Lab for Custom Veneers & Crowns", description: "Our Smile Dental Lab crafts restorations on-site for precise color matching and faster turnaround.", icon: <Building2 className="w-5 h-5" /> },
    { title: "Digital Smile Design Previews", description: "See a preview of your new smile using advanced digital imaging before any treatment begins.", icon: <ScanLine className="w-5 h-5" /> },
    { title: "Comprehensive Services Under One Roof", description: "From veneers to whitening to full smile makeovers — everything you need in one location.", icon: <Layers className="w-5 h-5" /> },
    { title: "Proven Results with Real Transformations", description: "Real patient before-and-after results you can see in our smile gallery.", icon: <Award className="w-5 h-5" /> },
  ],
  processKicker: "YOUR COSMETIC JOURNEY",
  processHeading: "What to Expect",
  processBody: "A personalized approach to achieving your dream smile.",
  processSteps: [
    { number: "01", title: "Smile Assessment Consultation", description: "Share your goals and we'll evaluate your teeth, discuss all available options, and recommend a personalized plan.", icon: <Eye className="w-5 h-5" /> },
    { number: "02", title: "Digital Smile Design", description: "Using advanced imaging, we create a digital preview of your potential results before any treatment begins.", icon: <ScanLine className="w-5 h-5" /> },
    { number: "03", title: "Treatment Plan Presentation", description: "We walk you through the recommended treatments, timeline, and investment so you can make an informed decision.", icon: <Palette className="w-5 h-5" /> },
    { number: "04", title: "Smile Transformation", description: "Whether veneers, whitening, or a full makeover, we execute your plan with precision and artistry for stunning results.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  faqHeading: "Cosmetic Dentistry Questions",
  faqs: [
    { question: "How much do veneers cost in Cypress?", answer: "Porcelain veneers typically cost $1,200–$2,500 per tooth. We offer financing through CareCredit and our membership plan to make your dream smile affordable." },
    { question: "How long does a smile makeover take?", answer: "2–4 visits over 2–6 weeks depending on the treatments involved. We'll give you a clear timeline during your consultation." },
    { question: "Is cosmetic dentistry covered by insurance?", answer: "Some procedures with functional benefit may be partially covered by dental insurance. Our team will help you understand your coverage." },
    { question: "Will cosmetic results look natural?", answer: "Yes — our in-house Smile Dental Lab ensures custom color-matched restorations that blend seamlessly with your natural teeth." },
    { question: "How long do cosmetic treatments last?", answer: "Porcelain veneers last 15–20 years, dental bonding 5–10 years, and whitening results vary based on habits and maintenance." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "I got 8 veneers at Smile Avenue and my smile has never looked better. Dr. Vuong has an incredible eye for detail — they look so natural!", name: "Heather J.", source: "Google Review" },
    { quote: "The in-office whitening was amazing! I was in and out in about an hour and my teeth are noticeably whiter. The staff was great about checking my comfort level.", name: "Kevin D.", source: "Google Review" },
    { quote: "I had bonding done on two front teeth that were chipped. You literally cannot tell they were ever damaged. So happy I chose Smile Avenue!", name: "Priya N.", source: "Google Review" },
  ],
  ctaHeading: "Ready for Your Dream Smile?",
  ctaBody: "Book a cosmetic consultation and let us design the smile you've always wanted.",
};

const CosmeticDentistryCypress = () => <ServicePageTemplate data={data} />;
export default CosmeticDentistryCypress;
