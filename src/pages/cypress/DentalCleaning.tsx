import { Link } from "react-router-dom";
import { Shield, Star, Users, Heart, Scan, Sparkles, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Dental Cleaning",
  serviceSlug: "dental-cleaning",
  videoId: "O91Y4M9liYs",
  metaTitle: "Dental Cleaning Cypress, TX | Exams & Preventive Care | Smile Avenue",
  metaDescription: "Dental cleaning in Cypress, TX — gentle exams, deep cleanings & fluoride treatments. Open Saturdays. Most insurance accepted. Call (832) 648-1756.",
  heroKicker: "PREVENTIVE CARE IN CYPRESS",
  heroHeading: "Dental Cleaning and Preventive Care in Cypress, TX",
  heroBody: "Regular cleanings are the foundation of a healthy smile. At Smile Avenue Cypress, we make them comfortable, thorough, and enjoyable. Our hygienists use gentle technique and modern technology to keep teeth and gums in top condition.",
  heroCta1: "Book Cleaning",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Dental Cleaning",
  heroValueProps: ["Gentle, thorough cleaning technique", "Digital X-rays & oral cancer screening included", "Fluoride & sealant treatments available", "Kid-friendly environment", "Most insurance covers 100% of preventive care"],
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
    { question: "What is the difference between a regular cleaning and a deep cleaning?", answer: "A regular cleaning (prophylaxis) removes plaque and tartar above the gumline. A deep cleaning (scaling and root planing) treats below the gumline and is recommended when gum disease is present. Your dentist will recommend the appropriate type based on your exam." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Best cleaning I've ever had. The hygienist was so thorough and gentle. My teeth feel amazing and the whole visit was actually enjoyable!", name: "Michelle W.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "I hadn't been to the dentist in 3 years and was embarrassed. The team at Smile Avenue was so non-judgmental and kind. They got my teeth back in great shape.", name: "Derek S.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "My kids actually look forward to their cleanings here! The hygienists are wonderful with children and make it fun. Can't recommend this place enough.", name: "Sarah T.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  locationFaqs: [
    { question: "Where can I get a dental cleaning in Cypress, TX?", answer: "Smile Avenue Family Dentistry at 9212 Fry Rd #120, Cypress, TX 77433 provides thorough, gentle dental cleanings for the whole family — including kids, adults, and seniors." },
    { question: "How much does a dental cleaning cost in Cypress?", answer: "A standard dental cleaning and exam at our Cypress office is very affordable. Most dental insurance plans cover two preventive cleanings per year at 100%. Our Smile Avenue Membership Plan provides affordable coverage for uninsured patients." },
    { question: "How often should I get my teeth cleaned in Cypress?", answer: "The ADA recommends professional cleanings every 6 months. Patients with gum disease may need cleanings every 3-4 months. Our hygienists customize your cleaning schedule based on your oral health needs." },
    { question: "Do you offer deep cleaning (scaling and root planing) in Cypress?", answer: "Yes. For patients with gum disease, we offer deep cleaning (scaling and root planing) with local anesthesia for comfort. This removes bacteria below the gumline to halt disease progression and promote healing." },
    { question: "Is Smile Avenue Cypress open on Saturdays for cleanings?", answer: "Our Cypress office offers convenient scheduling including early appointments. Call (832) 648-1756 to find the best time for your family's cleanings." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Fry Road is where Cypress families come for thorough, gentle dental cleanings. Our hygienists Arpine, Ivy, and Jen are known throughout Bridgeland, Towne Lake, and Fairfield for their meticulous yet comfortable technique — patients consistently say these are the best cleanings they've ever had.",
    "Every cleaning at our Cypress office includes more than just plaque removal. We perform a comprehensive exam with digital X-rays, oral cancer screening, gum health assessment, and personalized hygiene recommendations. We catch problems early — before they become root canals, extractions, or costly restorations.",
    "We see patients of all ages, from toddlers getting their first cleaning to seniors maintaining their oral health. Our kid-friendly amenities (Netflix, warm blankets, flavored polish) make children's visits fun and stress-free. CFISD families love that we build positive dental habits early.",
    "Most dental insurance plans cover two preventive cleanings per year at 100%. For uninsured patients, our Smile Avenue Membership Plan includes two cleanings, exams, and X-rays annually plus discounts on all other treatments — making professional dental care affordable for every family.",
  ],
  ctaHeading: "Schedule Your Cleaning Today",
  ctaBody: "Keep your smile healthy with a professional cleaning at Smile Avenue Cypress.",
};

const DentalCleaningCypress = () => <ServicePageTemplate data={data} />;
export default DentalCleaningCypress;
