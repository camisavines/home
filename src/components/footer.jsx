export const Footer = () => {
  return (
    <div
      style={{
        fontSize: "0.5rem",
        height: "5vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        // backgroundColor: "var(--cds-background-active)",
        color: "var(--cds-text-secondary)",
      }}
    >
      <div style={{ maxWidth: "1200px" }}>
        <a
          href="https://www.linkedin.com/in/camisavines/"
          target="_blank"
          style={{ textDecoration: "none", color: "var(--cds-text-secondary)" }}
        >
          LinkedIn
        </a>
        <span style={{ margin: "0 0.25rem" }}>|</span>
        <a
          href="https://www.dev.camisavines.com/"
          target="_blank"
          style={{ textDecoration: "none", color: "var(--cds-text-secondary)" }}
        >
          Dev Site
        </a>
      </div>
      <div>Copyright @ 2026 Camisa Vines. All rights reserved</div>
    </div>
  );
};
