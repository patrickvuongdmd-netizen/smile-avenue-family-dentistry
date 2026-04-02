import { Star, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  quote: string;
  name: string;
  location: string;
}

const FullWidthQuote = ({ quote, name, location }: Props) => (
  <section className="relative py-20 md:py-28 bg-[hsl(var(--hero-dark))] overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-6 left-6 md:left-16 text-[120px] md:text-[200px] font-display font-bold text-white/[0.04] leading-none select-none" aria-hidden="true">
      "
    </div>
    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.08] to-transparent" />

    <div className="container mx-auto px-4 text-center max-w-4xl relative">
      <ScrollReveal>
        <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug md:leading-tight mb-8">
          {quote}
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm font-sans font-semibold text-white">{name}</span>
          <span className="text-sm font-sans text-white/60 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {location}
          </span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FullWidthQuote;
