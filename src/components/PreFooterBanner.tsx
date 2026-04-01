import { useState } from "react";
import BookingLocationModal from "@/components/BookingLocationModal";

const PreFooterBanner = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark py-16 md:py-24">
        {/* Decorative swirl background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200C120 120 240 320 360 200C480 80 600 280 720 200C840 120 960 320 1080 200C1200 80 1320 280 1440 200V400H0Z" fill="hsl(var(--primary))" fillOpacity="0.4" />
            <path d="M0 250C160 170 320 350 480 250C640 150 800 330 960 250C1120 170 1280 330 1440 250V400H0Z" fill="hsl(var(--primary))" fillOpacity="0.3" />
            <path d="M0 300C200 220 400 380 600 300C800 220 1000 360 1200 300C1300 260 1400 340 1440 300V400H0Z" fill="hsl(var(--primary-foreground))" fillOpacity="0.05" />
            <circle cx="200" cy="100" r="60" fill="hsl(var(--primary))" fillOpacity="0.15" />
            <circle cx="800" cy="80" r="90" fill="hsl(var(--primary-foreground))" fillOpacity="0.05" />
            <circle cx="1200" cy="150" r="45" fill="hsl(var(--primary))" fillOpacity="0.2" />
          </svg>
        </div>

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
