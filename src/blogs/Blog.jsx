import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../assets/components/PageHeader";
import blogdata from "../utilis/blogdata";
import "../blog/Blog.css";

const Blog = () => {
  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Blog Page" curPage="Blogs" />

      {/* Blog Section */}
      <div className="blog-page section-padding bg-light">
        <div className="container">
          <div className="blog-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              {blogdata.map((blog, i) => (
                <div key={i} className="col">
                  <div className="blog-card">
                    <div className="blog-card-inner">
                      
                      {/* Blog Thumbnail */}
                      <div className="blog-thumbnail">
                        <Link to={`/blog/${blog.id}`}>
                          <img
                            src={blog.imgUrl}
                            alt={blog.title}
                            className="img-fluid"
                          />
                        </Link>
                      </div>

                      {/* Blog Content */}
                      <div className="blog-content">
                        <Link to={`/blog/${blog.id}`}>
                          <h4 className="blog-title">{blog.title}</h4>
                        </Link>

                        {/* Meta Info */}
                        <div className="blog-meta">
                          <ul className="meta-list">
                            {blog.metaList.map((val, j) => (
                              <li key={j}>
                                <i className={val.iconName}></i> {val.text}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="blog-description">{blog.desc}</p>
                      </div>

                      {/* Blog Footer */}
                      <div className="blog-footer">
                        <div className="footer-left">
                          <Link
                            to={`/blog/${blog.id}`}
                            className="read-more-btn"
                          >
                            {blog.btnText}
                            <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                        <div className="footer-right">
                          <i className="icofont-comment"></i>
                          <span className="comment-count">
                            {blog.commentCount}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
