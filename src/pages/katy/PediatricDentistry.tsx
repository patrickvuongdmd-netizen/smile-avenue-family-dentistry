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
    { question: "What age should my child first visit the dentist?", answer: "The American Academy of Pediatric Dentistry recommends a first dental visit by age 1 or within 6 months of the first tooth erupting. Early visits help establish good habits and catch potential issues early." },
  ],
  reviewsKicker: "WHAT KATY PARENTS ARE SAYING", reviewsHeading: "Pediatric Reviews",
  testimonials: [
    { quote: "My 3-year-old was nervous for his first visit but the team was incredible. They were patient, gentle, and he actually asked when he can go back!", name: "Ashley B.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "We've tried three different dentists for our kids before finding Smile Avenue Katy. Night and day difference. They genuinely love children here.", name: "Jason & Lisa P.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "Both my kids got sealants at the Katy office. Quick, painless, and now I have extra peace of mind about cavities. Great preventive care!", name: "Maria G.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  locationFaqs: [
    { question: "Where is the best kids' dentist in Katy, TX?", answer: "Smile Avenue Family Dentistry at 21860 Westheimer Pkwy #110, Katy, TX 77450 is trusted by Katy ISD families for gentle, fun pediatric dental care with a team that genuinely connects with children." },
    { question: "At what age should my child first see a dentist in Katy?", answer: "The ADA recommends a first dental visit by age 1 or within 6 months of the first tooth erupting. Early visits establish positive habits and let us monitor development from the very start." },
    { question: "Does Smile Avenue Katy offer sedation for kids?", answer: "Yes. We offer nitrous oxide (laughing gas) for children who need extra help relaxing. It's safe, wears off quickly, and makes dental visits comfortable and stress-free for anxious kids." },
    { question: "How much does a kids' dental visit cost in Katy?", answer: "Most insurance plans cover children's preventive care at 100%. Our Smile Avenue Membership Plan also covers pediatric patients for families without insurance — including cleanings, exams, and X-rays." },
    { question: "Do you apply dental sealants for kids in Katy?", answer: "Yes. Sealants are a quick, painless protective coating for back teeth that reduces cavity risk by up to 80%. We recommend them as soon as permanent molars appear, typically around ages 6 and 12." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Westheimer Parkway is the kids' dentist Katy families trust most. Parents from Cinco Ranch, Cross Creek Ranch, Firethorne, Elyson, and Cane Island bring their children here because our team genuinely connects with kids — and it shows when children actually ask to come back for their next visit.",
    "Our Katy team creates a warm, welcoming environment where children feel safe. We use gentle tell-show-do techniques, never rushing a nervous child. For kids who need extra help relaxing, we offer nitrous oxide and other age-appropriate sedation options that are safe and effective.",
    "Every kids' visit includes more than a cleaning. We perform developmental assessments, monitor bite alignment, apply protective fluoride and sealants, and screen for early orthodontic needs. Our goal is building positive dental habits that last a lifetime — preventing costly problems before they start.",
    "Most dental insurance plans cover children's preventive care at 100%. Our Smile Avenue Membership Plan covers pediatric patients for families without insurance — including two cleanings, exams, X-rays, and discounts on all treatments. Saturday hours (8am-2pm) make scheduling easy for busy Katy ISD families.",
  ],
  ctaHeading: "Book Your Child's Dental Visit",
  ctaBody: "Give your child the gift of a healthy smile. Schedule their visit at our Katy office today.",
};

const PediatricDentistryKaty = () => <ServicePageTemplate data={data} />;
export default PediatricDentistryKaty;
