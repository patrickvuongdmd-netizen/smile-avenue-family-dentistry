import DoctorPageTemplate, { DoctorPageData } from "@/components/DoctorPageTemplate";
const KT = { name: "Katy", address: "23541 Westheimer Pkwy Ste #170, Katy, TX 77494", phone: "2818005008", phoneFmt: "(281) 800-5008", booking: "https://book.modento.io/c/8f2db4d7f5d14a26a0758de49dcf8cbc/smileavenue" };
const data: DoctorPageData = {
  name: "Dr. Sameer Bilal",
  credentials: "DDS",
  title: "General & Cosmetic Dentist",
  slug: "sameer-bilal-dds",
  metaTitle: "Dr. Sameer Bilal, DDS | Katy Dentist | Smile Avenue Dental",
  metaDescription: "Meet Dr. Sameer Bilal, DDS — award-winning general & cosmetic dentist at Smile Avenue in Katy, TX. Compassionate, thorough care for the whole family.",
  locations: [KT],
  education: [
    "Doctor of Dental Surgery (DDS) — Touro College of Dental Medicine",
    "Bachelor of Applied Science in Pre-Dentistry — University of Houston",
  ],
  specialties: [
    "General Dentistry",
    "Aesthetic & Cosmetic Dentistry",
    "Smile Makeovers",
    "Preventive Care",
    "Family Dentistry",
  ],
  bio: [
    "Dr. Sameer Bilal is a general dentist with advanced experience in aesthetic dentistry and smile makeovers, often treating multi-generational families. Originally from Pakistan, he relocated to the US over ten years ago with his parents, who inspired and supported him to achieve his dream of becoming a dentist.",
    "The recipient of numerous awards including the American Society of Dental Aesthetics Smigel Scholar Award, the ASDA Award of Excellence, and the International College of Dentists USA Section Leadership Award, his work as a dentist is an extension of his desire to improve his patients' health and well-being through thorough, compassionate care.",
    "A graduate of Touro College of Dental Medicine, he also holds a Bachelor of Applied Science in Pre-Dentistry Studies from the University of Houston. When speaking with his patients, Dr. Bilal emphasizes that developing a good oral health care routine early in life is a top priority.",
    "Patients consistently describe Dr. Bilal as one of the most honest, knowledgeable, and genuinely caring dentists they've encountered. He takes the time to explain every procedure, answers all questions without rushing, and makes even anxious patients feel at ease.",
    "Outside of the office, Dr. Bilal enjoys fitness, exploring cultural history, and spending time with family.",
  ],
  philosophy: [
    "I believe the best dentistry starts with listening. Every patient has different goals and concerns, and my role is to guide them toward the healthiest outcome while respecting their preferences.",
    "Building trust is the foundation of great dental care. I want every patient to feel comfortable, informed, and empowered when it comes to their oral health.",
  ],
};
export default () => <DoctorPageTemplate data={data} />;
