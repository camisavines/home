import { useState } from "react";
import { Tile } from "@carbon/react";
import { Camera } from "@carbon/react/icons";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const PHOTOS = [
  {
    src: "https://picsum.photos/seed/a/800/600",
    thumb: "https://picsum.photos/seed/a/400/300",
    alt: "Photo 1",
    title: "Photo 1",
    description: "Your description here",
  },
  {
    src: "https://picsum.photos/seed/b/800/600",
    thumb: "https://picsum.photos/seed/b/400/300",
    alt: "Photo 2",
    title: "Photo 2",
    description: "Your description here",
  },
  {
    src: "https://picsum.photos/seed/c/800/600",
    thumb: "https://picsum.photos/seed/c/400/300",
    alt: "Photo 3",
    title: "Photo 3",
    description: "Your description here",
  },
  {
    src: "https://picsum.photos/seed/d/800/600",
    thumb: "https://picsum.photos/seed/d/400/300",
    alt: "Photo 4",
    title: "Photo 4",
    description: "Your description here",
  },
  {
    src: "https://picsum.photos/seed/e/800/600",
    thumb: "https://picsum.photos/seed/e/400/300",
    alt: "Photo 5",
    title: "Photo 5",
    description: "Your description here",
  },
  {
    src: "https://picsum.photos/seed/f/800/600",
    thumb: "https://picsum.photos/seed/f/400/300",
    alt: "Photo 6",
    title: "Photo 6",
    description: "Your description here",
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
              height: "120%"
            //   aspectRatio: "4/3",
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
