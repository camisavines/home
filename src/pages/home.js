import React from 'react';

import timeline from '../data/timeline';
import camisa from "../photos/headshot.jpg";
import '../css/timeline.css';


const Home = () => {
    return (
    <>
        {/* Top Section */}
        <section className="home-hero">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 pb-5">
                        <h1 style={{fontSize: "4em"}}>Hi, I'm Camisa</h1>
                        <h4>Student and Software Developer</h4>
                    </div>
                    <div className="col-md-6 d-flex text-center align-items-center justify-content-center">
                        <div className="w-75" style={{
                            backgroundImage: `url(${camisa})`, 
                            backgroundRepeat: "no-repeat", 
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "50%", 
                            paddingTop: "75%"}}>
                        </div>
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

    </>
    )
}

export default Home;