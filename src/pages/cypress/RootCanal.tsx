import { Link } from "react-router-dom";
import { Shield, Star, Users, Heart, Zap, Crown, Stethoscope } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Root Canal",
  serviceSlug: "root-canal",
  videoId: "y1YYnlsar3U",
  metaTitle: "Root Canal Cypress, TX | Gentle, Pain-Free Treatment | Smile Avenue",
  metaDescription: "Root canal in Cypress, TX — painless treatment with sedation options. Save your natural tooth in one visit. Insurance & 0% financing. Call (832) 648-1756.",
  heroKicker: "SAVE YOUR TOOTH IN CYPRESS",
  heroHeading: "Root Canal Treatment in Cypress, TX",
  heroBody: "Modern root canal treatment at Smile Avenue Cypress is nothing like its reputation. With advanced technology, gentle technique, and sedation options, most patients are surprised by how comfortable it is — and relieved to be out of pain.",
  heroCta1: "Book Appointment",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Root Canal",
  heroValueProps: ["Gentle, virtually painless procedure", "Sedation options for complete comfort", "Save your natural tooth in one visit", "In-house lab for same-day crown", "Most insurance accepted · 0% financing"],
  introKicker: "ENDODONTIC THERAPY",
  introHeading: "What Is a Root Canal?",
  introParas: [
    <>A root canal saves a tooth with infected or inflamed pulp — the soft tissue inside the tooth containing nerves and blood vessels. Infection is typically caused by deep decay, repeated dental procedures, cracks, or trauma. During treatment, the infected pulp is removed, the inside of the tooth is cleaned, disinfected, and shaped, then filled, sealed, and protected with a <Link to="/cypress-tx/dental-crowns" className="text-primary hover:underline">dental crown</Link>.</>,
    <>Without treatment, the infection spreads, the tooth is lost, and your health is at risk. Patients from Cy-Fair, Fry Road, and Cypress trust Smile Avenue for gentle, effective root canal therapy. If you're experiencing a <Link to="/cypress-tx/emergency-dentist" className="text-primary hover:underline">dental emergency</Link> with severe tooth pain, call us immediately. We also offer <Link to="/cypress-tx/sedation-dentistry" className="text-primary hover:underline">sedation dentistry</Link> for anxious patients and <Link to="/cypress-tx/tooth-extraction" className="text-primary hover:underline">tooth extraction</Link> when a tooth cannot be saved.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Modern Care" },
    { icon: <Users className="w-5 h-5" />, label: "Sedation Available" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Root Canals",
  subServicesBody: "Modern technique, sedation options, and in-house crown placement.",
  subServices: [
    { title: "Gentle Modern Approach", description: "Advanced rotary instruments and precise techniques make modern root canals comfortable and efficient.", icon: <Heart className="w-5 h-5" /> },
    { title: "Sedation for Comfort", description: "Anxious about dental work? We offer sedation options so you can relax completely during your procedure.", icon: <Shield className="w-5 h-5" /> },
    { title: "Crown Placement After Treatment", description: "Our in-house Smile Dental Lab fabricates your permanent crown quickly — faster turnaround than practices that outsource.", icon: <Crown className="w-5 h-5" /> },
    { title: "Pain Relief, Not Pain", description: "Root canal treatment relieves the severe pain of infection. Most patients feel dramatically better immediately.", icon: <Zap className="w-5 h-5" /> },
  ],
  processKicker: "THE PROCESS",
  processHeading: "What to Expect",
  processBody: "A comfortable, step-by-step process to save your tooth.",
  processSteps: [
    { number: "01", title: "Diagnosis", description: "Digital X-rays and examination to confirm infection, assess the tooth, and plan your treatment.", icon: <Stethoscope className="w-5 h-5" /> },
    { number: "02", title: "Anesthesia & Sedation", description: "Thorough local anesthesia ensures complete comfort. Optional sedation available for anxious patients.", icon: <Shield className="w-5 h-5" /> },
    { number: "03", title: "Infected Pulp Removal", description: "Infected tissue is carefully removed, and the canals are cleaned, shaped, and disinfected.", icon: <Heart className="w-5 h-5" /> },
    { number: "04", title: "Crown Placement", description: "A custom crown is fabricated in our in-house Smile Dental Lab and placed at your follow-up visit to protect and restore the tooth.", icon: <Crown className="w-5 h-5" /> },
  ],
  faqHeading: "Root Canal Questions",
  faqs: [
    { question: "How much does a root canal cost in Cypress, TX?", answer: "Costs vary by tooth — front teeth are simpler than molars. Most dental insurance plans cover a significant portion of root canal treatment. CareCredit financing and our membership plan are also available." },
    { question: "Is a root canal painful?", answer: "No — modern root canals actually relieve the severe pain caused by infection. We use advanced anesthesia and sedation options to ensure complete comfort throughout the procedure." },
    { question: "How long does a root canal take?", answer: "Most root canals are completed in 60-90 minutes. A follow-up visit is typically needed for crown placement, which our in-house lab fabricates with faster turnaround than outside labs." },
    { question: "What happens if I skip a root canal?", answer: "An untreated infected tooth will worsen. The infection can spread to surrounding teeth and bone, cause an abscess, and ultimately result in tooth loss. The tooth will eventually need to be extracted." },
    { question: "Do I need a crown after a root canal?", answer: "Usually yes — a crown protects the treated tooth from fracture and restores full strength. Our in-house Smile Dental Lab fabricates crowns with faster turnaround than practices that outsource." },
    { question: "How do I know if I need a root canal?", answer: "Common signs include persistent tooth pain, prolonged sensitivity to hot or cold, darkening of the tooth, swelling or tenderness in nearby gums, and a recurring pimple on the gums. Only a dental exam with X-rays can confirm if a root canal is needed." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "I was terrified of getting a root canal, but Dr. Vuong made it completely painless. I didn't feel a thing! The relief from that toothache was immediate.", name: "Lisa M.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "Had a root canal on a molar and it was honestly easier than getting a filling. The numbing was thorough and the team kept checking on me the whole time.", name: "Anthony R.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "I put off my root canal for months out of fear. Wish I hadn't waited! The procedure was nothing like what I imagined. Smooth, painless, and done in about an hour.", name: "Rachel K.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  locationFaqs: [
    { question: "Where can I get a root canal in Cypress, TX?", answer: "Smile Avenue Family Dentistry at 9212 Fry Rd #120, Cypress, TX 77433 performs gentle root canal treatment with modern rotary instruments and sedation options for a comfortable experience." },
    { question: "How much does a root canal cost in Cypress?", answer: "Root canal costs vary by tooth — front teeth are less complex than molars. Most PPO dental insurance plans cover a significant portion of root canal therapy. We offer 0% financing through CareCredit and Sunbit." },
    { question: "Does a root canal hurt at Smile Avenue Cypress?", answer: "No. With modern anesthesia and technique, root canal treatment is comfortable — most patients compare it to getting a filling. We also offer sedation options for anxious patients." },
    { question: "Can I get a same-day emergency root canal in Cypress?", answer: "Yes. If you're in pain from an infected tooth, we offer same-day emergency appointments. Call (832) 648-1756 for urgent care. We'll relieve your pain and start treatment immediately." },
    { question: "Do I need a crown after a root canal in Cypress?", answer: "In most cases, yes. A crown protects the treated tooth from fracture. Our in-house Smile Dental Lab fabricates your crown on-site for faster turnaround and a precise fit." },
  ],
  aboutInCity: [
    "Smile Avenue Family Dentistry on Fry Road is where Cypress patients come for gentle, modern root canal treatment. Our advanced rotary instruments and refined technique make today's root canals comfortable and efficient — nothing like the painful reputation they once had.",
    "What makes our Cypress root canal experience different is the seamless crown workflow. After removing the infection, our in-house Smile Dental Lab fabricates your permanent crown on-site — meaning faster turnaround and fewer appointments compared to offices that outsource to external labs.",
    "We offer multiple sedation options for anxious patients: nitrous oxide for mild relaxation, oral sedation for moderate anxiety, and IV sedation for patients who want to sleep through the procedure. Our team monitors you continuously, ensuring safety and comfort throughout.",
    "Patients from Bridgeland, Towne Lake, Fairfield, and Cy-Fair trust us for root canal treatment because we combine clinical expertise with genuine compassion. Most PPO dental insurance plans cover root canal therapy, and we offer 0% financing through CareCredit and Sunbit for any remaining balance.",
  ],
  ctaHeading: "Don't Wait — Save Your Tooth Today",
  ctaBody: "Gentle root canal treatment at Smile Avenue Cypress. Call now and feel better fast.",
};

const RootCanalCypress = () => <ServicePageTemplate data={data} />;
export default RootCanalCypress;
