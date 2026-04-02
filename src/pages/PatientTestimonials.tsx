import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, ExternalLink, Quote, MapPin, Play, ArrowRight } from "lucide-react";
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
  { platform: "Google", rating: "4.9", count: "5,000+", color: "text-primary" },
  { platform: "Yelp", rating: "4.8", count: "200+", color: "text-red-500" },
  { platform: "Facebook", rating: "4.9", count: "500+", color: "text-blue-600" },
];

const Stars = ({ size = "w-4 h-4" }: { size?: string }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`${size} fill-primary text-primary`} />
    ))}
  </div>
);

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
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto text-center max-w-3xl px-4">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-sans text-muted-foreground text-left">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Patient Testimonials</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-sans font-medium mb-6">
              <Star className="w-4 h-4 fill-primary" />
              5,000+ verified reviews
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              People love coming<br className="hidden md:block" /> to <span className="text-primary">Smile Avenue</span>
            </h1>

            <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Don't just take our word for it — hear from the thousands of families across Cypress and Katy who trust us with their smiles.
            </p>

            <div className="flex items-center justify-center gap-2 mb-2">
              <Stars size="w-7 h-7" />
              <span className="font-display text-3xl font-bold text-foreground">4.9</span>
            </div>
            <p className="text-sm font-sans text-muted-foreground">average across all platforms</p>
          </div>
        </section>

        {/* ─── PLATFORM STATS BAR ─── */}
        <section className="border-y border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 divide-x divide-border">
              {platformStats.map(s => (
                <div key={s.platform} className="py-8 md:py-10 text-center">
                  <p className="text-xs font-sans font-semibold text-muted-foreground uppercase tracking-wider mb-1">{s.platform}</p>
                  <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{s.rating}</p>
                  <div className="flex justify-center my-1.5">
                    <Stars size="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs font-sans text-muted-foreground">{s.count} reviews</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED VIDEO ─── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="kicker text-center">HEAR IT FIRSTHAND</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Real patients. Real stories.
            </h2>
            <LazyYouTube videoId={featuredVideo.youtubeId} title={featuredVideo.title} />
          </div>
        </section>

        {/* ─── QUOTE TICKER ─── */}
        <div className="overflow-hidden border-y border-border bg-primary/5 py-4">
          <div className="flex animate-ticker whitespace-nowrap">
            {[
              '"Best dental experience ever" — Jennifer L.',
              '"My kids actually look forward to coming here" — Amanda K.',
              '"I drove 30 minutes past 3 other dentists" — Sarah K.',
              '"It feels like a spa, not a dentist" — Rosa M.',
              '"Zero judgment, all care" — David M.',
              '"The Netflix on the ceiling is a game changer" — Sarah K.',
              '"My daughter now asks when her next appointment is" — Linda T.',
              '"No surprises, no hidden costs" — James W.',
              '"Best dental experience ever" — Jennifer L.',
              '"My kids actually look forward to coming here" — Amanda K.',
              '"I drove 30 minutes past 3 other dentists" — Sarah K.',
              '"It feels like a spa, not a dentist" — Rosa M.',
              '"Zero judgment, all care" — David M.',
              '"The Netflix on the ceiling is a game changer" — Sarah K.',
              '"My daughter now asks when her next appointment is" — Linda T.',
              '"No surprises, no hidden costs" — James W.',
            ].map((text, i) => (
              <span key={i} className="inline-flex items-center shrink-0 px-6 text-sm font-body italic text-foreground/70">
                {text}
                <span className="ml-6 text-primary/30">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── REVIEW WALL ─── */}
        <section className="py-16 md:py-20 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <p className="kicker text-center">WHY PEOPLE LOVE US</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Straight from our patients
            </h2>

            {/* Masonry-inspired staggered layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto space-y-5">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className={`break-inside-avoid rounded-2xl p-6 md:p-8 border transition-shadow hover:shadow-lg ${
                    r.featured
                      ? "bg-primary/5 border-primary/20"
                      : "bg-background border-border"
                  }`}
                >
                  <Quote className={`w-8 h-8 mb-4 ${r.featured ? "text-primary/40" : "text-muted-foreground/20"}`} />
                  <p className={`font-body leading-relaxed mb-6 ${
                    r.featured ? "text-lg md:text-xl text-foreground" : "text-sm text-foreground"
                  }`}>
                    "{r.quote}"
                  </p>
                  <div className="flex items-center gap-1.5">
                    <Stars size="w-3.5 h-3.5" />
                  </div>
                  <div className="mt-3 text-xs font-sans">
                    <span className="font-semibold text-foreground">{r.name}</span>
                    {r.location && (
                      <span className="text-muted-foreground inline-flex items-center gap-0.5 ml-1.5">
                        <MapPin className="w-3 h-3" /> {r.location}
                      </span>
                    )}
                    <span className="text-muted-foreground ml-1.5">· {r.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INLINE CTA ─── */}
        <section className="py-14 md:py-16 bg-gradient-to-r from-[hsl(var(--gradient-cta-start))] to-[hsl(var(--gradient-cta-end))]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Ready to become our next happy patient?
            </h2>
            <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join 5,000+ families who look forward to going to the dentist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-background text-foreground font-sans font-semibold text-sm rounded-full hover:bg-background/90 transition-colors shadow-lg">
                Book Your Visit <ArrowRight className="w-4 h-4" />
              </a>
              <a href={`tel:${CYPRESS_PHONE}`} className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-sans font-semibold text-sm rounded-full hover:bg-primary-foreground/10 transition-colors">
                Call {CYPRESS_PHONE_FORMATTED}
              </a>
            </div>
          </div>
        </section>

        {/* ─── MORE VIDEO STORIES ─── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <p className="kicker text-center">MORE STORIES</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Watch more patient experiences
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {remainingVideos.map((vid, i) => (
                <LazyYouTube key={i} videoId={vid.youtubeId} title={vid.title} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── GOOGLE REVIEWS LIVE WIDGETS ─── */}
        <section className="py-16 md:py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <p className="kicker text-center">LIVE FROM GOOGLE</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
              See our latest reviews
            </h2>
            <p className="text-center text-sm font-sans text-muted-foreground mb-10">
              Updated in real-time from our Google Business profiles
            </p>

            <div className="space-y-10 max-w-5xl mx-auto">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">Cypress Office</h3>
                <ReviewsWidget location="cypress" title="Cypress Google Reviews" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">Katy Office</h3>
                <ReviewsWidget location="katy" title="Katy Google Reviews" />
              </div>
            </div>

            <div className="text-center mt-10 flex flex-wrap justify-center gap-3">
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-cypress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:shadow-md transition-all">
                Review Cypress <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-katy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:shadow-md transition-all">
                Review Katy <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <div className="flex justify-center mb-6">
              <Stars size="w-8 h-8" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Your smile story starts here
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Whether it's been 6 months or 6 years, we make it easy to get back to the dentist — with zero judgment, ever.
            </p>
            <Link to="/book-online" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4 rounded-full">
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
