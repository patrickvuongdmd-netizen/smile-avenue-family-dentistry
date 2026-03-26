import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useDocTitle from "@/hooks/use-doc-title";
import { Heart, Users, Award, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { OFFICE_IMAGES } from "@/lib/images";

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
      <Helmet>
        <title>About Us | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Learn about Smile Avenue Family Dentistry — our story, our values, and the team of dedicated professionals behind your smile in Cypress and Katy, TX." />
        <link rel="canonical" href="https://www.smileavenuefamilydentistry.com/about/" />
      </Helmet>
      <Navbar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />

      <main className="pb-14 lg:pb-0">
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

        {/* MISSION CTA */}
        <section className="gradient-cta section-padding text-center">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Smile Avenue Difference
            </h2>
            <p className="font-body text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Schedule your visit today and discover why thousands of families trust Smile Avenue with their smiles.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn-cta-light">
                Book Your Visit
              </a>
              <Link to="/convenient-locations" className="btn-cta-outline">
                Find a Location
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBar phone={PHONE} phoneFormatted={PHONE_FORMATTED} bookingUrl={BOOKING} />
      <Footer />
    </>
  );
};

export default About;
