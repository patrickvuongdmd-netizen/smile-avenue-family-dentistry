import DoctorPageTemplate, { DoctorPageData } from "@/components/DoctorPageTemplate";
const CY = { name: "Cypress", address: "9212 Fry Rd #120, Cypress, TX 77433", phone: "8326481756", phoneFmt: "(832) 648-1756", booking: "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress" };
const data: DoctorPageData = {
  name: "Dr. Shayan Alkhiro",
  credentials: "DDS",
  title: "General Dentist",
  slug: "shayan-alkhiro-dds",
  metaTitle: "Dr. Shayan Alkhiro, DDS — General Dentist Cypress TX | Smile Avenue",
  metaDescription: "Meet Dr. Shayan Alkhiro, DDS — general dentist at Smile Avenue in Cypress, TX. Multilingual care in English, Arabic & more. Gentle, judgment-free dentistry.",
  locations: [CY],
  education: [
    "Doctor of Dental Surgery (DDS) — University of Texas School of Dentistry at Houston",
    "Bachelor of Science in Biology — University of Houston",
  ],
  specialties: [
    "General Dentistry",
    "Preventive Care",
    "Restorative Dentistry",
    "Endodontics",
    "Periodontal Therapy",
    "Prosthodontics",
  ],
  bio: [
    "Dr. Shayan Alkhiro brings a global perspective and a deeply personal approach to every patient she treats at Smile Avenue Family Dentistry. With a background spanning multiple countries and languages, she connects with patients from all walks of life — making everyone feel understood, respected, and at ease.",
    "Dr. Alkhiro earned her Doctor of Dental Surgery degree from the University of Texas School of Dentistry at Houston and holds a degree in Biology from the University of Houston. Her clinical expertise covers a full range of general dentistry services including preventive care, restorative treatments, endodontics, periodontal therapy, and prosthodontics.",
    "Patients consistently praise her thoroughness, honest communication, and ability to explain treatment options clearly without pressure or upselling. Her care philosophy centers on transparency, comfort, and education — she believes patients make their best decisions when they truly understand their options.",
    "What makes Dr. Alkhiro stand out is her remarkable ability to connect. She speaks four languages — English, Arabic, and two additional languages — allowing her to serve the diverse Cypress community in ways few dentists can. Whether you're a long-time patient or visiting for the first time in years, she meets you where you are with patience, warmth, and zero judgment.",
    "When she's not caring for patients, Dr. Alkhiro enjoys traveling, exploring new cultures, and spending time with family and friends.",
  ],
  philosophy: [
    "My care philosophy centers on three principles: transparency, comfort, and education. I believe patients make their best decisions when they truly understand their options — and I take the time to ensure that happens at every visit.",
    "I want every patient to feel heard and empowered. No pressure, no upselling — just honest guidance and gentle care.",
  ],
};
export default () => <DoctorPageTemplate data={data} />;
