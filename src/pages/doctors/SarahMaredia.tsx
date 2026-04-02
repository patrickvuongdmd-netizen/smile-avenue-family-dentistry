import DoctorPageTemplate, { DoctorPageData } from "@/components/DoctorPageTemplate";
const CY = { name: "Cypress", address: "9212 Fry Rd #120, Cypress, TX 77433", phone: "8326481756", phoneFmt: "(832) 648-1756", booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress" };
const KT = { name: "Katy", address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494", phone: "2818005008", phoneFmt: "(281) 800-5008", booking: "https://book.modento.io/c/7e879f019b1846dda0dde08e10b56c25/SmileAvenueKaty" };
const data: DoctorPageData = {
  name: "Dr. Sarah Maredia",
  credentials: "DDS",
  title: "General Dentist",
  slug: "sarah-maredia-dds",
  metaTitle: "Dr. Sarah Maredia, DDS | Smile Avenue Family Dentistry",
  metaDescription: "Meet Dr. Sarah Maredia, DDS — general dentist at Smile Avenue in Cypress & Katy, TX. Community-centered care, continuing education, and Give Kids a Smile volunteer.",
  locations: [CY, KT],
  education: [
    "Doctor of Dental Surgery (DDS) — University of Buffalo School of Dental Medicine",
    "Bachelor of Science — Texas A&M University",
  ],
  specialties: [
    "General Dentistry",
    "Preventive Dentistry",
    "Restorative Dentistry",
    "Patient Education",
    "Family Dentistry",
  ],
  bio: [
    "Dr. Sarah Maredia brings a compassionate, community-centered approach to every patient she serves at Smile Avenue Family Dentistry. Her philosophy is simple: you're not just another patient — you're a valued member of the dental family.",
    "Dr. Maredia completed her undergraduate degree at Texas A&M University and earned her Doctor of Dental Surgery from the University of Buffalo School of Dental Medicine. She has since gained extensive experience across general, preventive, and restorative dentistry, always prioritizing patient education and transparent treatment recommendations.",
    "Understanding the importance of staying at the forefront of dental advancements, Dr. Maredia actively engages in continuing education courses to refine her expertise and expand her services, ensuring patients receive the most up-to-date and innovative care available.",
    "She is a member of the Academy of General Dentistry, American Dental Association, Texas Dental Association, and Greater Houston Dental Society. She also volunteers her time with the Give Kids a Smile Program, providing free dental care to children in need.",
    "Outside of the office, Dr. Maredia cherishes spending time with her daughter — whether enjoying the outdoors, baking, or watching the sunset together.",
  ],
  philosophy: [
    "Dentistry is both a science and an art. I love helping patients discover what's possible for their smile and then making it happen with precision and care.",
    "Every patient deserves to feel confident about their oral health. I'm here to partner with you on that journey — whether it's a simple cleaning or a complete smile transformation.",
  ],
};
export default () => <DoctorPageTemplate data={data} />;
