import { Tile } from "@carbon/react";
import { LogoLinkedin, Email, Plane, Code } from "@carbon/react/icons";

export const Links = () => {
  const linksList = [
    {
      icon: Email,
      link: "https://www.linkedin.com/in/camisavines/",
      name: "Mail",
    },
    {
      icon: LogoLinkedin,
      link: "https://www.linkedin.com/in/camisavines/",
      name: "LinkedIn",
    },
    {
      icon: Code,
      link: "https://www.linkedin.com/in/camisavines/",
      name: ".dev",
    },
    {
      icon: Plane,
      link: "https://magnets.camisavines.com/",
      name: "Travel",
    },
  ];
  return (
    <Tile
      style={{
        borderRadius: "10px",
        // backgroundColor: "rgba(110, 174, 238, 0.5)",
        aspectRatio: 1,
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(16px)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "0.5rem",
        }}
      >
        {linksList.map((l) => (
          <div key={l.name} style={{ textAlign: "center", width: "72px" }}>
            <div
              style={{
                background: "rgba(205, 218, 239, 0.6)",
                marginBottom: "0.5rem",
                borderRadius: "8px",
                width: "72px",
                height: "72px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = l.link;
              }}
            >
              <l.icon size={48} />
            </div>
            <small>{l.name}</small>
          </div>
        ))}
      </div>
    </Tile>
  );
};
