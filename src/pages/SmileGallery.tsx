import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

import beforeAfterImplants from "@/assets/gallery/before-after-implants.jpg";
import beforeAfterVeneers from "@/assets/gallery/before-after-veneers.jpg";
import beforeAfterWhitening from "@/assets/gallery/before-after-whitening.jpg";
import beforeAfterInvisalign from "@/assets/gallery/before-after-invisalign.jpg";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const categories = ["All", "Implants", "Veneers", "Whitening", "Invisalign", "Crowns"];

const beforeAfterPhotos = [
  { src: beforeAfterImplants, alt: "Before and after smile transformation — dental implants at Smile Avenue", label: "Dental Implants" },
  { src: beforeAfterVeneers, alt: "Before and after smile transformation — porcelain veneers at Smile Avenue", label: "Porcelain Veneers" },
  { src: beforeAfterWhitening, alt: "Before and after smile transformation — teeth whitening at Smile Avenue", label: "Teeth Whitening" },
  { src: beforeAfterInvisalign, alt: "Before and after smile transformation — Invisalign at Smile Avenue", label: "Invisalign" },
];

const galleryItems = [
  { category: "Implants", label: "Single Implant — Front Tooth", before: "Missing front tooth", after: "Natural-looking implant" },
  { category: "Implants", label: "All-on-4 Full Arch", before: "Multiple missing teeth", after: "Full arch restoration" },
  { category: "Veneers", label: "Porcelain Veneers — Full Set", before: "Uneven, stained teeth", after: "Uniform, bright smile" },
  { category: "Veneers", label: "Minimal-Prep Veneers", before: "Small gaps and chips", after: "Seamless, natural result" },
  { category: "Whitening", label: "In-Office Whitening", before: "Yellow, stained teeth", after: "8 shades whiter" },
  { category: "Whitening", label: "Take-Home Whitening", before: "Coffee and wine stains", after: "Bright, even tone" },
  { category: "Invisalign", label: "Adult Invisalign", before: "Crowded lower teeth", after: "Straight, aligned smile" },
  { category: "Invisalign", label: "Teen Invisalign", before: "Overbite with spacing", after: "Corrected bite and alignment" },
  { category: "Crowns", label: "CEREC Same-Day Crown", before: "Cracked molar", after: "Porcelain crown, same day" },
  { category: "Crowns", label: "Zirconia Crown", before: "Large filling failure", after: "Durable, natural crown" },
];

const SmileGallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter(g => g.category === active);

  useDocTitle("Smile Gallery | Smile Avenue Family Dentistry");


  return (
    <>
      <Helmet>
        <title>Smile Gallery — Before & After | Smile Avenue Family Dentistry</title>
        <meta name="description" content="See real before and after results from Smile Avenue patients. Browse transformations including implants, veneers, whitening, Invisalign, and crowns." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/smile-gallery/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
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

            {/* Real Before/After Photos */}
            <div className="grid sm:grid-cols-2 gap-6 mb-14 max-w-4xl mx-auto">
              {beforeAfterPhotos.map((photo, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border shadow-sm">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto"
                    loading={i < 2 ? undefined : "lazy"}
                    width={774}
                    height={797}
                  />
                </div>
              ))}
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => (
                <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="aspect-square bg-muted flex items-center justify-center text-xs font-sans text-muted-foreground p-2 text-center border-r border-border">Before<br />{item.before}</div>
                    <div className="aspect-square bg-muted flex items-center justify-center text-xs font-sans text-muted-foreground p-2 text-center">After<br />{item.after}</div>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-primary">{item.category}</span>
                    <h3 className="font-sans text-sm font-semibold text-foreground mt-1">{item.label}</h3>
                  </div>
                </div>
              ))}
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
