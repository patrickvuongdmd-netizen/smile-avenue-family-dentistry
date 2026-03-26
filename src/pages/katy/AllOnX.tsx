import { Shield, Zap, Users, Star, Scan, Syringe, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "All-on-X Implants",
  serviceSlug: "all-on-x-implants",
  metaTitle: "All-on-X Full Mouth Implants Katy, TX | Smile Avenue",
  metaDescription: "All-on-4 and All-on-6 full arch implants in Katy, TX. Replace an entire arch of teeth in one day. Call (281) 800-5008 for a consultation.",
  heroKicker: "FULL ARCH RESTORATION IN KATY",
  heroHeading: "All-on-X Full Mouth Implants in Katy, TX",
  heroBody: "All-on-X dental implants replace an entire arch of teeth with just 4-6 strategically placed implants. Get a brand-new, permanent smile — often in a single day.",
  heroCta1: "Book All-on-X Consultation", heroCta2: "Call (281) 800-5008", heroImage: "All-on-X Implants Photo",
  introKicker: "ABOUT ALL-ON-X", introHeading: "What Are All-on-X Implants?",
  introParas: [
    "All-on-X is a revolutionary full-arch tooth replacement system that uses 4-6 dental implants to support a complete set of fixed, non-removable teeth. Unlike traditional dentures, All-on-X teeth are permanently anchored and function just like natural teeth.",
    "This solution is ideal for patients who are missing most or all of their teeth, have failing dentition, or are tired of dealing with loose, uncomfortable dentures. Many patients receive their new teeth the same day as implant placement.",
    "At Smile Avenue Katy, Dr. Vuong has extensive training in All-on-X procedures using 3D-guided surgery for precise placement and predictable outcomes. Patients from Cinco Ranch, Cross Creek Ranch, and throughout the Katy area trust us for this life-changing treatment."
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "Teeth in a Day" },
    { icon: <Shield className="w-5 h-5" />, label: "3D-Guided Surgery" },
    { icon: <Users className="w-5 h-5" />, label: "Life-Changing Results" },
  ],
  subServicesKicker: "ALL-ON-X OPTIONS", subServicesHeading: "Full Arch Solutions We Offer",
  subServicesBody: "We offer multiple All-on-X configurations to match your clinical needs and goals.",
  subServices: [
    { title: "All-on-4", description: "The most common configuration — four implants per arch support a full set of fixed teeth. Ideal for patients with moderate bone density.", icon: <Zap className="w-5 h-5" /> },
    { title: "All-on-6", description: "Six implants per arch provide additional support and stability, recommended for patients who want extra security.", icon: <Shield className="w-5 h-5" /> },
    { title: "Zirconia Full Arch", description: "Premium zirconia prosthetics that are incredibly strong, stain-resistant, and natural-looking for the most lifelike results.", icon: <Star className="w-5 h-5" /> },
    { title: "Hybrid Prosthetics", description: "Acrylic and titanium hybrid arches that combine durability with aesthetics at a more accessible price point.", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  processKicker: "YOUR ALL-ON-X JOURNEY", processHeading: "What to Expect",
  processBody: "Our comprehensive approach ensures predictable, beautiful results.",
  processSteps: [
    { number: "01", title: "Comprehensive Consultation", description: "3D CBCT scan, oral exam, and detailed discussion of your goals, timeline, and investment.", icon: <Scan className="w-6 h-6" /> },
    { number: "02", title: "Treatment Planning", description: "We digitally plan your implant positions and design your new smile before surgery day.", icon: <Star className="w-6 h-6" /> },
    { number: "03", title: "Implant Surgery", description: "Implants are placed using guided surgery under IV sedation. Temporary teeth are attached the same day.", icon: <Syringe className="w-6 h-6" /> },
    { number: "04", title: "Final Prosthetic", description: "After healing, your permanent zirconia or hybrid arch is delivered — your brand-new, permanent smile.", icon: <Shield className="w-6 h-6" /> },
  ],
  faqHeading: "All-on-X FAQ",
  faqs: [
    { question: "How much do All-on-X implants cost in Katy, TX?", answer: "All-on-X treatment typically ranges from $20,000-$40,000 per arch depending on the prosthetic material. We offer financing through CareCredit and Sunbit to make treatment accessible." },
    { question: "Can I get new teeth the same day as surgery?", answer: "In most cases, yes. We attach a temporary fixed prosthetic the same day as implant placement so you never leave without teeth." },
    { question: "How long do All-on-X implants last?", answer: "The implants themselves can last a lifetime with proper care. The prosthetic arch typically lasts 15-20+ years before needing replacement." },
    { question: "Am I a candidate for All-on-X?", answer: "Most patients with missing or failing teeth are candidates. Even patients with some bone loss can often qualify thanks to angled implant placement. A 3D scan during consultation will confirm." },
    { question: "What's the recovery time?", answer: "Most patients return to light activities within 2-3 days. Soft diet is recommended for 3-6 months while the implants integrate with the bone." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "All-on-X Reviews",
  testimonials: [
    { quote: "All-on-4 at Smile Avenue Katy changed my life. I went from hiding my smile to showing it off everywhere. Dr. Vuong is a genius.", name: "William H.", source: "Google Review" },
    { quote: "After years of denture adhesive and embarrassment, I finally got permanent implants. Eating steak, corn on the cob — everything I missed. Thank you!", name: "Dorothy A.", source: "Google Review" },
    { quote: "The whole process was so well-organized. From the 3D planning to surgery day to my final zirconia arch — everything was seamless. 10/10.", name: "Raymond C.", source: "Google Review" },
  ],
  ctaHeading: "Transform Your Smile with All-on-X",
  ctaBody: "Schedule a free All-on-X consultation at our Katy office. A permanent, beautiful smile is within reach.",
};

const AllOnXKaty = () => <ServicePageTemplate data={data} />;
export default AllOnXKaty;
