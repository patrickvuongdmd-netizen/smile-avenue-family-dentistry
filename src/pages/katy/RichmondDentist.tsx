import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "katy",
  neighborhoodName: "Richmond",
  slug: "richmond-dentist",
  metaTitle: "Dentist Near Richmond, TX | Smile Avenue Family Dentistry Katy",
  metaDescription: "Richmond TX dentist 18 min away via Grand Parkway/US-59. Saturday hours, dental implants, Invisalign, family care. 4.9★ rating. Call (281) 800-5008.",
  heroHeading: "Richmond's Trusted Dentist — Modern Care at Smile Avenue Katy",
  heroImage: OFFICE_IMAGES.katyHero,
  heroSubheading: "Comprehensive dental care for Richmond families — just 18 minutes away.",
  heroBody: "Richmond families looking for a modern, full-service dental office choose Smile Avenue Family Dentistry in Katy. We're just 18 minutes north via the Grand Parkway or US-59, with Saturday hours, advanced technology, and a team that puts your comfort first.",
  contentParagraphs: [
    "Richmond, TX has a rich history and a growing community of families who deserve high-quality dental care. Smile Avenue Family Dentistry in Katy is the preferred dental home for many Richmond residents, offering the advanced technology and comprehensive services that are hard to find closer to home.",
    "Our Katy office on Westheimer Parkway is an easy 18-minute drive north via the Grand Parkway (SH 99) or US-59. Once you arrive, you'll experience dentistry the way it should be — comfortable, transparent, and thorough. Every room features Netflix, and our team provides warm blankets and noise-canceling headphones for your comfort.",
    "With six experienced doctors and an in-house dental lab, we handle everything from routine cleanings to dental implants, full-mouth rehabilitations, and pediatric dentistry. No referrals, no runarounds — just excellent care under one roof.",
    "Our Saturday hours (8am–2pm) make it easy for busy Richmond families to schedule appointments without taking time off work. And with 0% financing options, quality dental care is always accessible.",
  ],
  whyChooseHeading: "Why Richmond Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "18 Minutes from Richmond", description: "Easy drive north via Grand Parkway or US-59 to our Katy office." },
    { icon: <Clock className="w-5 h-5" />, title: "Saturday Hours Available", description: "Open Saturdays 8am–2pm. Evening and early morning slots available weekdays." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance & Financing", description: "Most PPO plans accepted. 0% financing with CareCredit and Sunbit." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Full-Service Dentistry", description: "Implants, Invisalign, cosmetic, emergency, pediatric — all in one location." },
    { icon: <Sparkles className="w-5 h-5" />, title: "In-House Dental Lab", description: "Same-day crowns and faster turnaround on all restorations." },
    { icon: <Heart className="w-5 h-5" />, title: "Comfort-First Approach", description: "Sedation options, Netflix, blankets — we make dental visits stress-free." },
  ],
  directionsHeading: "Getting Here from Richmond, TX",
  directionsBody: [
    "From Richmond, take US-59 North or the Grand Parkway (SH 99) North toward Katy. Exit at Westheimer Parkway/FM 1093 and head west. Our office is at 23541 Westheimer Pkwy Ste #170.",
    "The drive takes approximately 18 minutes in normal traffic. The Grand Parkway route avoids most US-59 congestion and is often the fastest option.",
    "We're located in the Villagio Town Center with plenty of free parking available directly in front of our office.",
  ],
  crossStreets: "Westheimer Parkway near Grand Parkway, Katy TX",
  driveTime: "Approximately 18 minutes from Richmond, TX",
  featuredServices: [
    { title: "Dental Implants", href: "/katy-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Invisalign", href: "/katy-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/katy-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/katy-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/katy-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/katy-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "General and cosmetic dentistry specialist.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
    { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Experienced in family and restorative dentistry.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  ],
  testimonials: [
    { quote: "We drive from Richmond every 6 months and it's completely worth it. The quality of care here is unmatched.", name: "Tony G.", source: "Google Review", location: "Richmond, TX" },
    { quote: "Saturday hours are perfect for our busy family. The kids love the Netflix in the rooms!", name: "Priya S.", source: "Google Review", location: "Richmond, TX" },
    { quote: "Dr. Vuong placed two implants for me and the results are amazing. The whole process was smooth and painless.", name: "William B.", source: "Google Review", location: "Richmond, TX" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Richmond, TX?", answer: "Our Katy office at 23541 Westheimer Pkwy is approximately 18 minutes from Richmond via Grand Parkway (SH 99) or US-59." },
    { question: "Do you offer Saturday appointments?", answer: "Yes! Our Katy location is open Saturdays 8am–2pm." },
    { question: "What services do you offer Richmond families?", answer: "We offer complete dental care: cleanings, implants, Invisalign, veneers, emergency care, pediatric dentistry, oral surgery, and sedation dentistry." },
    { question: "Do you accept dental insurance?", answer: "Yes — we accept most major PPO plans including Aetna, BCBS, Cigna, Delta Dental, MetLife, and United Healthcare." },
    { question: "Can I get sedation for dental work?", answer: "Absolutely. We offer nitrous oxide, oral sedation, and IV sedation for patients who experience dental anxiety." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
