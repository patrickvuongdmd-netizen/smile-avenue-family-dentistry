import { Tv, Factory, Calendar, Zap, Languages, ScanLine, Heart, Baby } from "lucide-react";
import { OFFICE_IMAGES } from "@/lib/images";

const perks = [
  { icon: <Tv className="w-5 h-5" />, text: "Netflix and comfort amenities in every chair" },
  { icon: <Factory className="w-5 h-5" />, text: "In-house Smile Dental Lab — restorations in days, not weeks" },
  { icon: <Calendar className="w-5 h-5" />, text: "Saturday hours for busy families" },
  { icon: <Zap className="w-5 h-5" />, text: "Same-day emergency appointments" },
  { icon: <Languages className="w-5 h-5" />, text: "We speak Spanish and Vietnamese" },
  { icon: <ScanLine className="w-5 h-5" />, text: "Digital scanning — no goopy impressions" },
  { icon: <Heart className="w-5 h-5" />, text: "Honest treatment plans — we never upsell" },
  { icon: <Baby className="w-5 h-5" />, text: "Your kids will actually want to come back" },
];

interface Props {
  onBook: () => void;
}

const SmileAvenueDifference = ({ onBook }: Props) => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Photo */}
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={OFFICE_IMAGES.treatmentRoom}
            alt="Smile Avenue treatment room with Netflix and comfort amenities"
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>

        {/* Perks */}
        <div>
          <p className="kicker">WHAT SETS US APART</p>
          <h2 className="section-heading">The Smile Avenue Difference</h2>
          <p className="text-base font-body text-muted-foreground mb-8">Not your typical dental office.</p>

          <ul className="space-y-4 mb-8">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                  {perk.icon}
                </div>
                <span className="text-sm font-sans font-medium text-foreground leading-relaxed pt-1.5">{perk.text}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={onBook}
            className="btn-cta"
          >
            Book Your Visit
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default SmileAvenueDifference;
