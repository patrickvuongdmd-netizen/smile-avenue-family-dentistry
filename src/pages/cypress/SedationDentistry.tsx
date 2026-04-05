import { Link } from "react-router-dom";
import { Shield, Star, Users, Heart, Wind, Pill, Syringe, Tv } from "lucide-react";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const data: ServicePageData = {
  location: "cypress",
  serviceName: "Sedation Dentistry",
  serviceSlug: "sedation-dentistry",
  videoId: "lVFe5d6pAlY",
  metaTitle: "Sedation Dentistry Cypress, TX | Anxiety-Free Dental Care | Smile Avenue",
  metaDescription: "Sedation dentistry in Cypress, TX — nitrous oxide, oral & IV sedation for anxiety-free care. 4.9★ rated. Book a consultation. Call (832) 648-1756.",
  heroKicker: "ANXIETY-FREE DENTISTRY IN CYPRESS",
  heroHeading: "Sedation Dentistry in Cypress, TX",
  heroBody: "Dental anxiety is real, and it should never prevent you from getting the care you need. At Smile Avenue Cypress, we offer multiple sedation options — from mild relaxation to deep sedation — so every patient can receive treatment comfortably.",
  heroCta1: "Book Anxiety-Free Visit",
  heroCta2: "Call (832) 648-1756",
  heroImage: "Sedation Dentistry",
  heroValueProps: ["Nitrous oxide, oral & IV sedation options", "Warm blankets, Netflix & noise-canceling headphones", "Ideal for dental anxiety & gag reflex", "Experienced, gentle team", "Most insurance accepted · 0% financing"],
  introKicker: "RELAXATION OPTIONS",
  introHeading: "Sedation Options for Every Comfort Level",
  introParas: [
    <>We offer three levels of sedation: <strong>Nitrous oxide</strong> (laughing gas) for mild relaxation — you remain fully conscious and effects wear off within minutes. <strong>Oral sedation</strong> (a pill taken before your appointment) for deeper relaxation — you'll feel drowsy but can still respond. <strong>IV sedation</strong> for the deepest level of relaxation — you'll have little to no memory of the procedure.</>,
    <>Beyond sedation, we provide comfort amenities including warm blankets, Netflix on ceiling-mounted TVs, and noise-canceling headphones. Sedation is ideal for dental anxiety, strong gag reflex, extensive procedures, and special needs patients. Whether you need a routine <Link to="/cypress-tx/dental-cleaning" className="text-primary hover:underline">cleaning</Link>, <Link to="/cypress-tx/root-canal" className="text-primary hover:underline">root canal</Link>, or <Link to="/cypress-tx/oral-surgery" className="text-primary hover:underline">oral surgery</Link>, we can make it comfortable. Families across Cy-Fair and Cypress trust us for anxiety-free dental care.</>,
  ],
  trustBadges: [
    { icon: <Star className="w-5 h-5" />, label: "4.9★ Rating" },
    { icon: <Shield className="w-5 h-5" />, label: "Multiple Sedation Levels" },
    { icon: <Users className="w-5 h-5" />, label: "Comfort Amenities" },
  ],
  subServicesKicker: "WHY CHOOSE SMILE AVENUE",
  subServicesHeading: "Why Patients Choose Us for Sedation",
  subServicesBody: "Multiple sedation levels, comfort amenities, and experienced monitoring.",
  subServices: [
    { title: "Multiple Sedation Levels", description: "From mild relaxation (nitrous oxide) to deep sedation (IV) — we match the sedation level to your anxiety and procedure.", icon: <Heart className="w-5 h-5" /> },
    { title: "Comfort Amenities", description: "Blankets, Netflix on ceiling-mounted TVs, and noise-canceling headphones make every visit more comfortable.", icon: <Tv className="w-5 h-5" /> },
    { title: "Experienced Sedation Team", description: "Our team is specially trained in sedation administration with continuous vital sign monitoring throughout every procedure.", icon: <Syringe className="w-5 h-5" /> },
    { title: "All Procedures Under Sedation", description: "From routine cleanings to oral surgery — every procedure at Smile Avenue can be performed with sedation.", icon: <Wind className="w-5 h-5" /> },
  ],
  processKicker: "YOUR SEDATION EXPERIENCE",
  processHeading: "What to Expect",
  processBody: "A comfortable, stress-free dental experience from start to finish.",
  processSteps: [
    { number: "01", title: "Consultation", description: "We discuss your anxiety level, medical history, and the planned procedure to recommend the ideal sedation option.", icon: <Heart className="w-5 h-5" /> },
    { number: "02", title: "Sedation Plan Customized", description: "Your sedation plan is tailored to your specific needs — from mild nitrous oxide to deep IV sedation.", icon: <Pill className="w-5 h-5" /> },
    { number: "03", title: "Sedation Administered", description: "Your sedation is administered and carefully monitored throughout the procedure. You stay relaxed and comfortable.", icon: <Syringe className="w-5 h-5" /> },
    { number: "04", title: "Recovery & Post-Care", description: "Depending on sedation level, you may need a driver home. We provide detailed aftercare instructions and follow up.", icon: <Shield className="w-5 h-5" /> },
  ],
  faqHeading: "Sedation Questions",
  faqs: [
    { question: "How much does sedation cost?", answer: "Varies by sedation type — nitrous oxide is the most affordable, IV sedation costs more but provides the deepest relaxation. We discuss costs during your consultation. Insurance may cover sedation for certain procedures." },
    { question: "Is sedation dentistry safe?", answer: "Yes — sedation is administered by trained professionals with continuous vital sign monitoring throughout every procedure. We review your complete medical history before recommending any sedation option." },
    { question: "Will I be unconscious?", answer: "It depends on the level. Nitrous oxide provides mild relaxation while you remain fully conscious. Oral sedation makes you drowsy but responsive. IV sedation provides deep relaxation — you likely won't remember the procedure, but it's not general anesthesia." },
    { question: "Can I drive home after sedation?", answer: "After nitrous oxide, yes — the effects wear off within minutes. After oral or IV sedation, you'll need a responsible adult to drive you home. We provide specific instructions based on your sedation type." },
    { question: "Which sedation is right for me?", answer: "We recommend based on your anxiety level, medical history, and the procedure being performed. Nitrous is great for mild anxiety, oral sedation for moderate anxiety, and IV sedation for severe anxiety or complex procedures." },
  ],
  reviewsKicker: "PATIENT REVIEWS",
  reviewsHeading: "What Patients Are Saying",
  testimonials: [
    { quote: "I have severe dental anxiety and hadn't been to a dentist in 8 years. The IV sedation made it possible. I don't remember a thing and woke up with all my work done!", name: "Amanda G.", source: "Google Review" , location: "Fairfield, Cypress" },
    { quote: "The nitrous oxide was perfect for my cleaning. I went from white-knuckling the chair to actually relaxing. Such a game changer for anxious patients like me.", name: "Tyler B.", source: "Google Review" , location: "Towne Lake, Cypress" },
    { quote: "My son needed several fillings and was terrified. The oral sedation worked beautifully — he was calm and cooperative, and had no memory of any discomfort.", name: "Natalie V.", source: "Google Review" , location: "Bridgeland, Cypress" },
  ],
  ctaHeading: "Dental Care Without the Anxiety",
  ctaBody: "Don't let fear keep you from the care you deserve. Schedule your anxiety-free visit today.",
};

const SedationDentistryCypress = () => <ServicePageTemplate data={data} />;
export default SedationDentistryCypress;
