import { Link } from "react-router-dom";
import { Shield, Sparkles, Zap, SmilePlus, AlertCircle, Pill } from "lucide-react";
import LocationHubTemplate, { LocationHubData } from "@/components/LocationHubTemplate";
import { OFFICE_IMAGES, CYPRESS_HERO_PHOTOS } from "@/lib/images";
import { DEFAULT_SOCIAL_PLATFORMS } from "@/lib/social-icons";

const data: LocationHubData = {
  phone: "8326481756",
  phoneFormatted: "(832) 648-1756",
  bookingUrl: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress",
  mapsUrl: "https://maps.app.goo.gl/DgZBrfjyNed7qKxs8",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1743654401334!2d-95.7273261!3d29.916881999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d626dcbf8be7%3A0xc78b697f2e5a6c9c!2sSmile%20Avenue%20Family%20Dentistry%20-%20Cypress!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",

  docTitle: "Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue",
  metaTitle: "Dentist in Cypress, TX | Fry Rd Family Dentist | Smile Avenue",
  metaDescription: "Looking for a dentist in Cypress, TX? Smile Avenue on Fry Road — 4.9★ from 300+ reviews, same-day appointments, in-house dental lab. Implants, Invisalign, emergency care. Serving Bridgeland, Towne Lake, Fairfield & Cy-Fair. Call (832) 648-1756.",
  canonicalPath: "/cypress-tx/",
  ogImage: OFFICE_IMAGES.cypressHero,
  twitterDescription: "4.9★ family dentist in Cypress, TX on Fry Road. Same-day appointments, dental implants, Invisalign. In-house lab. Call (832) 648-1756.",

  schemaName: "Smile Avenue Family Dentistry - Cypress",
  schemaAddress: { street: "9212 Fry Rd #120", city: "Cypress", state: "TX", zip: "77433" },
  schemaGeo: { lat: 29.9691, lng: -95.6972 },
  schemaReviewCount: "3000",
  schemaOpeningHours: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" }],
  schemaAreaServed: [
    { type: "City", name: "Cypress, TX" },
    { type: "Place", name: "Bridgeland" },
    { type: "Place", name: "Towne Lake" },
    { type: "Place", name: "Fairfield" },
    { type: "Place", name: "Cy-Fair" },
    { type: "Place", name: "Jersey Village" },
  ],

  breadcrumbLabel: "Dentist in Cypress, TX",
  heroKicker: "DENTIST IN CYPRESS, TX · FRY ROAD · NEAR HEB",
  heroHeading: "Your Family Dentist on Fry Road in Cypress, TX",
  heroBody: (
    <>
      Smile Avenue on Fry Road is the Cypress dentist families actually look forward to visiting. From <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">routine cleanings</Link> and <Link to="/cypress-tx/pediatric-dentistry" className="text-primary hover:underline">pediatric checkups</Link> to <Link to="/cypress-tx/dental-implants" className="text-primary hover:underline">dental implants</Link>, <Link to="/cypress-tx/invisalign" className="text-primary hover:underline">Invisalign</Link>, and <Link to="/cypress-tx/emergency-dentist" className="text-primary hover:underline">same-day emergency visits</Link> — we handle it all under one roof with our in-house dental lab. Proudly serving Bridgeland, Towne Lake, Fairfield, Cy-Fair, and CFISD families.
    </>
  ),
  heroPhotos: CYPRESS_HERO_PHOTOS,
  heroReviewStat: "from 300+ verified Cypress reviews",

  socialPlatforms: [
    { name: "Google", stat: "4.9 Stars · 5,000+ Reviews", icon: <GoogleIcon /> },
    { name: "Yelp", stat: "192 Reviews", icon: <YelpIcon /> },
    { name: "Facebook", stat: "1,300+ Community", icon: <FacebookIcon /> },
    { name: "Instagram", stat: "12K Followers", icon: <InstagramIcon /> },
    { name: "YouTube", stat: "25.6K Subscribers", icon: <YouTubeIcon /> },
  ],
  testimonials: [
    { quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time. Everyone in here is just very nice and friendly.", name: "Thao H.", source: "Google Review", location: "Fairfield, Cypress" },
    { quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home. I was offered a cozy blanket and my choice of Netflix! AMAZING!", name: "Kashayn P.", source: "Google Review", location: "Towne Lake, Cypress" },
    { quote: "I absolutely love coming to Smile Dentistry! The employees are nice, friendly, and care for the patients. I'm pleased once again with my visit to Smile Dentistry.", name: "Shon M.", source: "Google Review", location: "Bridgeland, Cypress" },
  ],
  reviewsLinkLabel: "Read More Cypress Reviews",

  servicesKicker: "DENTAL SERVICES IN CYPRESS, TX",
  servicesHeading: "Complete Family & Cosmetic Dentistry on Fry Road",
  servicesBody: (
    <>
      From your child's first cleaning to your smile makeover, Smile Avenue Cypress offers every dental service your family needs — no referrals, no runaround. Our <Link to="/dental-lab" className="text-primary hover:underline">in-house dental lab</Link> means faster, more precise results.
    </>
  ),
  services: [
    { title: "Preventive Dentistry", description: "Cleanings, exams, and proactive care to keep your smile healthy.", href: "/cypress-tx/preventive-dentistry", icon: <Shield className="w-5 h-5" /> },
    { title: "Cosmetic Dentistry", description: "Veneers, whitening, and smile design for a confident new look.", href: "/cypress-tx/cosmetic-dentistry", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Implants", description: "Permanent tooth replacement that looks and functions like natural teeth.", href: "/cypress-tx/dental-implants", icon: <SmilePlus className="w-5 h-5" /> },
    { title: "Invisalign®", description: "Clear aligners for a straighter smile without traditional braces.", href: "/cypress-tx/invisalign", icon: <Zap className="w-5 h-5" /> },
    { title: "Emergency Dentistry", description: "Same-day urgent care when you need it most.", href: "/cypress-tx/emergency-dentist", icon: <AlertCircle className="w-5 h-5" /> },
    { title: "Sedation Dentistry", description: "Relaxed, anxiety-free dental care for nervous patients.", href: "/cypress-tx/sedation-dentistry", icon: <Pill className="w-5 h-5" /> },
  ],
  servicesLinkLabel: "View All 17 Cypress Services",

  videosHeading: "Welcome to Smile Avenue Cypress",
  videos: [
    { youtubeId: "G2RT4usdGLo", title: "Office Tour – Smile Avenue Family Dentistry" },
    { youtubeId: "w7T8CmOhTNY", title: "Sydney's Testimonial – Smile Avenue Is A Complete Class By Itself!" },
    { youtubeId: "H288Gamedc0", title: "From Consult to Perfect Smile: Your Invisalign Adventure" },
  ],

  doctorsKicker: "YOUR CYPRESS DENTAL TEAM",
  doctorsHeading: "Meet Your Cypress Dentists",
  doctorsBody: "Our Cypress team brings decades of combined experience in family, cosmetic, and implant dentistry. Every doctor takes time to listen and build a treatment plan around your goals — never a billing code.",
  doctorGridCols: "md:grid-cols-3 lg:grid-cols-5",
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Founder — cutting-edge implant, sedation & digital dentistry with a values-first approach.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Peter Kim", credentials: "DDS", bio: "15+ years of gentle, education-focused care. NYU trained.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
    { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Precision, calm demeanor & passion for restorative care.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
    { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Community-centered care with a heart for education & volunteerism.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
    { name: "Dr. Shayan Alkhiro", credentials: "DDS", bio: "Multilingual, judgment-free dentistry with a global perspective.", href: "/doctors/shayan-alkhiro-dds", imgKey: "shayan-alkhiro" },
  ],

  paymentsKicker: "AFFORDABLE DENTAL CARE IN CYPRESS",
  insuranceBrands: ["Aetna", "BCBS", "Cigna", "Humana", "MetLife", "United HC"],

  findUsKicker: "VISIT OUR CYPRESS OFFICE",
  findUsHeading: "Find Us on Fry Road",
  findUsBody: "We're on Fry Road in Cypress — directly across from HEB, near Bridgeland High School and the Berry Center. Free parking right at our door.",
  address: { line1: "9212 Fry Rd #120", line2: "Cypress, TX 77433" },
  directions: "From US-290, exit Fry Road and head south — we're about 1 mile down on the right, directly across from HEB. From Bridgeland or Towne Lake, take Fry Rd south past Bridgeland High School. From Fairfield or Cy-Fair, head north on Fry Rd from Clay Road.",
  landmark: (
    <>
      <span className="font-medium text-foreground">Landmark:</span> Look for the HEB on Fry Road — we're across the street in the same shopping center as Salata. Free parking at our door.
    </>
  ),
  hours: [
    { day: "Monday:", time: "8:30 AM – 5:00 PM" },
    { day: "Tuesday:", time: "8:30 AM – 5:00 PM" },
    { day: "Wednesday:", time: "8:30 AM – 5:00 PM" },
    { day: "Thursday:", time: "8:30 AM – 5:00 PM" },
    { day: "Friday:", time: "8:30 AM – 5:00 PM" },
    { day: "Saturday – Sunday", time: "Closed", muted: true },
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
    { label: "Bridgeland Dentist", href: "/cypress-tx/bridgeland-dentist" },
    { label: "Towne Lake Dentist", href: "/cypress-tx/towne-lake-dentist" },
    { label: "Fairfield Dentist", href: "/cypress-tx/fairfield-dentist" },
    { label: "Cy-Fair Dentist", href: "/cypress-tx/cyfair-dentist" },
    { label: "Jersey Village Dentist", href: "/cypress-tx/jersey-village-dentist" },
  ],
  crossLink: {
    label: "Katy, TX",
    address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494",
    phone: "(281) 800-5008",
    phoneRaw: "2818005008",
    href: "/katy-tx",
  },

  faqs: [
    { question: "Where exactly is Smile Avenue Cypress located?", answer: "We're at 9212 Fry Rd #120, Cypress, TX 77433 — directly across from the HEB on Fry Road, just south of the Fry Road and Jones Road intersection. We're minutes from Bridgeland, Towne Lake, Fairfield, and Cy-Fair." },
    { question: "What insurance plans do you accept at the Cypress location?", answer: "We accept most major PPO dental insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, MetLife, United Healthcare, Guardian, and Humana. Our team will verify your benefits before your visit — no surprise bills." },
    { question: "Do you offer same-day emergency dental appointments in Cypress?", answer: "Yes. If you're experiencing a dental emergency — toothache, broken tooth, knocked-out tooth, or swelling — call us at (832) 648-1756 and we'll do our best to see you the same day. We keep emergency slots available daily." },
    { question: "What are the office hours for the Cypress dental office?", answer: "We're open Monday through Friday, 8:30am to 5pm, with Saturday appointments available by request. We also offer early morning availability for patients who need to get in before work or school." },
    { question: "Is Smile Avenue a good dentist for kids in Cypress?", answer: "Absolutely. We treat patients of all ages — from first-tooth toddlers to grandparents. Our CFISD families love our gentle approach to pediatric dentistry, plus our kid-friendly amenities like Netflix and cozy blankets make every visit fun." },
    { question: "Do you offer dental implants at the Cypress office?", answer: "Yes. Our Cypress office offers full-service dental implant treatment, including single implants, implant bridges, and All-on-X full-arch restorations. With our in-house dental lab, we can fabricate your custom restoration faster than practices that outsource." },
    { question: "What's different about Smile Avenue compared to other Cypress dentists?", answer: "We combine modern technology (digital scanners, 3D imaging, in-house dental lab) with a hospitality-first experience. Every room has Netflix, we offer warm blankets and noise-canceling headphones, and our doctors spend real time listening to your concerns before recommending treatment." },
  ],
};

const CypressTx = () => <LocationHubTemplate data={data} />;
export default CypressTx;
