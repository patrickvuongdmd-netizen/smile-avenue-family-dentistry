import { Star, MapPin } from "lucide-react";
import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Story {
  quote: string;
  name: string;
  location: string;
  detail?: string;
}

type Layout = "lead-grid" | "horizontal-cards" | "masonry" | "spotlight";

interface Props {
  theme: string;
  heading: string;
  description: string;
  icon: ReactNode;
  stories: Story[];
  bgClass?: string;
  accentImage?: string;
  layout?: Layout;
}

const Stars = ({ size = "w-3.5 h-3.5" }: { size?: string }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`${size} fill-primary text-primary`} />
    ))}
  </div>
);

const AuthorBlock = ({ story, size = "sm" }: { story: Story; size?: "sm" | "lg" }) => (
  <div>
    <div className="flex items-center gap-3">
      <div className={`${size === "lg" ? "w-10 h-10" : "w-8 h-8"} rounded-full bg-primary/15 flex items-center justify-center`}>
        <span className={`${size === "lg" ? "text-sm" : "text-xs"} font-sans font-bold text-primary`}>{story.name.charAt(0)}</span>
      </div>
      <div>
        <p className="text-sm font-sans font-semibold text-foreground">{story.name}</p>
        <p className="text-xs font-sans text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {story.location}
        </p>
      </div>
    </div>
    {story.detail && (
      <p className={`text-xs font-sans ${size === "lg" ? "text-primary/70" : "text-muted-foreground/70"} mt-2 italic`}>{story.detail}</p>
    )}
  </div>
);

/* ─── LAYOUT: Lead grid (original but tighter) ─── */
const LeadGridLayout = ({ stories, accentImage }: { stories: Story[]; accentImage?: string }) => (
  <div className="flex flex-col gap-5">
    {/* Cards row */}
    <div className="grid md:grid-cols-3 gap-5">
      {stories.map((s, i) => (
        <ScrollReveal key={i}>
          <div className={`h-full rounded-2xl border ${i === 0 ? "border-primary/15 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02]" : "border-border bg-card"} p-6 md:p-7 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/20`}>
            <div>
              <Stars size={i === 0 ? "w-4 h-4" : "w-3.5 h-3.5"} />
              <p className={`font-body ${i === 0 ? "text-base md:text-lg" : "text-sm md:text-base"} text-foreground leading-relaxed mt-4 mb-5`}>
                "{s.quote}"
              </p>
            </div>
            <AuthorBlock story={s} size={i === 0 ? "lg" : "sm"} />
          </div>
        </ScrollReveal>
      ))}
    </div>
    {/* Accent image as a wide banner below */}
    {accentImage && (
      <ScrollReveal>
        <div className="h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
          <img src={accentImage} alt="Smile Avenue office" className="w-full h-full object-cover" loading="lazy" decoding="async" width={800} height={400} />
        </div>
      </ScrollReveal>
    )}
  </div>
);

/* ─── LAYOUT: Horizontal cards (wide, stacked) ─── */
const HorizontalLayout = ({ stories, accentImage }: { stories: Story[]; accentImage?: string }) => (
  <div className="space-y-5">
    {/* Featured row: accent image + lead quote side by side */}
    {accentImage && (
      <ScrollReveal>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[220px]">
            <img src={accentImage} alt="Smile Avenue office" className="w-full h-full object-cover" loading="lazy" decoding="async" width={800} height={400} />
          </div>
          <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] p-7 flex flex-col justify-between">
            <div>
              <Stars size="w-4 h-4" />
              <p className="font-body text-base md:text-lg text-foreground leading-relaxed mt-4 mb-5">
                "{stories[0].quote}"
              </p>
            </div>
            <AuthorBlock story={stories[0]} size="lg" />
          </div>
        </div>
      </ScrollReveal>
    )}
    {/* Remaining cards in row */}
    <div className="grid md:grid-cols-2 gap-5">
      {stories.slice(accentImage ? 1 : 0).map((s, i) => (
        <ScrollReveal key={i}>
          <div className="h-full rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/20">
            <div>
              <Stars />
              <p className="font-body text-sm md:text-base text-foreground leading-relaxed mt-4 mb-5">
                "{s.quote}"
              </p>
            </div>
            <AuthorBlock story={s} />
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
);

/* ─── LAYOUT: Spotlight (one big quote centered + 2 smaller below) ─── */
const SpotlightLayout = ({ stories }: { stories: Story[] }) => (
  <div className="space-y-5">
    {/* Spotlight card */}
    <ScrollReveal>
      <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] p-8 md:p-10 text-center max-w-3xl mx-auto">
        <Stars size="w-5 h-5" />
        <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed mt-5 mb-6">
          "{stories[0].quote}"
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
            <span className="text-sm font-sans font-bold text-primary">{stories[0].name.charAt(0)}</span>
          </div>
          <div className="text-left">
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
    </ScrollReveal>
    {/* Supporting cards */}
    <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
      {stories.slice(1).map((s, i) => (
        <ScrollReveal key={i}>
          <div className="h-full rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/20">
            <div>
              <Stars />
              <p className="font-body text-sm md:text-base text-foreground leading-relaxed mt-4 mb-5">
                "{s.quote}"
              </p>
            </div>
            <AuthorBlock story={s} />
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
);

/* ─── LAYOUT: Masonry-style staggered grid ─── */
const MasonryLayout = ({ stories, accentImage }: { stories: Story[]; accentImage?: string }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    {stories.map((s, i) => (
      <ScrollReveal key={i} className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
        <div className={`h-full rounded-2xl border ${i === 0 ? "border-primary/15 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] p-7 md:p-8" : "border-border bg-card p-6"} flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/20`}>
          <div>
            <Stars size={i === 0 ? "w-4 h-4" : "w-3.5 h-3.5"} />
            <p className={`font-body ${i === 0 ? "text-base md:text-lg" : "text-sm md:text-base"} text-foreground leading-relaxed mt-4 mb-5`}>
              "{s.quote}"
            </p>
          </div>
          <AuthorBlock story={s} size={i === 0 ? "lg" : "sm"} />
        </div>
      </ScrollReveal>
    ))}
    {accentImage && (
      <ScrollReveal className="hidden lg:block">
        <div className="h-full min-h-[200px] rounded-2xl overflow-hidden shadow-lg">
          <img src={accentImage} alt="Smile Avenue office" className="w-full h-full object-cover" loading="lazy" decoding="async" width={800} height={400} />
        </div>
      </ScrollReveal>
    )}
  </div>
);

const PatientStorySection = ({ theme, heading, description, icon, stories, bgClass = "bg-background", accentImage, layout = "lead-grid" }: Props) => (
  <section className={`py-14 md:py-20 ${bgClass} relative overflow-hidden`}>
    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    
    <div className="container mx-auto px-4 max-w-6xl relative">
      <ScrollReveal>
        <div className="max-w-2xl mb-10">
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

      {layout === "lead-grid" && <LeadGridLayout stories={stories} accentImage={accentImage} />}
      {layout === "horizontal-cards" && <HorizontalLayout stories={stories} accentImage={accentImage} />}
      {layout === "spotlight" && <SpotlightLayout stories={stories} />}
      {layout === "masonry" && <MasonryLayout stories={stories} accentImage={accentImage} />}
    </div>
  </section>
);

export default PatientStorySection;
