import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from "../../data/routes";

import posts from "../../data/news_content";
import './news.css';

function NewsComponent() {
    return (
    <>
        <div className="news-component">
            <h2>News</h2>

            <div className="row">
                {
                    posts.map(p => 
                        <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={p.image} />
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.description}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                    )
                }
            </div>
        </div>
    </>
    )
}

export default NewsComponent;