import React, { useEffect, useState } from "react";
import "./ShopCategory.css";

const ShopCategory = ({ filterItem, menuItems, selectedCategory, setProducts }) => {
  const [data, setData] = useState([]);

  // Fetch data from public/products.json
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  //  Ensure "All" appears only once
  const categories = menuItems.includes("All") ? menuItems : ["All", ...menuItems];

  return (
    <>
      <div className="category-header">
        <h5 className="ms-2">All Categories</h5>
      </div>

      <div className="category-buttons">
        {categories.map((Val, id) => (
          <button
            key={id}
            onClick={() => {
              if (Val === "All") {
                setProducts(data);
              } else {
                filterItem(Val);
              }
            }}
            className={`m-2 btn btn-outline-primary ${
              selectedCategory === Val ? "bg-warning text-dark" : ""
            }`}
          >
            {Val}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
