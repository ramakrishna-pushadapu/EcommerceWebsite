import React from 'react';
import { Link } from 'react-router-dom';
import Ratting from '../../assets/home/Ratting'; 
import "../productscards/ProductCards.css"

const ProductCards = ({ GridList, products = [] }) => {   
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {products.map((product, i) => (
        <div key={product.id || i} className='col-lg-4 col-md-6 col-12'>
            <div className='product-item'>

            {/* Product Image */}
            <div className='product-thumb'>
              <div className='pro-thumb'>
                <img 
                  src={product.img || '/images/default.png'} 
                  alt={product.name || `Product ${i + 1}`} 
                />
              </div>

              {/* Product Action Links */}
              <div className='product-action-link'>
                <Link to={`/shop/${product.id}`}>
                  <i className='icofont-eye'></i>
                </Link>
                <button type='button'>
                  <i className='icofont-heart'></i>
                </button>
                <Link to='/cart-page'>
                  <i className='icofont-cart-alt'></i>
                </Link>
              </div>
            </div>

            {/* Product Content */}
            <div className='product-content'>
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className='productRating'>
                <Ratting />
              </p>
              <h6>${product.price}</h6>
            </div>
          </div>
          <div className='product-list-item'>

            {/* Product Image */}
            <div className='product-thumb'>
              <div className='pro-thumb'>
                <img 
                  src={product.img || '/images/default.png'} 
                  alt={product.name || `Product ${i + 1}`} 
                />
              </div>

              {/* Product Action Links */}
              <div className='product-action-link'>
                <Link to={`/shop/${product.id}`}>
                  <i className='icofont-eye'></i>
                </Link>
                <button type='button'>
                  <i className='icofont-heart'></i>
                </button>
                <Link to='/cart-page'>
                  <i className='icofont-cart-alt'></i>
                </Link>
              </div>
            </div>

            {/* Product Content */}
            <div className='product-content'>
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className='productRating'>
                <Ratting />
              </p>
              <h6>${product.price}</h6>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
 