import React from "react";
import "../css/news.css";

import posts from "../data/news_content";

function News() {
  return (
    <>
      <div className="container">
        <h1 style={{paddingBottom: "5rem"}}>News</h1>
        <div className="row">
          <div className="col s12">
            <div className="timeline">
              {posts.map((post) => (
                <div className={`tl-item ${post.item_classes}`}>
                  <div className={`tl-dot ${post.bar_color}`}></div>

                  <div className="tl-content" style={{ paddingBottom: "25%" }}>
                    <h6 className="text-muted" style={{ marginTop: "0rem" }}>
                      {post.date}
                    </h6>

                    <div className="row">
                      <div className="col s12 l6">
                        <h3 className="tl-title">{post.title}</h3>
                        <p>{post.description}</p>
                        <p style={{paddingBottom:"1rem"}}>
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Article
                          </a>
                        </p>
                      </div>

                      {post.image ? (
                        <div>
                          <img
                            src={post.image}
                            width="75%"
                            alt="timeline_image"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { News };
