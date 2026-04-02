import { Link } from "react-router-dom";
import { Shield, Sparkles, Zap, SmilePlus, AlertCircle, Pill } from "lucide-react";
import LocationHubTemplate, { LocationHubData } from "@/components/LocationHubTemplate";
import { OFFICE_IMAGES, KATY_HERO_PHOTOS } from "@/lib/images";

// Shared social proof SVG icons
const GoogleIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>;
const YelpIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.768-4.076a1.09 1.09 0 011.938.168l2.028 3.264c.35.563.035 1.035-.563.84zm-7.166 5.103l.67-5.225c.124-.967 1.492-1.14 1.862-.236l1.795 4.39c.23.565-.25 1.12-.845 1.025l-3.002-.49c-.446-.073-.535-.998-.48-1.464zM6.12 17.278l4.073-3.207c.765-.603 1.742.25 1.37 1.194l-1.812 4.596c-.233.59-.983.65-1.307.105l-2.261-3.389c-.267-.4-.063-.3-.063-.3zm.91-5.29l5.04 1.548c.947.29.88 1.687-.095 1.876l-4.76.924c-.61.118-1.075-.422-.898-1.015L7.03 12c.102-.34.4-.41.688-.41h-.688zM11.11 2.24L9.085 7.49c-.38.983-1.81.91-2.08-.107L5.912 2.58c-.17-.633.304-1.176.932-1.084l4.12.6c.33.05.465.508.147.143z" /></svg>;
const FacebookIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
const InstagramIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
const YouTubeIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>;

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

  socialPlatforms: [
    { name: "Google", stat: "4.9 Stars · 5,000+ Reviews", icon: <GoogleIcon /> },
    { name: "Yelp", stat: "192 Reviews", icon: <YelpIcon /> },
    { name: "Facebook", stat: "1,300+ Community", icon: <FacebookIcon /> },
    { name: "Instagram", stat: "12K Followers", icon: <InstagramIcon /> },
    { name: "YouTube", stat: "25.6K Subscribers", icon: <YouTubeIcon /> },
  ],
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
