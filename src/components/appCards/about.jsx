import { useState } from "react";
import { Tile } from "@carbon/react";
import { Camera } from "@carbon/react/icons";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const PHOTOS = [
  {
    src: "/about-photos/dogs.JPG",
    thumb: "/about-photos/dogs.JPG",
    alt: "doggies",
    title: "My Dogs",
    description: "I love big dogs! I have an American Rott and Cane Corso.",
  },
  {
    src: "/about-photos/brazil.JPG",
    thumb: "/about-photos/brazil.JPG",
    alt: "Brazil",
    title: "Brazil",
    description:
      "My favorite thing in the world to do is travel. This is from my recent trip to Rio de Janeiro. Next, I'm headed to China and Thailand.",
  },
  {
    src: "/about-photos/magnet-1.JPG",
    thumb: "/about-photos/magnet-1.JPG",
    alt: "magent-1",
    title: "Magnets",
    description: "I have a magnet collection of over 100 magnets.",
  },
  {
    src: "/about-photos/codeschool.jpg",
    thumb: "/about-photos/codeschool.jpg",
    alt: "code school",
    title: "South Bend Code School",
    description:
      "I used to be an instructor with South Bend Code School, an after-school program teaching young students how to code.",
  },
    {
    src: "/about-photos/magnet-1.JPG",
    thumb: "/about-photos/magnet-1.JPG",
    alt: "magent-1",
    title: "Magnets",
    description: "I have a magnet collection of over 100 magnets.",
  },
  {
    src: "/about-photos/codeschool.jpg",
    thumb: "/about-photos/codeschool.jpg",
    alt: "code school",
    title: "South Bend Code School",
    description:
      "I used to be an instructor with South Bend Code School, an after-school program teaching young students how to code.",
  },
];

export const About = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <Tile
      style={{
        borderRadius: "10px",
        backgroundColor: "rgba(240, 85, 217, 0.5)",
        padding: "0",
        overflow: "hidden",
        flex: 1,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0.875rem 1rem",
          background: "rgba(255, 255, 255, 0.25)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <Camera size={24} />
        <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>About</span>
      </div>

      {/* Image grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
          overflow: "hidden"
          //   padding: "0.75rem",
        }}
      >
        {PHOTOS.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => setLightboxIndex(index)}
            style={{
              padding: 0,
              border: "none",
              background: "none",
              cursor: "pointer",
              overflow: "hidden",
              height: "100%",
              aspectRatio: "10/8",
            }}
          >
            <img
              src={photo.thumb}
              alt={photo.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={PHOTOS.map(({ src, alt, title, description }) => ({
          src,
          alt,
          title,
          description,
        }))}
        plugins={[Captions]}
      />
    </Tile>
  );
};
