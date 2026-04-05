import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Clock, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";

import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";
import { getBlogImage } from "@/lib/blog-images";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const Blog = () => {
  const [active, setActive] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  useDocTitle("Dental Blog | Smile Avenue Family Dentistry");

  const filtered = useMemo(() => {
    return active === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === active);
  }, [active]);

  const featured = BLOG_POSTS[0];

  const scrollCategories = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Dental Health Blog | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Expert dental health tips, treatment guides, and oral care advice from the doctors at Smile Avenue Family Dentistry in Cypress and Katy, TX." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/blog/" />
        <meta property="og:title" content="Dental Health Blog | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Expert dental health tips, treatment guides, and oral care advice from the doctors at Smile Avenue." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/blog/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      </Helmet>
      <TrustTicker />
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">

        {/* ─── EDITORIAL HERO ─── */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-background">
          <div className="container mx-auto px-4">
            <nav className="mb-8 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Blog</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                Your Guide to Smarter<br className="hidden sm:block" /> Dental Care
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
                From oral health tips and treatment guides to behind-the-scenes looks at our family-friendly offices — your go-to for healthier smiles.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SCROLLABLE CATEGORY PILLS ─── */}
        <section className="border-y border-border bg-background sticky top-0 z-30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 py-3">
              <span className="text-sm font-sans font-semibold text-primary shrink-0">Categories:</span>
              <button
                onClick={() => scrollCategories("left")}
                className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/40 transition-colors hidden sm:flex"
                aria-label="Scroll categories left"
              >
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button>
              <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {BLOG_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`snap-start shrink-0 px-5 py-2 rounded-full text-sm font-sans font-medium border transition-all whitespace-nowrap ${
                      active === cat
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollCategories("right")}
                className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/40 transition-colors hidden sm:flex"
                aria-label="Scroll categories right"
              >
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </section>

        {/* ─── FEATURED POST ─── */}
        {active === "All" && (
          <section className="py-10 md:py-14 bg-background">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="block max-w-5xl mx-auto group"
                >
                  <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                      <img
                        src={getBlogImage(featured.category)}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={800}
                        height={512}
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-sans font-semibold text-foreground">
                          By {featured.author}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        FEATURED · {featured.category}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-3">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-sans text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {new Date(featured.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {featured.readTime}
                        </span>
                      </div>
                      <span className="inline-block mt-4 text-sm font-sans font-semibold text-primary group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* ─── POSTS GRID ─── */}
        <section className="py-10 md:py-14 bg-[hsl(var(--surface-subtle))]">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {(active === "All" ? filtered.slice(1) : filtered).map((post) => (
                <ScrollReveal key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/30 hover:shadow-lg transition-all h-full"
                  >
                    {/* Card Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={getBlogImage(post.category)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={800}
                        height={512}
                      />
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[11px] font-sans font-semibold text-foreground">
                          By {post.author.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 md:p-6">
                      <h2 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs font-sans text-muted-foreground">
                        <span className="uppercase tracking-wider font-bold text-primary">
                          {post.category}
                        </span>
                        <span>
                          {new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground font-body mt-10">No articles found. Try a different category.</p>
            )}
          </div>
        </section>

      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default Blog;
