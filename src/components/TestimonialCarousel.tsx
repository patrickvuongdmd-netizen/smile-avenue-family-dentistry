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
    <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm overflow-hidden">
      <div className="container mx-auto">
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

        {/* Card carousel */}
        <div className="relative flex items-stretch gap-6 justify-center">
          {/* Previous card — peek */}
          <div className="hidden lg:flex w-[120px] shrink-0 items-stretch">
            <div className="w-full rounded-3xl p-6 flex flex-col justify-between opacity-40 overflow-hidden" style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}>
              <p className="font-body text-sm leading-relaxed text-foreground line-clamp-[8]">
                "{reviews[prevIdx].quote}"
              </p>
              <p className="font-sans text-xs font-semibold text-foreground mt-4">
                {reviews[prevIdx].name} <span className="text-muted-foreground font-normal">{reviews[prevIdx].location}</span>
              </p>
            </div>
          </div>

          {/* Active card */}
          <div className="w-full max-w-3xl bg-primary-dark rounded-3xl p-10 md:p-14 flex flex-col justify-between min-h-[320px] md:min-h-[380px] transition-all duration-500 shadow-xl">
            <div>
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed text-primary-foreground">
                "{reviews[current].quote}"
              </blockquote>
            </div>
            <p className="font-sans text-sm font-semibold text-primary-foreground mt-10 pt-6 border-t border-primary-foreground/10">
              {reviews[current].name} <span className="text-primary-foreground/60 font-normal">— {reviews[current].location}</span>
            </p>
          </div>

          {/* Next card — peek */}
          <div className="hidden lg:flex w-[120px] shrink-0 items-stretch">
            <div className="w-full rounded-3xl p-6 flex flex-col justify-between opacity-40 overflow-hidden" style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}>
              <p className="font-body text-sm leading-relaxed text-foreground line-clamp-[8]">
                "{reviews[nextIdx].quote}"
              </p>
              <p className="font-sans text-xs font-semibold text-foreground mt-4">
                {reviews[nextIdx].name} <span className="text-muted-foreground font-normal">{reviews[nextIdx].location}</span>
              </p>
            </div>
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

        <div className="text-center mt-8">
          <a href="https://www.google.com/search?q=smile+avenue+family+dentistry+reviews" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-semibold text-primary hover:underline">
            Read 5,000+ Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
