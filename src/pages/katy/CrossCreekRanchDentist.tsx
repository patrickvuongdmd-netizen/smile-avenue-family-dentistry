import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "katy",
  neighborhoodName: "Cross Creek Ranch",
  slug: "cross-creek-ranch-dentist",
  metaTitle: "Dentist Near Cross Creek Ranch, Katy TX | Smile Avenue Family Dentistry",
  metaDescription: "Cross Creek Ranch dentist on Westheimer Pkwy near Fulshear. Same-day & Saturday appointments. Implants, Invisalign & family care. 4.9★. Call (281) 800-5008.",
  heroHeading: "Cross Creek Ranch Families — Your Dentist on Westheimer Parkway",
  heroImage: OFFICE_IMAGES.patientCare,
  heroSubheading: "Comprehensive dental care minutes from Cross Creek Ranch and Fulshear.",
  heroBody: "Cross Creek Ranch and the growing Fulshear corridor deserve a dental practice that matches the quality of their community. Smile Avenue Family Dentistry on Westheimer Parkway delivers modern, full-service dental care for families of all sizes — and we're just a short drive away.",
  contentParagraphs: [
    "Cross Creek Ranch is one of the fastest-growing communities in the greater Katy-Fulshear area, attracting families who appreciate beautiful master-planned living with resort-style amenities. Smile Avenue Family Dentistry is committed to serving this growing community with the highest standard of dental care.",
    "Our Katy office at 23541 Westheimer Pkwy Ste #170 is conveniently accessible from Cross Creek Ranch via FM 1093 (Westheimer Parkway). The drive is quick and direct, with no highway tolls or congestion to worry about.",
    "As Cross Creek Ranch continues to grow, we've expanded our team to meet the demand. Our Katy location now has five dentists on staff, ensuring shorter wait times and more appointment availability for Cross Creek Ranch families.",
    "Whether you're looking for a pediatric dentist for your children, an Invisalign provider for your teen, or a cosmetic dentist for yourself, our team has the expertise to deliver beautiful, lasting results. We also offer dental implants, emergency care, and sedation options for anxious patients.",
  ],
  whyChooseHeading: "Why Cross Creek Ranch Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "Easy Access from FM 1093", description: "A direct drive from Cross Creek Ranch via FM 1093/Westheimer Parkway. No highway needed." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Availability", description: "Emergency visits and same-day scheduling for Cross Creek Ranch families." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance Accepted", description: "We accept most major dental insurance plans and offer flexible payment options." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "5 Experienced Dentists", description: "A large team means more availability and shorter wait times for your family." },
    { icon: <Sparkles className="w-5 h-5" />, title: "Complete Service Range", description: "Implants, Invisalign, veneers, cleanings, pediatric care — all in one location." },
    { icon: <Heart className="w-5 h-5" />, title: "Patient-Centered Care", description: "We listen first, then create a personalized plan that fits your goals and budget." },
  ],
  directionsHeading: "Getting Here from Cross Creek Ranch",
  directionsBody: [
    "From Cross Creek Ranch, head east on FM 1093 (which becomes Westheimer Parkway as you approach Katy). Continue east on Westheimer Parkway — our office is at 23541 Westheimer Pkwy Ste #170 on the right side.",
    "The drive takes approximately 10–15 minutes depending on your starting point within Cross Creek Ranch. If you're coming from the Fulshear side of the community, FM 1093 provides a direct route.",
    "Free parking is available directly in front of our suite, and the office is ground-level with easy access.",
  ],
  crossStreets: "Westheimer Parkway (FM 1093), Katy TX",
  driveTime: "Approximately 10–15 minutes from Cross Creek Ranch",
  featuredServices: [
    { title: "Dental Implants", href: "/katy-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/katy-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/katy-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/katy-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
    { title: "Invisalign", href: "/katy-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/katy-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "Compassionate, detail-oriented general dentistry.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
    { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Passionate about cosmetic and family dentistry.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  ],
  testimonials: [
    { quote: "We moved to Cross Creek Ranch and needed a new dentist. Smile Avenue exceeded our expectations in every way.", name: "Daniel H.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "Convenient location on Westheimer Parkway, professional staff, and Dr. Maredia is fantastic with kids.", name: "Patricia K.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "Been going here for two years from Cross Creek Ranch. Wouldn't go anywhere else — they truly care about their patients.", name: "Ryan S.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Cross Creek Ranch?", answer: "Our Katy office at 23541 Westheimer Pkwy is approximately 10–15 minutes from Cross Creek Ranch via FM 1093/Westheimer Parkway." },
    { question: "Do you accept new patients from Cross Creek Ranch?", answer: "Yes! We welcome new patients from Cross Creek Ranch, Fulshear, and all surrounding communities. Book online or call (281) 800-5008." },
    { question: "What services are available near Cross Creek Ranch?", answer: "We offer full-service dental care: cleanings, exams, implants, Invisalign, cosmetic procedures, emergency visits, pediatric care, and more." },
    { question: "Do you serve families with young children?", answer: "Absolutely! We provide pediatric dental care for children of all ages in a fun, welcoming environment." },
    { question: "Can I book an appointment online?", answer: "Yes! Visit our website to book online, or call (281) 800-5008 for immediate assistance." },
    { question: "Do you accept new patients?", answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online in under 60 seconds or call us directly. We offer same-day appointments for emergencies and typically schedule new patient exams within a few days." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
