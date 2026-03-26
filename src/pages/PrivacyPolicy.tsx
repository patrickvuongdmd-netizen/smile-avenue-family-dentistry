import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CYPRESS_PHONE = "8326481756";
const CYPRESS_PHONE_FORMATTED = "(832) 648-1756";
const CYPRESS_BOOKING = "https://book.modento.io/c/8e39e583fb6841bb833642fb994d478c/SmileAvenueCypress";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Smile Avenue Family Dentistry</title>
        <meta name="description" content="Privacy policy and HIPAA notice for Smile Avenue Family Dentistry. Learn how we protect your personal health information." />
        <link rel="canonical" href="https://smileavenuedentistry.com/privacy-policy/" />
      </Helmet>
      <Navbar phone={CYPRESS_PHONE} phoneFormatted={CYPRESS_PHONE_FORMATTED} bookingUrl={CYPRESS_BOOKING} />

      <main className="pb-14 lg:pb-0">
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-3xl">
            <nav className="mb-6 text-xs font-sans text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Privacy Policy</span>
            </nav>

            <h1 className="section-heading text-3xl md:text-4xl mb-8">Privacy Policy</h1>
            <p className="text-sm font-sans text-muted-foreground mb-8">Last updated: March 2026</p>

            <div className="prose prose-sm max-w-none font-body text-foreground space-y-6">
              <h2 className="font-display text-xl font-bold text-foreground mt-8">HIPAA Notice of Privacy Practices</h2>
              <p className="text-muted-foreground leading-relaxed">This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully. Smile Avenue Family Dentistry ("the Practice") is committed to protecting the privacy and security of your protected health information (PHI).</p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">We collect personal information that you voluntarily provide to us, including but not limited to: name, date of birth, address, phone number, email address, Social Security number, insurance information, medical and dental history, and treatment records.</p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We may use and disclose your PHI for the following purposes: treatment (providing, coordinating, or managing your dental care), payment (billing and collecting payment for services), and healthcare operations (quality improvement, training, and business management activities).</p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to: request restrictions on certain uses and disclosures of your PHI; receive confidential communications; inspect and obtain a copy of your PHI; request amendments to your PHI; receive an accounting of disclosures; and obtain a paper copy of this notice.</p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8">Website Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed">Our website may collect non-personal information through cookies, analytics tools, and similar technologies. This includes browser type, device information, pages visited, and referral sources. This information is used to improve our website and services. We do not sell your personal information to third parties.</p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8">Contact Forms</h2>
              <p className="text-muted-foreground leading-relaxed">Information submitted through our website contact forms, appointment requests, and consultation forms is transmitted securely and used solely for the purpose of responding to your inquiry and scheduling appointments. This information is not shared with third parties for marketing purposes.</p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8">Security</h2>
              <p className="text-muted-foreground leading-relaxed">We implement appropriate technical and organizational safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our electronic systems comply with HIPAA security requirements.</p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">If you have questions about this privacy policy or wish to exercise your rights, please contact our Privacy Officer:</p>
              <p className="text-muted-foreground leading-relaxed">
                Smile Avenue Family Dentistry<br />
                9212 Fry Rd #120, Cypress, TX 77433<br />
                Phone: (832) 648-1756<br />
                Email: privacy@smileavenuedentistry.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
