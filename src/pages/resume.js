import React from 'react';

const skills = [
    "HTML", "CSS", "JavaScipt", "React.js", "Material Design", "jQuery", "Python", "Java",
    "Adobe Photoshop", "Adobe Illustrator", "Adobe Indesign", "Boostrap", "Materialize",  "Responsive Web Design",
    "Github", "Version Control", "Microsoft Word", "Microsoft PowerPoint", "Communication", "Teamwork",
    "Leadership"
]

const work = [
    { title: "Post-Intern", company: "Future Wonder",
      description: "Tech Consulting Intern since May 2019",
      assets: "JavaScript, React, Python, Docker, Postgres, Angular, Bootstrap"
    },
    { title: "Undergrad Instructor", company: "Indiana University",
      description: "TA for introductory Python course CSCI-C 200 since January 2019",
      assets: "Python"
    },
    { title: "Instructor", company: "South Bend Code School",
      description: "Teach younger students programming languages. June 2017—August 2019",
      assets: "HTML, CSS, JavaScript, Python, Graphic Design"
    },
    { title: "Web Development Intern", company: "Luma",
      description: "Built online courseware for different universities. August 2016—November 2019",
      assets: "HTML, CSS"
    },
]

const extra = [
    "National Society of Black Engineers", "Women in Computing", "Collins Living Learning Community", "Black Student Union",
    "Collins Philanthropy Club",
]

const courses = [
    {name: "CSCI-C 200: Intro to Computers & Programming (Python)", grade: "A"},
    {name: "CSCI-C 212: Intro to Software Systems (Java)", grade: "A-"},
    {name: "CSCI-C 241: Discrete Structures", grade: "A"},
    {name: "CSCI-C 291: Intro to C / Linux", grade: "A"},
    {name: "CSCI-C 343: Data Structures", grade: "A"},
    {name: "BUS-A 200 Foundations of Accounting", grade: "A"},
]

const awards = [
    {name: "Intern of the Year", description: "Awarded by Indiana INTERNnet in 2018"},
    {name: "Student Excellence", description: "Presented by the Indiana Governor for excellence shown in Career & Technical Education"},
    {name: "Dean's List", description: "IU Dean's List for high GPA"},
    {name: "National Technical Honors Society", description: "Nominated by CTE teacher and inducted as a member in 2016"},
    {name: "Youth of the Year", description: "Awarded by the Boys and Girls Club of St. Joseph County in 2014"},
]

const SKILLS = skills.map(item =>
    <li>{item}</li>
)

const EXPERIENCE = work.map(job =>
    <div className="mb-4"> <h4><b>{job.title}</b>, {job.company}</h4> <ul>
        <li>{job.description}</li>
        <li><b>{job.assets}</b></li>
    </ul> </div>
)

const EXTRA = extra.map(item =>
    <li>{item}</li>
)

const COURSES = courses.map(c =>
    <li>{c.name}<span className="float-right">{c.grade}</span></li>
)

const AWARDS = awards.map (a =>
    <div className="col-xs-12 col-sm-6 col-md-3">
        <h4>{a.name}</h4>
        <p>{a.description}</p>
    </div>
)

function Resume() {
    return (
        <div>

            <div className="row">

                <div className="col-xs-12 col-lg-6 my-3">
                    <h2>Experience</h2>
                    <ul>{EXPERIENCE} </ul>
                </div>


                <div className="col-xs-12 col-lg-6 my-3">
                    <h2>Education</h2>
                    <ul>
                        <div className="mb-4"> <h4><b>Computer Science, BS, 2022</b></h4> <ul>
                                <li>Luddy School of Informatics, Computing & Engineering<br/>Indiana University—Bloomington</li>
                                <li>Minors in <b className="theme-yellow">Business, Math, Sports Analytics</b></li>
                        </ul> </div>

                        <div> 
                            <h4>Courses</h4> 
                            <ul>{COURSES}</ul>
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