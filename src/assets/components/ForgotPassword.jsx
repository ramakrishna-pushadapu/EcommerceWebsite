import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const auth = getAuth(app);

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      // Send password reset email (simple version)
      await sendPasswordResetEmail(auth, email);

      setMessage("Password reset email sent successfully!");
      setEmail("");
    } catch (error) {
      console.error("Reset error:", error);

      if (error.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="auth-section">
      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">Forgot Password</h2>
          <p className="auth-text">
            Enter your registered email to reset your password.
          </p>

          <form onSubmit={handleReset} className="auth-form">
            <div className="form-field">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {message && <p className="success-text">{message}</p>}
            {error && <p className="error-text">{error}</p>}

            <button type="submit" className="auth-btn">
              Send Reset Link
            </button>
          </form>

          <div className="auth-footer">
            <p className="auth-text">
              Remembered your password?{" "}
              <Link to="/login" className="auth-link">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
