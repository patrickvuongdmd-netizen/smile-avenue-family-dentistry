import { Shield, Users, Sparkles, Scan, Stethoscope, Star, CheckCircle } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Cleaning",
  serviceSlug: "dental-cleaning",
  metaTitle: "Dental Cleaning Katy, TX | Exams & Preventive Care | Smile Avenue",
  metaDescription: "Dental cleaning in Katy, TX near Cinco Ranch — gentle exams, deep cleanings & fluoride treatments. Open Saturdays. Insurance accepted. Call (281) 800-5008.",
  heroKicker: "PREVENTIVE CARE IN KATY",
  heroHeading: "Dental Cleaning and Preventive Care in Katy, TX",
  heroBody: "Regular cleanings are the foundation of a healthy smile. Our Katy hygienists use gentle technique and modern technology for thorough, comfortable preventive care.",
  heroCta1: "Book Cleaning Appointment", heroCta2: "Call (281) 800-5008", heroImage: "Dental Cleaning Photo",
  introKicker: "ABOUT DENTAL CLEANINGS", introHeading: "Why Professional Cleanings Matter",
  introParas: [
    "Even with excellent home care, plaque and tartar build up in areas your toothbrush and floss can't reach. Professional cleanings remove these deposits, preventing cavities, gum disease, and other oral health problems.",
    "At Smile Avenue Katy, our experienced hygienists use ultrasonic scalers and modern polishing for a thorough yet gentle cleaning experience. Every visit includes a comprehensive exam with digital X-rays and oral cancer screening.",
    "Families across Cinco Ranch, Cross Creek Ranch, Firethorne, Elyson, and Cane Island trust our Katy team for their preventive care needs. We see patients of all ages — from toddlers to seniors."
  ],
  trustBadges: [
    { icon: <Sparkles className="w-5 h-5" />, label: "Experienced Gentle Hygienists" },
    { icon: <Shield className="w-5 h-5" />, label: "Comprehensive Exams Included" },
    { icon: <Scan className="w-5 h-5" />, label: "Digital X-Rays" },
    { icon: <Users className="w-5 h-5" />, label: "Family-Friendly All Ages" },
  ],
  subServicesKicker: "CLEANING SERVICES", subServicesHeading: "Cleaning Treatments We Offer",
  subServicesBody: "We provide the right level of cleaning for your individual oral health needs.",
  subServices: [
    { title: "Routine Cleaning", description: "Standard prophylaxis cleaning that removes plaque and tartar above the gumline. Recommended every six months for healthy gums.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Deep Cleaning", description: "Scaling and root planing for patients with gum disease. Removes bacteria and tartar below the gumline to halt disease progression.", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Periodontal Maintenance", description: "Ongoing cleanings every 3-4 months for patients who have been treated for gum disease. Prevents recurrence.", icon: <Shield className="w-5 h-5" /> },
    { title: "Fluoride Treatment", description: "Professional fluoride application to strengthen enamel and provide extra cavity protection, especially beneficial for children.", icon: <Star className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CLEANING VISIT", processHeading: "What to Expect",
  processBody: "Our cleaning appointments are thorough, gentle, and designed to keep your smile healthy.",
  processSteps: [
    { number: "01", title: "Digital X-Rays", description: "Low-dose digital X-rays capture what's happening beneath the surface, detecting issues invisible to the naked eye.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Cleaning & Polishing", description: "Our hygienist gently removes plaque and tartar, then polishes your teeth to a smooth, clean finish.", icon: <Sparkles className="w-6 h-6" /> },
    { number: "03", title: "Gum Health Assessment", description: "We measure periodontal pockets and assess gum health to catch early signs of gum disease.", icon: <Stethoscope className="w-6 h-6" /> },
    { number: "04", title: "Dentist Exam & Screening", description: "Your dentist performs a comprehensive exam including oral cancer screening, then provides home care recommendations.", icon: <CheckCircle className="w-6 h-6" /> },
  ],
  faqHeading: "Dental Cleaning FAQ",
  faqs: [
    { question: "How much does a dental cleaning cost without insurance in Katy?", answer: "Our Membership Plan offers the best value for uninsured patients. Routine cleanings typically range from $150-$300. Most insurance plans cover two cleanings per year at 100%." },
    { question: "How often should I get a dental cleaning?", answer: "The ADA recommends every six months for most patients. If you have gum disease, every 3-4 months may be recommended." },
    { question: "What's the difference between a regular cleaning and a deep cleaning?", answer: "Regular cleanings address plaque above the gumline. Deep cleanings (scaling and root planing) go below the gumline to treat gum disease by removing bacteria from periodontal pockets." },
    { question: "Does a dental cleaning hurt?", answer: "No. Routine cleanings are generally comfortable. If you have sensitivity, we can use topical numbing gel." },
    { question: "Do kids need dental cleanings?", answer: "Yes! We recommend starting cleanings around age 2-3 when enough baby teeth have come in. Building early habits sets kids up for a lifetime of healthy smiles." },
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
