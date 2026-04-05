import { Link } from "react-router-dom";
import { Shield, Star, Users, Heart, Baby, Calendar, Sparkles, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Family Dental Care",
  serviceSlug: "family-dental-care",
  videoId: "5NHuCuktCPI",
  metaTitle: "Family Dentist Katy, TX | Family Dental Care | Smile Avenue",
  metaDescription: "Family dentist in Katy, TX — gentle care for all ages, from toddlers to grandparents. Open Saturdays. In-house dental lab. Call (281) 800-5008.",
  heroKicker: "FAMILY DENTISTRY IN KATY",
  heroHeading: "Family Dental Care in Katy, TX",
  heroBody: "One dental home for your entire family — from your toddler's first visit to grandma's implants. At Smile Avenue Katy, we make dental care comfortable, convenient, and judgment-free for every age and stage.",
  heroCta1: "Book a Family Visit",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Dental Cleaning",
  heroValueProps: ["All ages welcome — toddlers to seniors", "Netflix, blankets & comfort amenities in every room", "In-house Smile Dental Lab for faster results", "Saturday hours: 8am–2pm", "Most insurance accepted · 0% financing available"],
  introKicker: "YOUR FAMILY'S DENTAL HOME",
  introHeading: "Why Katy Families Choose Smile Avenue",
  introParas: [
    "Finding one dental practice that can care for your entire family — from your child's first checkup to your teen's Invisalign to your own cosmetic goals — shouldn't be hard. At Smile Avenue Katy on Westheimer Parkway, our experienced doctors cover every specialty under one roof, so you can schedule the whole family in one trip.",
    <>We combine modern technology with a hospitality-driven experience that makes visits something your family actually looks forward to. From <Link to="/katy-tx/pediatric-dentistry" className="text-primary hover:underline">pediatric dentistry</Link> and <Link to="/katy-tx/dental-cleaning" className="text-primary hover:underline">preventive cleanings</Link> to <Link to="/katy-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic dentistry</Link> and <Link to="/katy-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, we handle it all — no referrals, no runaround.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ from 5,000+ Reviews" },
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
    { icon: <Heart className="w-5 h-5" />, label: "Open Saturdays" },
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
    { question: "Do you offer Saturday appointments?", answer: "Yes — our Katy office is open Saturdays 8am–2pm, making it easy for busy families to fit dental care into their schedule." },
    { question: "What makes Smile Avenue different from other family dentists in Katy?", answer: "We combine comprehensive, all-ages care with a hospitality-driven experience — Netflix in every room, warm blankets, an in-house dental lab for faster results, and a team that genuinely cares about your comfort." },
    { question: "Do you handle dental emergencies?", answer: "Absolutely. We offer same-day emergency appointments for toothaches, broken teeth, knocked-out teeth, and other urgent dental needs. Call us and we'll get you in right away." },
    { question: "Where is the Katy office located?", answer: "We're at 23541 Westheimer Pkwy Ste #170, Katy, TX 77494 — conveniently located near Cinco Ranch, Cross Creek Ranch, and Firethorne." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Katy Families Are Saying",
  testimonials: [
    { quote: "The entire experience was seamless — from booking online to walking out with a perfect smile. Everyone remembers my name. This is how family dentistry should be.", name: "Patricia S.", source: "Google Review", location: "Cross Creek Ranch, Katy" },
    { quote: "Dr. Vuong and his team did my implants and the results are incredible. Professional, gentle, and genuinely caring. 10/10.", name: "Michael R.", source: "Google Review", location: "Cinco Ranch, Katy" },
    { quote: "I drove 45 minutes past three other dentists to come here, and it's worth every minute. The whole family loves this practice.", name: "Sarah M.", source: "Google Review", location: "Firethorne, Katy" },
  ],
  ctaHeading: "Book Your Family's Visit Today",
  ctaBody: "One dental home for your entire family — comfortable, convenient, and open Saturdays.",
};

const FamilyDentalCareKaty = () => <ServicePageTemplate data={data} />;
export default FamilyDentalCareKaty;
