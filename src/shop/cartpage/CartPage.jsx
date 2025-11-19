import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../assets/components/PageHeader";
import "./CartPage.css";
import CheckOutPage from "../checkoutpage/CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  //  Load cart items from localStorage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  //  Helper to calculate total per item
  const calculateTotalPrice = (item) => item.price * item.quantity;

  //  Helper to update local storage
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //  Increase quantity
  const handleIncrease = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  //  Decrease quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCart);
      updateLocalStorage(updatedCart);
    }
  };

  //  Remove item from cart
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  //  Cart subtotal
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + calculateTotalPrice(item),
    0
  );

  //  Order total
  const orderTotal = cartSubtotal;

  return (
    <div className="cart-page">
      <PageHeader title="Shop Cart" curPage="Cart Page" />

      <section className="cart container py-5">
        <div className="cart-wrapper">
          {/* --- Cart Table --- */}
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th className="cart-col-product">Product</th>
                  <th className="cart-col-price">Price</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-total">Total</th>
                  <th className="cart-col-remove">Remove</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="cart-product">
                        <div className="cart-product__info">
                          <div className="cart-product__thumb">
                            <Link to="/shop">
                              <img src={item.img} alt={item.name} />
                            </Link>
                          </div>
                          <div className="cart-product__name">
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </div>
                      </td>

                      <td className="cart-price">${item.price}</td>

                      <td className="cart-quantity">
                        <div className="cart-quantity__controls">
                          <button
                            className="qty-btn dec"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="qty-input"
                          />
                          <button
                            className="qty-btn inc"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="cart-total">
                        ${calculateTotalPrice(item).toFixed(2)}
                      </td>

                      <td className="cart-remove">
                        {/*  Fixed Delete Button */}
                        <button
                          onClick={() => handleRemoveItem(item)}
                          className="remove-btn"
                          title="Remove item"
                        >
                          <i className="icofont-ui-delete"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      🛒 Your cart is empty.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ------------ cart top ends ------------- */}
          {/* cart bottom */}
          <div className="cart-bottom">
            <div className="cart-checkout-box">
              <form className="coupon">
                <input
                  className="cart-page-input-text"
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Coupon code...."
                />
                <input type="submit" value={"Apply Coupon"} />
              </form>

              <form className="cart-checkout">
                <input type="submit" value="Update Cart" />
                <div>
                  <CheckOutPage />
                </div>
              </form>
            </div>

            {/* Shipping & Cart Totals Section */}
            <div className="shiping-box">
              <div className="row">
                {/* Left: Calculate Shipping */}
                <div className="calculate-shiping">
                  <h3>Calculate Shipping</h3>

                  <div className="outline-select">
                    <select>
                      <option value="uk">United Kingdom (UK)</option>
                      <option value="in">India</option>
                      <option value="us">United States</option>
                      <option value="bd">Bangladesh</option>
                      <option value="np">Nepal</option>
                    </select>
                    <span className="select-icon">
                      <i className="icofont-round-down"></i>
                    </span>
                  </div>

                  <div className="outline-select">
                    <select>
                      <option value="ny">New York</option>
                      <option value="ldn">London</option>
                      <option value="dhk">Dhaka</option>
                      <option value="del">New Delhi</option>
                    </select>
                    <span className="select-icon">
                      <i className="icofont-round-down"></i>
                    </span>
                  </div>

                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="Postcode / ZIP *"
                    className="cart-page-input-text"
                  />

                  <div className="shipping-select">
                    <button type="submit">Update Address</button>
                  </div>
                </div>

                {/* Right: Cart Totals */}
                <div className="cart-overview">
                  <h3>Cart Totals</h3>
                  <ul className="lab-ul">
                    <li>
                      <span className="pull-left">Cart Subtotal</span>
                      <p className="pull-right">$ {cartSubtotal.toFixed(2)}</p>
                    </li>
                    <li>
                      <span className="pull-left">Shipping and Handling</span>
                      <p className="pull-right">Free Shipping</p>
                    </li>
                    <li>
                      <span className="pull-left">Order Total</span>
                      <p className="pull-right">$ {orderTotal.toFixed(2)}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
