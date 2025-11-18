import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Signup.css";


const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, register } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // ===== Handle Email/Password Signup =====
  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match! Please try again.");
      return;
    }

    setErrorMessage("");

    try {
      const userCredential = await register(email, password);
      const user = userCredential.user;
      alert(`Account created successfully! Welcome, ${name}!`);
      console.log("User created:", user);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(error.message || "Signup failed. Please try again!");
    }
  };

  // ===== Handle Google Sign-In =====
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signUpWithGmail();
      alert("Google Sign-Up successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google Sign-In error:", error);
      setErrorMessage("Google Sign-In failed. Please try again!");
    }
  };

  return (
    <div className="signup-section">
      <div className="signup-container">
        <div className="signup-wrapper">
          <h3 className="signup-title text-center">Create Account</h3>

          {/* ===== Signup Form ===== */}
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="signup-form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                className="signup-input"
              />
            </div>

            <div className="signup-form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                className="signup-input"
              />
            </div>

            <div className="signup-form-group">
              <input
                type="password"
                name="password"
                placeholder="Password *"
                required
                className="signup-input"
              />
            </div>

            <div className="signup-form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password *"
                required
                className="signup-input"
              />
            </div>

            {errorMessage && (
              <div className="signup-error">{errorMessage}</div>
            )}

            <div className="signup-form-group">
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </div>
          </form>

          {/* ===== Bottom Section ===== */}
          <div className="signup-bottom">
            <p className="signup-login-link">
              Already have an account?{" "}
              <Link to="/login" className="signup-login-text">
                Login
              </Link>
            </p>

            <div className="signup-or">
              <span>OR</span>
            </div>

            {/* ===== Social Signup ===== */}
            <h5 className="signup-social-title">Sign Up with Social Media</h5>
            <ul className="signup-social-list">
              <li>
                <a href="/" className="signup-social google" onClick={handleGoogleSignIn}>
                  <i className="icofont-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="/" className="signup-social github" onClick={(e) => e.preventDefault()}>
                  <i className="icofont-github"></i>
                </a>
              </li>
              <li>
                <a href="/" className="signup-social facebook" onClick={(e) => e.preventDefault()}>
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/" className="signup-social twitter" onClick={(e) => e.preventDefault()}>
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/" className="signup-social linkedin" onClick={(e) => e.preventDefault()}>
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="/" className="signup-social instagram" onClick={(e) => e.preventDefault()}>
                  <i className="icofont-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
