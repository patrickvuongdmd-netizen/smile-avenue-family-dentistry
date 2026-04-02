import { Star, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  quote: string;
  name: string;
  location: string;
}

const useParallax = (speed = 0.3) => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const windowH = window.innerHeight;
          // How far the section center is from the viewport center, normalized
          const centerOffset = (rect.top + rect.height / 2 - windowH / 2) / windowH;
          setOffset(centerOffset * speed * 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return { ref, offset };
};

const FullWidthQuote = ({ quote, name, location }: Props) => {
  const { ref, offset } = useParallax(0.35);

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-[hsl(var(--hero-dark))] overflow-hidden">
      {/* Parallax decorative quote mark */}
      <div
        className="absolute top-6 left-6 md:left-16 text-[120px] md:text-[200px] font-display font-bold text-white/[0.04] leading-none select-none transition-transform duration-100"
        aria-hidden="true"
        style={{ transform: `translateY(${offset * 1.5}px)` }}
      >
        "
      </div>

      {/* Parallax gradient accent */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.08] to-transparent transition-transform duration-100"
        style={{ transform: `translateY(${offset * -0.5}px)` }}
      />

      <div className="container mx-auto px-4 text-center max-w-4xl relative">
        <ScrollReveal>
          <blockquote
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug md:leading-tight mb-8 transition-transform duration-100"
            style={{ transform: `translateY(${offset * -0.6}px)` }}
          >
            {quote}
          </blockquote>
          <div
            className="flex items-center justify-center gap-3 transition-transform duration-100"
            style={{ transform: `translateY(${offset * -0.3}px)` }}
          >
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
};

export default FullWidthQuote;
