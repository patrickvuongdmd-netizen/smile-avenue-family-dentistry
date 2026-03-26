import { Shield, Users, Star, Scan, Smile, Eye, Clock } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Invisalign",
  serviceSlug: "invisalign",
  metaTitle: "Invisalign Katy, TX | Clear Aligners | Smile Avenue",
  metaDescription: "Straighten your teeth with Invisalign in Katy, TX. Clear, comfortable, removable aligners for teens and adults. Call (281) 800-5008.",
  heroKicker: "CLEAR ALIGNERS IN KATY",
  heroHeading: "Invisalign in Katy, TX",
  heroBody: "Straighten your teeth without metal braces. Invisalign clear aligners are virtually invisible, removable, and comfortable — the modern way to get the smile you've always wanted.",
  heroCta1: "Book Invisalign Consultation", heroCta2: "Call (281) 800-5008", heroImage: "Invisalign Photo",
  introKicker: "ABOUT INVISALIGN", introHeading: "What Is Invisalign?",
  introParas: [
    "Invisalign uses a series of custom-made, clear plastic aligners to gradually shift your teeth into their ideal positions. Each set of aligners is worn for about two weeks before moving to the next set in the series.",
    "Unlike traditional braces, Invisalign aligners are removable for eating, brushing, and flossing. There are no metal brackets or wires — just smooth, comfortable plastic that's virtually invisible when worn.",
    "Our Katy team is experienced with Invisalign for teens and adults, treating everything from mild crowding to complex bite issues. Patients from Cinco Ranch, Firethorne, and Cross Creek Ranch choose Smile Avenue for expert Invisalign care."
  ],
  trustBadges: [
    { icon: <Smile className="w-5 h-5" />, label: "Virtually Invisible" },
    { icon: <Shield className="w-5 h-5" />, label: "Invisalign Provider" },
    { icon: <Users className="w-5 h-5" />, label: "500+ Cases Completed" },
  ],
  subServicesKicker: "INVISALIGN OPTIONS", subServicesHeading: "Invisalign Treatments We Offer",
  subServicesBody: "We offer Invisalign solutions for every age and alignment need.",
  subServices: [
    { title: "Teen Invisalign", description: "Designed specifically for teenagers with compliance indicators and replacement aligners for active lifestyles.", icon: <Star className="w-5 h-5" /> },
    { title: "Adult Invisalign", description: "Discreet orthodontic treatment that fits your professional and social life. Most adults complete treatment in 12-18 months.", icon: <Smile className="w-5 h-5" /> },
    { title: "Invisalign Lite", description: "A shorter treatment option for mild crowding or spacing issues, typically completed in 6-8 months with fewer aligners.", icon: <Clock className="w-5 h-5" /> },
    { title: "Retainers", description: "Custom Vivera retainers to maintain your beautiful results after Invisalign treatment is complete.", icon: <Shield className="w-5 h-5" /> },
  ],
  processKicker: "YOUR INVISALIGN JOURNEY", processHeading: "What to Expect",
  processBody: "Our Invisalign process is straightforward and designed around your lifestyle.",
  processSteps: [
    { number: "01", title: "Free Consultation", description: "We assess your alignment, take digital scans, and show you a preview of your projected results.", icon: <Eye className="w-6 h-6" /> },
    { number: "02", title: "Custom Treatment Plan", description: "Using Invisalign's ClinCheck software, we map out every stage of your tooth movement from start to finish.", icon: <Scan className="w-6 h-6" /> },
    { number: "03", title: "Wear Your Aligners", description: "Wear each set of aligners for about 2 weeks, 20-22 hours per day. Switch to the next set on schedule.", icon: <Smile className="w-6 h-6" /> },
    { number: "04", title: "Reveal Your Smile", description: "Once treatment is complete, we fit you with retainers to keep your new smile in place for life.", icon: <Star className="w-6 h-6" /> },
  ],
  faqHeading: "Invisalign FAQ",
  faqs: [
    { question: "How much does Invisalign cost in Katy, TX?", answer: "Invisalign typically ranges from $3,500-$6,500 depending on complexity. Many dental insurance plans cover Invisalign the same as braces. We also offer CareCredit and Sunbit financing." },
    { question: "How long does Invisalign treatment take?", answer: "Most cases are completed in 12-18 months. Invisalign Lite for minor corrections can be finished in 6-8 months." },
    { question: "Does Invisalign hurt?", answer: "You may feel mild pressure when switching to a new set of aligners, which is a sign they're working. Any discomfort typically subsides within a day or two." },
    { question: "Can I eat normally with Invisalign?", answer: "Yes! Simply remove your aligners before eating and drinking (except water), then brush your teeth before putting them back in." },
    { question: "Is Invisalign as effective as braces?", answer: "For most cases, yes. Invisalign can treat crowding, spacing, overbites, underbites, and crossbites. Complex skeletal issues may still require traditional orthodontics." },
  ],
  reviewsKicker: "WHAT KATY PATIENTS ARE SAYING", reviewsHeading: "Invisalign Reviews",
  testimonials: [
    { quote: "Finished Invisalign at Smile Avenue Katy in 14 months and my teeth are perfectly straight. Nobody at work even knew I was wearing aligners!", name: "Stephanie W.", source: "Google Review" },
    { quote: "My teenager was thrilled to skip metal braces. The teen Invisalign worked great and the check-ups were quick and easy.", name: "Carlos M.", source: "Google Review" },
    { quote: "I'm 42 and finally straightened my teeth with Invisalign. Best decision ever. The Katy team made the whole process so simple.", name: "Diane F.", source: "Google Review" },
  ],
  ctaHeading: "Start Your Invisalign Journey Today",
  ctaBody: "Book a free Invisalign consultation at our Katy office and see your projected results.",
};

const InvisalignKaty = () => <ServicePageTemplate data={data} />;
export default InvisalignKaty;
