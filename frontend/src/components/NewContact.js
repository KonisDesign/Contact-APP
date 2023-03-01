import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewContact() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Lastname: '',
    Firstname: '',
    Phone: '',
    Fav: '',
    Pic: '',
    Github: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:8888/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className='add-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Lastname">Lastname:</label>
        <input type="text" placeholder='Doe' name="Lastname" value={formData.Lastname} onChange={handleInputChange} required />
        <label htmlFor="Firstname">Firstname:</label>
        <input type="text" placeholder='John' name="Firstname" value={formData.Firstname} onChange={handleInputChange} required />
        <label htmlFor="Phone">Phone:</label>
        <input type="number"  placeholder='0610101010' name="Phone" value={formData.Phone} onChange={handleInputChange} required />
        <label htmlFor="Pic">Photo:</label>
        <input type="url"  placeholder='http://' name="Pic" value={formData.Pic} onChange={handleInputChange} />
        <label htmlFor="Github">Github:</label>
        <input type="url"  placeholder='http://' name="Github" value={formData.Github} onChange={handleInputChange} />
        <button className='primary-button' type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewContact;
