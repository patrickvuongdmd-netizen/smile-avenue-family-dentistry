import { Link } from "react-router-dom";
import { Shield, Star, Users, Heart, Baby, Calendar, Sparkles, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Family Dental Care",
  serviceSlug: "family-dental-care",
  videoId: "5NHuCuktCPI",
  metaTitle: "Family Dentist Cypress, TX | Family Dental Care | Smile Avenue",
  metaDescription: "Family dentist in Cypress, TX — gentle care for all ages, from toddlers to grandparents. Netflix in every room. Open Saturdays. Call (832) 648-1756.",
  heroKicker: "FAMILY DENTISTRY IN CYPRESS",
  heroHeading: "Family Dental Care in Cypress, TX",
  heroBody: "One dental home for your entire family — from your toddler's first visit to grandma's implants. At Smile Avenue Cypress, we make dental care comfortable, convenient, and judgment-free for every age and stage.",
  heroCta1: "Book a Family Visit",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Dental Cleaning",
  heroValueProps: ["All ages welcome — toddlers to seniors", "Netflix, blankets & comfort amenities in every room", "In-house Smile Dental Lab for faster results", "Saturday appointments for busy families", "Most insurance accepted · 0% financing available"],
  introKicker: "YOUR FAMILY'S DENTAL HOME",
  introHeading: "Why Families Choose Smile Avenue",
  introParas: [
    "Finding one dental practice that can care for your entire family — from your child's first checkup to your teen's Invisalign to your own cosmetic goals — shouldn't be hard. At Smile Avenue, our team of six experienced doctors covers every specialty under one roof, so you can schedule the whole family in one trip.",
    <>We combine modern technology with a hospitality-driven experience that makes visits something your family actually looks forward to. From <Link to="/cypress-tx/pediatric-dentistry" className="text-primary hover:underline">pediatric dentistry</Link> and <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">preventive cleanings</Link> to <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic dentistry</Link> and <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, we handle it all — no referrals, no runaround.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ from 5,000+ Reviews" },
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
    { icon: <Heart className="w-5 h-5" />, label: "Hospitality-Driven Care" },
  ],
  subServicesKicker: "COMPLETE FAMILY CARE",
  subServicesHeading: "Everything Your Family Needs",
  subServicesBody: "No referrals, no runaround — comprehensive care for every member of your family.",
  subServices: [
    { title: "Kids & Teen Dentistry", description: "Fun, gentle visits that build healthy habits early. Our team is specially trained to work with children of all ages and temperaments.", icon: <Baby className="w-5 h-5" /> },
    { title: "Preventive Care & Cleanings", description: "Thorough exams, digital X-rays, and gentle cleanings to keep your family's smiles healthy and catch problems early.", icon: <Shield className="w-5 h-5" /> },
    { title: "Same-Day Emergency Care", description: "Toothaches, broken teeth, and dental emergencies don't wait — and neither do we. Same-day appointments available.", icon: <Calendar className="w-5 h-5" /> },
    { title: "Cosmetic & Restorative", description: "From teeth whitening and veneers to implants and crowns, we help every family member achieve their best smile.", icon: <Sparkles className="w-5 h-5" /> },
  ],
  processKicker: "YOUR FAMILY'S FIRST VISIT",
  processHeading: "What to Expect",
  processBody: "A warm, welcoming experience from the moment you walk in.",
  processSteps: [
    { number: "01", title: "Warm Welcome", description: "Check in easily, grab a warm blanket, and settle into a Netflix-equipped treatment room. Kids get a special welcome too.", icon: <Heart className="w-5 h-5" /> },
    { number: "02", title: "Comprehensive Exam", description: "Digital X-rays, oral cancer screening, gum health assessment, and a thorough examination by your dentist.", icon: <Stethoscope className="w-5 h-5" /> },
    { number: "03", title: "Gentle Cleaning", description: "Our experienced hygienists provide a thorough yet gentle cleaning, removing plaque and tartar while keeping you comfortable.", icon: <Sparkles className="w-5 h-5" /> },
    { number: "04", title: "Personalized Plan", description: "Your dentist discusses findings honestly, answers all your questions, and creates a care plan that fits your family's needs and budget.", icon: <Shield className="w-5 h-5" /> },
  ],
  faqHeading: "Family Dental Care Questions",
  faqs: [
    { question: "What age should my child first see the dentist?", answer: "The American Academy of Pediatric Dentistry recommends a first visit by age 1 or when the first tooth appears. We welcome children of all ages and make early visits fun and stress-free." },
    { question: "Can I schedule my whole family on the same day?", answer: "Yes! We love scheduling family block appointments so everyone can be seen in one trip. Call us to arrange back-to-back appointments for your family." },
    { question: "Do you accept dental insurance?", answer: "We accept most major PPO plans including Aetna, BCBS, Cigna, Delta Dental, MetLife, and more. We also offer our own Membership Plan and 0% financing through CareCredit and Sunbit." },
    { question: "What if my child is nervous about the dentist?", answer: "Our team is specially trained to work with anxious patients of all ages. We use gentle techniques, offer sedation options, and create a calm, fun environment that helps children feel safe." },
    { question: "Do you offer Saturday appointments?", answer: "Yes — we know busy families need flexible scheduling. We offer Saturday appointments to make dental care fit your life." },
    { question: "What makes Smile Avenue different from other family dentists?", answer: "We combine comprehensive, all-ages care with a hospitality-driven experience — Netflix in every room, warm blankets, an in-house dental lab for faster results, and a team that genuinely cares about your comfort." },
    { question: "Do you handle dental emergencies?", answer: "Absolutely. We offer same-day emergency appointments for toothaches, broken teeth, knocked-out teeth, and other urgent dental needs. Call us and we'll get you in right away." },
    { question: "Is there parking available?", answer: "Yes — our Cypress office at 9212 Fry Rd has a large, convenient parking lot right in front of the building with easy access." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Families Are Saying",
  testimonials: [
    { quote: "We bring the whole family here — from our 3-year-old to my mother-in-law. Everyone gets amazing care and actually enjoys going. The team is incredible with kids.", name: "Amanda T.", source: "Google Review", location: "Bridgeland, Cypress" },
    { quote: "I trust Smile Avenue completely. The team makes my family feel like VIPs every single visit. We wouldn't go anywhere else.", name: "Thao H.", source: "Google Review", location: "Bridgeland, Cypress" },
    { quote: "My kids actually ask to go to the dentist now! The team is so wonderful with children. They make it fun and stress-free. Best family dental experience we've ever had.", name: "Sarah T.", source: "Google Review", location: "Towne Lake, Cypress" },
  ],
  ctaHeading: "Book Your Family's Visit Today",
  ctaBody: "One dental home for your entire family — comfortable, convenient, and judgment-free.",
};

const FamilyDentalCareCypress = () => <ServicePageTemplate data={data} />;
export default FamilyDentalCareCypress;
