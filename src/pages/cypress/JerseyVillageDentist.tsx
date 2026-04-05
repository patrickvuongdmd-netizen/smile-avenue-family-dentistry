import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "cypress",
  neighborhoodName: "Jersey Village",
  slug: "jersey-village-dentist",
  metaTitle: "Dentist Near Jersey Village, TX | Smile Avenue Family Dentistry",
  metaDescription: "Jersey Village dentist near Jones Rd & FM 529. Same-day appointments, open Saturdays. Implants, Invisalign & emergency care. 4.9★. Call (832) 648-1756.",
  heroHeading: "Jersey Village Families — Your Trusted Dentist Is Just Minutes Away",
  heroImage: OFFICE_IMAGES.coffeeStation,
  heroSubheading: "Convenient, high-quality dental care for the Jersey Village and Jones Road corridor.",
  heroBody: "Jersey Village residents no longer need to drive into Houston for top-tier dental care. Smile Avenue Family Dentistry on Fry Road in Cypress is just 15 minutes from Jersey Village, offering a full range of services from routine cleanings to dental implants and Invisalign.",
  contentParagraphs: [
    "Jersey Village is a tight-knit, family-oriented community in the southeast corner of the greater Cypress area, known for its excellent schools, safe neighborhoods, and convenient access to Highway 290 and FM 529. Smile Avenue Family Dentistry is proud to serve Jersey Village families with comprehensive, compassionate dental care.",
    "Located on Fry Road in Cypress, our office is a comfortable drive from the Jones Road and FM 529 corridors that define the Jersey Village area. We've designed our practice to be the dental home that Jersey Village residents have been looking for — modern, welcoming, and equipped with the latest technology.",
    "Our Local Falcon data shows that Jersey Village is an underserved area for quality dental care, which is exactly why we're committed to reaching this community. Whether you need a simple cleaning, an emergency extraction, or a complete smile makeover, our team delivers the same exceptional care to every patient.",
    "We understand that trust matters in healthcare. That's why we take time to listen, explain your options, and never pressure you into treatments you don't need. Our 5,000+ five-star reviews speak to the relationships we've built with families across the greater Cypress area — including many from Jersey Village.",
  ],
  whyChooseHeading: "Why Jersey Village Residents Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "15 Minutes from Jersey Village", description: "A quick drive west on FM 529 to Fry Road. Easy access, plenty of free parking." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Emergency Visits", description: "Broken tooth? Severe pain? We offer same-day emergency appointments." },
    { icon: <Shield className="w-5 h-5" />, title: "Most Insurance Accepted", description: "We work with Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare, and more." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Expert Dentists", description: "Our team includes specialists in implants, cosmetic dentistry, and pediatric care." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Cosmetic Transformations", description: "Veneers, teeth whitening, and Invisalign to give you the smile you've always wanted." },
    { icon: <Heart className="w-5 h-5" />, title: "Gentle, Judgment-Free Care", description: "Haven't been to the dentist in years? No judgment here. We'll get you back on track." },
  ],
  directionsHeading: "Getting Here from Jersey Village",
  directionsBody: [
    "From Jersey Village, head west on FM 529 (Spencer Road) toward Fry Road. Turn right (north) on Fry Road and continue past the 290 intersection. Our office is at 9212 Fry Rd #120, on the right side near Tuckerton Road.",
    "Alternatively, you can take Jones Road north to FM 1960, then head west to Fry Road. Both routes take approximately 15 minutes in normal traffic.",
    "Our office is in a convenient shopping center with plenty of free parking. Look for the Smile Avenue Family Dentistry sign near the main entrance.",
  ],
  crossStreets: "Fry Road & Tuckerton Road, Cypress TX",
  driveTime: "Approximately 15 minutes from Jersey Village",
  featuredServices: [
    { title: "Emergency Dentist", href: "/cypress-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Dental Implants", href: "/cypress-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Invisalign", href: "/cypress-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Teeth Whitening", href: "/cypress-tx/teeth-whitening", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/cypress-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Sedation Dentistry", href: "/cypress-tx/sedation-dentistry", icon: <Heart className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Peter Kim", credentials: "DDS", bio: "Patient-focused general and restorative dentistry.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
    { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Skilled in implants and oral surgery.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  ],
  testimonials: [
    { quote: "I drive from Jersey Village and it's totally worth it. The care here is far better than anything closer to home.", name: "Tony R.", source: "Google Review" , location: "Jersey Village" },
    { quote: "Found Smile Avenue after a bad experience at another office. What a difference! Professional, kind, and thorough.", name: "Angela M.", source: "Google Review" , location: "Jersey Village" },
    { quote: "Dr. Yahya did my implant and the whole process was smooth and painless. Highly recommend from Jersey Village!", name: "Robert C.", source: "Google Review" , location: "Jersey Village" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Jersey Village?", answer: "Our Cypress office is approximately 15 minutes west of Jersey Village via FM 529 and Fry Road. It's a straightforward drive with no highway tolls." },
    { question: "Do you accept new patients from Jersey Village?", answer: "Yes! We welcome new patients from Jersey Village, the Jones Road corridor, and all surrounding areas. Book online or call (832) 648-1756." },
    { question: "What dental services do you offer near Jersey Village?", answer: "We offer cleanings, exams, implants, Invisalign, veneers, emergency care, root canals, crowns, pediatric dentistry, sedation dentistry, and more." },
    { question: "Is sedation available for dental anxiety?", answer: "Yes! We offer sedation dentistry options for patients who experience dental anxiety. Our team will ensure you're comfortable throughout your visit." },
    { question: "Do you offer payment plans for Jersey Village patients?", answer: "Yes. In addition to accepting most major insurance plans, we offer an in-house membership plan and flexible financing options." },
    { question: "Do you accept new patients?", answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online in under 60 seconds or call us directly. We offer same-day appointments for emergencies and typically schedule new patient exams within a few days." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
