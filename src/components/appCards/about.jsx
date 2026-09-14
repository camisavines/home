import { Tile } from "@carbon/react";
import { CarouselVertical, Camera } from "@carbon/react/icons";

export const About = () => {
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

      {/* image gallery right here */}
    </Tile>
  );
};
