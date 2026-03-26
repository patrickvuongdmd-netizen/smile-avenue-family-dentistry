import { Shield, Users, Star, Heart, Smile, Droplets, Sparkles } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Pediatric Dentistry",
  serviceSlug: "pediatric-dentistry",
  metaTitle: "Pediatric Dentistry Katy, TX | Kids Dentist | Smile Avenue",
  metaDescription: "Gentle pediatric dentistry in Katy, TX. First visits, sealants, fluoride & cleanings for kids. Fun, friendly environment. Call (281) 800-5008.",
  heroKicker: "KIDS DENTISTRY IN KATY",
  heroHeading: "Pediatric Dentistry in Katy, TX",
  heroBody: "We make dental visits fun and stress-free for kids of all ages. Our gentle team creates positive experiences that build healthy habits for a lifetime of great smiles.",
  heroCta1: "Book Your Child's Visit", heroCta2: "Call (281) 800-5008", heroImage: "Pediatric Dentistry Photo",
  introKicker: "ABOUT PEDIATRIC DENTISTRY", introHeading: "Dental Care for Growing Smiles",
  introParas: [
    "Children have unique dental needs that evolve as they grow. Pediatric dentistry focuses on the oral health of infants, children, and adolescents, including preventive care, early intervention, and education.",
    "At Smile Avenue Katy, we create a warm, welcoming environment where children feel safe and comfortable. Our team is experienced at working with kids of all temperaments, including anxious little ones.",
    "We recommend first dental visits by age one and regular checkups every six months. Early care sets the foundation for a lifetime of healthy teeth. Families across Cinco Ranch, Cross Creek Ranch, and Firethorne choose us for their children's dental needs."
  ],
  trustBadges: [
    { icon: <Heart className="w-5 h-5" />, label: "Kid-Friendly Team" },
    { icon: <Shield className="w-5 h-5" />, label: "Gentle Approach" },
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
  ],
  subServicesKicker: "KIDS DENTAL SERVICES", subServicesHeading: "Pediatric Treatments We Offer",
  subServicesBody: "Comprehensive dental care designed specifically for children.",
  subServices: [
    { title: "First Dental Visit", description: "A gentle introduction to the dental office. We count teeth, check development, and help your child feel comfortable and confident.", icon: <Smile className="w-5 h-5" /> },
    { title: "Dental Sealants", description: "Thin protective coatings applied to the chewing surfaces of back teeth to prevent cavities in the deep grooves where bacteria hide.", icon: <Shield className="w-5 h-5" /> },
    { title: "Fluoride Treatments", description: "Professional fluoride application strengthens developing enamel and provides extra cavity protection for growing teeth.", icon: <Droplets className="w-5 h-5" /> },
    { title: "Gentle Cleanings", description: "Thorough yet gentle cleanings tailored to young patients. We make the experience fun and educational so kids look forward to visits.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CHILD'S VISIT", processHeading: "What to Expect",
  processBody: "We go the extra mile to make every child's visit a positive experience.",
  processSteps: [
    { number: "01", title: "Warm Welcome", description: "We greet your child by name, show them around, and let them get comfortable before anything starts.", icon: <Heart className="w-6 h-6" /> },
    { number: "02", title: "Gentle Exam", description: "The dentist checks teeth, gums, bite development, and looks for any concerns — all in a calm, child-friendly manner.", icon: <Star className="w-6 h-6" /> },
    { number: "03", title: "Fun Cleaning", description: "Our hygienist gently cleans your child's teeth while keeping them engaged and entertained throughout.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "04", title: "Parent Review", description: "We discuss findings with you, share tips for home care, and plan any follow-up treatment if needed.", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "Pediatric Dentistry FAQ",
  faqs: [
    { question: "How much does a pediatric dental visit cost in Katy, TX?", answer: "Routine pediatric exams and cleanings typically range from $100-$250. Most insurance plans cover two visits per year. Sealants and fluoride treatments are often covered for children as well." },
    { question: "When should my child first visit the dentist?", answer: "The American Academy of Pediatric Dentistry recommends a first visit by age one or within six months of the first tooth erupting." },
    { question: "How do you handle anxious children?", answer: "Our team is experienced at putting nervous kids at ease. We use tell-show-do techniques, offer nitrous oxide for extra relaxation, and create a fun, pressure-free environment." },
    { question: "Are dental sealants safe?", answer: "Yes. Dental sealants are safe, effective, and recommended by the ADA. They're one of the most effective ways to prevent cavities on children's back teeth." },
    { question: "How can I prepare my child for their first dental visit?", answer: "Keep it positive! Read children's books about dentist visits, avoid using scary language, and let them know the dentist is a friendly helper who keeps their teeth healthy." },
  ],
  reviewsKicker: "WHAT KATY PARENTS ARE SAYING", reviewsHeading: "Pediatric Reviews",
  testimonials: [
    { quote: "My 3-year-old was nervous for his first visit but the team was incredible. They were patient, gentle, and he actually asked when he can go back!", name: "Ashley B.", source: "Google Review" },
    { quote: "We've tried three different dentists for our kids before finding Smile Avenue Katy. Night and day difference. They genuinely love children here.", name: "Jason & Lisa P.", source: "Google Review" },
    { quote: "Both my kids got sealants at the Katy office. Quick, painless, and now I have extra peace of mind about cavities. Great preventive care!", name: "Maria G.", source: "Google Review" },
  ],
  ctaHeading: "Book Your Child's Dental Visit",
  ctaBody: "Give your child the gift of a healthy smile. Schedule their visit at our Katy office today.",
};

const PediatricDentistryKaty = () => <ServicePageTemplate data={data} />;
export default PediatricDentistryKaty;
