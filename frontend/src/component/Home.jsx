import React, { useState } from "react";
import { Plus, Edit, Trash, Menu, ThumbsUp, MessageCircle, Bell, X } from "lucide-react";
import "../component/Home.css"; // Import CSS file
import PostSection from "./PostSection.JSX";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MANIT</h1>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#">Create</a></li>
          <li><a href="#">Update</a></li>
          <li><a href="#">Delete</a></li>
        </ul>

        {/* Auth Buttons (Login/Signup) */}
        <div className="auth-buttons">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Sign Up</button>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${menuOpen ? "visible" : ""}`}>
        <a href="#">Create</a>
        <a href="#">Update</a>
        <a href="#">Delete</a>
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Sign Up</button>
      </div>

      {/* Action Buttons */}
      <div className="actions">
        <button className="btn create-btn"><Plus size={18} /> Create</button>
        <button className="btn update-btn"><Edit size={18} /> Update</button>
        <button className="btn delete-btn"><Trash size={18} /> Delete</button>
      </div>

      {/* Stories Section */}
      <div className="stories">
        {[1, 2, 3, 4, 5, 6, 7].map((story, index) => (
          <div key={index} className="story">
            <img src={`https://i.pravatar.cc/80?img=${index + 10}`} alt="Story" />
          </div>
        ))}
      </div>

      <PostSection></PostSection>
    </div>
  );
};

export default Home;
