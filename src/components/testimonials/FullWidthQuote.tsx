import { Star, MapPin } from "lucide-react";

interface Props {
  quote: string;
  name: string;
  location: string;
}

const FullWidthQuote = ({ quote, name, location }: Props) => (
  <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/[0.06] via-primary/[0.02] to-background overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-8 left-8 md:left-16 text-[120px] md:text-[200px] font-display font-bold text-primary/[0.06] leading-none select-none" aria-hidden="true">
      "
    </div>
    <div className="container mx-auto px-4 text-center max-w-4xl relative">
      <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground leading-snug md:leading-tight mb-8">
        {quote}
      </blockquote>
      <div className="flex items-center justify-center gap-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-sm font-sans font-semibold text-foreground">{name}</span>
        <span className="text-sm font-sans text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {location}
        </span>
      </div>
    </div>
  </section>
);

export default FullWidthQuote;
