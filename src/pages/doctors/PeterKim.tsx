import DoctorPageTemplate, { DoctorPageData } from "@/components/DoctorPageTemplate";
const CY = { name: "Cypress", address: "9212 Fry Rd #120, Cypress, TX 77433", phone: "8326481756", phoneFmt: "(832) 648-1756", booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress" };
const data: DoctorPageData = {
  name: "Dr. Peter Kim",
  credentials: "DDS",
  title: "General Dentist",
  slug: "peter-kim-dds",
  metaTitle: "Dr. Peter Kim, DDS | Cypress Dentist | Smile Avenue Dental",
  metaDescription: "Meet Dr. Peter Kim, DDS — 15+ years of experience, NYU-trained general dentist at Smile Avenue Cypress, TX. Gentle, patient-focused care.",
  locations: [CY],
  education: [
    "Doctor of Dental Surgery (DDS) — New York University College of Dentistry",
  ],
  specialties: [
    "General & Restorative Dentistry",
    "Patient Education & Empowerment",
    "Preventive Care",
    "Patient Comfort & Gentle Approach",
  ],
  bio: [
    "Dr. Peter Kim's journey to dentistry began in the patient's chair. After experiencing frequent dental visits as a child, he realized early on how impactful a great dental experience could be — and decided he wanted to be that trusted figure for others. Now, with over 15 years of clinical experience, he brings both technical precision and empathetic care to Smile Avenue Family Dentistry in Cypress.",
    "Dr. Kim earned his Doctor of Dental Surgery from New York University College of Dentistry. His mission is to empower patients through education, fostering greater confidence and self-assurance. He is known for helping patients of all ages feel comfortable while offering solutions that are clear, personalized, and easy to understand.",
    '"I see my role as a guide, not a salesperson," he explains. "If a patient understands what\'s going on and why it matters, they\'re not just more compliant — they\'re more invested in their health."',
    "What he enjoys most is being able to restore oral health in a way that leaves patients both comfortable and happy. For Dr. Kim, success is measured by trust, not procedures.",
    "Outside of dentistry, Dr. Kim enjoys spending time with his wife and sons, supporting Houston sports teams, and playing golf.",
  ],
  philosophy: [
    "I see my role as a guide, not a salesperson. If a patient understands what's going on and why it matters, they're not just more compliant — they're more invested in their health.",
    "Dentistry doesn't have to be stressful. My goal is to make every visit as pleasant as possible while delivering the highest quality care.",
  ],
};
export default () => <DoctorPageTemplate data={data} />;
