import { Link } from "react-router-dom";
import { GraduationCap, Heart, ShieldCheck, Target } from "lucide-react";
import { OFFICE_IMAGES, DOCTOR_IMAGES } from "@/lib/images";

const valueProps = [
  { icon: <GraduationCap className="w-5 h-5" />, title: "Decades of Combined Experience", desc: "Our doctors bring advanced training from top dental programs across the country." },
  { icon: <Heart className="w-5 h-5" />, title: "Care, Not Quotas", desc: "We never rush, never upsell. Every treatment plan is honest and personalized." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Safety-First Approach", desc: "Modern sterilization, digital imaging, and evidence-based protocols in every room." },
  { icon: <Target className="w-5 h-5" />, title: "Outcomes Over Everything", desc: "We measure success by your results — not how fast we can move to the next patient." },
];

const doctors = [
  { imgKey: "patrick-vuong", name: "Dr. Vuong" },
  { imgKey: "peter-kim", name: "Dr. Kim" },
  { imgKey: "laith-yahya", name: "Dr. Yahya" },
  { imgKey: "sameer-bilal", name: "Dr. Bilal" },
  { imgKey: "sarah-maredia", name: "Dr. Maredia" },
  { imgKey: "shayan-alkhiro", name: "Dr. Alkhiro" },
];

const HomepageDoctors = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto lg:max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — Team photo */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] max-h-[520px] mx-auto lg:mx-0 w-full">
          <img
            src={OFFICE_IMAGES.teamPhoto}
            alt="The Smile Avenue clinical team — doctors and staff"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={600}
            height={750}
          />
        </div>

        {/* Right — Value props */}
        <div>
          <p className="kicker">YOUR CARE TEAM</p>
          <h2 className="section-heading !text-2xl md:!text-[2.5rem] !mb-4">Science-Based. Patient-Driven.</h2>
          <p className="text-sm md:text-base font-body text-muted-foreground mb-8">
            Six doctors. Two locations. One mission: deliver dental care you can trust — and actually look forward to.
          </p>

          <ul className="space-y-5 mb-8">
            {valueProps.map((vp) => (
              <li key={vp.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  {vp.icon}
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-foreground mb-0.5">{vp.title}</h3>
                  <p className="text-xs md:text-sm font-body text-muted-foreground leading-relaxed">{vp.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Doctor headshots strip */}
          <div className="flex items-center gap-3 mb-6">
            {doctors.map((doc) => {
              const img = DOCTOR_IMAGES[doc.imgKey];
              return (
                <div key={doc.imgKey} className="text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-border">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={56} height={56} />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-sans text-muted-foreground mt-1 block">{doc.name}</span>
                </div>
              );
            })}
          </div>

          <Link to="/doctors" className="btn-secondary">Meet Our Clinical Team</Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomepageDoctors;
