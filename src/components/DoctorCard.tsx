import { DOCTOR_IMAGES } from "@/lib/images";

interface DoctorCardProps {
  name: string;
  credentials: string;
  bio: string;
  href: string;
  imgKey?: string;
}

const DoctorCard = ({ name, credentials, bio, href, imgKey }: DoctorCardProps) => {
  const img = imgKey ? DOCTOR_IMAGES[imgKey] : null;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-44 h-44 rounded-full mb-5 overflow-hidden ring-2 ring-transparent hover:ring-primary/40 transition-all duration-300">
        {img ? (
          <img src={img.url} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={176} height={176} />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-xs font-sans text-muted-foreground">Photo</span>
          </div>
        )}
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
