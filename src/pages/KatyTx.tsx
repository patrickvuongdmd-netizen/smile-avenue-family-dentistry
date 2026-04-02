import { Link } from "react-router-dom";
import { Shield, Sparkles, Zap, SmilePlus, AlertCircle, Pill } from "lucide-react";
import LocationHubTemplate, { LocationHubData } from "@/components/LocationHubTemplate";
import { OFFICE_IMAGES, KATY_HERO_PHOTOS } from "@/lib/images";
import { DEFAULT_SOCIAL_PLATFORMS } from "@/lib/social-icons";

const data: LocationHubData = {
  phone: "2818005008",
  phoneFormatted: "(281) 800-5008",
  bookingUrl: "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty",
  mapsUrl: "https://www.google.com/maps/place/Smile+Avenue+Family+Dentistry+-+Katy/@29.732508,-95.775455,17z",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5597906542334!2d-95.7754549!3d29.732508199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121d672dd8005%3A0xc421718f6ea402f7!2sSmile%20Avenue%20Family%20Dentistry%20-%20Katy!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",

  docTitle: "Dentist in Katy, TX | Westheimer Pkwy Dentist | Smile Avenue",
  metaTitle: "Dentist in Katy, TX | Westheimer Pkwy Dentist | Smile Avenue",
  metaDescription: "Looking for a dentist in Katy, TX? Smile Avenue on Westheimer Parkway — 4.9★ from 200+ reviews, same-day appointments, in-house dental lab. Implants, Invisalign, emergency care. Serving Cinco Ranch, Firethorne, Cross Creek Ranch & Fulshear. Call (281) 800-5008.",
  canonicalPath: "/katy-tx/",
  ogImage: OFFICE_IMAGES.katyHero,
  twitterDescription: "4.9★ family dentist in Katy, TX on Westheimer Parkway. Same-day appointments, dental implants, Invisalign. In-house lab. Call (281) 800-5008.",

  schemaName: "Smile Avenue Family Dentistry - Katy",
  schemaAddress: { street: "23541 Westheimer Pkwy Ste #170", city: "Katy", state: "TX", zip: "77494" },
  schemaGeo: { lat: 29.7357, lng: -95.7575 },
  schemaReviewCount: "2000",
  schemaOpeningHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
    { days: ["Saturday"], opens: "08:00", closes: "14:00" },
  ],
  schemaAreaServed: [
    { type: "City", name: "Katy, TX" },
    { type: "Place", name: "Cinco Ranch" },
    { type: "Place", name: "Firethorne" },
    { type: "Place", name: "Cross Creek Ranch" },
    { type: "Place", name: "Fulshear" },
  ],

  breadcrumbLabel: "Dentist in Katy, TX",
  heroKicker: "DENTIST IN KATY, TX · WESTHEIMER PARKWAY · NEAR LACENTERRA",
  heroHeading: "Your Family Dentist on Westheimer Parkway in Katy, TX",
  heroBody: (
    <>
      Smile Avenue on Westheimer Parkway is the Katy dentist that makes dental care feel effortless. From <Link to="/katy-tx/dental-cleaning" className="text-primary hover:underline">routine cleanings</Link> and <Link to="/katy-tx/pediatric-dentistry" className="text-primary hover:underline">kids' checkups</Link> to <Link to="/katy-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, <Link to="/katy-tx/invisalign" className="text-primary hover:underline">Invisalign</Link>, and <Link to="/katy-tx/emergency-dentist" className="text-primary hover:underline">same-day emergencies</Link> — we do it all with our in-house dental lab. Proudly serving Cinco Ranch, Cross Creek Ranch, Firethorne, Fulshear, and Katy ISD families.
    </>
  ),
  heroPhotos: KATY_HERO_PHOTOS,
  heroReviewStat: "from 200+ verified Katy reviews",

  socialPlatforms: DEFAULT_SOCIAL_PLATFORMS,
  testimonials: [
    { quote: "Dr. Bilal and the team are fantastic! They took the time to explain every step and made sure I was comfortable throughout my treatment. Highly recommend to anyone in Katy.", name: "David W.", source: "Google Review", location: "Cross Creek Ranch, Katy" },
    { quote: "We moved to Cinco Ranch last year and finding Smile Avenue was the best thing. The entire family goes here now, even our 4-year-old loves it. The kids area is so cute!", name: "Maria G.", source: "Google Review", location: "Firethorne, Katy" },
    { quote: "I had a dental emergency on a Friday and they saw me within the hour. The care was outstanding and the follow-up was thorough. I'm a patient for life.", name: "Robert K.", source: "Google Review", location: "Cinco Ranch, Katy" },
  ],
  reviewsLinkLabel: "Read More Katy Reviews",

  servicesKicker: "DENTAL SERVICES IN KATY, TX",
  servicesHeading: "Complete Family & Cosmetic Dentistry on Westheimer Parkway",
  servicesBody: (
    <>
      Everything your family needs under one roof — no referrals needed. Our <Link to="/dental-lab" className="text-primary hover:underline">in-house dental lab</Link> delivers faster, more precise results.
    </>
  ),
  services: [
    { title: "Preventive Dentistry", description: "Cleanings, exams, and proactive care to keep your smile healthy.", href: "/katy-tx/preventive-dentistry", icon: <Shield className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", description: "Veneers, whitening, and smile design for a confident new look.", href: "/katy-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Implants", description: "Permanent tooth replacement that looks and functions like natural teeth.", href: "/katy-tx/dental-implants", icon: <SmilePlus className="w-5 h-5" /> },
    { title: "Invisalign®", description: "Clear aligners for a straighter smile without traditional braces.", href: "/katy-tx/invisalign", icon: <Zap className="w-5 h-5" /> },
    { title: "Emergency Dentistry", description: "Same-day urgent care when you need it most.", href: "/katy-tx/emergency-dentist", icon: <AlertCircle className="w-5 h-5" /> },
    { title: "Sedation Dentistry", description: "Relaxed, anxiety-free dental care for nervous patients.", href: "/katy-tx/sedation-dentistry", icon: <Pill className="w-5 h-5" /> },
  ],
  servicesLinkLabel: "View All 17 Katy Services",

  videosHeading: "Welcome to Smile Avenue Katy",
  videos: [
    { youtubeId: "G2RT4usdGLo", title: "Office Tour – Smile Avenue Family Dentistry" },
    { youtubeId: "w7T8CmOhTNY", title: "Sydney's Testimonial – Smile Avenue Is A Complete Class By Itself!" },
    { youtubeId: "H288Gamedc0", title: "From Consult to Perfect Smile: Your Invisalign Adventure" },
  ],

  doctorsKicker: "YOUR KATY DENTAL TEAM",
  doctorsHeading: "Meet Your Katy Dentists",
  doctorsBody: "Our Katy team combines expertise in family, cosmetic, and implant dentistry with genuine compassion. Every doctor takes time to listen before recommending treatment.",
  doctorGridCols: "md:grid-cols-3",
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Founder — cutting-edge implant, sedation & digital dentistry with a values-first approach.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "Award-winning aesthetic dentistry & compassionate family care.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
    { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Community-centered care with a heart for education & volunteerism.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  ],

  paymentsKicker: "AFFORDABLE DENTAL CARE IN KATY",
  insuranceBrands: ["Aetna", "BCBS", "Cigna", "Humana", "MetLife", "United HC"],

  findUsKicker: "VISIT OUR KATY OFFICE",
  findUsHeading: "Find Us on Westheimer Parkway",
  findUsBody: "We're on Westheimer Parkway in Katy — minutes from LaCenterra at Cinco Ranch, near the Grand Parkway (99). Free parking right at our door.",
  address: { line1: "23541 Westheimer Pkwy Ste #170", line2: "Katy, TX 77494" },
  directions: "From I-10, exit Grand Parkway (99) south and take Westheimer Parkway west — we're about 2 minutes ahead on the right. From Cinco Ranch or LaCenterra, head east on Cinco Ranch Blvd to Westheimer Pkwy. From Fulshear, take FM 1093 east to Westheimer Parkway.",
  landmark: (
    <>
      <span className="font-medium text-foreground">Landmark:</span> Look for the shopping center on the south side of Westheimer Pkwy between Grand Parkway (99) and Cinco Ranch Blvd — Suite #170 with free parking at our door.
    </>
  ),
  hours: [
    { day: "Monday:", time: "8:30 AM – 5:00 PM" },
    { day: "Tuesday:", time: "8:30 AM – 5:00 PM" },
    { day: "Wednesday:", time: "8:30 AM – 5:00 PM" },
    { day: "Thursday:", time: "8:30 AM – 5:00 PM" },
    { day: "Friday:", time: "8:30 AM – 5:00 PM" },
    { day: "Saturday:", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed", muted: true },
  ],
  amenities: [
    "Netflix in every room",
    "Warm blankets & pillows",
    "Noise-canceling headphones",
    "Digital scans — no goopy molds",
    "In-house dental lab",
    "Same-day emergencies",
    "0% financing available",
    "Most PPO insurance accepted",
  ],

  neighborhoods: [
    { label: "Cinco Ranch Dentist", href: "/katy-tx/cinco-ranch-dentist" },
    { label: "Firethorne Dentist", href: "/katy-tx/firethorne-dentist" },
    { label: "Cross Creek Ranch Dentist", href: "/katy-tx/cross-creek-ranch-dentist" },
    { label: "Westheimer Parkway Dentist", href: "/katy-tx/westheimer-parkway-dentist" },
    { label: "Fulshear Dentist", href: "/katy-tx/fulshear-dentist" },
  ],
  crossLink: {
    label: "Cypress, TX",
    address: "9212 Fry Rd #120, Cypress, TX 77433",
    phone: "(832) 648-1756",
    phoneRaw: "8326481756",
    href: "/cypress-tx",
  },

  faqs: [
    { question: "Where exactly is Smile Avenue Katy located?", answer: "We're at 23541 Westheimer Pkwy Ste #170, Katy, TX 77494 — along Westheimer Parkway between Cinco Ranch Blvd and Peek Road, minutes from LaCenterra at Cinco Ranch. We're centrally located for families in Cinco Ranch, Cross Creek Ranch, Firethorne, Elyson, Cane Island, and Fulshear." },
    { question: "What dental insurance do you accept at the Katy office?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana. Our team verifies your benefits before your visit so there are no surprise bills." },
    { question: "Do you offer same-day emergency dental appointments in Katy?", answer: "Yes. If you have a dental emergency — toothache, broken tooth, knocked-out tooth, or swelling — call us at (281) 800-5008. We keep emergency slots available daily and will do our best to see you the same day." },
    { question: "What are the office hours for the Katy dental office?", answer: "We're open Monday through Friday, 8:30am to 5pm, and Saturday 8am to 2pm, with Saturday appointments available by request. We also offer early morning availability for patients with busy schedules." },
    { question: "Is Smile Avenue a good family dentist for kids in Katy?", answer: "Absolutely. We treat patients of all ages — from toddlers getting their first checkup to grandparents needing dentures. Katy ISD families love our gentle approach to pediatric dentistry, and our kid-friendly amenities make every visit fun." },
    { question: "Do you offer dental implants at the Katy office?", answer: "Yes. Our Katy office provides comprehensive dental implant services including single implants, implant bridges, and All-on-X full-arch restorations. With our in-house dental lab, we deliver faster turnaround and more precise results than practices that outsource." },
    { question: "How is Smile Avenue different from other dentists in Katy?", answer: "We're not your typical Katy dentist. We combine advanced technology (digital scanners, 3D imaging, in-house lab) with hotel-level hospitality — Netflix in every room, warm blankets, noise-canceling headphones. Our doctors spend real time with you before recommending any treatment." },
  ],
};

const KatyTx = () => <LocationHubTemplate data={data} />;
export default KatyTx;
