import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
import { CategoryData } from "@/lib/category-data";

const PHONE = "8326481756";
const PHONE_FORMATTED = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const CategoryPageTemplate = ({ data }: { data: CategoryData }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const canonicalUrl = `https://www.smileavenuefamilydentistry.com/services/${data.slug}/`;
  useDocTitle(data.metaTitle);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smileavenuefamilydentistry.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.smileavenuefamilydentistry.com/services/" },
      { "@type": "ListItem", position: 3, name: data.categoryName, item: canonicalUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <TrustTicker />
      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-warm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">{data.categoryName}</span>
            </nav>

            <div className="max-w-3xl">
              <p className="kicker">SERVICE CATEGORY</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-[1.08] font-display">
                {data.heroHeading}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-muted-foreground max-w-xl font-body">
                {data.heroBody}
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setBookingOpen(true)} className="btn-cta">
                  Book Appointment
                </button>
                <a href={`tel:${PHONE}`} className="btn-secondary">
                  Call {PHONE_FORMATTED}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading">{data.introHeading}</h2>
              <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
                {data.introParas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES IN THIS CATEGORY — soft hover cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 section-warm">
          <div className="container mx-auto">
            <p className="kicker text-center">OUR {data.categoryName.toUpperCase().split(" ")[0]} SERVICES</p>
            <h2 className="section-heading text-center">Services in This Category</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              {data.services.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="group card-soft hover:shadow-lg hover:-translate-y-1"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5">{svc.description}</p>
                  <div className="flex items-center gap-1 text-sm font-sans font-semibold text-primary">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex gap-3 mt-4 text-xs font-sans text-muted-foreground">
                    <Link
                      to={`/cypress-tx/${svc.slug}`}
                      className="hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Cypress →
                    </Link>
                    <Link
                      to={`/katy-tx/${svc.slug}`}
                      className="hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Katy →
                    </Link>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 gradient-cta">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[38%_62%] gap-12 lg:gap-20 items-start">
              <div>
                <p className="kicker text-primary-foreground/60">FREQUENTLY ASKED QUESTIONS</p>
                <h2 className="section-heading text-primary-foreground">{data.categoryName} FAQ</h2>
                <p className="section-body text-primary-foreground/60">
                  Have more questions? Call us or book a consultation.
                </p>
              </div>
              <FaqAccordion items={data.faqs} variant="dark" />
            </div>
          </div>
        </section>

        {/* CTA — location cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28 bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">READY TO GET STARTED?</p>
            <h2 className="section-heading">Two Convenient Locations</h2>
            <p className="section-body max-w-2xl mx-auto">
              All {data.categoryName.toLowerCase()} services are available at both our Cypress and Katy offices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link to="/cypress-tx" className="px-8 py-4 rounded-2xl bg-card border border-border/60 text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary hover:shadow-md transition-all">
                Cypress Office
              </Link>
              <Link to="/katy-tx" className="px-8 py-4 rounded-2xl bg-card border border-border/60 text-sm font-sans font-semibold text-foreground hover:border-primary/30 hover:text-primary hover:shadow-md transition-all">
                Katy Office
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <BackToTop />
      <BookingLocationModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default CategoryPageTemplate;
