import { Link } from "react-router-dom";
import { Star, ArrowRight, Phone } from "lucide-react";
import HeroPhotoCarousel from "@/components/HeroPhotoCarousel";
import { OFFICE_IMAGES } from "@/lib/images";

const platformStats = [
  { platform: "Google", rating: "4.9", count: "5,000+", icon: "G" },
  { platform: "Yelp", rating: "4.8", count: "200+", icon: "Y" },
  { platform: "Facebook", rating: "4.9", count: "500+", icon: "f" },
];

const heroPhotos = [
  { src: OFFICE_IMAGES.newPatientHero, alt: "Happy patient at Smile Avenue Family Dentistry" },
  { src: OFFICE_IMAGES.waitingRoom, alt: "Stylish waiting room at Smile Avenue" },
  { src: OFFICE_IMAGES.coffeeStation, alt: "Amenity station at Smile Avenue" },
  { src: OFFICE_IMAGES.hallway, alt: "Modern hallway inside Smile Avenue" },
];

interface Props {
  bookingUrl: string;
}

const TestimonialsHero = ({ bookingUrl }: Props) => (
  <section className="section-padding bg-background overflow-hidden">
    <div className="container mx-auto px-6 lg:px-4">
      <nav className="mb-6 text-xs font-sans text-muted-foreground text-center lg:text-left" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2" aria-hidden="true">›</span>
        <span className="text-foreground">Patient Testimonials</span>
      </nav>

      <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <p className="kicker">5,000+ FIVE-STAR REVIEWS<span className="hidden sm:inline"> ·</span><br className="sm:hidden" /> CYPRESS & KATY</p>
          <h1 className="section-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
            They came in nervous. They left smiling.
          </h1>
          <p className="section-body mb-8">
            From first-visit nerves to "can I come back tomorrow?" — these are real stories from real families who finally found a dentist that <strong className="text-foreground font-semibold">feels different.</strong>
          </p>

          <div className="flex gap-3 mb-5 max-w-sm mx-auto lg:mx-0">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-cta flex-1 text-center whitespace-nowrap">
              Book Your Visit
            </a>
            <a href="tel:8326481756" className="btn-secondary flex-1 text-center flex items-center justify-center gap-2 whitespace-nowrap">
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          <p className="text-xs font-sans text-muted-foreground mb-4">✓ We confirm within 1 hour · ✓ Same-day appointments · ✓ 0% financing available</p>

          {/* Rating + platform pills */}
          <div className="flex items-center justify-center lg:justify-start gap-3 text-sm font-sans text-muted-foreground mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9</span>
            <span>from 5,000+ verified reviews</span>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {platformStats.map(s => (
              <div
                key={s.platform}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-xs font-sans"
              >
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">{s.icon}</span>
                <span className="font-semibold text-foreground">{s.rating}</span>
                <span className="text-muted-foreground">{s.count}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroPhotoCarousel photos={heroPhotos} />
      </div>
    </div>
  </section>
);

export default TestimonialsHero;
