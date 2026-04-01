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

  const review = reviews[current];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <p className="kicker text-center">5,000+ FIVE-STAR REVIEWS</p>
        <h2 className="section-heading text-center">Trusted by Houston Families</h2>

        <div className="max-w-4xl mx-auto mt-10 relative">
          {/* Quote */}
          <div className="text-center px-4 md:px-12 min-h-[200px] flex flex-col items-center justify-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="font-body text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground mb-6 italic">
              "{review.quote}"
            </blockquote>
            <p className="font-sans text-sm font-semibold text-foreground">
              {review.name} <span className="text-muted-foreground font-normal">— {review.location}</span>
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Previous review">
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
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Next review">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mt-6">
            <a href="https://www.google.com/search?q=smile+avenue+family+dentistry+reviews" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-semibold text-primary hover:underline">
              Read 5,000+ Reviews on Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
