interface DoctorCardProps {
  name: string;
  credentials: string;
  bio: string;
  href: string;
}

const DoctorCard = ({ name, credentials, bio, href }: DoctorCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-44 h-44 rounded-full bg-muted mb-5 flex items-center justify-center">
        <span className="text-xs font-sans text-muted-foreground">Photo</span>
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-xs font-sans text-muted-foreground mb-2">{credentials}</p>
      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-3 max-w-xs">{bio}</p>
      <a href={href} className="text-sm font-sans font-medium text-primary hover:text-primary-dark transition-colors">
        Learn More →
      </a>
    </div>
  );
};

export default DoctorCard;
