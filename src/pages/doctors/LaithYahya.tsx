import DoctorPageTemplate, { DoctorPageData } from "@/components/DoctorPageTemplate";
const CY = { name: "Cypress", address: "9212 Fry Rd #120, Cypress, TX 77433", phone: "8326481756", phoneFmt: "(832) 648-1756", booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress" };
const data: DoctorPageData = {
  name: "Dr. Laith Yahya",
  credentials: "DDS",
  title: "General Dentist",
  slug: "laith-yahya-dds",
  metaTitle: "Dr. Laith Yahya, DDS | Dentist | Smile Avenue Dental",
  metaDescription: "Meet Dr. Laith Yahya, DDS — known for precision, calm demeanor & passion for restorative care at Smile Avenue in Cypress, TX.",
  locations: [CY],
  education: [
    "Doctor of Dental Surgery (DDS)",
  ],
  specialties: [
    "General Dentistry",
    "Restorative Dentistry",
    "Cosmetic Dentistry",
    "Comprehensive Treatment Planning",
  ],
  bio: [
    "Dr. Laith Yahya brings a passion for precision and a warm, reassuring presence to every patient interaction at Smile Avenue Family Dentistry. Known for his meticulous clinical technique and genuine care for his patients' well-being, he has built a reputation as a dentist patients trust completely.",
    "Dr. Yahya earned his Doctor of Dental Surgery degree and has developed deep expertise across general, restorative, and cosmetic dentistry. He takes a comprehensive approach to treatment planning, ensuring every patient understands their options and feels confident in the path forward.",
    "His patients consistently highlight his calm demeanor, thorough explanations, and ability to make even complex procedures feel manageable. Whether it's a routine cleaning or an advanced restoration, Dr. Yahya treats every case with the same level of care and attention to detail.",
    "He believes in building long-term relationships with his patients — not just treating teeth, but supporting overall oral health for years to come.",
  ],
  philosophy: [
    "Integrity is the foundation of good dentistry. I will always tell you exactly what I see, present every option available, and never recommend treatment you don't need.",
    "I believe in doing things right the first time. Whether it's a simple filling or a complex restoration, I approach every procedure with the same level of precision and care.",
  ],
};
export default () => <DoctorPageTemplate data={data} />;
