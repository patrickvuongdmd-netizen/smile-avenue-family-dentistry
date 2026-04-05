import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "cypress",
  neighborhoodName: "Spring",
  slug: "spring-dentist",
  metaTitle: "Dentist Near Spring, TX | Smile Avenue Family Dentistry Cypress",
  metaDescription: "Spring TX dentist just 20 min via US-290. Same-day appointments, dental implants, Invisalign, kids dentistry. 4.9★ rating. Call (832) 648-1756.",
  heroHeading: "Your Spring, TX Family Dentist — Modern Care, Close to Home",
  heroImage: OFFICE_IMAGES.cypressHero,
  heroSubheading: "Comprehensive dental care for Spring families — just a short drive on US-290.",
  heroBody: "Smile Avenue Family Dentistry serves Spring, TX families with state-of-the-art dental care. Located on Fry Road in Cypress, our office is an easy 20-minute drive via US-290 West. From routine cleanings to dental implants and smile makeovers, we deliver hospitality-driven dentistry with no judgment, ever.",
  contentParagraphs: [
    "Spring, TX is a thriving community northwest of Houston, and many Spring families are discovering Smile Avenue Family Dentistry as their preferred dental home. While Spring has several dental options, patients consistently choose us for our combination of advanced technology, warm hospitality, and comprehensive services under one roof.",
    "The drive from Spring to our Cypress office is straightforward — hop on US-290 West and exit at Fry Road. In about 20 minutes, you'll arrive at a practice that treats your comfort as seriously as your dental health. Netflix in every room, warm blankets, and a team that genuinely listens.",
    "Our in-house Smile Dental Lab means faster turnaround on crowns, bridges, and implant restorations — often saving you an extra visit. We also offer sedation dentistry for anxious patients and same-day emergency appointments when you need us most.",
    "Whether you're in Champions Forest, Klein, or the Spring Branch area, Smile Avenue is worth the short drive. Over 5,000 families across the greater Houston area already trust us with their smiles.",
  ],
  whyChooseHeading: "Why Spring Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "20 Minutes from Spring via US-290", description: "Easy drive west on US-290, exit Fry Road. No complicated routes — straight shot to our office." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day & Saturday Appointments", description: "Emergency toothache? We'll see you today. Plus Saturday hours for busy schedules." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance & Financing", description: "We accept most PPO plans and offer 0% financing through CareCredit and Sunbit." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Full-Service Under One Roof", description: "Implants, Invisalign, cosmetic dentistry, oral surgery, kids dentistry — no referrals needed." },
    { icon: <Sparkles className="w-5 h-5" />, title: "In-House Dental Lab", description: "Same-day crowns and faster turnaround on restorations with our on-site Smile Dental Lab." },
    { icon: <Heart className="w-5 h-5" />, title: "Hospitality-Driven Experience", description: "Warm blankets, Netflix, noise-canceling headphones, and a judgment-free environment." },
  ],
  directionsHeading: "Getting Here from Spring, TX",
  directionsBody: [
    "From Spring, take US-290 West toward Cypress. After approximately 15 miles, exit at Fry Road. Turn right (north) on Fry Road — our office is located at 9212 Fry Rd #120, on the right side of the road.",
    "The drive takes about 20 minutes in normal traffic. If you're coming from the Klein area, you can also take FM 1960 West to US-290, then follow the same route.",
    "Free parking is available directly in front of our office. We're in a convenient shopping center with easy access from Fry Road.",
  ],
  crossStreets: "US-290 & Fry Road, Cypress TX",
  driveTime: "Approximately 20 minutes from Spring, TX",
  featuredServices: [
    { title: "Dental Implants", href: "/cypress-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Invisalign", href: "/cypress-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/cypress-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/cypress-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/cypress-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Peter Kim", credentials: "DDS", bio: "Patient-focused general and restorative dentistry.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
    { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Skilled in implants and oral surgery.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  ],
  testimonials: [
    { quote: "We drive from Spring because Smile Avenue is that good. The team remembers our names and the kids actually look forward to their visits!", name: "Amanda R.", source: "Google Review", location: "Spring, TX" },
    { quote: "After trying two dentists in Spring, we found Smile Avenue and never looked back. The drive is worth it for the care we receive.", name: "David K.", source: "Google Review", location: "Spring, TX" },
    { quote: "Dr. Vuong placed my implant and the whole process was smooth. Their in-house lab saved me weeks of waiting.", name: "Patricia M.", source: "Google Review", location: "Spring, TX" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Spring, TX?", answer: "Our Cypress office at 9212 Fry Rd is approximately 20 minutes from Spring via US-290 West. It's a straightforward drive with no complicated turns." },
    { question: "Do you accept patients from Spring?", answer: "Yes! We welcome patients from Spring, Klein, Champions, and all surrounding communities. Book online or call (832) 648-1756." },
    { question: "What services do you offer for Spring families?", answer: "We offer complete dental care: cleanings, implants, Invisalign, cosmetic dentistry, emergency care, pediatric dentistry, oral surgery, sedation dentistry, and more." },
    { question: "Do you have same-day appointments?", answer: "Yes! We offer same-day appointments for emergencies and often have same-day availability for routine visits." },
    { question: "Do you offer sedation for anxious patients?", answer: "Absolutely. We offer nitrous oxide, oral sedation, and IV sedation to ensure your complete comfort during any procedure." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
