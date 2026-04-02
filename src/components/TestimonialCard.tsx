import { Star, MapPin } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  source: string;
  location?: string;
}

const TestimonialCard = ({ quote, name, source, location }: TestimonialCardProps) => {
  return (
    <div className="card-warm flex flex-col justify-between min-h-[220px]">
      <div>
        <div className="flex gap-0.5 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-sm font-body leading-relaxed text-foreground">"{quote}"</p>
      </div>
      <div className="text-xs font-sans mt-6 pt-5 border-t border-border/40">
        <span className="font-semibold text-foreground">{name}</span>
        {location && (
          <span className="text-muted-foreground inline-flex items-center gap-0.5 ml-1.5">
            <MapPin className="w-3 h-3" /> {location}
          </span>
        )}
        <span className="text-muted-foreground"> · {source}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
