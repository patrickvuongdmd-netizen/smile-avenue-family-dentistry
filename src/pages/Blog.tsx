import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Search, Clock, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const Blog = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  useDocTitle("Dental Blog | Smile Avenue Family Dentistry");

  const filtered = useMemo(() => {
    let posts = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === active);
    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    return posts;
  }, [active, search]);

  const featured = BLOG_POSTS[0];

  return (
    <>
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
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Blog</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="kicker">DENTAL HEALTH INSIGHTS</p>
              <h1 className="section-heading text-4xl md:text-5xl">The Smile Avenue Blog</h1>
              <p className="section-body">Expert tips, treatment guides, and oral health advice from our team of dentists.</p>
            </div>

            {/* Featured Post */}
            <Link to={`/blog/${featured.slug}`} className="block max-w-4xl mx-auto mb-12 bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="p-8 md:p-10">
                <span className="text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">FEATURED · {featured.category}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
                <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-2">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs font-sans text-muted-foreground">
                  <span className="flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" />{new Date(featured.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  <span>By {featured.author}, {featured.authorCredentials}</span>
                </div>
              </div>
            </Link>

            {/* Search + Filters */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background pl-12 pr-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {BLOG_CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-colors ${active === cat ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filtered.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                      <span className="text-xs font-sans text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans text-muted-foreground">{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span className="text-sm font-sans font-semibold text-primary">Read More →</span>
                    </div>
                    <p className="text-xs font-sans text-muted-foreground mt-2">By {post.author}, {post.authorCredentials}</p>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground font-body mt-10">No articles found. Try a different search or category.</p>
            )}
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Have a Dental Question?</h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Our team is always happy to help. Book a consultation or give us a call.</p>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book a Consultation</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default Blog;
