import { Tv, Factory, Calendar, Zap, Languages, ScanLine, Heart, Baby, Sparkles, Crown, Scan, CreditCard, CalendarCheck } from "lucide-react";
import waitingRoomImg from "@/assets/office/waiting-room-lobby.png";

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

const techs = [
  { icon: <Sparkles className="w-5 h-5" />, label: "Invisalign® Provider" },
  { icon: <Crown className="w-5 h-5" />, label: "In-House Dental Lab" },
  { icon: <Scan className="w-5 h-5" />, label: "Digital Impressions" },
  { icon: <CreditCard className="w-5 h-5" />, label: "0% Financing" },
  { icon: <CalendarCheck className="w-5 h-5" />, label: "Online Booking" },
];

interface Props {
  onBook: () => void;
}

const SmileAvenueDifference = ({ onBook }: Props) => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Photo */}
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={waitingRoomImg}
            alt="Smile Avenue waiting room with leather sofas, 3D accent wall, and complimentary refreshments"
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>

        {/* Perks */}
        <div>
          <p className="kicker">WHAT SETS US APART</p>
          <h2 className="section-heading !text-2xl md:!text-[2.75rem] !mb-3 md:!mb-5">The Smile Avenue Difference</h2>
          <p className="text-sm md:text-base font-body text-muted-foreground mb-5 md:mb-8">Not your typical dental office.</p>

          <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-3 sm:space-y-0 sm:gap-4 mb-6 md:mb-8">
            {perks.map((perk, i) => (
              <li key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  {perk.icon}
                </div>
                <span className="text-[11px] sm:text-sm font-sans font-medium text-foreground leading-tight sm:leading-relaxed sm:pt-1.5">{perk.text}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={onBook}
            className="btn-cta w-full sm:w-auto"
          >
            Book Your Visit
          </button>
        </div>
      </div>

      {/* Technology trust strip */}
      <div className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-border">
        <div className="grid grid-cols-5 gap-3 sm:gap-6">
          {techs.map((t) => (
            <div key={t.label} className="flex flex-col items-center text-center gap-1.5 sm:gap-2">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {t.icon}
              </div>
              <span className="text-[9px] sm:text-xs font-sans font-semibold text-foreground leading-tight">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SmileAvenueDifference;
