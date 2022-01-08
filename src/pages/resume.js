import React from 'react';

import * as R from "../data/resume";
import pdf from "../data/VinesCamisa_Resume.pdf";


const Resume = () => {
    return (
        <>
        <div className='container py-5'>
            <h1>Resume</h1>
            <p>Download a pdf version, <a href={pdf}>here</a>.</p>
        </div>


        <div className='container'>
            <div className='row my-5'>
                <div className="col-lg-12">
                    <h2>Experience</h2>
                    <hr/>

                    {R.work.map(job =>
                        <div className='row py-4'>
                            <div className='col-md-4'>
                                <h5>{job.title}</h5>
                                <h6 className='text-muted m-0'>{job.company}</h6>
                                <small className='text-muted'>{job.dates}</small>
                            </div>
                            <div className='col-md-8'>
                                <ul>
                                    <li>{job.description}</li>
                                    <li><b>{job.assets}</b></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            <div className='row my-5'>
                <div className='col-lg-12'>
                    <h2>Education</h2>
                    <hr/>

                    <div className='row py-4'>
                        <div className='col-md-12 mb-5'>
                            <h5><em>Bachelor of Science</em> in <b>Computer Science</b></h5>
                            <h6 className='text-muted m-0'>Indiana University—Bloomington</h6>
                            <small className='text-muted'>May 2022</small>
                        </div>
                        <div className='col-md-8'>
                            <p className='m-0'>Specialization in <b>Software Engineering</b></p>
                            <p className='m-0'>Minor in <b>Business</b></p>
                            <p>Luddy School of Informatics, Computing & Engineering</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row my-5'>
                <div className='col-lg-12'>
                    <h2>Skills</h2>
                    <hr/>

                    <div className='row my-4'>
                        <div className='col-6 col-md-3'>
                            <p><b>WebDev</b></p>
                        </div>
                        <div className='col-6 col-md-9'>
                            <p>HTML, CSS, JavaScript, ReactJs, Responsive Web Design, Bootstrap, Tailwind, Material Design, Ruby on Rails, jQuery, Materialize</p>
                        </div>
                    </div>

                    <div className='row my-4'>
                        <div className='col-6 col-md-3'>
                        <p><b>Programming languages</b></p>
                        </div>
                        <div className='col-6 col-md-9'>
                            <p>Python, Java, C</p>
                        </div>
                    </div>

                    <div className='row my-4'>
                        <div className='col-6 col-md-3'>
                        <p><b>Tools & Platforms</b></p>
                        </div>
                        <div className='col-6 col-md-9'>
                            <p>Github, Version Control, Adobe Photoshop, Adobe InDesign, Adobe Illustrator, AWS EC2, Docker</p>
                        </div>
                    </div>

                    <div className='row my-4'>
                        <div className='col-6 col-md-3'>
                        <p><b>Other Skills</b></p>
                        </div>
                        <div className='col-6 col-md-9'>
                            <p>Organization, Teamwork, Leadership, Written and Verbal Communication, Reseach & Documentation, Googling</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row my-5'>
                <div className="col-lg-12">
                    <h2>Awards</h2>
                    <hr/>

                    {R.awards.map (a =>
                        <div className="row">
                            <div className='col-sm-12 pb-4'>
                                <h5>{a.name}</h5>
                                <p>{a.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </div>
        </>
    )
}

export default Resume;