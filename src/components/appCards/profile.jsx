import { Tile } from "@carbon/react";

export const Profile = () => {
  return (
    <Tile
      style={{
        borderRadius: "10px",
        backgroundColor: "rgba(137, 117, 224, 0.5)",
        marginBottom: "2rem",
        padding: "2rem",
        aspectRatio: 1,
      }}
    >
      <img src="/headshot.jpg" style={{ width: "50%", borderRadius: "50%" }} />
      <h1 style={{ fontSize: "32px" }}>Camisa</h1>
      <p>camisa@camisavines.com</p>
    </Tile>
  );
};
