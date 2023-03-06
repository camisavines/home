import React from "react";

import timeline from "../data/timeline";
import camisa from "../photos/headshot.jpg";
import linkedinlogo from "../photos/linkedin-logo.svg"
import linkedinlogo_light from "../photos/linkedin-logo-light.svg"
import "../css/timeline.css";

const Home = () => {
  const currentThemeColor = localStorage.getItem("theme-color");

  return (
    <>
      <section
        className="container"
        style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        <div className="row" style={{ width: "100%" }}>
          <div className="col s12 m7" style={{ paddingRight: "3rem" }}>
            <h1>Hi, I'm Camisa</h1>
            <h5>Front Stack Developer</h5>
            <p>
              High level experience in web development, producing solutions in
              big tech.
            </p>
            <a href="https://www.linkedin.com/in/camisavines/"><img src={currentThemeColor === "light" ? linkedinlogo_light : linkedinlogo} width="20px"/></a>
          </div>
          <div
            className="col s8 m5"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div
              style={{
                backgroundImage: `url(${camisa})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                paddingTop: "100%",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="timeline">
              {timeline.map((t) => (
                <div className={`tl-item ${t.item_classes}`}>
                  <div className={`tl-dot ${t.bar_color}`}></div>
                  <div className="tl-content" style={{ paddingBottom: "25%" }}>
                    <h6 className="text-muted" style={{ marginTop: "0rem" }}>
                      {t.date}
                    </h6>
                    <h3 className="tl-title">{t.title}</h3>
                    <div className="row">
                      <div className="col s12 m6">
                        <p>{t.content}</p>
                        <p>
                          <a
                            href={t.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t.linkText}
                          </a>
                        </p>
                        <div className="tl-date text-muted mt-1">
                          {t.subtexts.map((t) => {
                            return (
                              <>
                                {t}
                                <br />
                              </>
                            );
                          })}
                        </div>
                      </div>

                      {t.image ? (
                        <div className="col s12 l8 xl6">
                          <img
                            src={t.image}
                            width="100%"
                            alt="timeline_image"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
