import { Shield, Users, Star, Heart, Smile, Droplets, Sparkles } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Pediatric Dentistry",
  serviceSlug: "pediatric-dentistry",
  videoId: "5NHuCuktCPI",
  metaTitle: "Pediatric Dentist Katy, TX | Kids & Family Dentistry | Smile Avenue",
  metaDescription: "Kids dentist in Katy, TX — gentle first visits, cleanings, sealants & cavity prevention. Netflix in every room. Open Saturdays. Call (281) 800-5008.",
  heroKicker: "KIDS DENTISTRY IN KATY",
  heroHeading: "Pediatric Dentistry in Katy, TX",
  heroBody: "At Smile Avenue Katy, we make kids dental visits fun and educational, building positive habits from the first appointment. Families across Cinco Ranch and Firethorne trust us with their children.",
  heroCta1: "Book Your Child's Visit", heroCta2: "Call (281) 800-5008", heroImage: "Pediatric Dentistry Photo",
  heroValueProps: ["Fun, kid-friendly environment", "Netflix in every room & warm blankets", "Gentle sedation options for anxious kids", "Sealants, fluoride & early orthodontic screening", "Most insurance covers children's preventive care"],
  introKicker: "ABOUT PEDIATRIC DENTISTRY", introHeading: "Dental Care for Growing Smiles",
  introParas: [
    "Children have unique dental needs that evolve as they grow. The AAPD recommends a first dental visit by age 1. Baby teeth are critical for speech, nutrition, and guiding permanent teeth into proper position.",
    "At Smile Avenue Katy, we create a warm, welcoming environment where children feel safe and comfortable. Our team is experienced at working with kids of all temperaments, including anxious little ones. Sedation is available when needed.",
    "Families across Cinco Ranch, Cross Creek Ranch, Firethorne, Elyson, and Cane Island choose us for their children's dental needs. We offer first visits, cleanings, fluoride, sealants, cavity treatment, orthodontic monitoring, mouthguards, and emergency care."
  ],
  trustBadges: [
    { icon: <Heart className="w-5 h-5" />, label: "Kid-Friendly Environment" },
    { icon: <Users className="w-5 h-5" />, label: "Experienced Gentle Team" },
    { icon: <Smile className="w-5 h-5" />, label: "Patient Approach" },
    { icon: <Shield className="w-5 h-5" />, label: "Sedation Available" },
  ],
  subServicesKicker: "KIDS DENTAL SERVICES", subServicesHeading: "Pediatric Treatments We Offer",
  subServicesBody: "Comprehensive dental care designed specifically for children.",
  subServices: [
    { title: "First Dental Visit", description: "A gentle introduction to the dental office. We count teeth, check development, and help your child feel comfortable and confident.", icon: <Smile className="w-5 h-5" /> },
    { title: "Dental Sealants", description: "Thin protective coatings applied to the chewing surfaces of back teeth to prevent cavities — reduces cavity risk by 80%.", icon: <Shield className="w-5 h-5" /> },
    { title: "Fluoride Treatments", description: "Professional fluoride application strengthens developing enamel and provides extra cavity protection for growing teeth.", icon: <Droplets className="w-5 h-5" /> },
    { title: "Gentle Cleanings", description: "Thorough yet gentle cleanings tailored to young patients. We make the experience fun and educational so kids look forward to visits.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CHILD'S VISIT", processHeading: "What to Expect",
  processBody: "We go the extra mile to make every child's visit a positive experience.",
  processSteps: [
    { number: "01", title: "Welcome & Warm-Up", description: "We greet your child by name, show them around, and let them get comfortable before anything starts.", icon: <Heart className="w-6 h-6" /> },
    { number: "02", title: "Gentle Exam", description: "The dentist checks teeth, gums, bite development, and looks for any concerns — all in a calm, child-friendly manner.", icon: <Star className="w-6 h-6" /> },
    { number: "03", title: "Age-Appropriate Cleaning", description: "Our hygienist gently cleans your child's teeth while keeping them engaged and entertained throughout.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "04", title: "Fluoride & Sealants", description: "Protective fluoride and sealants are applied as needed to guard against cavities.", icon: <Shield className="w-6 h-6" /> },
    { number: "05", title: "Parent Consultation", description: "We discuss findings with you, share tips for home care, and plan any follow-up treatment if needed.", icon: <Users className="w-6 h-6" /> },
  ],
  faqHeading: "Pediatric Dentistry FAQ",
  faqs: [
    { question: "When should my child first visit the dentist?", answer: "By age 1 or within six months of the first tooth erupting, as recommended by the AAPD." },
    { question: "How do I prepare my child for their first dental visit?", answer: "Keep it positive! Read children's books about dentist visits, avoid using scary language, and let them know the dentist is a friendly helper who keeps their teeth healthy." },
    { question: "Are dental sealants worth it?", answer: "Absolutely — sealants reduce cavity risk by 80%. They're one of the most effective preventive treatments available for children's back teeth." },
    { question: "How do you handle anxious children?", answer: "We go at their pace and never rush a child. Our team uses tell-show-do techniques, and sedation is available if needed for extra relaxation." },
    { question: "How much does kids dentistry cost in Katy?", answer: "Most insurance covers pediatric preventive care at 100%. Our Membership Plan also covers children for families without insurance." },
  ],
  reviewsKicker: "WHAT KATY PARENTS ARE SAYING", reviewsHeading: "Pediatric Reviews",
  testimonials: [
    { quote: "My 3-year-old was nervous for his first visit but the team was incredible. They were patient, gentle, and he actually asked when he can go back!", name: "Ashley B.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "We've tried three different dentists for our kids before finding Smile Avenue Katy. Night and day difference. They genuinely love children here.", name: "Jason & Lisa P.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "Both my kids got sealants at the Katy office. Quick, painless, and now I have extra peace of mind about cavities. Great preventive care!", name: "Maria G.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Book Your Child's Dental Visit",
  ctaBody: "Give your child the gift of a healthy smile. Schedule their visit at our Katy office today.",
};

const PediatricDentistryKaty = () => <ServicePageTemplate data={data} />;
export default PediatricDentistryKaty;
