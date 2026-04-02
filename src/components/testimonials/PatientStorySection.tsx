import { Star, MapPin } from "lucide-react";
import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Story {
  quote: string;
  name: string;
  location: string;
  detail?: string;
}

interface Props {
  theme: string;
  heading: string;
  description: string;
  icon: ReactNode;
  stories: Story[];
  bgClass?: string;
  accentImage?: string;
}

const Stars = ({ size = "w-3.5 h-3.5" }: { size?: string }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`${size} fill-primary text-primary`} />
    ))}
  </div>
);

const PatientStorySection = ({ theme, heading, description, icon, stories, bgClass = "bg-background", accentImage }: Props) => (
  <section className={`py-16 md:py-24 ${bgClass} relative overflow-hidden`}>
    {/* Subtle background accent */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    
    <div className="container mx-auto px-4 max-w-6xl relative">
      {/* Section header */}
      <ScrollReveal>
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/[0.08] text-primary text-xs font-sans font-semibold tracking-wide uppercase mb-4">
            {icon}
            {theme}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
            {heading}
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </ScrollReveal>

      {/* Story cards with optional side image */}
      <div className={`grid ${accentImage ? "lg:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
        {/* Lead story — large */}
        <ScrollReveal className={accentImage ? "lg:row-span-2" : "md:row-span-2"}>
          <div className="h-full rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] p-8 md:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <Stars size="w-5 h-5" />
              <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed mt-6 mb-8">
                "{stories[0].quote}"
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="text-sm font-sans font-bold text-primary">{stories[0].name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-sans font-semibold text-foreground">{stories[0].name}</p>
                  <p className="text-xs font-sans text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {stories[0].location}
                  </p>
                </div>
              </div>
              {stories[0].detail && (
                <p className="text-xs font-sans text-primary/70 mt-3 italic">{stories[0].detail}</p>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Supporting stories */}
        {stories.slice(1).map((s, i) => (
          <ScrollReveal key={i}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/20">
              <div>
                <Stars />
                <p className="font-body text-sm md:text-base text-foreground leading-relaxed mt-4 mb-6">
                  "{s.quote}"
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-sans font-bold text-primary">{s.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-sans font-semibold text-foreground">{s.name}</p>
                    <p className="text-xs font-sans text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {s.location}
                    </p>
                  </div>
                </div>
                {s.detail && (
                  <p className="text-xs font-sans text-muted-foreground/70 mt-2 italic">{s.detail}</p>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* Accent image */}
        {accentImage && (
          <ScrollReveal className="hidden lg:block lg:row-span-2">
            <div className="h-full rounded-2xl overflow-hidden shadow-lg">
              <img src={accentImage} alt="Smile Avenue office" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  </section>
);

export default PatientStorySection;
