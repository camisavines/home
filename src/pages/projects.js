import React from "react";
import projects from "../data/project";
import "../css/projects.css";

const Projects = () => {
  return (
    <div className="row" style={{ marginTop: "3rem" }}>
      {projects.map((p) => (
        <div className="col s12 m6 l4">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={p.img} style={{ padding: "2rem" }} />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                {p.title}
                <i class="material-icons right">more_vert</i>
              </span>
              <p>
                <a href={p.link}>Visit</a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                {p.title}
                <i class="material-icons right">close</i>
              </span>
              <p>{p.description}</p>
              <a href={p.link2}>{p.link2Text}</a>
            </div>
          </div>
        </div>

        //         <div className="col s12 m6 l4" style={{padding: "2rem", marginBottom: "4rem", display: "stretch"}}>
        //           <div className="project">
        //             <div>
        //             <img src={p.img} width="100%" />
        //             <p>{p.title}</p>
        // </div>
        //           </div>
        //           <hr style={{marginBottom: "2rem"}} />
        //           <div className="col s12 m6">
        //           </div>
        //         </div>
      ))}
    </div>
  );
};

export { Projects };
