import React from 'react';
import "../styles/resume.css";

function Resume() {
    return (

        <div>
            <div className=" grey-bg py-5">
                <div className="containers">


                    <div className="row">
                        <div className="col-xs-12 col-lg-6 my-3">
                            <h2>Work Experience</h2>
                            <ul>
                                <div className="pb-3">
                                    <h4><span className="text-orangered">Post-Intern</span>, Future Wonder</h4>
                                    <p>Tech Consulting Intern since May 2019</p>
                                    <p><b>JavaScript, React, Python</b></p>
                                </div>
                                <div className="pb-3">
                                    <h4><span className="text-orangered">Instructor</span>, South Bend Code School</h4>
                                    <p>Teach younger students programming languages since. June 2017&mdash;August 2019</p>
                                    <p><b>HTML, CSS, JavaScript, Python, Graphic Design</b></p>
                                </div>
                                <div className="pb-3">
                                    <h4><span className="text-orangered">Undergraduate Instructor</span>, Indiana University</h4>
                                    <p>TA for introductory Python course CSCI-C 200 since January 2019</p>
                                    <p><b>Python</b></p>
                                </div>
                                <div className="pb-3">
                                    <h4><span className="text-orangered">Web Development Intern</span>, Luma</h4>
                                    <p>Online courseware for different universities since August 2016</p>
                                    <p><b>HTML, CSS</b></p>
                                </div>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-lg-6 my-3">
                            <h2>Education</h2>
                            <ul>
                                <div>
                                    <h4><span className="text-orangered">Indiana University—Bloomington</span>, 2022</h4>
                                    <p><b>Computer Science BS <span className="float-right"><em>GPA: 3.8</em></span></b></p>
                                    <p>Expected to graduate in 2022, I am pursuing a degree in Computer Science BS and minors in Business and Sports Media</p>
                                </div>
                                <div>
                                    <h4><span className="text-orangered">Courses</span></h4>
                                    <ul>
                                        <li>C200: Intro to Computers & Programming (Python) <span className="float-right">A</span></li>
                                        <li>C212: Intro to Software Systems (Java) <span className="float-right">A-</span></li>
                                        <li>S210: Digital Art Survey & Practice <span className="float-right">A</span></li>
                                        <li>C241: Discrete Structures <span className="float-right">A</span></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xs-12 my-5 px-3">
                            <h2>Skills</h2>
                            <div className="chip orange">HTML</div>
                            <div className="chip orange">CSS</div>
                            <div className="chip orange">JavaScript</div>
                            <div className="chip orange">React</div>
                            <div className="chip orange">Material Design</div>
                            <div className="chip orange">jQuery</div>
                            <div className="chip orange">Python</div>
                            <div className="chip orange">Java</div>
                            <div className="chip orange">Adobe Photoshop</div>
                            <div className="chip orange">Adobe Illustrator</div>
                            <div className="chip orange">Adobe InDesign</div>
                            <div className="chip orange">Bootstrap</div>
                            <div className="chip orange">Materialize</div>
                            <div className="chip orange">Responsive Web Design</div>
                            <div className="chip orange">Github</div>
                            <div className="chip orange">Version Control</div>
                            <div className="chip orange">Microsoft Word</div>
                            <div className="chip orange">Microsoft PowerPoint</div>
                            <div className="chip orange">Communication</div>
                            <div className="chip orange">Teamwork</div>
                            <div className="chip orange">Leadership</div>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="col-xs-12 my-5 px-3">
                            <h2>Awards</h2>
                            <ul>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                    <h4><span className="text-orangered">Intern of the Year</span></h4>
                                    <p>Awarded by Indiana INTERNnet in 2018.</p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                    <h4><span className="text-orangered">Student Excellence</span></h4>
                                    <p>Presented by the Indiana Governor for excellence shown in Career & Technical Education.</p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                    <h4><span className="text-orangered">National Technical Honors Society</span></h4>
                                    <p>Nominated by CTE teacher and inducted as a member in 2016.</p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                    <h4><span className="text-orangered">Youth of the Year</span></h4>
                                    <p>Awarded by the Boys and Girls Club of St. Joseph County in 2014.</p>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                
                
                
                </div>
            </div>
        </div>

    )
}

export default Resume;