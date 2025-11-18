import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products
  </h2>
);

const desc = "We have the largest collection of products";

const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
  { iconName: "icofont-notification", text: "More than 2000 Merchants" },
  { iconName: "icofont-globe", text: "Buy Anything Online" },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchInput(term);

    const results = productData.filter((p) =>
      p.name.toLowerCase().includes(term)
    );

    setFilteredProducts(results);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content ">
          {title}
          {/* Search Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            <SelectedCategory select="all" />
            <input
              type="text"
              name="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />

            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>

          <p>{desc}</p>

          {/* Search Suggestions */}
          {searchInput && (
            <ul className="lab-ul bg-white text-black rounded p-3 mt-2 shadow-md">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, i) => (
                  <li key={i}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>
                ))
              ) : (
                <li>No products found.</li>
              )}
            </ul>
          )}

          {/* Banner Info */}
          <div className="banner-info mt-5 ">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {bannerList.map((item, i) => (
                <li key={i}>
                  <i className={item.iconName}></i>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
