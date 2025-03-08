import React, { useState } from "react";
import { Plus, Edit, Trash, Menu, ThumbsUp, MessageCircle, Bell } from "lucide-react";
import "../component/Home.css"; // Import CSS file

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MANIT</h1>

        {/* Auth Buttons (Login/Signup) */}
        <div className="auth-buttons">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Sign Up</button>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={28} />
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${menuOpen ? "visible" : ""}`}>
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

      {/* Posts Section */}
      <div className="posts">
        {[1, 2, 3, 4].map((post, index) => (
          <div key={index} className="post">
            <div className="post-header">
              <img src={`https://i.pravatar.cc/50?img=${index + 5}`} alt="User" className="profile-pic" />
              <h3 className="username">User {index + 1}</h3>
            </div>
            <img className="post-image" src={`https://source.unsplash.com/random/600x400?sig=${index}`} alt="Post" />
            <div className="post-footer">
              <button className="icon-btn"><ThumbsUp size={20} /> Like</button>
              <button className="icon-btn"><MessageCircle size={20} /> Comment</button>
              <button className="icon-btn"><Bell size={20} /> Subscribe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
