import { Shield, Star, Eye, Sparkles, Palette, Scan } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Veneers",
  serviceSlug: "veneers",
  videoId: "qMAw3tPCLxk",
  metaTitle: "Veneers Katy, TX | Porcelain Veneers & Smile Design | Smile Avenue",
  metaDescription: "Porcelain veneers in Katy, TX — Emax & zirconia options crafted in our in-house lab. Free smile consultation. 0% financing available. Call (281) 800-5008.",
  heroKicker: "PORCELAIN VENEERS IN KATY",
  heroHeading: "Porcelain Veneers in Katy, TX",
  heroBody: "Transform your smile with custom veneers from our in-house Smile Dental Lab. Each veneer crafted for perfect color match and natural beauty.",
  heroCta1: "Book Veneer Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Veneers Photo",
  heroValueProps: ["In-house Smile Dental Lab craftsmanship", "Emax & zirconia options", "Digital smile design preview", "Minimal-prep veneers available", "0% financing through CareCredit"],
  introKicker: "ABOUT VENEERS", introHeading: "What Are Porcelain Veneers?",
  introParas: [
    "Veneers are thin porcelain shells bonded to the front of your teeth. They fix chips, stains, gaps, and uneven teeth — delivering a dramatic yet natural-looking transformation.",
    "At Smile Avenue Katy, we offer both Emax and zirconia options, as well as minimal-prep and traditional prep veneers. Each veneer is designed and fabricated in our in-house lab for a perfect color match and fit.",
    "Patients from Cinco Ranch, Cross Creek Ranch, Firethorne, and the greater Katy area trust us for expert veneer artistry with digital smile design previews."
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "In-House Lab Craftsmanship" },
    { icon: <Eye className="w-5 h-5" />, label: "Digital Smile Design" },
    { icon: <Star className="w-5 h-5" />, label: "Emax & Zirconia Options" },
    { icon: <Shield className="w-5 h-5" />, label: "Minimal-Prep Available" },
  ],
  subServicesKicker: "VENEER OPTIONS", subServicesHeading: "Veneer Treatments We Offer",
  subServicesBody: "We offer multiple veneer options to match your goals and budget.",
  subServices: [
    { title: "Porcelain Veneers", description: "Traditional porcelain veneers crafted in our in-house lab for the most natural, long-lasting results.", icon: <Star className="w-5 h-5" /> },
    { title: "Emax Veneers", description: "Lithium disilicate veneers that combine exceptional strength with lifelike translucency for a beautiful, durable result.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Minimal-Prep Veneers", description: "Ultra-thin veneers that require little to no tooth reduction, preserving more of your natural tooth structure.", icon: <Shield className="w-5 h-5" /> },
    { title: "Smile Design Consultation", description: "A comprehensive evaluation with digital preview of your new smile before any work begins.", icon: <Eye className="w-5 h-5" /> },
  ],
  processKicker: "YOUR VENEER JOURNEY", processHeading: "What to Expect",
  processBody: "Our veneer process is meticulous, ensuring stunning, natural-looking results.",
  processSteps: [
    { number: "01", title: "Consultation & Design", description: "We discuss your goals, take photos and digital impressions, and create a preview of your new smile.", icon: <Eye className="w-6 h-6" /> },
    { number: "02", title: "Minimal Preparation", description: "A thin layer of enamel is gently removed to make room for your veneers.", icon: <Palette className="w-6 h-6" /> },
    { number: "03", title: "Digital Impressions", description: "Precise digital scans are sent to our in-house lab for veneer fabrication.", icon: <Scan className="w-6 h-6" /> },
    { number: "04", title: "Fabrication", description: "Our in-house Smile Dental Lab handcrafts your veneers from premium porcelain, matching shade and shape precisely.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "05", title: "Bonding & Adjustments", description: "Your veneers are permanently bonded and polished. You leave with a transformed smile.", icon: <Star className="w-6 h-6" /> },
  ],
  faqHeading: "Veneer FAQ",
  faqs: [
    { question: "How much do veneers cost per tooth in Katy?", answer: "Porcelain veneers typically range from $1,200-$2,500 per tooth depending on material. We offer CareCredit financing and free consultations." },
    { question: "How long do veneers last?", answer: "With proper care, porcelain veneers last 15-20 years. They resist staining and maintain their appearance beautifully over time." },
    { question: "Do veneers look natural?", answer: "Yes. Our in-house lab ensures each veneer has perfect translucency, shade, and shape to match your natural teeth seamlessly." },
    { question: "Can veneers stain?", answer: "Porcelain resists staining better than natural teeth. Your veneers will maintain their color with normal oral hygiene." },
    { question: "How many veneers do I need?", answer: "It depends on your goals — typically 4-8 veneers for a complete smile zone transformation. We'll discuss during your consultation." },
    { question: "Can veneers fix crooked teeth?", answer: "Veneers can correct the appearance of mildly crooked, gapped, or uneven teeth. For moderate to severe misalignment, Invisalign or orthodontics may be recommended first. Many patients combine Invisalign with veneers for a complete smile transformation." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Veneer Reviews",
  testimonials: [
    { quote: "I got 10 veneers and the transformation is unbelievable. They look completely natural — even my friends think they're my real teeth!", name: "Nicole V.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "Minimal-prep veneers were the perfect solution for my stained teeth. Barely any tooth removal and the results are gorgeous.", name: "Andrew J.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "From the consultation to the final reveal, every step was professional and exciting. My smile has never looked this good.", name: "Samantha T.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  locationFaqs: [
    { question: "Where is Smile Avenue's Katy veneer office?", answer: "We're at 23541 Westheimer Pkwy Ste #170, Katy, TX 77494 — in the heart of Cinco Ranch, convenient for patients from Fulshear, Cross Creek Ranch, Firethorne, Brookshire, and Richmond." },
    { question: "Which Katy dentist does veneers?", answer: "Dr. Patrick Vuong and Dr. Sameer Bilal perform veneer procedures at our Katy office. All veneers are custom-fabricated in our in-house Smile Dental Lab for precise shade matching and fit." },
    { question: "How much do veneers cost in Katy, TX?", answer: "Porcelain veneers typically range from $1,200–$2,500 per tooth depending on material. We provide a detailed estimate at your free consultation. 0% financing through CareCredit and Sunbit available." },
    { question: "Do you offer Saturday veneer consultations in Katy?", answer: "Yes — our Katy office is open Saturdays 8am–2pm, making it easy to schedule your free veneer consultation without taking time off work." },
    { question: "What veneer materials do you use in Katy?", answer: "We offer Emax and zirconia porcelain veneers, both fabricated in our in-house lab. Emax provides superior translucency for front teeth, while zirconia offers maximum durability. Your dentist will recommend the best option for your smile goals." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Westheimer Parkway is the Katy practice patients trust for expert porcelain veneer artistry. Our in-house Smile Dental Lab handcrafts each veneer on-site — delivering precise color matching, natural translucency, and a perfect fit that practices relying on external labs cannot achieve.",
    "We offer Emax lithium disilicate veneers for superior front-tooth aesthetics and zirconia veneers for maximum durability. Our digital smile design technology lets you preview your new smile before any work begins — so you know exactly what to expect and can collaborate on the final result.",
    "Minimal-prep veneers are available for qualifying patients, requiring little to no removal of natural tooth structure. Dr. Vuong and Dr. Bilal combine artistic vision with technical expertise, and patients from Cinco Ranch, Cross Creek Ranch, Firethorne, and Fulshear trust us for life-changing smile transformations.",
    "Most veneer cases at our Katy office are completed in two visits, with Saturday availability (8am-2pm) for consultations. We offer free smile consultations with digital previews and transparent pricing with 0% financing through CareCredit and Sunbit.",
  ],
  ctaHeading: "Get the Smile You've Always Wanted",
  ctaBody: "Book a veneer consultation at our Katy office and see what's possible for your smile.",
};

const VeneersKaty = () => <ServicePageTemplate data={data} />;
export default VeneersKaty;
