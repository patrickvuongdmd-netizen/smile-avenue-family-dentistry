import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Users, Shield, Heart, Baby } from "lucide-react";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Family Dentistry",
  serviceSlug: "family-dentistry",
  metaTitle: "Family Dentistry Cypress, TX | All Ages | Smile Avenue",
  metaDescription: "Family dentistry in Cypress, TX. Dental care for all ages — children, teens, adults & seniors. Convenient, comprehensive care under one roof. Call (832) 648-1756.",
  heroKicker: "DENTAL CARE FOR ALL AGES IN CYPRESS",
  heroHeading: "Family Dentistry in Cypress, TX",
  heroBody: "At Smile Avenue Cypress, we treat your entire family — from your toddler's first dental visit to grandma's implant consultation. Our warm, welcoming environment and experienced team make dental care easy, comfortable, and even fun for every age.",
  heroCta1: "Book Family Appointment",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Family Dentistry",
  introKicker: "ONE OFFICE, ALL AGES",
  introHeading: "Why Choose a Family Dentist?",
  introParas: [
    "A family dental practice like Smile Avenue offers the convenience of caring for your entire household under one roof. No more scheduling at different offices — parents, teens, and little ones can all be seen on the same day.",
    "Our team is trained to work with patients of every age, from first teeth to full dentures. We adjust our approach, communication style, and treatment planning to meet each patient where they are.",
    "We believe in building lifelong relationships with our families. By seeing the same team visit after visit, we develop a deep understanding of each family member's dental history and unique needs.",
  ],
  trustBadges: [
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
    { icon: <Shield className="w-5 h-5" />, label: "Same-Day Scheduling" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Approach" },
  ],
  subServicesKicker: "CARE FOR EVERY STAGE",
  subServicesHeading: "Family Dentistry Services",
  subServicesBody: "Comprehensive dental care tailored to every family member.",
  subServices: [
    { title: "Pediatric Dental Care", description: "Gentle, fun dental visits for children including exams, cleanings, fluoride, sealants, and cavity prevention education.", icon: <Baby className="w-5 h-5" /> },
    { title: "Teen Dentistry", description: "Orthodontic evaluations, Invisalign, sports mouthguards, and guidance through the unique dental needs of adolescence.", icon: <Users className="w-5 h-5" /> },
    { title: "Adult Preventive Care", description: "Regular cleanings, comprehensive exams, oral cancer screenings, and early detection of dental issues.", icon: <Shield className="w-5 h-5" /> },
    { title: "Senior Dental Care", description: "Restorative options, denture care, implant solutions, and management of age-related oral health changes.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR FAMILY VISIT",
  processHeading: "What to Expect",
  processBody: "We make family dental visits efficient and enjoyable.",
  processSteps: [
    { number: "01", title: "Easy Scheduling", description: "Book multiple family members on the same day for maximum convenience.", icon: <Users className="w-5 h-5" /> },
    { number: "02", title: "Warm Welcome", description: "Our kid-friendly office and gentle team put patients of all ages at ease.", icon: <Heart className="w-5 h-5" /> },
    { number: "03", title: "Thorough Care", description: "Age-appropriate exams, cleanings, and treatments tailored to each family member.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Family Plan", description: "We create a coordinated care plan for your entire family's oral health.", icon: <Baby className="w-5 h-5" /> },
  ],
  faqHeading: "Family Dentistry FAQs",
  faqs: [
    { question: "At what age should my child first see the dentist?", answer: "The ADA recommends a child's first dental visit by age 1 or within 6 months of their first tooth erupting. Early visits establish good habits and catch issues early." },
    { question: "Can the whole family be seen on the same day?", answer: "Yes! We love scheduling family blocks so everyone can be seen during a single visit, saving you time and extra trips." },
    { question: "Do you accept dental insurance for families?", answer: "Yes, we accept most major PPO plans and will verify benefits for every family member. We also offer our Smile Avenue Membership Plan for families without insurance." },
    { question: "What makes Smile Avenue kid-friendly?", answer: "Our office features Netflix in every room, cozy blankets, gentle and patient staff, and a warm atmosphere that makes kids feel comfortable and even excited about their dental visits." },
  ],
  reviewsKicker: "FAMILY REVIEWS",
  reviewsHeading: "What Families Are Saying",
  testimonials: [
    { quote: "Our whole family goes to Smile Avenue — ages 4 to 74! They treat everyone with the same warmth and expertise. Love this place.", name: "The Martinez Family", source: "Google Review" },
    { quote: "My kids actually look forward to going to the dentist. The team is so gentle and fun. It's been a game-changer for us.", name: "Amanda K.", source: "Google Review" },
    { quote: "Scheduling the whole family on one morning is so convenient. The staff is always organized, friendly, and thorough.", name: "Brian T.", source: "Google Review" },
  ],
  ctaHeading: "Your Family's Dental Home",
  ctaBody: "Book appointments for the whole family at Smile Avenue Cypress.",
};

export default () => <ServicePageTemplate data={data} />;
