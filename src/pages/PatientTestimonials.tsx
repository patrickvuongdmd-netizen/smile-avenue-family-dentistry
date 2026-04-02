import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, ExternalLink, Quote, MapPin, ArrowRight } from "lucide-react";
import LazyYouTube from "@/components/LazyYouTube";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import ReviewsWidget from "@/components/ReviewsWidget";
import { VIDEO_TESTIMONIALS } from "@/lib/images";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const reviews = [
  { quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time.", name: "Thao H.", source: "Google", location: "Firethorne, Katy", featured: false },
  { quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home. I was offered a cozy blanket and my choice of Netflix!", name: "Kashayn P.", source: "Google", location: "Cinco Ranch, Katy", featured: true },
  { quote: "Dr. Vuong and his team are absolutely amazing. They took the time to explain everything and made me feel comfortable throughout my implant procedure.", name: "Michael R.", source: "Google", location: "Cypress, TX", featured: false },
  { quote: "Best dental experience I've ever had. The staff is incredibly professional and the office is beautiful. I drive from Katy just to come here.", name: "Jennifer L.", source: "Google", location: "Spring Cypress", featured: true },
  { quote: "I was terrified of the dentist for years. The sedation dentistry option changed everything. I finally got the care I needed without any anxiety.", name: "David M.", source: "Google", location: "Cy-Fair", featured: false },
  { quote: "My kids actually look forward to their dental visits now. The team is so gentle and patient with children. Highly recommend for families!", name: "Amanda K.", source: "Google", location: "Fairfield, Cypress", featured: false },
  { quote: "Got my crown done at Smile Avenue and the in-house lab made all the difference — perfect fit and the color matches perfectly. Highly recommend.", name: "Chris T.", source: "Google", location: "Towne Lake, Cypress", featured: false },
  { quote: "I've been to many dentists and Smile Avenue is by far the best. They genuinely care about their patients and it shows in everything they do.", name: "Patricia W.", source: "Google", location: "Bridgeland, Cypress", featured: true },
  { quote: "The office is stunning — it doesn't even feel like a dentist's office. Modern, clean, and calming. My whole family switched to Smile Avenue.", name: "Rosa M.", source: "Google", location: "Katy, TX", featured: false },
  { quote: "I've never had a dentist explain my treatment so thoroughly. No surprises, no hidden costs. They truly put patients first.", name: "James W.", source: "Google", location: "Cypress, TX", featured: false },
  { quote: "Drove 30 minutes past three other dentists to get here. Worth every mile. The Netflix on the ceiling is a game changer for my anxiety.", name: "Sarah K.", source: "Yelp", location: "Tomball, TX", featured: false },
  { quote: "My daughter was scared of dentists until we came here. Now she asks when her next appointment is. That says everything.", name: "Linda T.", source: "Facebook", location: "Bridgeland, Cypress", featured: false },
];

const platformStats = [
  { platform: "Google", rating: "4.9", count: "5,000+", icon: "G" },
  { platform: "Yelp", rating: "4.8", count: "200+", icon: "Y" },
  { platform: "Facebook", rating: "4.9", count: "500+", icon: "f" },
];

const Stars = ({ size = "w-4 h-4" }: { size?: string }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`${size} fill-primary text-primary`} />
    ))}
  </div>
);

const tickerQuotes = [
  '"Best dental experience ever" — Jennifer L.',
  '"My kids actually look forward to coming here" — Amanda K.',
  '"I drove 30 minutes past 3 other dentists" — Sarah K.',
  '"It feels like a spa, not a dentist" — Rosa M.',
  '"Zero judgment, all care" — David M.',
  '"The Netflix on the ceiling is a game changer" — Sarah K.',
  '"My daughter now asks when her next appointment is" — Linda T.',
  '"No surprises, no hidden costs" — James W.',
];

const PatientTestimonials = () => {
  useDocTitle("Patient Testimonials | Smile Avenue Family Dentistry");

  const featuredVideo = VIDEO_TESTIMONIALS[0];
  const remainingVideos = VIDEO_TESTIMONIALS.slice(1);

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Patient Testimonials | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Read what 5,000+ patients say about Smile Avenue Family Dentistry. Real reviews from real families in Cypress and Katy, TX." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/patient-testimonials/" />
        <meta property="og:title" content="Patient Testimonials | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Read what 5,000+ patients say about Smile Avenue. Real reviews from Cypress and Katy, TX families." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/patient-testimonials/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/logo-full.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Smile Avenue Family Dentistry",
          "url": "https://www.smileavenuefamilydentistry.com",
          "image": "https://www.smileavenuefamilydentistry.com/logo-full.webp",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "5000",
            "reviewCount": "5000"
          },
          "review": reviews.map(r => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": r.quote,
            "publisher": { "@type": "Organization", "name": r.source }
          }))
        })}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">

        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden">
          {/* Subtle warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-primary/[0.02]" />
          <div className="relative container mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24">
            <nav aria-label="Breadcrumb" className="mb-10 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Patient Testimonials</span>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
                Thousands of families.
                <br />
                <span className="text-primary">One word: wow.</span>
              </h1>

              <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                Don't just take our word for it — hear from the thousands of families across Cypress and Katy who trust us with their smiles.
              </p>

              {/* Stat pills row */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {platformStats.map(s => (
                  <div
                    key={s.platform}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-sans font-bold text-primary">{s.icon}</span>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="font-display text-lg font-bold text-foreground">{s.rating}</span>
                        <Stars size="w-3 h-3" />
                      </div>
                      <p className="text-[11px] font-sans text-muted-foreground leading-none">{s.count} on {s.platform}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURED QUOTE HIGHLIGHT ─── */}
        <section className="border-y border-border bg-card">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <blockquote className="font-display text-2xl md:text-4xl font-semibold text-foreground leading-snug mb-6">
                "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home."
              </blockquote>
              <div className="flex items-center justify-center gap-2 text-sm font-sans">
                <Stars size="w-4 h-4" />
                <span className="font-semibold text-foreground">Kashayn P.</span>
                <span className="text-muted-foreground">· Cinco Ranch, Katy</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURED VIDEO ─── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                <div className="md:col-span-2">
                  <p className="kicker">HEAR IT FIRSTHAND</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                    Real patients.<br />Real stories.
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    Nothing speaks louder than a patient who's been in your shoes. Watch their experiences in their own words.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {VIDEO_TESTIMONIALS.length}+ video testimonials
                  </div>
                </div>
                <div className="md:col-span-3">
                  <LazyYouTube videoId={featuredVideo.youtubeId} title={featuredVideo.title} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── QUOTE TICKER ─── */}
        <div className="overflow-hidden border-y border-border bg-primary/[0.03] py-5">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...tickerQuotes, ...tickerQuotes].map((text, i) => (
              <span key={i} className="inline-flex items-center shrink-0 px-8 text-sm font-body italic text-foreground/60">
                {text}
                <span className="ml-8 text-primary/20">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── REVIEW WALL ─── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="kicker">WHAT PEOPLE SAY</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Straight from our patients
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                Every review is from a verified patient. No filters, no edits.
              </p>
            </div>

            {/* Masonry layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto [column-fill:_balance]">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className={`break-inside-avoid mb-5 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group ${
                    r.featured
                      ? "bg-primary/[0.04] border-primary/20 p-8 md:p-10"
                      : "bg-card border-border p-6 md:p-8"
                  }`}
                >
                  <div className={`flex items-center gap-1 mb-4 ${r.featured ? "" : "opacity-70 group-hover:opacity-100 transition-opacity"}`}>
                    <Stars size={r.featured ? "w-5 h-5" : "w-3.5 h-3.5"} />
                  </div>
                  <p className={`font-body leading-relaxed mb-6 ${
                    r.featured ? "text-lg md:text-xl text-foreground font-medium" : "text-sm text-foreground/90"
                  }`}>
                    "{r.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-sans font-bold text-primary">{r.name.charAt(0)}</span>
                    </div>
                    <div className="text-xs font-sans">
                      <span className="font-semibold text-foreground block">{r.name}</span>
                      <span className="text-muted-foreground inline-flex items-center gap-1">
                        {r.location && <><MapPin className="w-3 h-3" /> {r.location} ·</>} {r.source}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INLINE CTA ─── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[hsl(var(--gradient-cta-start))] to-[hsl(var(--gradient-cta-end))]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to become our next<br className="hidden sm:block" /> happy patient?
            </h2>
            <p className="font-body text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
              Join 5,000+ families who actually look forward to going to the dentist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-sans font-semibold text-sm rounded-full hover:bg-background/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Book Your Visit <ArrowRight className="w-4 h-4" />
              </a>
              <a href={`tel:${CYPRESS_PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-sans font-semibold text-sm rounded-full hover:bg-primary-foreground/10 transition-colors">
                Call {CYPRESS_PHONE_FORMATTED}
              </a>
            </div>
          </div>
        </section>

        {/* ─── MORE VIDEO STORIES ─── */}
        <section className="py-16 md:py-24 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="kicker">MORE STORIES</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Watch more patient experiences
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {remainingVideos.map((vid, i) => (
                <LazyYouTube key={i} videoId={vid.youtubeId} title={vid.title} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── GOOGLE REVIEWS LIVE WIDGETS ─── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="kicker">LIVE FROM GOOGLE</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                See our latest reviews
              </h2>
              <p className="text-sm font-sans text-muted-foreground">
                Updated in real-time from our Google Business profiles
              </p>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Cypress Office
                </h3>
                <ReviewsWidget location="cypress" title="Cypress Google Reviews" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Katy Office
                </h3>
                <ReviewsWidget location="katy" title="Katy Google Reviews" />
              </div>
            </div>

            <div className="text-center mt-12 flex flex-wrap justify-center gap-3">
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-cypress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:shadow-md transition-all">
                Review Cypress <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-katy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:shadow-md transition-all">
                Review Katy <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-20 md:py-28 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <div className="flex justify-center mb-8">
              <Stars size="w-8 h-8" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Your smile story starts here
            </h2>
            <p className="font-body text-muted-foreground mb-10 text-lg leading-relaxed">
              Whether it's been 6 months or 6 years, we make it easy to get back to the dentist — with zero judgment, ever.
            </p>
            <Link to="/book-online" className="btn-primary inline-flex items-center gap-2 text-base px-10 py-4 rounded-full">
              Book Your First Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
      <BackToTop />
    </>
  );
};

export default PatientTestimonials;
