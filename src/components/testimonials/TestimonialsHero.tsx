import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const platformStats = [
  { platform: "Google", rating: "4.9", count: "5,000+", icon: "G" },
  { platform: "Yelp", rating: "4.8", count: "200+", icon: "Y" },
  { platform: "Facebook", rating: "4.9", count: "500+", icon: "f" },
];

const Stars = ({ size = "w-3 h-3" }: { size?: string }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`${size} fill-primary text-primary`} />
    ))}
  </div>
);

interface Props {
  bookingUrl: string;
}

const TestimonialsHero = ({ bookingUrl }: Props) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-primary/[0.02]" />
    <div className="relative container mx-auto px-4 pt-10 pb-20 md:pt-16 md:pb-28">
      <nav aria-label="Breadcrumb" className="mb-10 text-xs font-sans text-muted-foreground">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2" aria-hidden="true">›</span>
        <span className="text-foreground">Patient Testimonials</span>
      </nav>

      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-sans font-medium mb-8">
          <Star className="w-4 h-4 fill-primary" />
          5,000+ five-star reviews
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.08] tracking-tight mb-8">
          They came in nervous.<br />They left <span className="text-primary">smiling.</span>
        </h1>

        <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-2xl mb-12">
          From first-visit nerves to "can I come back tomorrow?" — in their own words.
        </p>

        {/* Platform pills */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {platformStats.map(s => (
            <div
              key={s.platform}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-card border border-border shadow-sm"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-sans font-bold text-primary">{s.icon}</span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="font-display text-base font-bold text-foreground">{s.rating}</span>
                  <Stars />
                </div>
                <p className="text-[10px] font-sans text-muted-foreground leading-none">{s.count} on {s.platform}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-sm px-8 py-4 rounded-full"
        >
          Book Your Visit <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsHero;
