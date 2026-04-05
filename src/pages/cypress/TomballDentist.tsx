import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "cypress",
  neighborhoodName: "Tomball",
  slug: "tomball-dentist",
  metaTitle: "Dentist Near Tomball, TX | Smile Avenue Family Dentistry Cypress",
  metaDescription: "Tomball TX dentist 15 min away via FM 2920. Same-day appointments, implants, Invisalign, family dentistry. 4.9★ Google. Call (832) 648-1756.",
  heroHeading: "Tomball's Trusted Family Dentist — Just 15 Minutes Away",
  heroImage: OFFICE_IMAGES.waitingRoom,
  heroSubheading: "Modern dental care for Tomball families at our Cypress office on Fry Road.",
  heroBody: "Smile Avenue Family Dentistry is a top choice for Tomball families seeking modern, comfortable dental care. Our Cypress office on Fry Road is just 15 minutes from Tomball via FM 2920. We offer everything from routine cleanings to advanced implants and Invisalign — all in a warm, judgment-free environment.",
  contentParagraphs: [
    "Tomball is a charming community with deep Texas roots, and Smile Avenue is proud to serve Tomball families with dentistry that matches the warmth and character of the town. Our Cypress office is a quick drive south on FM 2920, making it easy to fit dental appointments into your day.",
    "What sets us apart is our hospitality-first approach. Every treatment room features Netflix, noise-canceling headphones, and warm blankets. Our team takes the time to listen to your concerns before recommending treatment — because we believe great dentistry starts with great communication.",
    "Our in-house Smile Dental Lab gives Tomball patients faster results on crowns, bridges, and implant restorations. No waiting weeks for an outside lab — we craft your restoration right here for a perfect fit.",
    "Whether you need a simple cleaning, a complex smile makeover, or emergency care on a Saturday morning, Smile Avenue has you covered. Join the thousands of families across northwest Houston who trust us with their dental health.",
  ],
  whyChooseHeading: "Why Tomball Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "15 Minutes from Tomball", description: "Quick drive south on FM 2920 to Fry Road. Easy access, plenty of free parking." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Appointments", description: "Dental emergency? We offer same-day appointments and walk-in availability." },
    { icon: <Shield className="w-5 h-5" />, title: "Most Insurance Accepted", description: "We accept Aetna, BCBS, Cigna, Delta Dental, MetLife, and more. Plus 0% financing." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Comprehensive Services", description: "Implants, Invisalign, veneers, oral surgery, pediatric care — all under one roof." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Advanced Technology", description: "Digital scanners, 3D imaging, and our in-house dental lab for precision results." },
    { icon: <Heart className="w-5 h-5" />, title: "Judgment-Free Care", description: "Whether it's been 6 months or 6 years, we welcome you without judgment." },
  ],
  directionsHeading: "Getting Here from Tomball",
  directionsBody: [
    "From downtown Tomball, head south on FM 2920 (Tomball Parkway). Continue past the Tomball Tollway to Fry Road. Turn right (south) on Fry Road — our office is at 9212 Fry Rd #120.",
    "The drive takes approximately 15 minutes. You can also take SH 249 south to FM 1960, then head west to Fry Road for an alternate route.",
    "We're located in a convenient shopping center with ample free parking. Look for the Smile Avenue Family Dentistry sign on the right side of Fry Road.",
  ],
  crossStreets: "Fry Road near FM 2920, Cypress TX",
  driveTime: "Approximately 15 minutes from Tomball",
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
    { quote: "We switched from a Tomball dentist to Smile Avenue and the difference is night and day. The office is gorgeous and the care is top-notch.", name: "Kelly W.", source: "Google Review", location: "Tomball, TX" },
    { quote: "The drive from Tomball is only 15 minutes and so worth it. My kids love going to the dentist now!", name: "Marcus J.", source: "Google Review", location: "Tomball, TX" },
    { quote: "Got a same-day crown thanks to their in-house lab. No temporary, no second visit. Incredible.", name: "Linda P.", source: "Google Review", location: "Tomball, TX" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Tomball?", answer: "Our Cypress office is approximately 15 minutes from Tomball via FM 2920 South to Fry Road." },
    { question: "Do you accept new patients from Tomball?", answer: "Yes! We welcome patients from Tomball and all surrounding communities. Book online or call (832) 648-1756." },
    { question: "What dental services are available for Tomball patients?", answer: "We offer cleanings, implants, Invisalign, cosmetic dentistry, emergency care, pediatric dentistry, oral surgery, sedation, and more." },
    { question: "Do you have Saturday hours?", answer: "Our Cypress office does not currently offer Saturday hours, but our Katy location is open Saturdays 8am–2pm." },
    { question: "Is financing available?", answer: "Yes! We offer 0% financing through CareCredit and Sunbit, plus our in-house membership plan for patients without insurance." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
