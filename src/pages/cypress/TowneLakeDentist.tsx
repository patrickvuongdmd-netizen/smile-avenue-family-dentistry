import { MapPin, Clock, Shield, Stethoscope, Sparkles, Heart } from "lucide-react";
import NeighborhoodPageTemplate, { NeighborhoodPageData } from "@/components/NeighborhoodPageTemplate";
import { OFFICE_IMAGES } from "@/lib/images";

const data: NeighborhoodPageData = {
  location: "cypress",
  neighborhoodName: "Towne Lake",
  slug: "towne-lake-dentist",
  metaTitle: "Dentist Near Towne Lake, Cypress TX | Smile Avenue Family Dentistry",
  metaDescription: "Towne Lake dentist on Fry Road in Cypress, TX. Same-day & Saturday appointments. Implants, Invisalign, kids & emergency care. 4.9★. Call (832) 648-1756.",
  heroHeading: "Towne Lake's Trusted Family Dentist — Close to Home",
  heroImage: OFFICE_IMAGES.waitingRoom,
  heroSubheading: "Modern dental care for the Towne Lake community, just a short drive on Barker Cypress.",
  heroBody: "Living in Towne Lake means you're just a quick drive from one of Cypress's top-rated dental practices. Smile Avenue Family Dentistry on Fry Road provides everything from routine cleanings to advanced cosmetic dentistry — all in a warm, family-friendly environment.",
  heroValueProps: ["Minutes from Towne Lake", "Same-day & Saturday appointments", "In-house dental lab for faster results", "Most insurance accepted · 0% financing", "4.9★ from 5,000+ Google reviews"],
  contentParagraphs: [
    "Towne Lake is one of the most desirable communities in the Cypress area, known for its stunning boardwalk, crystal-clear lake, and active family lifestyle. At Smile Avenue Family Dentistry, we're proud to be the dental office that Towne Lake residents trust for their family's oral health.",
    "Whether you're wrapping up a morning jog along the Towne Lake Boardwalk or heading out from the community pool, our Fry Road office is a convenient stop. We're located just south of the Barker Cypress and Tuckerton intersection — an easy route from any part of Towne Lake.",
    "Our Cypress location features the latest in dental technology, including digital impressions, 3D cone beam imaging, and an in-house dental lab. This means fewer visits and faster results for Towne Lake families who value their time.",
    "From first dental visits for your little ones to full-mouth restorations for adults, our team of experienced dentists delivers personalized care tailored to your unique needs. We also offer early morning and Saturday appointments by request to accommodate busy Towne Lake schedules.",
  ],
  whyChooseHeading: "Why Towne Lake Families Choose Smile Avenue",
  whyChooseItems: [
    { icon: <MapPin className="w-5 h-5" />, title: "Minutes from Towne Lake", description: "A quick drive via Barker Cypress Road to our Fry Road office. Convenient and easy to find." },
    { icon: <Clock className="w-5 h-5" />, title: "Same-Day Availability", description: "Emergency or routine — we'll find you an appointment that works with your schedule." },
    { icon: <Shield className="w-5 h-5" />, title: "All Major Insurance Accepted", description: "We work with most insurance plans and offer a membership plan for uninsured patients." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Comprehensive Services", description: "Implants, Invisalign, crowns, veneers, pediatric care, and more — all under one roof." },
    { icon: <Sparkles className="w-5 h-5" />, title: "In-House Dental Lab", description: "Custom crowns and faster restorations thanks to our on-site Smile Dental Lab." },
    { icon: <Heart className="w-5 h-5" />, title: "Bilingual Staff", description: "Our team speaks English and Spanish to ensure every patient feels comfortable." },
  ],
  directionsHeading: "Getting Here from Towne Lake",
  directionsBody: [
    "From the Towne Lake community, head east on Towne Lake Parkway toward Barker Cypress Road. Turn right (south) on Barker Cypress Road, then turn left (east) on Tuckerton Road. Continue on Tuckerton to Fry Road and turn right (south). Our office is at 9212 Fry Rd #120 on the right side.",
    "The total drive time is approximately 10–12 minutes depending on traffic. Alternatively, you can take Cypress North Houston Road to Fry Road for a slightly different route.",
    "We have ample free parking at our shopping center location, and the office is easily accessible from the main Fry Road entrance.",
  ],
  crossStreets: "Fry Road & Tuckerton Road, Cypress TX",
  driveTime: "Approximately 10–12 minutes from Towne Lake",
  featuredServices: [
    { title: "Dental Implants", href: "/cypress-tx/dental-implants", icon: <Stethoscope className="w-5 h-5" /> },
    { title: "Teeth Whitening", href: "/cypress-tx/teeth-whitening", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Dental Cleaning", href: "/cypress-tx/dental-cleaning", icon: <Shield className="w-5 h-5" /> },
    { title: "Veneers", href: "/cypress-tx/veneers", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Emergency Dentist", href: "/cypress-tx/emergency-dentist", icon: <Clock className="w-5 h-5" /> },
    { title: "Invisalign", href: "/cypress-tx/invisalign", icon: <Heart className="w-5 h-5" /> },
  ],
  doctors: [
    { name: "Dr. Patrick Vuong", credentials: "DMD — Founder", bio: "Comprehensive care with a gentle touch.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
    { name: "Dr. Peter Kim", credentials: "DDS", bio: "Patient-focused general and restorative dentistry.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
    { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Skilled in implants and oral surgery.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
  ],
  testimonials: [
    { quote: "We moved to Towne Lake last year and found Smile Avenue right away. Best dental experience our family has ever had!", name: "Mike D.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "The office is beautiful, the team is friendly, and Dr. Kim is so thorough. Highly recommend for Towne Lake families.", name: "Lisa P.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "Love how close this is to Towne Lake. No more driving across Houston for quality dental care.", name: "Amanda R.", source: "Google Review" , location: "Towne Lake, Cypress" },
  ],
  faqs: [
    { question: "How far is Smile Avenue from Towne Lake?", answer: "Our Cypress office at 9212 Fry Rd is approximately 10–12 minutes from the Towne Lake community via Barker Cypress Road and Tuckerton Road." },
    { question: "Do you accept new patients from Towne Lake?", answer: "Yes! We welcome new patients from Towne Lake and all Cypress neighborhoods. Book online or call (832) 648-1756." },
    { question: "What services do you offer near Towne Lake?", answer: "We offer a full range of dental services including cleanings, implants, Invisalign, veneers, emergency care, pediatric dentistry, and more." },
    { question: "Do you have evening or weekend hours for Towne Lake families?", answer: "We offer Saturday appointments by request and have early morning availability throughout the week to accommodate busy schedules." },
    { question: "Is parking available at your office?", answer: "Yes, we have plenty of free parking in our shopping center on Fry Road." },
    { question: "Do you accept new patients?", answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online in under 60 seconds or call us directly. We offer same-day appointments for emergencies and typically schedule new patient exams within a few days." },
  ],
};

export default () => <NeighborhoodPageTemplate data={data} />;
