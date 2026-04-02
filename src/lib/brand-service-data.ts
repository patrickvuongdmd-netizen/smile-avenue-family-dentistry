// Centralized data for all 17 brand-global service pages
// Each entry feeds BrandServicePageTemplate with educational, non-geo content

export interface BrandServiceFaq {
  question: string;
  answer: string;
}

export interface BrandServiceProcess {
  number: string;
  title: string;
  description: string;
}

export interface BrandServiceCrossLink {
  text: string;
  slug: string;
}

export interface BrandServiceData {
  serviceSlug: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroHeading: string;
  heroBody: string;
  introKicker: string;
  introHeading: string;
  introParas: string[];
  crossLinks?: BrandServiceCrossLink[];
  whyHeading: string;
  whyPoints: { title: string; description: string }[];
  processHeading: string;
  processSteps: BrandServiceProcess[];
  faqHeading: string;
  faqs: BrandServiceFaq[];
  relatedSlugs: string[];
  procedureType?: string;
  howPerformed?: string;
  bodyLocation?: string;
}

// Map slug → display name for related services
export const SERVICE_NAMES: Record<string, string> = {
  "emergency-dentist": "Emergency Dentistry",
  "dental-implants": "Dental Implants",
  "cosmetic-dentistry": "Cosmetic Dentistry",
  "teeth-whitening": "Teeth Whitening",
  "dental-crowns": "Dental Crowns",
  "all-on-x-implants": "All-on-X Implants",
  "invisalign": "Invisalign®",
  "root-canal": "Root Canal",
  "dental-cleaning": "Dental Cleaning",
  "pediatric-dentistry": "Children's Dentistry",
  "dentures": "Dentures",
  "veneers": "Veneers",
  "dental-bridges": "Dental Bridges",
  "tooth-extraction": "Tooth Extraction",
  "oral-surgery": "Oral Surgery",
  "sedation-dentistry": "Sedation Dentistry",
  "preventive-dentistry": "Preventive Dentistry",
  "family-dental-care": "Family Dental Care",
};

export const BRAND_SERVICES: Record<string, BrandServiceData> = {
  "emergency-dentist": {
    serviceSlug: "emergency-dentist",
    serviceName: "Emergency Dentistry",
    metaTitle: "Emergency Dentistry | Same-Day Urgent Dental Care | Smile Avenue",
    metaDescription: "Dental emergency? Smile Avenue offers same-day appointments for toothaches, broken teeth, knocked-out teeth, and more. Two locations in Cypress and Katy, TX.",
    heroKicker: "SAME-DAY EMERGENCY CARE",
    heroHeading: "Emergency Dentistry",
    heroBody: "Dental emergencies don't wait — and neither should your care. At Smile Avenue, we reserve time every day for urgent cases so you can be seen quickly, often the same day you call.",
    introKicker: "UNDERSTANDING EMERGENCIES",
    introHeading: "What Counts as a Dental Emergency?",
    introParas: [
      "A dental emergency is any situation involving sudden pain, trauma, or a condition that requires immediate attention to prevent further damage. Common emergencies include severe toothaches, cracked or broken teeth, knocked-out teeth, lost fillings or crowns, dental abscesses, and uncontrolled bleeding.",
      "Not sure if your situation qualifies? Call us. Our team will assess your symptoms over the phone and advise you on the best next steps — whether that's coming in immediately or scheduling a same-day appointment.",
    ],
    whyHeading: "Why Choose Smile Avenue for Emergency Care",
    whyPoints: [
      { title: "Same-Day Appointments", description: "We reserve time daily for urgent cases so you're never left waiting in pain." },
      { title: "Sedation Options Available", description: "Emergencies are stressful. We offer sedation to keep you comfortable during treatment." },
      { title: "Advanced Diagnostics", description: "Digital X-rays and 3D CBCT imaging for fast, accurate diagnosis — no guesswork." },
      { title: "All Treatment In-House", description: "Root canals, extractions, crowns — we handle everything under one roof without referrals." },
    ],
    processHeading: "What to Expect During an Emergency Visit",
    processSteps: [
      { number: "01", title: "Call Us Immediately", description: "Our team assesses your situation, provides at-home care instructions, and schedules you as soon as possible." },
      { number: "02", title: "Rapid Diagnosis", description: "Digital X-rays or 3D scan for a complete picture. Pain management comes first." },
      { number: "03", title: "Immediate Treatment", description: "We begin treatment right away — filling, crown, root canal, extraction, or stabilization." },
      { number: "04", title: "Aftercare & Follow-Up", description: "Detailed aftercare instructions and scheduled follow-ups to ensure complete healing." },
    ],
    faqHeading: "Emergency Dentistry FAQ",
    faqs: [
      { question: "How much does an emergency dental visit cost?", answer: "It depends on the diagnosis. We start with an exam and X-rays, then provide a clear cost breakdown before any treatment. Most PPO insurance accepted, and financing options like CareCredit are available." },
      { question: "What should I do if a tooth gets knocked out?", answer: "Pick it up by the crown (not the root), rinse gently, and try to reinsert it. If that's not possible, keep it moist in milk or saliva and call us immediately — the best chance of saving it is within 30 minutes." },
      { question: "Can a toothache go away on its own?", answer: "Pain may subside temporarily, but the underlying cause — infection, decay, or a crack — will worsen without treatment. Don't wait." },
      { question: "Do you offer sedation for emergency procedures?", answer: "Yes. We offer sedation options to ensure you're comfortable, especially if the procedure is extensive or you're anxious." },
      { question: "Do you accept walk-ins for emergencies?", answer: "Call ahead for the fastest service, but we never turn away genuine emergencies." },
    ],
    relatedSlugs: ["root-canal", "tooth-extraction", "dental-crowns", "sedation-dentistry"],
  },

  "dental-implants": {
    serviceSlug: "dental-implants",
    serviceName: "Dental Implants",
    metaTitle: "Dental Implants | Permanent Tooth Replacement | Smile Avenue",
    metaDescription: "Dental implants that look, feel, and function like natural teeth. Expert placement with 3D planning. Two locations in Cypress and Katy, TX.",
    heroKicker: "PERMANENT TOOTH REPLACEMENT",
    heroHeading: "Dental Implants",
    heroBody: "Dental implants are the gold standard for replacing missing teeth. A titanium post fuses with your jawbone to create a permanent foundation for a custom crown that looks, feels, and functions like your natural tooth.",
    introKicker: "THE MODERN SOLUTION",
    introHeading: "Why Dental Implants?",
    introParas: [
      "Unlike dentures or bridges, dental implants replace the entire tooth — root and all. This preserves jawbone density, prevents neighboring teeth from shifting, and gives you a restoration that can last a lifetime with proper care.",
      "At Smile Avenue, every implant case begins with 3D CBCT imaging and digital treatment planning. Our doctors handle the entire process in-house — from placement to the final custom crown crafted in our on-site Smile Dental Lab.",
    ],
    whyHeading: "Why Choose Smile Avenue for Dental Implants",
    whyPoints: [
      { title: "3D-Guided Placement", description: "CBCT imaging and digital planning for precision placement and predictable results." },
      { title: "In-House Dental Lab", description: "Your custom crown is designed and fabricated on-site for a perfect fit and natural appearance." },
      { title: "All Treatment Under One Roof", description: "No referrals to outside specialists — we handle placement, restoration, and follow-up." },
      { title: "Flexible Financing", description: "0% interest options and insurance coordination to make implants accessible." },
    ],
    processHeading: "The Dental Implant Process",
    processSteps: [
      { number: "01", title: "Consultation & 3D Scan", description: "Comprehensive exam with CBCT imaging to assess bone density and plan optimal implant placement." },
      { number: "02", title: "Implant Placement", description: "The titanium post is surgically placed into the jawbone under local anesthesia or sedation." },
      { number: "03", title: "Healing & Integration", description: "Over 3-6 months, the implant fuses with your jawbone through osseointegration." },
      { number: "04", title: "Custom Crown Delivery", description: "A permanent crown crafted in our lab is attached — your new tooth is complete." },
    ],
    faqHeading: "Dental Implants FAQ",
    faqs: [
      { question: "How long do dental implants last?", answer: "With proper care and regular checkups, dental implants can last a lifetime. The crown may need replacement after 15-20 years." },
      { question: "Does getting a dental implant hurt?", answer: "Most patients report less discomfort than expected. We use local anesthesia and offer sedation options. Post-procedure soreness is typically manageable with over-the-counter pain relief." },
      { question: "Am I a candidate for dental implants?", answer: "Most adults with good general health are candidates. Adequate jawbone density is needed, but bone grafting can address deficiencies. We'll determine your eligibility during the consultation." },
      { question: "How much do dental implants cost?", answer: "Costs vary based on the number of implants and complexity. We provide transparent pricing after your consultation and offer financing options including CareCredit." },
      { question: "Can I get a dental implant the same day a tooth is extracted?", answer: "In some cases, yes. Immediate implant placement can be done when conditions are favorable, reducing treatment time." },
    ],
    relatedSlugs: ["all-on-x-implants", "dental-crowns", "dental-bridges", "oral-surgery"],
  },

  "cosmetic-dentistry": {
    serviceSlug: "cosmetic-dentistry",
    serviceName: "Cosmetic Dentistry",
    metaTitle: "Cosmetic Dentistry | Smile Makeovers | Smile Avenue",
    metaDescription: "Transform your smile with veneers, whitening, bonding, and complete smile makeovers. Expert cosmetic dentistry at Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "SMILE MAKEOVERS",
    heroHeading: "Cosmetic Dentistry",
    heroBody: "Your smile is the first thing people notice. Whether you want to brighten, straighten, reshape, or completely transform your teeth, our cosmetic dentistry services are designed to give you a smile you're proud to show off.",
    introKicker: "THE ART OF A GREAT SMILE",
    introHeading: "What Is Cosmetic Dentistry?",
    introParas: [
      "Cosmetic dentistry encompasses any dental procedure that improves the appearance of your teeth, gums, or bite. This includes porcelain veneers, teeth whitening, dental bonding, gum contouring, and complete smile makeovers.",
      "At Smile Avenue, cosmetic work is never one-size-fits-all. We begin every case with a digital smile design consultation to understand your goals, then create a personalized treatment plan using our in-house dental lab for precise, natural-looking results.",
    ],
    whyHeading: "Why Choose Smile Avenue for Cosmetic Dentistry",
    whyPoints: [
      { title: "Digital Smile Design", description: "Preview your new smile before treatment begins with advanced digital imaging." },
      { title: "In-House Dental Lab", description: "Veneers and crowns crafted on-site for perfect color matching and natural aesthetics." },
      { title: "Comprehensive Options", description: "From subtle whitening to full-mouth makeovers — every treatment under one roof." },
      { title: "Comfort-First Approach", description: "Sedation options available for extensive cosmetic procedures." },
    ],
    processHeading: "Your Cosmetic Dentistry Journey",
    processSteps: [
      { number: "01", title: "Smile Consultation", description: "We discuss your goals, take photos and impressions, and create a digital preview of your new smile." },
      { number: "02", title: "Custom Treatment Plan", description: "Your personalized plan may include one or multiple treatments for optimal results." },
      { number: "03", title: "Treatment Sessions", description: "Depending on the plan, this may be a single visit or a series of appointments." },
      { number: "04", title: "Reveal Your New Smile", description: "Final adjustments ensure a perfect fit, color match, and natural appearance." },
    ],
    faqHeading: "Cosmetic Dentistry FAQ",
    faqs: [
      { question: "What cosmetic procedures do you offer?", answer: "We offer porcelain veneers, teeth whitening, dental bonding, Invisalign, gum contouring, and complete smile makeovers." },
      { question: "How long does a smile makeover take?", answer: "It depends on the treatments involved. Simple whitening takes one visit; veneers typically require two visits over 2-3 weeks; comprehensive makeovers may take several months." },
      { question: "Is cosmetic dentistry covered by insurance?", answer: "Most cosmetic procedures are elective and not covered, but some treatments that also restore function (like crowns) may have partial coverage. We help maximize your benefits." },
      { question: "Do veneers look natural?", answer: "Absolutely. Our in-house lab custom-crafts each veneer to match your natural tooth color, shape, and translucency for a seamless, natural appearance." },
    ],
    relatedSlugs: ["veneers", "teeth-whitening", "invisalign", "dental-crowns"],
  },

  "teeth-whitening": {
    serviceSlug: "teeth-whitening",
    serviceName: "Teeth Whitening",
    metaTitle: "Professional Teeth Whitening | Smile Avenue Family Dentistry",
    metaDescription: "Professional teeth whitening with dramatic results in one visit. In-office and take-home options. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "BRIGHTER IN ONE VISIT",
    heroHeading: "Professional Teeth Whitening",
    heroBody: "Professional whitening delivers dramatically brighter results than over-the-counter products — safely and in far less time. Whether you prefer an in-office session or take-home trays, we customize your whitening plan for optimal results.",
    introKicker: "THE SCIENCE OF WHITENING",
    introHeading: "Why Professional Whitening Works Better",
    introParas: [
      "Over-the-counter whitening strips and toothpastes contain low-concentration bleaching agents that produce minimal results. Professional whitening uses prescription-strength gels applied under controlled conditions for safe, even, and dramatically whiter teeth.",
      "At Smile Avenue, we offer both in-office whitening for immediate results and custom take-home kits for gradual brightening on your schedule. We assess your teeth first to ensure whitening is the right option and address any sensitivity concerns.",
    ],
    whyHeading: "Why Choose Professional Whitening at Smile Avenue",
    whyPoints: [
      { title: "Immediate Results", description: "In-office whitening can brighten teeth up to 8 shades in a single visit." },
      { title: "Custom Take-Home Kits", description: "Professional-grade whitening trays made from impressions of your teeth for even coverage." },
      { title: "Sensitivity Management", description: "We assess and manage sensitivity before and during treatment." },
      { title: "Safe & Supervised", description: "Professional application protects gums and enamel while maximizing results." },
    ],
    processHeading: "The Whitening Process",
    processSteps: [
      { number: "01", title: "Shade Assessment", description: "We evaluate your current shade and discuss your whitening goals." },
      { number: "02", title: "Cleaning & Prep", description: "A professional cleaning removes surface stains before whitening for optimal results." },
      { number: "03", title: "Whitening Application", description: "Professional-grade gel is applied and activated. In-office sessions take about 60-90 minutes." },
      { number: "04", title: "Maintenance Plan", description: "Take-home touch-up kits and care instructions to maintain your bright smile." },
    ],
    faqHeading: "Teeth Whitening FAQ",
    faqs: [
      { question: "How long do whitening results last?", answer: "Results typically last 1-3 years depending on your diet and habits. Touch-up treatments can extend your results." },
      { question: "Does whitening damage enamel?", answer: "No. Professional whitening performed under dental supervision is safe for enamel. We monitor the process to prevent over-treatment." },
      { question: "Will whitening work on all stains?", answer: "Whitening is most effective on yellowing from food, drinks, and aging. Intrinsic stains from medication or trauma may require veneers or bonding instead." },
      { question: "Is teeth whitening painful?", answer: "Some patients experience temporary sensitivity during or after treatment. We use desensitizing agents and adjust the treatment protocol to minimize discomfort." },
    ],
    relatedSlugs: ["cosmetic-dentistry", "veneers", "dental-cleaning"],
  },

  "dental-crowns": {
    serviceSlug: "dental-crowns",
    serviceName: "Dental Crowns",
    metaTitle: "Dental Crowns | Custom Restorations | Smile Avenue",
    metaDescription: "Custom dental crowns crafted in our in-house lab for a perfect fit. Restore damaged, weakened, or cosmetically imperfect teeth. Cypress and Katy, TX.",
    heroKicker: "RESTORE & PROTECT",
    heroHeading: "Dental Crowns",
    heroBody: "A dental crown is a custom-made cap that covers and protects a damaged, weakened, or cosmetically imperfect tooth. At Smile Avenue, every crown is designed and fabricated in our on-site dental lab for precision fit and natural aesthetics.",
    introKicker: "CROWN ESSENTIALS",
    introHeading: "When Do You Need a Dental Crown?",
    introParas: [
      "Dental crowns are recommended when a tooth is too damaged for a filling, after root canal therapy, to protect a cracked tooth, to restore a dental implant, or to improve the appearance of a severely discolored or misshapen tooth.",
      "Our in-house Smile Dental Lab eliminates the wait for outside fabrication. Your crown is designed digitally and crafted on-site using high-quality materials for a seamless match with your natural teeth.",
    ],
    whyHeading: "Why Choose Smile Avenue for Dental Crowns",
    whyPoints: [
      { title: "In-House Dental Lab", description: "Crowns are designed and fabricated on-site — no outsourcing, no long waits." },
      { title: "Digital Impressions", description: "No messy putty. Digital scans create precise impressions for a perfect fit." },
      { title: "Natural-Looking Results", description: "Custom color matching ensures your crown blends seamlessly with surrounding teeth." },
      { title: "Durable Materials", description: "We use high-quality porcelain, zirconia, and ceramic materials built to last." },
    ],
    processHeading: "The Crown Process",
    processSteps: [
      { number: "01", title: "Examination & Planning", description: "We evaluate the tooth and take digital scans for precise crown design." },
      { number: "02", title: "Tooth Preparation", description: "The tooth is gently reshaped and a temporary crown is placed." },
      { number: "03", title: "Lab Fabrication", description: "Your permanent crown is crafted in our on-site lab with exact color and shape matching." },
      { number: "04", title: "Final Placement", description: "The crown is bonded securely and adjusted for a comfortable, natural bite." },
    ],
    faqHeading: "Dental Crowns FAQ",
    faqs: [
      { question: "How long do dental crowns last?", answer: "With proper care, dental crowns typically last 10-15 years or longer. Regular checkups help us monitor their condition." },
      { question: "Does getting a crown hurt?", answer: "The procedure is performed under local anesthesia, so you shouldn't feel pain. Some sensitivity afterward is normal and temporary." },
      { question: "What materials are used for crowns?", answer: "We use porcelain, zirconia, and ceramic materials depending on the tooth location and your preferences. Front teeth typically use porcelain for the most natural appearance." },
      { question: "How many visits does a crown require?", answer: "Typically two visits — one for preparation and impressions, and a second for final placement. Our in-house lab significantly reduces wait time between visits." },
    ],
    relatedSlugs: ["dental-bridges", "dental-implants", "root-canal", "veneers"],
  },

  "all-on-x-implants": {
    serviceSlug: "all-on-x-implants",
    serviceName: "All-on-X Implants",
    metaTitle: "All-on-X Dental Implants | Full Arch Restoration | Smile Avenue",
    metaDescription: "Full arch restoration with as few as 4 implants. Replace an entire arch of teeth in one procedure. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "FULL ARCH RESTORATION",
    heroHeading: "All-on-X Dental Implants",
    heroBody: "All-on-X is a revolutionary technique that replaces an entire arch of teeth using just 4-6 strategically placed implants. You can go from failing or missing teeth to a full, functional smile — often in a single day.",
    introKicker: "THE FULL-ARCH SOLUTION",
    introHeading: "What Are All-on-X Implants?",
    introParas: [
      "All-on-X (also called All-on-4 or All-on-6) is a full arch replacement technique where a complete set of prosthetic teeth is anchored to four to six dental implants. Unlike traditional dentures, All-on-X is fixed, stable, and designed to function like natural teeth.",
      "This approach is ideal for patients who have lost most or all teeth in an arch, or who are tired of dealing with loose dentures. Advanced 3D planning allows us to maximize available bone, often eliminating the need for bone grafting.",
    ],
    whyHeading: "Why Choose Smile Avenue for All-on-X",
    whyPoints: [
      { title: "Teeth in a Day", description: "Many patients receive a temporary set of fixed teeth the same day as implant placement." },
      { title: "3D-Guided Surgery", description: "CBCT imaging and surgical guides ensure precise implant placement for optimal results." },
      { title: "In-House Lab Advantage", description: "Your final prosthesis is designed and fabricated in our on-site lab." },
      { title: "Comprehensive Care", description: "From extractions to implants to final restoration — all under one roof." },
    ],
    processHeading: "The All-on-X Process",
    processSteps: [
      { number: "01", title: "Comprehensive Evaluation", description: "3D imaging, oral exam, and full health review to design your treatment plan." },
      { number: "02", title: "Surgery Day", description: "Implants are placed and a temporary prosthesis is attached — you leave with teeth." },
      { number: "03", title: "Healing Period", description: "3-6 months for implants to fully integrate with the jawbone." },
      { number: "04", title: "Final Prosthesis", description: "Your permanent, custom-crafted full arch prosthesis is delivered and secured." },
    ],
    faqHeading: "All-on-X Implants FAQ",
    faqs: [
      { question: "How is All-on-X different from dentures?", answer: "All-on-X is permanently fixed to implants — it doesn't slip, doesn't require adhesive, and functions like natural teeth. You brush and care for it like real teeth." },
      { question: "Can I get All-on-X if I've been told I don't have enough bone?", answer: "Often, yes. The strategic angle of implant placement in All-on-X maximizes available bone. In some cases, bone grafting may still be beneficial." },
      { question: "How long does the procedure take?", answer: "Surgery day typically takes 3-4 hours per arch. You'll leave with a temporary set of teeth that same day." },
      { question: "What is the cost of All-on-X?", answer: "All-on-X is an investment that varies based on your specific needs. We provide detailed pricing after consultation and offer financing options." },
    ],
    relatedSlugs: ["dental-implants", "dentures", "oral-surgery", "sedation-dentistry"],
  },

  "invisalign": {
    serviceSlug: "invisalign",
    serviceName: "Invisalign®",
    metaTitle: "Invisalign Clear Aligners | Smile Avenue Family Dentistry",
    metaDescription: "Straighten your teeth with Invisalign clear aligners — no metal brackets. Custom treatment plans for teens and adults. Cypress and Katy, TX.",
    heroKicker: "CLEAR ALIGNERS",
    heroHeading: "Invisalign® Clear Aligners",
    heroBody: "Invisalign uses a series of custom-made, virtually invisible aligners to gradually straighten your teeth — without the brackets, wires, or dietary restrictions of traditional braces.",
    introKicker: "THE CLEAR ALTERNATIVE",
    introHeading: "How Does Invisalign Work?",
    introParas: [
      "Invisalign uses advanced 3D imaging to map the movement of your teeth from start to finish. A series of custom aligners — each worn for about two weeks — gradually shift your teeth into their ideal position.",
      "At Smile Avenue, we're experienced Invisalign providers for both teens and adults. From simple spacing issues to more complex bite corrections, we create treatment plans tailored to your unique dental anatomy and goals.",
    ],
    whyHeading: "Why Choose Smile Avenue for Invisalign",
    whyPoints: [
      { title: "Experienced Providers", description: "Our doctors have treated hundreds of Invisalign cases with consistently excellent results." },
      { title: "Digital Treatment Planning", description: "3D ClinCheck software lets you see your projected results before you start." },
      { title: "Teen & Adult Options", description: "Customized plans for teenagers (with compliance indicators) and adults." },
      { title: "Flexible Financing", description: "Monthly payment plans and insurance coordination make Invisalign affordable." },
    ],
    processHeading: "Your Invisalign Journey",
    processSteps: [
      { number: "01", title: "Free Consultation", description: "Digital scan, photos, and discussion of your goals. See a preview of your future smile." },
      { number: "02", title: "Custom Aligners", description: "Your aligners are custom-fabricated based on your digital treatment plan." },
      { number: "03", title: "Wear & Progress", description: "Wear each set of aligners 20-22 hours per day, switching to a new set every 1-2 weeks." },
      { number: "04", title: "Reveal & Retain", description: "Once treatment is complete, retainers maintain your beautiful new alignment." },
    ],
    faqHeading: "Invisalign FAQ",
    faqs: [
      { question: "How long does Invisalign treatment take?", answer: "Most cases are completed in 6-18 months, depending on complexity. Simple cases can be done in as few as 6 months." },
      { question: "Is Invisalign as effective as braces?", answer: "For most cases, yes. Invisalign can treat crowding, spacing, overbites, underbites, and crossbites. Very complex orthodontic cases may still benefit from traditional braces." },
      { question: "Can I eat normally with Invisalign?", answer: "Yes! You remove the aligners to eat and drink, so there are no dietary restrictions." },
      { question: "How much does Invisalign cost?", answer: "Costs vary based on case complexity. We offer free consultations, flexible financing, and help maximize insurance benefits." },
    ],
    relatedSlugs: ["cosmetic-dentistry", "teeth-whitening", "dental-cleaning"],
  },

  "root-canal": {
    serviceSlug: "root-canal",
    serviceName: "Root Canal Therapy",
    metaTitle: "Root Canal Treatment | Pain-Free Therapy | Smile Avenue",
    metaDescription: "Modern root canal therapy that's comfortable and effective. Save infected teeth with expert care. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "SAVE YOUR NATURAL TOOTH",
    heroHeading: "Root Canal Therapy",
    heroBody: "A root canal removes infected tissue from inside a tooth, relieves pain, and saves the tooth from extraction. With modern techniques and sedation options, root canals at Smile Avenue are far more comfortable than their reputation suggests.",
    introKicker: "THE TRUTH ABOUT ROOT CANALS",
    introHeading: "When Is a Root Canal Needed?",
    introParas: [
      "Root canal therapy is needed when the pulp (the soft tissue inside your tooth containing nerves and blood vessels) becomes infected or inflamed. This can happen due to deep decay, repeated dental procedures, a crack or chip, or trauma.",
      "Left untreated, pulp infection can lead to abscess, bone loss, and the need for extraction. A root canal removes the infection, preserves the natural tooth structure, and is typically followed by a crown for long-term protection.",
    ],
    whyHeading: "Why Choose Smile Avenue for Root Canal Therapy",
    whyPoints: [
      { title: "Gentle & Comfortable", description: "Local anesthesia and sedation options ensure a pain-free experience." },
      { title: "Advanced Technology", description: "Digital imaging and rotary instruments for faster, more precise treatment." },
      { title: "Same-Day Crowns Available", description: "Our in-house lab can fabricate your protective crown quickly." },
      { title: "High Success Rate", description: "Root canal therapy has a 95%+ success rate when properly performed." },
    ],
    processHeading: "The Root Canal Process",
    processSteps: [
      { number: "01", title: "Diagnosis", description: "Digital X-rays and testing to confirm infection and plan treatment." },
      { number: "02", title: "Numbing & Sedation", description: "The area is thoroughly numbed. Sedation is available for anxious patients." },
      { number: "03", title: "Treatment", description: "Infected pulp is removed, canals are cleaned and shaped, then sealed." },
      { number: "04", title: "Crown Placement", description: "A custom crown is placed to protect and restore the treated tooth." },
    ],
    faqHeading: "Root Canal FAQ",
    faqs: [
      { question: "Does a root canal hurt?", answer: "Modern root canals are no more uncomfortable than getting a filling. We use thorough anesthesia and offer sedation. Most patients say the procedure itself was painless." },
      { question: "How long does a root canal take?", answer: "Most root canals are completed in a single 60-90 minute appointment." },
      { question: "What happens if I don't get a root canal?", answer: "The infection will spread, potentially causing an abscess, bone loss, and eventually tooth loss. The pain will also worsen." },
      { question: "Is extraction better than a root canal?", answer: "Saving your natural tooth is almost always preferable. Extraction requires replacement with an implant or bridge, which is more complex and costly." },
    ],
    relatedSlugs: ["dental-crowns", "emergency-dentist", "tooth-extraction", "sedation-dentistry"],
  },

  "dental-cleaning": {
    serviceSlug: "dental-cleaning",
    serviceName: "Dental Cleaning",
    metaTitle: "Professional Dental Cleaning | Smile Avenue Family Dentistry",
    metaDescription: "Professional dental cleanings to remove plaque, tartar, and surface stains. Preventive care for healthy smiles. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "PROFESSIONAL CLEANINGS",
    heroHeading: "Dental Cleaning",
    heroBody: "Regular professional cleanings are the foundation of a healthy smile. Our hygienists remove plaque and tartar that brushing and flossing can't reach, helping prevent cavities, gum disease, and other oral health issues.",
    introKicker: "BEYOND BRUSHING",
    introHeading: "Why Professional Cleanings Matter",
    introParas: [
      "Even with diligent brushing and flossing, plaque builds up in hard-to-reach areas. Over time, plaque hardens into tartar (calculus), which can only be removed by a dental professional. Left untreated, tartar buildup leads to gum disease, the leading cause of tooth loss in adults.",
      "Professional cleanings also give us the opportunity to detect early signs of decay, gum disease, oral cancer, and other health conditions before they become serious problems.",
    ],
    whyHeading: "Why Choose Smile Avenue for Dental Cleanings",
    whyPoints: [
      { title: "Gentle Hygienists", description: "Our experienced hygienists prioritize your comfort while being thorough." },
      { title: "Comprehensive Exams", description: "Every cleaning includes a thorough exam and digital X-rays when needed." },
      { title: "Convenient Scheduling", description: "Early morning, lunch hour, and Saturday appointments available." },
      { title: "Family-Friendly", description: "We see patients of all ages — schedule the whole family in one visit." },
    ],
    processHeading: "What Happens During a Cleaning",
    processSteps: [
      { number: "01", title: "Health Review", description: "We review your medical history and discuss any concerns." },
      { number: "02", title: "Plaque & Tartar Removal", description: "Our hygienist carefully removes buildup above and below the gumline." },
      { number: "03", title: "Polish & Floss", description: "Teeth are polished to remove surface stains, then flossed thoroughly." },
      { number: "04", title: "Exam & Recommendations", description: "Your dentist reviews findings and recommends any needed treatment." },
    ],
    faqHeading: "Dental Cleaning FAQ",
    faqs: [
      { question: "How often should I get a professional cleaning?", answer: "Most patients benefit from cleanings every six months. Patients with gum disease may need cleanings every 3-4 months." },
      { question: "Does a dental cleaning hurt?", answer: "Most patients experience little to no discomfort. If you have sensitivity, we can adjust our technique or use numbing agents." },
      { question: "Are dental cleanings covered by insurance?", answer: "Most dental insurance plans cover two cleanings per year at 100%. We help verify your benefits before your visit." },
      { question: "What's the difference between a regular cleaning and a deep cleaning?", answer: "A regular cleaning (prophylaxis) addresses the surfaces above the gumline. A deep cleaning (scaling and root planing) treats below the gumline for patients with gum disease." },
    ],
    relatedSlugs: ["preventive-dentistry", "pediatric-dentistry", "teeth-whitening"],
  },

  "pediatric-dentistry": {
    serviceSlug: "pediatric-dentistry",
    serviceName: "Children's Dentistry",
    metaTitle: "Children's Dentistry | Pediatric Dental Care | Smile Avenue",
    metaDescription: "Gentle, fun-focused dental care for kids of all ages. First visits, cleanings, sealants, and more. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "DENTAL CARE FOR KIDS",
    heroHeading: "Children's Dentistry",
    heroBody: "We believe every child deserves a positive dental experience. Our team creates a fun, welcoming environment that helps kids build healthy habits and a lifelong comfort with dental care.",
    introKicker: "STARTING EARLY",
    introHeading: "Why Early Dental Care Matters",
    introParas: [
      "The American Academy of Pediatric Dentistry recommends a child's first dental visit by age one or within six months of the first tooth erupting. Early visits establish a dental home, catch problems early, and help children become comfortable with the dental environment.",
      "At Smile Avenue, we make dental visits fun. From kid-friendly treatment rooms to gentle, patient communication, we're focused on building trust and positive associations that last a lifetime.",
    ],
    whyHeading: "Why Families Choose Smile Avenue",
    whyPoints: [
      { title: "Kid-Friendly Environment", description: "Our offices are designed to make children feel welcome and at ease." },
      { title: "Gentle Approach", description: "Patient, caring communication that builds trust and reduces anxiety." },
      { title: "Preventive Focus", description: "Sealants, fluoride treatments, and education to prevent cavities before they start." },
      { title: "Family Convenience", description: "Schedule kids and parents together — we see the whole family." },
    ],
    processHeading: "Your Child's Visit",
    processSteps: [
      { number: "01", title: "Welcome & Comfort", description: "We take time to make your child comfortable and explain everything in kid-friendly terms." },
      { number: "02", title: "Gentle Cleaning", description: "Thorough but gentle cleaning appropriate for your child's age and development." },
      { number: "03", title: "Exam & X-Rays", description: "The dentist checks for cavities, development issues, and overall oral health." },
      { number: "04", title: "Education & Prevention", description: "Fun brushing tips, dietary guidance, and preventive treatments like sealants or fluoride." },
    ],
    faqHeading: "Children's Dentistry FAQ",
    faqs: [
      { question: "When should my child first see a dentist?", answer: "By age one or within six months of the first tooth. Early visits establish a dental home and allow us to monitor development." },
      { question: "How do you handle anxious children?", answer: "Our team is specially trained in child-friendly communication. We use tell-show-do techniques, distraction, and positive reinforcement. Sedation is available for very anxious children." },
      { question: "Are dental sealants worth it?", answer: "Yes! Sealants reduce cavity risk on molars by up to 80%. They're quick, painless, and highly effective." },
      { question: "What if my child has a dental emergency?", answer: "Call us immediately. We offer same-day emergency appointments for children and can guide you through at-home care while you're on your way." },
    ],
    relatedSlugs: ["dental-cleaning", "preventive-dentistry", "sedation-dentistry"],
  },

  "dentures": {
    serviceSlug: "dentures",
    serviceName: "Dentures",
    metaTitle: "Dentures | Full & Partial Dentures | Smile Avenue",
    metaDescription: "Full and partial dentures for complete smile restoration. Traditional and implant-supported options. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "COMPLETE SMILE RESTORATION",
    heroHeading: "Dentures",
    heroBody: "Modern dentures are more comfortable, natural-looking, and functional than ever. Whether you need a full set or partial dentures, we design custom solutions that restore your smile, your confidence, and your ability to eat and speak comfortably.",
    introKicker: "MODERN DENTURE OPTIONS",
    introHeading: "Types of Dentures We Offer",
    introParas: [
      "We offer full dentures (replacing all teeth in an arch), partial dentures (replacing several missing teeth while preserving remaining natural teeth), and implant-supported dentures (secured to dental implants for maximum stability).",
      "Every set of dentures is custom-crafted in our in-house Smile Dental Lab for precise fit, natural appearance, and optimal comfort. We work with you through the entire process to ensure you're satisfied with the result.",
    ],
    whyHeading: "Why Choose Smile Avenue for Dentures",
    whyPoints: [
      { title: "In-House Lab", description: "Dentures crafted on-site for faster turnaround and precise customization." },
      { title: "Multiple Options", description: "Full, partial, and implant-supported dentures to match your needs and budget." },
      { title: "Comfort-Focused", description: "Precise fitting process ensures comfortable, secure dentures." },
      { title: "Implant-Supported Available", description: "For maximum stability, we offer dentures anchored to dental implants." },
    ],
    processHeading: "The Denture Process",
    processSteps: [
      { number: "01", title: "Consultation", description: "Comprehensive exam to determine the best denture type for your situation." },
      { number: "02", title: "Impressions & Design", description: "Precise impressions and custom shade/shape selection for natural appearance." },
      { number: "03", title: "Try-In Appointment", description: "A wax try-in lets you preview the look and feel before final fabrication." },
      { number: "04", title: "Delivery & Adjustments", description: "Final dentures are delivered with any needed adjustments for optimal comfort." },
    ],
    faqHeading: "Dentures FAQ",
    faqs: [
      { question: "How long does it take to get dentures?", answer: "The process typically takes 4-6 weeks from initial impressions to final delivery, with several fitting appointments in between." },
      { question: "Can I eat normally with dentures?", answer: "Yes, though there's an adjustment period. Start with soft foods and gradually introduce harder items as you adapt. Implant-supported dentures offer the most natural chewing ability." },
      { question: "How long do dentures last?", answer: "With proper care, dentures typically last 5-10 years before needing replacement due to natural changes in your mouth and jawbone." },
      { question: "What are implant-supported dentures?", answer: "Dentures anchored to 2-6 dental implants for superior stability. They don't slip, don't require adhesive, and provide much stronger biting force than traditional dentures." },
    ],
    relatedSlugs: ["dental-implants", "all-on-x-implants", "dental-bridges"],
  },

  "veneers": {
    serviceSlug: "veneers",
    serviceName: "Porcelain Veneers",
    metaTitle: "Porcelain Veneers | Custom Smile Design | Smile Avenue",
    metaDescription: "Custom porcelain veneers for a flawless, natural-looking smile. In-house lab for perfect color matching. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "CUSTOM SMILE DESIGN",
    heroHeading: "Porcelain Veneers",
    heroBody: "Porcelain veneers are ultra-thin shells bonded to the front of your teeth to transform their color, shape, size, and alignment. They're the go-to solution for achieving a picture-perfect smile that looks completely natural.",
    introKicker: "THE VENEER ADVANTAGE",
    introHeading: "What Can Veneers Fix?",
    introParas: [
      "Veneers address a wide range of cosmetic concerns: staining that won't respond to whitening, chips and cracks, gaps between teeth, minor misalignment, and uneven or worn teeth. They provide a dramatic transformation with a conservative approach.",
      "At Smile Avenue, every set of veneers is custom-crafted in our in-house dental lab. This gives us complete control over color, shape, and translucency — ensuring results that look natural and complement your facial features.",
    ],
    whyHeading: "Why Choose Smile Avenue for Veneers",
    whyPoints: [
      { title: "In-House Craftsmanship", description: "Veneers designed and fabricated in our on-site lab for perfect aesthetics." },
      { title: "Digital Smile Preview", description: "See a simulation of your new smile before committing to treatment." },
      { title: "Conservative Approach", description: "Minimal tooth preparation preserves natural tooth structure." },
      { title: "Long-Lasting Results", description: "High-quality porcelain veneers can last 15-20 years with proper care." },
    ],
    processHeading: "The Veneer Process",
    processSteps: [
      { number: "01", title: "Smile Design Consultation", description: "We discuss your goals, take photos, and create a digital preview of your new smile." },
      { number: "02", title: "Preparation", description: "A thin layer of enamel is removed, and temporary veneers are placed." },
      { number: "03", title: "Lab Fabrication", description: "Your custom veneers are crafted in our on-site lab with meticulous attention to detail." },
      { number: "04", title: "Bonding & Reveal", description: "Veneers are permanently bonded and polished. You leave with your dream smile." },
    ],
    faqHeading: "Veneers FAQ",
    faqs: [
      { question: "How long do porcelain veneers last?", answer: "With proper care, porcelain veneers typically last 15-20 years. They're stain-resistant and maintain their appearance over time." },
      { question: "Do veneers look natural?", answer: "Absolutely. Our in-house lab custom-crafts each veneer to match natural tooth color, shape, and translucency." },
      { question: "Can veneers fix crooked teeth?", answer: "Veneers can correct the appearance of mild to moderate misalignment. For more significant orthodontic issues, Invisalign may be recommended first." },
      { question: "Are veneers reversible?", answer: "Because a thin layer of enamel is removed during preparation, veneers are considered a permanent treatment. However, they can be replaced with new veneers." },
    ],
    relatedSlugs: ["cosmetic-dentistry", "teeth-whitening", "dental-crowns"],
  },

  "dental-bridges": {
    serviceSlug: "dental-bridges",
    serviceName: "Dental Bridges",
    metaTitle: "Dental Bridges | Fixed Tooth Replacement | Smile Avenue",
    metaDescription: "Fixed dental bridges to replace one or more missing teeth. Custom-crafted in our in-house lab. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "BRIDGE THE GAP",
    heroHeading: "Dental Bridges",
    heroBody: "A dental bridge literally bridges the gap created by one or more missing teeth. It consists of artificial teeth anchored to adjacent natural teeth or implants, restoring your smile, bite, and ability to chew comfortably.",
    introKicker: "REPLACING MISSING TEETH",
    introHeading: "When Is a Dental Bridge the Right Choice?",
    introParas: [
      "Dental bridges are an excellent option when you're missing one to three consecutive teeth and have healthy teeth on either side to serve as anchors. They're also a good alternative for patients who aren't candidates for dental implants.",
      "Bridges prevent remaining teeth from shifting, maintain facial structure, and restore proper chewing and speaking function. At Smile Avenue, every bridge is custom-fabricated in our in-house lab for a precise fit and natural appearance.",
    ],
    whyHeading: "Why Choose Smile Avenue for Dental Bridges",
    whyPoints: [
      { title: "In-House Fabrication", description: "Bridges crafted on-site for faster delivery and precise customization." },
      { title: "Natural Aesthetics", description: "Custom color and shape matching for seamless integration with your smile." },
      { title: "Implant-Supported Options", description: "For cases where implant-supported bridges provide the best outcome." },
      { title: "Comprehensive Care", description: "From initial assessment to final placement, everything under one roof." },
    ],
    processHeading: "The Bridge Process",
    processSteps: [
      { number: "01", title: "Evaluation", description: "We assess the gap, anchor teeth, and your overall oral health to design the ideal bridge." },
      { number: "02", title: "Preparation", description: "Anchor teeth are prepared and digital impressions are taken." },
      { number: "03", title: "Lab Fabrication", description: "Your custom bridge is crafted in our on-site lab." },
      { number: "04", title: "Placement", description: "The bridge is cemented in place, restoring your smile and bite." },
    ],
    faqHeading: "Dental Bridges FAQ",
    faqs: [
      { question: "How long do dental bridges last?", answer: "With proper care, dental bridges typically last 10-15 years or longer." },
      { question: "Is a bridge or implant better?", answer: "It depends on your situation. Implants preserve bone and don't require altering adjacent teeth. Bridges are faster and less invasive. We'll recommend the best option for you." },
      { question: "How do I care for a dental bridge?", answer: "Brush and floss daily, using a floss threader or water flosser to clean under the bridge. Regular dental checkups are essential." },
      { question: "Can I eat normally with a bridge?", answer: "Yes. Once the bridge is placed and you've adjusted, you can eat a normal diet." },
    ],
    relatedSlugs: ["dental-crowns", "dental-implants", "dentures"],
  },

  "tooth-extraction": {
    serviceSlug: "tooth-extraction",
    serviceName: "Tooth Extraction",
    metaTitle: "Tooth Extraction | Comfortable Removal | Smile Avenue",
    metaDescription: "Simple and surgical tooth extraction with sedation options. Comfortable, expert care. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "GENTLE TOOTH REMOVAL",
    heroHeading: "Tooth Extraction",
    heroBody: "When a tooth is too damaged to save, extraction is sometimes the best path to relief and recovery. At Smile Avenue, we prioritize your comfort with gentle techniques and sedation options.",
    introKicker: "WHEN EXTRACTION IS NEEDED",
    introHeading: "Why Would a Tooth Need Extraction?",
    introParas: [
      "Tooth extraction may be necessary for severe decay, advanced gum disease, fractured teeth that can't be repaired, impacted wisdom teeth, or overcrowding. We always explore alternatives first — extraction is a last resort.",
      "Our doctors have extensive experience with both simple and surgical extractions. We use digital imaging for precise planning and offer sedation to ensure your comfort throughout the procedure.",
    ],
    whyHeading: "Why Choose Smile Avenue for Extractions",
    whyPoints: [
      { title: "Comfort-First Approach", description: "Thorough anesthesia and sedation options for a pain-free experience." },
      { title: "Immediate Replacement Planning", description: "We discuss implant or bridge options before extraction so you're never left without a plan." },
      { title: "Bone Preservation", description: "Socket preservation techniques maintain bone for future implant placement." },
      { title: "In-House Follow-Up", description: "Complete aftercare and restoration services under one roof." },
    ],
    processHeading: "The Extraction Process",
    processSteps: [
      { number: "01", title: "Evaluation & Planning", description: "Digital X-rays and exam to plan the safest, most efficient extraction." },
      { number: "02", title: "Anesthesia & Sedation", description: "The area is numbed, and sedation is administered if requested." },
      { number: "03", title: "Extraction", description: "The tooth is carefully removed using gentle techniques." },
      { number: "04", title: "Aftercare Instructions", description: "Detailed care instructions and scheduled follow-up to monitor healing." },
    ],
    faqHeading: "Tooth Extraction FAQ",
    faqs: [
      { question: "Does tooth extraction hurt?", answer: "No. We use thorough local anesthesia, and sedation is available. You shouldn't feel pain during the procedure." },
      { question: "How long is recovery?", answer: "Most patients recover within 3-7 days. We provide detailed aftercare instructions and pain management guidance." },
      { question: "What are my options after extraction?", answer: "Dental implants, bridges, or partial dentures can replace the extracted tooth. We discuss replacement options before extraction." },
      { question: "Can I go to work the next day?", answer: "Most patients return to normal activities within 1-2 days after a simple extraction. Surgical extractions may require a bit more recovery time." },
    ],
    relatedSlugs: ["oral-surgery", "dental-implants", "sedation-dentistry", "emergency-dentist"],
  },

  "oral-surgery": {
    serviceSlug: "oral-surgery",
    serviceName: "Oral Surgery",
    metaTitle: "Oral Surgery | Expert Surgical Care | Smile Avenue",
    metaDescription: "Oral surgery including extractions, bone grafting, and advanced procedures. Sedation available. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "ADVANCED SURGICAL CARE",
    heroHeading: "Oral Surgery",
    heroBody: "From complex extractions to bone grafting and pre-implant procedures, our oral surgery services are performed with precision, advanced technology, and a focus on patient comfort.",
    introKicker: "COMPREHENSIVE SURGICAL SERVICES",
    introHeading: "Oral Surgery Procedures We Offer",
    introParas: [
      "Our oral surgery services include surgical extractions (including wisdom teeth), bone grafting for implant preparation, soft tissue procedures, exposure of impacted teeth, and pre-prosthetic surgery.",
      "All surgical procedures are performed in-house by our experienced doctors using digital 3D imaging for precise planning. Sedation options ensure your comfort for any level of procedure.",
    ],
    whyHeading: "Why Choose Smile Avenue for Oral Surgery",
    whyPoints: [
      { title: "3D Surgical Planning", description: "CBCT imaging for precise planning and predictable outcomes." },
      { title: "Sedation Options", description: "Multiple sedation levels available for complete comfort." },
      { title: "All Under One Roof", description: "From diagnosis to surgery to restoration — no outside referrals." },
      { title: "Experienced Surgeons", description: "Our doctors have extensive training in surgical procedures." },
    ],
    processHeading: "What to Expect with Oral Surgery",
    processSteps: [
      { number: "01", title: "Consultation & 3D Imaging", description: "Comprehensive evaluation with CBCT scan to plan your procedure." },
      { number: "02", title: "Pre-Op Preparation", description: "Instructions, medications, and sedation planning before surgery day." },
      { number: "03", title: "Surgical Procedure", description: "Your procedure is performed with precision under appropriate anesthesia." },
      { number: "04", title: "Recovery & Follow-Up", description: "Detailed aftercare and scheduled follow-up to monitor healing." },
    ],
    faqHeading: "Oral Surgery FAQ",
    faqs: [
      { question: "Is oral surgery painful?", answer: "We use thorough anesthesia and offer sedation options. Most patients report that the procedure itself is painless. Post-operative discomfort is manageable with prescribed medication." },
      { question: "How long is recovery from oral surgery?", answer: "Recovery varies by procedure. Simple extractions may take a few days; bone grafting and complex procedures may take 1-2 weeks for initial healing." },
      { question: "Do I need someone to drive me home?", answer: "If sedation is used, yes. You'll need a responsible adult to drive you home and stay with you for a few hours after the procedure." },
      { question: "What is bone grafting?", answer: "Bone grafting adds bone material to areas of the jaw that have lost volume, creating a strong foundation for dental implants." },
    ],
    relatedSlugs: ["tooth-extraction", "dental-implants", "all-on-x-implants", "sedation-dentistry"],
  },

  "sedation-dentistry": {
    serviceSlug: "sedation-dentistry",
    serviceName: "Sedation Dentistry",
    metaTitle: "Sedation Dentistry | Anxiety-Free Dental Care | Smile Avenue",
    metaDescription: "Anxiety-free dental care with multiple sedation options. Comfortable treatment for nervous patients. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "ANXIETY-FREE DENTISTRY",
    heroHeading: "Sedation Dentistry",
    heroBody: "Dental anxiety shouldn't prevent you from getting the care you need. Our sedation options — from mild relaxation to deeper sedation — ensure you're comfortable and calm throughout any procedure.",
    introKicker: "YOUR COMFORT MATTERS",
    introHeading: "Sedation Options We Offer",
    introParas: [
      "We offer multiple levels of sedation to match your needs: nitrous oxide (laughing gas) for mild relaxation, oral sedation for moderate anxiety, and IV sedation for deeper relaxation during extensive procedures.",
      "Sedation dentistry isn't just for anxious patients. It's also ideal for those with strong gag reflexes, difficulty sitting still, or anyone undergoing lengthy procedures who wants to be more comfortable.",
    ],
    whyHeading: "Why Choose Smile Avenue for Sedation Dentistry",
    whyPoints: [
      { title: "Multiple Sedation Levels", description: "From mild relaxation to deep sedation — we match the level to your needs." },
      { title: "Trained & Certified", description: "Our team is fully trained and certified in sedation administration and monitoring." },
      { title: "Safe Monitoring", description: "Continuous vital sign monitoring throughout your procedure." },
      { title: "Catch Up on Care", description: "Get multiple procedures done in one comfortable visit." },
    ],
    processHeading: "Your Sedation Dentistry Experience",
    processSteps: [
      { number: "01", title: "Consultation", description: "We discuss your anxiety level, medical history, and recommend the best sedation option." },
      { number: "02", title: "Pre-Procedure Instructions", description: "Clear instructions on eating, drinking, and medication before your appointment." },
      { number: "03", title: "Comfortable Treatment", description: "Sedation is administered and your procedure is completed while you're relaxed and comfortable." },
      { number: "04", title: "Recovery", description: "You rest in our office until you're ready to go home. A driver is required for oral and IV sedation." },
    ],
    faqHeading: "Sedation Dentistry FAQ",
    faqs: [
      { question: "Is dental sedation safe?", answer: "Yes. When administered by trained professionals with proper monitoring, dental sedation is very safe. We review your complete medical history before recommending any sedation." },
      { question: "Will I be unconscious during sedation?", answer: "With nitrous oxide and oral sedation, you remain conscious but deeply relaxed. IV sedation provides a deeper level of relaxation where you may not remember the procedure." },
      { question: "How long does sedation last?", answer: "Nitrous oxide wears off within minutes. Oral sedation effects last 2-4 hours. IV sedation effects may last several hours." },
      { question: "Can sedation be used for any dental procedure?", answer: "Yes. Sedation can be used for everything from cleanings to implant surgery. We recommend the appropriate level based on the procedure and your comfort needs." },
    ],
    relatedSlugs: ["oral-surgery", "root-canal", "dental-implants", "pediatric-dentistry"],
  },

  "preventive-dentistry": {
    serviceSlug: "preventive-dentistry",
    serviceName: "Preventive Dentistry",
    metaTitle: "Preventive Dentistry | Proactive Oral Health | Smile Avenue",
    metaDescription: "Comprehensive preventive dentistry including exams, cleanings, X-rays, sealants, and oral cancer screenings. Smile Avenue in Cypress and Katy, TX.",
    heroKicker: "PROACTIVE ORAL HEALTH",
    heroHeading: "Preventive Dentistry",
    heroBody: "The best dental treatment is prevention. Our preventive care program combines regular exams, professional cleanings, digital imaging, and patient education to keep your smile healthy and catch problems before they start.",
    introKicker: "PREVENTION FIRST",
    introHeading: "What Does Preventive Dentistry Include?",
    introParas: [
      "Preventive dentistry encompasses all the routine care and screenings that keep your mouth healthy: professional cleanings, comprehensive exams, digital X-rays, oral cancer screenings, fluoride treatments, sealants, and personalized hygiene education.",
      "Studies show that preventive dental care not only saves teeth but also reduces overall healthcare costs. Oral health is closely linked to systemic health — conditions like diabetes, heart disease, and even pregnancy complications are connected to oral health.",
    ],
    whyHeading: "Why Choose Smile Avenue for Preventive Care",
    whyPoints: [
      { title: "Comprehensive Approach", description: "Every visit includes a thorough exam, cleaning, and oral cancer screening." },
      { title: "Digital Diagnostics", description: "Advanced digital X-rays with up to 90% less radiation than traditional film." },
      { title: "Patient Education", description: "We empower you with knowledge and tools to maintain your health between visits." },
      { title: "Family-Friendly", description: "Preventive care for every age — from your child's first visit to senior care." },
    ],
    processHeading: "Your Preventive Care Visit",
    processSteps: [
      { number: "01", title: "Health Assessment", description: "Review of medical history, current medications, and any concerns." },
      { number: "02", title: "Professional Cleaning", description: "Thorough removal of plaque, tartar, and surface stains." },
      { number: "03", title: "Digital Imaging", description: "X-rays and intraoral photos to detect hidden problems early." },
      { number: "04", title: "Exam & Personalized Plan", description: "Comprehensive exam with a customized prevention plan for your needs." },
    ],
    faqHeading: "Preventive Dentistry FAQ",
    faqs: [
      { question: "How often should I see the dentist?", answer: "Most people should visit every six months. Patients with gum disease or other conditions may need more frequent visits." },
      { question: "Are dental X-rays safe?", answer: "Yes. Digital X-rays use up to 90% less radiation than traditional film X-rays. We only take X-rays when clinically necessary." },
      { question: "What is an oral cancer screening?", answer: "A visual and physical exam of your mouth, throat, and neck to check for signs of oral cancer. It's quick, painless, and included in every comprehensive exam." },
      { question: "How can I improve my oral health between visits?", answer: "Brush twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, don't smoke, and stay hydrated." },
    ],
    relatedSlugs: ["dental-cleaning", "pediatric-dentistry", "teeth-whitening"],
  },
  "family-dental-care": {
    serviceSlug: "family-dental-care",
    serviceName: "Family Dental Care",
    metaTitle: "Family Dental Care | Smile Avenue Family Dentistry",
    metaDescription: "Comprehensive family dental care for patients of all ages — from toddlers to seniors. Cleanings, exams, restorations, and preventive care under one roof.",
    heroKicker: "CARE FOR THE WHOLE FAMILY",
    heroHeading: "One Dental Home for Every Generation",
    heroBody: "From a child's first visit to grandma's crown replacement, Smile Avenue makes it easy to keep the whole family healthy with convenient scheduling, a warm environment, and a full range of services.",
    introKicker: "ALL AGES WELCOME",
    introHeading: "Why Families Choose Smile Avenue",
    introParas: [
      "Managing dental care for an entire family can be overwhelming — different providers, different offices, different schedules. At Smile Avenue, we simplify everything by treating every member of your family under one roof, from toddlers getting their first teeth checked to grandparents needing implants or dentures.",
      "Our team is trained across pediatric, general, cosmetic, and restorative dentistry so you never have to coordinate between specialists for routine care. We offer block scheduling so multiple family members can be seen back-to-back, saving you time and trips.",
      "We believe preventive care is the foundation of lifelong oral health. That's why every family visit includes a thorough exam, professional cleaning, digital X-rays when needed, and personalized guidance on brushing, flossing, and nutrition for each age group.",
    ],
    whyHeading: "The Smile Avenue Family Advantage",
    whyPoints: [
      { title: "All Ages, One Office", description: "Treat toddlers, teens, parents, and grandparents in a single location with providers experienced across every life stage." },
      { title: "Block Scheduling", description: "Book multiple family members back-to-back to minimize time away from school and work." },
      { title: "Kid-Friendly Environment", description: "Our offices feature a welcoming atmosphere with entertainment and gentle techniques designed to make children feel comfortable." },
      { title: "Comprehensive Services", description: "From cleanings and sealants to Invisalign, implants, and emergency care — everything your family needs is available in-house." },
    ],
    processHeading: "What to Expect at a Family Visit",
    processSteps: [
      { number: "01", title: "Schedule Together", description: "Book appointments for multiple family members in one call or online session." },
      { number: "02", title: "Warm Welcome", description: "Our team greets each family member by name and ensures kids feel safe and comfortable." },
      { number: "03", title: "Thorough Care", description: "Each patient receives a comprehensive exam, professional cleaning, and age-appropriate preventive care." },
      { number: "04", title: "Family Game Plan", description: "We review findings with you and create a coordinated treatment plan for the whole family." },
    ],
    faqHeading: "Family Dental Care FAQ",
    faqs: [
      { question: "At what age should my child first see a dentist?", answer: "The American Academy of Pediatric Dentistry recommends a first visit by age one or within six months of the first tooth appearing. Early visits help establish good habits and catch potential issues before they develop." },
      { question: "Can the whole family be seen on the same day?", answer: "Yes! We offer block scheduling so multiple family members can have their appointments back-to-back, saving you time and extra trips to the office." },
      { question: "Do you treat teens who need braces or Invisalign?", answer: "Absolutely. We offer Invisalign for teens and adults, and can refer to trusted orthodontic partners for traditional braces when needed." },
      { question: "What if a family member has dental anxiety?", answer: "We offer sedation dentistry options including nitrous oxide (laughing gas) and oral conscious sedation to help anxious patients of any age feel relaxed during treatment." },
    ],
    relatedSlugs: ["pediatric-dentistry", "preventive-dentistry", "dental-cleaning", "sedation-dentistry"],
  },
};
