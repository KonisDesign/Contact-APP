import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      {Array.isArray(posts) && posts.map(post => (
        <div key={post._id}>
          <h2>{post.Firstname}</h2>
          <p>{post.Phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
