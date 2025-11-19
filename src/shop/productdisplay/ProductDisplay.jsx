import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductDisplay.css";

const desc =
  "Energistia delivers tactical metrics after visionary appropriate transition enterprises and sources applications emerging PSD template.";

const ProductDisplay = ({ item }) => {
  // Destructure product info safely
  const { name, id, price, seller, ratingCount, img } = item;

  // Local states
  const [quantity, setQuantity] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  // Quantity control
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: quantity,
      size: size,
      color: color,
      coupon: coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      existingCart.push(product);
    }

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Reset form fields
    setQuantity(0);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  return (
    <div className="product-display p-3">
      <div className="product-info">
        {/* Product Name */}
        <h4 className="fw-bold text-uppercase mb-2">{name}</h4>

        {/* Rating with Stars */}
        <p className="rating mb-2 d-flex align-items-center gap-1">
          <i className="icofont-star text-warning"></i>
          <i className="icofont-star text-warning"></i>
          <i className="icofont-star text-warning"></i>
          <i className="icofont-star text-warning"></i>
          <i className="icofont-star text-warning"></i>
          <span className="ms-2 fw-semibold small">4.5</span>
          <span className="fw-semibold small ms-1">
            ({ratingCount} reviews)
          </span>
        </p>

        {/* Price & Seller */}
        <h4 className="text-primary mb-2">${price}</h4>
        <h6 className="text-muted mb-3">{seller}</h6>

        {/* Description */}
        <p className="text-secondary mb-3">{desc}</p>

        {/* Size & Color - Same Row */}
        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <select
              className="form-select"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option>Select Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Black</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>White</option>
            </select>
          </div>
        </div>

        {/* Quantity + Coupon Row */}
        <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap">
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>

          {/* Coupon Input */}
          <div className="flex-grow-1">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="form-control"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons in Row */}
        <div className="row mt-3 g-2">
          <div className="col-md-6">
            <button
              type="submit"
              className="pb-btn w-100"
              onClick={handleSubmit}
            >
              <span>Add to Cart</span>
            </button>
          </div>
          <div className="col-md-6">
            <Link
              to="/cart-page"
              className="pb-btn bg-primary text-white text-center w-100"
            >
              <span>Check Out</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
