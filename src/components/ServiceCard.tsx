import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, href, icon }: ServiceCardProps) => {
  return (
    <Link
      to={href}
      className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 text-muted-foreground transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm font-body text-muted-foreground leading-relaxed">{description}</p>
      <span className="inline-flex items-center gap-1 mt-4 text-sm font-sans font-medium text-primary group-hover:gap-2 transition-all">
        Learn More <span aria-hidden>→</span>
      </span>
    </Link>
  );
};

export default ServiceCard;
