import React from 'react';
import '../css/news.css';

import posts from '../data/news_content';

const NEWS = posts.map(p =>
    <div className="col-xs-12 my-5">
        <div className="news-post">
            <img className="pb-3" src={p.image}/>
            <h3>{p.title}</h3>
            <p>{p.date}</p>
            <p>{p.description}</p>
            <a href={p.link} target="_blank">Visit</a>

        </div>
    </div>
    
)

const column1 = NEWS.slice(0, posts.length/2 + 1);
const column2 = NEWS.slice(posts.length/2 + 1, posts.length);

function News() {
    return (
        <div>
            <h2>News</h2>
            <div className="row container-fluid">
                <div className="col-xs-12 col-lg-6">{column1}</div>
                <div className="col-xs-12 col-lg-6">{column2}</div>
            </div>
        </div>
    )
}

export default News;