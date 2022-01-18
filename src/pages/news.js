import React from 'react';
import '../css/news.css';

import posts from '../data/news_content';

const NEWS = posts.map(p =>
    <div className="my-3">
        <div className="card">
            {p.image ? (
                <img className="card-img-top" src={p.image} alt={p.title} style={{border: "10px solid white"}}/>
            ) : (<></>)}
            <div className="card-body">
                <h3>{p.title}</h3>
                <p className="card-text">{p.description}</p>
                <p><small className="text-muted m-0">{p.date} | <a href={p.link}>Visit</a></small></p>
            </div>
        </div>
    </div>
    
)

const column1 = NEWS.slice(0, posts.length/2);
const column2 = NEWS.slice(posts.length/2, posts.length);

function News() {
    return (
        <>
        <div className="container">
            <h1 className='py-5'>News</h1>

            <div className="row">
                <div className="col-lg-6">{column1}</div>
                <div className="col-lg-6">{column2}</div>
            </div>
        </div>

        </>
    )
}

export default News;