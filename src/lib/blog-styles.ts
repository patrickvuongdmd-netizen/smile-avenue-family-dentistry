import categoryImplants from "@/assets/blog/category-implants.jpg";
import categoryCosmetic from "@/assets/blog/category-cosmetic.jpg";
import categoryEmergency from "@/assets/blog/category-emergency.jpg";
import categoryInvisalign from "@/assets/blog/category-invisalign.jpg";
import categoryPediatric from "@/assets/blog/category-pediatric.jpg";
import categorySedation from "@/assets/blog/category-sedation.jpg";
import categoryPreventive from "@/assets/blog/category-preventive.jpg";

export const BLOG_CATEGORY_IMAGES: Record<string, string> = {
  Implants: categoryImplants,
  Cosmetic: categoryCosmetic,
  Emergency: categoryEmergency,
  Invisalign: categoryInvisalign,
  Pediatric: categoryPediatric,
  Sedation: categorySedation,
  Preventive: categoryPreventive,
};

export const BLOG_CATEGORY_COLORS: Record<string, { bg: string; badge: string; text: string }> = {
  Implants: { bg: "bg-[hsl(192,40%,92%)]", badge: "bg-[hsl(192,72%,55%)]/15 text-[hsl(192,78%,33%)]", text: "text-[hsl(192,78%,33%)]" },
  Cosmetic: { bg: "bg-[hsl(340,30%,93%)]", badge: "bg-[hsl(340,60%,60%)]/15 text-[hsl(340,60%,40%)]", text: "text-[hsl(340,60%,40%)]" },
  Emergency: { bg: "bg-[hsl(15,40%,93%)]", badge: "bg-[hsl(15,70%,55%)]/15 text-[hsl(15,70%,35%)]", text: "text-[hsl(15,70%,35%)]" },
  Invisalign: { bg: "bg-[hsl(160,30%,92%)]", badge: "bg-[hsl(160,50%,45%)]/15 text-[hsl(160,55%,30%)]", text: "text-[hsl(160,55%,30%)]" },
  Pediatric: { bg: "bg-[hsl(270,30%,93%)]", badge: "bg-[hsl(270,50%,60%)]/15 text-[hsl(270,50%,40%)]", text: "text-[hsl(270,50%,40%)]" },
  Sedation: { bg: "bg-[hsl(220,30%,93%)]", badge: "bg-[hsl(220,55%,55%)]/15 text-[hsl(220,55%,35%)]", text: "text-[hsl(220,55%,35%)]" },
  Preventive: { bg: "bg-[hsl(80,30%,92%)]", badge: "bg-[hsl(80,50%,40%)]/15 text-[hsl(80,50%,28%)]", text: "text-[hsl(80,50%,28%)]" },
};

export const BLOG_FALLBACK_IMAGE = categoryImplants;
