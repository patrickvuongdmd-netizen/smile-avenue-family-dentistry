import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "katy",
  neighborhoodName: "Cinco Ranch",
  slug: "cinco-ranch-dentist",
  metaTitle: "Dentist in Cinco Ranch, Katy TX | Smile Avenue Family Dentistry",
  metaDescription: "Cinco Ranch dentist on Westheimer Parkway. Smile Avenue Family Dentistry is in the heart of Cinco Ranch — dental implants, Invisalign, cleanings & more. Call (281) 800-5008.",
  heroHeading: "Your Cinco Ranch Dentist — Right Here on Westheimer Parkway",
  heroImage: OFFICE_IMAGES.katyHero,
  heroSubheading: "Located at 23541 Westheimer Pkwy, in the heart of Cinco Ranch.",
  heroBody: "You don't have to leave Cinco Ranch for exceptional dental care. Smile Avenue Family Dentistry is located right on Westheimer Parkway at Ste #170 — walking distance from LaCenterra and minutes from anywhere in the Cinco Ranch community.",
  contentParagraphs: [
    "Cinco Ranch is one of Katy's premier master-planned communities, home to families who value quality, convenience, and community. Smile Avenue Family Dentistry shares those values — and we're proud to call Westheimer Parkway home.",
    "Our Katy office at 23541 Westheimer Pkwy Ste #170 is ideally positioned for Cinco Ranch residents. Whether you're grabbing coffee at LaCenterra, picking up groceries, or heading home along Cinco Ranch Boulevard, stopping by for a dental visit is effortless.",
    "We've built our Katy practice specifically to serve the Cinco Ranch community and surrounding neighborhoods. Our team of five experienced dentists — including specialists in implants, cosmetic dentistry, and periodontics — means you can get virtually any dental procedure done without leaving your neighborhood.",
    "From your child's first visit to complex restorative work, Smile Avenue delivers the kind of personalized, unhurried care that Cinco Ranch families expect. No assembly-line dentistry here — every patient gets the time and attention they deserve.",
    "We also understand that Cinco Ranch families are busy. That's why we offer same-day appointments, online booking, and a streamlined check-in process that respects your time.",
  ],
  whyChooseHeading: "Why Cinco Ranch Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "On Westheimer Parkway", description: "Right in the heart of Cinco Ranch at 23541 Westheimer Pkwy. No driving across Katy — we're in your neighborhood." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Appointments", description: "Walk-in emergency care and same-day scheduling for busy Cinco Ranch families." },
    { icon: <Shield className="w-5 h-5" />, title: "All Major Insurance Accepted", description: "Aetna, BCBS, Cigna, Delta Dental, MetLife, United Healthcare — we've got you covered." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Experienced Dentists", description: "Our Katy team includes Dr. Vuong, Dr. Bilal, Dr. Maredia, and more — serving families with excellence." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Advanced Cosmetic Options", description: "Veneers, Invisalign, teeth whitening, and complete smile makeovers — all on Westheimer Pkwy." },
    { icon: <Heart className="w-5 h-5" />, title: "Bilingual Care", description: "Hablamos Español. Our multilingual team ensures every patient feels understood." },
  ],
  directionsHeading: "Getting Here from Cinco Ranch",
  directionsBody: [
    "We're right on Westheimer Parkway! From anywhere in Cinco Ranch, simply head to Westheimer Parkway and look for our office at 23541 Westheimer Pkwy Ste #170. We're in the same corridor as many of the shops and restaurants you already visit.",
    "If you're coming from the LaCenterra area, we're just a 2-minute drive east on Westheimer Parkway. From Cinco Ranch Boulevard or the Grand Parkway (99), take Westheimer Parkway west — you'll see us on the right.",
    "Free parking is available directly in front of our suite. The office is ground-level with easy accessibility.",
  ],
  crossStreets: "Westheimer Parkway near Cinco Ranch Blvd, Katy TX",
  driveTime: "2–5 minutes from anywhere in Cinco Ranch",
  featuredServices: [
    { title: "Dental Implants", href: "/katy-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Invisalign", href: "/katy-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/katy-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/katy-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/katy-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/katy-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "Compassionate, detail-oriented general dentistry.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
    { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Passionate about cosmetic and family dentistry.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  ],
  testimonials: [
    { quote: "We live in Cinco Ranch and this is hands-down the best dental office in the area. The whole family comes here.", name: "Stephanie L.", source: "Google Review" },
    { quote: "Love that they're right on Westheimer Parkway. I pop in during lunch for my appointments. So convenient!", name: "Kevin W.", source: "Google Review" },
    { quote: "Dr. Chang is amazing with my kids. They actually enjoy going to the dentist now!", name: "Natalie B.", source: "Google Review" },
  ],
  faqs: [
    { question: "Where exactly is Smile Avenue in Cinco Ranch?", answer: "We're located at 23541 Westheimer Pkwy Ste #170, Katy, TX 77494 — right on Westheimer Parkway in the heart of Cinco Ranch. Most residents can reach us in under 5 minutes." },
    { question: "Do you accept new patients from Cinco Ranch?", answer: "Yes! We love welcoming new Cinco Ranch families. Book online or call (281) 800-5008 to schedule your first visit." },
    { question: "What services do you offer in Cinco Ranch?", answer: "We offer comprehensive dental care: cleanings, implants, Invisalign, veneers, crowns, emergency care, pediatric dentistry, sedation options, and more." },
    { question: "Is Smile Avenue open on Saturdays for Cinco Ranch patients?", answer: "We offer Saturday appointments by request. Call (281) 800-5008 to check availability." },
    { question: "Do you have a membership plan for patients without insurance?", answer: "Yes! Our in-house membership plan provides affordable preventive care and discounts on all treatments. Ask our team for details." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
