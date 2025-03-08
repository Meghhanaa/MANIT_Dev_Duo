import React, { useEffect, useState } from "react";
import { ThumbsUp, MessageCircle, Bell } from "lucide-react";
import '../component/Post.css';

const PostSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulated API call
    const fetchPosts = async () => {
      const data = [
        {
          id: 1,
          title: "Delicious Butter Chicken",
          content: "A rich and creamy tomato-based curry with tender chicken pieces.",
          image: "https://i.pinimg.com/736x/da/dc/64/dadc64c99d75fa17597ce8c1d043c9cc.jpg",
          caption: "A mouth-watering delight loved by all!",
          comments: ["Looks so delicious!", "My favorite dish!", "Can't wait to try this recipe!"],
        },
        {
          id: 2,
          title: "Paneer Tikka Masala",
          content: "Grilled paneer cubes cooked in spicy, flavorful masala.",
          image: "https://i.pinimg.com/736x/da/dc/64/dadc64c99d75fa17597ce8c1d043c9cc.jpg",
          caption: "A perfect vegetarian alternative with a smoky flavor!",
          comments: ["Paneer is love!", "I want the recipe!", "Looks so tempting!"],
        },
        {
          id: 3,
          title: "Chole Bhature",
          content: "Spicy chickpea curry served with deep-fried bread.",
          image: "https://i.pinimg.com/736x/da/dc/64/dadc64c99d75fa17597ce8c1d043c9cc.jpg",
          caption: "A classic North Indian dish full of flavors!",
          comments: ["Best breakfast ever!", "So yummy!", "I want to eat this now!"],
        },
      ];
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen ">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Popular Recipes</h1>
      <div className="scroll-container">
        <div className="grid">
          {posts.map((post) => (
            <div key={post.id} className="bg-white">
              <img src={post.image} alt={post.title} className="post-image" />
              <p className="caption">{post.caption}</p>
              <div className="p-6">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
              <div className="comments">
                {post.comments.map((comment, index) => (
                  <p key={index} className="comment">💬 {comment}</p>
                ))}
              </div>
              <div className="post-footer">
                <button className="icon-btn"><ThumbsUp size={20} /> Like</button>
                <button className="icon-btn"><MessageCircle size={20} /> Comment</button>
                <button className="icon-btn"><Bell size={20} /> Subscribe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostSection;
