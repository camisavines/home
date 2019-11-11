import React from 'react';
import news from "../components/newsContent";
import "../styles/index.css";

function News() {
    const newsPosts = news.map( post =>
        <div className="col-xs-12 col-sm-4 my-3 news-post">
            <div class="card">
                <img class="card-img-top news-image" src={post.image} alt="card cap" />
                <div class="card-body">
                    <h3>{post.title}</h3>
                    {/* <p class="card-text">{post.description}</p> */}
                </div>
            </div>
        </div>
    )

    return(
        <div className="row py-5 justify-center container-fluid">
            <h1 className="col-12 text-center text-white">News</h1>
            {newsPosts}
        </div>
    )
}

export default News;