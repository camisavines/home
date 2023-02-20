import React from "react";

import * as R from "../data/resume";
// import pdf from "../data/VinesCamisa_Resume.pdf";

const Resume = () => {
  return (
    <div className="" style={{ marginTop: "3rem" }}>
      <p>Download</p>
      {/* <p>Download a pdf version, <a href={pdf}>here</a>.</p> */}

      <div className="row">
        <div className="col s12 m3 l2">
          <h4>Experience</h4>
        </div>

        <div className="col s12 m9 l10">
          {R.work.map((job) => (
            <div className="row">
              <div className="col m5">
                <h5 className="red-text">{job.title}</h5>
                <h6 className="text-muted m-0">
                  {job.company} <br /> <small>{job.dates}</small>
                </h6>
              </div>
              <div className="col-md-8">
                <ul>
                  <li>{job.description}</li>
                  <li>
                    <b>{job.assets}</b>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <hr />
      </div>
      <hr />

      <div className="row">
        <div className="col s12 m3 l2">
          <h4>Education</h4>
        </div>

        <div className="col s12 m9 l10">
          <h4 className="red-text">Computer Science, BS</h4>
          <h6>
            Luddy School of Informatics, Computing & Engineering <br />
            Indiana University—Bloomington <br /> Spring class of 2022
          </h6>

          <p>
            Specialization in <b>Software Engineering</b>
            <br />
            Minor in <b>Business</b>
          </p>
        </div>
      </div>

      <hr />

<div className="row">
  <div className="col s12 m3 l2">
    <h4>Skills</h4>
  </div>

  <div className="col s12 m9 l10">
{R.skills.map(s => <div className="chip">{s}</div>)}
  </div>
</div>

      <hr />

      <div className="row">
        <div className="col s12 m3 l2">
          <h4>Awards</h4>
        </div>

        <div className="col s12 m9 l10">
          <div className="row">
            {R.awards.map((a) => (
              <div className="col s12 m6 l4 xl3">
                <h5>{a.name}</h5>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Resume };
