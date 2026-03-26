import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Zap, ScanLine, Clock, CheckCircle, Shield, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const products = [
  { icon: <Sparkles className="w-6 h-6" />, title: "Zirconia Crowns", description: "Ultra-durable, natural-looking crowns milled with precision for a perfect fit." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Emax Veneers", description: "Translucent, lifelike porcelain veneers crafted to match your natural teeth." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Clear Aligners", description: "Custom-fabricated aligner trays for orthodontic treatment." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Retainers", description: "Precision-made retainers to maintain your beautiful results." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Night Guards", description: "Custom-fitted night guards to protect against grinding and clenching." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Surgical Guides", description: "3D-printed implant surgical guides for precise placement." },
];

const techFeatures = [
  { icon: <ScanLine className="w-6 h-6" />, title: "Digital Scanning", description: "Medit and Imetric intraoral scanners capture a precise 3D model of your teeth in seconds — no goopy impressions needed." },
  { icon: <Zap className="w-6 h-6" />, title: "CEREC Same-Day Crowns", description: "Our CEREC milling unit creates porcelain crowns, inlays, and onlays in a single visit. Walk in with a broken tooth, walk out with a permanent restoration." },
  { icon: <Clock className="w-6 h-6" />, title: "Rapid Turnaround", description: "Because we design and fabricate in-house, many restorations are ready the same day — no waiting weeks for an outside lab." },
];

const benefits = [
  { icon: <Clock className="w-5 h-5" />, label: "Same-day restorations available" },
  { icon: <CheckCircle className="w-5 h-5" />, label: "Precise, custom fit every time" },
  { icon: <Shield className="w-5 h-5" />, label: "No goopy impressions" },
  { icon: <Zap className="w-5 h-5" />, label: "Fewer appointments needed" },
  { icon: <Sparkles className="w-5 h-5" />, label: "Premium materials" },
  { icon: <ScanLine className="w-5 h-5" />, label: "Digital precision" },
];

const DentalLab = () => {
  return (
    <>
      <Helmet>
        <title>In-House Digital Dental Lab | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Smile Dental Lab — our in-house digital dental lab creates same-day crowns, veneers, aligners, and more with CEREC and digital scanning technology." />
        <link rel="canonical" href="https://smileavenuedentistry.com/dental-lab/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Dental Lab</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="kicker">SMILE DENTAL LAB</p>
                <h1 className="section-heading text-4xl md:text-5xl leading-tight">In-House Digital Dental Lab</h1>
                <p className="section-body">Most dental offices send your crown or veneer to an outside lab and ask you to come back weeks later. Not us. Our in-house digital lab lets us design, fabricate, and place precision restorations — often in a single visit.</p>
                <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">Book an Appointment</a>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center text-muted-foreground text-sm font-sans">Digital Dental Lab Photo</div>
            </div>
          </div>
        </section>

        {/* What We Create */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">WHAT WE CREATE</p>
            <h2 className="section-heading text-center">Restorations Made In-House</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {products.map((p, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">{p.icon}</div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">OUR TECHNOLOGY</p>
            <h2 className="section-heading text-center">Powered by Digital Precision</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {techFeatures.map((t, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">{t.icon}</div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <h2 className="section-heading">The In-House Lab Advantage</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-sans text-foreground"><span className="text-primary">{b.icon}</span>{b.label}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Experience Same-Day Dentistry</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Walk in with a dental problem, walk out with a permanent solution — all in one visit.</p>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Now</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default DentalLab;
