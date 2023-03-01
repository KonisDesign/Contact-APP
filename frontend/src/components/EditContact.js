import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteContact from './DeleteContact';

const EditContact = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        Lastname: "",
        Firstname: "",
        Phone: "",
        Fav: "",
        Pic: "",
    });

    const { id } = useParams();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get("http://localhost:8888/");
        setPosts(response.data);
    };

    const postToEdit = posts.find((post) => post._id === id);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost({...newPost, [name]: value});
    };

    const check = () => {
        if (!newPost.Lastname) {
            newPost.Lastname = postToEdit.Lastname;
        }
        if (!newPost.Firstname) {
            newPost.Firstname = postToEdit.Firstname;
        }
        if (!newPost.Phone) {
            newPost.Phone = postToEdit.Phone;
        }
        if (!newPost.Fav) {
            newPost.Fav = postToEdit.Fav;
        }
        if (!newPost.Pic) {
            newPost.Pic = postToEdit.Pic;
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        check();

        const response = await axios.put(`http://localhost:8888/${id}`, newPost);
        setPosts(posts.map((post) => (post._id === response.data._id ? response.data : post)));
        setNewPost({
            Lastname: "",
            Firstname: "",
            Phone: "",
            Fav: "",
            Pic: "",
        });
        navigate('/');
    };

    if (!postToEdit) {
        return <div>Contact not found</div>;
    }

    return (
        <div className="add-container">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="Lastname">Lastname:</label>
                <input type="text" name="Lastname" value={newPost.Lastname || postToEdit.Lastname} onChange={handleInputChange} />

                <label htmlFor="Firstname">Firstname:</label>
                <input type="text" name="Firstname" value={newPost.Firstname || postToEdit.Firstname} onChange={handleInputChange} />

                <label htmlFor="Phone">Phone:</label>
                <input type="number" name="Phone" value={newPost.Phone || postToEdit.Phone} onChange={handleInputChange} />

                <label htmlFor="Pic">Photo:</label>
                <input type="url" name="Pic" value={newPost.Pic || postToEdit.Pic} onChange={handleInputChange} />
                <div className="row">
                <button className="primary-button" type="submit">Update</button>
                <DeleteContact />
                </div>
            </form>
        </div>
    );
};

export default EditContact;
