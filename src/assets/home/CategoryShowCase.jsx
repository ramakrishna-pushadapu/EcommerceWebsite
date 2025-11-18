import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ratting from "./Ratting";

// Import product images
import img01 from "../../assets/images/categoryTab/01.jpg";
import img02 from "../../assets/images/categoryTab/02.jpg";
import img03 from "../../assets/images/categoryTab/03.jpg";
import img04 from "../../assets/images/categoryTab/04.jpg";
import img05 from "../../assets/images/categoryTab/05.jpg";
import img06 from "../../assets/images/categoryTab/06.jpg";
import img07 from "../../assets/images/categoryTab/07.jpg";
import img08 from "../../assets/images/categoryTab/08.jpg";



// Import shape icons
import shapeIcon1 from "../../assets/images/shape-img/icon/01.png";
import shapeIcon2 from "../../assets/images/shape-img/icon/02.png";

const title = "Our Products";

const ProductData = [
  {
    imgUrl: img01,
    cate: "Shoes",
    title: "Nike Premier X",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: img02,
    cate: "Bags",
    title: "Asthetic Bags",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: img03,
    cate: "Phones",
    title: "iPhone 12",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: img04,
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: img05,
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: img06,
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: img07,
    cate: "Bags",
    title: "Look Less Chanel Bag",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: img08,
    cate: "Shoes",
    title: "Casual Sneakers",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (categItem) => {
    if (categItem === "All") {
      setItems(ProductData);
      return;
    }
    const updatedItems = ProductData.filter((cur) => cur.cate === categItem);
    setItems(updatedItems);
  };

  return (
    <div className="course-section style-3 padding-tb">
      {/* shapes */}
      <div className="course-shape one">
        <img src={shapeIcon1} alt="shape icon" />
      </div>
      <div className="course-shape two">
        <img src={shapeIcon2} alt="shape icon" />
      </div>

      <div className="container">
        {/* section header */}
        <div className="section-header text-center mb-5">
          <h2 className="title">{title}</h2>

          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => filterItem("All")}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>

        {/* products */}
        <div className="Section-Wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3">
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt={product.title} />

                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-review">
                          <Ratting />
                        </div>
                      </div>
                    </div>

                    {/* content */}
                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h6>{product.title}</h6>
                      </Link>

                      <div className="course-footer">
                        <div className="course-author">
                          <Link to="/" className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">{product.price}</div>
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
  );
};

export default CategoryShowCase;
