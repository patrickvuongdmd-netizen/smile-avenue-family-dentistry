import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "katy",
  neighborhoodName: "Fulshear",
  slug: "fulshear-dentist",
  metaTitle: "Dentist Near Fulshear, TX | Smile Avenue Family Dentistry",
  metaDescription: "Fulshear dentist 15 min away on Westheimer Pkwy. Same-day & Saturday appointments. Implants, Invisalign, cleanings & more. 4.9★. Call (281) 800-5008.",
  heroHeading: "Fulshear Families — Your Trusted Dentist Is Just Down the Road",
  heroImage: OFFICE_IMAGES.aboutTeamAction,
  heroSubheading: "Expanding west to serve the growing Fulshear community with modern dental care.",
  heroBody: "Fulshear is booming — and its families deserve a dental practice that can keep up. Smile Avenue Family Dentistry on Westheimer Parkway in Katy is the closest top-rated dental office to Fulshear, offering everything from routine cleanings to dental implants and cosmetic transformations.",
  contentParagraphs: [
    "Fulshear is one of the fastest-growing cities in Texas, with new families moving into communities like Cross Creek Ranch, Jordan Ranch, and Tamarron every month. As the Fulshear area continues to develop, dental care options remain limited — which is why Smile Avenue Family Dentistry is committed to being Fulshear's go-to dental practice.",
    "Located on Westheimer Parkway in Katy, our office is a quick 12–15 minute drive from most Fulshear neighborhoods via FM 1093. There's no need to drive into Houston or navigate congested highways — just a straight shot east on Westheimer Parkway to our front door at 23541 Westheimer Pkwy Ste #170.",
    "Our team of five experienced dentists provides the full range of dental services, from pediatric first visits and preventive cleanings to advanced procedures like dental implants, All-on-X full-arch restorations, and Invisalign orthodontics. We've invested in the latest technology — including digital X-rays, 3D cone beam imaging, and an in-house dental lab — to deliver faster, more accurate results.",
    "We know that moving to a new area means finding new healthcare providers, and that can be stressful. At Smile Avenue, we make the transition easy with online booking, a streamlined new patient process, and a warm, welcoming team that treats every patient like family. Your Fulshear smile is in good hands.",
  ],
  whyChooseHeading: "Why Fulshear Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "15 Minutes from Fulshear", description: "A direct drive east on FM 1093/Westheimer Parkway. The closest top-rated dental practice to Fulshear." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Appointments", description: "Emergency or routine, we offer same-day scheduling for Fulshear families." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance & Membership Plans", description: "We accept most insurance and offer an affordable membership plan for uninsured patients." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "5 Dentists, Full Service", description: "A large team ensures availability. Implants, Invisalign, pediatric, cosmetic — all under one roof." },
    { icon: <Sparkles className="w-5 h-5" />, title: "In-House Dental Lab", description: "Custom crowns and faster restorations from our on-site Smile Dental Lab." },
    { icon: <Heart className="w-5 h-5" />, title: "New Patient Friendly", description: "New to Fulshear? We make the new patient process simple, fast, and welcoming." },
  ],
  directionsHeading: "Getting Here from Fulshear",
  directionsBody: [
    "From Fulshear, head east on FM 1093 (Westheimer Parkway). Continue east past the Grand Parkway (99) — our office is at 23541 Westheimer Pkwy Ste #170 on the right side, just east of the Grand Parkway interchange.",
    "The drive takes approximately 12–15 minutes from central Fulshear. If you're coming from Cross Creek Ranch or Jordan Ranch, the drive may be even shorter.",
    "Free parking is available directly in front of our suite. The office is ground-level and easily accessible from the parking lot.",
  ],
  crossStreets: "Westheimer Parkway (FM 1093) near Grand Parkway (99), Katy TX",
  driveTime: "Approximately 12–15 minutes from Fulshear",
  featuredServices: [
    { title: "Dental Implants", href: "/katy-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Invisalign", href: "/katy-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", href: "/katy-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/katy-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/katy-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/katy-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "Compassionate, detail-oriented general dentistry.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
    { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Passionate about cosmetic and family dentistry.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  ],
  testimonials: [
    { quote: "We moved to Fulshear recently and Smile Avenue has been a lifesaver. Great dentists, modern office, and so close to home.", name: "Emily R.", source: "Google Review" , location: "Fulshear" },
    { quote: "The drive from Fulshear is easy and the care is worth every minute. Dr. Vuong and his team are top-notch.", name: "Greg M.", source: "Google Review" , location: "Fulshear" },
    { quote: "Finally found a dental office near Fulshear that the whole family loves. Professional, kind, and thorough.", name: "Shannon B.", source: "Google Review" , location: "Fulshear" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Fulshear?", answer: "Our Katy office at 23541 Westheimer Pkwy is approximately 12–15 minutes east of Fulshear via FM 1093/Westheimer Parkway." },
    { question: "Do you accept new patients from Fulshear?", answer: "Yes! We welcome new patients from Fulshear, Cross Creek Ranch, Jordan Ranch, and all surrounding communities. Book online or call (281) 800-5008." },
    { question: "What services do you offer near Fulshear?", answer: "We offer comprehensive dental care including cleanings, exams, dental implants, Invisalign, cosmetic dentistry, emergency care, pediatric dentistry, and more." },
    { question: "Is there a dentist closer to Fulshear?", answer: "While the Fulshear area is growing, Smile Avenue on Westheimer Parkway is the closest full-service, top-rated dental practice. The 12–15 minute drive is easy and direct." },
    { question: "Do you offer financing for Fulshear patients?", answer: "Yes! We accept most major insurance plans and offer an in-house membership plan and flexible financing options for all patients." },
    { question: "Do you accept new patients?", answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online in under 60 seconds or call us directly. We offer same-day appointments for emergencies and typically schedule new patient exams within a few days." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
