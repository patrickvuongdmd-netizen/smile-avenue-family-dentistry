import { Shield, Scan, Smile, Eye, Clock, Star, FlaskConical } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Invisalign",
  serviceSlug: "invisalign",
  metaTitle: "Invisalign Katy, TX | Clear Aligners for Adults & Teens | Smile Avenue",
  metaDescription: "Invisalign in Katy, TX near Cinco Ranch — clear aligners with free consultation & digital scanning. 0% financing available. 4.9★ rated. Call (281) 800-5008.",
  heroKicker: "CLEAR ALIGNERS IN KATY",
  heroHeading: "Invisalign Clear Aligners in Katy, TX",
  heroBody: "Straighten your smile without metal brackets. Invisalign at Smile Avenue Katy offers virtually invisible alignment for teens and adults.",
  heroCta1: "Book Free Invisalign Consultation",
  heroCta2: "Call (281) 800-5008",
  heroValueProps: ["Free consultation & 3D smile preview", "In-house aligner fabrication", "Experienced Invisalign providers", "Most PPO insurance accepted", "0% financing available"],
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
    { question: "How much does Invisalign cost in Katy?", answer: "Invisalign typically ranges from $3,500–$6,500 depending on complexity. Many PPO dental plans cover $1,000–$2,000 for orthodontic treatment. We also offer 0% CareCredit financing with payments as low as $99/month. Your free consultation includes a full cost breakdown." },
    { question: "How long does Invisalign treatment take?", answer: "Most adult cases complete in 12–18 months. Mild crowding or spacing cases can finish in as few as 6 months. Teen treatment typically takes 12–16 months. We provide a clear timeline at your consultation." },
    { question: "Does Invisalign hurt?", answer: "You may feel mild pressure for 1–2 days when switching to a new set of aligners — this means they're working. Most patients find Invisalign significantly more comfortable than traditional braces. No sharp brackets or wires to irritate your cheeks." },
    { question: "Can I eat and drink normally with Invisalign?", answer: "Yes! Simply remove your aligners before eating or drinking anything other than water. There are zero food restrictions — unlike braces where you must avoid hard, sticky, and crunchy foods. Brush your teeth before reinserting aligners." },
    { question: "Is Invisalign as effective as traditional braces?", answer: "For the vast majority of cases, yes. Invisalign effectively treats crowding, gaps, overbites, underbites, crossbites, and open bites. Very complex skeletal issues may still benefit from traditional braces, but advances in Invisalign technology have dramatically expanded what it can treat." },
    { question: "How many hours a day do I need to wear my aligners?", answer: "20–22 hours per day for optimal results. You only remove them to eat, drink (anything besides water), brush, and floss. Consistent wear is the single biggest factor in staying on track with your treatment timeline." },
    { question: "What's the difference between Invisalign and mail-order aligners?", answer: "Mail-order aligners lack in-person doctor supervision, X-rays, and mid-course corrections. At Smile Avenue, your doctor monitors every stage, adjusts the plan as needed, and uses digital scanning for precision. Complex movements require professional oversight for safe, lasting results." },
    { question: "Am I too old for Invisalign?", answer: "No. Invisalign works for adults of all ages as long as your teeth and gums are healthy. Many of our patients are in their 40s, 50s, and 60s. There is no upper age limit for orthodontic treatment." },
    { question: "Will people notice I'm wearing Invisalign?", answer: "Invisalign aligners are made from clear, medical-grade plastic and are virtually invisible. Most people — including coworkers, friends, and family — won't notice unless you tell them." },
    { question: "What happens after Invisalign treatment is complete?", answer: "You'll wear a retainer to maintain your results. Most patients wear a retainer nightly for the first year, then a few nights per week long-term. Without a retainer, teeth can gradually shift back. We provide your retainer as part of treatment." },
    { question: "Does insurance cover Invisalign?", answer: "Many PPO dental plans cover Invisalign the same way they cover braces — typically $1,000–$2,000 toward treatment. We verify your specific benefits at your free consultation so you know your out-of-pocket cost upfront." },
    { question: "Can my teenager get Invisalign instead of braces?", answer: "Yes! Invisalign Teen is designed specifically for adolescents with features like compliance indicators that show wear time. It's a popular choice for teens in sports, band, or anyone who wants a more discreet option than metal braces." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "My Invisalign treatment at Smile Avenue Katy was seamless. The digital preview showed me exactly what my teeth would look like, and the results matched perfectly.", name: "Emily R.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "I love that no one can tell I'm wearing aligners. The in-house fabrication option saved me money compared to traditional Invisalign pricing elsewhere.", name: "Jason T.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "My teen daughter was so happy she didn't need metal braces. The Invisalign process was easy and her smile looks beautiful now.", name: "Christina M.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Straighten Your Smile Invisibly",
  ctaBody: "Schedule your free Invisalign consultation and see your virtual results preview.",
};

const InvisalignKaty = () => <ServicePageTemplate data={data} />;
export default InvisalignKaty;
