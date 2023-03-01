import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleClick = (param) => {
    navigate(`/${param}`);
  }

  return (
    <div className="container">
      {Array.isArray(posts) && posts.map(post => (
        <div className="card" id={post._id} key={post._id}>
          <button className="edit" onClick={() => handleClick(post._id)}><i className="fa-solid fa-pen"></i></button>
          <img src={!post.Pic ? process.env.PUBLIC_URL + `/images/profile.png` : post.Pic} alt="profile" />
          <h2>{post.Firstname} {post.Lastname}</h2>
          <p>{post.Phone}</p>
          <div className="row">
            {post.Github ? <a href={post.Github} target="_blank"><i className="fa-brands fa-github"></i></a> : ""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
