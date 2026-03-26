import { Shield, Users, Star, Stethoscope, Scan, Droplets, Sparkles } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Cleaning",
  serviceSlug: "dental-cleaning",
  metaTitle: "Dental Cleaning Katy, TX | Preventive Care | Smile Avenue",
  metaDescription: "Professional dental cleanings in Katy, TX. Routine cleanings, deep cleanings, periodontal maintenance & fluoride. Call (281) 800-5008.",
  heroKicker: "PREVENTIVE CARE IN KATY",
  heroHeading: "Dental Cleaning in Katy, TX",
  heroBody: "Regular professional cleanings are the foundation of a healthy smile. Our gentle hygienists use the latest technology to keep your teeth and gums in top condition.",
  heroCta1: "Book Cleaning Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Dental Cleaning Photo",
  introKicker: "ABOUT DENTAL CLEANINGS", introHeading: "Why Professional Cleanings Matter",
  introParas: [
    "Even with excellent home care, plaque and tartar build up in areas your toothbrush and floss can't reach. Professional cleanings remove these deposits, preventing cavities, gum disease, and other oral health problems.",
    "At Smile Avenue Katy, our hygienists use ultrasonic scalers and air polishing for a thorough yet gentle cleaning experience. We also perform comprehensive oral exams and digital X-rays to catch issues early.",
    "The American Dental Association recommends professional cleanings every six months. Families across Cinco Ranch, Firethorne, and Cross Creek Ranch trust our Katy team for their preventive care needs."
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "Gentle Cleanings" },
    { icon: <Shield className="w-5 h-5" />, label: "Advanced Technology" },
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
  ],
  subServicesKicker: "CLEANING SERVICES", subServicesHeading: "Cleaning Treatments We Offer",
  subServicesBody: "We provide the right level of cleaning for your individual oral health needs.",
  subServices: [
    { title: "Routine Cleaning", description: "Standard prophylaxis cleaning that removes plaque and tartar above the gumline. Recommended every six months for healthy gums.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Deep Cleaning", description: "Scaling and root planing for patients with gum disease. Removes bacteria and tartar below the gumline to halt disease progression.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Periodontal Maintenance", description: "Ongoing cleanings every 3-4 months for patients who have been treated for gum disease. Prevents recurrence.", icon: <Shield className="w-5 h-5" /> },
    { title: "Fluoride Treatment", description: "Professional fluoride application to strengthen enamel and provide extra cavity protection, especially beneficial for children.", icon: <Droplets className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CLEANING VISIT", processHeading: "What to Expect",
  processBody: "Our cleaning appointments are thorough, gentle, and designed to keep your smile healthy.",
  processSteps: [
    { number: "01", title: "Comprehensive Exam", description: "Your dentist examines your teeth, gums, and oral tissues. Digital X-rays are taken as needed to check for hidden issues.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Plaque & Tartar Removal", description: "Our hygienist uses ultrasonic and hand instruments to carefully remove plaque and tartar from all surfaces.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "03", title: "Polish & Floss", description: "Teeth are polished to remove surface stains and flossed to ensure every area between teeth is clean.", icon: <Star className="w-6 h-6" /> },
    { number: "04", title: "Treatment Plan Review", description: "Your dentist reviews findings and discusses any recommended treatments or follow-up care.", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "Dental Cleaning FAQ",
  faqs: [
    { question: "How much does a dental cleaning cost in Katy, TX?", answer: "Routine cleanings typically range from $150-$300 without insurance. Most insurance plans cover two cleanings per year at 100%. Deep cleanings range from $600-$1,200 depending on severity." },
    { question: "How often should I get a dental cleaning?", answer: "The ADA recommends every six months for most patients. If you have gum disease, every 3-4 months may be recommended." },
    { question: "Does a dental cleaning hurt?", answer: "Routine cleanings are generally comfortable. If you have sensitivity, we can use topical numbing gel. Deep cleanings are performed with local anesthesia for comfort." },
    { question: "What's the difference between a regular cleaning and a deep cleaning?", answer: "Regular cleanings address plaque above the gumline. Deep cleanings (scaling and root planing) go below the gumline to treat gum disease by removing bacteria from periodontal pockets." },
    { question: "Do you see children for cleanings?", answer: "Absolutely! We recommend first dental visits by age one and regular cleanings starting when baby teeth come in. Our team is experienced with pediatric patients of all ages." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Cleaning Reviews",
  testimonials: [
    { quote: "Best dental cleaning I've ever had. The hygienist was gentle, thorough, and took time to explain everything. My teeth feel amazing!", name: "Hannah J.", source: "Google Review" },
    { quote: "Brought my whole family for cleanings at the Katy office. They were great with our kids — patient, fun, and thorough. Our new dental home!", name: "Michael & Sarah T.", source: "Google Review" },
    { quote: "I needed a deep cleaning and was nervous, but they numbed everything and I didn't feel a thing. My gums have never been healthier.", name: "Rosa M.", source: "Google Review" },
  ],
  ctaHeading: "Book Your Cleaning Today",
  ctaBody: "Stay ahead of cavities and gum disease with regular professional cleanings at our Katy office.",
};

const DentalCleaningKaty = () => <ServicePageTemplate data={data} />;
export default DentalCleaningKaty;
