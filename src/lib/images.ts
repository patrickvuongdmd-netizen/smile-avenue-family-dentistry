// Central image URL constants for the entire site
import patrickVuongImg from "@/assets/doctors/patrick-vuong.png";
import peterKimImg from "@/assets/doctors/peter-kim.png";
import laithYahyaImg from "@/assets/doctors/laith-yahya.png";
import sameerBilalImg from "@/assets/doctors/sameer-bilal.png";
import sarahMarediaImg from "@/assets/doctors/sarah-maredia.png";

export const DOCTOR_IMAGES: Record<string, { url: string; alt: string }> = {
  "patrick-vuong": {
    url: patrickVuongImg,
    alt: "Dr. Patrick Vuong, DMD - Dentist at Smile Avenue Family Dentistry Cypress & Katy TX",
  },
  "peter-kim": {
    url: peterKimImg,
    alt: "Dr. Peter Kim, DDS - Dentist at Smile Avenue Family Dentistry Cypress TX",
  },
  "laith-yahya": {
    url: laithYahyaImg,
    alt: "Dr. Laith Yahya, DDS - Dentist at Smile Avenue Family Dentistry Cypress TX",
  },
  "sameer-bilal": {
    url: sameerBilalImg,
    alt: "Dr. Sameer Bilal, DDS - Dentist at Smile Avenue Family Dentistry Katy TX",
  },
  "sarah-maredia": {
    url: sarahMarediaImg,
    alt: "Dr. Sarah Maredia, DDS - Dentist at Smile Avenue Family Dentistry Cypress & Katy TX",
  },
  "shayan-alkhiro": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2026/03/image-dr-shayan-alkhiro.webp",
    alt: "Dr. Shayan Alkhiro, DDS - Dentist at Smile Avenue Family Dentistry Cypress TX",
  },
};

export const TEAM_MEMBERS = {
  hygienists: [
    { name: "Arpine Janbazian", credentials: "RDH", role: "Dental Hygienist", locations: ["Cypress"], imgKey: "arpine-janbazian" },
    { name: "Ivy Doan", credentials: "RDH", role: "Dental Hygienist", locations: ["Cypress"], imgKey: "ivy-doan" },
    { name: "Ngoc \"Jen\" Huynh", credentials: "RDH", role: "Dental Hygienist", locations: ["Cypress"], imgKey: "ngoc-huynh" },
  ],
  assistants: [
    { name: "Ali Hiti", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress", "Katy"], imgKey: "ali-hiti" },
    { name: "Ashton Mitchell", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress"], imgKey: "ashton-mitchell" },
    { name: "Daniel Rodriguez", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress"], imgKey: "daniel-rodriguez" },
    { name: "Diana Ortiz", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress"], imgKey: "diana-ortiz" },
    { name: "Eva Wing", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress"], imgKey: "eva-wing" },
    { name: "Gisselle Gomez", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress"], imgKey: "gisselle-gomez" },
    { name: "Kristen Davison", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress"], imgKey: "kristen-davison" },
    { name: "London Robinson", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress", "Katy"], imgKey: "london-robinson" },
    { name: "Stephanie Tabora", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress"], imgKey: "stephanie-tabora" },
    { name: "Tania Hernandez", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress", "Katy"], imgKey: "tania-hernandez" },
    { name: "Violetta Arroyo", credentials: "RDA", role: "Dental Assistant", locations: ["Cypress", "Katy"], imgKey: "violetta-arroyo" },
    { name: "Whitney Darden", credentials: "RDA", role: "Dental Assistant", locations: ["Katy"], imgKey: "whitney-darden" },
  ],
  frontOffice: [
    { name: "Kerstin Villasenor", credentials: "", role: "Office Manager", locations: ["Cypress", "Katy"], imgKey: "kerstin-villasenor" },
    { name: "Duaa Shawkat", credentials: "", role: "Office Manager", locations: ["Cypress"], imgKey: "duaa-shawkat" },
    { name: "Emmanuel Jaimes", credentials: "", role: "Office Manager", locations: ["Katy"], imgKey: "emmanuel-jaimes" },
    { name: "Walter Perez", credentials: "", role: "Treatment Coordinator", locations: ["Cypress"], imgKey: "walter-perez" },
    { name: "Clara Atencio", credentials: "", role: "Schedule Coordinator", locations: ["Cypress"], imgKey: "clara-atencio" },
    { name: "Aleydis Melendez", credentials: "", role: "Schedule Coordinator", locations: ["Cypress", "Katy"], imgKey: "aleydis-melendez" },
    { name: "Lara Hull", credentials: "", role: "Insurance Coordinator", locations: ["Cypress"], imgKey: "lara-hull" },
    { name: "Rebekah Petry", credentials: "", role: "Insurance Coordinator", locations: ["Cypress", "Katy"], imgKey: "rebekah-petry" },
    { name: "Ronald Grady", credentials: "", role: "Insurance Coordinator", locations: ["Cypress", "Katy"], imgKey: "ronald-grady" },
  ],
};

export const OFFICE_IMAGES = {
  homepageHero: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/07/img-bg-new.webp",
  homepageHeroMobile: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/07/img-bg-mobile.webp",
  cypressHero: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-office-tour.webp",
  katyHero: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-Dental-Office-Tour.jpg",
  aboutHero: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/10/img-about-us.webp",
  aboutTeamAction: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-office-tour-gallery-6.webp",
  aboutKatyTeam: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-about-us.webp",
  contactHero: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-contact-us.webp",
  newPatientHero: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-New-Patients.jpg",
  newPatientFirstVisit: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-new-patients-cypress.webp",
  patientCare: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-new-patients-cypress.webp",
  waitingRoom: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/image-9.jpg",
  treatmentRoom: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-office-tour-gallery-5.webp",
  hallway: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-office-tour-gallery-1.webp",
  coffeeStation: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-office-tour-6.webp",
  teamPhoto: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/team-img.jpg",
  smileGallery: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-bf.webp",
};

export const SERVICE_IMAGES: Record<string, { url: string; alt: string }> = {
  "dental-implants": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/07/img-single-tooth-implant-1.webp",
    alt: "Dental implants procedure at Smile Avenue Family Dentistry",
  },
  "cosmetic-dentistry": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-cosmetic-dentistry.webp",
    alt: "Cosmetic dentistry smile makeover at Smile Avenue Family Dentistry",
  },
  "emergency-dentist": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-dental-emergencies.webp",
    alt: "Emergency dental care at Smile Avenue Family Dentistry",
  },
  "invisalign": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-invisalign-clear-aligners.webp",
    alt: "Invisalign clear aligners at Smile Avenue Family Dentistry",
  },
  "dental-crowns": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-restorative-dentistry.webp",
    alt: "Dental crowns and restorative dentistry at Smile Avenue Family Dentistry",
  },
  "oral-surgery": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-Oral-Surgery-1.jpg",
    alt: "Oral surgery at Smile Avenue Family Dentistry",
  },
  "dental-cleaning": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-preventive-dentistry.webp",
    alt: "Professional dental cleaning at Smile Avenue Family Dentistry",
  },
  "preventive-dentistry": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-preventive-dentistry.webp",
    alt: "Preventive dentistry at Smile Avenue Family Dentistry",
  },
  "veneers": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-cosmetic-dentistry.webp",
    alt: "Porcelain veneers smile makeover at Smile Avenue Family Dentistry",
  },
  "all-on-x-implants": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/07/img-all-on-x-dental-implants-1.webp",
    alt: "All-on-X full arch implants at Smile Avenue Family Dentistry",
  },
  "teeth-whitening": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-teeth-whitening.webp",
    alt: "Professional teeth whitening at Smile Avenue Family Dentistry",
  },
  "root-canal": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-restorative-dentistry.webp",
    alt: "Root canal therapy at Smile Avenue Family Dentistry",
  },
  "sedation-dentistry": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-Soft-Tissue-Treatment-1.jpg",
    alt: "Sedation dentistry for comfortable care at Smile Avenue Family Dentistry",
  },
  "pediatric-dentistry": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-preventive-dentistry.webp",
    alt: "Pediatric dentistry for children at Smile Avenue Family Dentistry",
  },
  "dentures": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/07/img-multiple-dental-implants-1.webp",
    alt: "Dentures and tooth replacement at Smile Avenue Family Dentistry",
  },
  "dental-bridges": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2025/12/img-restorative-dentistry.webp",
    alt: "Dental bridges at Smile Avenue Family Dentistry",
  },
  "tooth-extraction": {
    url: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/img-Oral-Surgery-1.jpg",
    alt: "Tooth extraction at Smile Avenue Family Dentistry",
  },
};

export const VIDEO_TESTIMONIALS = [
  {
    title: "Can One Visit Change Your Smile?",
    thumbnail: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/Can-One-Visit-Change-Your-Smile-Watch-This-Incredible-Adjustment-at-Smile-Avenue-Family-Dentistry.webp",
    youtubeId: "wiocP_nsFPY",
  },
  {
    title: "From Uncomfortable to Confident Smiles",
    thumbnail: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/From-Uncomfortable-to-Confident-Smiles.webp",
    youtubeId: "Do_22b5MX_M",
  },
  {
    title: "Needed A Dentist? Found My Go-To Spot!",
    thumbnail: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/Needed-A-Dentist-Found-My-Go-To-Spot.webp",
    youtubeId: "ilqukqtmvjY",
  },
  {
    title: "Why Smile Avenue is Trusted for Caring for Patients & Families",
    thumbnail: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/Why-Smile-Avenue-Family-Dentistry-is-Trusted-for-Caring-for-Patients-Families.webp",
    youtubeId: "EtAuvGSjEnI",
  },
  {
    title: "Discover the World Inside Your Mouth with Andrew",
    thumbnail: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/Discover-the-Fascinating-World-Inside-Your-Mouth-with-Andrew-at-Smile-Avenue.webp",
    youtubeId: "zKD0AARsWTk",
  },
  {
    title: "Invisalign Patient Testimonial",
    thumbnail: "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/Invisalign-Patient-Testimonial.webp",
    youtubeId: "nS2MUEQXbWE",
  },
];

export const HERO_VIDEO_URL = "https://www.smileavenuefamilydentistry.com/wp-content/uploads/2024/11/Smile-Avenue-TX-NOVEMBER-HERO-VIDEO-MADISON-FEEL_WIP2.mp4";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/SmileAvenueFamilyDentistry/",
  instagram: "https://www.instagram.com/smileavenuefamilydentistry/",
  tiktok: "https://www.tiktok.com/@smileavenuetx",
};
