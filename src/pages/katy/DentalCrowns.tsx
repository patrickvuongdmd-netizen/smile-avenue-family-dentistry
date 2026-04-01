import { Shield, Zap, Scan, Clock, Star, FlaskConical, Wrench } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Crowns",
  serviceSlug: "dental-crowns",
  metaTitle: "Dental Crowns Katy, TX | Same-Day Custom Crowns | Smile Avenue",
  metaDescription: "Dental crowns in Katy, TX. Porcelain & zirconia crafted in our in-house lab. Digital impressions. Insurance & financing. Call (281) 800-5008.",
  heroKicker: "CUSTOM CROWNS IN KATY",
  heroHeading: "Dental Crowns in Katy, TX",
  heroBody: "A damaged tooth deserves a restoration that looks and feels natural. At Smile Avenue Katy, our in-house Smile Dental Lab fabricates custom porcelain and zirconia crowns with digital precision — faster turnaround than practices that outsource their lab work.",
  heroCta1: "Book Crown Appointment",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Dental Crowns Photo",
  heroValueProps: ["In-house Smile Dental Lab for precise fit", "Porcelain & zirconia options", "Digital impressions — no goopy molds", "Faster turnaround than outside labs", "Most insurance accepted · 0% financing"],
  introKicker: "CUSTOM CROWN RESTORATIONS",
  introHeading: "Precision Crowns from Our In-House Lab",
  introParas: [
    "A dental crown is a custom cap that covers and protects a damaged tooth, restoring its shape, size, strength, and appearance. Crowns are used for post-root canal protection, severe decay repair, cracked tooth repair, dental implant coverage, and cosmetic improvement.",
    "Our Medit digital scanner captures precise 3D impressions (no goopy molds), and our in-house Smile Dental Lab fabricates crowns using high-quality porcelain and zirconia materials with exact shade matching. For complex cases, our lab handcrafts crowns for the highest level of customization. Patients from Cinco Ranch, Elyson, and Westheimer Parkway choose us for convenient, high-quality crown restorations.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <FlaskConical className="w-5 h-5" />, label: "In-House Lab" },
    { icon: <Scan className="w-5 h-5" />, label: "Digital Impressions" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Crowns",
  subServicesBody: "Advanced technology and in-house craftsmanship for better-fitting crowns.",
  subServices: [
    { title: "In-House Smile Dental Lab", description: "Custom crowns designed and fabricated on-site — faster turnaround than practices that outsource to external labs.", icon: <Zap className="w-5 h-5" /> },
    { title: "Digital Medit Impressions", description: "Comfortable digital scanning replaces goopy molds for more accurate, better-fitting crowns.", icon: <Scan className="w-5 h-5" /> },
    { title: "In-House Lab for Complex Cases", description: "Our Smile Dental Lab handcrafts crowns for cases requiring the highest level of customization and artistry.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "Natural Appearance", description: "Porcelain and zirconia crowns are color-matched to blend seamlessly with your surrounding teeth for an invisible restoration.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CROWN PROCESS",
  processHeading: "What to Expect",
  processBody: "Precision crowns with faster turnaround from our in-house lab.",
  processSteps: [
    { number: "01", title: "Examination & Digital Scan", description: "We evaluate the tooth and capture a precise 3D digital scan using our Medit scanner.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Crown Design", description: "Your crown is designed using a digital workflow, customized for perfect fit and natural appearance.", icon: <Wrench className="w-5 h-5" /> },
    { number: "03", title: "In-House Fabrication", description: "Your crown is fabricated in our Smile Dental Lab using high-quality porcelain or zirconia.", icon: <Zap className="w-5 h-5" /> },
    { number: "04", title: "Fitting & Permanent Bonding", description: "Your crown is fitted, adjusted for comfort, and permanently bonded at your follow-up appointment.", icon: <Shield className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Crown Questions",
  faqs: [
    { question: "How much do crowns cost?", answer: "Most dental insurance covers a significant portion of crown costs. We accept all major PPO plans and offer CareCredit financing for any remaining balance." },
    { question: "How many visits for a crown?", answer: "Our in-house Smile Dental Lab allows for faster turnaround than practices that outsource to external labs. Most crown cases are completed in two visits — one for preparation and impressions, and one for final placement." },
    { question: "How long do crowns last?", answer: "Porcelain and zirconia crowns typically last 10-15+ years with proper care. Regular checkups and good oral hygiene extend their lifespan." },
    { question: "Does getting a crown hurt?", answer: "No — local anesthesia numbs the area completely. Sedation options are also available for anxious patients." },
    { question: "What crown materials do you offer?", answer: "We offer Emax porcelain and zirconia crowns. Our in-house lab ensures precise shade matching so your crown blends seamlessly with your natural teeth." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My crown matches my other teeth perfectly — you can't tell which one is the crown. The digital scanning was so much better than those awful goopy impressions.", name: "Diana F.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "I was impressed by how fast I got my crown compared to my previous dentist. The in-house lab really makes a difference in turnaround time.", name: "Brian M.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "I needed a crown after a root canal and the whole process was smooth. Great fit, natural look. Very happy with the result.", name: "Tom S.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Restore Your Smile with a Custom Crown",
  ctaBody: "Schedule your crown consultation at Smile Avenue Katy — precision craftsmanship from our in-house lab.",
};

const DentalCrownsKaty = () => <ServicePageTemplate data={data} />;
export default DentalCrownsKaty;