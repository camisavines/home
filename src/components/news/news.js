import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from "../../data/routes";

import posts from "../../data/news_content";
import news1 from '../../photos/news/news1.jpeg';
import news2 from '../../photos/news/news2.jpg';
import news3 from '../../photos/news/news3.jpg';
import news4 from '../../photos/news/news4.png';
import './news.css';

function NewsComponent() {
    return (
    <>
    <div className="news-component">
        <div className="container">

            <h2>News</h2>

            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="card">

                        <img className="card-img-top" src={news1} />
                        <div className="card-body">
                            <h5 className="card-title">New Players in Tech: Renaissance Women</h5>
                            <p className="card-text">Medium article written by, then coworker, Melina Sapiano. Highlights our time and impact working at South Bend Code School.</p>
                            <p className="card-text">
                                <small className="text-muted"><a href="https://medium.com/south-bend-code-school/new-players-in-tech-renaissance-women-d2d30a0ba18f">Full Article</a></small> <br/>
                                <small className="text-muted">March 7, 2019</small>
                            </p>
                        </div>

                    </div>
                </div>

                
                <div className="col-md-6 col-lg-4">
                    <div className="card">

                        <img className="card-img-top" src={news2}/>
                        <div className="card-body">
                            <h5 className="card-title">IND Next – Code For Career Sucess</h5>
                            <p className="card-text"><a href="http://www.indnext.com/career/meet-camisa-vines-code-for-career-success/">Click here to see full article.</a></p>
                            <p className="card-text">
                                <small className="text-muted">Jun 29, 2018</small>
                            </p>
                        </div>
                        
                    </div>
                </div>


                <div className="col-md-6 col-lg-4">
                    <div className="card">

                        <img className="card-img-top" src={news3}/>
                        <div className="card-body">
                            <h5 className="card-title">Camisa Vines: Making an IMPACT</h5>
                            <p className="card-text">Highlights my time competing for Indiana Intern of the Year. <a href="https://www.indianaintern.net/blog/2018/04/camisa-vines-making-impact/">Click here</a> to view full article.</p>
                            <p className="card-text">
                                <small className="text-muted">Feb 7, 2018</small>
                            </p>
                        </div>
                        
                    </div>
                </div>

            </div>

            <p type="button" className="btn"><Link to={ROUTES.NEWS}>More News</Link></p>
        </div>
    </div>
    </>
    )
}

export default NewsComponent;