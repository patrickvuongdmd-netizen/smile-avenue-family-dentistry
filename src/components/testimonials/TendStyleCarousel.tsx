import { useState, useCallback, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  detail?: string;
}

interface Props {
  testimonials: Testimonial[];
  heading?: string;
}

const TendStyleCarousel = ({ testimonials, heading = "Why people love Smile Avenue" }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header row */}
        <div className="flex items-center justify-between mb-12 max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold text-foreground leading-[1.1]">
            {heading}
          </h2>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="group inline-flex items-center gap-2 px-5 h-10 rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-colors"
              aria-label="Next testimonial"
            >
              <span className="text-sm font-sans font-medium text-foreground">NEXT</span>
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden -mx-4 px-4">
          <div className="flex gap-6">
            {testimonials.map((t, i) => {
              const isActive = i === selectedIndex;
              return (
                <div
                  key={i}
                  className="flex-[0_0_85%] sm:flex-[0_0_65%] lg:flex-[0_0_55%] min-w-0 transition-all duration-500"
                >
                  <div
                    className={`rounded-3xl p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between transition-all duration-500 ${
                      isActive
                        ? "bg-primary-dark text-primary-dark-foreground scale-100 shadow-xl"
                        : "bg-primary-dark/60 text-primary-dark-foreground/60 scale-[0.97]"
                    }`}
                  >
                    <p
                      className={`font-body text-base md:text-lg lg:text-xl leading-relaxed transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      {t.quote}
                    </p>

                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-primary-foreground/10">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-4 h-4 fill-gold text-gold transition-opacity duration-500 ${
                              isActive ? "opacity-100" : "opacity-40"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-sm font-sans font-semibold transition-opacity duration-500 ${
                            isActive ? "text-primary-foreground" : "text-primary-foreground/50"
                          }`}
                        >
                          {t.name}
                        </p>
                        <p
                          className={`text-xs font-sans transition-opacity duration-500 ${
                            isActive ? "text-primary-foreground/70" : "text-primary-foreground/30"
                          }`}
                        >
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-sans text-muted-foreground">
            {selectedIndex + 1} / {testimonials.length}
          </span>
          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TendStyleCarousel;
