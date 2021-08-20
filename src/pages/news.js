import React from 'react';
import '../css/news.css';

import Hero from "../components/hero/hero";
import posts from '../data/news_content';

const NEWS = posts.map(p =>
    <div className="col-xs-12 my-5">
        <div className="card">
            {p.image ? (
                <img className="card-img-top" src={p.image} alt={p.title }/>
            ) : (<></>)}
            <div className="card-body">
                <h3>{p.title}</h3>
                <p className="card-text">{p.description}</p>
                <p><small className="text-muted"><a href={p.link} target="_blank">Visit</a></small></p>
                <p><small className="text-muted">{p.date}</small></p>
            </div>
        </div>
    </div>
    
)

const column1 = NEWS.slice(0, posts.length/2);
const column2 = NEWS.slice(posts.length/2, posts.length);

function News() {
    return (
        <>
        <Hero />
        <div className="container">
            {/* <h2>News</h2> */}
            <div className="row container-fluid">
                <div className="col-xs-12 col-lg-6">{column1}</div>
                <div className="col-xs-12 col-lg-6">{column2}</div>
            </div>
        </div>
        </>
    )
}

export default News;