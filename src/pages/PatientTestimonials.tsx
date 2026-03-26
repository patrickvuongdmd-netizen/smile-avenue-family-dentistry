import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, ExternalLink, Play } from "lucide-react";
import LazyYouTube from "@/components/LazyYouTube";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import { VIDEO_TESTIMONIALS } from "@/lib/images";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const reviews = [
  { quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time.", name: "Thao H.", source: "Google Review" },
  { quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home. I was offered a cozy blanket and my choice of Netflix!", name: "Kashayn P.", source: "Google Review" },
  { quote: "Dr. Vuong and his team are absolutely amazing. They took the time to explain everything and made me feel comfortable throughout my implant procedure.", name: "Michael R.", source: "Google Review" },
  { quote: "Best dental experience I've ever had. The staff is incredibly professional and the office is beautiful. I drive from Katy just to come here.", name: "Jennifer L.", source: "Google Review" },
  { quote: "I was terrified of the dentist for years. The sedation dentistry option changed everything. I finally got the care I needed without any anxiety.", name: "David M.", source: "Google Review" },
  { quote: "My kids actually look forward to their dental visits now. The team is so gentle and patient with children. Highly recommend for families!", name: "Amanda K.", source: "Google Review" },
  { quote: "Got my CEREC crown done in one visit — no temporary, no second appointment. The technology here is incredible. Highly recommend.", name: "Chris T.", source: "Google Review" },
  { quote: "I've been to many dentists and Smile Avenue is by far the best. They genuinely care about their patients and it shows in everything they do.", name: "Patricia W.", source: "Google Review" },
];

const PatientTestimonials = () => {
  useDocTitle("Patient Testimonials | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>Patient Testimonials | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Read what 5,000+ patients say about Smile Avenue Family Dentistry. Real reviews from real families in Cypress and Katy, TX." />
        <link rel="canonical" href="https://smileavenuedentistry.com/patient-testimonials/" />
        <meta property="og:title" content="Patient Testimonials | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Read what 5,000+ patients say about Smile Avenue. Real reviews from Cypress and Katy, TX families." />
        <meta property="og:url" content="https://smileavenuedentistry.com/patient-testimonials/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0 animate-in fade-in duration-500">
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs font-sans text-muted-foreground text-left">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Patient Testimonials</span>
            </nav>
            <p className="kicker">PATIENT STORIES</p>
            <h1 className="section-heading text-4xl md:text-5xl">What Our Patients Say</h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
              </div>
              <span className="font-display text-2xl font-bold text-foreground">4.9</span>
            </div>
            <p className="section-body">from 5,000+ verified reviews across Google, Yelp, and Facebook</p>
          </div>
        </section>

        {/* Google Reviews Widget */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">See Us On Google</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-0.5" aria-label="4.9 stars on Google">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <span className="font-display text-xl font-bold text-foreground">4.9</span>
              <span className="text-sm font-sans text-muted-foreground">· 5,000+ reviews</span>
            </div>
            <div className="bg-muted rounded-xl p-8 max-w-2xl mx-auto border border-border">
              <p className="text-sm font-sans text-muted-foreground">Google Reviews Widget — Embed your Google Business Profile reviews here</p>
            </div>
            <a href="https://g.page/smileavenuedentistry/review" target="_blank" rel="noopener noreferrer" className="btn-secondary mt-6 inline-flex items-center gap-2" aria-label="Leave a review on Google">
              Leave Us a Review <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">VIDEO STORIES</p>
            <h2 className="section-heading text-center">Watch Real Patient Experiences</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
              {VIDEO_TESTIMONIALS.map((vid, i) => (
                <div key={i} className="aspect-video rounded-2xl overflow-hidden relative shadow-md bg-muted group">
                  <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
                    <p className="text-sm font-sans font-semibold text-background text-left">{vid.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Written Reviews */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <p className="kicker text-center">WRITTEN REVIEWS</p>
            <h2 className="section-heading text-center">What Families Are Saying</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {reviews.map((r, i) => <TestimonialCard key={i} {...r} />)}
            </div>
          </div>
        </section>

        {/* Review Profiles */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <h2 className="section-heading">Read More Reviews</h2>
            <p className="section-body max-w-2xl mx-auto">See all of our reviews on Google and Yelp.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://g.page/smileavenuedentistry" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2" aria-label="View Google Reviews">Google Reviews <ExternalLink className="w-4 h-4" aria-hidden="true" /></a>
              <a href="#" className="btn-secondary flex items-center gap-2" aria-label="View Yelp Reviews">Yelp Reviews <ExternalLink className="w-4 h-4" aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Experience the Difference?</h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Join thousands of happy families at Smile Avenue.</p>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light" aria-label="Book your appointment">Book Your Appointment</a>
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
