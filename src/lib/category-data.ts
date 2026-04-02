// Category landing page data for the intermediate tier in the 5-tier SEO architecture

export interface CategoryService {
  name: string;
  slug: string;
  description: string;
}

export interface CategoryData {
  slug: string;
  categoryName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroBody: string;
  introHeading: string;
  introParas: string[];
  services: CategoryService[];
  faqs: { question: string; answer: string }[];
}

export const CATEGORY_NAMES: Record<string, string> = {
  preventive: "Preventive & General",
  cosmetic: "Cosmetic & Aesthetic",
  restorative: "Restorative & Advanced",
  surgical: "Surgical & Periodontal",
};

export const CATEGORIES: Record<string, CategoryData> = {
  preventive: {
    slug: "preventive",
    categoryName: "Preventive & General Dentistry",
    metaTitle: "Preventive & General Dentistry | Cleanings, Exams & Family Care | Smile Avenue",
    metaDescription: "Preventive and general dental services including cleanings, exams, children's dentistry, and emergency care. Two locations in Cypress and Katy, TX.",
    heroHeading: "Preventive & General Dentistry",
    heroBody: "The foundation of a healthy smile starts with proactive care. From routine cleanings to emergency visits, our preventive services catch problems early and keep your family smiling.",
    introHeading: "Why Prevention Matters",
    introParas: [
      "Preventive dentistry is the most cost-effective way to maintain your oral health. Regular checkups, professional cleanings, and early intervention can prevent small issues from becoming painful, expensive problems.",
      "At Smile Avenue, our preventive approach combines advanced diagnostic technology — including digital X-rays and intraoral cameras — with genuine, patient-first care. We treat families of all ages, from your child's first dental visit to ongoing adult wellness care.",
    ],
    services: [
      { name: "Preventive Dentistry", slug: "preventive-dentistry", description: "Comprehensive exams, digital X-rays, and proactive oral health strategies to catch problems before they start." },
      { name: "Dental Cleaning", slug: "dental-cleaning", description: "Professional cleanings to remove plaque, tartar, and surface stains for healthier teeth and gums." },
      { name: "Children's Dentistry", slug: "pediatric-dentistry", description: "Gentle, age-appropriate care designed to make dental visits fun and build lifelong healthy habits." },
      { name: "Family Dental Care", slug: "family-dental-care", description: "Convenient care for the whole family — from toddlers to grandparents — under one roof." },
      { name: "Emergency Dentistry", slug: "emergency-dentist", description: "Same-day urgent care for toothaches, broken teeth, knocked-out teeth, and dental emergencies." },
    ],
    faqs: [
      { question: "How often should I get a dental cleaning?", answer: "Most adults and children should have a professional cleaning every six months. Patients with gum disease or higher risk factors may benefit from cleanings every 3–4 months." },
      { question: "At what age should my child first see a dentist?", answer: "The American Academy of Pediatric Dentistry recommends a first visit by age 1 or within 6 months of the first tooth erupting. Early visits help establish comfort and catch developmental issues." },
      { question: "What does a preventive exam include?", answer: "A comprehensive exam includes a visual inspection, digital X-rays, oral cancer screening, gum health assessment, and a discussion of any concerns or treatment needs." },
    ],
  },

  cosmetic: {
    slug: "cosmetic",
    categoryName: "Cosmetic & Aesthetic Dentistry",
    metaTitle: "Cosmetic Dentistry | Veneers, Whitening, Invisalign & Smile Design | Smile Avenue",
    metaDescription: "Transform your smile with cosmetic dentistry — veneers, teeth whitening, Invisalign, and complete smile makeovers. Expert care in Cypress and Katy, TX.",
    heroHeading: "Cosmetic & Aesthetic Dentistry",
    heroBody: "Your smile is your first impression. Our cosmetic services range from subtle enhancements to complete transformations — all designed to help you feel confident every time you smile.",
    introHeading: "The Art & Science of Smile Design",
    introParas: [
      "Modern cosmetic dentistry combines artistic vision with dental precision. Whether you want whiter teeth, straighter alignment, or a complete smile makeover, the results can be life-changing — not just aesthetically, but in confidence and quality of life.",
      "What sets Smile Avenue apart is our in-house Smile Dental Lab. Your veneers, crowns, and restorations are designed and fabricated on-site, giving us complete control over shade, shape, and fit. The result is a more natural, precise outcome than outsourced lab work.",
    ],
    services: [
      { name: "Cosmetic Dentistry", slug: "cosmetic-dentistry", description: "Comprehensive smile design including bonding, contouring, and multi-procedure makeovers." },
      { name: "Veneers", slug: "veneers", description: "Ultra-thin porcelain shells that transform the shape, color, and alignment of your front teeth." },
      { name: "Invisalign®", slug: "invisalign", description: "Clear, removable aligners that straighten teeth discreetly — no metal brackets required." },
      { name: "Teeth Whitening", slug: "teeth-whitening", description: "Professional-grade whitening for dramatic results in a single visit or with take-home trays." },
    ],
    faqs: [
      { question: "How do I know which cosmetic treatment is right for me?", answer: "Start with a cosmetic consultation. We'll discuss your goals, examine your teeth, and show you what's possible. Many patients are surprised by how much can be achieved with minimally invasive options." },
      { question: "Can I combine multiple cosmetic treatments?", answer: "Absolutely. Many smile makeovers combine whitening, veneers, and Invisalign for a comprehensive transformation. We'll create a phased treatment plan that fits your timeline and budget." },
      { question: "How long do cosmetic results last?", answer: "It depends on the treatment. Whitening lasts 6–12 months. Veneers last 10–15 years. Invisalign results are permanent with retainer wear. We'll discuss longevity expectations for each option." },
    ],
  },

  restorative: {
    slug: "restorative",
    categoryName: "Restorative & Advanced Dentistry",
    metaTitle: "Restorative Dentistry | Implants, Crowns, Bridges & Dentures | Smile Avenue",
    metaDescription: "Restore damaged or missing teeth with dental implants, crowns, bridges, dentures, and root canal therapy. Expert restorative care in Cypress and Katy, TX.",
    heroHeading: "Restorative & Advanced Dentistry",
    heroBody: "When teeth are damaged, decayed, or missing, restorative dentistry brings them back to full function and beauty. From a single crown to a full-mouth reconstruction, we handle it all in-house.",
    introHeading: "Rebuilding Smiles with Precision",
    introParas: [
      "Restorative dentistry focuses on repairing and replacing teeth that have been compromised by decay, trauma, or wear. The goal is to restore both function — comfortable chewing and speaking — and aesthetics that look completely natural.",
      "At Smile Avenue, our restorative advantage is our in-house Smile Dental Lab and 3D CBCT imaging. This allows us to plan with digital precision, fabricate restorations on-site, and deliver results that fit perfectly — often in fewer appointments than traditional practices.",
    ],
    services: [
      { name: "Dental Implants", slug: "dental-implants", description: "Permanent titanium tooth replacements that look, feel, and function like natural teeth." },
      { name: "All-on-X Implants", slug: "all-on-x-implants", description: "Full arch restoration with as few as 4 implants — a permanent alternative to dentures." },
      { name: "Dental Crowns", slug: "dental-crowns", description: "Custom crowns to protect, rebuild, and restore damaged or weakened teeth." },
      { name: "Dental Bridges", slug: "dental-bridges", description: "Fixed bridges to replace one or more missing teeth without surgery." },
      { name: "Dentures", slug: "dentures", description: "Full and partial dentures for complete smile restoration and renewed confidence." },
      { name: "Root Canal", slug: "root-canal", description: "Save infected teeth with modern, comfortable root canal therapy." },
    ],
    faqs: [
      { question: "How do I know if I need a crown or a filling?", answer: "Fillings work for small to moderate cavities. When more than half the tooth is damaged, or the tooth has had a root canal, a crown provides the structural protection a filling can't." },
      { question: "Are dental implants painful?", answer: "Most patients report less discomfort than they expected. The procedure is done under local anesthesia (with sedation available), and recovery is comparable to a tooth extraction." },
      { question: "Can I get a temporary tooth while waiting for my implant?", answer: "Yes. We provide temporary restorations so you're never without a tooth during the healing period." },
    ],
  },

  surgical: {
    slug: "surgical",
    categoryName: "Surgical & Periodontal Dentistry",
    metaTitle: "Oral Surgery & Sedation Dentistry | Extractions & Advanced Care | Smile Avenue",
    metaDescription: "Expert oral surgery, tooth extraction, and sedation dentistry. Comfortable, anxiety-free care for complex procedures in Cypress and Katy, TX.",
    heroHeading: "Surgical & Periodontal Dentistry",
    heroBody: "From wisdom teeth to bone grafting, our surgical services are performed with advanced technology and compassionate sedation options. You're in expert hands.",
    introHeading: "Advanced Procedures, Gentle Care",
    introParas: [
      "Surgical and periodontal procedures sound intimidating, but modern techniques and sedation options make them far more comfortable than most patients expect. At Smile Avenue, we handle everything from simple extractions to complex bone grafting — all in-house, without referrals.",
      "Our surgical capabilities are backed by 3D CBCT imaging for precise planning, an in-house dental lab for immediate temporary restorations, and multiple sedation options so you can relax throughout the procedure.",
    ],
    services: [
      { name: "Oral Surgery", slug: "oral-surgery", description: "Surgical extractions, bone grafting, and advanced procedures performed with precision and care." },
      { name: "Tooth Extraction", slug: "tooth-extraction", description: "Simple and surgical tooth removal with comfort-focused care and clear aftercare guidance." },
      { name: "Sedation Dentistry", slug: "sedation-dentistry", description: "Nitrous oxide, oral sedation, and IV sedation for relaxed, anxiety-free treatment." },
    ],
    faqs: [
      { question: "Will I be asleep during oral surgery?", answer: "It depends on the sedation level you choose. Nitrous oxide keeps you relaxed but awake. Oral sedation makes you drowsy. IV sedation puts you in a twilight state where you're unlikely to remember the procedure." },
      { question: "How long is recovery after a tooth extraction?", answer: "Most patients return to normal activities within 1–2 days. Surgical extractions (like wisdom teeth) may require 3–5 days of modified activity. We provide detailed aftercare instructions." },
      { question: "Do you refer out for surgical procedures?", answer: "No. Our doctors handle all surgical procedures in-house, including wisdom teeth, bone grafting, and implant placement. This means fewer appointments and continuity of care." },
    ],
  },
};
