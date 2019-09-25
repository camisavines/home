import React from 'react';
import news from "../components/newsContent";

function News() {
    const newsPosts = news.map( post =>
        <div className="col-xs-12 col-sm-6 my-3">
            <div class="card">
                <img class="card-img-top" src={post.image} alt="Card image cap" />
                <div class="card-body">
                    <h2>{post.title}</h2>
                    <p class="card-text">{post.description}</p>
                </div>
            </div>
        </div>
    )

    return(
        <div className="row py-5 justify-center container-fluid">{newsPosts}</div>
    )
}

export default News;