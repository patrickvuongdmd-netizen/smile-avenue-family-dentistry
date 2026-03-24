import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  source: string;
}

const TestimonialCard = ({ quote, name, source }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm font-body leading-relaxed text-foreground mb-5">"{quote}"</p>
      <div className="text-xs font-sans">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="text-muted-foreground"> · {source}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
