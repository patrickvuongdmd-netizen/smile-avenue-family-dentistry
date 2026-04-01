import { Shield, Zap, Users, Scan, FlaskConical, Syringe, Star, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "katy",
  serviceName: "Dental Implants",
  serviceSlug: "dental-implants",
  metaTitle: "Dental Implants Katy, TX | Permanent Tooth Replacement | Smile Avenue",
  metaDescription: "Dental implants in Katy, TX near Cinco Ranch — single teeth, bridges & All-on-4. 3D-guided placement, in-house lab, sedation. 0% financing. Call (281) 800-5008.",
  heroKicker: "PERMANENT TOOTH REPLACEMENT IN KATY",
  heroHeading: "Dental Implants in Katy, TX",
  heroBody: "Missing teeth impact your confidence, eating ability, and oral health. At Smile Avenue Katy near Cinco Ranch, Dr. Vuong and Dr. Bilal provide permanent implant solutions with 3D planning and our in-house Smile Dental Lab.",
  heroCta1: "Book Implant Consultation",
  heroCta2: "Call (281) 800-5008",
  heroImage: "Dental Implants Photo",
  heroValueProps: ["In-house Smile Dental Lab", "3D-guided implant placement", "Sedation options available", "Most PPO insurance accepted", "0% financing through CareCredit"],
  introKicker: "PERMANENT TOOTH REPLACEMENT",
  introHeading: "What Are Dental Implants?",
  introParas: [
    "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Once integrated with the bone, they support crowns, bridges, or dentures that look, feel, and function like natural teeth. Unlike dentures that slip or bridges that require grinding adjacent teeth, implants are a standalone, permanent solution.",
    "At Smile Avenue Katy, Dr. Vuong and Dr. Bilal use 3D CBCT imaging and Medit digital scanners for precise, guided implant placement. Our in-house Smile Dental Lab fabricates your final crown or prosthesis for perfect fit and natural appearance. Families across Cinco Ranch, Cross Creek Ranch, Firethorne, and Westheimer Parkway trust us for life-changing implant dentistry.",
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "3D Guided Surgery" },
    { icon: <Users className="w-5 h-5" />, label: "1,000+ Implants Placed" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Implants",
  subServicesBody: "Advanced technology and in-house precision for predictable, lasting results.",
  subServices: [
    { title: "In-House Smile Dental Lab", description: "Your implant crown is fabricated on-site for precise fit, natural appearance, and faster turnaround — no outside lab delays.", icon: <FlaskConical className="w-5 h-5" /> },
    { title: "3D CBCT & Medit Scanners", description: "Advanced 3D imaging and digital scanning guide every implant placement with surgical precision and predictable outcomes.", icon: <Scan className="w-5 h-5" /> },
    { title: "Sedation Available", description: "Nitrous oxide, oral sedation, and IV sedation options ensure complete comfort throughout your implant procedure.", icon: <Syringe className="w-5 h-5" /> },
    { title: "All Treatment Under One Roof", description: "From bone grafting to implant placement to final crown — everything handled by our team without referrals.", icon: <Stethoscope className="w-5 h-5" /> },
  ],
  processKicker: "THE IMPLANT PROCESS",
  processHeading: "What to Expect",
  processBody: "A straightforward process from consultation to your permanent new tooth.",
  processSteps: [
    { number: "01", title: "3D Consultation", description: "Comprehensive exam with 3D CBCT scan, digital impressions, and personalized treatment plan.", icon: <Scan className="w-5 h-5" /> },
    { number: "02", title: "Implant Placement", description: "Titanium implant is precisely placed using 3D-guided surgery under sedation for complete comfort.", icon: <Zap className="w-5 h-5" /> },
    { number: "03", title: "Healing Period", description: "3-6 months for the implant to fuse with your jawbone (osseointegration) while you heal comfortably.", icon: <Shield className="w-5 h-5" /> },
    { number: "04", title: "Final Crown from In-House Lab", description: "Your permanent crown is fabricated in our Smile Dental Lab and placed for a natural, lasting result.", icon: <FlaskConical className="w-5 h-5" /> },
  ],
  faqHeading: "Dental Implant Questions",
  faqs: [
    { question: "How much do dental implants cost in Katy, TX?", answer: "A single implant with crown typically ranges from $3,000–$5,000. All-on-4 full-arch restorations start around $20,000 per arch. We provide a detailed, line-item estimate at your free consultation. CareCredit 0% financing and most major PPO plans accepted." },
    { question: "Am I a good candidate for dental implants?", answer: "Most adults with one or more missing teeth are candidates. You need adequate jawbone density and healthy gums. If bone loss has occurred, bone grafting or sinus lifts can rebuild the foundation. Conditions like uncontrolled diabetes or heavy smoking may require management first — we evaluate everything at your consultation." },
    { question: "How long do dental implants last?", answer: "The titanium implant post is designed to last 20+ years and often a lifetime with proper oral hygiene. The crown on top typically lasts 10–15 years before it may need replacement due to normal wear." },
    { question: "Is the dental implant procedure painful?", answer: "No. Local anesthesia numbs the area completely, and we offer nitrous oxide, oral sedation, and IV sedation for anxious patients. Most people report the procedure itself is painless and that post-op discomfort is milder than expected — comparable to a tooth extraction, managed with over-the-counter ibuprofen." },
    { question: "How long does the entire implant process take?", answer: "The full timeline is typically 3–6 months. Implant placement takes about an hour per implant. The majority of time is healing (osseointegration). You'll wear a temporary restoration during this period so you're never without teeth." },
    { question: "What is the difference between a dental implant and a bridge?", answer: "A bridge requires grinding down healthy adjacent teeth to anchor the replacement. An implant is a standalone post in the jawbone — it doesn't affect neighboring teeth, preserves bone density, and typically lasts much longer than a bridge." },
    { question: "What is All-on-4 / All-on-X?", answer: "All-on-4 is a full-arch solution where four to six implants support an entire set of fixed teeth. It's ideal for patients missing most or all teeth, or those tired of removable dentures. Many patients receive temporary teeth the same day as surgery." },
    { question: "Do dental implants look natural?", answer: "Yes. Our in-house Smile Dental Lab custom-fabricates each crown to match the color, shape, and translucency of your natural teeth. Most people cannot tell the difference between an implant crown and a real tooth." },
    { question: "Does insurance cover dental implants?", answer: "Many PPO dental plans cover a portion of implant treatment — typically $1,000–$2,000 toward the procedure. Medical insurance may also cover implants if tooth loss resulted from an accident or medical condition. We verify your benefits before treatment begins." },
    { question: "What happens if I don't replace a missing tooth?", answer: "Adjacent teeth shift into the gap, your bite changes, and the jawbone where the tooth was begins to deteriorate. This can lead to further tooth loss, TMJ issues, and facial structure changes over time. Early replacement prevents these complications." },
    { question: "Can I get implants if I currently wear dentures?", answer: "Absolutely. Many denture wearers upgrade to implant-supported dentures or All-on-4 for a permanent, non-removable solution. Implants eliminate the slipping, adhesives, and dietary restrictions associated with traditional dentures." },
    { question: "How do I care for dental implants?", answer: "Brush twice daily, floss around the implant, and keep regular cleaning appointments. Implants can't get cavities, but the surrounding gum tissue still needs care to prevent peri-implantitis. With good hygiene, implants require no special maintenance." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "Dr. Bilal placed my implant and the whole experience was smooth. The 3D planning made me feel confident they knew exactly what they were doing.", name: "Carlos R.", source: "Google Review" , location: "Cross Creek Ranch, Katy" },
    { quote: "I got two implants to replace teeth I lost years ago. The in-house lab made a crown that matches my other teeth perfectly. Wish I'd done it sooner.", name: "Janet M.", source: "Google Review" , location: "Firethorne, Katy" },
    { quote: "The sedation option made the implant placement completely comfortable. I was nervous but the team put me at ease from the moment I walked in.", name: "David K.", source: "Google Review" , location: "Cinco Ranch, Katy" },
  ],
  ctaHeading: "Replace Missing Teeth Permanently",
  ctaBody: "Schedule your free implant consultation and take the first step toward a complete, confident smile.",
};

const DentalImplantsKaty = () => <ServicePageTemplate data={data} />;
export default DentalImplantsKaty;
