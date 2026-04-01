import DoctorPageTemplate, { DoctorPageData } from "@/components/DoctorPageTemplate";
const CY = { name: "Cypress", address: "9212 Fry Rd #120, Cypress, TX 77433", phone: "8326481756", phoneFmt: "(832) 648-1756", booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress" };
const KT = { name: "Katy", address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494", phone: "2818005008", phoneFmt: "(281) 800-5008", booking: "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue" };
const data: DoctorPageData = {
  name: "Dr. Patrick Vuong",
  credentials: "DMD",
  title: "Founder & Lead Dentist",
  slug: "patrick-vuong-dmd",
  metaTitle: "Dr. Patrick Vuong, DMD | Founder | Smile Avenue Dental",
  metaDescription: "Meet Dr. Patrick Vuong, DMD — founder of Smile Avenue Dental. Specializing in dental implants, IV sedation, and digital dentistry in Cypress & Katy, TX.",
  locations: [CY, KT],
  education: [
    "Doctor of Dental Medicine (DMD)",
    "Level 3 IV Sedation Certification",
    "Advanced Implant Dentistry — Surgical Placement & Restoration",
    "Advanced Cosmetic Dentistry — Smile Design, Veneers & Full Mouth Rehabilitation",
  ],
  specialties: [
    "Dental Implants & All-on-X",
    "IV Sedation Dentistry",
    "Full Mouth Reconstruction",
    "Cosmetic Smile Design",
    "Digital Dentistry",
  ],
  bio: [
    "Dr. Patrick Vuong didn't start Smile Avenue Family Dentistry just to open a dental practice — he built it to connect people through care, technology, and purpose. As the founder and guiding voice of Smile Avenue, he brings together cutting-edge innovation, exceptional clinical training, and a values-first approach to create a dental experience that feels deeply personal and remarkably advanced.",
    "Dr. Vuong earned his Doctor of Dental Medicine degree and has since pursued extensive postdoctoral training in Level 3 IV Sedation Certification for complex or anxious cases, Advanced Implant Dentistry including surgical placement and restoration, and Advanced Cosmetic Dentistry including smile design, veneers, and full mouth rehabilitation. He actively invests in the latest materials and digital systems to ensure that patients benefit from the best tools modern dentistry has to offer.",
    "His approach centers on clear communication, tailored planning, and outstanding results — without compromise. Every patient receives a roadmap built for them, supported by elite training and tools, but grounded in what actually matters: trust and comfort.",
    "As a practice owner, Dr. Vuong is as committed to his team's growth as he is to his patients' outcomes. He mentors clinicians and empowers staff to operate with clarity, confidence, and compassion. Under his leadership, Smile Avenue isn't just a place to work — it's a culture built on excellence, humility, and progress.",
    "When he's not leading Smile Avenue, Dr. Vuong is fully immersed in his most meaningful role: being a dad to his two toddlers.",
  ],
  philosophy: [
    "I believe every patient deserves a dentist who listens first and treats second. My approach is comprehensive — I want to understand your goals, your concerns, and your health history before recommending any treatment.",
    "Technology is a tool, not a replacement for the human connection. I invest in the latest digital equipment because it allows me to be more precise, more efficient, and more conservative — but the real magic happens when a patient feels truly heard and cared for.",
  ],
};
export default () => <DoctorPageTemplate data={data} />;
