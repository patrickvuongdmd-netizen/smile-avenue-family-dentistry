import { useEffect, useRef, useState } from "react";

function getPageSize(width: number) {
  if (width < 450) return 1;
  if (width < 675) return 2;
  if (width < 918) return 3;
  if (width < 1144) return 4;
  return 5;
}

interface ReviewsWidgetProps {
  location: "cypress" | "katy";
  title?: string;
}

const SLUGS = {
  cypress: "smile-avenue-family-dentistry-cypress-review-widget",
  katy: "smile-avenue-family-dentistry-katy-review-widget",
};

const ReviewsWidget = ({ location, title = "Reviews Widget" }: ReviewsWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState("");

  useEffect(() => {
    function update() {
      const w = containerRef.current?.offsetWidth;
      if (!w) return;
      const pageSize = getPageSize(w);
      setSrc(
        `https://www.localmarketingmanager.com/api/reviews/${SLUGS[location]}?pageSize=${pageSize}`
      );
    }

    update();
    const t = setTimeout(update, 50);
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
    };
  }, [location]);

  return (
    <div ref={containerRef}>
      {src && (
        <iframe
          src={src}
          style={{ width: "100%", border: "none", minHeight: 300 }}
          title={title}
        />
      )}
    </div>
  );
};

export default ReviewsWidget;
