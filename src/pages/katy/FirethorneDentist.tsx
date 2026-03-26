import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "katy",
  neighborhoodName: "Firethorne",
  slug: "firethorne-dentist",
  metaTitle: "Dentist Near Firethorne, Katy TX | Smile Avenue Family Dentistry",
  metaDescription: "Firethorne families: find your trusted Katy dentist at Smile Avenue on Westheimer Parkway. Implants, cleanings, Invisalign & emergency care. Call (281) 800-5008.",
  heroHeading: "Firethorne's Neighborhood Dentist — Expert Care on Westheimer Parkway",
  heroImage: OFFICE_IMAGES.aboutKatyTeam,
  heroSubheading: "A short drive from the Firethorne community to modern, full-service dental care.",
  heroBody: "Firethorne families deserve a dentist who combines proximity with excellence. Smile Avenue Family Dentistry on Westheimer Parkway offers the comprehensive dental care your family needs — from children's checkups to dental implants — just minutes from the Firethorne community.",
  contentParagraphs: [
    "Firethorne is one of Katy's most welcoming master-planned communities, known for its resort-style amenities, beautiful trails, and family-first atmosphere. At Smile Avenue Family Dentistry, we're proud to serve Firethorne residents with the same level of care and quality they've come to expect from their community.",
    "Our Katy office on Westheimer Parkway is a quick drive from the Firethorne community via Firethorne Trail and Westheimer Parkway. Whether you're heading out for school drop-off or running errands along the Westheimer corridor, fitting a dental appointment into your day is easy.",
    "Our team of experienced dentists understands the needs of growing families. We offer pediatric dentistry for your little ones, orthodontic solutions like Invisalign for teens, preventive care for adults, and specialized treatments for seniors — all under one roof.",
    "With 5,000+ five-star reviews and a reputation for gentle, judgment-free care, Smile Avenue is the dental home that Firethorne families trust. We take the time to listen, explain, and create treatment plans that fit your goals and budget.",
  ],
  whyChooseHeading: "Why Firethorne Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "Close to Firethorne", description: "A quick drive down Firethorne Trail to Westheimer Parkway. Your neighborhood dentist." },
    { icon: <Clock className="w-5 h-5" />, title: "Convenient Scheduling", description: "Same-day emergency visits and flexible scheduling for busy Firethorne families." },
    { icon: <Shield className="w-5 h-5" />, title: "Insurance & Membership Plans", description: "We accept most major insurance and offer an affordable in-house membership plan." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Full-Service Practice", description: "Cleanings, implants, cosmetic work, oral surgery, and pediatric care — everything you need." },
    { icon: <Sparkles className="w-5 h-5" />, title: "State-of-the-Art Technology", description: "Digital X-rays, 3D imaging, and an in-house lab for faster, more accurate treatments." },
    { icon: <Heart className="w-5 h-5" />, title: "Gentle, Patient-First Approach", description: "We treat every patient like family — with kindness, respect, and no judgment." },
  ],
  directionsHeading: "Getting Here from Firethorne",
  directionsBody: [
    "From the Firethorne community, take Firethorne Trail south to Westheimer Parkway. Turn left (east) on Westheimer Parkway and continue to our office at 23541 Westheimer Pkwy Ste #170.",
    "The drive takes approximately 8–10 minutes in normal traffic. Our office is on the right side of Westheimer Parkway with free parking available directly in front of the suite.",
    "You can also reach us via the Grand Parkway (99) by taking the Westheimer Parkway exit and heading west.",
  ],
  crossStreets: "Westheimer Parkway, Katy TX",
  driveTime: "Approximately 8–10 minutes from Firethorne",
  featuredServices: [
    { title: "Dental Implants", href: "/katy-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/katy-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Invisalign", href: "/katy-tx/invisalign", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/katy-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Veneers", href: "/katy-tx/veneers", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Pediatric Dentistry", href: "/katy-tx/pediatric-dentistry", icon: <Heart className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Sameer Bilal", credentials: "DDS", bio: "Compassionate, detail-oriented general dentistry.", href: "/doctors/sameer-bilal-dds", imgKey: "sameer-bilal" },
    { name: "Dr. Sarah Maredia", credentials: "DDS", bio: "Passionate about cosmetic and family dentistry.", href: "/doctors/sarah-maredia-dds", imgKey: "sarah-maredia" },
  ],
  testimonials: [
    { quote: "We live in Firethorne and Smile Avenue is our go-to dentist. Friendly team, modern office, and excellent care.", name: "Chris P.", source: "Google Review" },
    { quote: "So happy we found a quality dentist this close to Firethorne. Dr. Willis is incredibly skilled and kind.", name: "Samantha J.", source: "Google Review" },
    { quote: "The entire experience from booking to treatment was seamless. Best dental office near Firethorne.", name: "Marcus D.", source: "Google Review" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Firethorne?", answer: "Our Katy office at 23541 Westheimer Pkwy is approximately 8–10 minutes from the Firethorne community via Firethorne Trail and Westheimer Parkway." },
    { question: "Do you accept new patients from Firethorne?", answer: "Yes! We welcome new patients from Firethorne and all Katy neighborhoods. Book online or call (281) 800-5008." },
    { question: "What services do you offer near Firethorne?", answer: "We offer cleanings, implants, Invisalign, veneers, emergency care, crowns, root canals, pediatric dentistry, and more." },
    { question: "Do you offer same-day dental appointments?", answer: "Yes! We offer same-day appointments for emergencies and often have same-day availability for routine visits." },
    { question: "Can I bring my whole family to one dental office?", answer: "Absolutely! We treat patients of all ages, from toddlers to grandparents, so your entire family can be seen at one convenient location." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
