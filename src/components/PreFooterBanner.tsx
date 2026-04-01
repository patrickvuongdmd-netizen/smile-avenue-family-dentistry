import { useState } from "react";
import BookingLocationModal from "@/components/BookingLocationModal";

const PreFooterBanner = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Marble swirl background */}
        <img
          src="/images/prefooter-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/30" />

        {/* White card */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-card rounded-3xl px-8 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <h2 className="font-display text-2xl md:text-4xl lg:text-[2.75rem] font-medium leading-tight text-foreground text-center md:text-left max-w-2xl">
              Care at Smile Avenue isn't just painless,{" "}
              <em className="not-italic text-primary">it's a pleasure</em>
            </h2>
            <button
              onClick={() => setBookingOpen(true)}
              className="btn-primary shrink-0 text-base md:text-lg px-8 py-4 rounded-full"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
      <BookingLocationModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default PreFooterBanner;
