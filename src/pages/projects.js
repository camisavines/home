import React from "react";
import projects from "../data/project";
import "../css/projects.css";

const Projects = () => {
  return (
    <div className="row" style={{ marginTop: "3rem" }}>
      {projects.map((p) => (
        <div
          className="col s12 m6 l4"
          style={{
            alignItems: "stretch",
            display: "flex",
            marginBottom: "1rem",
          }}
        >
          <div className={`project card`} 
              style={{ minHeight: "50vh" }}
              >
            <div
              className="card-image waves-effect waves-block waves-light"
              style={{ height: "30vh" }}
            >
              <img
                className="activator"
                src={p.img}
                style={{ padding: "2rem" }}
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {p.title}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href={p.link} style={{color: "red"}}>Visit</a>
              </p>
            </div>
            <div className="card-reveal" style={{color: "black"}}>
              <span className="card-title grey-text text-darken-4">
                {p.title}
                <i className="material-icons right">close</i>
              </span>
              <p>{p.description}</p>
              <a href={p.link2} style={{color: "red"}}>{p.link2Text}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Projects };
