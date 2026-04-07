import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "katy",
  neighborhoodName: "Westheimer Parkway",
  slug: "westheimer-parkway-dentist",
  metaTitle: "Dentist on Westheimer Parkway, Katy TX | Smile Avenue Family Dentistry",
  metaDescription: "Dentist on Westheimer Pkwy in Katy, TX. Walk-ins & Saturday appointments. Implants, Invisalign, emergency & family care. 4.9★ rated. Call (281) 800-5008.",
  heroHeading: "Your Dentist on Westheimer Parkway — Walk In, Walk Out Smiling",
  heroImage: OFFICE_IMAGES.contactHero,
  heroSubheading: "Walk-in from the Westheimer Parkway corridor — we're right here at Ste #170.",
  heroBody: "Looking for a dentist right on Westheimer Parkway? You've found us. Smile Avenue Family Dentistry is located at 23541 Westheimer Pkwy Ste #170 — right in the middle of Katy's busiest corridor. Whether you work nearby, live in the area, or are just passing through, quality dental care is steps away.",
  heroValueProps: ["Right on Westheimer Parkway", "Same-day & Saturday appointments", "In-house dental lab for faster results", "Most insurance accepted · 0% financing", "4.9★ from 5,000+ Google reviews"],
  contentParagraphs: [
    "The Westheimer Parkway corridor is the beating heart of Katy, TX — connecting communities from Cinco Ranch to Katy Mills and beyond. Smile Avenue Family Dentistry is strategically located right on this corridor at 23541 Westheimer Pkwy Ste #170, making us the most convenient dental choice for anyone who lives, works, or shops along Westheimer.",
    "Whether you're popping in between errands, scheduling during your lunch break from a nearby office, or bringing the whole family on a Saturday morning, our location on Westheimer Parkway makes dental care fit seamlessly into your routine.",
    "Our office serves a diverse range of patients from the Westheimer Parkway area — from young professionals in nearby apartments to established families in surrounding neighborhoods like Cinco Ranch, Seven Meadows, and Grand Lakes. We offer bilingual care in English and Spanish.",
    "As a full-service dental practice with five dentists on staff, we can handle everything from routine cleanings to same-day emergency visits, dental implants, Invisalign, and complete smile makeovers. No matter what brought you to Westheimer Parkway today, we're ready to help.",
  ],
  whyChooseHeading: "Why Westheimer Parkway Patients Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "Right on Westheimer Parkway", description: "No detours needed. We're at 23541 Westheimer Pkwy Ste #170 — right where you already are." },
    { icon: <Clock className="w-5 h-5" />, title: "Walk-In Emergency Care", description: "Dental emergency? Walk in from Westheimer Parkway for same-day treatment." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance & Financing", description: "Most major insurance accepted plus in-house membership and financing options." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "5 Dentists Available", description: "More dentists means more availability. Find an appointment that works for your schedule." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Lunch Hour Appointments", description: "Quick cleanings and consultations that fit into your workday along the Westheimer corridor." },
    { icon: <Heart className="w-5 h-5" />, title: "Bilingual Team", description: "Our team speaks English and Spanish for comfortable communication." },
  ],
  directionsHeading: "Finding Us on Westheimer Parkway",
  directionsBody: [
    "We're located at 23541 Westheimer Pkwy Ste #170, Katy, TX 77494. If you're driving on Westheimer Parkway, look for our shopping center on the south side of the road — we're between the Grand Parkway (99) and Cinco Ranch Boulevard.",
    "From the Katy Mills area, head west on Katy Fort Bend Road to Westheimer Parkway, then turn left. Our office is a few minutes ahead on the right.",
    "From I-10 or the Grand Parkway (99), take the Westheimer Parkway exit and head west. You'll find us quickly on the right side.",
  ],
  crossStreets: "Westheimer Parkway near Grand Parkway (99), Katy TX",
  driveTime: "0–5 minutes along Westheimer Parkway",
  featuredServices: [
    { title: "Emergency Dentist", href: "/katy-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Dental Implants", href: "/katy-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Teeth Whitening", href: "/katy-tx/teeth-whitening", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Invisalign", href: "/katy-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/katy-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Dental Crowns", href: "/katy-tx/dental-crowns", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "Compassionate, detail-oriented general dentistry.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
    { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Passionate about cosmetic and family dentistry.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  ],
  testimonials: [
    { quote: "I work on Westheimer Parkway and Smile Avenue is perfect for lunch-hour appointments. Quick, professional, and high quality.", name: "Jason T.", source: "Google Review" , location: "Westheimer Pkwy, Katy" },
    { quote: "Walked in with a dental emergency and they treated me the same day. Can't beat the convenience of this location.", name: "Linda M.", source: "Google Review" , location: "Westheimer Pkwy, Katy" },
    { quote: "The most convenient dental office in Katy. Right on Westheimer Parkway, easy parking, and amazing staff.", name: "Omar A.", source: "Google Review" , location: "Westheimer Pkwy, Katy" },
  ],
  faqs: [
    { question: "Where exactly on Westheimer Parkway is Smile Avenue?", answer: "We're at 23541 Westheimer Pkwy Ste #170, Katy, TX 77494 — on the south side of Westheimer Parkway between Grand Parkway (99) and Cinco Ranch Boulevard." },
    { question: "Do you accept walk-in patients from Westheimer Parkway?", answer: "Yes! We welcome walk-in patients, especially for dental emergencies. For routine care, we recommend booking online or calling (281) 800-5008." },
    { question: "What are your hours on Westheimer Parkway?", answer: "We're open Monday through Friday 8:30am–5pm, with Saturday hours (8am–2pm) available at the Katy location." },
    { question: "Is parking available at your Westheimer Parkway office?", answer: "Yes, we have free parking directly in front of our suite. The office is ground-level with easy access." },
    { question: "Do you accept dental insurance?", answer: "Yes, we accept most major dental insurance plans including Aetna, BCBS, Cigna, Delta Dental, MetLife, and United Healthcare." },
    { question: "Do you accept new patients?", answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online in under 60 seconds or call us directly. We offer same-day appointments for emergencies and typically schedule new patient exams within a few days." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
