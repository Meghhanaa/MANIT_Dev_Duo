import React from "react";
import { Link } from "react-router-dom";
import "../component/Auth.css"; // Common CSS for Login and Signup

const Sign = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-btn">Sign Up</button>
        <p className="auth-text">
          Already have an account? <Link to="/login" className="auth-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Sign;
