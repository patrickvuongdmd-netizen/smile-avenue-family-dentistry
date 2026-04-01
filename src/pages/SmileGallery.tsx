import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";

import beforeAfterImplants from "@/assets/gallery/before-after-implants.jpg";
import beforeAfterVeneers from "@/assets/gallery/before-after-veneers.jpg";
import beforeAfterWhitening from "@/assets/gallery/before-after-whitening.jpg";
import beforeAfterInvisalign from "@/assets/gallery/before-after-invisalign.jpg";
import beforeAfterCrown from "@/assets/gallery/before-after-crown.jpg";
import beforeAfterAllon4 from "@/assets/gallery/before-after-allon4.jpg";
import LazyYouTube from "@/components/LazyYouTube";
import { PAGE_VIDEOS } from "@/lib/images";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const categories = ["All", "Implants", "Veneers", "Whitening", "Invisalign", "Crowns"];

const galleryItems = [
  { category: "Implants", src: beforeAfterImplants, label: "Dental Implants", alt: "Before and after dental implants transformation at Smile Avenue Family Dentistry" },
  { category: "Implants", src: beforeAfterAllon4, label: "All-on-4 Full Arch", alt: "Before and after All-on-4 full arch implant restoration at Smile Avenue" },
  { category: "Veneers", src: beforeAfterVeneers, label: "Porcelain Veneers", alt: "Before and after porcelain veneers smile makeover at Smile Avenue" },
  { category: "Whitening", src: beforeAfterWhitening, label: "Teeth Whitening", alt: "Before and after professional teeth whitening at Smile Avenue" },
  { category: "Invisalign", src: beforeAfterInvisalign, label: "Invisalign", alt: "Before and after Invisalign clear aligner treatment at Smile Avenue" },
  { category: "Crowns", src: beforeAfterCrown, label: "Custom Porcelain Crown", alt: "Before and after custom porcelain crown at Smile Avenue" },
];

const SmileGallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter(g => g.category === active);

  useDocTitle("Smile Gallery | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Smile Gallery — Before & After | Smile Avenue Family Dentistry</title>
        <meta name="description" content="See real before and after results from Smile Avenue patients. Browse transformations including implants, veneers, whitening, Invisalign, and crowns." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/smile-gallery/" />
        <meta property="og:title" content="Smile Gallery — Before & After | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="See real before and after results from Smile Avenue patients." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/smile-gallery/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content="https://www.smileavenuefamilydentistry.com/logo-full.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Smile Gallery</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="kicker">REAL RESULTS</p>
              <h1 className="section-heading text-4xl md:text-5xl">Before & After Smile Gallery</h1>
              <p className="section-body">Every smile tells a story. Browse real results from patients at Smile Avenue — proof that the smile you've always wanted is within reach.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-colors ${active === cat ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {filtered.map((item, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border shadow-sm bg-card">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto"
                    loading={i < 2 ? undefined : "lazy"}
                    width={1024}
                    height={1024}
                  />
                  <div className="px-4 py-3 text-center">
                    <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-primary">{item.category}</span>
                    <h3 className="text-sm font-sans font-semibold text-foreground mt-0.5">{item.label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Video */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="section-heading">Watch Smile Transformations</h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.smileGallery.youtubeId} title={PAGE_VIDEOS.smileGallery.title} />
            </div>
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Book Your Transformation</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Your before-and-after story starts with a single appointment.</p>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default SmileGallery;
