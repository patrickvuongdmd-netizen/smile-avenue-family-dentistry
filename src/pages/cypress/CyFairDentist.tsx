import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";

const data: NeighborhoodPageData = {
  location: "cypress",
  neighborhoodName: "Cy-Fair",
  slug: "cyfair-dentist",
  metaTitle: "Dentist in Cy-Fair, TX | Smile Avenue Family Dentistry",
  metaDescription: "Top-rated Cy-Fair dentist serving the Cy-Fair ISD area, Jersey Village & Willowbrook. Full-service dental care at Smile Avenue on Fry Road. Call (832) 648-1756.",
  heroHeading: "Your Cy-Fair Dentist — Comprehensive Care for the Whole Family",
  heroSubheading: "Proudly serving the greater Cy-Fair community from our Fry Road office.",
  heroBody: "The Cy-Fair area is home to some of Houston's best families — and Smile Avenue Family Dentistry is proud to be their trusted dental practice. Located on Fry Road in the heart of Cypress, we serve patients from across the Cy-Fair ISD area, Jersey Village, and the Willowbrook corridor.",
  contentParagraphs: [
    "Cy-Fair is more than a school district — it's a community. Spanning from Jersey Village to Cypress and touching the Willowbrook and FM 529 corridors, the Cy-Fair area represents hundreds of thousands of families who deserve convenient, high-quality dental care.",
    "Smile Avenue Family Dentistry sits at the center of this community on Fry Road, making us easily accessible from virtually anywhere in the Cy-Fair area. Whether you live near Cy-Fair High School, work along Highway 290, or shop at the Willowbrook Mall, our office is a short drive away.",
    "Our practice was founded with Cy-Fair families in mind. We know this community values trust, quality, and convenience — and that's exactly what we deliver. Our team of experienced dentists provides everything from preventive cleanings and children's dentistry to complex restorative work like dental implants and full-mouth rehabilitations.",
    "We're also deeply connected to the Cy-Fair community. Many of our team members live in the area, and we're committed to giving back through local partnerships and educational initiatives. When you choose Smile Avenue, you're choosing a dental home that's invested in Cy-Fair's future.",
  ],
  whyChooseHeading: "Why Cy-Fair Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "Central Cy-Fair Location", description: "On Fry Road in Cypress, easily accessible from Jersey Village, Willowbrook, and the 290 corridor." },
    { icon: <Clock className="w-5 h-5" />, title: "Flexible Scheduling", description: "Same-day appointments, early mornings, and Saturday availability by request." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance-Friendly", description: "We accept most major dental insurance plans and offer affordable in-house membership options." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Full Spectrum of Services", description: "From kids' checkups to dental implants and Invisalign — no referrals needed for most procedures." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Modern, Comfortable Office", description: "State-of-the-art technology in a warm, welcoming environment built for patient comfort." },
    { icon: <Heart className="w-5 h-5" />, title: "Community-Rooted Practice", description: "Our team lives and works in Cy-Fair. We're your neighbors, not a corporate chain." },
  ],
  directionsHeading: "Getting Here from the Cy-Fair Area",
  directionsBody: [
    "From the Cy-Fair ISD central area, take US-290 West to the Fry Road exit. Head north on Fry Road — our office is at 9212 Fry Rd #120, on the right side near the Tuckerton Road intersection.",
    "From Jersey Village, take Jones Road north to FM 529, then head west to Fry Road. Turn right (north) on Fry Road and continue to our shopping center location.",
    "From the Willowbrook area, take FM 1960 west to Fry Road, then head north. The drive is typically 15–20 minutes depending on your starting point.",
  ],
  crossStreets: "Fry Road & Tuckerton Road, Cypress TX",
  driveTime: "10–20 minutes from most Cy-Fair locations",
  featuredServices: [
    { title: "Dental Implants", href: "/cypress-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Invisalign", href: "/cypress-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/cypress-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/cypress-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/cypress-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Peter Kim", credentials: "DDS", bio: "Patient-focused general and restorative dentistry.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
    { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Skilled in implants and oral surgery.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  ],
  testimonials: [
    { quote: "Best dentist in the Cy-Fair area, hands down. The team is professional, caring, and always on time.", name: "David K.", source: "Google Review" },
    { quote: "I've lived in Cy-Fair for 20 years and this is the best dental office I've found. Dr. Vuong is exceptional.", name: "Maria F.", source: "Google Review" },
    { quote: "Switched to Smile Avenue from a chain dental office and the difference is night and day. Personalized care you can trust.", name: "Brian H.", source: "Google Review" },
  ],
  faqs: [
    { question: "Where is Smile Avenue located relative to the Cy-Fair area?", answer: "We're located at 9212 Fry Rd #120 in Cypress, TX — centrally positioned for families across the Cy-Fair ISD area, Jersey Village, and Willowbrook." },
    { question: "Do you accept patients from across the Cy-Fair community?", answer: "Absolutely! We serve patients from all Cy-Fair neighborhoods including Jersey Village, Langham Creek, Cypress Ranch, and more." },
    { question: "What services are available at your Cy-Fair area office?", answer: "We offer cleanings, implants, Invisalign, crowns, veneers, emergency dental care, pediatric dentistry, sedation options, and more." },
    { question: "Do you offer sedation dentistry for anxious Cy-Fair patients?", answer: "Yes! We offer sedation dentistry options to help nervous patients feel relaxed and comfortable during their treatment." },
    { question: "How do I schedule my first appointment?", answer: "You can book online through our website or call (832) 648-1756. We make the new patient process simple and stress-free." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
