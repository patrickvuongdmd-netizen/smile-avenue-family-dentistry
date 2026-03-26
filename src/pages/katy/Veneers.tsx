import { Shield, Users, Star, Eye, Sparkles, Palette } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Veneers",
  serviceSlug: "veneers",
  metaTitle: "Veneers Katy, TX | Porcelain Veneers | Smile Avenue",
  metaDescription: "Transform your smile with porcelain veneers in Katy, TX. Emax, minimal-prep & traditional veneers. Call (281) 800-5008 for a consultation.",
  heroKicker: "PORCELAIN VENEERS IN KATY",
  heroHeading: "Veneers in Katy, TX",
  heroBody: "Porcelain veneers are the ultimate cosmetic solution — correcting chips, stains, gaps, and misalignment with ultra-thin shells that look and feel like natural teeth.",
  heroCta1: "Book Veneer Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Veneers Photo",
  introKicker: "ABOUT VENEERS", introHeading: "What Are Porcelain Veneers?",
  introParas: [
    "Porcelain veneers are custom-made, ultra-thin shells bonded to the front surfaces of your teeth. They instantly transform the color, shape, size, and alignment of your smile.",
    "Veneers are ideal for patients with stained, chipped, worn, slightly crooked, or gapped teeth who want a dramatic yet natural-looking improvement. They resist staining better than natural enamel and can last 15-20 years.",
    "At Smile Avenue Katy, we use premium porcelain and Emax ceramics, working closely with top dental labs. Our team serves patients from Cinco Ranch, Cross Creek Ranch, and Firethorne with expert veneer artistry."
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "Premium Materials" },
    { icon: <Shield className="w-5 h-5" />, label: "Expert Artistry" },
    { icon: <Users className="w-5 h-5" />, label: "Stunning Results" },
  ],
  subServicesKicker: "VENEER OPTIONS", subServicesHeading: "Veneer Treatments We Offer",
  subServicesBody: "We offer multiple veneer options to match your goals and budget.",
  subServices: [
    { title: "Porcelain Veneers", description: "Traditional porcelain veneers crafted by master ceramists for the most natural, long-lasting results.", icon: <Star className="w-5 h-5" /> },
    { title: "Emax Veneers", description: "Lithium disilicate veneers that combine exceptional strength with lifelike translucency for a beautiful, durable result.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Minimal-Prep Veneers", description: "Ultra-thin veneers that require little to no tooth reduction, preserving more of your natural tooth structure.", icon: <Shield className="w-5 h-5" /> },
    { title: "Veneer Consultation", description: "A comprehensive evaluation where we discuss your goals, show digital previews, and create your personalized treatment plan.", icon: <Eye className="w-5 h-5" /> },
  ],
  processKicker: "YOUR VENEER JOURNEY", processHeading: "What to Expect",
  processBody: "Our veneer process is meticulous, ensuring stunning, natural-looking results.",
  processSteps: [
    { number: "01", title: "Smile Design Consultation", description: "We discuss your goals, take photos and impressions, and create a digital preview of your new smile.", icon: <Eye className="w-6 h-6" /> },
    { number: "02", title: "Tooth Preparation", description: "A thin layer of enamel is gently removed and temporary veneers are placed while your permanent ones are crafted.", icon: <Palette className="w-6 h-6" /> },
    { number: "03", title: "Custom Fabrication", description: "Our partnered lab handcrafts your veneers from premium porcelain, matching shade and shape precisely.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "04", title: "Bonding & Reveal", description: "Your veneers are permanently bonded and polished. You leave with a transformed, magazine-worthy smile.", icon: <Star className="w-6 h-6" /> },
  ],
  faqHeading: "Veneer FAQ",
  faqs: [
    { question: "How much do veneers cost in Katy, TX?", answer: "Porcelain veneers typically range from $1,200-$2,500 per tooth. Emax and minimal-prep veneers may vary. We offer CareCredit and Sunbit financing to make your dream smile accessible." },
    { question: "How long do veneers last?", answer: "With proper care, porcelain veneers last 15-20 years. They resist staining and maintain their appearance beautifully over time." },
    { question: "Do veneers look natural?", answer: "Absolutely. Modern porcelain veneers are translucent and layered just like natural teeth. We match them precisely to your desired shade." },
    { question: "Can veneers fix crooked teeth?", answer: "Yes. Veneers can address mild to moderate misalignment, giving you a straight-looking smile without braces. Severe misalignment may require orthodontics first." },
    { question: "Do veneers require special care?", answer: "No special care beyond good oral hygiene — brushing, flossing, and regular dental visits. Avoid biting hard objects and consider a nightguard if you grind your teeth." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Veneer Reviews",
  testimonials: [
    { quote: "I got 10 veneers and the transformation is unbelievable. They look completely natural — even my friends think they're my real teeth. Dr. Vuong is an artist!", name: "Nicole V.", source: "Google Review" },
    { quote: "Minimal-prep veneers were the perfect solution for my stained teeth. Barely any tooth removal and the results are gorgeous. Love my new smile!", name: "Andrew J.", source: "Google Review" },
    { quote: "From the consultation to the final reveal, every step was professional and exciting. My smile has never looked this good. Worth every penny.", name: "Samantha T.", source: "Google Review" },
  ],
  ctaHeading: "Get the Smile You've Always Wanted",
  ctaBody: "Book a veneer consultation at our Katy office and see what's possible for your smile.",
};

const VeneersKaty = () => <ServicePageTemplate data={data} />;
export default VeneersKaty;
