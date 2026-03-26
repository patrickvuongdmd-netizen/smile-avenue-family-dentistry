import { Star, Clock, Globe, MapPin } from "lucide-react";

const TrustStrip = () => (
  <div className="py-3 bg-card border-b border-border">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs font-sans font-medium text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 fill-primary text-primary" />
          5,000+ Five-Star Reviews
        </span>
        <span className="hidden sm:inline text-border">|</span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-primary" />
          Same-Day Appointments
        </span>
        <span className="hidden sm:inline text-border">|</span>
        <span className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-primary" />
          Hablamos Español
        </span>
        <span className="hidden sm:inline text-border">|</span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          2 Houston Locations
        </span>
      </div>
    </div>
  </div>
);

export default TrustStrip;
