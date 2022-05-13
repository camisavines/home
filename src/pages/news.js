import React from 'react';
import '../css/news.css';

import posts from '../data/news_content';

import timeline from '../data/timeline';

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
                <div className="col-sm-12">
                    <div className="timeline">

                        {posts.map(post => 
                            <div className={`tl-item ${post.item_classes}`}>
                                <div className={`tl-dot ${post.bar_color}`}></div>

                                <div className="tl-content" style={{paddingBottom: "25%"}}>
                                    <h6 className="text-muted" style={{marginTop: "0rem"}}>{post.date}</h6>

                                    <div className='row'>
                                        <div className='col-sm-12 col-lg-6 pb-4'>
                                            <h3 className="tl-title">{post.title}</h3>
                                            <p>{post.description}</p>
                                            <p><a href={post.link} target="_blank" rel="noopener noreferrer">View Article</a></p>
                                        </div>

                                        {post.image ?
                                            <div className="px-3">
                                                <img src={post.image} width="75%" alt="timeline_image" />
                                            </div>
                                        : null }
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

export default News;