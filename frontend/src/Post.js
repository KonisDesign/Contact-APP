import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get('http://localhost:8888/');
      setPosts(result.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      {Array.isArray(posts) && posts.map(post => (
        <div className="card" key={post._id}>
          <img src={!post.Pic ? process.env.PUBLIC_URL + `/images/profile.png` : post.Pic} alt="profile"/>
          <h2>{post.Lastname} {post.Firstname}</h2>
          <p>{post.Phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
