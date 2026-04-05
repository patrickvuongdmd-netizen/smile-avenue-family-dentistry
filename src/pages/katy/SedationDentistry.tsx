import { Shield, Zap, Heart, Moon, Smile, Star, Users } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Sedation Dentistry",
  serviceSlug: "sedation-dentistry",
  videoId: "lVFe5d6pAlY",
  metaTitle: "Sedation Dentistry Katy, TX | Anxiety-Free Dental Care | Smile Avenue",
  metaDescription: "Sedation dentistry in Katy, TX — nitrous oxide, oral & IV sedation for anxiety-free care. Gentle team, 4.9★ rated. Book a consultation. Call (281) 800-5008.",
  heroKicker: "ANXIETY-FREE DENTISTRY IN KATY",
  heroHeading: "Sedation Dentistry in Katy, TX",
  heroBody: "Dental anxiety should never prevent you from getting care. Smile Avenue Katy offers nitrous oxide, oral sedation, and IV sedation plus comfort amenities like blankets, Netflix, and noise-canceling headphones.",
  heroCta1: "Book Sedation Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Sedation Dentistry Photo",
  heroValueProps: ["Nitrous oxide, oral & IV sedation options", "Warm blankets, Netflix & noise-canceling headphones", "Ideal for dental anxiety & gag reflex", "Experienced, gentle team", "Most insurance accepted · 0% financing"],
  introKicker: "ABOUT SEDATION DENTISTRY", introHeading: "What Is Sedation Dentistry?",
  introParas: [
    "Sedation dentistry uses medication to help patients relax during dental procedures. From mild relaxation with nitrous oxide to deep sedation with IV medication, we have options for every level of anxiety.",
    "Sedation is ideal for dental anxiety, gag reflex issues, extensive procedures, and special needs patients. Plus our comfort amenities — blankets, Netflix, and noise-canceling headphones — make every visit more relaxing.",
    "Families across Cinco Ranch, Firethorne, Cross Creek Ranch, and the greater Katy area trust Smile Avenue for compassionate, anxiety-free care. All procedures are available under sedation."
  ],
  trustBadges: [
    { icon: <Heart className="w-5 h-5" />, label: "Multiple Sedation Levels" },
    { icon: <Smile className="w-5 h-5" />, label: "Comfort Amenities" },
    { icon: <Shield className="w-5 h-5" />, label: "Experienced Sedation Team" },
    { icon: <Users className="w-5 h-5" />, label: "All Procedures Under Sedation" },
  ],
  subServicesKicker: "SEDATION OPTIONS", subServicesHeading: "Sedation Methods We Offer",
  subServicesBody: "We offer multiple levels of sedation to match your comfort needs.",
  subServices: [
    { title: "Nitrous Oxide", description: "\"Laughing gas\" provides mild relaxation through a small mask. You feel calm and recover within minutes.", icon: <Smile className="w-5 h-5" /> },
    { title: "Oral Sedation", description: "A prescription pill taken before your appointment provides moderate relaxation. You'll feel drowsy but remain conscious.", icon: <Moon className="w-5 h-5" /> },
    { title: "IV Sedation", description: "Medication delivered through an IV provides deep relaxation. Most patients have little to no memory of the procedure.", icon: <Zap className="w-5 h-5" /> },
    { title: "Comfort Amenities", description: "Blankets, Netflix on ceiling screens, and noise-canceling headphones for an extra layer of relaxation during any procedure.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR SEDATION EXPERIENCE", processHeading: "What to Expect",
  processBody: "We make your sedation experience safe, comfortable, and stress-free.",
  processSteps: [
    { number: "01", title: "Anxiety Consultation", description: "We discuss your anxiety level, medical history, and recommend the appropriate sedation option.", icon: <Star className="w-6 h-6" /> },
    { number: "02", title: "Custom Sedation Plan", description: "A personalized sedation plan is created based on your needs, procedure type, and comfort level.", icon: <Shield className="w-6 h-6" /> },
    { number: "03", title: "Pre-Appointment Instructions", description: "You receive clear instructions about eating, drinking, and medication before your appointment.", icon: <Moon className="w-6 h-6" /> },
    { number: "04", title: "Sedation Administered", description: "You relax comfortably while we complete your dental treatment. Our team monitors you continuously.", icon: <Heart className="w-6 h-6" /> },
    { number: "05", title: "Recovery & Post-Care", description: "We monitor you until you're ready to leave. For oral and IV sedation, arrange a ride home.", icon: <Smile className="w-6 h-6" /> },
  ],
  faqHeading: "Sedation Dentistry FAQ",
  faqs: [
    { question: "How much does sedation dentistry cost?", answer: "Costs vary by sedation type — we discuss during your consultation. Insurance may cover sedation for certain procedures. CareCredit is available." },
    { question: "Is dental sedation safe?", answer: "Yes. All sedation is administered by trained, certified professionals who continuously monitor your vital signs throughout the procedure." },
    { question: "Will I be unconscious during sedation?", answer: "It depends on the level. Nitrous oxide provides mild relaxation while conscious. IV sedation creates deep relaxation but is not general anesthesia." },
    { question: "Can I drive home after sedation?", answer: "Not after oral or IV sedation — arrange a ride home. After nitrous oxide only, you can drive yourself." },
    { question: "Which sedation is right for me?", answer: "We recommend based on your anxiety level, procedure type, and medical history. We'll discuss all options at your consultation." },
    { question: "Is sedation dentistry safe for children?", answer: "Yes, when administered by trained professionals. We offer nitrous oxide (laughing gas) for children, which is very safe and wears off quickly. For more extensive procedures, we discuss age-appropriate sedation options with parents." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Sedation Reviews",
  testimonials: [
    { quote: "I haven't been to the dentist in 8 years because of anxiety. The IV sedation changed everything. I got all my work done in one visit and don't remember a thing.", name: "Michelle B.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "My son is terrified of the dentist but nitrous oxide made his appointment easy and tear-free. He even said it was fun!", name: "Daniel P.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "Oral sedation for my dental implant procedure was perfect. I was relaxed the entire time. Highly recommend for anxious patients.", name: "Karen W.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Experience Anxiety-Free Dentistry",
  ctaBody: "Don't let fear keep you from the care you need. Book a sedation dentistry appointment at our Katy office.",
};

const SedationDentistryKaty = () => <ServicePageTemplate data={data} />;
export default SedationDentistryKaty;
