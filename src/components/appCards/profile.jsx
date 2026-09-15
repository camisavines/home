import { Tile } from "@carbon/react";

export const Profile = () => {
  return (
    <Tile
      style={{
        borderRadius: "10px",
        // backgroundColor: "rgba(137, 117, 224, 0.5)",
        padding: "2rem",
        aspectRatio: 1,
        flex: 1,
        background: "linear-gradient(45deg, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.3))",
        backdropFilter: "blur(16px)",
        zIndex: 1000,
      }}
    >
      <img
        src="/headshot.jpg"
        style={{ width: "50%", borderRadius: "50%", marginBottom: "1rem" }}
      />
      <h1 style={{ fontSize: "32px" }}>Camisa</h1>
      {/* <p>camisa@camisavines.com</p> */}
      <p style={{ color: "var(--cds-text-secondary)", fontSize: "0.75rem" }}>
        Software Engineer at IBM
      </p>
    </Tile>
  );
};
