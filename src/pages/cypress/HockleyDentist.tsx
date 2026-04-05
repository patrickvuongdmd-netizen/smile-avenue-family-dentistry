import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "cypress",
  neighborhoodName: "Hockley",
  slug: "hockley-dentist",
  metaTitle: "Dentist Near Hockley, TX | Smile Avenue Family Dentistry Cypress",
  metaDescription: "Hockley TX dentist 12 min away on Fry Rd. Same-day appointments, implants, Invisalign, kids dentistry. 4.9★ Google rating. Call (832) 648-1756.",
  heroHeading: "Your Hockley Family Dentist — Quality Care, Close to Home",
  heroImage: OFFICE_IMAGES.hallway,
  heroSubheading: "Modern, full-service dental care for Hockley families at our Cypress office.",
  heroBody: "Living in Hockley means you value space, community, and quality. Smile Avenue Family Dentistry brings that same quality to your dental care. Our Cypress office on Fry Road is just 12 minutes from Hockley, offering comprehensive dentistry with a hospitality-first approach.",
  contentParagraphs: [
    "Hockley is a growing community northwest of Cypress, and Smile Avenue Family Dentistry is the closest full-service dental practice offering advanced technology and comprehensive care. Our Fry Road location is an easy 12-minute drive south, making it convenient for Hockley families to access top-quality dental care.",
    "We understand that Hockley residents value straightforward, honest care. That's exactly what you'll find at Smile Avenue — transparent pricing, clear treatment explanations, and a team that respects your time. No unnecessary upsells, no rush — just thoughtful dentistry.",
    "From your child's first cleaning to advanced procedures like dental implants and full-mouth rehabilitation, our six experienced doctors and in-house dental lab ensure you get everything you need without referrals or long waits.",
    "Many Hockley families have made Smile Avenue their dental home because of our warm environment and judgment-free philosophy. Whether it's been years since your last visit or you're coming in for a routine check-up, you'll feel welcome here.",
  ],
  whyChooseHeading: "Why Hockley Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "Just 12 Minutes from Hockley", description: "Quick drive south on Mueschke or Hempstead to Fry Road. Easy access, free parking." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Emergency Care", description: "Toothache or broken tooth? Call us and we'll get you in today." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance Friendly", description: "We accept most major PPO plans and offer financing for patients without insurance." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "All Services Under One Roof", description: "Cleanings, implants, Invisalign, oral surgery, cosmetic dentistry — no referrals needed." },
    { icon: <Sparkles className="w-5 h-5" />, title: "In-House Lab Technology", description: "Faster crowns, bridges, and restorations thanks to our on-site Smile Dental Lab." },
    { icon: <Heart className="w-5 h-5" />, title: "Warm & Welcoming", description: "Netflix in every room, warm blankets, and a team that genuinely cares about your comfort." },
  ],
  directionsHeading: "Getting Here from Hockley",
  directionsBody: [
    "From Hockley, head south on Mueschke Road or take Hempstead Road (US-290) east toward Cypress. Exit at Fry Road and head south — our office is at 9212 Fry Rd #120.",
    "The drive takes approximately 12 minutes in normal traffic conditions. We're located in a shopping center on Fry Road with plenty of free parking.",
    "If you're coming from the Warren Ranch area, take FM 362 south to US-290, then head east to Fry Road.",
  ],
  crossStreets: "Fry Road near US-290, Cypress TX",
  driveTime: "Approximately 12 minutes from Hockley",
  featuredServices: [
    { title: "Dental Implants", href: "/cypress-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Invisalign", href: "/cypress-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/cypress-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/cypress-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/cypress-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Peter Kim", credentials: "DDS", bio: "Patient-focused general and restorative dentistry.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
    { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Skilled in implants and oral surgery.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  ],
  testimonials: [
    { quote: "Living out in Hockley, we weren't sure we'd find a modern dental office nearby. Smile Avenue exceeded every expectation.", name: "Robert H.", source: "Google Review", location: "Hockley, TX" },
    { quote: "The whole family loves Smile Avenue. It's only 12 minutes from our house and the care is exceptional.", name: "Jennifer S.", source: "Google Review", location: "Hockley, TX" },
    { quote: "Had a dental emergency on a weekday and they got me in within the hour. Couldn't be more grateful.", name: "Michael T.", source: "Google Review", location: "Hockley, TX" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Hockley?", answer: "Our Cypress office at 9212 Fry Rd is approximately 12 minutes from Hockley via Mueschke Road or US-290." },
    { question: "Do you accept patients from Hockley?", answer: "Yes! We welcome all Hockley families. Book online or call (832) 648-1756." },
    { question: "What services are available?", answer: "We offer full-service dentistry: cleanings, implants, Invisalign, cosmetic dentistry, emergency care, pediatric dentistry, and oral surgery." },
    { question: "Do you offer emergency dental care?", answer: "Yes — same-day emergency appointments are available. Call us immediately at (832) 648-1756." },
    { question: "Is sedation available for nervous patients?", answer: "Yes. We offer nitrous oxide, oral sedation, and IV sedation for complete comfort during any procedure." },
    { question: "Do you accept new patients?", answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online in under 60 seconds or call us directly. We offer same-day appointments for emergencies and typically schedule new patient exams within a few days." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
