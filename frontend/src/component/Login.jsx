import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-btn">Login</button>
        <p className="auth-text">
          Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
