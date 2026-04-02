import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { OFFICE_IMAGES } from "@/lib/images";

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
  <section className="relative overflow-hidden bg-[hsl(var(--hero-dark))]">
    {/* Background photo with overlay */}
    <div className="absolute inset-0">
      <img
        src={OFFICE_IMAGES.waitingRoom}
        alt=""
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-dark))] via-[hsl(var(--hero-dark))/0.85] to-[hsl(var(--hero-dark))/0.4]" />
    </div>

    <div className="relative container mx-auto px-4 pt-10 pb-20 md:pt-16 md:pb-28">
      <nav aria-label="Breadcrumb" className="mb-10 text-xs font-sans text-white/50">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2" aria-hidden="true">›</span>
        <span className="text-white/80">Patient Testimonials</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-sans font-medium mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 fill-primary" />
            5,000+ five-star reviews
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-8">
            They came in nervous.<br />They left <span className="text-primary">smiling.</span>
          </h1>

          <p className="text-lg md:text-xl font-body text-white/70 leading-relaxed max-w-lg mb-10">
            From first-visit nerves to "can I come back tomorrow?" — in their own words.
          </p>

          {/* Platform pills */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {platformStats.map(s => (
              <div
                key={s.platform}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-sans font-bold text-primary">{s.icon}</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="font-display text-base font-bold text-white">{s.rating}</span>
                    <Stars />
                  </div>
                  <p className="text-[10px] font-sans text-white/50 leading-none">{s.count} on {s.platform}</p>
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

        {/* Hero photo */}
        <div className="hidden md:block">
          <div className="relative">
            <img
              src={OFFICE_IMAGES.newPatientHero}
              alt="Happy patient at Smile Avenue Family Dentistry"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] max-h-[520px]"
            />
            {/* Floating review card */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[240px] animate-fade-in">
              <Stars size="w-4 h-4" />
              <p className="text-xs font-body text-foreground mt-2 leading-relaxed">
                "Best dental experience I've ever had. My whole family switched."
              </p>
              <p className="text-[10px] font-sans font-semibold text-muted-foreground mt-2">— Rosa M., Katy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsHero;
