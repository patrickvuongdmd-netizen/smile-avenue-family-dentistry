import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroPhoto {
  src: string;
  alt: string;
}

interface Props {
  photos: HeroPhoto[];
}

const HeroPhotoCarousel = ({ photos }: Props) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), [photos.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + photos.length) % photos.length), [photos.length]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
      {/* Images */}
      {photos.map((photo, i) => (
        <img
          key={i}
          src={photo.src}
          alt={photo.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : undefined}
          width={800}
          height={600}
        />
      ))}

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md"
        aria-label="Next photo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-background w-5" : "bg-background/50"
            }`}
            aria-label={`View photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroPhotoCarousel;
