// Blog featured images mapped by category/pillar
import dentalImplantsImg from "@/assets/blog/dental-implants.jpg";
import cosmeticDentistryImg from "@/assets/blog/cosmetic-dentistry.jpg";
import dentalEmergencyImg from "@/assets/blog/dental-emergency.jpg";
import invisalignImg from "@/assets/blog/invisalign.jpg";
import pediatricDentistryImg from "@/assets/blog/pediatric-dentistry.jpg";
import sedationDentistryImg from "@/assets/blog/sedation-dentistry.jpg";
import preventiveCareImg from "@/assets/blog/preventive-care.jpg";

export const BLOG_CATEGORY_IMAGES: Record<string, string> = {
  Implants: dentalImplantsImg,
  Cosmetic: cosmeticDentistryImg,
  Emergency: dentalEmergencyImg,
  Invisalign: invisalignImg,
  Pediatric: pediatricDentistryImg,
  Sedation: sedationDentistryImg,
  Preventive: preventiveCareImg,
};

export const getBlogImage = (category: string): string => {
  return BLOG_CATEGORY_IMAGES[category] || dentalImplantsImg;
};
