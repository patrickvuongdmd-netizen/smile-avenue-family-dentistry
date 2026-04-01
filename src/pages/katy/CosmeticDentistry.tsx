import { Sparkles, Shield, Eye, Palette, Star, FlaskConical, Heart } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Cosmetic Dentistry",
  serviceSlug: "cosmetic-dentistry",
  metaTitle: "Cosmetic Dentist Katy, TX | Veneers, Whitening & Smile Makeovers | Smile Avenue",
  metaDescription: "Cosmetic dentistry in Katy, TX — veneers, whitening, bonding & full smile makeovers. In-house lab for precise results. 4.9★ rated. Book today.",
  heroKicker: "SMILE MAKEOVERS IN KATY",
  heroHeading: "Cosmetic Dentistry in Katy, TX",
  heroBody: "Your smile is your first impression. Cosmetic dentistry at Smile Avenue Katy helps you feel confident with natural-looking veneers, whitening, bonding, and complete smile makeovers.",
  heroCta1: "Book Cosmetic Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Cosmetic Dentistry Photo",
  introKicker: "TRANSFORM YOUR SMILE",
  introHeading: "Cosmetic Dentistry Options",
  introParas: [
    "Whether you want to fix a single chip or completely transform your smile, our cosmetic services include porcelain veneers, teeth whitening, dental bonding, Invisalign clear aligners, and full smile makeovers. Every treatment is designed for natural-looking results that complement your facial features.",
    "Our in-house Smile Dental Lab gives us complete control over the craftsmanship of your veneers, crowns, and restorations — ensuring precise color matching and perfect fit. Families across Cinco Ranch, Cross Creek Ranch, Elyson, and Cane Island trust Smile Avenue for judgment-free cosmetic consultations and stunning results.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <FlaskConical className="w-5 h-5" />, label: "In-House Dental Lab" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Smile Makeover Experts" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us",
  subServicesBody: "Artistry meets technology for results that look and feel natural.",
  subServices: [
    { title: "In-House Lab Precision", description: "Our Smile Dental Lab fabricates veneers and restorations on-site for precise color matching, perfect fit, and faster turnaround.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "Digital Smile Design", description: "See your new smile before treatment begins with digital imaging and virtual previews of your transformation.", icon: <Eye className="w-5 h-5" /> },
    { title: "Comprehensive Options", description: "From whitening to veneers to full makeovers — we offer every cosmetic treatment under one roof.", icon: <Palette className="w-5 h-5" /> },
    { title: "Judgment-Free Consultations", description: "We listen to your goals without judgment and create a plan that fits your vision and budget.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR SMILE JOURNEY",
  processHeading: "What to Expect",
  processBody: "A personalized process from initial vision to stunning results.",
  processSteps: [
    { number: "01", title: "Smile Assessment", description: "We evaluate your teeth, discuss your goals, and explore which cosmetic treatments will achieve your ideal smile.", icon: <Eye className="w-5 h-5" /> },
    { number: "02", title: "Digital Design", description: "Using digital imaging, we preview your new smile so you can see the results before treatment begins.", icon: <Palette className="w-5 h-5" /> },
    { number: "03", title: "Treatment Plan", description: "Your customized treatment plan is developed with clear timelines, costs, and expected outcomes.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Smile Transformation", description: "Your cosmetic treatments are performed with precision and artistry for natural, beautiful results.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  faqHeading: "Cosmetic Dentistry Questions",
  faqs: [
    { question: "How much do veneers cost?", answer: "Porcelain veneers typically range from $1,200-$2,500 per tooth. We offer CareCredit financing and free consultations to discuss your options and budget." },
    { question: "How long does a smile makeover take?", answer: "Most smile makeovers are completed in 2-6 weeks depending on the treatments involved. Some procedures like whitening can be done in a single visit." },
    { question: "Does insurance cover cosmetic dentistry?", answer: "Some functionally necessary procedures (crowns, bonding for broken teeth) may be covered. Purely cosmetic treatments are typically not covered, but financing is available." },
    { question: "Will results look natural?", answer: "Yes — our in-house Smile Dental Lab ensures precise color matching and natural translucency. We design every restoration to complement your facial features." },
    { question: "How long do cosmetic treatments last?", answer: "Porcelain veneers last 15-20 years. Professional whitening lasts 6 months to 2 years with maintenance. Bonding lasts 5-10 years. Results depend on care and maintenance." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My smile makeover at Smile Avenue Katy exceeded all expectations. The veneers look completely natural and I can't stop smiling. The team truly cares about getting it right.", name: "Priya S.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "I was self-conscious about my teeth for years. After whitening and bonding, I finally feel confident. The consultation was judgment-free and the results are amazing.", name: "Marcus T.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "The digital preview of my new smile sold me. Being able to see the results before committing made the whole process stress-free. Love my new veneers!", name: "Lauren H.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Ready for Your Dream Smile?",
  ctaBody: "Schedule your free cosmetic consultation and discover what's possible for your smile.",
};

const CosmeticDentistryKaty = () => <ServicePageTemplate data={data} />;
export default CosmeticDentistryKaty;
