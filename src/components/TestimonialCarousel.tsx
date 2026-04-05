import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { quote: "I trust Smile Avenue completely. The team makes my family feel like VIPs every single visit. We wouldn't go anywhere else. From the front desk to the hygienists to Dr. Vuong, everyone is kind, professional, and genuinely caring.", name: "Thao H.", location: "Bridgeland, Cypress" },
  { quote: "From the moment I walked in, I felt welcome. They offered me a blanket and Netflix during my cleaning — this is NOT your typical dentist. I actually look forward to my appointments now, which I never thought I'd say.", name: "Kashayn P.", location: "Towne Lake, Cypress" },
  { quote: "Dr. Vuong and his team did my implants and the results are incredible. Professional, gentle, and genuinely caring. The in-house lab meant I didn't have to wait weeks for my crown. Everything was done in just a few visits.", name: "Michael R.", location: "Cinco Ranch, Katy" },
  { quote: "As someone with dental anxiety, I dreaded going to the dentist for years. The sedation options here changed everything. Dr. Kim was so patient explaining every step. I finally got the care I needed without the fear.", name: "Jennifer L.", location: "Fairfield, Cypress" },
  { quote: "My kids actually ask to go to the dentist now! The team is so wonderful with children. They make it fun and stress-free. Plus the office is beautiful and modern. Best pediatric dental experience we've ever had.", name: "Amanda T.", location: "Bridgeland, Cypress" },
  { quote: "I had an emergency on a Friday afternoon and they fit me in within the hour. Dr. Yahya was thorough and compassionate. The pain was gone before I left. I can't recommend this practice enough to anyone in the Cypress area.", name: "David K.", location: "Cy-Fair, Cypress" },
  { quote: "The entire experience was seamless — from booking online to walking out with a perfect smile. They accept my insurance, the office is spotless, and everyone remembers my name. This is how dentistry should be.", name: "Patricia S.", location: "Cross Creek Ranch, Katy" },
  { quote: "I drove 45 minutes past three other dentists to come here, and it's worth every minute. The veneers Dr. Vuong did for me completely transformed my confidence. The Smile Lab on-site means everything is custom and precise.", name: "Sarah M.", location: "Firethorne, Katy" },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const prevIdx = (current - 1 + reviews.length) % reviews.length;
  const nextIdx = (current + 1) % reviews.length;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 lg:py-28 section-warm overflow-hidden">
      <div className="container mx-auto lg:max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="kicker">5,000+ FIVE-STAR REVIEWS</p>
            <h2 className="section-heading">Why People Love Smile Avenue</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-colors" aria-label="Previous review">
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button onClick={next} className="group inline-flex items-center gap-2 px-5 h-10 rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-colors" aria-label="Next review">
              <span className="text-sm font-sans font-medium text-foreground">NEXT</span>
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Desktop: 3 cards side by side */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <div key={i} className="rounded-3xl p-10 flex flex-col justify-between min-h-[340px] relative" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.06), hsl(var(--primary) / 0.12))" }}>
              <svg className="absolute top-6 left-6 w-5 h-5 opacity-50" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div>
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#D4A853] text-[#D4A853]" />
                  ))}
                </div>
                <blockquote className="font-body text-base leading-relaxed text-foreground">
                  "{review.quote}"
                </blockquote>
              </div>
              <p className="font-sans text-sm font-semibold text-foreground mt-8 pt-5 border-t border-border/30">
                {review.name} <span className="text-muted-foreground font-normal">— {review.location}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Single card carousel */}
        <div className="lg:hidden">
          <div className="relative flex items-stretch gap-6 justify-center">
            {/* Active card */}
            <div className="w-full max-w-3xl bg-primary-dark rounded-3xl p-10 md:p-14 flex flex-col justify-between min-h-[320px] md:min-h-[380px] transition-all duration-500 shadow-xl relative">
              <svg className="absolute top-5 left-5 w-5 h-5 opacity-60" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-body text-lg md:text-xl leading-relaxed text-primary-foreground">
                  "{reviews[current].quote}"
                </blockquote>
              </div>
              <p className="font-sans text-sm font-semibold text-primary-foreground mt-10 pt-6 border-t border-primary-foreground/10">
                {reviews[current].name} <span className="text-primary-foreground/60 font-normal">— {reviews[current].location}</span>
              </p>
            </div>
          </div>

          {/* Mobile nav + dots */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} className="sm:hidden w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-colors" aria-label="Previous review">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="sm:hidden w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-colors" aria-label="Next review">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <a href="https://www.google.com/search?q=smile+avenue+family+dentistry+reviews" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-semibold text-primary hover:underline">
            Read 5,000+ Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
