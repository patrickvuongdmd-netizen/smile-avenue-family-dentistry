import { Link } from "react-router-dom";
import { Shield, Star, Users, Heart, Scan, Sparkles, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Dental Cleaning",
  serviceSlug: "dental-cleaning",
  metaTitle: "Dental Cleaning Cypress, TX | Exams & Preventive Care | Smile Avenue",
  metaDescription: "Dental cleaning in Cypress, TX — gentle exams, deep cleanings & fluoride treatments. Open Saturdays. Most insurance accepted. Call (832) 648-1756.",
  heroKicker: "PREVENTIVE CARE IN CYPRESS",
  heroHeading: "Dental Cleaning and Preventive Care in Cypress, TX",
  heroBody: "Regular cleanings are the foundation of a healthy smile. At Smile Avenue Cypress, we make them comfortable, thorough, and enjoyable. Our hygienists use gentle technique and modern technology to keep teeth and gums in top condition.",
  heroCta1: "Book Cleaning",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Dental Cleaning",
  introKicker: "PREVENTIVE DENTISTRY",
  introHeading: "Why Dental Cleanings Matter",
  introParas: [
    "Even with excellent home care, plaque and tartar build up where brushing and flossing miss. Professional cleanings remove this buildup, polish teeth, assess gum health, screen for oral cancer, and update X-rays as needed. The ADA recommends cleanings every 6 months for most patients.",
    <>Families across Bridgeland, Towne Lake, Fairfield, and Cypress trust our hygienists Arpine, Ivy, and Jen for gentle, thorough care. Regular cleanings help prevent <Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canals</Link>, <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">extractions</Link>, and other costly procedures by catching problems early. We also offer <Link to="/cypress-tx/pediatric-dentistry" className="text-primary hover:underline">pediatric dentistry</Link> for our youngest patients and <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">teeth whitening</Link> to brighten your smile after your cleaning.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Hygienists" },
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Cleanings",
  subServicesBody: "Gentle, experienced hygienists with comprehensive exams included.",
  subServices: [
    { title: "Experienced Gentle Hygienists", description: "Our hygienists Arpine, Ivy, and Jen are known for thorough yet gentle cleanings that patients actually enjoy.", icon: <Heart className="w-5 h-5" /> },
    { title: "Comprehensive Exams Included", description: "Every cleaning includes a full examination, oral cancer screening, and personalized care recommendations.", icon: <Shield className="w-5 h-5" /> },
    { title: "Digital X-Rays", description: "Minimal-radiation digital X-rays detect problems invisible to the naked eye — catching issues early when they're easiest to treat.", icon: <Scan className="w-5 h-5" /> },
    { title: "Family-Friendly — All Ages", description: "From toddlers to grandparents, we welcome patients of all ages and make every visit comfortable and educational.", icon: <Users className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CLEANING VISIT",
  processHeading: "What to Expect",
  processBody: "A thorough, comfortable cleaning from start to finish.",
  processSteps: [
    { number: "01", title: "Digital X-Rays", description: "As needed, we capture low-dose digital X-rays to see what's happening beneath the surface.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Professional Cleaning", description: "Plaque and tartar removal from all tooth surfaces and along the gumline, followed by polishing.", icon: <Sparkles className="w-5 h-5" /> },
    { number: "03", title: "Gum Health Assessment", description: "Your hygienist evaluates gum health, checks for signs of periodontal disease, and measures pocket depths.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Dentist Exam & Screening", description: "Your dentist examines teeth, reviews X-rays, performs an oral cancer screening, and discusses findings.", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Cleaning Questions",
  faqs: [
    { question: "How much does a dental cleaning cost without insurance?", answer: "Our Membership Plan is the best value for uninsured patients — it includes 2 cleanings, exams, and X-rays annually plus discounts on all other treatments. Call for current pricing." },
    { question: "How often should I get a dental cleaning?", answer: "Every 6 months for most patients. Patients with gum disease may benefit from cleanings every 3-4 months. We'll recommend the right schedule for your needs." },
    { question: "Is a deep cleaning different from a regular cleaning?", answer: "Yes — a deep cleaning (scaling and root planing) treats below the gumline and is necessary when gum disease is present. A regular cleaning (prophylaxis) maintains healthy teeth and gums above the gumline." },
    { question: "Does a dental cleaning hurt?", answer: "No — but if you have sensitivity, we accommodate with numbing gel or local anesthesia to ensure your comfort throughout the procedure." },
    { question: "Do kids need dental cleanings?", answer: "Yes, starting around age 2-3. Early dental visits establish good habits, catch problems early, and help children feel comfortable with dental care. Our team is great with kids of all ages." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Best cleaning I've ever had. The hygienist was so thorough and gentle. My teeth feel amazing and the whole visit was actually enjoyable!", name: "Michelle W.", source: "Google Review" },
    { quote: "I hadn't been to the dentist in 3 years and was embarrassed. The team at Smile Avenue was so non-judgmental and kind. They got my teeth back in great shape.", name: "Derek S.", source: "Google Review" },
    { quote: "My kids actually look forward to their cleanings here! The hygienists are wonderful with children and make it fun. Can't recommend this place enough.", name: "Sarah T.", source: "Google Review" },
  ],
  ctaHeading: "Schedule Your Cleaning Today",
  ctaBody: "Keep your smile healthy with a professional cleaning at Smile Avenue Cypress.",
};

const DentalCleaningCypress = () => <ServicePageTemplate data={data} />;
export default DentalCleaningCypress;
