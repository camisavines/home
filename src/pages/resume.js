import React from 'react';
import * as R from "../data/resume";

const SKILLS = R.skills.map(item =>
    <li>{item}</li>
)

const EXPERIENCE = R.work.map(job =>
    <div className="mb-4"> <h4><b>{job.title}</b>, {job.company}</h4> <ul>
        <li>{job.description}</li>
        <li><b>{job.assets}</b></li>
    </ul> </div>
)

const EXTRA = R.extra.map(item =>
    <li>{item}</li>
)

const COURSES = R.courses.map(c =>
    <li>{c.name}<span className="float-right">{c.grade}</span></li>
)

const AWARDS = R.awards.map (a =>
    <div className="col-xs-12 col-sm-6 col-md-3">
        <h4>{a.name}</h4>
        <p>{a.description}</p>
    </div>
)

function Resume() {
    return (
        <div className="container">
            <div className="row">

                <div className="col-xs-12 col-lg-6 my-3">
                    <h2>Experience</h2>
                    <ul>{EXPERIENCE}</ul>
                </div>


                <div className="col-xs-12 col-lg-6 my-3">
                    <h2>Education</h2>
                    <ul>
                        <div className="mb-4"> <h4><b>Computer Science, BS, 2022</b></h4> <ul>
                                <li>Luddy School of Informatics, Computing & Engineering<br/>Indiana University—Bloomington</li>
                                <li>Minors in <b className="theme-yellow">Business, Math</b></li>
                        </ul> </div>

                        <div className="mb-4"> 
                            <h4>Courses</h4> 
                            <ul>{COURSES}</ul>
                        </div>

                        <div>
                            <h4>Research Interests</h4>
                            <p>Sports Analytics</p>
                        </div>

                    </ul>
                </div>
            </div>


            <div className="row">
                <div className="col-xs-12 col-lg-6 my-3">
                    <h2>Skills</h2>
                    <ul id="skills"> {SKILLS} </ul>
                </div>
                <div className="col-xs-12 col-lg-6 my-3">
                    <h2>Extra-Curricular</h2>
                    <ul id="skills"> {EXTRA} </ul>
                </div>
            </div>


            <div className=" grey-bg py-5">
                <div className="containers">

                    <div className="row">
                        <div className="col-xs-12 my-5 px-3">
                            <h2>Awards</h2>
                            <ul><div className="row">{AWARDS}</div></ul>
                        </div>
                    </div>
                                
                </div>
            </div>

        </div>

    )
}

export default Resume;