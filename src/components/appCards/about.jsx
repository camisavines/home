import { useState } from "react";
import { Tile } from "@carbon/react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const appleFont =
  '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

const PHOTOS = [
  {
    src: "/about-photos/iugrad.jpeg",
    thumb: "/about-photos/iugrad.jpeg",
    alt: "Indiana University Graduate",
    title: "IU Alumni",
    description: "I attended Indiana University--Bloomington. Go Hoosiers!",
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
    src: "/about-photos/dogs.JPG",
    thumb: "/about-photos/dogs.JPG",
    alt: "doggies",
    title: "My Dogs",
    description:
      "I love big dogs! I have an American Rottweiler and Cane Corso.",
  },
  {
    src: "/about-photos/ayp.jpeg",
    thumb: "/about-photos/ayp.jpeg",
    alt: "AYP Org",
    title: "Austin Young Professional Organization",
    description: "Austin has a thriving community of young professionals.",
  },
  {
    src: "/about-photos/ibm-friends.jpeg",
    thumb: "/about-photos/ibm-friends.jpeg",
    alt: "ibmers",
    title: "IBMers",
    description: "When IBMers get together to volunteer, great things happen.",
  },
  {
    src: "/about-photos/ibmers.jpeg",
    thumb: "/about-photos/ibmers.jpeg",
    alt: "ibmers",
    title: "IBMers",
    description:
      "I've been working with some people so long, we are friends now lol.",
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
];

export const About = ({ isDark }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <Tile
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        flex: 1,
        padding: "0",
        background: isDark ? "rgba(28,28,30,0.78)" : "rgba(255,255,255,0.62)",
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(255,255,255,0.85)",
        boxShadow: isDark
          ? "0 2px 12px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.06)"
          : "0 2px 8px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(0,0,0,0.06)",
        fontFamily: appleFont,
        marginBottom: "1rem",
      }}
    >
      {/* Header — matches iCloud widget header style */}
      <div
        style={{
          // padding: "0.5rem 1rem",
          padding: "11px 16px 10px",
          background: isDark ? "rgba(44,44,46,0.6)" : "rgba(255,255,255,0.5)",
          borderBottom: isDark
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "15px",
            letterSpacing: "-0.015em",
            color: isDark ? "#f5f5f7" : "#1d1d1f",
            fontFamily: appleFont,
          }}
        >
          Photos
        </span>
        <span
          style={{
            fontSize: "13px",
            color: "#0071e3",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            fontFamily: appleFont,
            cursor: "default",
          }}
        >
          {PHOTOS.length} items
        </span>
      </div>

      {/* Image grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
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
              aspectRatio: "1 / 1",
              display: "block",
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
                transition: "transform 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
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
