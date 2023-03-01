import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const DeleteContact = ({ contact, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await axios.delete(`http://localhost:8888/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }

    setIsDeleting(false);
  };

  return (
    <div>
      <button className='secondary-button' onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Suppression en cours...' : ''}<i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default DeleteContact;
