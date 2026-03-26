import { Shield, Eye, Scan, Sparkles, Droplets, Layers, PhoneCall, Stethoscope, CheckCircle, Smile } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Preventive Dentistry",
  serviceSlug: "preventive-dentistry",
  metaTitle: "Preventive Dentistry Cypress, TX | Exams & Cleanings | Smile Avenue",
  metaDescription: "Comprehensive preventive dentistry in Cypress, TX. Dental exams, professional cleanings, digital X-rays, oral cancer screenings & fluoride treatments. Book today.",
  heroKicker: "PREVENTIVE CARE IN CYPRESS",
  heroHeading: "Preventive Dentistry in Cypress, TX",
  heroBody: "Prevention is the foundation of a healthy smile. At Smile Avenue Cypress, our preventive dentistry program combines thorough exams, professional cleanings, and advanced digital diagnostics to catch problems early — before they become costly.",
  heroCta1: "Book Your Cleaning",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Preventive Dentistry Photo",
  introKicker: "THE FOUNDATION OF ORAL HEALTH",
  introHeading: "Why Preventive Dentistry Matters",
  introParas: [
    "Preventive dentistry is the most effective — and most affordable — way to maintain your oral health. Regular exams and cleanings allow your dentist to identify early signs of decay, gum disease, and oral cancer before they progress into more complex (and expensive) problems.",
    "At Smile Avenue, we recommend twice-yearly preventive visits for most patients. Each visit includes a comprehensive exam, professional cleaning, and digital X-rays as needed. We also offer oral cancer screenings, fluoride treatments, and dental sealants for added protection.",
    "Our Cypress team uses the latest digital imaging technology to give you a complete picture of your oral health. We'll walk you through every finding, answer your questions, and create a personalized care plan to keep your smile healthy for life.",
  ],
  trustBadges: [
    { icon: <Shield className="w-5 h-5" />, label: "Insurance Accepted" },
    { icon: <Eye className="w-5 h-5" />, label: "Digital Diagnostics" },
    { icon: <Smile className="w-5 h-5" />, label: "All Ages Welcome" },
  ],
  subServicesKicker: "COMPREHENSIVE PREVENTIVE SERVICES",
  subServicesHeading: "What's Included in Your Preventive Visit",
  subServicesBody: "Every preventive visit at Smile Avenue is designed to be thorough, comfortable, and educational.",
  subServices: [
    { title: "Comprehensive Exams", description: "A detailed evaluation of your teeth, gums, bite, jaw joints, and soft tissues. We check for cavities, gum disease, oral cancer, and other concerns.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Professional Cleanings", description: "Our hygienists gently remove plaque and tartar buildup that brushing and flossing can't reach, leaving your teeth polished and refreshed.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Digital X-Rays & Screenings", description: "Low-radiation digital X-rays reveal hidden decay, bone loss, and impacted teeth. We also perform oral cancer screenings at every exam.", icon: <Scan className="w-5 h-5" /> },
    { title: "Fluoride & Sealants", description: "Fluoride treatments strengthen enamel against decay, while dental sealants provide a protective barrier on the chewing surfaces of back teeth — especially beneficial for children.", icon: <Layers className="w-5 h-5" /> },
  ],
  processKicker: "YOUR PREVENTIVE VISIT",
  processHeading: "What to Expect at Your Appointment",
  processBody: "We make preventive visits comfortable, efficient, and informative.",
  processSteps: [
    { number: "01", title: "Check-In & Review", description: "We'll review your health history, any concerns, and update your records. First-time patients receive a comprehensive new patient exam.", icon: <PhoneCall className="w-6 h-6" /> },
    { number: "02", title: "Digital Imaging", description: "As needed, we capture low-dose digital X-rays to see what's happening beneath the surface — detecting issues invisible to the naked eye.", icon: <Scan className="w-6 h-6" /> },
    { number: "03", title: "Professional Cleaning", description: "Your hygienist carefully removes plaque and tartar, polishes your teeth, and flosses — leaving your mouth feeling clean and fresh.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "04", title: "Exam & Care Plan", description: "Your dentist examines your teeth, gums, and X-rays, then discusses findings and creates a personalized plan for your ongoing care.", icon: <CheckCircle className="w-6 h-6" /> },
  ],
  faqHeading: "Preventive Dentistry FAQ",
  faqs: [
    { question: "How much does a dental cleaning cost in Cypress, TX?", answer: "A routine cleaning and exam typically ranges from $150–$350 without insurance. Most dental insurance plans cover two preventive visits per year at 100%. We also accept our in-house membership plan for uninsured patients." },
    { question: "How often should I visit the dentist?", answer: "Most patients should visit every six months for a cleaning and exam. Patients with gum disease or other risk factors may benefit from more frequent visits, typically every 3–4 months." },
    { question: "Are dental X-rays safe?", answer: "Yes. Digital X-rays use up to 80% less radiation than traditional film X-rays. We follow ADA guidelines and only take X-rays when clinically necessary." },
    { question: "Do you offer oral cancer screenings?", answer: "Yes. An oral cancer screening is included with every comprehensive exam. We check the tongue, throat, cheeks, and other soft tissues for any abnormalities." },
    { question: "What age should my child first visit the dentist?", answer: "The American Academy of Pediatric Dentistry recommends a first dental visit by age 1 or within six months of the first tooth erupting. We welcome children of all ages at Smile Avenue." },
  ],
  reviewsKicker: "WHAT CYPRESS PATIENTS SAY",
  reviewsHeading: "Preventive Care Reviews",
  testimonials: [
    { quote: "The whole team is so friendly and thorough. My cleanings here are the best I've ever had — they actually take time to explain everything.", name: "Karen M.", source: "Google Review" },
    { quote: "I hadn't been to the dentist in 3 years and they made me feel completely at ease. No judgment, just great care. Already booked my next visit!", name: "David L.", source: "Google Review" },
    { quote: "My kids love coming here! The hygienists are so gentle and patient. Fluoride treatments and sealants give me peace of mind as a parent.", name: "Priya S.", source: "Google Review" },
  ],
  ctaHeading: "Schedule Your Preventive Visit Today",
  ctaBody: "Prevention is the best investment in your smile. Book your cleaning and exam at Smile Avenue Cypress.",
};

const PreventiveDentistryCypress = () => <ServicePageTemplate data={data} />;
export default PreventiveDentistryCypress;
