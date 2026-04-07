import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "cypress",
  neighborhoodName: "Fairfield",
  slug: "fairfield-dentist",
  metaTitle: "Dentist Near Fairfield, Cypress TX | Smile Avenue Family Dentistry",
  metaDescription: "Fairfield dentist minutes away in Cypress, TX. Same-day & Saturday appointments for implants, cleanings, emergencies & Invisalign. 4.9★. Call (832) 648-1756.",
  heroHeading: "Your Fairfield Neighborhood Dentist — Quality Care, Close to Home",
  heroImage: OFFICE_IMAGES.treatmentRoom,
  heroSubheading: "Serving Fairfield Village and southeast Cypress with expert dental care.",
  heroBody: "Fairfield families deserve a dentist who combines convenience with excellence. Smile Avenue Family Dentistry on Fry Road is just a short drive from Fairfield Village, offering the full spectrum of dental services — from children's checkups to dental implants and cosmetic makeovers.",
  heroValueProps: ["Minutes from Fairfield", "Same-day & Saturday appointments", "In-house dental lab for faster results", "Most insurance accepted · 0% financing", "4.9★ from 5,000+ Google reviews"],
  contentParagraphs: [
    "Fairfield is one of southeast Cypress's most established and welcoming communities, nestled along Cypress Creek with beautiful green spaces and a strong sense of neighborhood pride. Smile Avenue Family Dentistry is honored to be the dental practice that Fairfield families depend on.",
    "Located on Fry Road, our office is an easy, direct drive from the Fairfield community. Whether you're coming from Fairfield Village Boulevard or the Cypress Creek trails, you'll find us conveniently positioned at 9212 Fry Rd #120 — no highway driving required.",
    "We know that southeast Cypress residents have limited options for high-quality dental care without driving into Houston. That's exactly why we built our practice here — to give communities like Fairfield access to state-of-the-art dentistry right in the neighborhood.",
    "Our team is committed to providing gentle, thorough care for patients of all ages. Whether your child needs their first dental exam or you're considering dental implants, our experienced doctors will create a personalized treatment plan that fits your goals and budget.",
    "We also offer flexible scheduling, including same-day emergency appointments and early morning slots, because we understand that Fairfield families lead busy lives.",
  ],
  whyChooseHeading: "Why Fairfield Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "Close to Fairfield Village", description: "A quick, direct drive on Fry Road — no highways, no hassle. Your neighborhood dentist." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Emergency Care", description: "Toothache? Broken crown? We offer same-day emergency appointments for Fairfield residents." },
    { icon: <Shield className="w-5 h-5" />, title: "Affordable Care Options", description: "We accept most insurance plans and offer an in-house membership plan for the uninsured." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Advanced Technology", description: "Digital X-rays, 3D imaging, and an on-site dental lab for precision and speed." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Cosmetic Expertise", description: "Veneers, whitening, Invisalign — transform your smile without leaving the neighborhood." },
    { icon: <Heart className="w-5 h-5" />, title: "All Ages Welcome", description: "Pediatric to senior care, we treat the whole family under one roof." },
  ],
  directionsHeading: "Getting Here from Fairfield",
  directionsBody: [
    "From the Fairfield community, head north on Fry Road. Our office is located at 9212 Fry Rd #120, in the shopping center on the west side of Fry Road near the Tuckerton Road intersection.",
    "The drive takes approximately 7–10 minutes depending on your starting point within Fairfield. If you're coming from the Cypress Creek side of the neighborhood, Fry Road provides a straight shot to our front door.",
    "Plenty of free parking is available at our shopping center location. The office is on the ground floor with easy accessibility.",
  ],
  crossStreets: "Fry Road near Tuckerton Road, Cypress TX",
  driveTime: "Approximately 7–10 minutes from Fairfield",
  featuredServices: [
    { title: "Emergency Dentist", href: "/cypress-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Dental Implants", href: "/cypress-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/cypress-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/cypress-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
    { title: "Root Canal", href: "/cypress-tx/root-canal", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Peter Kim", credentials: "DDS", bio: "Patient-focused general and restorative dentistry.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
    { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Skilled in implants and oral surgery.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  ],
  testimonials: [
    { quote: "So glad to have a great dentist this close to Fairfield. The team makes you feel like family from the moment you walk in.", name: "Carlos G.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "Had a dental emergency on a Wednesday and they got me in the same day. Amazing staff and Dr. Vuong fixed me up perfectly.", name: "Priya S.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "My kids actually look forward to their dental visits here. That says everything about this office.", name: "Jennifer W.", source: "Google Review" , location: "Fairfield, Cypress" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Fairfield, Cypress?", answer: "Our office at 9212 Fry Rd is approximately 7–10 minutes from the Fairfield community. It's a direct drive up Fry Road with no highway required." },
    { question: "Do you accept new patients from the Fairfield area?", answer: "Yes! We welcome new patients from Fairfield and all southeast Cypress neighborhoods. Book online or call (832) 648-1756." },
    { question: "What services do you offer near Fairfield?", answer: "We offer cleanings, exams, dental implants, Invisalign, cosmetic dentistry, emergency care, pediatric dentistry, crowns, veneers, and more." },
    { question: "Do you offer emergency dental care for Fairfield residents?", answer: "Absolutely. We offer same-day emergency appointments. If you have a dental emergency, call (832) 648-1756 immediately." },
    { question: "Do you treat children from the Fairfield community?", answer: "Yes! We love treating kids and offer a full range of pediatric dental services in a warm, fun environment." },
    { question: "Do you accept new patients?", answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online in under 60 seconds or call us directly. We offer same-day appointments for emergencies and typically schedule new patient exams within a few days." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
