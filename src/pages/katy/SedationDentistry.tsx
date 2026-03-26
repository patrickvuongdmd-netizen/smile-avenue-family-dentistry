import { Shield, Zap, Users, Heart, Moon, Smile, Star } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Sedation Dentistry",
  serviceSlug: "sedation-dentistry",
  metaTitle: "Sedation Dentistry Katy, TX | Anxiety-Free Dental Care | Smile Avenue",
  metaDescription: "Anxiety-free dentistry in Katy, TX. Nitrous oxide, oral sedation & IV sedation options. Gentle care for nervous patients. Call (281) 800-5008.",
  heroKicker: "ANXIETY-FREE DENTISTRY IN KATY",
  heroHeading: "Sedation Dentistry in Katy, TX",
  heroBody: "Dental anxiety shouldn't keep you from the care you need. Our sedation options let you relax completely while we take care of your smile — from routine cleanings to complex procedures.",
  heroCta1: "Book Sedation Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Sedation Dentistry Photo",
  introKicker: "ABOUT SEDATION DENTISTRY", introHeading: "What Is Sedation Dentistry?",
  introParas: [
    "Sedation dentistry uses medication to help patients relax during dental procedures. From mild relaxation with nitrous oxide to deep sedation with IV medication, we have options for every level of anxiety and every type of procedure.",
    "Sedation is ideal for patients with dental phobia, sensitive gag reflexes, difficulty sitting still for long periods, or those who need extensive treatment completed efficiently in fewer visits.",
    "At Smile Avenue Katy, our team is trained and certified in multiple sedation modalities. We serve anxious patients from Cinco Ranch, Firethorne, Cross Creek Ranch, and the greater Katy area with compassionate, fear-free care."
  ],
  trustBadges: [
    { icon: <Heart className="w-5 h-5" />, label: "Anxiety-Free Care" },
    { icon: <Shield className="w-5 h-5" />, label: "Certified Team" },
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
  ],
  subServicesKicker: "SEDATION OPTIONS", subServicesHeading: "Sedation Methods We Offer",
  subServicesBody: "We offer multiple levels of sedation to match your comfort needs.",
  subServices: [
    { title: "Nitrous Oxide", description: "\"Laughing gas\" provides mild relaxation. You breathe it through a small mask, feel calm and comfortable, and recover within minutes after removal.", icon: <Smile className="w-5 h-5" /> },
    { title: "Oral Sedation", description: "A prescription pill taken before your appointment provides moderate relaxation. You'll feel drowsy but remain conscious throughout.", icon: <Moon className="w-5 h-5" /> },
    { title: "IV Sedation", description: "Medication delivered through an IV provides deep relaxation. Most patients have little to no memory of the procedure. Ideal for extensive treatments.", icon: <Zap className="w-5 h-5" /> },
    { title: "Sedation for Children", description: "Gentle nitrous oxide and age-appropriate sedation options for children who experience dental anxiety or need extensive treatment.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR SEDATION EXPERIENCE", processHeading: "What to Expect",
  processBody: "We make your sedation experience safe, comfortable, and stress-free.",
  processSteps: [
    { number: "01", title: "Consultation", description: "We review your medical history, discuss your anxiety level, and recommend the appropriate sedation option.", icon: <Star className="w-6 h-6" /> },
    { number: "02", title: "Pre-Procedure Prep", description: "Depending on your sedation type, you may receive instructions about eating, drinking, and medication before your appointment.", icon: <Shield className="w-6 h-6" /> },
    { number: "03", title: "Relaxed Treatment", description: "You relax comfortably while we complete your dental treatment. Our team monitors you continuously for safety.", icon: <Heart className="w-6 h-6" /> },
    { number: "04", title: "Safe Recovery", description: "After treatment, we monitor you until you're ready to leave. For oral and IV sedation, you'll need someone to drive you home.", icon: <Smile className="w-6 h-6" /> },
  ],
  faqHeading: "Sedation Dentistry FAQ",
  faqs: [
    { question: "How much does sedation dentistry cost in Katy, TX?", answer: "Nitrous oxide typically adds $50-$100 to your visit. Oral sedation ranges from $200-$400. IV sedation ranges from $500-$1,000. Sedation costs may be in addition to the procedure itself." },
    { question: "Is dental sedation safe?", answer: "Yes. All sedation is administered by trained, certified professionals who continuously monitor your vital signs. We review your medical history thoroughly before recommending any sedation." },
    { question: "Will I be unconscious during sedation?", answer: "With nitrous oxide and oral sedation, you remain conscious but deeply relaxed. IV sedation puts you in a twilight state where you're technically conscious but likely won't remember the procedure." },
    { question: "Can children receive dental sedation?", answer: "Yes. We offer nitrous oxide for children, which is extremely safe and wears off within minutes. For more extensive pediatric treatment, additional options may be discussed with parents." },
    { question: "How long does it take to recover from sedation?", answer: "Nitrous oxide wears off in minutes. Oral sedation may leave you drowsy for a few hours. IV sedation effects typically subside within 2-4 hours, and you should rest for the remainder of the day." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Sedation Reviews",
  testimonials: [
    { quote: "I haven't been to the dentist in 8 years because of anxiety. The IV sedation at Smile Avenue Katy changed everything. I got all my work done in one visit and don't remember a thing.", name: "Michelle B.", source: "Google Review" },
    { quote: "My son is terrified of the dentist but nitrous oxide made his appointment easy and tear-free. He even said it was fun! Game-changer for our family.", name: "Daniel P.", source: "Google Review" },
    { quote: "Oral sedation for my dental implant procedure was perfect. I was relaxed the entire time and the procedure flew by. Highly recommend for anxious patients.", name: "Karen W.", source: "Google Review" },
  ],
  ctaHeading: "Experience Anxiety-Free Dentistry",
  ctaBody: "Don't let fear keep you from the care you need. Book a sedation dentistry appointment at our Katy office.",
};

const SedationDentistryKaty = () => <ServicePageTemplate data={data} />;
export default SedationDentistryKaty;
