import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Sparkles, Shield, Zap, Heart } from "lucide-react";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Dental Bonding",
  serviceSlug: "dental-bonding",
  metaTitle: "Dental Bonding Cypress, TX | Cosmetic Tooth Repair | Smile Avenue",
  metaDescription: "Dental bonding in Cypress, TX. Quick, affordable cosmetic repair for chipped, gapped, or discolored teeth. Same-day results. Call (832) 648-1756.",
  heroKicker: "COSMETIC TOOTH REPAIR IN CYPRESS",
  heroHeading: "Dental Bonding in Cypress, TX",
  heroBody: "Dental bonding is one of the quickest, most affordable ways to transform your smile. Using tooth-colored composite resin, we can repair chips, close gaps, reshape teeth, and fix discoloration — often in a single visit with no anesthesia needed.",
  heroCta1: "Book Bonding Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Dental Bonding",
  introKicker: "ABOUT DENTAL BONDING",
  introHeading: "What Is Dental Bonding?",
  introParas: [
    "Dental bonding involves applying a tooth-colored composite resin material to the surface of a tooth to improve its appearance. The material is sculpted, shaped, and polished to match the surrounding teeth, creating a seamless, natural-looking result.",
    "Unlike veneers or crowns, bonding typically requires no tooth preparation and can be completed in a single appointment. It's an excellent option for minor cosmetic imperfections that don't require more extensive treatment.",
    "Bonding is also one of the most cost-effective cosmetic dental procedures available, making it a popular choice for patients who want to improve their smile without a major investment.",
  ],
  trustBadges: [
    { icon: <Zap className="w-5 h-5" />, label: "Same-Day Results" },
    { icon: <Shield className="w-5 h-5" />, label: "No Anesthesia Needed" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Natural-Looking" },
  ],
  subServicesKicker: "BONDING SOLUTIONS",
  subServicesHeading: "Dental Bonding Treatments",
  subServicesBody: "We use dental bonding to address a variety of cosmetic concerns.",
  subServices: [
    { title: "Chipped Tooth Repair", description: "Restore the natural shape of chipped or cracked teeth with color-matched composite resin.", icon: <Shield className="w-5 h-5" /> },
    { title: "Gap Closure", description: "Close small gaps between teeth for a more uniform, balanced smile without orthodontics.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Tooth Reshaping", description: "Adjust the shape, length, or contour of teeth that appear uneven or irregularly shaped.", icon: <Zap className="w-5 h-5" /> },
    { title: "Discoloration Fix", description: "Cover stubborn stains or discoloration that doesn't respond to whitening treatments.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "THE PROCESS",
  processHeading: "How Dental Bonding Works",
  processBody: "A quick, comfortable procedure with beautiful results.",
  processSteps: [
    { number: "01", title: "Color Matching", description: "We select a composite resin shade that perfectly matches your natural tooth color.", icon: <Sparkles className="w-5 h-5" /> },
    { number: "02", title: "Surface Preparation", description: "The tooth surface is lightly etched and a conditioning liquid is applied for optimal bonding.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Sculpting & Shaping", description: "The composite is applied, sculpted to the desired shape, and hardened with a special curing light.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Polish & Perfect", description: "The bonded tooth is polished to match the sheen of your natural teeth for a seamless finish.", icon: <Heart className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Bonding FAQs",
  faqs: [
    { question: "How long does dental bonding last?", answer: "With proper care, dental bonding lasts 5–10 years before touch-ups may be needed. Avoid biting hard objects and maintain good oral hygiene." },
    { question: "Does dental bonding look natural?", answer: "Yes! We color-match the composite resin to your natural teeth, so the bonding blends seamlessly and is virtually undetectable." },
    { question: "Is dental bonding painful?", answer: "No — bonding rarely requires anesthesia unless it's being used to fill a cavity. The procedure is quick and comfortable." },
    { question: "How much does dental bonding cost?", answer: "Dental bonding typically costs $150–$400 per tooth, making it one of the most affordable cosmetic procedures. Costs vary based on complexity." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "Bonding Success Stories",
  testimonials: [
    { quote: "I chipped my front tooth and was so embarrassed. Smile Avenue fixed it with bonding in under an hour. You can't even tell!", name: "Emily R.", source: "Google Review" },
    { quote: "Had bonding done to close a gap between my front teeth. Quick, painless, and the results look amazing. Wish I'd done it sooner.", name: "Kevin H.", source: "Google Review" },
    { quote: "Affordable and beautiful results. The bonding matches my other teeth perfectly. Love my new smile!", name: "Ashley P.", source: "Google Review" },
  ],
  ctaHeading: "Transform Your Smile Today",
  ctaBody: "Schedule a dental bonding consultation and see what a difference one visit can make.",
};

export default () => <ServicePageTemplate data={data} />;
