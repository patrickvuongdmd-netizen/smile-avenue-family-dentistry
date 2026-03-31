import { Link } from "react-router-dom";
import { Shield, Star, Users, Baby, Heart, Sparkles, Droplets } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Pediatric Dentistry",
  serviceSlug: "pediatric-dentistry",
  metaTitle: "Pediatric Dentist in Cypress, TX - Kids Dentistry - Smile Avenue",
  metaDescription: "Gentle pediatric dentistry in Cypress, TX. First visits, cleanings, sealants for kids of all ages. Fun environment. Call (832) 648-1756.",
  heroKicker: "KIDS DENTISTRY IN CYPRESS",
  heroHeading: "Pediatric Dentistry in Cypress, TX",
  heroBody: "Your child's dental health journey starts earlier than most parents realize. At Smile Avenue Cypress, we make kids' visits fun, comfortable, and educational — building positive habits from the first appointment.",
  heroCta1: "Book Your Child's Visit",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Pediatric Dentistry",
  introKicker: "GENTLE CARE FOR LITTLE SMILES",
  introHeading: "Why Early Dental Care Matters",
  introParas: [
    <>The American Academy of Pediatric Dentistry recommends a child's first dental visit by age 1 or within 6 months of their first tooth. Baby teeth are critical for speech development, proper nutrition, and guiding permanent teeth into the correct position. Our pediatric services include first visits, <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">cleanings</Link>, fluoride treatments, sealants, cavity treatment, orthodontic monitoring, custom mouthguards, and emergency care.</>,
    <>Dr. Peter Kim has advanced pediatric training and a natural ability to connect with children of all ages. Families across Bridgeland, Towne Lake, and Cy-Fair trust Smile Avenue for their children's dental care. We also offer <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">sedation options</Link> for anxious children who need a little extra help feeling comfortable.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Baby className="w-5 h-5" />, label: "Kid-Friendly" },
    { icon: <Users className="w-5 h-5" />, label: "All Ages Welcome" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Parents Choose Us",
  subServicesBody: "A kid-friendly environment with gentle, patient care.",
  subServices: [
    { title: "Kid-Friendly Environment", description: "Our office is designed to make children feel safe, comfortable, and even excited about their dental visit.", icon: <Baby className="w-5 h-5" /> },
    { title: "Dr. Kim — Experienced with Children", description: "Dr. Peter Kim has advanced pediatric training and a gentle, patient approach that puts kids at ease.", icon: <Heart className="w-5 h-5" /> },
    { title: "Never Rush a Child", description: "We take the time each child needs to feel comfortable — building trust and positive associations with dental care.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Sedation Available When Needed", description: "For anxious children or extensive treatment, we offer safe sedation options to ensure a stress-free experience.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "YOUR CHILD'S VISIT",
  processHeading: "What to Expect",
  processBody: "A fun, gentle visit designed to build positive dental habits.",
  processSteps: [
    { number: "01", title: "Welcome & Warm-Up", description: "Your child is greeted by our friendly team and shown around the office to feel comfortable and at ease.", icon: <Heart className="w-5 h-5" /> },
    { number: "02", title: "Gentle Examination", description: "The dentist gently examines your child's teeth, gums, and jaw development using kid-friendly tools and language.", icon: <Baby className="w-5 h-5" /> },
    { number: "03", title: "Age-Appropriate Cleaning", description: "Our hygienist provides a gentle, thorough cleaning with flavored polish your child gets to choose.", icon: <Sparkles className="w-5 h-5" /> },
    { number: "04", title: "Fluoride & Sealants", description: "Protective fluoride treatment and sealants applied to guard against cavities in those hard-to-brush areas.", icon: <Droplets className="w-5 h-5" /> },
  ],
  faqHeading: "Kids Dentistry Questions",
  faqs: [
    { question: "When should my child first see a dentist?", answer: "The AAPD recommends a first dental visit by age 1 or within 6 months of the first tooth erupting. Early visits establish a dental home and catch developmental concerns early." },
    { question: "How do I prepare my child for their first visit?", answer: "Keep it positive! Avoid scary words, read children's books about the dentist, and let them know it will be fun. Our team handles the rest with a warm, welcoming approach." },
    { question: "Are dental sealants worth it?", answer: "Absolutely — sealants reduce cavity risk by up to 80% on the chewing surfaces of back teeth. They're quick, painless, and one of the most effective preventive treatments available." },
    { question: "How do you handle anxious children?", answer: "We go at their pace, using a gentle tell-show-do approach. For very anxious children, sedation options are available to ensure a comfortable, stress-free experience." },
    { question: "How much does kids dental care cost?", answer: "Most dental insurance covers pediatric preventive care at 100%. Our Smile Avenue Membership Plan also covers children with two cleanings, exams, and X-rays annually." },
  ],
  reviewsKicker: "PARENT REVIEWS",
  reviewsHeading: "What Parents Are Saying",
  testimonials: [
    { quote: "My 3-year-old was so nervous for her first dentist visit, but the team made it like a fun adventure. She left saying she wants to come back!", name: "Brittany L.", source: "Google Review" },
    { quote: "We've been bringing all three of our kids to Smile Avenue for years. The hygienists are incredibly patient and gentle. My kids actually remind me when their appointments are coming up.", name: "Jason H.", source: "Google Review" },
    { quote: "Dr. Kim is amazing with kids. He explained everything to my son at his level and made him feel like a superhero for being brave. We'll never go anywhere else.", name: "Rebecca C.", source: "Google Review" },
  ],
  ctaHeading: "Give Your Child a Healthy Smile",
  ctaBody: "Schedule your child's dental visit today. Fun, gentle, and thorough care for kids of all ages.",
};

const PediatricDentistryCypress = () => <ServicePageTemplate data={data} />;
export default PediatricDentistryCypress;
