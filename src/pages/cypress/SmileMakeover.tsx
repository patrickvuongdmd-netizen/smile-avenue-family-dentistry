import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Sparkles, Shield, Zap, Heart } from "lucide-react";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Smile Makeover",
  serviceSlug: "smile-makeover",
  metaTitle: "Smile Makeover Cypress, TX | Complete Smile Transformation | Smile Avenue",
  metaDescription: "Smile makeover in Cypress, TX. Comprehensive cosmetic transformation with veneers, whitening, implants & digital smile design. Call (832) 648-1756.",
  heroKicker: "COMPLETE SMILE TRANSFORMATION IN CYPRESS",
  heroHeading: "Smile Makeover in Cypress, TX",
  heroBody: "A smile makeover combines multiple cosmetic and restorative treatments into a comprehensive plan designed to give you the smile you've always dreamed of. At Smile Avenue Cypress, we use digital smile design technology to preview your results before treatment begins.",
  heroCta1: "Book Smile Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Smile Makeover",
  introKicker: "YOUR DREAM SMILE",
  introHeading: "What Is a Smile Makeover?",
  introParas: [
    "A smile makeover is a customized treatment plan that addresses multiple cosmetic concerns simultaneously — from tooth color and alignment to shape, spacing, and gum symmetry. It may include veneers, whitening, bonding, crowns, implants, or orthodontics.",
    "Every smile makeover begins with a thorough consultation and digital smile design session. Using advanced software, we create a virtual preview of your new smile so you can see the results before committing to treatment.",
    "Whether you're looking for subtle refinements or a dramatic transformation, our team works with you to create a plan that fits your goals, timeline, and budget.",
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "Digital Smile Design" },
    { icon: <Shield className="w-5 h-5" />, label: "Customized Plans" },
    { icon: <Heart className="w-5 h-5" />, label: "Life-Changing Results" },
  ],
  subServicesKicker: "MAKEOVER OPTIONS",
  subServicesHeading: "Smile Makeover Treatments",
  subServicesBody: "We combine treatments for comprehensive smile transformations.",
  subServices: [
    { title: "Veneers + Whitening Combo", description: "Porcelain veneers on visible teeth combined with professional whitening for a uniformly bright, beautiful smile.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Full Mouth Restoration", description: "Comprehensive treatment combining crowns, implants, and prosthetics to rebuild and restore your entire smile.", icon: <Shield className="w-5 h-5" /> },
    { title: "Digital Smile Design", description: "Advanced software creates a virtual preview of your new smile, allowing you to visualize results before treatment starts.", icon: <Zap className="w-5 h-5" /> },
    { title: "Gum Contouring", description: "Reshape the gumline to create a more balanced, proportionate frame for your teeth and enhance your smile's aesthetics.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "THE JOURNEY",
  processHeading: "Your Smile Makeover Process",
  processBody: "From vision to reality, we guide your transformation every step of the way.",
  processSteps: [
    { number: "01", title: "Vision Consultation", description: "Share your smile goals. We photograph, examine, and discuss what you'd like to change.", icon: <Heart className="w-5 h-5" /> },
    { number: "02", title: "Digital Design", description: "We create a virtual mockup of your new smile so you can preview your results.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Treatment Phase", description: "Your customized treatment plan is executed over one or more visits, depending on complexity.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Reveal & Refine", description: "Your new smile is revealed! We make any final adjustments to ensure perfection.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  faqHeading: "Smile Makeover FAQs",
  faqs: [
    { question: "How much does a smile makeover cost?", answer: "Costs vary widely based on the treatments included, ranging from $2,000 to $30,000+. We provide detailed estimates after your consultation and offer financing options." },
    { question: "How long does a smile makeover take?", answer: "Timelines vary from 2 weeks to several months depending on the treatments involved. We'll outline your specific timeline during the planning phase." },
    { question: "Is a smile makeover worth it?", answer: "Patients consistently report that their smile makeover was one of the best investments they've ever made, improving confidence, self-esteem, and quality of life." },
    { question: "Can I see what my new smile will look like?", answer: "Yes! We use digital smile design software to create a virtual preview of your results before any treatment begins." },
  ],
  reviewsKicker: "TRANSFORMATIONS",
  reviewsHeading: "Smile Makeover Success Stories",
  testimonials: [
    { quote: "My smile makeover at Smile Avenue changed my life. I can't stop smiling now! The digital preview was exactly what I ended up with.", name: "Jennifer K.", source: "Google Review" },
    { quote: "Got veneers and whitening as part of my makeover. The results are stunning. Dr. Vuong is a true artist.", name: "Michael W.", source: "Google Review" },
    { quote: "From start to finish, the smile makeover experience was incredible. The team really listened to what I wanted and delivered beyond my expectations.", name: "Samantha B.", source: "Google Review" },
  ],
  ctaHeading: "Start Your Smile Transformation",
  ctaBody: "Book your smile makeover consultation and see what's possible.",
};

export default () => <ServicePageTemplate data={data} />;
