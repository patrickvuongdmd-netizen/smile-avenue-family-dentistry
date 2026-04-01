import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Heart, Users, Award, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import TrustTicker from "@/components/TrustTicker";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import SkipToContent from "@/components/SkipToContent";
import CredibilityBar from "@/components/CredibilityBar";
import DoctorCard from "@/components/DoctorCard";
import { OFFICE_IMAGES, PAGE_VIDEOS } from "@/lib/images";
import LazyYouTube from "@/components/LazyYouTube";
import OfficePhotoGrid from "@/components/OfficePhotoGrid";
import FullWidthPhotoBreak from "@/components/FullWidthPhotoBreak";

const PHONE = "8326481756";
const PHONE_FORMATTED = "(832) 648-1756";
const BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const doctors = [
  { name: "Dr. Patrick Vuong", credentials: "DMD", bio: "Lead dentist with a focus on comprehensive family and implant dentistry.", href: "/doctors/patrick-vuong-dmd", imgKey: "patrick-vuong" },
  { name: "Dr. Peter Kim", credentials: "DDS", bio: "Trusted for his gentle approach and commitment to patient comfort.", href: "/doctors/peter-kim-dds", imgKey: "peter-kim" },
  { name: "Dr. Laith Yahya", credentials: "DDS", bio: "Known for his integrity, precision, and passion for restorative care.", href: "/doctors/laith-yahya-dds", imgKey: "laith-yahya" },
];

const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Hospitality-Driven Care", description: "We treat every patient like family — with warmth, empathy, and genuine attention to your comfort." },
  { icon: <Award className="w-6 h-6" />, title: "Clinical Excellence", description: "Our doctors pursue continuing education and use the latest techniques to deliver outstanding results." },
  { icon: <Users className="w-6 h-6" />, title: "Community First", description: "We're proud to serve the families of Cypress, Katy, and surrounding communities with integrity." },
  { icon: <Star className="w-6 h-6" />, title: "Five-Star Experience", description: "From Netflix and blankets to digital impressions — we've reimagined what a dental visit can be." },
];

const About = () => {
  useDocTitle("About Us | Smile Avenue Family Dentistry");

  return (
    <>
      <SkipToContent />
      <Helmet>
        <title>About Us | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Learn about Smile Avenue Family Dentistry — our story, our values, and the team of dedicated professionals behind your smile in Cypress and Katy, TX." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/about/" />
        <meta property="og:title" content="About Us | Smile Avenue Family Dentistry" />
        <meta property="og:description" content="Learn about Smile Avenue Family Dentistry — our story, our values, and the team behind your smile in Cypress and Katy, TX." />
        <meta property="og:url" content="https://www.smileavenuefamilydentistry.com/about/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smile Avenue Family Dentistry" />
        <meta property="og:image" content={OFFICE_IMAGES.aboutHero} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <TrustTicker />

      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <TrustStrip />

      <main id="main-content" className="pb-14 lg:pb-0">
        {/* HERO */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="kicker">OUR STORY</p>
                <h1 className="section-heading text-4xl md:text-5xl leading-tight">
                  Dentistry Built on Hospitality
                </h1>
                <p className="section-body">
                  Smile Avenue Family Dentistry was founded on a simple idea: dental care should feel less like a clinical appointment and more like visiting family. From our warm welcomes to our cozy blankets, every detail is designed around your comfort and confidence.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  With two convenient locations in Cypress and Katy, TX, we've grown into a trusted practice serving thousands of families across the greater Houston area — and we're just getting started.
                </p>
              </div>
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img src={OFFICE_IMAGES.aboutHero} alt="Smile Avenue Family Dentistry team photo" className="w-full h-full object-cover" fetchPriority="high" width={800} height={600} />
              </div>
            </div>
          </div>
        </section>

        <CredibilityBar />

        {/* VALUES */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WHAT DRIVES US</p>
            <h2 className="section-heading">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {values.map((v) => (
                <div key={v.title} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* DOCTORS */}
        <section className="section-padding bg-background">
          <div className="container mx-auto text-center">
            <p className="kicker">MEET THE TEAM</p>
            <h2 className="section-heading">Our Doctors</h2>
            <p className="section-body max-w-2xl mx-auto">
              Our team of skilled, compassionate dentists brings years of experience and a genuine love for what they do.
            </p>
            <div className="grid md:grid-cols-3 gap-10 mt-12">
              {doctors.map((doc) => (
                <DoctorCard key={doc.name} {...doc} />
              ))}
            </div>
            <Link to="/our-team" className="inline-block mt-8 text-sm font-sans font-semibold text-primary hover:underline">
              Meet Our Full Team →
            </Link>
          </div>
        </section>

        {/* OFFICE PHOTO GRID */}
        <OfficePhotoGrid kicker="INSIDE OUR OFFICES" heading="Where Your Comfort Meets Modern Dentistry" />

        {/* MISSION CTA */}

        {/* Video */}
        <section className="section-padding section-alt">
          <div className="container mx-auto text-center">
            <p className="kicker">WATCH & LEARN</p>
            <h2 className="section-heading">Get to Know Smile Avenue</h2>
            <div className="max-w-2xl mx-auto mt-8">
              <LazyYouTube videoId={PAGE_VIDEOS.about.youtubeId} title={PAGE_VIDEOS.about.title} />
            </div>
          </div>
        </section>

      </main>

      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Smile Avenue Family Dentistry",
        url: "https://www.smileavenuefamilydentistry.com",
        logo: "https://www.smileavenuefamilydentistry.com/logo-full.png",
        description: "Hospitality-driven dental care for families in Cypress and Katy, TX. 5,000+ five-star reviews.",
        telephone: ["+18326481756", "+12818005008"],
        address: [
          { "@type": "PostalAddress", streetAddress: "9212 Fry Rd #120", addressLocality: "Cypress", addressRegion: "TX", postalCode: "77433", addressCountry: "US" },
          { "@type": "PostalAddress", streetAddress: "23541 Westheimer Pkwy Ste #170", addressLocality: "Katy", addressRegion: "TX", postalCode: "77494", addressCountry: "US" },
        ],
        sameAs: [
          "https://www.facebook.com/SmileAvenueFamilyDentistry/",
          "https://www.instagram.com/smileavenuefamilydentistry/",
          "https://www.tiktok.com/@smileavenuetx",
          "https://www.youtube.com/@SmileAvenueTX",
        ],
      }) }} />
    </>
  );
};

export default About;
