import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, ExternalLink, MapPin, ArrowRight, Heart, Shield, Sparkles, Users, Phone } from "lucide-react";
import LazyYouTube from "@/components/LazyYouTube";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import ReviewsWidget from "@/components/ReviewsWidget";
import ScrollReveal from "@/components/ScrollReveal";
import { VIDEO_TESTIMONIALS, OFFICE_IMAGES } from "@/lib/images";
import PatientStorySection from "@/components/testimonials/PatientStorySection";
import FullWidthQuote from "@/components/testimonials/FullWidthQuote";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";


const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

/* ─── THEMATIC STORY DATA ─── */

const fearToComfort = [
  {
    quote: "I was terrified of the dentist for years. The sedation dentistry option changed everything. I finally got the care I needed without any anxiety.",
    name: "David M.",
    location: "Cy-Fair",
    detail: "Hadn't been to a dentist in 6 years before Smile Avenue",
  },
  {
    quote: "Drove 30 minutes past three other dentists to get here. Worth every mile. The Netflix on the ceiling is a game changer for my anxiety.",
    name: "Sarah K.",
    location: "Tomball, TX",
    detail: "Now brings her whole family",
  },
  {
    quote: "My daughter was scared of dentists until we came here. Now she asks when her next appointment is. That says everything.",
    name: "Linda T.",
    location: "Bridgeland, Cypress",
    detail: "Daughter is now cavity-free for 2 years",
  },
];

const theExperience = [
  {
    quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home. I was offered a cozy blanket and my choice of Netflix!",
    name: "Kashayn P.",
    location: "Cinco Ranch, Katy",
    detail: "First visit — now a loyal patient",
  },
  {
    quote: "The office is stunning — it doesn't even feel like a dentist's office. Modern, clean, and calming. My whole family switched to Smile Avenue.",
    name: "Rosa M.",
    location: "Katy, TX",
    detail: "Family of five, all patients",
  },
  {
    quote: "Best dental experience I've ever had. The staff is incredibly professional and the office is beautiful. I drive from Katy just to come here.",
    name: "Jennifer L.",
    location: "Spring Cypress",
    detail: "Patient for 3+ years",
  },
];

const trustAndCare = [
  {
    quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time.",
    name: "Thao H.",
    location: "Firethorne, Katy",
    detail: "Refers friends and family regularly",
  },
  {
    quote: "I've never had a dentist explain my treatment so thoroughly. No surprises, no hidden costs. They truly put patients first.",
    name: "James W.",
    location: "Cypress, TX",
    detail: "Switched from a previous dentist of 10 years",
  },
  {
    quote: "I've been to many dentists and Smile Avenue is by far the best. They genuinely care about their patients and it shows in everything they do.",
    name: "Patricia W.",
    location: "Bridgeland, Cypress",
    detail: "Whole family under our care",
  },
];

const familyFocused = [
  {
    quote: "My kids actually look forward to their dental visits now. The team is so gentle and patient with children. Highly recommend for families!",
    name: "Amanda K.",
    location: "Fairfield, Cypress",
    detail: "Mom of three",
  },
  {
    quote: "Dr. Vuong and his team are absolutely amazing. They took the time to explain everything and made me feel comfortable throughout my implant procedure.",
    name: "Michael R.",
    location: "Cypress, TX",
    detail: "Full-arch implant patient",
  },
  {
    quote: "Got my crown done at Smile Avenue and the in-house lab made all the difference — perfect fit and the color matches perfectly. Highly recommend.",
    name: "Chris T.",
    location: "Towne Lake, Cypress",
    detail: "Same-day crown",
  },
];

const allReviews = [...fearToComfort, ...theExperience, ...trustAndCare, ...familyFocused];

const tickerQuotes = [
  '"Best dental experience ever"',
  '"My kids actually look forward to coming here"',
  '"It feels like a spa, not a dentist"',
  '"Zero judgment, all care"',
  '"The Netflix on the ceiling is a game changer"',
  '"My daughter now asks when her next appointment is"',
  '"No surprises, no hidden costs"',
  '"I drove 30 minutes past 3 other dentists"',
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
          "review": allReviews.map(r => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.name },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": r.quote,
          }))
        })}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">

        {/* ─── HERO ─── */}
        <TestimonialsHero bookingUrl={CYPRESS_BOOKING} />

        {/* ─── FEATURED VIDEO ─── */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[hsl(var(--surface-subtle))] to-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <div className="grid md:grid-cols-5 gap-8 md:gap-14 items-center">
                <div className="md:col-span-2">
                  <p className="kicker">HEAR THEIR STORIES</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                    Real patients.<br />In their own words.
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Nothing speaks louder than someone who's been exactly where you are. Press play.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <LazyYouTube videoId={featuredVideo.youtubeId} title={featuredVideo.title} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── STORY SECTION 1: Lead grid with accent image ─── */}
        <PatientStorySection
          theme="Finally, no more dread"
          heading="They didn't think they'd ever say this about a dentist"
          description="For many of our patients, the hardest part was walking through the door. Here's what happened next."
          icon={<Heart className="w-5 h-5" />}
          stories={fearToComfort}
          bgClass="bg-card"
          accentImage={OFFICE_IMAGES.treatmentRoom}
          layout="lead-grid"
        />

        {/* ─── CINEMATIC QUOTE BREAK ─── */}
        <FullWidthQuote
          quote="I drove 30 minutes past three other dentists to get here. Worth every mile."
          name="Sarah K."
          location="Tomball, TX"
        />

        {/* ─── STORY SECTION 2: Horizontal with photo ─── */}
        <PatientStorySection
          theme="More spa than clinic"
          heading="Netflix, blankets, and zero anxiety"
          description="Netflix on the ceiling. Warm blankets. Noise-canceling headphones. This is dentistry, redesigned around you."
          icon={<Sparkles className="w-5 h-5" />}
          stories={theExperience}
          bgClass="bg-background"
          accentImage={OFFICE_IMAGES.coffeeStation}
          layout="horizontal-cards"
        />

        {/* ─── QUOTE TICKER ─── */}
        <div className="overflow-hidden bg-[hsl(var(--hero-dark))] py-6">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...tickerQuotes, ...tickerQuotes].map((text, i) => (
              <span key={i} className="inline-flex items-center shrink-0 px-8 text-sm font-body italic text-white/40">
                {text}
                <span className="ml-8 text-primary/40">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── STORY SECTION 3: Spotlight centered ─── */}
        <PatientStorySection
          theme="Why they stayed"
          heading="They stayed because they trusted us"
          description="Our patients stay because they trust us — and that trust is earned at every single visit."
          icon={<Shield className="w-5 h-5" />}
          stories={trustAndCare}
          bgClass="bg-card"
          layout="spotlight"
        />

        {/* ─── CINEMATIC QUOTE BREAK ─── */}
        <FullWidthQuote
          quote="My daughter was scared of dentists until we came here. Now she asks when her next appointment is."
          name="Linda T."
          location="Bridgeland, Cypress"
        />

        {/* ─── STORY SECTION 4: Masonry with accent ─── */}
        <PatientStorySection
          theme="The whole crew comes here"
          heading="The whole family — even the stubborn ones"
          description="From toddlers to grandparents — every member of your family deserves gentle, thoughtful care."
          icon={<Users className="w-5 h-5" />}
          stories={familyFocused}
          bgClass="bg-background"
          accentImage={OFFICE_IMAGES.hallway}
          layout="masonry"
        />

        {/* ─── INLINE CTA ─── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[hsl(var(--gradient-cta-start))] to-[hsl(var(--gradient-cta-end))] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
          <div className="container mx-auto px-4 text-center relative">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to feel this way<br className="hidden sm:block" /> about the dentist?
              </h2>
              <p className="font-body text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
                Join 5,000+ families who actually look forward to their next appointment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-sans font-semibold text-sm rounded-full hover:bg-background/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Book Your Visit <ArrowRight className="w-4 h-4" />
                </a>
                <a href={`tel:${CYPRESS_PHONE}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-sans font-semibold text-sm rounded-full hover:bg-primary-foreground/10 transition-colors">
                  Call {CYPRESS_PHONE_FORMATTED}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── MORE VIDEO STORIES ─── */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-[hsl(var(--surface-subtle))]">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="kicker">MORE STORIES</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Watch more patient experiences
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {remainingVideos.map((vid, i) => (
                <ScrollReveal key={i}>
                  <LazyYouTube videoId={vid.youtubeId} title={vid.title} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── GOOGLE REVIEWS LIVE WIDGETS ─── */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="kicker">LIVE FROM GOOGLE</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  See what people are saying right now
                </h2>
                <p className="text-sm font-sans text-muted-foreground">
                  Updated in real-time from our Google Business profiles
                </p>
              </div>
            </ScrollReveal>

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
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-cypress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:shadow-md transition-all">
                Review Cypress <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-katy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:shadow-md transition-all">
                Review Katy <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
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
