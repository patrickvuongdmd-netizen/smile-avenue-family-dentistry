import { Shield, Scan, Smile, Eye, Clock, Star, FlaskConical } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Invisalign",
  serviceSlug: "invisalign",
  metaTitle: "Invisalign in Katy, TX - Clear Aligners - Smile Avenue",
  metaDescription: "Invisalign clear aligners in Katy, TX near Cinco Ranch. Digital scanning, in-house fabrication. Call (281) 800-5008.",
  heroKicker: "CLEAR ALIGNERS IN KATY",
  heroHeading: "Invisalign Clear Aligners in Katy, TX",
  heroBody: "Straighten your smile without metal brackets. Invisalign at Smile Avenue Katy offers virtually invisible alignment for teens and adults.",
  heroCta1: "Book Free Invisalign Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Invisalign Photo",
  introKicker: "INVISIBLE TEETH STRAIGHTENING",
  introHeading: "What Is Invisalign?",
  introParas: [
    "Invisalign uses a series of custom-made clear plastic aligners to gradually move your teeth into ideal alignment. Each set of aligners is worn for 1-2 weeks, 20-22 hours daily, and is virtually invisible. Invisalign treats crowding, gaps, overbites, underbites, and crossbites — all without metal brackets or wires.",
    "At Smile Avenue Katy, we also fabricate custom aligners in-house using 3D printing technology at competitive prices. Our Medit digital scanner captures precise impressions — no goopy molds. Families across Cinco Ranch, Cross Creek Ranch, Elyson, and Cane Island choose Smile Avenue for experienced clear aligner treatment.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Smile className="w-5 h-5" />, label: "Experienced Providers" },
    { icon: <FlaskConical className="w-5 h-5" />, label: "In-House Fabrication" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Invisalign",
  subServicesBody: "Advanced technology and experienced providers for predictable results.",
  subServices: [
    { title: "In-House Aligner Fabrication", description: "We fabricate custom aligners in-house using 3D printing, offering competitive pricing and faster turnaround.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "Digital Medit Scanning", description: "Comfortable digital impressions replace goopy molds for a more pleasant experience and more accurate results.", icon: <Scan className="w-5 h-5" /> },
    { title: "Experienced Providers", description: "Our team has treated hundreds of Invisalign cases, from minor crowding to complex bite corrections.", icon: <Shield className="w-5 h-5" /> },
    { title: "Removable & Virtually Invisible", description: "Eat what you want, brush and floss normally, and straighten your teeth without anyone knowing.", icon: <Smile className="w-5 h-5" /> },
  ],
  processKicker: "YOUR INVISALIGN JOURNEY",
  processHeading: "What to Expect",
  processBody: "A clear path to a straighter smile.",
  processSteps: [
    { number: "01", title: "Consultation with Virtual Preview", description: "Digital scan and virtual results preview so you can see your new smile before starting treatment.", icon: <Eye className="w-5 h-5" /> },
    { number: "02", title: "Custom Aligner Fabrication", description: "Your custom aligners are fabricated based on your precise digital impressions and treatment plan.", icon: <FlaskConical className="w-5 h-5" /> },
    { number: "03", title: "Wear & Change Aligners", description: "Wear aligners 20-22 hours daily, changing to a new set every 1-2 weeks as teeth gradually move.", icon: <Clock className="w-5 h-5" /> },
    { number: "04", title: "Retainer for Long-Term Results", description: "After treatment, a retainer maintains your beautiful new smile for years to come.", icon: <Smile className="w-5 h-5" /> },
  ],
  faqHeading: "Invisalign Questions",
  faqs: [
    { question: "How much does Invisalign cost?", answer: "Costs vary by complexity — free consultation available. Many insurance plans cover partial orthodontic treatment. CareCredit financing available." },
    { question: "How long does Invisalign take?", answer: "Typically 6-18 months for most cases. Minor cases can be completed in 3-6 months. Treatment length depends on the complexity of your alignment needs." },
    { question: "Does Invisalign hurt?", answer: "You may feel mild pressure when switching to a new set of aligners — this is normal and means the aligners are working. Much less discomfort than traditional braces." },
    { question: "Can I eat normally with Invisalign?", answer: "Yes — simply remove your aligners to eat and drink. No food restrictions like with traditional braces." },
    { question: "Is Invisalign as effective as braces?", answer: "For most cases, yes. Invisalign effectively treats crowding, gaps, and many bite issues. For very complex orthodontic cases, traditional braces may be recommended." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My Invisalign treatment at Smile Avenue Katy was seamless. The digital preview showed me exactly what my teeth would look like, and the results matched perfectly.", name: "Emily R.", source: "Google Review" },
    { quote: "I love that no one can tell I'm wearing aligners. The in-house fabrication option saved me money compared to traditional Invisalign pricing elsewhere.", name: "Jason T.", source: "Google Review" },
    { quote: "My teen daughter was so happy she didn't need metal braces. The Invisalign process was easy and her smile looks beautiful now.", name: "Christina M.", source: "Google Review" },
  ],
  ctaHeading: "Straighten Your Smile Invisibly",
  ctaBody: "Schedule your free Invisalign consultation and see your virtual results preview.",
};

const InvisalignKaty = () => <ServicePageTemplate data={data} />;
export default InvisalignKaty;
