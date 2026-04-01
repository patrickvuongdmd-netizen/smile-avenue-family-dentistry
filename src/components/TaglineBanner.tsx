interface Props {
  onBook: () => void;
}

const TaglineBanner = ({ onBook }: Props) => (
  <section className="py-16 md:py-20 relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 tagline-gradient" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-10 md:px-12 md:py-14 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-2xl md:text-3xl lg:text-[2.25rem] font-bold leading-snug" style={{ color: "#1a1a2e" }}>
          Care at Smile Avenue isn't just gentle, it's <em className="not-italic" style={{ color: "hsl(40 63% 58%)" }}>genuine.</em>
        </p>
        <button
          onClick={onBook}
          className="btn-cta shrink-0 !rounded-full"
        >
          Book Now
        </button>
      </div>
    </div>
  </section>
);

export default TaglineBanner;
