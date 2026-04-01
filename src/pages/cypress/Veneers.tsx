import { Link } from "react-router-dom";
import { Sparkles, Star, Users, Crown, Eye, Layers, Scan } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Veneers",
  serviceSlug: "veneers",
  metaTitle: "Veneers Cypress, TX | Porcelain Veneers & Smile Design | Smile Avenue",
  metaDescription: "Porcelain veneers in Cypress, TX — Emax & zirconia options crafted in our in-house lab. Free smile consultation. 0% financing available. Call (832) 648-1756.",
  heroKicker: "VENEERS IN CYPRESS",
  heroHeading: "Porcelain Veneers in Cypress, TX",
  heroBody: "Veneers are the gold standard for transforming the appearance of your smile. At Smile Avenue Cypress, our in-house Smile Dental Lab crafts each veneer to precise specifications — delivering a natural, beautiful result.",
  heroCta1: "Book Free Veneer Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Veneers",
  heroValueProps: ["In-house Smile Dental Lab craftsmanship", "Emax & zirconia options", "Digital smile design preview", "Minimal-prep veneers available", "0% financing through CareCredit"],
  introKicker: "SMILE TRANSFORMATION",
  introHeading: "What Are Porcelain Veneers?",
  introParas: [
    "Veneers are thin porcelain shells bonded to the front surfaces of your teeth, instantly correcting chips, stains, gaps, and uneven teeth. We offer both Emax lithium disilicate and zirconia options — Emax for superior translucency and aesthetics, zirconia for maximum strength and durability. Both minimal-prep and traditional preparation approaches are available depending on your case.",
    <>Every veneer is designed and fabricated in our in-house Smile Dental Lab for perfect color matching and precise fit. Combined with <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">teeth whitening</Link> on surrounding teeth, veneers deliver a complete <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic transformation</Link>. Our lab ensures consistency that outside labs simply can't match.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Sparkles className="w-5 h-5" />, label: "In-House Lab" },
    { icon: <Users className="w-5 h-5" />, label: "Emax & Zirconia" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Veneers",
  subServicesBody: "In-house lab craftsmanship, digital design previews, and proven results.",
  subServices: [
    { title: "In-House Lab Craftsmanship", description: "Our Smile Dental Lab fabricates each veneer on-site for precise color matching, perfect fit, and faster turnaround.", icon: <Crown className="w-5 h-5" /> },
    { title: "Digital Smile Design Preview", description: "See your new smile before treatment begins with digital imaging and virtual previews.", icon: <Eye className="w-5 h-5" /> },
    { title: "Emax & Zirconia Options", description: "We offer both Emax lithium disilicate and zirconia veneers to match your needs — from maximum aesthetics to maximum durability.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Minimal-Prep Veneers Available", description: "For qualifying patients, minimal-prep veneers require little to no removal of natural tooth structure.", icon: <Layers className="w-5 h-5" /> },
  ],
  processKicker: "THE VENEER PROCESS",
  processHeading: "What to Expect",
  processBody: "A detailed process designed for beautiful, lasting results.",
  processSteps: [
    { number: "01", title: "Smile Consultation & Digital Design", description: "We discuss your goals, evaluate your teeth, and use digital imaging to preview your new smile.", icon: <Eye className="w-5 h-5" /> },
    { number: "02", title: "Tooth Preparation", description: "A thin layer of enamel is gently removed (minimal for minimal-prep) and precise digital impressions are taken.", icon: <Scan className="w-5 h-5" /> },
    { number: "03", title: "Veneer Fabrication", description: "Our lab team crafts your custom veneers with precise color matching and natural translucency.", icon: <Crown className="w-5 h-5" /> },
    { number: "04", title: "Bonding & Final Adjustments", description: "Your veneers are permanently bonded and polished for a flawless, natural-looking finish.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  faqHeading: "Veneer Questions",
  faqs: [
    { question: "How much do veneers cost?", answer: "Porcelain veneers typically range from $1,200-$2,500 per tooth depending on material (Emax vs zirconia) and complexity. Financing through CareCredit is available. Free consultation to discuss your options." },
    { question: "How long do veneers last?", answer: "With proper care, porcelain veneers typically last 15-20 years. Emax veneers are known for exceptional durability. Good oral hygiene and regular checkups help maximize their lifespan." },
    { question: "Do veneers look natural?", answer: "Yes — our in-house Smile Dental Lab ensures perfect color matching and natural translucency. Modern porcelain and Emax veneers mimic the light-reflecting properties of natural tooth enamel." },
    { question: "Can veneers stain?", answer: "Porcelain resists staining significantly better than natural teeth. However, the bonding material at the edges can discolor over time, so good hygiene is important." },
    { question: "How many veneers do I need?", answer: "It depends on your goals. Most smile transformations involve 4-8 veneers covering the 'smile zone' — the teeth visible when you smile. We'll recommend the ideal number during your consultation." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "I got 10 veneers and the transformation is unreal. My teeth were crooked and stained — now they're absolutely perfect. The in-house lab made a huge difference in quality.", name: "Vanessa R.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "The minimal-prep veneers were exactly what I needed. Very little drilling and the results are gorgeous. I get compliments on my smile constantly.", name: "Andrew L.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "Worth every penny. The Emax veneers look so natural — they have the same translucency as real teeth. Nobody can tell they're veneers.", name: "Christine M.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "Transform Your Smile with Veneers",
  ctaBody: "Schedule your free veneer consultation and see what's possible for your smile.",
};

const VeneersCypress = () => <ServicePageTemplate data={data} />;
export default VeneersCypress;
