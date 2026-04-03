import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
}

interface Props {
  posts: BlogPost[];
  categoryColors: Record<string, { bg: string; badge: string }>;
  categoryImages: Record<string, string>;
  fallbackImage: string;
}

const BlogCardCarousel = ({ posts, categoryColors, categoryImages, fallbackImage }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    containScroll: false,
    slidesToScroll: 1,
  });

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 5000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => { emblaApi?.scrollPrev(); startAutoplay(); }, [emblaApi, startAutoplay]);
  const scrollNext = useCallback(() => { emblaApi?.scrollNext(); startAutoplay(); }, [emblaApi, startAutoplay]);

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
    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", startAutoplay);
    startAutoplay();
    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("pointerDown", stopAutoplay);
      emblaApi.off("pointerUp", startAutoplay);
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  return (
    <div className="md:hidden">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden -mx-4">
        <div className="flex">
          {posts.map((post, i) => {
            const colors = categoryColors[post.category] || categoryColors.Implants;
            return (
              <div
                key={post.slug}
                className="flex-[0_0_82%] min-w-0 pl-4 first:pl-4 last:pr-4"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-md h-full"
                >
                  <div className={`aspect-[16/10] relative overflow-hidden ${colors.bg}`}>
                    <img
                      src={categoryImages[post.category] || fallbackImage}
                      alt={post.title}
                      loading={i === 0 ? "eager" : "lazy"}
                      width={800}
                      height={512}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-sans font-bold uppercase tracking-widest backdrop-blur-sm px-3 py-1 rounded-full ${colors.badge}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 bg-card border border-t-0 border-border/50 rounded-b-2xl p-5 flex flex-col">
                    <h3 className="font-display text-lg font-bold text-foreground leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm font-body text-muted-foreground line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs font-sans text-muted-foreground pt-3 border-t border-border/50">
                      <span className="font-semibold text-foreground">{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots + arrows */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
          aria-label="Previous post"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-1.5">
          {posts.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-5 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
          aria-label="Next post"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogCardCarousel;
