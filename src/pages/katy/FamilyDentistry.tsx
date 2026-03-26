import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { Users, Shield, Heart, Baby } from "lucide-react";

const data: ServicePageData = {
  location: "katy", serviceName: "Family Dentistry", serviceSlug: "family-dentistry",
  metaTitle: "Family Dentistry Katy, TX | All Ages | Smile Avenue",
  metaDescription: "Family dentistry in Katy, TX. Dental care for all ages — children, teens, adults & seniors under one roof. Call (281) 800-5008.",
  heroKicker: "DENTAL CARE FOR ALL AGES IN KATY", heroHeading: "Family Dentistry in Katy, TX",
  heroBody: "At Smile Avenue Katy, we treat your entire family — from toddlers to grandparents. Our warm environment makes dental care comfortable and even fun for every age.",
  heroCta1: "Book Family Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Family Dentistry",
  introKicker: "ONE OFFICE, ALL AGES", introHeading: "Why Choose a Family Dentist?",
  introParas: [
    "A family practice offers the convenience of caring for your entire household under one roof.",
    "Our team adjusts their approach for every age, from first teeth to full dentures.",
    "We build lifelong relationships, understanding each family member's unique dental history.",
  ],
  trustBadges: [
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
    { icon: <Shield className="w-5 h-5" />, label: "Same-Day Scheduling" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Approach" },
  ],
  subServicesKicker: "CARE FOR EVERY STAGE", subServicesHeading: "Family Dentistry Services", subServicesBody: "Comprehensive care tailored to every family member.",
  subServices: [
    { title: "Pediatric Dental Care", description: "Gentle visits for children with exams, cleanings, fluoride, and sealants.", icon: <Baby className="w-5 h-5" /> },
    { title: "Teen Dentistry", description: "Orthodontic evaluations, Invisalign, sports guards, and teen-specific care.", icon: <Users className="w-5 h-5" /> },
    { title: "Adult Preventive Care", description: "Regular cleanings, exams, oral cancer screenings, and early detection.", icon: <Shield className="w-5 h-5" /> },
    { title: "Senior Dental Care", description: "Restorative options, denture care, and management of age-related changes.", icon: <Heart className="w-5 h-5" /> },
  ],
  processKicker: "YOUR FAMILY VISIT", processHeading: "What to Expect", processBody: "Efficient, enjoyable family dental visits.",
  processSteps: [
    { number: "01", title: "Easy Scheduling", description: "Book multiple family members same day.", icon: <Users className="w-5 h-5" /> },
    { number: "02", title: "Warm Welcome", description: "Kid-friendly office and gentle team.", icon: <Heart className="w-5 h-5" /> },
    { number: "03", title: "Thorough Care", description: "Age-appropriate exams and treatments.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Family Plan", description: "Coordinated care plan for the whole family.", icon: <Baby className="w-5 h-5" /> },
  ],
  faqHeading: "Family Dentistry FAQs",
  faqs: [
    { question: "When should my child first see the dentist?", answer: "By age 1 or within 6 months of their first tooth." },
    { question: "Can the whole family be seen same day?", answer: "Yes! We love scheduling family blocks." },
    { question: "Do you accept family insurance?", answer: "Yes — most major PPO plans plus our Membership Plan." },
    { question: "What makes you kid-friendly?", answer: "Netflix, blankets, gentle staff, and a warm atmosphere kids love." },
  ],
  reviewsKicker: "FAMILY REVIEWS", reviewsHeading: "What Families Say",
  testimonials: [
    { quote: "Our whole family goes here — ages 4 to 74! They treat everyone with warmth and expertise.", name: "The Martinez Family", source: "Google Review" },
    { quote: "My kids look forward to the dentist now. Game-changer!", name: "Amanda K.", source: "Google Review" },
    { quote: "One-morning scheduling for the whole family. Always organized and friendly.", name: "Brian T.", source: "Google Review" },
  ],
  ctaHeading: "Your Family's Dental Home", ctaBody: "Book appointments for the whole family at Smile Avenue Katy.",
};

export default () => <ServicePageTemplate data={data} />;
