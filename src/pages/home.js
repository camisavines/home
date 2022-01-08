import React from 'react';

import timeline from '../data/timeline';
import '../css/timeline.css';


const Home = () => {
    return (
    <>
        {/* Top Section */}
        <section className="home-hero">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-10">
                        <h1 style={{fontSize: "4em"}}>Hi, I'm Camisa</h1>
                        <h4>Student and Software Developer</h4>
                    </div>
                </div>
            </div>
        </section>


        {/* Timeline section */}
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="timeline">

                            {timeline.map(t => 
                                <div className={`tl-item ${t.item_classes}`}>
                                    <div className={`tl-dot ${t.bar_color}`}></div>
                                    <div className="tl-content" style={{paddingBottom: "15%"}}>
                                        <h6 className="text-muted" style={{marginTop: "0rem"}}>{t.date}</h6>
                                        <h3>{t.title}</h3>
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-6 pb-4">
                                                <p>{t.content}</p>
                                                <p><a href={t.link} target="_blank" rel="noopener noreferrer">{t.linkText}</a></p>
                                                <div className="tl-date text-muted mt-1">{t.subtexts.map(t => { return <>{t}<br/></>})}</div>
                                            </div>

                                            {t.image ? 
                                                <div className="col-sm-12 col-lg-8 col-xl-6">
                                                    <img src={t.image} width="100%" alt="timeline_image" />
                                                </div>
                                            : null}
                                        </div>
                                    </div>
                                </div>
                            )}
                        
                    </div>
                </div>
            </div>
        </div>


        {/* <section>
            <div className="container" style={{marginTop: "3rem", marginBottom: "3rem"}}>
                <h2>Skills</h2>

                <div className='row my-4'>
                    <div className='col-6 col-md-3'>
                        <p><b>WebDev</b></p>
                    </div>
                    <div className='col-6 col-md-6'>
                        <p>HTML, CSS, JavaScript, ReactJs, Responsive Web Design, Bootstrap, Tailwind, Ruby on Rails</p>
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
                        <p>Github, AWS EC2, Docker</p>
                    </div>
                </div>

                <div className='row my-4'>
                    <div className='col-6 col-md-3'>
                    <p><b>Other Skills</b></p>
                    </div>
                    <div className='col-6 col-md-6'>
                        <p>Organization, Teamwork, Leadership, Written and Verbal Communication, Reseach & Documentation, Googling</p>
                    </div>
                </div>
            </div>
        </section> */}


        {/* <section>
            <div className="container"  style={{marginTop: "10rem", paddingBottom: "5rem"}}>
                    <h2 className="my-5">More About Me</h2>
                <div className="row pb-5 d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <img src={me} width="100%"  alt="me" style={{borderRadius: "10px"}}/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-8 pt-4">
                        <h5>5 things about me:</h5>
                        <ol style={{lineHeight:"1.75em"}}>
                            <li>I am a kid at heart</li>
                            <li>I have two beautiful dogs, so dogs over cats!</li>
                            <li>When I'm not in school, I'm typically streaming a new movie or tv series.</li>
                            <li>In my freetime, I enjoy traveling, trying new foods, movies, music and art.</li>
                            <li>Recently, I've scratched Hawai'i off of my travel bucket list and I'm always thinking about my next big adventure.</li>
                        </ol>
                        <p>Too see even more random stuff about me (and pictures of my dogs), vist my <Link to={ROUTES.ABOUT}>about</Link> page.</p>
                        
                    </div>
                </div>
            </div>
        </section> */}

    </>
    )
}

export default Home;