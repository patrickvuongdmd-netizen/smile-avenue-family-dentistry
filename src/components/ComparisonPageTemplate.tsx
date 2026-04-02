import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import TrustStrip from "@/components/TrustStrip";
import TrustTicker from "@/components/TrustTicker";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import BookingLocationModal from "@/components/BookingLocationModal";
import { ComparisonData, COMPARISON_NAMES } from "@/lib/comparison-data";
import { SERVICE_NAMES } from "@/lib/brand-service-data";

const PHONE = "8326481756";
const PHONE_FORMATTED = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const ComparisonPageTemplate = ({ data }: { data: ComparisonData }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com/services/${data.slug}/`;
  useDocTitle(data.metaTitle);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.smileavenuefamilydentistry.com/services/" },
      { "@type": "ListItem", position: 3, name: data.heroHeading, item: canonicalUrl },
    ],
  };

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">{data.heroHeading}</span>
            </nav>

            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary font-sans">
                COMPARISON GUIDE
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-foreground leading-[1.1] font-display">
                {data.heroHeading}
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-muted-foreground max-w-xl font-body">
                {data.heroBody}
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setBookingOpen(true)} className="btn-cta">
                  Book Free Consultation
                </button>
                <a href={`tel:${PHONE}`} className="btn-secondary">
                  Call {PHONE_FORMATTED}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading">{data.introHeading}</h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                {data.introParas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">SIDE-BY-SIDE COMPARISON</p>
            <h2 className="section-heading text-center">{data.optionAName} vs {data.optionBName}</h2>

            {/* Desktop table */}
            <div className="hidden md:block max-w-4xl mx-auto mt-10">
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="text-left py-4 px-6 text-sm font-sans font-bold text-foreground w-1/4">Feature</th>
                      <th className="text-left py-4 px-6 text-sm font-sans font-bold text-primary w-[37.5%]">{data.optionAName}</th>
                      <th className="text-left py-4 px-6 text-sm font-sans font-bold text-foreground w-[37.5%]">{data.optionBName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonPoints.map((point, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                        <td className="py-3.5 px-6 text-sm font-sans font-semibold text-foreground">{point.feature}</td>
                        <td className="py-3.5 px-6 text-sm font-body text-muted-foreground">{point.optionA}</td>
                        <td className="py-3.5 px-6 text-sm font-body text-muted-foreground">{point.optionB}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4 mt-8">
              {data.comparisonPoints.map((point, i) => (
                <div key={i} className="bg-card rounded-xl p-5 border border-border">
                  <p className="text-xs font-sans font-bold text-foreground uppercase tracking-wider mb-3">{point.feature}</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-sans font-semibold text-primary mb-0.5">{data.optionAName}</p>
                      <p className="text-sm font-body text-muted-foreground">{point.optionA}</p>
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold text-foreground mb-0.5">{data.optionBName}</p>
                      <p className="text-sm font-body text-muted-foreground">{point.optionB}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Deep-links to both service pages */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Link to={`/services/${data.optionASlug}`} className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Learn More: {data.optionAName}
              </Link>
              <Link to={`/services/${data.optionBSlug}`} className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all">
                Learn More: {data.optionBName}
              </Link>
            </div>
          </div>
        </section>

        {/* VERDICT */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="kicker">OUR EXPERT OPINION</p>
              <h2 className="section-heading">{data.verdictHeading}</h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                {data.verdictParas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <button onClick={() => setBookingOpen(true)} className="btn-cta">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding gradient-cta">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
              <div>
                <p className="kicker text-white/70">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading text-white">{data.optionAName} vs {data.optionBName} FAQ</h2>
                <p className="section-body text-white/70">
                  Have more questions? Call us or book a free consultation.
                </p>
              </div>
              <FaqAccordion items={data.faqs} variant="dark" />
            </div>
          </div>
        </section>

        {/* RELATED COMPARISONS */}
        {data.relatedComparisons.length > 0 && (
          <section className="section-padding bg-background">
            <div className="container mx-auto text-center">
              <p className="kicker">MORE COMPARISONS</p>
              <h2 className="section-heading">Related Comparison Guides</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {data.relatedComparisons.map((slug) => (
                  <Link
                    key={slug}
                    to={`/services/${slug}`}
                    className="px-5 py-3 rounded-xl bg-card border border-border text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary transition-all"
                  >
                    {COMPARISON_NAMES[slug] || slug}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <BackToTop />
      <BookingLocationModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default ComparisonPageTemplate;
