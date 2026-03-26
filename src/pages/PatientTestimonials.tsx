import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, Play, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const videoTestimonials = [
  { name: "Maria's Implant Journey", procedure: "Dental Implants" },
  { name: "The Johnson Family", procedure: "Pediatric Dentistry" },
  { name: "Robert's Smile Makeover", procedure: "Veneers" },
  { name: "Sarah's Invisalign Results", procedure: "Invisalign" },
];

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
  return (
    <>
      <Helmet>
        <title>Patient Testimonials | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Read what 5,000+ patients say about Smile Avenue Family Dentistry. Real reviews from real families in Cypress and Katy, TX." />
        <link rel="canonical" href="https://smileavenuedentistry.com/patient-testimonials/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center max-w-3xl">
            <nav className="mb-6 text-xs font-sans text-muted-foreground text-left">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Patient Testimonials</span>
            </nav>
            <p className="kicker">PATIENT STORIES</p>
            <h1 className="section-heading text-4xl md:text-5xl">What Our Patients Say</h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}</div>
              <span className="font-display text-2xl font-bold text-foreground">4.9</span>
            </div>
            <p className="section-body">from 5,000+ verified reviews across Google, Yelp, and Facebook</p>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="section-padding section-alt">
          <div className="container mx-auto">
            <p className="kicker text-center">VIDEO STORIES</p>
            <h2 className="section-heading text-center">Watch Real Patient Experiences</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {videoTestimonials.map((v, i) => (
                <div key={i} className="bg-card rounded-xl border border-border overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-muted relative flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-sans text-sm font-semibold text-foreground">{v.name}</h3>
                    <p className="text-xs font-sans text-muted-foreground">{v.procedure}</p>
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
              <a href="#" className="btn-primary flex items-center gap-2">Google Reviews <ExternalLink className="w-4 h-4" /></a>
              <a href="#" className="btn-secondary flex items-center gap-2">Yelp Reviews <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </section>

        <section className="section-padding gradient-cta text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">Ready to Experience the Difference?</h2>
            <p className="font-body text-lg text-background/80 mb-8 max-w-2xl mx-auto">Join thousands of happy families at Smile Avenue.</p>
            <a href={CYPRESS_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">Book Your Appointment</a>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={CYPRESS_PHONE} bookingUrl={CYPRESS_BOOKING} />
      <Footer />
    </>
  );
};

export default PatientTestimonials;
