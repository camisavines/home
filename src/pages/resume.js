import React from 'react';
import * as R from "../data/resume";

const SKILLS = R.skills.map(item =>
    <span className="mr-1 badge badge-primary">{item}</span>
)

const EXPERIENCE = R.work.map(job =>
    <div className="mb-4"> 
        <h5><b>{job.title}</b>, {job.company}</h5> 
        <ul>
            <li>{job.dates}</li>
            <li>{job.description}</li>
            <li><b>{job.assets}</b></li>
        </ul>
    </div>
)

const EXTRA = R.extra.map(item =>
    <span className="mr-1 badge badge-primary">{item}</span>
)

const COURSES = R.courses.map(c =>
    <li>{c.name}</li>
)

const AWARDS = R.awards.map (a =>
    <div className="col-sm-6 col-md-4 col-lg-3" style={{minHeight: "20vh"}}>
        <h5>{a.name}</h5>
        <p>{a.description}</p>
    </div>
)

function Resume() {
    return (
        <section>
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-lg-6 my-3">
                        <h2>Experience</h2>
                        <hr/>
                        {EXPERIENCE}
                    </div>


                <div className="col s12 l6 my-3">
                    <h2>Education</h2>
                    <hr/>
                        <div className="mb-4"> 
                            <h5><em>Bachelor of Science</em> in <b>Computer Science, 2022</b></h5> 
                            <ul>
                                <li>Luddy School of Informatics, Computing & Engineering<br/>Indiana University—Bloomington</li>
                                <li>Specializing in <b>Software Engineering</b></li>
                                <li>Minor in <b>Business</b></li>
                            </ul> 
                        </div>

                        <div className="mb-4"> 
                            <h5>Relevant Courses</h5> 
                            <ul>{COURSES}</ul>
                        </div>

                        {/* <div>
                            <h4>Research Interests</h4>
                            <p>Sports Analytics</p>
                        </div> */}


                </div>
            </div>


            <div className="row my-5">
                <div className="col-sm-12 col-lg-6">
                    <h2>Skills</h2>
                    <div> {SKILLS} </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <h2>Extra-Curricular</h2>
                    <div> {EXTRA} </div>
                </div>
            </div>


            <div className=" grey-bg py-5">
                <div className="containers">

                    <div className="row">
                        <div className="col s12 my-5 px-3">
                            <h2>Awards</h2>
                            <ul><div className="row">{AWARDS}</div></ul>
                        </div>
                    </div>
                                
                </div>
            </div>

        </div>
        </section>
    )
}

export default Resume;