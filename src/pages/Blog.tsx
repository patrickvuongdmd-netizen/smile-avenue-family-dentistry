import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const categories = ["All", "Implants", "Cosmetic", "Emergency", "Invisalign", "Pediatric", "Sedation"];

const posts = [
  { title: "5 Signs You May Need a Dental Implant", excerpt: "Missing a tooth? Experiencing bone loss? Learn the top indicators that dental implants may be the best solution for restoring your smile and oral health.", date: "March 15, 2026", category: "Implants", readTime: "5 min read" },
  { title: "Porcelain Veneers vs. Dental Bonding: Which Is Right for You?", excerpt: "Both options can transform your smile, but they serve different needs. We break down the pros, cons, costs, and longevity of each cosmetic treatment.", date: "March 8, 2026", category: "Cosmetic", readTime: "7 min read" },
  { title: "What to Do When You Knock Out a Tooth", excerpt: "A knocked-out tooth is a dental emergency — but quick action can save it. Here's exactly what to do in those critical first 30 minutes.", date: "February 28, 2026", category: "Emergency", readTime: "4 min read" },
  { title: "Invisalign for Adults: It's Never Too Late for a Straight Smile", excerpt: "Think you're too old for orthodontic treatment? Think again. Discover why more adults than ever are choosing Invisalign to straighten their teeth discreetly.", date: "February 20, 2026", category: "Invisalign", readTime: "6 min read" },
  { title: "Your Child's First Dental Visit: What Parents Need to Know", excerpt: "The ADA recommends a first dental visit by age 1. Learn what to expect, how to prepare your child, and why early visits set the foundation for lifelong oral health.", date: "February 12, 2026", category: "Pediatric", readTime: "5 min read" },
  { title: "Overcoming Dental Anxiety: How Sedation Dentistry Can Help", excerpt: "Dental fear affects millions of Americans. Learn about the sedation options available at Smile Avenue — from nitrous oxide to IV sedation — and how they work.", date: "February 5, 2026", category: "Sedation", readTime: "6 min read" },
];

const Blog = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter(p => p.category === active);

  useDocTitle("Dental Blog | Smile Avenue Family Dentistry");


  return (
    <>
      <Helmet>
        <title>Dental Health Blog | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Expert dental health tips, treatment guides, and oral care advice from the doctors at Smile Avenue Family Dentistry in Cypress and Katy, TX." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/blog/" />
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

            {/* Search + Filters */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input type="text" placeholder="Search articles…" className="w-full rounded-xl border border-input bg-background pl-12 pr-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-colors ${active === cat ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filtered.map((post, i) => (
                <article key={i} className="bg-card rounded-xl border border-border overflow-hidden group">
                  <div className="aspect-video bg-muted flex items-center justify-center text-xs font-sans text-muted-foreground">Blog Image</div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                      <span className="text-xs font-sans text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sans text-muted-foreground">{post.date}</span>
                      <span className="text-sm font-sans font-semibold text-primary">Read More →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Have a Dental Question?</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Our team is always happy to help. Book a consultation or give us a call.</p>
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
