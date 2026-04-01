import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Gift, Users, Sparkles, Tag, Phone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const offers = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    badge: "NEW PATIENT",
    title: "New Patient Special",
    subtitle: "Exam, X-Rays & Cleaning",
    price: "$99",
    originalPrice: "$350 value",
    details: ["Comprehensive oral exam", "Full set of digital X-rays", "Professional cleaning", "Personalized treatment plan"],
    cta: "Claim This Offer",
    href: CYPRESS_BOOKING,
  },
  {
    icon: <Gift className="w-8 h-8" />,
    badge: "FREE",
    title: "Free Implant Consultation",
    subtitle: "Includes 3D CT Scan",
    price: "FREE",
    originalPrice: "$500 value",
    details: ["3D CT scan imaging", "Implant candidacy evaluation", "Custom treatment plan", "Financing options review"],
    cta: "Claim This Offer",
    href: "/free-consultation/",
  },
  {
    icon: <Users className="w-8 h-8" />,
    badge: "REFERRAL",
    title: "Refer a Friend Program",
    subtitle: "You Both Get Rewarded",
    price: "$50",
    originalPrice: "credit each",
    details: ["$50 credit for you", "$50 credit for your friend", "No limit on referrals", "Credits apply to any treatment"],
    cta: "Learn More",
    href: CYPRESS_BOOKING,
  },
  {
    icon: <Tag className="w-8 h-8" />,
    badge: "SEASONAL",
    title: "Whitening Special",
    subtitle: "Professional Take-Home Kit",
    price: "$199",
    originalPrice: "$400 value",
    details: ["Custom-fitted whitening trays", "Professional-grade whitening gel", "Up to 8 shades whiter", "Results in 2 weeks"],
    cta: "Claim This Offer",
    href: CYPRESS_BOOKING,
  },
];

const Specials = () => {
  useDocTitle("Dental Specials & Offers | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Dental Specials & Offers | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Save on dental care with our current specials. New patient exam for $99, free implant consultations, and referral rewards at Smile Avenue." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/specials/" />
        <meta property="og:title" content="Dental Specials & Offers | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Save on dental care with our current specials. New patient exam for $99." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/specials/" />
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
              <span className="text-foreground">Specials</span>
            </nav>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="kicker">SAVE ON YOUR SMILE</p>
              <h1 className="section-heading text-4xl md:text-5xl">Exclusive Offers for New & Existing Patients</h1>
              <p className="section-body">Great dental care shouldn't break the bank. These limited-time offers are available at both our Cypress and Katy offices — claim yours before they're gone.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {offers.map((offer, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border p-8 shadow-sm relative overflow-hidden">
                  <span className="absolute top-4 right-4 text-[10px] font-sans font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">{offer.badge}</span>
                  <div className="text-primary mb-4">{offer.icon}</div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-1">{offer.title}</h2>
                  <p className="text-sm font-sans text-muted-foreground mb-4">{offer.subtitle}</p>
                  <div className="mb-5">
                    <span className="font-display text-4xl font-bold text-primary">{offer.price}</span>
                    <span className="text-sm font-sans text-muted-foreground ml-2">{offer.originalPrice}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {offer.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                  <a href={offer.href} target={offer.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="btn-primary w-full text-center">{offer.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <h2 className="section-heading">Have Questions About Our Specials?</h2>
            <p className="section-body max-w-2xl mx-auto">Call either location and our team will walk you through available offers and help you schedule.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8326481756" className="btn-primary flex items-center gap-2"><Phone className="w-4 h-4" /> Cypress: (832) 648-1756</a>
              <a href="tel:2818005008" className="btn-secondary flex items-center gap-2"><Phone className="w-4 h-4" /> Katy: (281) 800-5008</a>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">These Offers Won't Last — Book Today</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Lock in your special pricing before availability runs out. Online booking takes 60 seconds.</p>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Online Now</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default Specials;
