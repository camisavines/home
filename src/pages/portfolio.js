import React from "react";

import projects from "../data/project";

const Portfolio = () => {
  return (
    <>
      <section className="container">
        <h1>Projects</h1>
      </section>

      <section className="container" style={{ paddingTop: "5rem", paddingBottom: "30vh" }}>

          {projects.map((p) => (
            <div className="row" style={{borderRadius: "10px", background: "rgba(0,0,0,0.1)", padding: "3rem"}}>
              <div className="col s12 m6 l4">
                <img src={p.img} alt={p.alt} width="100%" />
              </div>
              <div className="col s12 m6 l8">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <p><a href={p.link2}>{p.link2Text}</a><span> | </span>   <a href={p.link}>Visit</a></p>
              </div>
            </div>
          ))}
      </section>

    </>
  );
};

export { Portfolio };
