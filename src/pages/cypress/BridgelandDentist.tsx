import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";
const data: NeighborhoodPageData = {
  location: "cypress",
  neighborhoodName: "Bridgeland",
  slug: "bridgeland-dentist",
  metaTitle: "Dentist Near Bridgeland, TX | Smile Avenue Family Dentistry",
  metaDescription: "Looking for a dentist near Bridgeland, Cypress TX? Smile Avenue Family Dentistry is just 8 minutes from Bridgeland. Same-day appointments, family-friendly care. Call (832) 648-1756.",
  heroHeading: "Your Bridgeland Family Dentist — Just Minutes Away",
  heroImage: OFFICE_IMAGES.hallway,
  heroSubheading: "Serving Bridgeland families with modern, comfortable dental care since 2018.",
  heroBody: "Smile Avenue Family Dentistry is the trusted dental home for Bridgeland residents. Located on Fry Road, just 8 minutes from Bridgeland via Tuckerton Road, we offer comprehensive dental care for the whole family — from routine cleanings to dental implants and Invisalign.",
  contentParagraphs: [
    "Bridgeland is one of Cypress's most vibrant and family-oriented communities, and Smile Avenue Family Dentistry is proud to serve as the neighborhood's go-to dental practice. Whether you're heading home from a walk around Josey Lake or picking up the kids from a playdate at Bridgeland Central Park, our office is a quick and easy stop on Fry Road.",
    "We understand the needs of Bridgeland families — busy schedules, growing kids, and the desire for high-quality care without a long drive. That's why we offer same-day appointments, early morning scheduling, and a full range of services under one roof. From your child's first dental visit to advanced cosmetic procedures, you won't need to travel far.",
    "Our state-of-the-art Cypress office features digital X-rays, intraoral cameras, and an in-house dental lab for faster turnaround on crowns and restorations. Conveniently located at 9212 Fry Rd, we've been serving Bridgeland families since opening our doors — and we'd love to welcome yours.",
    "Many of our Bridgeland patients tell us they chose Smile Avenue because of our warm, judgment-free environment and our team's ability to put nervous patients at ease. Whether it's been six months or six years since your last visit, you'll feel right at home here.",
  ],
  whyChooseHeading: "Why Bridgeland Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "Just 8 Minutes from Bridgeland", description: "Quick drive down Tuckerton Road to Fry Road. No highway hassle — we're right in the neighborhood." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Appointments", description: "Dental emergencies don't wait. Neither do we. Same-day availability for Bridgeland families." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance & Financing Options", description: "We accept most major insurance plans and offer flexible payment options including our in-house membership plan." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Full-Service Dentistry", description: "Cleanings, implants, Invisalign, emergency care — everything under one roof near Bridgeland." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Modern Technology", description: "Digital X-rays, 3D imaging, and an in-house dental lab for precise, efficient treatments." },
    { icon: <Heart className="w-5 h-5" />, title: "Family-Friendly Environment", description: "A warm, welcoming office where kids and adults alike feel comfortable. Hablamos Español." },
  ],
  directionsHeading: "Getting Here from Bridgeland",
  directionsBody: [
    "From the Bridgeland community, head south on Bridgeland Creek Parkway to Tuckerton Road. Turn right (west) on Tuckerton Road and continue to Fry Road. Turn left (south) on Fry Road — our office is on the right side in the shopping center at 9212 Fry Rd #120.",
    "The drive takes about 8 minutes in normal traffic. We're located in the same shopping center as other neighborhood conveniences, with plenty of free parking. Look for the Smile Avenue Family Dentistry sign near the Fry Road entrance.",
    "If you're coming from Trestle Park or the western side of Bridgeland, take Cypress Rosehill Road to Fry Road for an equally quick route.",
  ],
  crossStreets: "Fry Road & Tuckerton Road, Cypress TX",
  driveTime: "Approximately 8 minutes from Bridgeland",
  featuredServices: [
    { title: "Dental Implants", href: "/cypress-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Invisalign", href: "/cypress-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/cypress-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/cypress-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/cypress-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Peter Kim", credentials: "DDS", bio: "Patient-focused general and restorative dentistry.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
    { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Skilled in implants and oral surgery.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  ],
  testimonials: [
    { quote: "We live in Bridgeland and love how close Smile Avenue is. The whole family goes here — even the kids love it!", name: "Rachel M.", source: "Google Review" },
    { quote: "Dr. Vuong is incredibly gentle and thorough. The office is modern and the staff is always welcoming.", name: "James T.", source: "Google Review" },
    { quote: "Switched from another dentist in the area and couldn't be happier. Easy scheduling, no wait times, and great care.", name: "Sarah L.", source: "Google Review" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Bridgeland?", answer: "Our Cypress office at 9212 Fry Rd is approximately 8 minutes from the Bridgeland community via Tuckerton Road. It's a quick, convenient drive with no highway needed." },
    { question: "Do you accept new patients from Bridgeland?", answer: "Absolutely! We welcome new patients from Bridgeland and all surrounding Cypress communities. You can book online or call (832) 648-1756 to schedule your first visit." },
    { question: "What dental services do you offer near Bridgeland?", answer: "We offer comprehensive dental care including cleanings, exams, dental implants, Invisalign, cosmetic dentistry, emergency care, pediatric dentistry, and more — all at our Fry Road location." },
    { question: "Do you offer same-day dental appointments for Bridgeland residents?", answer: "Yes! We offer same-day appointments for dental emergencies and often have same-day availability for routine visits. Call us at (832) 648-1756." },
    { question: "Is Smile Avenue a family-friendly dental office?", answer: "Yes! We treat patients of all ages, from toddlers to seniors. Our Bridgeland families love our kid-friendly approach and comfortable environment." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
