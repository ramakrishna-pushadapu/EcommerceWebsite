import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import "../navitem/NavItems.css";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // Get user info from AuthContext
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => setHeaderFixed(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* ===== Mobile Header ===== */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link
              to="/sign-up"
              className="btn btn-warning text-dark fw-semibold px-3 py-2 rounded-2"
            >
              Create Account
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>

      {/* ===== Main Header ===== */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-Wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  {/*  Logo image from public folder */}
                  <img src="src/assets/images/logo/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>

            {/* Menu */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/" onClick={() => setMenuToggle(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" onClick={() => setMenuToggle(false)}>
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" onClick={() => setMenuToggle(false)}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setMenuToggle(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => setMenuToggle(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Buttons */}
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block">
                Log In
              </Link>

              {/* Mobile Menu Toggle */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* Mobile Info Toggle */}
            <div
              className="ellepsis-bar d-md-none"
              onClick={() => setSocialToggle(!socialToggle)}
            >
              <i className="icofont-info-square"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
