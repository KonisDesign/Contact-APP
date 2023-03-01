import React from 'react'
import { useNavigate } from 'react-router-dom';

function NewContactBtn() {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new');
  };

  return (
    <div><button className='new' onClick={handleClick}><i className="fa-solid fa-plus"></i></button></div>
  )
}


export default NewContactBtn;