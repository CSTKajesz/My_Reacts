import React, { useEffect, useState } from "react";
import "./Blog.css";
import { blog1, blog2, blog3 } from '../../assets'
import posts from "./posts"

const Blog = () => {

    return (
        <section id="blog" className="pink">
            <div className="wrapper">
                <h2 className="light">Latest Posts</h2>
                <div className="content-container">
                    {/* Ahhoz, hogy elkerüljük a kódduplikálást, és minden egyes postot lemásoljuk és átírjuk használjunk map-et*/}
                    {/* Dinamikusan létrehozott posztok a 'posts' tömb alapján */}
                    {posts.map((post, index) => (
                        <div className="post" key={index}>
                            <div className="tag">{post.tag}</div>
                            <a href="#">
                                <img src={post.image} alt="" />
                            </a>
                            <a href="#">
                                <h3 className="post-title">{post.title}</h3>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="btn-container">
                    <a href="#" className="all-posts-btn">
                        All Posts
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Blog;
