import React, { useState } from "react";
import "./Review.css";

//  Review List Data
const ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Shilpa",
    date: "February 25, 2025",
    desc: "Excellent quality and comfortable fit. Totally worth it!",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Priya",
    date: "March 15, 2025",
    desc: "The fabric is breathable and perfect for summer. Loved it!",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "June 10, 2022",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme SEO PSD portal monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "June 10, 2022",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme SEO PSD portal monetize covalent leadership after without resource.",
  },
];

//  Rating Component
const Rating = ({ rating, setRating }) => {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`icofont-star ${
            rating >= star ? "text-warning" : "text-muted"
          }`}
          onClick={() => setRating(star)}
          style={{ cursor: "pointer", marginRight: "4px", fontSize: "18px" }}
        ></i>
      ))}
    </div>
  );
};

// Review Component
const Review = () => {
  const [reviewShow, setReviewShow] = useState("desc");
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [reviews, setReviews] = useState(ReviewList);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle review submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      imgUrl: "/images/instructor/default.jpg",
      imgAlt: "Client thumb",
      name: formData.name,
      date: new Date().toLocaleDateString(),
      desc: formData.message,
      rating,
    };
    setReviews([newReview, ...reviews]);
    setFormData({ name: "", email: "", message: "" });
    setRating(0);
    alert("Thank you for your review!");
  };

  const reviewTitle =
    reviewShow === "rev" ? "Add a Review" : "Product Description";

  return (
    <div className="review-section mt-5">
      {/*  Tabs with Orange Active Background */}
      <ul
        className="review-nav lab-ul d-flex list-unstyled mb-4"
        style={{ gap: "10px" }}
      >
        {/*  Description Tab */}
        <li
          className="px-4 py-2 rounded"
          style={{
            cursor: "pointer",
            backgroundColor: reviewShow === "desc" ? "#ff7f00" : "#002c5bff",
            color: "#fff",
            fontWeight: "600",
            border: "1px solid",
            borderColor: reviewShow === "desc" ? "#ff7f00" : "#002c5bff",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px",
          }}
          onClick={() => setReviewShow("desc")}
        >
          Description
        </li>

        {/*  Reviews Tab */}
        <li
          className="px-4 py-2 rounded"
          style={{
            cursor: "pointer",
            backgroundColor: reviewShow === "rev" ? "#ff7f00" : "#002c5bff",
            color: "#fff",
            fontWeight: "600",
            border: "1px solid",
            borderColor: reviewShow === "rev" ? "#ff7f00" : "#002c5bff",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px",
          }}
          onClick={() => setReviewShow("rev")}
        >
          Reviews ({reviews.length})
        </li>
      </ul>

      {/* Section Heading */}
      <div style={{ marginTop: "20px" }}>
        {reviewShow === "desc" && (
          <h5 className="mb-3 text-start">Product Description</h5>
        )}
      </div>

      {/*  Description Section */}
      {reviewShow === "desc" && (
        <div className="review-content description text-center">
          <div className="container">
            {/*  Top Matter */}
            <p className="mb-4 text-start">
              Experience the perfect blend of comfort and timeless style with
              our Classic Cotton T-Shirt. Crafted from soft, breathable 100%
              cotton, this tee ensures lasting comfort and a perfect fit for
              all-day wear. Its versatile design makes it an ideal choice for
              casual outings, workouts, or simply relaxing at home.
            </p>

            {/*  Middle Section — Left Text + Right Image */}
            <div className="row align-items-center my-4">
              {/* Left Text */}
              <div className="col-md-7 text-start">
                <h5 className="mb-3">Why You’ll Love It</h5>
                <p>
                  Designed for both comfort and durability, this T-shirt is the
                  perfect everyday essential. Whether you’re heading to the gym,
                  lounging at home, or going for a casual outing, its premium
                  fabric ensures breathability and softness all day long.
                </p>
                <ul className="lab-ul">
                  <li>Made from 100% pure cotton for superior comfort.</li>
                  <li>Lightweight and breathable fabric.</li>
                  <li>Durable stitching and shape retention.</li>
                  <li>Ideal for both men and women.</li>
                </ul>
              </div>

              {/* Right Image */}
              <div className="col-md-5 text-center">
                <img
                  src="/src/assets/images/shop/01.jpg"
                  alt="Product"
                  className="img-fluid rounded shadow-sm"
                  style={{
                    maxWidth: "350px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>

            {/*  Bottom Matter */}
            <p className="mt-4 text-start">
              This T-shirt isn’t just clothing—it’s your go-to comfort wear that
              fits every mood and every day. Elevate your basics with this
              premium cotton piece that feels as good as it looks. Pair it with
              jeans, shorts, or joggers for a clean, casual look that never goes
              out of style.
            </p>
          </div>
        </div>
      )}

      {/*  Reviews Section */}
      {reviewShow === "rev" && (
        <div className="review-content">
          <h5 className="mb-4">Customer Reviews</h5>

          {/* Review List */}
          <div className="review-list mb-4">
            {reviews.map((review, index) => (
              <div key={index} className="review-item d-flex mb-3">
                <img
                  src={review.imgUrl}
                  alt={review.imgAlt}
                  className="rounded-circle me-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="mb-1">{review.name}</h6>
                  <small className="text-muted">{review.date}</small>
                  <p className="mt-2 text-secondary">{review.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Review Form */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title mb-3">
                <h5>{reviewTitle}</h5>
              </div>

              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-4 col-12 d-flex align-items-center">
                  <span className="me-2">Your Rating:</span>
                  <Rating rating={rating} setRating={setRating} />
                </div>

                <div className="col-12 position-relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="8"
                    placeholder="Type your message here..."
                    className="form-control pe-5"
                    required
                  ></textarea>

                  <button
                    type="button"
                    className="position-absolute top-0 end-0 mt-2 me-2 border-0 bg-transparent"
                    onClick={() => setFormData({ ...formData, message: "" })}
                  >
                    <i className="icofont-refresh text-secondary"></i>
                  </button>
                </div>

                <div className="col-12">
                  <button type="submit" className="lab-btn">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
