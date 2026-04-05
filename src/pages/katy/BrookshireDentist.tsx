import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "katy",
  neighborhoodName: "Brookshire",
  slug: "brookshire-dentist",
  metaTitle: "Dentist Near Brookshire, TX | Smile Avenue Family Dentistry Katy",
  metaDescription: "Brookshire TX dentist 15 min away on I-10. Same-day & Saturday appointments. Implants, Invisalign, family dentistry. 4.9★ rating. Call (281) 800-5008.",
  heroHeading: "Brookshire's Preferred Family Dentist — 15 Minutes on I-10",
  heroImage: OFFICE_IMAGES.katyHero,
  heroSubheading: "Full-service dental care for Brookshire families at our Katy office.",
  heroBody: "Brookshire families deserve exceptional dental care without a long commute. Smile Avenue Family Dentistry in Katy is just 15 minutes east on I-10, offering comprehensive dentistry with Saturday hours, modern technology, and a hospitality-first approach.",
  contentParagraphs: [
    "Brookshire is a growing community west of Katy with a small-town feel and big ambitions. Smile Avenue Family Dentistry is proud to serve Brookshire families with the same warmth and quality that defines the community. Our Katy office on Westheimer Parkway is a quick 15-minute drive east on I-10.",
    "What makes the drive worthwhile? A dental office that treats you like family. From the moment you walk in, you'll notice the difference — complimentary coffee, Netflix in every treatment room, warm blankets, and a team that takes the time to listen before recommending any treatment.",
    "Our six experienced doctors cover every specialty in-house: dental implants, Invisalign, cosmetic dentistry, oral surgery, pediatric care, and more. Plus, our in-house Smile Dental Lab means faster results on crowns and restorations.",
    "We're open Saturdays 8am–2pm at our Katy location — perfect for Brookshire families with busy weekday schedules. No more taking time off work for a dental appointment.",
  ],
  whyChooseHeading: "Why Brookshire Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "15 Minutes from Brookshire", description: "Straight shot east on I-10 to our Katy office on Westheimer Parkway." },
    { icon: <Clock className="w-5 h-5" />, title: "Open Saturdays 8am–2pm", description: "Weekend appointments available — no need to miss work." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance & 0% Financing", description: "Most PPO plans accepted. CareCredit, Sunbit, and membership plan available." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Every Service Under One Roof", description: "Implants, Invisalign, cosmetic, emergency, pediatric — no referrals needed." },
    { icon: <Sparkles className="w-5 h-5" />, title: "In-House Dental Lab", description: "Faster crowns and restorations crafted on-site for a perfect fit." },
    { icon: <Heart className="w-5 h-5" />, title: "Judgment-Free Environment", description: "No matter how long it's been, we welcome you with open arms." },
  ],
  directionsHeading: "Getting Here from Brookshire",
  directionsBody: [
    "From Brookshire, take I-10 East toward Katy. Exit at Westheimer Parkway/FM 1093 and turn right (south). Our office is at 23541 Westheimer Pkwy Ste #170, on the right side.",
    "The drive takes approximately 15 minutes. During peak hours, you can use the frontage road along I-10 as an alternative.",
    "Free parking is available directly in front of our office. We're located in the Villagio Town Center shopping area.",
  ],
  crossStreets: "Westheimer Parkway near I-10, Katy TX",
  driveTime: "Approximately 15 minutes from Brookshire",
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
    { quote: "We live in Brookshire and the 15-minute drive to Smile Avenue is absolutely worth it. The Saturday hours are a lifesaver for our family.", name: "Carlos M.", source: "Google Review", location: "Brookshire, TX" },
    { quote: "Found Smile Avenue after moving to Brookshire. Best dental office I've ever been to — and I've lived in three states.", name: "Diana W.", source: "Google Review", location: "Brookshire, TX" },
    { quote: "Dr. Bilal did my veneers and they look incredible. The in-house lab made the process so much faster.", name: "Stephanie R.", source: "Google Review", location: "Brookshire, TX" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Brookshire?", answer: "Our Katy office at 23541 Westheimer Pkwy is approximately 15 minutes from Brookshire via I-10 East." },
    { question: "Do you have Saturday hours?", answer: "Yes! Our Katy location is open Saturdays 8am–2pm for appointments." },
    { question: "Do you accept patients from Brookshire?", answer: "Absolutely! We welcome all Brookshire families. Book online or call (281) 800-5008." },
    { question: "What dental services are available?", answer: "We offer comprehensive care: cleanings, implants, Invisalign, cosmetic dentistry, emergency care, pediatric dentistry, and more." },
    { question: "Is financing available?", answer: "Yes — 0% financing through CareCredit and Sunbit, plus our in-house membership plan for uninsured patients." },
    { question: "Do you accept new patients?", answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online in under 60 seconds or call us directly. We offer same-day appointments for emergencies and typically schedule new patient exams within a few days." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
