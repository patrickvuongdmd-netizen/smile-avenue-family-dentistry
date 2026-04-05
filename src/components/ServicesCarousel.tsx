import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICE_IMAGES } from "@/lib/images";

const allServices = [
  { label: "Dental Implants", slug: "dental-implants" },
  { label: "Invisalign®", slug: "invisalign" },
  { label: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
  { label: "Emergency Dentist", slug: "emergency-dentist" },
  { label: "Teeth Whitening", slug: "teeth-whitening" },
  { label: "Veneers", slug: "veneers" },
  { label: "Dental Crowns", slug: "dental-crowns" },
  { label: "Dental Cleaning", slug: "dental-cleaning" },
  { label: "Sedation Dentistry", slug: "sedation-dentistry" },
  { label: "Pediatric Dentistry", slug: "pediatric-dentistry" },
  { label: "Root Canal", slug: "root-canal" },
  { label: "Dentures", slug: "dentures" },
  { label: "All-on-X Implants", slug: "all-on-x-implants" },
  { label: "Oral Surgery", slug: "oral-surgery" },
  { label: "Dental Bridges", slug: "dental-bridges" },
  { label: "Tooth Extraction", slug: "tooth-extraction" },
];

interface Props {
  locationPrefix: string;
}

const ServicesCarousel = ({ locationPrefix }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let paused = false;

    const step = () => {
      if (!paused && el) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);

    const pause = () => { paused = true; };
    const resume = () => { setTimeout(() => { paused = false; }, 2000); };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  // Drag-to-scroll
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.pageX, scrollLeft: el.scrollLeft };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <p className="kicker text-center">WHAT WE DO</p>
        <h2 className="section-heading text-center">Everything Your Family Needs</h2>
        <p className="section-body text-center max-w-2xl mx-auto">From your child's first checkup to your smile makeover — no referrals, no runaround.</p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 mt-10 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {allServices.map((s) => {
          const img = SERVICE_IMAGES[s.slug];
          return (
            <Link
              key={s.slug}
              to={`${locationPrefix}/${s.slug}`}
              className="shrink-0 w-[200px] md:w-[240px] h-[280px] md:h-[320px] rounded-2xl overflow-hidden relative group"
              onClick={(e) => isDragging && e.preventDefault()}
            >
              <img
                src={img?.url}
                alt={img?.alt || s.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width={240}
                height={320}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230,45%,14%)/0.8] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <span className="font-display text-sm md:text-base font-bold text-white">{s.label}</span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Link to="/services" className="btn-secondary">View All Services</Link>
      </div>
    </section>
  );
};

export default ServicesCarousel;
