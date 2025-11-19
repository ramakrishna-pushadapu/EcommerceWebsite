// src/shop/Search.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = ({ products, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredProducts(filtered);
    onFilter(filtered);
  };

  return (
    <div className="widget widget-search" style={{ position: 'relative' }}>
      <form className="search-wrapper mb-3" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>

      {/* Search dropdown results */}
      {isOpen && searchTerm && (
        <div
          className="search-results bg-white shadow border rounded position-absolute w-100"
          style={{ zIndex: 10, maxHeight: '300px', overflowY: 'auto' }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/shop/${product.id}`}
                className="d-flex gap-3 p-2 border-bottom text-dark text-decoration-none"
              >
                <div className="pro-thumb flex-shrink-0">
                  <img src={product.img} alt={product.name} width={70} height={70} className="rounded"/>
                </div>
                <div className="product-content">
                  <p className="mb-1 fw-semibold">{product.name}</p>
                  <small className="text-muted">${product.price}</small>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-muted small px-2 py-2 mb-0">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
