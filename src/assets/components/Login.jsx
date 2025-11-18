import React, { useContext, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Login.css"; 

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        alert("Login successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setErrorMessage("Invalid email or password!");
      });
  };

  const handleGoogleSignIn = () => {
    signUpWithGmail()
      .then(() => {
        alert("Google Sign-In successful!");
        navigate(from, { replace: true });
      })
      .catch(() => {
        setErrorMessage("Google Sign-In failed. Please try again!");
      });
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Login</h2>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
              />
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password *"
                required
              />
            </div>

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" /> Remember Me
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              Login Now
            </button>
          </form>

          <div className="login-footer">
            <p className="signup-text">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="signup-link">
                Sign Up
              </Link>
            </p>

            <div className="divider">
              <span>OR</span>
            </div>

            <h5 className="social-title">Login with Social Media</h5>
            <ul className="social-list">
              <li>
                <button
                  type="button"
                  className="social-btn google"
                  onClick={handleGoogleSignIn}
                >
                  <i className="icofont-google-plus"></i>
                </button>
              </li>
              <li>
                <button type="button" className="social-btn github">
                  <i className="icofont-github"></i>
                </button>
              </li>
              <li>
                <button type="button" className="social-btn facebook">
                  <i className="icofont-facebook"></i>
                </button>
              </li>
              <li>
                <button type="button" className="social-btn twitter">
                  <i className="icofont-twitter"></i>
                </button>
              </li>
              <li>
                <button type="button" className="social-btn linkedin">
                  <i className="icofont-linkedin"></i>
                </button>
              </li>
              <li>
                <button type="button" className="social-btn instagram">
                  <i className="icofont-instagram"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
