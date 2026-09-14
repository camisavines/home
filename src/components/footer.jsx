export const Footer = () => {
  return (
    <div
      style={{
        fontSize: "0.5rem",
        maxWidth: "1500px",
        height: "5vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "var(--cds-background-02)",
      }}
    >
      <div>
        <a
          href="https://www.linkedin.com/in/camisavines/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </div>
      <div>Copyright @ 2026 Camisa Vines. All rights reserved</div>
    </div>
  );
};
