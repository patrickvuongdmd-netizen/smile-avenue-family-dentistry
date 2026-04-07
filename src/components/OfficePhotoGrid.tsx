import { OFFICE_IMAGES } from "@/lib/images";

const photos = [
  { src: OFFICE_IMAGES.waitingRoom, alt: "Smile Avenue modern waiting room with comfortable seating" },
  { src: OFFICE_IMAGES.treatmentRoom, alt: "State-of-the-art treatment room with Netflix and comfort amenities" },
  { src: OFFICE_IMAGES.hallway, alt: "Bright, welcoming hallway at Smile Avenue Family Dentistry" },
  { src: OFFICE_IMAGES.coffeeStation, alt: "Complimentary coffee and refreshment station for patients" },
];

interface Props {
  heading?: string;
  kicker?: string;
  bgClassName?: string;
}

const OfficePhotoGrid = ({ heading = "Step Inside Our Office", kicker = "YOUR COMFORT, OUR PRIORITY", bgClassName = "bg-background" }: Props) => (
  <section className={`section-padding ${bgClassName}`}>
    <div className="container mx-auto">
      <p className="kicker text-center">{kicker}</p>
      <h2 className="section-heading text-center">{heading}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8">
        {photos.map((photo, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden group">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OfficePhotoGrid;
