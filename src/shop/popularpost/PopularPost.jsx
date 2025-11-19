import React from "react";
import { Link } from "react-router-dom";
import "./PopularPost.css";

const title = "Most Popular Posts";

const postList = [
  {
    id: 1,
    imgUrl: "/src/assets/images/blog/10.jpg",
    imgAlt: "rajibraj91",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05, 2022",
  },
  {
    id: 2,
    imgUrl: "/src/assets/images/blog/11.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05, 2022",
  },
  {
    id: 3,
    imgUrl: "/src/assets/images/blog/12.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05, 2022",
  },
  {
    id: 4,
    imgUrl: "/src/assets/images/blog/09.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05, 2022",
  },
];

const PopularPost = () => {
  return (
    <div className="widget widget-post p-3">
      {/* Header */}
      <div className="widget-header mb-3">
        <h5 className="title fw-bold text-dark">{title}</h5>
      </div>

      {/* Posts */}
      <ul className="widget-wrapper list-unstyled">
        {postList.map((blog, i) => (
          <li key={i} className="d-flex align-items-center mb-3">
            {/* Thumbnail */}
            <div className="post-thumb me-3">
              <Link to={`/blog/${blog.id}`}>
                <img src={blog.imgUrl} alt={blog.imgAlt} className="img-fluid rounded"
                  style={{ width: "80px",height: "80px",objectFit: "cover",borderRadius: "8px",}}
                />
              </Link>
            </div>

            {/* Content */}
            <div className="post-content">
              <Link to={`/blog/${blog.id}`} className="text-decoration-none">
                <h6
                  className="mb-1 fw-bold"
                  style={{ color: "#222", fontWeight: "700" }}
                >
                  {blog.title}
                </h6>
              </Link>
              <span className="text-muted small">{blog.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
