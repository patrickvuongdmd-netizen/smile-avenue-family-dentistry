import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Star, ExternalLink } from "lucide-react";
import LazyYouTube from "@/components/LazyYouTube";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import TrustStrip from "@/components/TrustStrip";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";
import ReviewsWidget from "@/components/ReviewsWidget";
import { VIDEO_TESTIMONIALS } from "@/lib/images";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const reviews = [
  { quote: "I always love to come to Smile Dentistry. I trust the care that they give me. The team makes me feel so special every time.", name: "Thao H.", source: "Google Review", location: "Firethorne, Katy" },
  { quote: "From the moment I walked in I was greeted so kindly. Everyone made me feel so welcome and at home. I was offered a cozy blanket and my choice of Netflix!", name: "Kashayn P.", source: "Google Review", location: "Cinco Ranch, Katy" },
  { quote: "Dr. Vuong and his team are absolutely amazing. They took the time to explain everything and made me feel comfortable throughout my implant procedure.", name: "Michael R.", source: "Google Review", location: "Cypress, TX" },
  { quote: "Best dental experience I've ever had. The staff is incredibly professional and the office is beautiful. I drive from Katy just to come here.", name: "Jennifer L.", source: "Google Review", location: "Spring Cypress" },
  { quote: "I was terrified of the dentist for years. The sedation dentistry option changed everything. I finally got the care I needed without any anxiety.", name: "David M.", source: "Google Review", location: "Cy-Fair" },
  { quote: "My kids actually look forward to their dental visits now. The team is so gentle and patient with children. Highly recommend for families!", name: "Amanda K.", source: "Google Review", location: "Fairfield, Cypress" },
  { quote: "Got my crown done at Smile Avenue and the in-house lab made all the difference — perfect fit and the color matches perfectly. Highly recommend.", name: "Chris T.", source: "Google Review", location: "Towne Lake, Cypress" },
  { quote: "I've been to many dentists and Smile Avenue is by far the best. They genuinely care about their patients and it shows in everything they do.", name: "Patricia W.", source: "Google Review", location: "Bridgeland, Cypress" },
];

const PatientTestimonials = () => {
  useDocTitle("Patient Testimonials | Smile Avenue Family Dentistry");

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
      </Helmet>
      <TrustTicker />

      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0 ">
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

        {/* Google Reviews Widgets */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">See Us On Google</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex gap-0.5" aria-label="4.9 stars on Google">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <span className="font-display text-xl font-bold text-foreground">4.9</span>
              <span className="text-sm font-sans text-muted-foreground">· 5,000+ reviews</span>
            </div>

            <div className="space-y-10 max-w-5xl mx-auto">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 text-center">Cypress Office Reviews</h3>
                <ReviewsWidget location="cypress" title="Cypress Google Reviews" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 text-center">Katy Office Reviews</h3>
                <ReviewsWidget location="katy" title="Katy Google Reviews" />
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-cypress" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2" aria-label="Leave a review for Cypress on Google">
                Review Cypress <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-katy" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2" aria-label="Leave a review for Katy on Google">
                Review Katy <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">VIDEO STORIES</p>
            <h2 className="section-heading text-center">Watch Real Patient Experiences</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
              {VIDEO_TESTIMONIALS.map((vid, i) => (
                <LazyYouTube key={i} videoId={vid.youtubeId} title={vid.title} />
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
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-cypress" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2" aria-label="Review Cypress on Google">Cypress Reviews <ExternalLink className="w-4 h-4" aria-hidden="true" /></a>
              <a href="https://www.giveratings.com/smile-avenue-family-dentistry-katy" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2" aria-label="Review Katy on Google">Katy Reviews <ExternalLink className="w-4 h-4" aria-hidden="true" /></a>
              <a href="#" className="btn-secondary flex items-center gap-2" aria-label="View Yelp Reviews">Yelp Reviews <ExternalLink className="w-4 h-4" aria-hidden="true" /></a>
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
