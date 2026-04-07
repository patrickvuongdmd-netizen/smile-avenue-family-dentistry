import { Link } from "react-router-dom";
import { Shield, Star, Users, Eye, Printer, SmilePlus, ScanLine } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Invisalign",
  serviceSlug: "invisalign",
  videoId: "qMXDWzTh3Cs",
  metaTitle: "Invisalign Cypress, TX | Clear Aligners for Adults & Teens | Smile Avenue",
  metaDescription: "Invisalign in Cypress, TX — clear aligners with free consultation & digital scanning. 0% financing available. 4.9★ rated provider. Call (832) 648-1756.",
  heroKicker: "CLEAR ALIGNERS IN CYPRESS",
  heroHeading: "Invisalign Clear Aligners in Cypress, TX",
  heroBody: "Crooked, crowded, or gapped teeth do not require metal brackets. Invisalign at Smile Avenue Cypress offers virtually invisible teeth straightening without disrupting your daily life.",
  heroCta1: "Book Free Consultation",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Invisalign",
  heroValueProps: ["Free consultation & 3D smile preview", "In-house aligner fabrication", "Experienced Invisalign providers", "Most PPO insurance accepted", "0% financing available"],
  introKicker: "CLEAR ALIGNER THERAPY",
  introHeading: "How Invisalign Works",
  introParas: [
    "Invisalign uses custom clear plastic aligners to gradually move teeth into their ideal positions. Each set is worn for 1-2 weeks, 20-22 hours daily. Invisalign treats crowding, gaps, overbites, underbites, and crossbites — all while being removable for eating and brushing.",
    <>We also fabricate custom aligners in-house with 3D printing at competitive prices, offering an alternative to traditional Invisalign for qualifying cases. Whether you choose Invisalign or our in-house option, families from Towne Lake, Fairfield, and Cypress trust Smile Avenue for beautiful, straight smiles. Invisalign pairs well with <Link to="/cypress-tx/teeth-whitening" className="text-primary hover:underline">professional whitening</Link> after treatment, and our <Link to="/cypress-tx/cosmetic-dentistry" className="text-primary hover:underline">cosmetic dentistry</Link> team can help plan your complete smile transformation.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "In-House Aligner Fabrication" },
    { icon: <Users className="w-5 h-5" />, label: "Experienced Providers" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Invisalign",
  subServicesBody: "In-house aligner fabrication, digital scanning, and experienced providers.",
  subServices: [
    { title: "In-House Aligner Fabrication", description: "We fabricate custom aligners in-house with 3D printing at competitive prices — cutting costs and turnaround time.", icon: <Printer className="w-5 h-5" /> },
    { title: "Digital Medit Scanning", description: "No goopy impressions. Our Medit digital scanners create precise 3D models of your teeth for perfect-fitting aligners.", icon: <Eye className="w-5 h-5" /> },
    { title: "Experienced Clear Aligner Providers", description: "Our doctors have extensive experience with Invisalign and clear aligner therapy for teens and adults.", icon: <Users className="w-5 h-5" /> },
    { title: "Removable & Virtually Invisible", description: "Eat what you want, brush normally, and smile confidently — no one will know you're straightening your teeth.", icon: <SmilePlus className="w-5 h-5" /> },
  ],
  processKicker: "YOUR INVISALIGN JOURNEY",
  processHeading: "What to Expect",
  processBody: "A clear path to a straighter smile.",
  processSteps: [
    { number: "01", title: "Consultation & Digital Scan", description: "We evaluate your smile, take digital scans with our Medit scanner, and show you a virtual preview of your projected results.", icon: <ScanLine className="w-5 h-5" /> },
    { number: "02", title: "Custom Aligner Fabrication", description: "Your aligners are custom-made — either through Invisalign or fabricated in-house with our 3D printing technology.", icon: <Printer className="w-5 h-5" /> },
    { number: "03", title: "Wear Your Aligners", description: "Wear aligners 20-22 hours daily, changing to the next set every 1-2 weeks as your teeth gradually shift into place.", icon: <SmilePlus className="w-5 h-5" /> },
    { number: "04", title: "Completion & Retainer", description: "Once treatment is complete, custom retainers maintain your beautiful new smile for long-term results.", icon: <Star className="w-5 h-5" /> },
  ],
  faqHeading: "Invisalign Questions",
  faqs: [
    { question: "How much does Invisalign cost in Cypress?", answer: "Invisalign typically ranges from $3,500–$6,500 depending on complexity. Many PPO dental plans cover $1,000–$2,000 for orthodontic treatment. We also offer 0% CareCredit financing with payments as low as $99/month. Your free consultation includes a full cost breakdown." },
    { question: "How long does Invisalign treatment take?", answer: "Most adult cases complete in 12–18 months. Mild crowding or spacing cases can finish in as few as 6 months. Teen treatment typically takes 12–16 months. We provide a clear timeline at your consultation based on your specific needs." },
    { question: "Does Invisalign hurt?", answer: "You may feel mild pressure for 1–2 days when switching to a new set of aligners — this means they're working. Most patients find Invisalign significantly more comfortable than traditional braces. No sharp brackets or wires to irritate your cheeks." },
    { question: "Can I eat and drink normally with Invisalign?", answer: "Yes! Simply remove your aligners before eating or drinking anything other than water. There are zero food restrictions — unlike braces where you must avoid hard, sticky, and crunchy foods. Brush your teeth before reinserting aligners." },
    { question: "Is Invisalign as effective as traditional braces?", answer: "For the vast majority of cases, yes. Invisalign effectively treats crowding, gaps, overbites, underbites, crossbites, and open bites. Very complex skeletal issues may still benefit from traditional braces, but advances in Invisalign technology have dramatically expanded what it can treat." },
    { question: "How many hours a day do I need to wear my aligners?", answer: "20–22 hours per day for optimal results. You only remove them to eat, drink (anything besides water), brush, and floss. Consistent wear is the single biggest factor in staying on track with your treatment timeline." },
    { question: "What's the difference between Invisalign and mail-order aligners?", answer: "Mail-order aligners (like SmileDirectClub or byte) lack in-person doctor supervision, X-rays, and mid-course corrections. At Smile Avenue, your doctor monitors every stage, adjusts the plan as needed, and uses digital scanning for precision. Complex movements require professional oversight for safe, lasting results." },
    { question: "Am I too old for Invisalign?", answer: "No. Invisalign works for adults of all ages as long as your teeth and gums are healthy. Many of our patients are in their 40s, 50s, and 60s. There is no upper age limit for orthodontic treatment." },
    { question: "Will people notice I'm wearing Invisalign?", answer: "Invisalign aligners are made from clear, medical-grade plastic and are virtually invisible. Most people — including coworkers, friends, and family — won't notice unless you tell them." },
    { question: "What happens after Invisalign treatment is complete?", answer: "You'll wear a retainer to maintain your results. Most patients wear a retainer nightly for the first year, then a few nights per week long-term. Without a retainer, teeth can gradually shift back. We provide your retainer as part of treatment." },
    { question: "Does insurance cover Invisalign?", answer: "Many PPO dental plans cover Invisalign the same way they cover braces — typically $1,000–$2,000 toward treatment. We verify your specific benefits at your free consultation so you know your out-of-pocket cost upfront." },
    { question: "Can my teenager get Invisalign instead of braces?", answer: "Yes! Invisalign Teen is designed specifically for adolescents with features like compliance indicators that show wear time. It's a popular choice for teens in sports, band, or anyone who wants a more discreet option than metal braces." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "I always wanted straight teeth but didn't want metal braces as an adult. Invisalign at Smile Avenue was the perfect solution — no one even noticed I was wearing them!", name: "Jessica F.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "My daughter's Invisalign treatment was so smooth. She loved that she could take them out for meals and sports. Her smile looks amazing now.", name: "Catherine P.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "10 months of Invisalign and my teeth are perfectly straight. The team at Smile Avenue was so encouraging throughout. Best decision I've made!", name: "Daniel G.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  locationFaqs: [
    { question: "Where can I get Invisalign in Cypress, TX?", answer: "Smile Avenue Family Dentistry at 9212 Fry Rd #120, Cypress, TX 77433. We're conveniently located near Bridgeland, Towne Lake, and Cy-Fair with free parking and same-day consultations." },
    { question: "Which Cypress dentist does Invisalign?", answer: "Dr. Patrick Vuong is our lead Invisalign provider in Cypress. As a certified Invisalign provider, he has treated hundreds of cases from simple spacing to complex bite corrections." },
    { question: "Is the Invisalign consultation free in Cypress?", answer: "Yes — your free Invisalign consultation includes digital scanning, a virtual smile preview, and a full cost breakdown with insurance verification. No obligation." },
    { question: "How much does Invisalign cost in Cypress, TX?", answer: "Invisalign at our Cypress office ranges from $3,500–$6,500 depending on complexity. Most PPO plans cover $1,000–$2,000. We offer 0% CareCredit financing with payments as low as $99/month." },
    { question: "Do you offer Invisalign for teens in Cypress?", answer: "Yes! We offer Invisalign Teen with compliance indicators. It's a popular choice for students at Cy-Fair ISD schools who want a discreet alternative to traditional braces." },
  ],
  aboutInCity: [
    "Cypress residents no longer need to drive into Houston for premium Invisalign care. Smile Avenue Family Dentistry on Fry Road serves patients from Bridgeland, Towne Lake, Fairfield, Cy-Fair, Spring, and Jersey Village with experienced clear aligner treatment from consultation through retention.",
    "What sets our Cypress Invisalign practice apart is our in-house Smile Dental Lab. While most offices outsource aligner fabrication and retainers, we design and produce them on-site — giving us tighter quality control and faster turnaround when adjustments are needed.",
    "Our team uses Medit digital scanners to create a precise 3D model of your teeth on your first visit — no goopy impressions. You'll see a virtual preview of your projected results before committing to treatment, so you know exactly what to expect.",
    "We offer Invisalign for adults, teens, and complex cases including open bites, crossbites, and crowding. Most PPO dental plans cover a portion of Invisalign treatment, and we provide 0% financing through CareCredit and Sunbit for the remaining balance.",
  ],
  ctaHeading: "Start Your Invisalign Journey Today",
  ctaBody: "Book a free Invisalign consultation and see how clear aligners can transform your smile.",
};

const InvisalignCypress = () => <ServicePageTemplate data={data} />;
export default InvisalignCypress;
